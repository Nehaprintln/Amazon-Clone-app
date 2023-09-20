import {todayDeal} from './todayDeal.js';

let slideBtnLeft = document.querySelector('#slide-btn-left');
let slideBtnRight = document.querySelector('#slide-btn-right');
let imgItem = document.querySelectorAll('.image-item');

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;
slideBtnLeft.addEventListener('click', handleleftBtn);

function handleleftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }

    for(let element of imgItem){
    element.style.transform =  `translateX(${startSlider}%)`;
    }
}

slideBtnRight.addEventListener('click', handleRightBtn);

function handleRightBtn () {
    if(startSlider >= -endSlider + 100){
        startSlider = startSlider - 100;
    }

    for(let element of imgItem){
    element.style.transform =  `translateX(${startSlider}%)`;
    }
}

// ====== render Automatically  ======
function renderSlideAuto(){
    
    if(startSlider >= -endSlider + 100){
        handleRightBtn();
    }else{
        startSlider = 0;
    }

}

setInterval(renderSlideAuto, 3000)

// ===== slidebar navigation  ========
const slidebarNavigation = document.querySelector('#sidebar-container-navigation-id'); 
const slidebarOpenNavigation = document.querySelector('#open-nav-slider');

slidebarOpenNavigation.addEventListener('click', () =>{
    slidebarNavigation.classList.toggle('slidebar-show')
});

// === close navigation Element  =======
const sidebarCloseNavigationElement = document.querySelector('#sidebar-navigation-close');
sidebarCloseNavigationElement.addEventListener('click', () => {
    slidebarNavigation.classList.toggle('slidebar-show')
})


// =====   Today's Deals  =====
let todayDealContainerElement = document.querySelector('.today-deals-product-list');
let todayDealProductHTML = ''

let todaydealLength = todayDeal.length;
for(let i = 0; i < todaydealLength; i++){
    
    todayDealProductHTML += `
        <div class="today-deals-product-item">
            <img src=${todayDeal[i].img} />
            <div class="discount-container">
                 <a href="#">Up to ${todayDeal[i].discount}% off</a>
                 <a href="#">${todayDeal[i].dealOfDay}</a>
            </div>
            <p>${todayDeal[i].ditails}</p>
        </div>
         `
}

todayDealContainerElement.innerHTML = todayDealProductHTML;


// ====  Button Pre & Next  =====
let todayDealBtnPre = document.querySelector('#today-deal-btn-pre');
let todayDealBtnNext = document.querySelector('#today-deal-btn-next');
let todayDealProductElement = document.querySelectorAll('.today-deals-product-item');
let startProduct = 0;


todayDealBtnPre.addEventListener('click', () => {
    
    if(startProduct < 0){
        startProduct += 420;
    }
    if(startProduct > -800){
      todayDealProductElement.forEach(el => {
         el.style.transform = `translateX(${startProduct}%)`
        })
    }   
});

todayDealBtnNext.addEventListener('click', () => {
    // startProduct -= 420;
    if(startProduct > -800){
        startProduct -= 420
    }
    todayDealProductElement.forEach(el => {
        el.style.transform = `translateX(${startProduct}%)`
        })
});









