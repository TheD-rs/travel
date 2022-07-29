const hamb = document.querySelector('.hamburger');
const openHambMenu = document.querySelector('.hamburger__menu');
const hedaer = document.querySelector('.header');
const lineHamb1 = document.querySelector('.line1');
const lineHamb2 = document.querySelector('.line2');
const lineHamb3 = document.querySelector('.line3');
const loginBtn = document.querySelector('.login__btn');
const popupWrap = document.querySelector('.popup__wrap');
const SingInBtn = document.querySelector('.signin__btn');
const popupInputFirst = document.querySelector('.first__input');
const popupInputSecond = document.querySelector('.second__input');
const register = document.querySelector('.register__link');
const popupTitle = document.querySelector('.popup__title');
const btnFacebook = document.querySelector('.signin__facebook');
const btnGoogle = document.querySelector('.signin__google');
const wordTape = document.querySelector('.word__tape');
const signinBtn = document.querySelector('.signin__btn');
const forgotPass = document.querySelector('.forgot__pass');
const accountText = document.querySelector('.account__text');
const registerText = document.querySelector('.register__text');
const popupContent = document.querySelector('.popup__content');
const accountBtn = document.querySelector('.account');





function toggleMenu() {
  hamb.classList.toggle('open');
}
hamb.addEventListener('click', toggleMenu);

function openMenu() {
  openHambMenu.classList.toggle('open__menu');
}
hamb.addEventListener('click', openMenu);

function lockMenu() {
  document.body.classList.toggle('lock');
}
hamb.addEventListener('click', lockMenu);

document.addEventListener('click', (e) => {
  if(e.target !== openHambMenu && e.target !== hamb && e.target !==lineHamb1 && e.target !==lineHamb2 && e.target !==lineHamb3) {
    hamb.classList.remove('open');
    openHambMenu.classList.remove('open__menu');
    document.body.classList.remove('lock');
  }
})

loginBtn.addEventListener('click', () => {
  popupWrap.classList.add('open');
  document.body.classList.add('lock__popup');
})

accountBtn.addEventListener('click', () => {
  popupWrap.classList.add('open');
  document.body.classList.add('lock__popup');
  popupContent.classList.add('mobile');
  btnFacebook.classList.add('mobile');
  btnGoogle.classList.add('mobile');
  popupInputFirst.classList.add('mobile');
  popupInputSecond.classList.add('mobile');
  signinBtn.classList.add('mobile');
})

document.addEventListener('click', (e) => {
  if(e.target === popupWrap) {
    popupWrap.classList.remove('open');
    popupContent.classList.remove('mobile');
    btnFacebook.classList.remove('mobile');
    btnGoogle.classList.remove('mobile');
    popupInputFirst.classList.remove('mobile');
    popupInputSecond.classList.remove('mobile');
    signinBtn.classList.remove('mobile');
    document.body.classList.remove('lock__popup');
  }
})

////value input

SingInBtn.addEventListener('click', () => {
  const alert1 = 'Почта: ' + popupInputFirst.value;
  const alert2 = 'Пароль: ' + popupInputSecond.value;
  alert(alert1 + '\n' + alert2);
})

/////switch popup

register.addEventListener('click', () => {
    if(register.classList.contains('log__in') === true) {
      popupTitle.textContent = 'Create account';
      signinBtn.textContent = 'Sign Up';
      signinBtn.style.marginBottom = '23px';
      btnFacebook.style.display = 'none';
      btnGoogle.style.display = 'none';
      wordTape.style.display = 'none';
      forgotPass.style.display = 'none';
      accountText.textContent = 'Already have an account?';
      registerText.textContent = 'Log in';
      popupContent.style.height = '436px';
      register.classList.remove('log__in')
    }
    else if (register.classList.contains('log__in') === false) {
      popupTitle.textContent = 'Log in to your account';
      signinBtn.textContent = 'Sign In';
      signinBtn.style.marginBottom = '10px';
      btnFacebook.style.display = 'block';
      btnGoogle.style.display = 'block';
      wordTape.style.display = 'flex';
      forgotPass.style.display = 'block';
      accountText.textContent = 'Don’t have an account?';
      registerText.textContent = 'Register';
      popupContent.style.height = '660px';
      register.classList.add('log__in');
    }
})

/////slider

const BTN__DESCTOP__LEFT = document.querySelector('.btn__left');
const BTN__DESCTOP__RIGHT = document.querySelector('.btn__right');
const BTN_CENTER = document.querySelector('.slider__item-second');
const sliderItems = document.querySelectorAll('.slider__item');
const CAROUSEL = document.querySelector('.slider');
const dots = document.querySelectorAll('.destinations__dot');
const dot1 = document.querySelector('.destinations__dot-first');
const dot2 = document.querySelector('.destinations__dot-second');
const dot3 = document.querySelector('.destinations__dot-third');



const moveLeft = () => {
  CAROUSEL.classList.add('transitions__left');
  CAROUSEL.style.left = '265px'
  BTN__DESCTOP__LEFT.classList.add('left');
}

const moveRight = () => {
  CAROUSEL.classList.add('transitions__right');
  CAROUSEL.style.left = '-1435px'
  BTN__DESCTOP__RIGHT.classList.add('right');
}


BTN_CENTER.addEventListener('click', () => {
  if(BTN__DESCTOP__LEFT.classList.contains('left')) {
    CAROUSEL.classList.add('transitions__from-left-center');
    CAROUSEL.style.left = '-585px';
    CAROUSEL.style.left = CAROUSEL.removeAttribute('style');
    BTN__DESCTOP__LEFT.classList.remove('left');
  }
});

BTN_CENTER.addEventListener('click', () => {
  if(BTN__DESCTOP__RIGHT.classList.contains('right')) {
    CAROUSEL.classList.add('transitions__from-right-center');
    CAROUSEL.style.left = '-585px';
    CAROUSEL.style.left = CAROUSEL.removeAttribute('style');
    BTN__DESCTOP__RIGHT.classList.remove('right');
  }
});

BTN__DESCTOP__LEFT.addEventListener('click', moveLeft);
BTN__DESCTOP__RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', () => {
  CAROUSEL.classList.remove('transitions__left');
  CAROUSEL.classList.remove('transitions__right');
  CAROUSEL.classList.remove('transitions__from-left-center');
  CAROUSEL.classList.remove('transitions__from-right-center');
})


///pagination

dots.forEach(item => { 
        item.addEventListener('click', (e) => {
        dots.forEach(element => { 
          element.classList.remove('destinations__active');
         });
        item.classList.add('destinations__active');
    })
})


BTN__DESCTOP__LEFT.addEventListener('click', () => {
  dots.forEach(item => {
    item.classList.remove('destinations__active');
  })
  dot1.classList.add('destinations__active');
});

BTN_CENTER.addEventListener('click', () => {
  dots.forEach(item => {
    item.classList.remove('destinations__active');
  })
  dot2.classList.add('destinations__active');
});

BTN__DESCTOP__RIGHT.addEventListener('click', () => {
  dots.forEach(item => {
    item.classList.remove('destinations__active');
  })
  dot3.classList.add('destinations__active');
});

console.log('наверное около 100');

const num1 = 12;
const num2 = 8;


  const result =  String(num1);
  const result1 = Array.from(result);
  const result2 =  String(num2);
  const result3 = Array.from(result2);
  const result4 = +result1[0];
  const result5 = +result1[1];
  console.log(result4, result5)
  // return num1 + num2;
