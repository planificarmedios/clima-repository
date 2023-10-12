//
// SmoothScroll for websites v1.4.9 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//
(function () {
  function C () {
    if (!D && document.body) {
      D = !0; const a = document.body; const b = document.documentElement; let d = window.innerHeight; const c = a.scrollHeight; k = document.compatMode.indexOf('CSS') >= 0 ? b : a; m = a; f.keyboardSupport && window.addEventListener('keydown', M, !1); if (top != self)v = !0; else if (ca && c > d && (a.offsetHeight <= d || b.offsetHeight <= d)) {
        const e = document.createElement('div'); e.style.cssText = 'position:absolute; z-index:-10000; top:0; left:0; right:0; height:' + k.scrollHeight + 'px'; document.body.appendChild(e); let h; w = function () {
          h ||
(h = setTimeout(function () { e.style.height = '0'; e.style.height = k.scrollHeight + 'px'; h = null }, 500))
        }; setTimeout(w, 10); window.addEventListener('resize', w, !1); z = new da(w); z.observe(a, { attributes: !0, childList: !0, characterData: !1 }); k.offsetHeight <= d && (d = document.createElement('div'), d.style.clear = 'both', a.appendChild(d))
      }f.fixedBackground || (a.style.backgroundAttachment = 'scroll', b.style.backgroundAttachment = 'scroll')
    }
  } function N (a, b, d) {
    ea(b, d); if (f.accelerationMax != 1) {
      var c = Date.now() - E; c < f.accelerationDelta &&
(c = (1 + 50 / c) / 2, c > 1 && (c = Math.min(c, f.accelerationMax), b *= c, d *= c)); E = Date.now()
    }t.push({ x: b, y: d, lastX: b < 0 ? 0.99 : -0.99, lastY: d < 0 ? 0.99 : -0.99, start: Date.now() }); if (!F) {
      var c = O(); const e = a === c || a === document.body; a.$scrollBehavior == null && fa(a) && (a.$scrollBehavior = a.style.scrollBehavior, a.style.scrollBehavior = 'auto'); const h = function (c) {
        c = Date.now(); for (var g = 0, k = 0, l = 0; l < t.length; l++) {
          const n = t[l]; let p = c - n.start; const m = p >= f.animationTime; let q = m ? 1 : p / f.animationTime; f.pulseAlgorithm && (p = q, p >= 1
            ? q = 1
            : p <= 0
              ? q = 0
              : (f.pulseNormalize == 1 && (f.pulseNormalize /=
P(1)), q = P(p))); p = n.x * q - n.lastX >> 0; q = n.y * q - n.lastY >> 0; g += p; k += q; n.lastX += p; n.lastY += q; m && (t.splice(l, 1), l--)
        }e ? window.scrollBy(g, k) : (g && (a.scrollLeft += g), k && (a.scrollTop += k)); b || d || (t = []); t.length ? Q(h, a, 1E3 / f.frameRate + 1) : (F = !1, a.$scrollBehavior != null && (a.style.scrollBehavior = a.$scrollBehavior, a.$scrollBehavior = null))
      }; Q(h, a, 0); F = !0
    }
  } function R (a) {
    D || C(); let b = a.target; if (a.defaultPrevented || a.ctrlKey || r(m, 'embed') || r(b, 'embed') && /\.pdf/i.test(b.src) || r(m, 'object') || b.shadowRoot) return !0; let d = -a.wheelDeltaX ||
a.deltaX || 0; let c = -a.wheelDeltaY || a.deltaY || 0; ga && (a.wheelDeltaX && x(a.wheelDeltaX, 120) && (d = -120 * (a.wheelDeltaX / Math.abs(a.wheelDeltaX))), a.wheelDeltaY && x(a.wheelDeltaY, 120) && (c = -120 * (a.wheelDeltaY / Math.abs(a.wheelDeltaY)))); d || c || (c = -a.wheelDelta || 0); a.deltaMode === 1 && (d *= 40, c *= 40); b = S(b); if (!b) return v && G ? (Object.defineProperty(a, 'target', { value: window.frameElement }), a = new a.constructor(a.type, a), parent.dispatchEvent(a)) : !0; if (ha(c)) return !0; Math.abs(d) > 1.2 && (d *= f.stepSize / 120); Math.abs(c) > 1.2 && (c *= f.stepSize /
120); N(b, d, c); a.preventDefault(); T()
  } function M (a) {
    let b = a.target; let d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== h.spacebar; document.body.contains(m) || (m = document.activeElement); var c = /^(textarea|select|embed|object)$/i; let e = /^(button|submit|radio|checkbox|file|color|image)$/i; if (!(c = a.defaultPrevented || c.test(b.nodeName) || r(b, 'input') && !e.test(b.type) || r(m, 'video'))) {
      var c = a.target; let g = !1; if (document.URL.indexOf('www.youtube.com/watch') != -1) {
        do if (g = c.classList && c.classList.contains('html5-video-controls')) break
        while (c = c.parentNode)
      }c = g
    } if (c || b.isContentEditable || d || (r(b, 'button') || r(b, 'input') && e.test(b.type)) && a.keyCode === h.spacebar || r(b, 'input') && b.type == 'radio' && ia[a.keyCode]) return !0; c = b = 0; d = S(m); if (!d) return v && G ? parent.keydown(a) : !0; e = d.clientHeight; d == document.body && (e = window.innerHeight); switch (a.keyCode) {
      case h.up:c = -f.arrowScroll; break; case h.down:c = f.arrowScroll; break; case h.spacebar:c = a.shiftKey ? 1 : -1; c = -c * e * 0.9; break; case h.pageup:c = 0.9 * -e; break; case h.pagedown:c = 0.9 * e; break; case h.home:d == document.body &&
document.scrollingElement && (d = document.scrollingElement); c = -d.scrollTop; break; case h.end:e = d.scrollHeight - d.scrollTop - e; c = e > 0 ? e + 10 : 0; break; case h.left:b = -f.arrowScroll; break; case h.right:b = f.arrowScroll; break; default:return !0
    }N(d, b, c); a.preventDefault(); T()
  } function U (a) { m = a.target } function T () { clearTimeout(V); V = setInterval(function () { W = H = A = {} }, 1E3) } function I (a, b, d) { d = d ? W : H; for (let c = a.length; c--;)d[J(a[c])] = b; return b } function S (a) {
    const b = []; const d = document.body; const c = k.scrollHeight; do {
      let e = H[J(a)]; if (e) {
        return I(b,
          e)
      } b.push(a); if (c === a.scrollHeight) { if (e = X(k) && X(d) || Y(k), v && k.clientHeight + 10 < k.scrollHeight || !v && e) return I(b, O()) } else if (a.clientHeight + 10 < a.scrollHeight && Y(a)) return I(b, a)
    } while (a = a.parentElement)
  } function X (a) { return getComputedStyle(a, '').getPropertyValue('overflow-y') !== 'hidden' } function Y (a) { a = getComputedStyle(a, '').getPropertyValue('overflow-y'); return a === 'scroll' || a === 'auto' } function fa (a) { const b = J(a); A[b] == null && (a = getComputedStyle(a, '')['scroll-behavior'], A[b] = a == 'smooth'); return A[b] }
  function r (a, b) { return a && (a.nodeName || '').toLowerCase() === b.toLowerCase() } function ea (a, b) { a = a > 0 ? 1 : -1; b = b > 0 ? 1 : -1; if (B.x !== a || B.y !== b)B.x = a, B.y = b, t = [], E = 0 } function ha (a) { if (a) return l.length || (l = [a, a, a]), a = Math.abs(a), l.push(a), l.shift(), clearTimeout(Z), Z = setTimeout(function () { try { localStorage.SS_deltaBuffer = l.join(',') } catch (a) {} }, 1E3), a = a > 120 && K(a), !K(120) && !K(100) && !a } function x (a, b) { return Math.floor(a / b) == a / b } function K (a) { return x(l[0], a) && x(l[1], a) && x(l[2], a) } function P (a) {
    let b; a *= f.pulseScale
    a < 1 ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), --a, a = 1 - Math.exp(-a), b += a * (1 - b)); return b * f.pulseNormalize
  } function y (a) { for (const b in a)aa.hasOwnProperty(b) && (f[b] = a[b]) } var aa = { frameRate: 150, animationTime: 400, stepSize: 100, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !0, arrowScroll: 50, fixedBackground: !0, excluded: '' }; var f = aa; var v = !1; var B = { x: 0, y: 0 }; var D = !1; var k = document.documentElement; let m; let z; let w; var l = []; let Z; var ga = /^Mac/.test(navigator.platform); var h = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  }; var ia = { 37: 1, 38: 1, 39: 1, 40: 1 }; var t = []; var F = !1; var E = Date.now(); var J = (function () { let a = 0; return function (b) { return b.uniqueID || (b.uniqueID = a++) } }()); var W = {}; var H = {}; let V; var A = {}; if (window.localStorage && localStorage.SS_deltaBuffer) try { l = localStorage.SS_deltaBuffer.split(',') } catch (la) {} var Q = (function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a, b, d) { window.setTimeout(a, d || 1E3 / 60) } }()); var da = window.MutationObserver ||
window.WebKitMutationObserver || window.MozMutationObserver; var O = (function () { let a = document.scrollingElement; return function () { if (!a) { const b = document.createElement('div'); b.style.cssText = 'height:10000px;width:1px;'; document.body.appendChild(b); const d = document.body.scrollTop; window.scrollBy(0, 3); a = document.body.scrollTop != d ? document.body : document.documentElement; window.scrollBy(0, -3); document.body.removeChild(b) } return a } }()); var g = window.navigator.userAgent; var u = /Edge/.test(g); var G = /chrome/i.test(g) && !u; var u = /safari/i.test(g) &&
!u; const ja = /mobile/i.test(g); const ka = /Windows NT 6.1/i.test(g) && /rv:11/i.test(g); var ca = u && (/Version\/8/i.test(g) || /Version\/9/i.test(g)); var g = (G || u || ka) && !ja; let ba = !1; try { window.addEventListener('test', null, Object.defineProperty({}, 'passive', { get: function () { ba = !0 } })) } catch (ma) {} var u = ba ? { passive: !1 } : !1; const L = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; L && g && (window.addEventListener(L, R, u || !1), window.addEventListener('mousedown', U, !1), window.addEventListener('load', C, !1)); y.destroy = function () {
    z && z.disconnect()
    window.removeEventListener(L, R, !1); window.removeEventListener('mousedown', U, !1); window.removeEventListener('keydown', M, !1); window.removeEventListener('resize', w, !1); window.removeEventListener('load', C, !1)
  }; window.SmoothScrollOptions && y(window.SmoothScrollOptions); typeof define === 'function' && define.amd ? define(function () { return y }) : typeof exports === 'object' ? module.exports = y : window.SmoothScroll = y
})()
