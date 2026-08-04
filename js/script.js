const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {

    nav.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    menu.textContent = nav.classList.contains("active") ? "✕" : "☰";

};

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.onclick=()=>{

        nav.classList.remove("active");

        document.body.classList.remove("menu-open");

        menu.textContent="☰";

    }

});
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.classList.add("loading");

    const data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    fetch("https://script.google.com/macros/s/AKfycbz56dMO3Ecykys0b8niHsWiMUQ9ctUGQ-3QPHDXkg29nSh5DJHsO4a7D_8K-S2OM5zy/exec",{

        method:"POST",

        body:JSON.stringify(data)

    })

    .then(res=>res.text())

    .then(result=>{

        console.log(result);

        submitBtn.classList.remove("loading");

        document.getElementById("successPopup").style.display="flex";

        form.reset();

    })

    .catch(error=>{

        console.error(error);

        submitBtn.classList.remove("loading");

        alert("Something went wrong!");

    });

});
const successPopup = document.getElementById("successPopup");
const closePopupBtn = document.getElementById("closePopupBtn");

closePopupBtn.addEventListener("click", function () {

    successPopup.style.display = "none";

});