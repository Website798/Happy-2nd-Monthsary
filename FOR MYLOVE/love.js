$(document).ready(function () {
  var photoSection = $("#photoSection");
  var toggleBtn = $("#togglePhotos");

  toggleBtn.click(function () {
    if (photoSection.is(":visible")) {
      photoSection.slideUp(300);
      toggleBtn.text("Click Here Lovee");
    } else {
      photoSection.slideDown(300);
      toggleBtn.text("Hide?");
    }
  });
});