let images = document.querySelectorAll('.photo');
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        let path = image.currentSrc;
        let highres = image.getAttribute('data-highres');
        //  change here if you want small resolution thumbnail and high resolution image 
        let overlay = document.createElement('div');
        let prevBtn = document.createElement('a');
        let nextBtn = document.createElement('a');
        let closeBtn = document.createElement('a');
        let img = document.createElement('img');
        let caption = document.createElement('p');
        let src = document.createAttribute('src');
        console.log(highres);
        overlay.setAttribute('class', 'overlay');
        caption.setAttribute('class', 'caption');
        prevBtn.setAttribute('class', 'Btn prevBtn text-decoration-none ');
        prevBtn.innerHTML = '&#8592;';
        nextBtn.setAttribute('class', 'Btn nextBtn text-decoration-none ');
        nextBtn.innerHTML = '&#8594;';
        closeBtn.setAttribute('class', 'Btn closeBtn text-decoration-none ');
        closeBtn.innerHTML = '&#10539;';
        img.setAttribute('src', '' + (highres == null) ? path : highres + '');
        caption.innerHTML = image.getAttribute('data-caption');
        overlay.appendChild(img);
        overlay.appendChild(prevBtn);
        overlay.appendChild(nextBtn);
        overlay.appendChild(closeBtn);
        overlay.appendChild(caption);
        document.body.appendChild(overlay);
        img.classList.add('ful_image');
        closeBtn.addEventListener('click', function () {
            overlay.remove();
        });
        prevBtn.addEventListener('click', () => {
            if (index > 0) {

                img.setAttribute('src', '' + (highres === null) ? images[--index].currentSrc : images[--index]
                    .getAttribute('data-highres') + '');
                caption.innerHTML = images[index].getAttribute('data-caption');
            } else {
                img.setAttribute('src', '' + (highres === null) ? images[index = images.length - 1].currentSrc :
                    images[index = images.length - 1].getAttribute('data-highres') + '');
                caption.innerHTML = images[index].getAttribute('data-caption');
            }
        });
        nextBtn.addEventListener('click', () => {
            if (index < images.length - 1) {
                img.setAttribute('src', '' + (highres === null) ? images[++index].currentSrc : images[++index]
                    .getAttribute('data-highres') + '');
                caption.innerHTML = images[index].getAttribute('data-caption');
            } else {
                img.setAttribute('src', '' + (highres === null) ? images[index = 0].currentSrc : images[index = 0]
                    .getAttribute('data-highres') + '');
                caption.innerHTML = images[index].getAttribute('data-caption');
            }
        });
    });
});