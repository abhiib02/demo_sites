let ezGalleryimages = document.querySelectorAll('.gallery-image');
ezGalleryimages.forEach((image, index) => {
    image.addEventListener('click', () => {
        document.startViewTransition(() => {
            let path = image.currentSrc;
            let highres = image.getAttribute('data-highres');
            //  change here if you want small resolution thumbnail and high resolution image 
            let overlay = document.createElement('div');
            let prevBtn = document.createElement('a');
            let nextBtn = document.createElement('a');
            let closeBtn = document.createElement('a');
            let img = document.createElement('img');
            let caption = document.createElement('p');

            overlay.setAttribute('class', 'overlay');
            caption.setAttribute('class', 'caption');
            prevBtn.setAttribute('class', 'Btn prevBtn');
            prevBtn.innerHTML = `<i class='bx bx-left-arrow-alt' ></i>`;
            nextBtn.setAttribute('class', 'Btn nextBtn');
            nextBtn.innerHTML = `<i class='bx bx-right-arrow-alt' ></i>`;
            closeBtn.setAttribute('class', 'Btn closeBtn');
            closeBtn.innerHTML = `<i class='bx bx-x'></i>`;
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

                    img.setAttribute('src', '' + (highres === null) ? ezGalleryimages[--index].currentSrc : ezGalleryimages[--index].getAttribute('data-highres') + '');
                    caption.innerHTML = ezGalleryimages[index].getAttribute('data-caption');
                } else {
                    img.setAttribute('src', '' + (highres === null) ? ezGalleryimages[index = ezGalleryimages.length - 1].currentSrc : ezGalleryimages[index = ezGalleryimages.length - 1].getAttribute('data-highres') + '');
                    caption.innerHTML = ezGalleryimages[index].getAttribute('data-caption');
                }
            });
            nextBtn.addEventListener('click', () => {
                if (index < ezGalleryimages.length - 1) {
                    img.setAttribute('src', '' + (highres === null) ? ezGalleryimages[++index].currentSrc : ezGalleryimages[++index].getAttribute('data-highres') + '');
                    caption.innerHTML = ezGalleryimages[index].getAttribute('data-caption');
                } else {
                    img.setAttribute('src', '' + (highres === null) ? ezGalleryimages[index = 0].currentSrc : ezGalleryimages[index = 0].getAttribute('data-highres') + '');
                    caption.innerHTML = ezGalleryimages[index].getAttribute('data-caption');
                }
            });
        });
    })
});