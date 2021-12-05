function startIconChange() {
    if (document.cookie.split(';').some((item) => item.includes('theme=7'))) {
    var startIcon = document.getElementById('start');
    var startIconPressed = document.getElementById('start2');
    var startMenu = document.getElementById('start-menu');
    if (startIcon.style.display === "block") {
        startIcon.style.display = "none";
        startIconPressed.style.display = "block";
        startMenu.style.display = "block";
    } else {
        startIcon.style.display = "block";
        startIconPressed.style.display = "none";
        startMenu.style.display = "none";
    }
}
    else if (document.cookie.split(';').some((item) => item.includes('theme=xp'))) {
        var startIcon = document.getElementById('start');
        var startIconPressed = document.getElementById('start2');
        startIconPressed.style.width = "100px"
        startIconPressed.src = "images/startmenu/theme/xp/startclick.png"
        var startMenu = document.getElementById('start-menu');
        if (startIcon.style.display === "block") {
            startIcon.style.display = "none";
            startIconPressed.style.display = "block";
            startMenu.style.display = "block";
        } else {
            startIcon.style.display = "block";
            startIconPressed.style.display = "none";
            startMenu.style.display = "none";
        }
 }
 else if (document.cookie.split(';').some((item) => item.includes('theme=98'))) {
    var startIcon = document.getElementById('start');
    var startIconPressed = document.getElementById('start2');
    startIconPressed.style.width = "54px"
    startIconPressed.src = "images/startmenu/theme/98/startclick.png"
    var startMenu = document.getElementById('start-menu');
    if (startIcon.style.display === "block") {
        startIcon.style.display = "none";
        startIconPressed.style.display = "block";
        startMenu.style.display = "block";
    } else {
        startIcon.style.display = "block";
        startIconPressed.style.display = "none";
        startMenu.style.display = "none";
    }
}
}
 function hover() {
    if (document.cookie.split(';').some((item) => item.includes('theme=7'))) {
        let startIcon = document.getElementById('start');
        startIcon.src = 'images/startmenu/start.png'
        startIcon.addEventListener("mouseover", function( event ) {
            event.target.src = 'images/startmenu/starthover.png';
            startIcon.addEventListener ("mouseleave", function (event) {
                event.target.src = 'images/startmenu/start.png'
            })
    }, false);
    }     
     else if (document.cookie.split(';').some((item) => item.includes('theme=xp'))) {
    let startIcon = document.getElementById('start');
    startIcon.style.width = "100px"
    startIcon.src = 'images/startmenu/theme/xp/start.png'
    startIcon.addEventListener("mouseover", function( event ) {
        event.target.src = 'images/startmenu/theme/xp/starthover.png';
        startIcon.addEventListener ("mouseleave", function (event) {
            event.target.src = 'images/startmenu/theme/xp/start.png'
        })
    }, false);
    }
    else if (document.cookie.split(';').some((item) => item.includes('theme=98'))) {
        let startIcon = document.getElementById('start');
        startIcon.style.width = "54px"
        startIcon.src = 'images/startmenu/theme/98/start.png'
        startIcon.addEventListener("mouseover", function( event ) {
            event.target.src = 'images/startmenu/theme/98/starthover.png';
            startIcon.addEventListener ("mouseleave", function (event) {
                event.target.src = 'images/startmenu/theme/98/start.png'
            })
        }, false);
        }
}