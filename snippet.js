$(".lt-offer-Clip").not("lt-offer-clipped").each(function(){
    $("span:contains('Add')").not("lt-added").trigger('click');
  }
  );
