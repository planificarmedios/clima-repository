document.addEventListener('DOMContentLoaded', function () {
  const a = document.querySelector('#chatbutton-wa'); a.floatingWhatsApp({
    phone: a.getAttribute('data-phone'),
    popupMessage: a.getAttribute('data-popupmessage'),
    headerName: a.getAttribute('data-headername'),
    headerTitle: a.getAttribute('data-headertitle'),
    message: a.getAttribute('data-message'),
    placeholder: a.getAttribute('data-placeholder'),
    showPopup: a.getAttribute('data-showpopup'),
    position: a.getAttribute('data-position'),
    headerColor: a.getAttribute('data-headerColor'),
    autoOpenTimeout: a.getAttribute('data-autoOpenTimeout'),
    size: a.getAttribute('data-size'),
    buttonImage: a.getAttribute('data-image'),
    backgroundColor: a.getAttribute('data-backgroundColor')
  })
})
