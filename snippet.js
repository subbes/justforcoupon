function offscreen(element){
   var elem = document.getElementsByClassName(element);
   [].forEach.call(elem, function(el, i) {
   if ( elem.offsetTop > window.innerHeight || (elem.offsetHeight + elem.offSetTop) < 0 )
      return true;
   }); // check if all of the load more buttons are offscreen, if even one is, scroll
   
   return false;
} // check whether element is outside the viewport

function scroll()
{
   if(offscreen("load-more-container")){
      window.scrollTo(0,document.body.scrollHeight);  // scroll
      var elem = document.getElementsByClassName("load-more-container");
         [].forEach.call(elem, function(el, i) {
            el.click();
         }); // click all the 'load more' buttons
   }  // if the footer is outside the viewport, scroll and hit the 'load more' button
  setTimeout(afterscroll, 3000); // give the page 3 seconds to load
}

function afterscroll()
{
   var offers = document.querySelectorAll('.grid-coupon-btn'); // get all the offers in an array
   [].forEach.call(offers, function(el, i) {
      el.click();
   }); // fuck it, click all of them
   
   if(counter < 10){
      counter++;
      scroll();
   }  // loop
}  // scroll 2
var counter = 0; // limit
scroll();  // scroll?
