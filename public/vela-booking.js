(function () {
  'use strict';

  var script = document.currentScript;
  var slug = script && script.getAttribute('data-clinic');
  if (!slug) { console.warn('vela-booking: data-clinic attribute required'); return; }

  var host = script.getAttribute('data-host') || 'https://vela-patient-web.vercel.app';
  var btnText = script.getAttribute('data-button-text') || 'Book Now';
  var btnColor = script.getAttribute('data-button-color') || '#111827';
  var btnPosition = script.getAttribute('data-position') || 'bottom-right';
  var hideButton = script.getAttribute('data-hide-button') === 'true';

  var bookingUrl = host + '/' + slug + '/book?embed=true';

  // ── Styles ──
  var style = document.createElement('style');
  style.textContent = [
    '.vela-booking-btn{',
      'position:fixed;z-index:999998;',
      'display:flex;align-items:center;gap:8px;',
      'padding:14px 24px;',
      'border:none;border-radius:50px;',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;',
      'font-size:15px;font-weight:700;',
      'color:#fff;cursor:pointer;',
      'box-shadow:0 4px 24px rgba(0,0,0,0.18),0 1px 4px rgba(0,0,0,0.1);',
      'transition:transform 0.2s,box-shadow 0.2s;',
    '}',
    '.vela-booking-btn:hover{transform:scale(1.05);box-shadow:0 6px 32px rgba(0,0,0,0.22);}',
    '.vela-booking-btn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}',

    '.vela-booking-overlay{',
      'position:fixed;inset:0;z-index:999999;',
      'background:rgba(0,0,0,0.5);',
      'backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);',
      'display:flex;align-items:center;justify-content:center;',
      'padding:16px;',
      'opacity:0;transition:opacity 0.25s ease;',
    '}',
    '.vela-booking-overlay.vela-open{opacity:1;}',
    '.vela-booking-overlay.vela-closing{opacity:0;}',

    '.vela-booking-modal{',
      'position:relative;',
      'width:100%;max-width:480px;height:90vh;max-height:760px;',
      'background:#fff;border-radius:20px;overflow:hidden;',
      'box-shadow:0 24px 80px rgba(0,0,0,0.25);',
      'transform:translateY(40px);transition:transform 0.3s ease;',
    '}',
    '.vela-open .vela-booking-modal{transform:translateY(0);}',
    '.vela-closing .vela-booking-modal{transform:translateY(40px);}',

    '.vela-booking-close{',
      'position:absolute;top:12px;right:12px;z-index:10;',
      'width:36px;height:36px;border-radius:50%;',
      'background:rgba(0,0,0,0.06);border:none;cursor:pointer;',
      'display:flex;align-items:center;justify-content:center;',
      'transition:background 0.15s;',
    '}',
    '.vela-booking-close:hover{background:rgba(0,0,0,0.12);}',
    '.vela-booking-close svg{width:18px;height:18px;stroke:#374151;stroke-width:2;fill:none;stroke-linecap:round;}',

    '.vela-booking-iframe{width:100%;height:100%;border:none;}',

    '@media(max-width:540px){',
      '.vela-booking-modal{max-width:100%;height:100vh;max-height:100vh;border-radius:0;}',
      '.vela-booking-overlay{padding:0;}',
    '}',
  ].join('');
  document.head.appendChild(style);

  // ── Floating button ──
  if (!hideButton) {
    var btn = document.createElement('button');
    btn.className = 'vela-booking-btn';
    btn.innerHTML =
      '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
      btnText;
    btn.style.backgroundColor = btnColor;

    if (btnPosition === 'bottom-left') {
      btn.style.bottom = '24px'; btn.style.left = '24px';
    } else {
      btn.style.bottom = '24px'; btn.style.right = '24px';
    }

    btn.addEventListener('click', openBooking);
    document.body.appendChild(btn);
  }

  // ── Overlay + modal ──
  var overlay = null;

  function openBooking() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'vela-booking-overlay';
    overlay.innerHTML =
      '<div class="vela-booking-modal">' +
        '<button class="vela-booking-close" aria-label="Close">' +
          '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
        '<iframe class="vela-booking-iframe" src="' + bookingUrl + '" allow="camera"></iframe>' +
      '</div>';

    overlay.querySelector('.vela-booking-close').addEventListener('click', closeBooking);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeBooking();
    });

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add('vela-open');
      });
    });
  }

  function closeBooking() {
    if (!overlay) return;
    overlay.classList.remove('vela-open');
    overlay.classList.add('vela-closing');
    document.body.style.overflow = '';

    setTimeout(function () {
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      overlay = null;
    }, 300);
  }

  window.velaBooking = { open: openBooking, close: closeBooking };
})();
