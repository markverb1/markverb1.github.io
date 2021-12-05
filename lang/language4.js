function cookieLang() {
console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
    document.getElementById("language").value = "en";
    document.getElementById("mypack").innerHTML = "My Windows 7 pack!";
    document.getElementById("2009").innerHTML = "Do you have a computer from 2009? This pack allows you to install software without Internet Explorer!<br/> It is updated to be compatible and comes in 2 languages!";
    document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
    document.getElementById("about").innerHTML = "About me";
    document.getElementById("contact").innerHTML = "Contact me";
    document.getElementById("help").innerHTML = "Help develop the site!";
    document.getElementById("shut").innerHTML = "Shut Down";
} else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
    document.getElementById("mypack").innerHTML = "Mon Pack Windows 7 !";
    document.getElementById("2009").innerHTML = "Vous avez un ordinateur vieux de 2009 ? Grace à ce pack vous pourrez installer des logiciels sans passer par Internet Explorer !<br/> De plus il est mis à jour pour etre comptablite et existe en deux langues différentes afin d'étendre un plus grand publique ! ";
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
        document.getElementById("mypack").innerHTML = "My Windows 7 pack!";
        document.getElementById("2009").innerHTML = "Do you have a computer from 2009? This pack allows you to install software without Internet Explorer!<br/> It is updated to be compatible and comes in 2 languages!";
        document.getElementById("windows7pack").innerHTML = "Windows 7 pack";
        document.getElementById("about").innerHTML = "About me";
        document.getElementById("contact").innerHTML = "Contact me";
        document.getElementById("help").innerHTML = "Help develop the site!";
        document.getElementById("shut").innerHTML = "Shut Down";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("mypack").innerHTML = "Mon Pack Windows 7 !";
        document.getElementById("2009").innerHTML = "Vous avez un ordinateur vieux de 2009 ? Grace à ce pack vous pourrez installer des logiciels sans passer par Internet Explorer !<br/> De plus il est mis à jour pour etre comptablite et existe en deux langues différentes afin d'étendre un plus grand publique ! ";
        document.getElementById("windows7pack").innerHTML = "Pack Windows 7";
        document.getElementById("about").innerHTML = "A propos de moi";
        document.getElementById("contact").innerHTML = "Me Contactez";
        document.getElementById("help").innerHTML = "Aidez à développer ce site !";
        document.getElementById("shut").innerHTML = "Fermer";
    }
}
