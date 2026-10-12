document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.href;
    const urlArr = url.split('/');
    if ((urlArr[3] !== '')) {
        document.querySelector('#logo').classList.remove('hide');
    }
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
})


const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector(".menu-window");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');


    if (menuBtn.classList.contains('active')) {
        menu.classList.remove('closed');
        menu.classList.add('active');
        menuBtn.innerHTML = `<img src="/svg/menu-close.svg" class="pe-none" alt="">`;
    } else {
        menu.classList.remove('active');
        menu.classList.add('closed');
        menuBtn.innerHTML = `<img src="/svg/menu-ham.svg" class="pe-none" alt="">`;
    }



})


/*
cursor follower 
*/

const cursor = document.getElementById("cursor");


window.addEventListener('mousemove', (e) => {
    let x = e.clientX,
        y = e.clientY;





    const cursordatas = document.querySelectorAll('[data-cursor]');
    cursordatas.forEach((cursorData) => {
        cursorData.addEventListener('mouseover', () => {
            cursor.innerHTML = setCursorContent(cursorData);

            cursor.style.fontSize = (cursorData.getAttribute('data-cursor-size') !== null) ? `${cursorData.getAttribute('data-cursor-size')}rem` : `1.5rem`;

            cursor.style.fontSize = (cursorData.getAttribute('data-cursor-size') !== null) ? `${cursorData.getAttribute('data-cursor-size')}rem` : `1.5rem`;

            cursor.style.scale = `${cursorData.getAttribute('data-cursor-size')}`;
        })
        cursorData.addEventListener('mouseout', () => {
            cursor.innerHTML = '';
            cursor.style.scale = 1;
        })

    })




    if (cursor.textContent !== "") {
        cursor.style.padding = "0px 10px";

    } else {
        cursor.style.padding = "0px";
    }
    cursor.style.translate = `${x-(cursor.offsetWidth/2)}px ${y-(cursor.offsetHeight/2)}px`;



})

function setCursorContent(cursorData) {




    if (cursorData.getAttribute('data-cursor-img') !== null) {
        return `<img class="small-logo fade-in loading-state " src="${cursorData.getAttribute('data-cursor-img')}" alt="image">`;
    }

    return cursorData.getAttribute('data-cursor');
}


/*
item-viewer
*/
function nxtItemViewer(ele) {
    const nxtItemViewer = document.querySelector(ele);
    const nxtItemViewerWindow = nxtItemViewer.querySelector('.item-viewer');
    const items = nxtItemViewer.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            nxtItemViewerWindow.innerHTML = `
      <img class = "img-fluid loading-state fade-in rounded"
      src = "${item.getAttribute('data-img')}" > `;
        })
    })
}


/* un comment removing locomotive */

window.addEventListener('scroll', (e) => {
    if ((window.scrollY > 600)) {
        document.querySelector('#logo').classList.remove('hide');
    } else {
        document.querySelector('#logo').classList.add('hide');
    }

}) // logo remove on maine  section on scroll 