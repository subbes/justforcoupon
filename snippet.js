// todo: make this function actually work
(function($){
   $.fn.offscreen = function() {
       return true;
    //  console.log(this.offsetTop);
    //  return( element.offsetTop > window.innerHeight || (element.offsetHeight + element.offSetTop) < 0 );
   }; 
})( jQuery ); // check whether element is outside the viewport

if(console.log($(".ng-scope").offscreen())){
    window.scrollTo(0,document.body.scrollHeight);
}// scroll to the bottom of the currently loaded offers
// todo:  loop this as long as footer is outside the viewport - wait for page to load between each loop so we keep calling scrollTop until everything is loaded

$(".lt-offer-Clip").not("lt-offer-clipped").each(function(){
    $("span:contains('Add')").not("lt-added").trigger('click');
  }
  ); // click each coupon.  this is inefficient.
