jQuery(function (a) {
  function f (e) {
    e.type === 'resize' && (a(c.BODY).removeClass(b.DROPDOWN_OPEN), a(c.BASE).find('.navbar-collapse').removeClass('show'), a(c.BASE).removeClass(b.OPENED).find(c.TOGGLER).each(function () { a(a(this).attr('data-target')).removeClass(b.IN).add(this).attr('aria-expanded', 'false') })); const d = a(this).scrollTop(); a(c.BASE).each(function () {
      a(this).is(c.FIXED_TOP) && (a(this).is(c.TRANSPARENT) && !a(this).hasClass(b.OPENED) && (d > 0 ? a(this).removeClass(b.BG_COLOR) : a(this).addClass(b.BG_COLOR)),
      d > 0 ? a(this).addClass(b.SHORT) : a(this).removeClass(b.SHORT))
    })
  } var b = { IN: 'in', OPENED: 'opened', BG_COLOR: 'bg-color', DROPDOWN_OPEN: 'navbar-dropdown-open', SHORT: 'navbar-short' }; var c = { BODY: 'body', BASE: '.navbar-dropdown', TOGGLER: '.navbar-toggler[aria-expanded="true"]', TRANSPARENT: '.transparent', FIXED_TOP: '.navbar-fixed-top' }; let d; a(window).on('scroll.bs.navbar-dropdown.data-api resize.bs.navbar-dropdown.data-api', function (a) { clearTimeout(d); d = setTimeout(function () { f(a) }, 10) }).trigger('scroll.bs.navbar-dropdown.data-api')
  a(document).on('click.bs.navbar-dropdown.data-api', c.BASE, function (a) { a.targetWrapper = this }).on('show.bs.collapse hide.bs.collapse', function (e) { a(e.target).closest(c.BASE).each(function () { e.type == 'show' ? (a(c.BODY).addClass(b.DROPDOWN_OPEN), a(this).addClass(b.OPENED)) : (a(c.BODY).removeClass(b.DROPDOWN_OPEN), a(this).removeClass(b.OPENED), a(window).trigger('scroll.bs.navbar-dropdown.data-api'), a(this).trigger('collapse.bs.navbar-dropdown')) }) }).on('collapse.bs.nav-dropdown', function (b) { a(b.relatedTarget).closest(c.BASE).find(c.TOGGLER).trigger('click') })
})
