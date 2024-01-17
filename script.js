document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.querySelector(".signinpage");
    const signupForm = document.querySelector(".outline2");
    const signinLink = document.querySelector(".signin-link");
    const signupLink = document.querySelector(".signup-link");
    
    
    signinLink.addEventListener("click", function (e) {
      e.preventDefault();
      signinForm.style.display = "block";
      signupForm.style.display = "none";
     
    });
  
    signupLink.addEventListener("click", function (e) {
      e.preventDefault();
      signinForm.style.display = "none";
      signupForm.style.display = "block";
      
    });
  });