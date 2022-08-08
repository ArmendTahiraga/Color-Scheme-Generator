const selectedBox = document.querySelector(".selected-box");
const selected = document.querySelector(".selected");

selectedBox.addEventListener("click", () => {
    document.querySelector(".options-box").classList.toggle("active");
    document.getElementById("drop").classList.toggle("drop-down");
    document.querySelector(".search-box").classList.toggle("move");
});
const options = document.querySelectorAll(".option");
options.forEach((option) => {
    option.addEventListener("click", () => {
        selected.value = option.innerHTML;
        setTimeout(() => {
            document.querySelector(".options-box").classList.toggle("active");
            document.getElementById("drop").classList.toggle("drop-down");
            document.querySelector(".search-box").classList.toggle("move");
        }, 500);
    });
});
const seed = document.getElementById("seed-color-select");
const getSchemeBtn = document.getElementById("get-scheme");

getSchemeBtn.addEventListener("click", () => {
    fetch(
        `https://www.thecolorapi.com/scheme?hex=${seed.value.slice(
            1
        )}&mode=${selected.value.toLowerCase()}&count=5`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".first-color").style.backgroundColor =
                data.colors[0].hex.value;
            document.querySelector(".first-color-code").innerHTML =
                data.colors[0].hex.value;

            document.querySelector(".second-color").style.backgroundColor =
                data.colors[1].hex.value;
            document.querySelector(".second-color-code").innerHTML =
                data.colors[1].hex.value;

            document.querySelector(".third-color").style.backgroundColor =
                data.colors[2].hex.value;
            document.querySelector(".third-color-code").innerHTML =
                data.colors[2].hex.value;

            document.querySelector(".fourth-color").style.backgroundColor =
                data.colors[3].hex.value;
            document.querySelector(".fourth-color-code").innerHTML =
                data.colors[3].hex.value;

            document.querySelector(".fifth-color").style.backgroundColor =
                data.colors[4].hex.value;
            document.querySelector(".fifth-color-code").innerHTML =
                data.colors[4].hex.value;
        });
});
