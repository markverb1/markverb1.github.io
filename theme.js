function cookieTheme() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('theme=7'))) {
    document.getElementById('theme').value="7"
    document.getElementById('the-theme').href = "7-modified.css"
    document.getElementById('nav').style.backgroundImage = "url(\"images/startmenu/Taskbar.png\")";
        document.getElementById('digital-clock').style.color = "white"
} else if (document.cookie.split(';').some((item) => item.includes('theme=xp'))) {
    document.getElementById('theme').value="xp"
    document.getElementById('the-theme').href = "https://unpkg.com/xp.css"
    document.getElementById('nav').style.backgroundImage = "url(\"images/startmenu/theme/xp/taskbarXP.png\")";
    document.getElementById('digital-clock').style.color = "white"
} else if (document.cookie.split(';').some((item) => item.includes('theme=98'))) {
    document.getElementById('theme').value="98"
    document.getElementById('the-theme').href = "https://unpkg.com/98.css"
    document.getElementById('nav').style.backgroundImage = "url(\"images/startmenu/theme/98/taskbar98.png\")";
    document.getElementById('digital-clock').style.color = "black"
}
}
function themeSwitch() {
    var themeId = document.getElementById("theme").value;
    document.cookie = `theme=${themeId}; SameSite=None; Secure;`
    if (document.cookie.split(';').some((item) => item.includes('theme=7'))) {
        document.getElementById('the-theme').href = "7-modified.css"
        document.getElementById('digital-clock').style.color = "white"
        document.getElementById('nav').style.backgroundImage = "url(\"images/startmenu/Taskbar.png\")";
    } else if (document.cookie.split(';').some((item) => item.includes('theme=xp'))) {
        document.getElementById('the-theme').href = "https://unpkg.com/xp.css"
        document.getElementById('nav').style.backgroundImage = "url(\"images/startmenu/theme/xp/taskbarXP.png\")";
        document.getElementById('digital-clock').style.color = "white"
    } else if (document.cookie.split(';').some((item) => item.includes('theme=98'))) {
        document.getElementById('the-theme').href = "https://unpkg.com/98.css"
        document.getElementById('nav').style.backgroundImage = "url(\"images/startmenu/theme/98/taskbar98.png\")";
        document.getElementById('digital-clock').style.color = "black"
    }
}
