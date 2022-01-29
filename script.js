const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_menu_close = document.querySelector('.menu-close');
const mobile_links = document.querySelectorAll('.mblnk');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
        //mobile_links.setAttribute('data-aos', 'fade-in');
        for (i = 0; i < mobile_links.length; i++) {
            mobile_links[i].classList.add('animate__animated', 'animate__fadeInLeft');
          }
	});

	mobile_menu_close.addEventListener('click', function () {
		mobile_menu.classList.remove('is-active');
		menu_btn.classList.remove('is-active');
        //mobile_links.removeAttribute('data-aos');
        for (i = 0; i < mobile_links.length; i++) {
            mobile_links[i].classList.remove('animate__animated', 'animate__fadeInLeft');
          }
	});