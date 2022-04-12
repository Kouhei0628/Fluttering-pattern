"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const square = document.querySelectorAll(".square");

    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseover", () => {
            square[i].classList.toggle("animate");
            // window.alert("遊ぶな！！");
        });
    }
});