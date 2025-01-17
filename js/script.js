$(document).ready(function() {

  $(".more-details-dot").click(function() {
    $(".member-actions-dropdown").slideToggle();
  })
//  Open Popup cancel-member-ship
  $(".cancel-membership").on("click",function(){
    $(".popup-overlay").fadeIn(400);
    $(".popup-cancellation").fadeIn(400);
  });
// close popup and Overlay
  $(".popup-close-icon").on("click",function(){
    $(".popup-overlay").fadeOut(300);
    $(".popup").fadeOut(300);
  });

  
  $('.tab-button').click(function () {
    var tabID = $(this).attr('data-tab');
    $(this).addClass('active').siblings().removeClass('active');

    $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
  });
  
});
// to close dropdown Outer
$(document).click(function (event) {
  if (!$(event.target).closest(".member-profile-deatils-box").length) {
    $(".member-actions-dropdown").hide();
  }
});

$(".member-profile-deatils-box").click(function (event) {
  event.stopPropagation();
});

$(".accordion-item").on("click", function () {
  $(".accordion-content").slideUp();
  $(this).toggleClass("active");
  var content = $(this).find(".accordion-content");
  if (content.is(":visible")) {
    content.slideUp();
  } else {
    content.slideDown();
  }
});

$(".edit-button-wrap").on("click", function(){
  $(".popup-overlay").fadeIn(400);
  $(".popup-edit-application").fadeIn(400);
});

$("#hamburger-icon").on("click", function(){
  console.log($(this).closest(".outer-wrapper"))
  $(this).closest(".outer-wrapper").find(".left-container").toggleClass("active");
});