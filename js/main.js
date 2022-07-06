

const btnBurger = document.querySelector(".header__burger");
const contentBurger = document.querySelector(".burger__active");
const language = document.querySelector(".nav__language");
const login = document.querySelector(".login__list-wr");


btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("header__burger_close");
		contentBurger.classList.toggle("burger__open");
});

window.addEventListener('click', function(e){
	if(e.target.innerText === "EN"){
		language.innerText = "RU";
	}else if(e.target.innerText === "RU"){
		language.innerText = "EN";
	}
	if(e.target.className === "nav__login-img" || e.target.className === "nav__login-span"){
		event.stopPropagation();
		login.classList.toggle("block");
		
	}else if(e.target.className !== "nav__login-img" || e.target.className !== "nav__login-span"){
		event.stopPropagation();
		login.classList.remove("block");

	}
});



new Swiper(".swiper", {
		loop:true,
		spaceBetween: 30,
		navigation: {
			nextEl: ".cooperation__slider-nextArrow",
			prevEl: ".cooperation__slider-prevArrow",
		},
		breakpoints:{
			0:{
				slidesPerView: 1,
			},
			400:{
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
			900:{
				slidesPerView: 5,
			}
		},
});