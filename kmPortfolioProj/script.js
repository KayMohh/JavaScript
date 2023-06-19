var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function expandtab (tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (content of tabcontents) {
    content.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}






// var skills = document.querySelector("#skills");
// var exp = document.querySelector("#experience");
// var edu = document.querySelector("#education");

// skills.addEventListener("click", function () {
//   skills.classList.add("selected");
//   exp.classList.remove("selected");
//   alert("Hello");
// });
