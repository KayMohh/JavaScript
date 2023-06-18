var skills = document.querySelector("#skills");
var exp = document.querySelector("#experience");
var edu = document.querySelector("#education");

skills.addEventListener("click", function () {
  skills.classList.add("selected");
  exp.classList.remove("selected");
  alert("Hello");
});
