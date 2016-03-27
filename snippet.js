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
// TODO: filter this array further to winnow out already-added offers and avoid clickblasting the page.  
// HINT:  $("span:contains('Add')").not("lt-added").trigger('click');
// !el.classList.contains("lt-added")
   
   if(offscreen("copyright_text")){
      scroll();
   }  // if there's more of the page left, scroll again
}  // problem with this:  it never actually finishes scrolling, haaaaaaaaaaa

scroll();  // scroll?

/* debugging bits
var currentNode // let's look at this node
var ni = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT,
   function(node) {
        return node.nodeName.toLowerCase() === 'div' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
   },
   false
); // nodeIterator


while(currentNode = ni.nextNode()) {
   if(currentNode != ""){
      console.log(currentNode.nodeName);
      console.log(currentNode);
   }
} // iterate the nodes
*/
