function cookieLang() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
    document.getElementById("language").value = "en";
    document.getElementById("title").innerHTML = "Social Networks";
    document.getElementById("contact").innerHTML = "Contact me!";
    document.getElementById("would").innerHTML = "Would you like to contact me? You can contact me on different platforms such as:";
    document.getElementById("discord").innerHTML = "My Discord server";
    document.getElementById("click_me").innerHTML = "Click me!";
    document.getElementById("or_even").innerHTML = "or even...";
    document.getElementById("twitter").innerHTML = "my Twitter";
    document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
    document.getElementById("about").innerHTML = "About me";
    document.getElementById("contact2").innerHTML = "Contact me";
    document.getElementById("help").innerHTML = "Help develop the site!";
    document.getElementById("shut").innerHTML = "Shut Down";
} else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
    document.getElementById("title").innerHTML = "Réseaux Sociaux";
    document.getElementById("contact").innerHTML = "Contacte-moi !";
    document.getElementById("would").innerHTML = "Tu aimerais pouvoir me contactez ? Tu peux me contactez sur différentes plateformes tels que:";
    document.getElementById("discord").innerHTML = "Depuis Mon serveur Serveur Discord";
    document.getElementById("click_me").innerHTML = "Clique ici !";
    document.getElementById("or_even").innerHTML = "Ou encore...";
    document.getElementById("twitter").innerHTML = "Sur mon Twiter en MP !";
    document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
    document.getElementById("about").innerHTML = "A propos de moi";
    document.getElementById("contact2").innerHTML = "Me Contactez";
    document.getElementById("help").innerHTML = "Aidez à développer ce site !";
    document.getElementById("shut").innerHTML = "Fermer";
}
}
function langSwitch() {
    var langId = document.getElementById("language").value;
    document.cookie = `lang=${langId}; SameSite=None; Secure;`
    if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        document.getElementById("title").innerHTML = "Social Networks";
        document.getElementById("contact").innerHTML = "Contact me!";
        document.getElementById("would").innerHTML = "Would you like to contact me? You can contact me on different platforms such as:";
        document.getElementById("discord").innerHTML = "My Discord server";
        document.getElementById("click_me").innerHTML = "Click me!";
        document.getElementById("or_even").innerHTML = "or even...";
        document.getElementById("twitter").innerHTML = "my Twitter";
        document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
        document.getElementById("about").innerHTML = "About me";
        document.getElementById("contact2").innerHTML = "Contact me";
        document.getElementById("help").innerHTML = "Help develop the site!";
        document.getElementById("shut").innerHTML = "Shut Down";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("title").innerHTML = "Réseaux Sociaux";
        document.getElementById("contact").innerHTML = "Contacte-moi !";
        document.getElementById("would").innerHTML = "Tu aimerais pouvoir me contactez ? Tu peux me contactez sur différentes plateformes tels que:";
        document.getElementById("discord").innerHTML = "Depuis Mon serveur Serveur Discord";
        document.getElementById("click_me").innerHTML = "Clique ici !";
        document.getElementById("or_even").innerHTML = "Ou encore...";
        document.getElementById("twitter").innerHTML = "Sur mon Twiter en MP !";
        document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
        document.getElementById("about").innerHTML = "A propos de moi";
        document.getElementById("contact2").innerHTML = "Me Contactez";
        document.getElementById("help").innerHTML = "Aidez à développer ce site !";
        document.getElementById("shut").innerHTML = "Fermer";
    }
}
