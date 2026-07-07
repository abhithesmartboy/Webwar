const eye = document.querySelector(".eye");
const pass = document.querySelector("input[type='password']");

eye.addEventListener("click", () => {
    if(pass.type === "password"){
      pass.type = "text";
      eye.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }else{
      pass.type = "password";
      eye.innerHTML = '<i class="fa-regular fa-eye"></i>';
  }
});
