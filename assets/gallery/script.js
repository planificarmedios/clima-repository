(function (b) {
  function y (a) { b(a.target).closest('.mbr-slider').hasClass('in') && a.target.playVideo() } function m (a) {
    const c = b(a.target); c[0]._masonryProgress || (c[0]._masonryProgress = !0, typeof b.fn.masonry !== 'undefined' && c.outerFind('.mbr-gallery').each(function () {
      const a = b(this).find('.mbr-gallery-row'); a.one('layoutComplete', function () { c[0]._masonryProgress = !1 }); a.imagesLoaded().progress(function () {
        a.masonry({
          itemSelector: '.mbr-gallery-item:not(.mbr-gallery-item__hided)',
          percentPosition: !0,
          horizontalOrder: !0,
          transitionDuration: 0
        }); a.masonry('reloadItems')
      }); a.off('filter'); a.on('filter', function () { a.masonry('reloadItems'); a.masonry('layout'); b(window).trigger('update.parallax') })
    }))
  } function q (a, c, b, d, f) { const g = a.find('img'); if (g[0].complete && g[0].naturalWidth > 50 && g[0].naturalHeight > 50)r(g, a, c, b, d, f); else g.one('load', function () { r(g, a, c, b, d, f) }) } function r (a, c, b, d, f, g) {
    const l = a[0].naturalWidth; const p = a[0].naturalHeight; d = d / b > l / p ? (b - 2 * g) * l / p : d - 2 * g; d = d >= l ? l : d; b = (b - d * p / l) / 2; a.css({
      width: parseInt(d),
      height: d * p /
l
    }); c.css('top', b + f)
  } function z (a, c, e, d, f, g) { a.find('.modal-dialog .carousel-item').each(function () { if (!g && !b(this)[0].classList.contains('carousel-item-next') && !b(this)[0].classList.contains('carousel-item-prev') || g && !b(this)[0].classList.contains('active'))b(this)[0].classList.contains('video-container') ? b(this).css({ top: d, height: e - 2 * d - 2 * f }) : q(b(this), e, c, d, f) }) } function t () {
    const a = b(window).width() - 0; const c = b(window).height() - 0; if (h) {
      let e; let d = !1; h.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev').length
        ? e = h.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev')
        : (e = h.find('.modal-dialog .carousel-item.active'), d = !0); e[0].classList.contains('video-container') ? e.css({ top: 0, height: c - 0 - 20 }) : q(e, c, a, 0, 10); clearTimeout(u); u = setTimeout(z, 200, h, a, c, 0, 10, d)
    }
  } var k = b('html').hasClass('is-builder'); if (!k) {
    const v = document.createElement('script'); v.src = 'https://www.youtube.com/iframe_api'; const w = document.getElementsByTagName('script')[0]; w.parentNode.insertBefore(v,
      w); var n = []; b('.carousel-item.video-container img').css('display', 'none'); window.onYouTubeIframeAPIReady = function () {
      var a = a || {}; a.YTAPIReady || (a.YTAPIReady = !0, jQuery(document).trigger('YTAPIReady')); b('.video-slide').each(function (a) {
        b('.video-container').eq(a).append('<div id ="mbr-video-' + a + '" class="mbr-background-video" data-video-num="' + a + '"></div>').append('<div class="item-overlay"></div>'); b(this).attr('data-video-num', a); if (b(this).attr('data-video-url').indexOf('vimeo.com') !== -1) {
          var e =
{ id: b(this).attr('data-video-url'), width: '100%', height: '100%', loop: !0 }; a = new Vimeo.Player('mbr-video-' + a, e); a.playVideo = Vimeo.play
        } else { var e = YT.Player; let d; d = b(this).attr('data-video-url'); d = d === 'false' ? !1 : (d = /(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(d) || /^([-a-z0-9_]+)$/i.exec(d)) ? d[1] : !1; a = new e('mbr-video-' + a, { height: '100%', width: '100%', videoId: d, events: { onReady: y }, playerVars: { rel: 0 } }) }n.push(a)
      })
    }
  }b(document).on('add.cards', function (a) {
    const c = b(a.target); c.on('click', '.mbr-gallery-filter li',
      function (a) { a.preventDefault(); const d = b(this).closest('li'); d.parent().find('li').removeClass('active'); d.addClass('active'); a = d.closest('section').find('.mbr-gallery-row'); const f = b(this)[0].textContent.trim(); c.find('.mbr-gallery-item').each(function (a, c) { const e = b(this); const h = e.attr('data-tags').split(',').map(function (a) { return a.trim() }); b.inArray(f, h) !== -1 || d.hasClass('mbr-gallery-filter-all') ? e.removeClass('mbr-gallery-item__hided') : (e.addClass('mbr-gallery-item__hided'), e.css('left', '300px')) }); a.closest('.mbr-gallery-row').trigger('filter') })
  })
  if (k)b(document).on('changeButtonColor.cards', function (a) { const c = b(a.target); if (c.find('.mbr-gallery-filter').length > 0 && b(a.target).find('.mbr-gallery-filter').hasClass('gallery-filter-active')) { const e = (c.find('.mbr-gallery-filter .mbr-gallery-filter-all').find('a').attr('class') || '').replace(/(^|\s)active(\s|$)/, ' ').trim(); c.find('.mbr-gallery-filter ul li:not(.mbr-gallery-filter-all) a').attr('class', e) }m(a) }); b(document).on('add.cards changeParameter.cards', function (a) {
    const c = b(a.target); const e = []; c.find('.mbr-gallery-item').each(function (a) {
      (b(this).attr('data-tags') ||
'').trim().split(',').map(function (a) { a = a.trim(); b.inArray(a, e) === -1 && e.push(a) })
    }); if (c.find('.mbr-gallery-filter').length > 0 && b(a.target).find('.mbr-gallery-filter').hasClass('gallery-filter-active')) { let d = ''; c.find('.mbr-gallery-filter ul li:not(.mbr-gallery-filter-all)').remove(); const f = c.find('.mbr-gallery-filter .mbr-gallery-filter-all').clone(); f.find('a').removeClass('active'); e.map(function (a) { f.find('a').length ? f.find('a').text(a) : f.text(a); d += '<li>' + f.html() + '</li>' }); f.remove(); c.find('.mbr-gallery-filter ul').append(d) }m(a)
  })
  b(document).on('change.cards', function (a) { m(a) }); b(document).on('lazyload', function (a) { m(a); b(window).scrollEnd(function () { m(a) }, 250) }); b('.mbr-gallery-item').on('click', 'a', function (a) { a.stopPropagation() }); let x; let u; let h; var k = b(document).find('.mbr-gallery'); k.on('show.bs.modal', function (a) {
    clearTimeout(x); x = setTimeout(function () {
      var c = b(a.relatedTarget).parent().attr('data-video-num'); var c = b(a.target).find('.carousel-item .mbr-background-video[data-video-num=' + c + ']'); b(a.target).find('.carousel-item .mbr-background-video')
      c.length > 0 && c.closest('.carousel-item').hasClass('active') && (c = n[+c.attr('data-video-num')], c.playVideo ? c.playVideo() : c.play())
    }, 500); h = b(a.target); t()
  }); k.on('slide.bs.carousel', function (a) { a = b(a.target).find('.carousel-item.active .mbr-background-video'); a.length > 0 && (a = n[+a.attr('data-video-num')], a.pauseVideo ? a.pauseVideo() : a.pause()) }); b(window).on('resize load', t); k.on('slid.bs.carousel', function (a) {
    a = b(a.target).find('.carousel-item.active .mbr-background-video'); a.length > 0 && (a = n[+a.attr('data-video-num')],
    a.playVideo ? a.playVideo() : a.play())
  }); k.on('hide.bs.modal', function (a) { n.map(function (a, b) { a.pauseVideo ? a.pauseVideo() : a.pause() }); h = null })
})(jQuery)
