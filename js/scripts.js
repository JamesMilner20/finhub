

var screenHeight = $(window).height();
var menuBarHeight = $('.part1a').height();
var screenWidth = $(window).width();
var screenSize = screenHeight - menuBarHeight;
var quarterOfScreen = 1/4 * screenSize;
var threeFouth = 1/4 * screenSize;
$(".part2").animate({
        paddingTop: quarterOfScreen+"px",
        paddingBottom: threeFouth+"px",
      });
if (screenWidth > 375) {
  $("body").height(screenSize+"px");
} else {
  $(".nav-tabs").css("left", "10%");
  $("br").hide();
  $("#Property,#Engineering,#Property,#Liability").css("width","80%");
};
  $("#menu3").sortable();
  $("#menu3").disableSelection();

$(document).ready(function(){
 $("#nonLife,#life").click(function(){
    event.preventDefault();
    $(".part2b").removeClass().addClass("container");
    // $(this).addClass("active");
    $(".textt").hide();
    $(".part2").animate({
        paddingTop:"60px",
      });
    $(".part2c").show();
    $(".navbar-nav").css("margin","0px");
    });


  $("#Property,#Engineering,#Bonds,#Liability,#Household,#Marine,#Money").click(function(){
     event.preventDefault();
     $(".part2d").show();
     $(".part2bii").removeClass("well part2bii");
     $("#Property,#Engineering,#Bonds,#Liability,#Household,#Marine,#Money").removeClass("col-md-2 col-md-3 col-md-offset-1")
     });

  $(".companies").click(function(){
     event.preventDefault();
      $(".part2").css("overflow","overlay");
    });

});
