function offscreen(element){
   var elem = document.getElementById(element);
//   console.log(elem.offsetTop);
//   console.log(window.innerHeight);
   return( elem.offsetTop > window.innerHeight || (elem.offsetHeight + elem.offSetTop) < 0 );
} // check whether element is outside the viewport

if(offscreen("ls-row-3")){
    window.scrollTo(0,document.body.scrollHeight);
} // if the footer is outside the viewport, scroll

// TODO: loop this until whole page is loaded. Experimented with while(offscreen("ls-row-3")){} but got caught in infy loop. hm.

$(".lt-offer-Clip").not("lt-offer-clipped").each(function(){
    $("span:contains('Add')").not("lt-added").trigger('click');
  }
  ); // click each coupon.  this is inefficient.
