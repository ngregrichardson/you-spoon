var insultWrapper = $("#insult");
$(function() {
  generate();
});
function generate() {
  $.get("/get", function(insult) {
    insultWrapper.text(insult);
    makeTweet(insult);
  });
}
function makeTweet(insult) {
  var old = document.getElementsByClassName("twitter-share-button");
  if (old != null && old != undefined) {
    for (var i = 0; i < old.length; i++) {
      if (old[i] != null && old[i] != undefined)
        old[i].parentNode.removeChild(old[i]);
    }
  }
  var tweet = document.createElement("a");
  tweet.setAttribute("href", "https://twitter.com/share");
  tweet.setAttribute("class", "twitter-share-button");
  tweet.setAttribute("data-text", `You're just such a ${insult}`);
  tweet.setAttribute("data-url", window.location.href);
  tweet.setAttribute("data-via", "ngregrichardson");
  tweet.setAttribute("data-hashtags", "jk");
  tweet.innerHTML = "Tweet";
  document.getElementById("footer").appendChild(tweet);
  twttr.widgets.load();
}
function copy() {
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
function open() {
  window.open("https://github.com/ngregrichardson", "_blank");
}
