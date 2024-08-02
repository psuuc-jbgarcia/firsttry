const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
var text1 = document.getElementById("text");

button1.addEventListener("click", function(event) {
    text1.textContent = "Yehey I love you";
    event.preventDefault();
});

button2.addEventListener("mouseover", function(event) {
    const i = Math.floor(Math.random() * 600) + 1;
    const j = Math.floor(Math.random() * 500) + 1;
    button2.style.position = 'absolute';
    button2.style.left = i + "px";
    button2.style.top = j + "px";
});
