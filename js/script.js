$(document).ready(function() {

  $(".more-details-dot").click(function() {
    $(".member-actions-dropdown").slideToggle();;
  })
//  Open Popup cancel-member-ship
  $(".cancel-membership").on("click",function(){
    $(".popup-overlay").show();
    $(".popup").show();
  });
// close popup and Overlay
  $(".popup-close-icon").on("click",function(){
    $(".popup-overlay").hide();
    $(".popup").hide();
  });

  
});
// to close dropdown Outer
$(document).click(function() {
  $(".member-actions-dropdown").hide();
})

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});