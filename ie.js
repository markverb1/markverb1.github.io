isIeOpen();
function isIeOpen() {
    if (document.getElementById('ie-win').style.display = 'block') {
       document.getElementById('ie-bar').style.display = 'block';
    } else if (document.getElementById('ie-win').style.display = 'none') {
        console.log('IE IS NOT OPEN')
       document.getElementById('ie-bar').style.display = 'none';
    }
}