/*
 * jQuery Form Styler v2.0.2
 * https://github.com/Dimox/jQueryFormStyler
 *
 * Copyright 2012-2017 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2017.10.22
 *
 */
(function (b) { typeof define === 'function' && define.amd ? define(['jquery'], b) : typeof exports === 'object' ? module.exports = b($ || require('jquery')) : b(jQuery) })(function (b) {
  function x (c, a) { this.element = c; this.options = b.extend({}, Q, a); const e = this.options.locale; void 0 !== this.options.locales[e] && b.extend(this.options, this.options.locales[e]); this.init() } function D (c) {
    if (!b(c.target).parents().hasClass('jq-selectbox') && c.target.nodeName != 'OPTION' && b('div.jq-selectbox.opened').length) {
      c = b('div.jq-selectbox.opened')
      const a = b('div.jq-selectbox__search input', c); const e = b('div.jq-selectbox__dropdown', c); c.find('select').data('_styler').options.onSelectClosed.call(c); a.length && a.val('').keyup(); e.hide().find('li.sel').addClass('selected'); c.removeClass('focused opened dropup dropdown')
    }
  } var Q = {
    idSuffix: '-styler',
    filePlaceholder: '\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d',
    fileBrowse: '\u041e\u0431\u0437\u043e\u0440...',
    fileNumber: '\u0412\u044b\u0431\u0440\u0430\u043d\u043e \u0444\u0430\u0439\u043b\u043e\u0432: %s',
    selectPlaceholder: '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...',
    selectSearch: !1,
    selectSearchLimit: 10,
    selectSearchNotFound: '\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e',
    selectSearchPlaceholder: '\u041f\u043e\u0438\u0441\u043a...',
    selectVisibleOptions: 0,
    selectSmartPositioning: !0,
    locale: 'ru',
    locales: {
      en: {
        filePlaceholder: 'No file selected',
        fileBrowse: 'Browse...',
        fileNumber: 'Selected files: %s',
        selectPlaceholder: 'Select...',
        selectSearchNotFound: 'No matches found',
        selectSearchPlaceholder: 'Search...'
      }
    },
    onSelectOpened: function () {},
    onSelectClosed: function () {},
    onFormStyled: function () {}
  }; x.prototype = {
    init: function () {
      function c () { void 0 !== a.attr('id') && a.attr('id') !== '' && (this.id = a.attr('id') + e.idSuffix); this.title = a.attr('title'); this.classes = a.attr('class'); this.data = a.data() } var a = b(this.element); var e = this.options; const t = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1; const x = navigator.userAgent.match(/Android/i) &&
!navigator.userAgent.match(/(Windows\sPhone)/i)
        ? !0
        : !1; if (a.is(':checkbox')) {
        const A = function () {
          const e = new c(); const d = b('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({ id: e.id, title: e.title }).addClass(e.classes).data(e.data); a.after(d).prependTo(d); a.is(':checked') && d.addClass('checked'); a.is(':disabled') && d.addClass('disabled'); d.click(function (b) {
            b.preventDefault(); a.triggerHandler('click'); d.is('.disabled') || (a.is(':checked')
              ? (a.prop('checked', !1), d.removeClass('checked'))
              : (a.prop('checked',
                  !0), d.addClass('checked')), a.focus().change())
          }); a.closest('label').add('label[for="' + a.attr('id') + '"]').on('click.styler', function (a) { b(a.target).is('a') || b(a.target).closest(d).length || (d.triggerHandler('click'), a.preventDefault()) }); a.on('change.styler', function () { a.is(':checked') ? d.addClass('checked') : d.removeClass('checked') }).on('keydown.styler', function (a) { a.which == 32 && d.click() }).on('focus.styler', function () { d.is('.disabled') || d.addClass('focused') }).on('blur.styler', function () { d.removeClass('focused') })
        }
        A(); a.on('refresh', function () { a.closest('label').add('label[for="' + a.attr('id') + '"]').off('.styler'); a.off('.styler').parent().before(a).remove(); A() })
      } else if (a.is(':radio')) {
        const K = function () {
          const e = new c(); const d = b('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({ id: e.id, title: e.title }).addClass(e.classes).data(e.data); a.after(d).prependTo(d); a.is(':checked') && d.addClass('checked'); a.is(':disabled') && d.addClass('disabled'); b.fn.commonParents = function () {
            const a = this; return a.first().parents().filter(function () {
              return b(this).find(a).length ===
a.length
            })
          }; b.fn.commonParent = function () { return b(this).commonParents().first() }; d.click(function (c) { c.preventDefault(); a.triggerHandler('click'); d.is('.disabled') || (c = b('input[name="' + a.attr('name') + '"]'), c.commonParent().find(c).prop('checked', !1).parent().removeClass('checked'), a.prop('checked', !0).parent().addClass('checked'), a.focus().change()) }); a.closest('label').add('label[for="' + a.attr('id') + '"]').on('click.styler', function (a) {
            b(a.target).is('a') || b(a.target).closest(d).length || (d.triggerHandler('click'),
            a.preventDefault())
          }); a.on('change.styler', function () { a.parent().addClass('checked') }).on('focus.styler', function () { d.is('.disabled') || d.addClass('focused') }).on('blur.styler', function () { d.removeClass('focused') })
        }; K(); a.on('refresh', function () { a.closest('label').add('label[for="' + a.attr('id') + '"]').off('.styler'); a.off('.styler').parent().before(a).remove(); K() })
      } else if (a.is(':file')) {
        const M = function () {
          var v = new c(); let d = a.data('placeholder'); void 0 === d && (d = e.filePlaceholder); let k = a.data('browse'); if (void 0 ===
k || k === '')k = e.fileBrowse; const f = b('<div class="jq-file"><div class="jq-file__name">' + d + '</div><div class="jq-file__browse">' + k + '</div></div>').attr({ id: v.id, title: v.title }).addClass(v.classes).data(v.data); a.after(f).appendTo(f); a.is(':disabled') && f.addClass('disabled'); var v = a.val(); const l = b('div.jq-file__name', f); v && l.text(v.replace(/.+[\\\/]/, '')); a.on('change.styler', function () {
            var b = a.val(); if (a.is('[multiple]')) {
              var b = ''; const c = a[0].files.length; c > 0 && (b = a.data('number'), void 0 === b && (b = e.fileNumber), b =
b.replace('%s', c))
            }l.text(b.replace(/.+[\\\/]/, '')); b === '' ? (l.text(d), f.removeClass('changed')) : f.addClass('changed')
          }).on('focus.styler', function () { f.addClass('focused') }).on('blur.styler', function () { f.removeClass('focused') }).on('click.styler', function () { f.removeClass('focused') })
        }; M(); a.on('refresh', function () { a.off('.styler').parent().before(a).remove(); M() })
      } else if (a.is('input[type="number"]')) {
        const N = function () {
          const e = new c(); const d = b('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
            id: e.id,
            title: e.title
          }).addClass(e.classes).data(e.data); a.after(d).prependTo(d).wrap('<div class="jq-number__field"></div>'); a.is(':disabled') && d.addClass('disabled'); let k; let f; let l; let t = null; let L = null; void 0 !== a.attr('min') && (k = a.attr('min')); void 0 !== a.attr('max') && (f = a.attr('max')); l = void 0 !== a.attr('step') && b.isNumeric(a.attr('step')) ? Number(a.attr('step')) : Number(1); const h = function (c) {
            let h = a.val(); let d; b.isNumeric(h) || (h = 0, a.val('0')); c.is('.minus') ? d = Number(h) - l : c.is('.plus') && (d = Number(h) + l); c = (l.toString().split('.')[1] ||
[]).length; if (c > 0) { for (h = '1'; h.length <= c;)h += '0'; d = Math.round(d * h) / h }b.isNumeric(k) && b.isNumeric(f) ? d >= k && d <= f && a.val(d) : b.isNumeric(k) && !b.isNumeric(f) ? d >= k && a.val(d) : !b.isNumeric(k) && b.isNumeric(f) ? d <= f && a.val(d) : a.val(d)
          }; d.is('.disabled') || (d.on('mousedown', 'div.jq-number__spin', function () { const a = b(this); h(a); t = setTimeout(function () { L = setInterval(function () { h(a) }, 40) }, 350) }).on('mouseup mouseout', 'div.jq-number__spin', function () { clearTimeout(t); clearInterval(L) }).on('mouseup', 'div.jq-number__spin',
            function () { a.change().trigger('input') }), a.on('focus.styler', function () { d.addClass('focused') }).on('blur.styler', function () { d.removeClass('focused') }))
        }; N(); a.on('refresh', function () { a.off('.styler').closest('.jq-number').before(a).remove(); N() })
      } else if (a.is('select')) {
        const P = function () {
          function v (a) {
            const b = a.prop('scrollHeight') - a.outerHeight(); let d = null; let c = null; a.off('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function (e) {
              d = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1
              c = a.scrollTop(); if (c >= b && d < 0 || c <= 0 && d > 0)e.stopPropagation(), e.preventDefault()
            })
          } function d () {
            for (let a = 0; a < l.length; a++) {
              const b = l.eq(a); let d = ''; let c = ''; let f = d = ''; let t = ''; let q = ''; let w = ''; let g = ''; let k = ''; b.prop('selected') && (c = 'selected sel'); b.is(':disabled') && (c = 'disabled'); b.is(':selected:disabled') && (c = 'selected sel disabled'); void 0 !== b.attr('id') && b.attr('id') !== '' && (f = ' id="' + b.attr('id') + e.idSuffix + '"'); void 0 !== b.attr('title') && l.attr('title') !== '' && (t = ' title="' + b.attr('title') + '"'); void 0 !== b.attr('class') && (w =
' ' + b.attr('class'), k = ' data-jqfs-class="' + b.attr('class') + '"'); const v = b.data(); var u; for (u in v)v[u] !== '' && (q += ' data-' + u + '="' + v[u] + '"'); c + w !== '' && (d = ' class="' + c + w + '"'); d = '<li' + k + q + d + t + f + '>' + b.html() + '</li>'; b.parent().is('optgroup') && (void 0 !== b.parent().attr('class') && (g = ' ' + b.parent().attr('class')), d = '<li' + k + q + ' class="' + c + w + ' option' + g + '"' + t + f + '>' + b.html() + '</li>', b.is(':first-child') && (d = '<li class="optgroup' + g + '">' + b.parent().attr('label') + '</li>' + d)); E += d
            }
          } function k () {
            var f = new c(); var h = ''; let y = a.data('placeholder')
            let m = a.data('search'); let k = a.data('search-limit'); let F = a.data('search-not-found'); let q = a.data('search-placeholder'); let w = a.data('smart-positioning'); void 0 === y && (y = e.selectPlaceholder); if (void 0 === m || m === '')m = e.selectSearch; if (void 0 === k || k === '')k = e.selectSearchLimit; if (void 0 === F || F === '')F = e.selectSearchNotFound; void 0 === q && (q = e.selectSearchPlaceholder); if (void 0 === w || w === '')w = e.selectSmartPositioning; const g = b('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
              id: f.id,
              title: f.title
            }).addClass(f.classes).data(f.data); a.after(g).prependTo(g); var B = g.css('z-index'); var B = B > 0 ? B : 1; const O = b('div.jq-selectbox__select', g); const u = b('div.jq-selectbox__select-text', g); var f = l.filter(':selected'); d(); m && (h = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + q + '"></div><div class="jq-selectbox__not-found">' + F + '</div>'); const n = b('<div class="jq-selectbox__dropdown">' + h + '<ul>' + E + '</ul></div>'); g.append(n); const r = b('ul', n); const p = b('li', n); const x = b('input', n); const I = b('div.jq-selectbox__not-found',
              n).hide(); p.length < k && x.parent().hide(); l.first().text() === '' && l.first().is(':selected') && !1 !== y ? u.text(y).addClass('placeholder') : u.text(f.text()); let C = 0; let A = 0; p.css({ display: 'inline-block' }); p.each(function () { const a = b(this); a.innerWidth() > C && (C = a.innerWidth(), A = a.width()) }); p.css({ display: '' }); u.is('.placeholder') && u.width() > C ? u.width(u.width()) : (h = g.clone().appendTo('body').width('auto'), m = h.outerWidth(), h.remove(), m == g.outerWidth() && u.width(A)); C > g.width() && n.width(C); l.first().text() === '' && a.data('placeholder') !==
'' && p.first().hide(); const J = g.outerHeight(!0); const G = x.parent().outerHeight(!0) || 0; const z = r.css('max-height'); var h = p.filter('.selected'); h.length < 1 && p.first().addClass('selected sel'); void 0 === p.data('li-height') && (m = p.outerHeight(), !1 !== y && (m = p.eq(1).outerHeight()), p.data('li-height', m)); let H = n.css('top'); n.css('left') == 'auto' && n.css({ left: 0 }); n.css('top') == 'auto' && (n.css({ top: J }), H = J); n.hide(); h.length && (l.first().text() != f.text() && g.addClass('changed'), g.data('jqfs-class', h.data('jqfs-class')),
            g.addClass(h.data('jqfs-class'))); if (a.is(':disabled')) return g.addClass('disabled'), !1; O.click(function () {
              b('div.jq-selectbox').filter('.opened').length && e.onSelectClosed.call(b('div.jq-selectbox').filter('.opened')); a.focus(); if (!t) {
                const d = b(window); let c = p.data('li-height'); const h = g.offset().top; const f = d.height() - J - (h - d.scrollTop()); var q = a.data('visible-options'); if (void 0 === q || q === '')q = e.selectVisibleOptions; let k = 5 * c; let m = c * q; q > 0 && q < 6 && (k = m); q === 0 && (m = 'auto'); var q = function () {
                  n.height('auto').css({
                    bottom: 'auto',
                    top: H
                  }); const a = function () { r.css('max-height', Math.floor((f - 20 - G) / c) * c) }; a(); r.css('max-height', m); z != 'none' && r.css('max-height', z); f < n.outerHeight() + 20 && a()
                }; const u = function () { n.height('auto').css({ top: 'auto', bottom: H }); const a = function () { r.css('max-height', Math.floor((h - d.scrollTop() - 20 - G) / c) * c) }; a(); r.css('max-height', m); z != 'none' && r.css('max-height', z); h - d.scrollTop() - 20 < n.outerHeight() + 20 && a() }; !0 === w || w === 1
                  ? f > k + G + 20 ? (q(), g.removeClass('dropup').addClass('dropdown')) : (u(), g.removeClass('dropdown').addClass('dropup'))
                  : !1 === w || w === 0 ? f > k + G + 20 && (q(), g.removeClass('dropup').addClass('dropdown')) : (n.height('auto').css({ bottom: 'auto', top: H }), r.css('max-height', m), z != 'none' && r.css('max-height', z)); g.offset().left + n.outerWidth() > d.width() && n.css({ left: 'auto', right: 0 }); b('div.jqselect').css({ zIndex: B - 1 }).removeClass('opened'); g.css({ zIndex: B }); n.is(':hidden')
                  ? (b('div.jq-selectbox__dropdown:visible').hide(), n.show(), g.addClass('opened focused'), e.onSelectOpened.call(g))
                  : (n.hide(), g.removeClass('opened dropup dropdown'),
                    b('div.jq-selectbox').filter('.opened').length && e.onSelectClosed.call(g)); x.length && (x.val('').keyup(), I.hide(), x.keyup(function () { const c = b(this).val(); p.each(function () { b(this).html().match(new RegExp('.*?' + c + '.*?', 'i')) ? b(this).show() : b(this).hide() }); l.first().text() === '' && a.data('placeholder') !== '' && p.first().hide(); p.filter(':visible').length < 1 ? I.show() : I.hide() })); p.filter('.selected').length && (a.val() === ''
                  ? r.scrollTop(0)
                  : (r.innerHeight() / c % 2 !== 0 && (c /= 2), r.scrollTop(r.scrollTop() + p.filter('.selected').position().top -
r.innerHeight() / 2 + c))); v(r)
              }
            }); p.hover(function () { b(this).siblings().removeClass('selected') }); p.filter('.selected').text(); p.filter(':not(.disabled):not(.optgroup)').click(function () {
              a.focus(); const c = b(this); const d = c.text(); if (!c.is('.selected')) {
                var q = c.index(); var q = q - c.prevAll('.optgroup').length; c.addClass('selected sel').siblings().removeClass('selected sel'); l.prop('selected', !1).eq(q).prop('selected', !0); u.text(d); g.data('jqfs-class') && g.removeClass(g.data('jqfs-class')); g.data('jqfs-class', c.data('jqfs-class'))
                g.addClass(c.data('jqfs-class')); a.change()
              }n.hide(); g.removeClass('opened dropup dropdown'); e.onSelectClosed.call(g)
            }); n.mouseout(function () { b('li.sel', n).addClass('selected') }); a.on('change.styler', function () { u.text(l.filter(':selected').text()).removeClass('placeholder'); p.removeClass('selected sel').not('.optgroup').eq(a[0].selectedIndex).addClass('selected sel'); l.first().text() != p.filter('.selected').text() ? g.addClass('changed') : g.removeClass('changed') }).on('focus.styler', function () {
              g.addClass('focused')
              b('div.jqselect').not('.focused').removeClass('opened dropup dropdown').find('div.jq-selectbox__dropdown').hide()
            }).on('blur.styler', function () { g.removeClass('focused') }).on('keydown.styler keyup.styler', function (b) {
              const c = p.data('li-height'); a.val() === '' ? u.text(y).addClass('placeholder') : u.text(l.filter(':selected').text()); p.removeClass('selected sel').not('.optgroup').eq(a[0].selectedIndex).addClass('selected sel'); if (b.which == 38 || b.which == 37 || b.which == 33 || b.which == 36) {
                a.val() === ''
                  ? r.scrollTop(0)
                  : r.scrollTop(r.scrollTop() + p.filter('.selected').position().top)
              } b.which != 40 && b.which != 39 && b.which != 34 && b.which != 35 || r.scrollTop(r.scrollTop() + p.filter('.selected').position().top - r.innerHeight() + c); b.which == 13 && (b.preventDefault(), n.hide(), g.removeClass('opened dropup dropdown'), e.onSelectClosed.call(g))
            }).on('keydown.styler', function (a) { a.which == 32 && (a.preventDefault(), O.click()) }); D.registered || (b(document).on('click', D), D.registered = !0)
          } function f () {
            var e = new c(); const h = b('<div class="jq-select-multiple jqselect"></div>').attr({
              id: e.id,
              title: e.title
            }).addClass(e.classes).data(e.data); a.after(h); d(); h.append('<ul>' + E + '</ul>'); const f = b('ul', h); const m = b('li', h); var e = a.attr('size'); const k = f.outerHeight(); const t = m.outerHeight(); void 0 !== e && e > 0 ? f.css({ height: t * e }) : f.css({ height: 4 * t }); k > h.height() && (f.css('overflowY', 'scroll'), v(f), m.filter('.selected').length && f.scrollTop(f.scrollTop() + m.filter('.selected').position().top)); a.prependTo(h); if (a.is(':disabled'))h.addClass('disabled'), l.each(function () { b(this).is(':selected') && m.eq(b(this).index()).addClass('selected') })
            else if (m.filter(':not(.disabled):not(.optgroup)').click(function (c) {
              a.focus(); const d = b(this); c.ctrlKey || c.metaKey || d.addClass('selected'); c.shiftKey || d.addClass('first'); c.ctrlKey || c.metaKey || c.shiftKey || d.siblings().removeClass('selected first'); if (c.ctrlKey || c.metaKey)d.is('.selected') ? d.removeClass('selected first') : d.addClass('selected first'), d.siblings().removeClass('first'); if (c.shiftKey) {
                let e = !1; let f = !1; d.siblings().removeClass('selected').siblings('.first').addClass('selected'); d.prevAll().each(function () {
                  b(this).is('.first') &&
(e = !0)
                }); d.nextAll().each(function () { b(this).is('.first') && (f = !0) }); e && d.prevAll().each(function () { if (b(this).is('.selected')) return !1; b(this).not('.disabled, .optgroup').addClass('selected') }); f && d.nextAll().each(function () { if (b(this).is('.selected')) return !1; b(this).not('.disabled, .optgroup').addClass('selected') }); m.filter('.selected').length == 1 && d.addClass('first')
              }l.prop('selected', !1); m.filter('.selected').each(function () {
                const a = b(this); let c = a.index(); a.is('.option') && (c -= a.prevAll('.optgroup').length)
                l.eq(c).prop('selected', !0)
              }); a.change()
            }), l.each(function (a) { b(this).data('optionIndex', a) }), a.on('change.styler', function () { m.removeClass('selected'); const a = []; l.filter(':selected').each(function () { a.push(b(this).data('optionIndex')) }); m.not('.optgroup').filter(function (c) { return b.inArray(c, a) > -1 }).addClass('selected') }).on('focus.styler', function () { h.addClass('focused') }).on('blur.styler', function () { h.removeClass('focused') }), k > h.height()) {
              a.on('keydown.styler', function (a) {
                a.which != 38 && a.which != 37 &&
a.which != 33 || f.scrollTop(f.scrollTop() + m.filter('.selected').position().top - t); a.which != 40 && a.which != 39 && a.which != 34 || f.scrollTop(f.scrollTop() + m.filter('.selected:last').position().top - f.innerHeight() + 2 * t)
              })
            }
          } var l = b('option', a); var E = ''; a.is('[multiple]') ? x || t || f() : k()
        }; P(); a.on('refresh', function () { a.off('.styler').parent().before(a).remove(); P() })
      } else if (a.is(':reset'))a.on('click', function () { setTimeout(function () { a.closest('form').find('input, select').trigger('refresh') }, 1) })
    },
    destroy: function () {
      const c =
b(this.element); c.is(':checkbox') || c.is(':radio') ? (c.removeData('_styler').off('.styler refresh').removeAttr('style').parent().before(c).remove(), c.closest('label').add('label[for="' + c.attr('id') + '"]').off('.styler')) : c.is('input[type="number"]') ? c.removeData('_styler').off('.styler refresh').closest('.jq-number').before(c).remove() : (c.is(':file') || c.is('select')) && c.removeData('_styler').off('.styler refresh').removeAttr('style').parent().before(c).remove()
    }
  }; b.fn.styler = function (c) {
    const a = arguments
    if (void 0 === c || typeof c === 'object') return this.each(function () { b.data(this, '_styler') || b.data(this, '_styler', new x(this, c)) }).promise().done(function () { const a = b(this[0]).data('_styler'); a && a.options.onFormStyled.call() }), this; if (typeof c === 'string' && c[0] !== '_' && c !== 'init') { let e; this.each(function () { const t = b.data(this, '_styler'); t instanceof x && typeof t[c] === 'function' && (e = t[c].apply(t, Array.prototype.slice.call(a, 1))) }); return void 0 !== e ? e : this }
  }; D.registered = !1
})
