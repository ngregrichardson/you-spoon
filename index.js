var insultWrapper = $("#insult");
var twitterButton = $("#tweet");
var popover = $("#popover");
var copyTimeout;
$(function() {
  $("#footer-copy").html(`&copy; Noah Richardson ${new Date().getFullYear()}`);
  generate();
});
function generate() {
  $.get("/get", function(insult) {
    insultWrapper.text(insult);
    makeTweet(insult);
    clearTimeout(copyTimeout);
    popover.text("Copy");
  });
}
function makeTweet(insult) {
  twitterButton.attr("href", `https://twitter.com/intent/tweet?text=You're just such a ${insult}&url=${window.location.href}&hashtags=jk&via=ngregrichardson`)
}
function copy() {
  popover.text("Insult copied!");
  copyTimeout = setTimeout(() => {popover.text("Copy"); }, 2000);
  var element = document.getElementById("insult");
  var range, selection, worked;
  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  document.execCommand("copy");
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}