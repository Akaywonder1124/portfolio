let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");
function cursorFunc(e) {
    //move cursor


    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

    //add elements to body
    let element = document.createElement("div");
    element.className = "element";
    body.prepend(element);

    //move elements randomly across x and y axis
    element.style.left = e.pageX + "px";
    element.style.top = e.pageY - 10 + "px";

    setTimeout(function () {
        let text = document.querySelectorAll(".element")[0],
            directionX = Math.random() < 0.5 ? -1 : 1,
            directionY = Math.random() < 0.5 ? -1 : 1

        text.style.left =
            parseInt(text.style.left) - directionX * (Math.random() * 200) + "px";
        text.style.top =
            parseInt(text.style.left) - directionY * (Math.random() * 200) + "px";
        text.style.opacity = 0;
        text.style.transform = "scale(0.25)";
        text.innerHTML = randomText()
    }, 10);
    //remove element
    setTimeout(function () {
        element.remove()
    }, 1000)
};

function randomText() {
    let text = "qwertyuiplkjhgfdsazxcvbnm1234567890@#$%^".split("")
    let letter = text[Math.floor(Math.random() * text.length)]
    return letter
}

//on cursor
function onWebCursor() {
    document.querySelector('.other-project-box').style.cursor = "auto"


}

let card = document.querySelector(".other-project-box")
card.addEventListener('mouseover', onWebCursor)
document.addEventListener('mousemove', cursorFunc)

//typed animtion
let typed = new Typed(".auto-type", {
    strings: ["Coding", "Passion", "Experience"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

//Initialize Swiper
let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});
