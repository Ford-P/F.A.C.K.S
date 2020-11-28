function openForm(){
  document.body.classList.add("showForm");
}
function closeForm(){
  document.body.classList.remove("showForm");
}
function submitForm(){
  document.body.classList.remove("showForm");
  alert("Form Successfully Submitted");
}
