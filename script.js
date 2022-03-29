var body = document.getElementById('body');

var text = document.getElementById('text');

var player = document.getElementById('player');
var block = document.getElementById('block');

function jump() {
    text.style.opacity = '0'
    text.style.transition = '500ms'
    player.style.animation = "jump 500ms";

    var count = 0;

    setTimeout(function () {
        block.style.animation = "block 0.55s infinite linear";
    }, 300)
    setTimeout(function uWu() {
        player.style.animation = "";
    }, 510)
    setInterval(function () {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if (blockLeft < 30 && blockLeft > 0 && playerTop > 90) {
            alert('You lose!');
            window.location = window.location.href
        };
    }, 0);
};