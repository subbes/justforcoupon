function offscreen(element){
   var elem = document.getElementById(element);
   return( elem.offsetTop > window.innerHeight || (elem.offsetHeight + elem.offSetTop) < 0 );
} // check whether element is outside the viewport

function scroll()
{
   if(offscreen("copyright_text")){
      window.scrollTo(0,document.body.scrollHeight);  // scroll
   }  // if the footer is outside the viewport, scroll
  setTimeout(afterscroll, 3000); // give the page 3 seconds to load
}

function afterscroll()
{
   var offers = document.querySelectorAll('.lt-offer-Clip'); // get all the offers in an array
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
