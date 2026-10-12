function themeSetter() {
    let themetogglebtn = document.querySelector('#toggle-theme');
    let themecss = document.querySelector('#theme');
    console.log(localStorage.getItem('darktheme'));
    if (localStorage.getItem('darktheme') == 'false') {
        themetogglebtn.innerHTML = `&#9790;`;
        themecss.href = "/css/variable-light.css";
    } else {
        themetogglebtn.innerHTML = `&#9728;`;
        themecss.href = "/css/variable-dark.css";
    }

}

function toggleTheme() {

    if (localStorage.getItem('darktheme') == null) {
        let theme = localStorage.setItem('darktheme', 'true');

    } else {
        let theme = localStorage.getItem('darktheme');
    }
    theme = !theme;
    localStorage.setItem('darktheme', theme);
    let themetogglebtn = document.querySelector('#toggle-theme');
    let themecss = document.querySelector('#theme');
    if (localStorage.getItem('darktheme') == 'false') {
        themetogglebtn.innerHTML = `&#9790;`;
        themecss.href = "/css/variable-light.css";
    } else {
        themetogglebtn.innerHTML = `&#9728;`;
        themecss.href = "/css/variable-dark.css";
    }
}

themeSetter();