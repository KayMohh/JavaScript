var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");

function expandtab() {
  for (tablink of tablinks) {
    tablink.classList.remove("is-active");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("is-active");
  }
  event.currentTarget.classList.add("is-active");
  document.getElementById(tabname).classList.add("is-active");
}

// var skills = document.querySelector("#skills");
// var exp = document.querySelector("#experience");
// var edu = document.querySelector("#education");

// skills.addEventListener("click", function () {
//   skills.classList.add("selected");
//   exp.classList.remove("selected");
//   alert("Hello");
// });
