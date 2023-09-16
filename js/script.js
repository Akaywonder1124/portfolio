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
      directionY = Math.random() < 0.5 ? -1 : 1;

    text.style.left =
      parseInt(text.style.left) - directionX * (Math.random() * 200) + "px";
    text.style.top =
      parseInt(text.style.left) - directionY * (Math.random() * 200) + "px";
    text.style.opacity = 0;
    text.style.transform = "scale(0.25)";
    text.innerHTML = randomText();
  }, 10);
  //remove element
  setTimeout(function () {
    element.remove();
  }, 1000);
}

function randomText() {
  let text = "qwertyuiplkjhgfdsazxcvbnm1234567890@#$%^".split("");
  let letter = text[Math.floor(Math.random() * text.length)];
  return letter;
}

//on cursor
function onWebCursor() {
  document.querySelector(".other-project-box").style.cursor = "auto";
}

let workBtncollection = document.querySelectorAll(".work");
workBtncollection.forEach(function (item) {
  workBtnClick(item);
});
function workBtnClick(workBtn) {
  workBtn.addEventListener("click", () => {
    let btnText = workBtn.textContent;
    let companyName = btnText.toLowerCase();
    displayWork(companyName);
  });
}

async function displayWork(name) {
  let workExperience = await fetchData(name);
  let div = document.createElement("div");
  div.classList.add("accordion");
  div.innerHTML = `
              <h4 class="accordion-heading text-light">${workExperience.role} <span class="text-primary"> @${workExperience.company_name}</span>
                <h6 class="date-of-work text-light small mt-2">${workExperience.date}</h6>
              </h4>

              <!-- Accordion -->
              <div class="accordion accordion-flush pt-3" id="accordionFlushExample">
  
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Placeholder content for this accordion,
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                      the
                      <code>.accordion-flush</code> class. This is the first item's accordion body.
                    </div>
                  </div>
                </div>
              </div>
`;
  let accordion = document.querySelector(".dynamic-accordion");
  accordion.appendChild(div);
}
async function fetchData(name) {
  const response = await fetch("js/work.json");
  const data = await response.json();
  return data[name];
}

let card = document.querySelector(".other-project-box");
card.addEventListener("mouseover", onWebCursor);
document.addEventListener("mousemove", cursorFunc);
// workBtn.addEventListener("click", workBtnClick);
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