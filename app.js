(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const openModal = document.querySelector(".send");
const userName = document.querySelector(".formName");
const userEamil =document.querySelector(".email");
const openSubject = document.querySelector(".subject")
const openText = document.querySelector(".text");


openModal.addEventListener("click" , ()=>{
        const nameValue = userName.value;
        const emailValue = userEamil.value;
        const subjectValue = openSubject.value;
        const textValue = openText.value;

        const message = `Name:${nameValue}\nEmail: ${emailValue}\nSubject: ${subjectValue}\nMessage: ${textValue}`;
        const botToken = "7171519917:AAG-HTAg6pncNb9wVHrG-sr05mGd0tVjJHk";
        const chatID = "6510725580";
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(message)}`;

        fetch(url)
        .then(res => res.json())
        .then(data =>{
            if(data.ok){
                alert("Ma'lumot jonatildi")
            }else{
                alert("Xatolik yuz berdi")
            }
        })
        .catch(error => {
            console.log("Error");

            alert("Xatolik yuz berdi")
        })
})



