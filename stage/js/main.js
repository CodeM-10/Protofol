
const 
    navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle")
    navClose = document.getElementById("nav-close");
/*============ SHOW MENU ==================*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=> {
        navMenu.classList.add("show-menu")
    })
}
/*========  MENU Hidden ===========*/
/* validate if constant exists */

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove("show-menu")
    })
}
/*============ Remove menu mobile ==================*/
const navLinks = document.querySelectorAll(".nav-link")
function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    // when we click on each nav link, we remove the show menu class
    navMenu.classList.remove("show-menu")
}

navLinks.forEach(n => n.addEventListener('click',linkAction))

/*============ change background header ==================*/
function scrollheader(){
    const header = document.getElementById("header")
    //when the scroll is greater than 80 viewport height, add the class scroll headerto the tag header 
    if(this.scrollY >= 80) header.classList.add("scroll-header");else header.classList.remove("scroll-header")
}
window.addEventListener("scroll",scrollheader)

/*============ Testimonial swipper ==================*/

 var swiper = new Swiper(".testimonial-wrapper", {
     loop:'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });






/*============ portfolio item filter  ==================*/

const 
    filterContainer = document.querySelector( ".portfolio-filter-inner"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item "),
    totalPortfolioItem= portfolioItems.length;
    
    for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");

                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })//
    }//end for





/*============ theme/display customization  ==================*/

const 
    theme       =  document.querySelector("#theme-button"),
    themeModal  =  document.querySelector(".customize-theme"),
    fontSizes   = document.querySelectorAll('.choose-size span'),
    colorPalette= document.querySelectorAll(".choose-color span"),
    Bg1 =document.querySelector(".bg-1"),
    Bg2 =document.querySelector(".bg-2"),
    Bg3 =document.querySelector(".bg-3");

    var root = document.querySelector(":root");

//open modal Not Working =(
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//close modal
const closeThemeModal = (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}
//call function  
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click",closeThemeModal);

    // remove active class ""circle""" from spans or font size  selctors
    const removeSizeSelector = () => {
        fontSizes.forEach(size => {
            size.classList.remove("active");
        })
    } 
    /*========== fonts ===========*/

fontSizes.forEach(size => {
    size.addEventListener('click' , () => {
        removeSizeSelector(); //call function
        let fontSizes;
        size.classList.toggle('active'); //>> new circle in button
        if(size.classList.contains('font-size-1')){
            fontSizes ='12px';
        } 
        else if(size.classList.contains('font-size-2')){
            fontSizes ='14px';
        }
        else if(size.classList.contains('font-size-3')){
            fontSizes ='16px';
        }
        else if(size.classList.contains('font-size-4')){
            fontSizes='18px';
        }
        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSizes;
    })
})

/**==========Primary color========== */
//remove active class from colors 
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => { 
        changeActiveColorClass(); //call function
        let PrimaryHue;

        if(color.classList.contains('color-1')){
            PrimaryHue= 252;
        }
        else if(color.classList.contains('color-2')){
            PrimaryHue= 52;
        }
        else if(color.classList.contains('color-3')){
            PrimaryHue= 352;
        }
        else if(color.classList.contains('color-4')){
            PrimaryHue= 152;
        }
        else if(color.classList.contains('color-5')){
            PrimaryHue= 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', PrimaryHue);
    })
})

/**====background ===== */
let    lightColorLightness;
let    whiteColorLightness;
let    darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightenees'  , lightColorLightness);
    root.style.setProperty('--dark-color-lightenees'   , darkColorLightness);
    root.style.setProperty('--white-color-llightenees' , whiteColorLightness);
}
//chang background color

Bg2.addEventListener('click', () => {
    //add active
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active'); 
    //remove customized changes form local storage
    window.location.reload();
})

Bg1.addEventListener('click', () => {
    darkColorLightness  = '17%';
    whiteColorLightness = '92%';
    lightColorLightness = '100%';
    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness  = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
})