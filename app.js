const on = 'white';
const off = 'rgba(255, 255, 255, 0.05)';

const svg = `<svg width="295" height="556" viewBox="0 0 295 556" fill="${off}" xmlns="http://www.w3.org/2000/svg">
                    <path class="a" d="M35 0L18 17L35 34H260L277 17L260 0H35Z" />
                    <path class="b" d="M295 35L278 18L261 35L261 260L278 277L295 260L295 35Z" />
                    <path class="c" d="M295 296L278 279L261 296L261 521L278 538L295 521L295 296Z" />
                    <path class="d" d="M35 522L18 539L35 556H260L277 539L260 522H35Z" />
                    <path class="e" d="M34 296L17 279L-7.43094e-07 296L-1.05782e-05 521L17 538L34 521L34 296Z" />
                    <path class="f" d="M34 35L17 18L-7.43094e-07 35L-1.05782e-05 260L17 277L34 260L34 35Z" />
                    <path class="g" d="M35 261L18 278L35 295H260L277 278L260 261H35Z" />
            </svg>`;

const dots = `<div class="dot"></div>
              <div class="dot"></div>`;

const sevenSegment = document.querySelector(".js-sevenSegment");

for (i = 0; i < 6; i++) {
    if (i > 1 && i % 2 == 0) {
        var dotDiv = document.createElement("div");
        dotDiv.className = "dots";
        dotDiv.innerHTML = dots;
        sevenSegment.appendChild(dotDiv);
    };
    var svgDiv = document.createElement("div");
    svgDiv.innerHTML = svg;
    sevenSegment.appendChild(svgDiv);
};

const segA = document.querySelectorAll(".a");
const segB = document.querySelectorAll(".b");
const segC = document.querySelectorAll(".c");
const segD = document.querySelectorAll(".d");
const segE = document.querySelectorAll(".e");
const segF = document.querySelectorAll(".f");
const segG = document.querySelectorAll(".g");

setInterval(() => {
    let day = new Date();

    // TIME FORMAT
    // h0h1 - m0m1 - s0s1

    h0 = Math.floor(day.getHours() / 10);
    h1 = day.getHours() % 10;

    m0 = Math.floor(day.getMinutes() / 10);
    m1 = day.getMinutes() % 10;

    s0 = Math.floor(day.getSeconds() / 10);
    s1 = day.getSeconds() % 10;

    // console.log(`${h0} ${h1} - ${m0} ${m1} - ${s0} ${s1}`);

    active(h0, 0);
    active(h1, 1);
    active(m0, 2);
    active(m1, 3);
    active(s0, 4);
    active(s1, 5);

}, 1000);

active = (i, x) => {
    if (i == 0) zero(x);
    if (i == 1) one(x);
    if (i == 2) two(x);
    if (i == 3) three(x);
    if (i == 4) four(x);
    if (i == 5) five(x);
    if (i == 6) six(x);
    if (i == 7) seven(x);
    if (i == 8) eight(x);
    if (i == 9) nine(x);
}

one = (x) => {
    segB[x].style.fill = on;
    segC[x].style.fill = on;
    segA[x].style.fill = off;
    segD[x].style.fill = off;
    segE[x].style.fill = off;
    segF[x].style.fill = off;
    segG[x].style.fill = off;
}

two = (x) => {
    segA[x].style.fill = on;
    segB[x].style.fill = on;
    segD[x].style.fill = on;
    segE[x].style.fill = on;
    segG[x].style.fill = on;
    segC[x].style.fill = off;
    segF[x].style.fill = off;
}

three = (x) => {
    segA[x].style.fill = on;
    segB[x].style.fill = on;
    segC[x].style.fill = on;
    segD[x].style.fill = on;
    segG[x].style.fill = on;
    segE[x].style.fill = off;
    segF[x].style.fill = off;
}

four = (x) => {
    segB[x].style.fill = on;
    segC[x].style.fill = on;
    segF[x].style.fill = on;
    segG[x].style.fill = on;
    segA[x].style.fill = off;
    segD[x].style.fill = off;
    segE[x].style.fill = off;
}

five = (x) => {
    segA[x].style.fill = on;
    segC[x].style.fill = on;
    segD[x].style.fill = on;
    segF[x].style.fill = on;
    segG[x].style.fill = on;
    segB[x].style.fill = off;
    segE[x].style.fill = off;
}

six = (x) => {
    segA[x].style.fill = on;
    segC[x].style.fill = on;
    segD[x].style.fill = on;
    segE[x].style.fill = on;
    segF[x].style.fill = on;
    segG[x].style.fill = on;
    segB[x].style.fill = off;
}

seven = (x) => {
    segA[x].style.fill = on;
    segB[x].style.fill = on;
    segC[x].style.fill = on;
    segD[x].style.fill = off;
    segE[x].style.fill = off;
    segF[x].style.fill = off;
    segG[x].style.fill = off;
}

eight = (x) => {
    segA[x].style.fill = on;
    segB[x].style.fill = on;
    segC[x].style.fill = on;
    segD[x].style.fill = on;
    segE[x].style.fill = on;
    segF[x].style.fill = on;
    segG[x].style.fill = on;
}

nine = (x) => {
    segA[x].style.fill = on;
    segB[x].style.fill = on;
    segC[x].style.fill = on;
    segD[x].style.fill = on;
    segF[x].style.fill = on;
    segG[x].style.fill = on;
    segE[x].style.fill = off;
}

zero = (x) => {
    segA[x].style.fill = on;
    segB[x].style.fill = on;
    segC[x].style.fill = on;
    segD[x].style.fill = on;
    segE[x].style.fill = on;
    segF[x].style.fill = on;
    segG[x].style.fill = off;
}