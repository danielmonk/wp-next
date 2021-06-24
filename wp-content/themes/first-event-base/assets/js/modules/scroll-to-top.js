//Get the button:
let mybutton = document.getElementById("back-to-top");
let header = document.getElementById("header");

// initial check
window.onload = function() {scrollFunctionHeader()};

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction(), scrollFunctionHeader(), scrollFunctionMenu(), footerInView()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollFunctionHeader() {
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {  
        header.classList.add('scrolled');
       } else {
        header.classList.remove('scrolled');
    }
}


  function scrollFunctionMenu() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {  
        header.classList.add('scrolled-btn');
       } else {
        header.classList.remove('scrolled-btn');
    }
  }


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// mybutton.addEventListener('click', topFunction);

// scrolled into view
function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

/*
function footerInView(){
    var isElementInView = Utils.isElementInView($('#footer'), false);

    if (isElementInView) {
        mybutton.classList.add("footer");
    } else {
        mybutton.classList.remove("footer");
    }
}
// run on load
//footerInView();
*/

document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', (e) => {

        e.preventDefault();
        let href = elem.getAttribute("href");
        let headerHeight = 54;
        let offsetTop = document.querySelector(href).offsetTop;
        let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        console.log(offsetTop);
        console.log(headerHeight);

        if(href === '#header-link'){
            console.log("back to top");
            if (viewportWidth < 768) {
                offsetTop = offsetTop;
            } else {
                offsetTop = offsetTop - (headerHeight / 2);
            }
        } else {
            if (viewportWidth < 768) {
                offsetTop = offsetTop + (headerHeight);
            } else {
                offsetTop = offsetTop - (headerHeight / 2);
            }
        }
        
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
  
    });
});

document.querySelectorAll('.smooth-scroll').forEach(elem => {
    elem.addEventListener('click', (e) => {

        e.preventDefault();
        let href = elem.querySelector('a').getAttribute("title");
        console.log(href);
        let headerHeight = 54;
        let offsetTop = document.querySelector(href).offsetTop;
        let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        console.log(offsetTop);
        console.log(headerHeight);

        if(href === '#header-link'){
            console.log("back to top");
            if (viewportWidth < 768) {
                offsetTop = offsetTop;
            } else {
                offsetTop = offsetTop - (headerHeight / 2);
            }
        } else {
            if (viewportWidth < 768) {
                offsetTop = offsetTop + (headerHeight);
            } else {
                offsetTop = offsetTop - (headerHeight / 2);
            }
        }
        
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
  
    });
});