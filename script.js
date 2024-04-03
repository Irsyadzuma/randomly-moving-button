const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".sayang-btn");
const noBtn = document.querySelector(".sik majuk-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Iloveyou baby , iloveyoumore hm sayang sorry marah ii baby tadik syg tinggi sora kat baby.. syg sorry polah baby takut ☹️ baby sorry okay? hm mmwah!";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
