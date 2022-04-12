"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const square = document.querySelectorAll(".square");

    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseover", () => {
            if (square[i].classList.contains("animate") === false) {
                square[i].classList.add("animate");
                // window.alert("遊ぶな！！");
            } else {
                square[i].classList.remove("animate");
            }

            // if文消してこっちでもいける
            // square[i].classList.add("animate");
        });
    }
});