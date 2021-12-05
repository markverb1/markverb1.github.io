function cookieLang() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
    document.getElementById("language").value = "en";
    document.getElementById("title").innerHTML = "About me";
    document.getElementById("who").innerHTML = "Who am I?";
    document.getElementById("descr").innerHTML = "Hey, I'm KevFR! I'm a fan of computers and video games. I make videos about the game Progressbar 95 and tutorials on how to install certain OSs. Don't hesitate to contact me about this!";
    document.getElementById("click").innerHTML = "<i>psst, i'm clickable!</i>"
    document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
    document.getElementById("about").innerHTML = "About me";
    document.getElementById("contact").innerHTML = "Contact me";
    document.getElementById("help").innerHTML = "Help develop the site!";
    document.getElementById("shut").innerHTML = "Shut Down";
} else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
    document.getElementById("title").innerHTML = "A propos de moi";
    document.getElementById("who").innerHTML = "Qui je suis ?";
    document.getElementById("descr").innerHTML = "Hey je suis KevFR ! Je suis un passoné d'informatique et de jeux-vidéos ! Je fais des vidéos sur le jeu Progressbar95 et des tutoriels sur comment installer un OS en particulier ou simplement une simple vidéo ! N'hésite pas à me regoindresur ce je te laisse !  ";
    document.getElementById("click").innerHTML = "<i>psst, je suis cliquable !</i>"
    document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
    document.getElementById("about").innerHTML = "A propos de moi";
    document.getElementById("contact").innerHTML = "Me Contactez";
    document.getElementById("help").innerHTML = "Aidez à développer ce site !";
    document.getElementById("shut").innerHTML = "Fermer";
}
}
function langSwitch() {
    var langId = document.getElementById("language").value;
    document.cookie = `lang=${langId}; SameSite=None; Secure;`
    if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        document.getElementById("title").innerHTML = "About me";
        document.getElementById("who").innerHTML = "Who am I?";
        document.getElementById("descr").innerHTML = "Hey, I'm KevFR! I'm a fan of computers and video games. I make videos about the game Progressbar 95 and tutorials on how to install certain OSs. Don't hesitate to contact me about this!";
        document.getElementById("click").innerHTML = "<i>psst, i'm clickable!</i>"
        document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
        document.getElementById("about").innerHTML = "About me";
        document.getElementById("contact").innerHTML = "Contact me";
        document.getElementById("help").innerHTML = "Help develop the site!";
        document.getElementById("shut").innerHTML = "Shut Down";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("title").innerHTML = "A propos de moi";
        document.getElementById("who").innerHTML = "Qui je suis ?";
        document.getElementById("descr").innerHTML = "Hey je suis KevFR ! Je suis un passoné d'informatique et de jeux-vidéos ! Je fais des vidéos sur le jeu Progressbar95 et des tutoriels sur comment installer un OS en particulier ou simplement une simple vidéo ! N'hésite pas à me regoindresur ce je te laisse !  ";
        document.getElementById("click").innerHTML = "<i>psst, je suis cliquable !</i>"
        document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
        document.getElementById("about").innerHTML = "A propos de moi";
        document.getElementById("contact").innerHTML = "Me Contactez";
        document.getElementById("help").innerHTML = "Aidez à développer ce site !";
        document.getElementById("shut").innerHTML = "Fermer";
    }
}
