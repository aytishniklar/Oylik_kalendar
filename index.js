const oy = document.querySelector(".sana h1");
const sana = document.querySelector(".sana p");
const kun = document.querySelector(".kunlar");

const oy_bir = new Date().getMonth();
const kun_bir = new Date(new Date().getFullYear(), oy_bir + 1, 0).getDate();
const kun_ikki = new Date(new Date().getFullYear(), oy_bir, 1).getDay() - 1;


const oylar = [
  "Yanvar",
  "Fevral",
   "Mart",
   "Aprel",
   "May",
   "Iyun",
   "Iyul",
   "Avgust",
   "Sentyabr",
   "Oktyabr",
   "Noyabr",
   "Dekabr",
];

oy.innerText = oylar[oy_bir];
sana.innerText = new Date().toDateString();

let kunlar = "";

for (let i = kun_ikki; i > 0; i--) {
  kunlar += `<div class="bosh"></div>`;
}
for (let i = 1; i <= kun_bir; i++) {
  if (i === new Date().getDate()) {
    kunlar += `<div class="bugun">${i}</div>`;
  } else {
    kunlar += `<div>${i}</div>`;
  }
}

kun.innerHTML = kunlar;