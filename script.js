function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

const words = ["Jason", "جيسن"]; 
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('name').innerHTML += word.shift();
        }   else {
            setTimeout(deletingEffect, 2000); 
            return false;
        };
        timer = setTimeout(loopTyping, 425);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('name').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 200);
    };
    loopDeleting();
};

typingEffect();

