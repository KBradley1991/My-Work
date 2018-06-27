function validateForm(){
  var vFName = document.forms["contactForm"]["fiName"].value;
  var vLName = document.forms["contactForm"]["laName"].value;
  var vEmail = document.forms["contactForm"]["emailAddress"].value;
  var vSubject = document.forms["contactForm"]["subject"].value;
  if (vFName ==""){
    alert("fill your first name");
    return false;
  }
    else if (vLName =="") {
      alert("Fill your last name");
      return false;
    }
    else if (vEmail =="") {
      alert("Fill your email");
      return false;
    }
    else if (vSubject==""){
      alert("Fill subject name");
      return false;
    }
}
