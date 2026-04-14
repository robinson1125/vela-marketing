(function () {
  'use strict';

  var script = document.currentScript;
  var clinicId = script && script.getAttribute('data-clinic-id');
  if (!clinicId) { console.warn('vela-chat: data-clinic-id required'); return; }

  var apiHost = script.getAttribute('data-api') || 'https://vjsrsxkjpeknstxyzpkm.supabase.co/functions/v1';
  var color = script.getAttribute('data-color') || '#111827';
  var greeting = script.getAttribute('data-greeting') || "Hi there! 👋 How can we help you today?";
  var title = script.getAttribute('data-title') || 'Chat with us';
  var position = script.getAttribute('data-position') || 'bottom-right';

  // Visitor identity
  var storageKey = 'vela_chat_' + clinicId;
  var visitorId = localStorage.getItem(storageKey);
  if (!visitorId) { visitorId = 'v-' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem(storageKey, visitorId); }

  var isOpen = false;
  var messages = [];
  var pollTimer = null;
  var lastPollTime = null;
  var unreadCount = 0;

  // ── Styles ──
  var style = document.createElement('style');
  style.textContent = '\
    .vc-btn{position:fixed;z-index:999998;width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,.2);transition:transform .2s,box-shadow .2s}\
    .vc-btn:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(0,0,0,.25)}\
    .vc-btn svg{width:28px;height:28px;fill:white}\
    .vc-badge{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;border-radius:10px;background:#EF4444;color:white;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 5px;font-family:system-ui}\
    .vc-panel{position:fixed;z-index:999999;width:380px;height:520px;max-height:80vh;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.2);opacity:0;transform:translateY(20px) scale(.95);transition:opacity .25s ease,transform .25s ease;pointer-events:none;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}\
    .vc-panel.vc-show{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}\
    .vc-header{padding:16px 20px;color:white;display:flex;align-items:center;justify-content:space-between}\
    .vc-header h3{font-size:15px;font-weight:700;margin:0}\
    .vc-header button{background:none;border:none;color:white;cursor:pointer;opacity:.7;font-size:20px}\
    .vc-header button:hover{opacity:1}\
    .vc-msgs{flex:1;overflow-y:auto;padding:16px;background:#f9fafb;display:flex;flex-direction:column;gap:8px}\
    .vc-msg{max-width:80%;padding:10px 14px;border-radius:16px;font-size:13px;line-height:1.4;word-wrap:break-word}\
    .vc-msg-in{align-self:flex-start;background:white;border:1px solid #e5e7eb;border-bottom-left-radius:4px;color:#1f2937}\
    .vc-msg-out{align-self:flex-end;color:white;border-bottom-right-radius:4px}\
    .vc-msg-auto{font-style:italic;opacity:.85}\
    .vc-time{font-size:10px;color:#9ca3af;margin-top:2px}\
    .vc-greeting{align-self:flex-start;background:white;border:1px solid #e5e7eb;padding:12px 16px;border-radius:16px;border-bottom-left-radius:4px;font-size:13px;color:#374151}\
    .vc-compose{display:flex;gap:8px;padding:12px 16px;background:white;border-top:1px solid #e5e7eb}\
    .vc-compose input{flex:1;border:1px solid #e5e7eb;border-radius:24px;padding:10px 16px;font-size:13px;outline:none;font-family:inherit}\
    .vc-compose input:focus{border-color:#9ca3af}\
    .vc-compose button{width:40px;height:40px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}\
    .vc-compose button:disabled{opacity:.4;cursor:default}\
    .vc-compose button svg{width:18px;height:18px;fill:white}\
    .vc-info{padding:12px 16px;background:white;border-top:1px solid #e5e7eb}\
    .vc-info input{width:100%;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;font-size:12px;outline:none;font-family:inherit;margin-bottom:6px}\
    .vc-info input:focus{border-color:#9ca3af}\
    .vc-info p{font-size:10px;color:#9ca3af;margin:0}\
    @media(max-width:480px){.vc-panel{width:100%;height:100vh;max-height:100vh;border-radius:0;top:0!important;left:0!important;right:0!important;bottom:0!important}}\
  ';
  document.head.appendChild(style);

  // ── Chat button ──
  var btn = document.createElement('button');
  btn.className = 'vc-btn';
  btn.style.backgroundColor = color;
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  if (position === 'bottom-left') { btn.style.bottom = '24px'; btn.style.left = '24px'; }
  else { btn.style.bottom = '24px'; btn.style.right = '24px'; }

  var badge = document.createElement('span');
  badge.className = 'vc-badge';
  badge.style.display = 'none';
  btn.appendChild(badge);

  btn.addEventListener('click', togglePanel);
  document.body.appendChild(btn);

  // ── Chat panel ──
  var panel = document.createElement('div');
  panel.className = 'vc-panel';
  panel.style.background = '#fff';
  if (position === 'bottom-left') { panel.style.bottom = '96px'; panel.style.left = '24px'; }
  else { panel.style.bottom = '96px'; panel.style.right = '24px'; }

  panel.innerHTML = '\
    <div class="vc-header" style="background:' + color + '">\
      <h3>' + escHtml(title) + '</h3>\
      <button onclick="window.velaChat.close()" aria-label="Close">&times;</button>\
    </div>\
    <div class="vc-msgs" id="vc-msgs">\
      <div class="vc-greeting">' + escHtml(greeting) + '</div>\
    </div>\
    <div class="vc-info" id="vc-info">\
      <p style="font-size:12px;font-weight:600;color:#374151;margin:0 0 8px">Before we chat, tell us who you are:</p>\
      <input id="vc-fname" placeholder="First name *" required />\
      <input id="vc-lname" placeholder="Last name *" required />\
      <input id="vc-email" type="email" placeholder="Email *" required />\
      <p>We typically respond within minutes during business hours.</p>\
    </div>\
    <div class="vc-compose">\
      <input id="vc-input" placeholder="Type a message..." />\
      <button id="vc-send" style="background:' + color + '"><svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg></button>\
    </div>\
  ';
  document.body.appendChild(panel);

  var msgsEl = document.getElementById('vc-msgs');
  var inputEl = document.getElementById('vc-input');
  var sendBtn = document.getElementById('vc-send');
  var fnameEl = document.getElementById('vc-fname');
  var lnameEl = document.getElementById('vc-lname');
  var emailEl = document.getElementById('vc-email');
  var infoEl = document.getElementById('vc-info');

  inputEl.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
  sendBtn.addEventListener('click', sendMessage);

  // Hide info section after first message
  var infoHidden = false;

  function togglePanel() {
    isOpen = !isOpen;
    if (isOpen) {
      panel.classList.add('vc-show');
      unreadCount = 0;
      badge.style.display = 'none';
      inputEl.focus();
      startPolling();
    } else {
      panel.classList.remove('vc-show');
      stopPolling();
    }
  }

  function sendMessage() {
    var text = inputEl.value.trim();
    if (!text) return;

    // Require name + email before first message
    if (!infoHidden) {
      var fname = fnameEl.value.trim();
      var lname = lnameEl.value.trim();
      var email = emailEl.value.trim();
      if (!fname) { fnameEl.style.borderColor = '#EF4444'; fnameEl.focus(); return; }
      if (!lname) { lnameEl.style.borderColor = '#EF4444'; lnameEl.focus(); return; }
      if (!email || email.indexOf('@') < 1) { emailEl.style.borderColor = '#EF4444'; emailEl.focus(); return; }
      fnameEl.style.borderColor = ''; lnameEl.style.borderColor = ''; emailEl.style.borderColor = '';
      infoEl.style.display = 'none';
      infoHidden = true;
    }

    inputEl.value = '';

    appendMessage({ content: text, direction: 'inbound', sender_name: 'You', created_at: new Date().toISOString() });

    var fullName = (fnameEl.value.trim() + ' ' + lnameEl.value.trim()).trim();
    var body = { clinic_id: clinicId, visitor_id: visitorId, content: text };
    if (fullName) body.visitor_name = fullName;
    if (emailEl.value.trim()) body.visitor_email = emailEl.value.trim();

    fetch(apiHost + '/webchat-send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).catch(function () {});

    if (!pollTimer) startPolling();
  }

  function appendMessage(msg) {
    var existing = messages.find(function (m) { return m.id === msg.id; });
    if (existing) return;
    messages.push(msg);

    var div = document.createElement('div');
    var isOut = msg.direction === 'outbound';
    div.className = 'vc-msg ' + (isOut ? 'vc-msg-out' : 'vc-msg-in') + (msg.is_automated ? ' vc-msg-auto' : '');
    if (isOut) div.style.backgroundColor = color;
    div.textContent = msg.content;

    var time = document.createElement('div');
    time.className = 'vc-time';
    var d = new Date(msg.created_at);
    time.textContent = (isOut ? (msg.sender_name || 'Staff') + ' · ' : '') + d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
    div.appendChild(time);

    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function startPolling() {
    if (pollTimer) return;
    poll();
    pollTimer = setInterval(poll, 3000);
  }

  function stopPolling() {
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
  }

  function poll() {
    fetch(apiHost + '/webchat-poll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clinic_id: clinicId, visitor_id: visitorId, since: lastPollTime }),
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.messages) return;
      data.messages.forEach(function (msg) {
        if (msg.direction === 'outbound') {
          appendMessage(msg);
          if (!isOpen) {
            unreadCount++;
            badge.textContent = unreadCount;
            badge.style.display = 'flex';
          }
        }
        if (msg.created_at) lastPollTime = msg.created_at;
      });
    })
    .catch(function () {});
  }

  function escHtml(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  // Load existing messages on page load
  setTimeout(function () {
    fetch(apiHost + '/webchat-poll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clinic_id: clinicId, visitor_id: visitorId }),
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.messages || data.messages.length === 0) return;
      data.messages.forEach(function (msg) { appendMessage(msg); });
      lastPollTime = data.messages[data.messages.length - 1].created_at;
      if (infoEl && !infoHidden) { infoEl.style.display = 'none'; infoHidden = true; }
    })
    .catch(function () {});
  }, 500);

  window.velaChat = { open: function () { if (!isOpen) togglePanel(); }, close: function () { if (isOpen) togglePanel(); } };
})();
