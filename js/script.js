document.addEventListener('DOMContentLoaded', () => {
    let swiper = document.querySelector('.swiper');
    let popup = document.querySelector('.popup__overflow');
    let close = document.querySelector('.popup__overflow-form-close');
    let closeArea = document.querySelector('.popup__overflow-close');
    let reserveBtn = document.querySelector('.content__btns-reserve');
    let phoneInput = document.querySelector('.popup-input');
    let reservationForm = document.querySelector(".popup__overflow-form-form");
    let response = document.querySelector(".popup-response");
    let burger = document.querySelector(".header__burger");
    let menu = document.querySelector(".header__menu");
    let menuLinks = document.querySelectorAll(".header__menu-link");




    // slider swiper inicialisation
    swiper && new Swiper('.swiper', {
    
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      grabCursor: true,
      autoplay: {
        delay: 1500,

      }

    });

    // popup
    close && close.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.remove('visible');
        document.body.classList.remove('noscroll')
    });

    closeArea && closeArea.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.remove('visible');
        document.body.classList.remove('noscroll')
    });

    reserveBtn && reserveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('visible');
        document.body.classList.add('noscroll')
    });

    // mask
    phoneInput && createMask();

    function createMask() {
        var elements = document.getElementsByClassName('popup-input');
        for (var i = 0; i < elements.length; i++) {
            new IMask(elements[i], {
                mask: '+7(000)-000 00 00',
            });
        }
    }
  
  // form
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    fetch("/ajax.php", {
      method: "POST",
      body: formData
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        if (data.status === "success") {
          response.innerHTML = data.message;
        } else {
          response.innerHTML = data.message;
        }
      })
      .catch(function (error) {
        console.error("Error submitting form:", error);
      });
  });


  // burger

  burger && burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('touched');
    document.body.classList.toggle('noscroll');
    menu.classList.toggle('visible');
  });

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', (e) => {
      e.preventDefault();
      burger.classList.remove('touched');
      document.body.classList.remove('noscroll');
      menu.classList.remove('visible');
    });
  }


})