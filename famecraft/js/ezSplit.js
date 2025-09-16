function splitString(str) {
    let splittedTextHtml = '',
        generatedHTML = '';
    let string = str.textContent;
    let i;
    for (i = 0; i < string.length; i++) {
        splittedTextHtml += `
    <span char="${(string[i] != ' ') ? string[i] : '&nbsp;'}" style="--totalChars:${string.length};--index:${i};--delay:${i*100}ms;--duration:${string.length*100}ms">
    ${(string[i] != ' ') ? string[i] : '&nbsp;'}
    </span>`;
    }

    generatedHTML = `<div>${splittedTextHtml}</div>`
    str.innerHTML = generatedHTML;
}

function splittingInit() {
    let splitCharArr = document.querySelectorAll('.split-text');
    splitCharArr.forEach((str) => {
        splitString(str);
    })
}