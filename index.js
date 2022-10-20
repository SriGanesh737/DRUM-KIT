const beats = document.getElementsByClassName('drum');



beats[0].addEventListener("click",()=>
        {
            var audios = new Audio("sounds/crash.mp3");
            audios.play();
    });

beats[1].addEventListener("click", () => {
    var audios = new Audio("sounds/kick-bass.mp3");
    audios.play();
});

beats[2].addEventListener("click", () => {
    var audios = new Audio("sounds/snare.mp3");
    audios.play();
});

beats[3].addEventListener("click", () => {
    var audios = new Audio("sounds/tom-1.mp3");
    audios.play();
});

beats[4].addEventListener("click", () => {
    var audios = new Audio("sounds/tom-2.mp3");
    audios.play();
});

beats[5].addEventListener("click", () => {
    var audios = new Audio("sounds/tom-3.mp3");
    audios.play();
});

beats[6].addEventListener("click", () => {
    var audios = new Audio("sounds/tom-4.mp3");
    audios.play();
});

let key;


document.addEventListener('keydown', (e) =>
{
    key = e.key;
    if (key == 'w')
    {
        var audios = new Audio("sounds/crash.mp3");
        audios.play();
    }
    else if (key == 'a')
    {
        var audios = new Audio("sounds/kick-bass.mp3");
        audios.play();
    }
    else if (key == 's')
    {
        var audios = new Audio("sounds/snare.mp3");
        audios.play();
    }
    else if (key == 'd') {
        var audios = new Audio("sounds/tom-1.mp3");
        audios.play();
    }
    else if (key == 'j') {
        var audios = new Audio("sounds/tom-2.mp3");
        audios.play();
    }
    else if (key == 'k') {
        var audios = new Audio("sounds/tom-3.mp3");
        audios.play();
    }
    else if (key == 'l') {
        var audios = new Audio("sounds/tom-4.mp3");
        audios.play();
    }


})

