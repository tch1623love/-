window.addEventListener('load', function () {
  const lastShown = parseInt(localStorage.getItem('welcomeLastShown'), 10);
  const now = Date.now();
  const THIRTY_MINUTES = 30 * 60 * 1000;

  if (!lastShown || now - lastShown > THIRTY_MINUTES) {
    Swal.fire({
      title: 'สวัสดีครับผม 🐖',
      text: 'Mr.Theerakon Chuenchom',
      icon: 'success',
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
    });

    localStorage.setItem('welcomeLastShown', now);
  }
});
