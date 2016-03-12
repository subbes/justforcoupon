function offscreen(element){
   var elem = document.getElementById(element);
   return( elem.offsetTop > window.innerHeight || (elem.offsetHeight + elem.offSetTop) < 0 );
} // check whether element is outside the viewport

if(offscreen("ls-row-3")){
    window.scrollTo(0,document.body.scrollHeight);
} // if the footer is outside the viewport, scroll
// TODO:  loop this properly to preload page

var offers = document.querySelectorAll('.lt-offer-Clip'); // get all the offers in an array
[].forEach.call(offers, function(el, i) {
   el.click();
}); // fuck it, click all of them

// TODO: filter this array further to winnow out already-added offers and avoid clickblasting the page.  
// HINT:  $("span:contains('Add')").not("lt-added").trigger('click');
// !el.classList.contains("lt-added")


