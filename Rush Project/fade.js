$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
  
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        console.log("objectBottom" + objectBottom)
        console.log("windowBottom" + windowBottom)
        if (objectBottom < windowBottom+500) { 
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);
          }
        } else {
            if ($(this).css("opacity")==1) {
                $(this).fadeTo(500,0);
            }
        }
      });
    }).scroll();
  });