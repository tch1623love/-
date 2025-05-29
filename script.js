window.addEventListener('load', function () {
  Swal.fire({
    title: 'สวัสดีครับผม 🐖',
    text: 'Mr.Theerakon Chuenchom',
    icon: 'success',
    timer: 4000, 
    timerProgressBar: true,
    showConfirmButton: false,        
    allowOutsideClick: false,        
    allowEscapeKey: false,           
    didOpen: () => {
      Swal.showLoading();       
    }
  });
});