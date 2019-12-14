// this is a partially revealing module pattern - just a variation on what we've already done

const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll('.u-link'),
        lightBox = document.querySelector('.lightbox'),
        body = document.body,
        burgerButton = document.querySelector('.mobile'),
        burgerMenu = document.querySelector('.burger-menu'),
        burgerOptions = document.querySelectorAll('.burger-option');

    function parseUserData(portItem) {
        let targetFeat = lightBox.querySelector('.feature-hero'),
            targetDesc = lightBox.querySelector('.description'),
            targetImg1 = lightBox.querySelector('.port-image-1'),
            targetImg2 = lightBox.querySelector('.port-image-2'),
            targetImg3 = lightBox.querySelector('.port-image-3'),
            targetImg4 = lightBox.querySelector('.port-image-4');
            //targetImg = lightBox.querySelector('img');

        let featured = `
            <video class="hero-video" controls="controls">
                <source src="images/${portItem.Hero}" type="video/mp4">
            </video>
        `;

        let description = `
            <h6>${portItem.Category}</h6>
            <h2>${portItem.Title}</h2>
            <br><br>
            <h6>Project Description</h6>
            <p>${portItem.Description}</p>
        `;

        let portImage1 = `
            <img src="images/${portItem.Image1}" alt="Portfolio Item 1" class="lb-photo" onerror="this.style.display='none'"></img>
        `;

        let portImage2 = `
            <img src="images/${portItem.Image2}" alt="Portfolio Item 2" class="lb-photo" onerror="this.style.display='none'"></img>
        `;

        let portImage3 = `
            <img src="images/${portItem.Image3}" alt="Portfolio Item 3" class="lb-photo" onerror="this.style.display='none'"></img>
        `;

        let portImage4 = `
            <img src="images/${portItem.Image4}" alt="Portfolio Item 4" class="lb-photo" onerror="this.style.display='none'"></img>
        `;

        targetFeat.innerHTML = featured;
        targetDesc.innerHTML = description;
        targetImg1.innerHTML = portImage1;
        targetImg2.innerHTML = portImage2;
        targetImg3.innerHTML = portImage3;
        targetImg4.innerHTML = portImage4;

        lightBox.classList.add('show-lb');
        body.classList.add('overflow');
    }

    function getUserData(event) {
        event.preventDefault();
        //debugger;
        // 1, 2, or 3 depending on which anchor tag you click
        let url = `/${this.getAttribute('href')}`,
            currentImg = this.firstElementChild.getAttribute('src');

        // this goes and fetches the database content (or an API endpoint)
        // that's why it's called a fetch!
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                data.currentSrc = currentImg;
                parseUserData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function stopVideo() {
        let videoHero = document.querySelector('.hero-video');
        videoHero.pause();
        videoHero.currentTime = 0;
    }

    function closeMenu() {
        burgerMenu.classList.remove('show-burger');
    };

    userButtons.forEach(button => button.addEventListener("click", getUserData));
    burgerOptions.forEach(menu => menu.addEventListener("click", closeMenu));
    lightBox.querySelector('.close').addEventListener("click", stopVideo);

    // wire up the lightbox close button
    lightBox.querySelector('.close').addEventListener("click", function() {
        lightBox.classList.remove('show-lb');
        body.classList.remove('overflow');
    });
    
    // wire up the menu from burger menu
    burgerButton.addEventListener("click", function() {
        burgerMenu.classList.add('show-burger');
        body.classList.add('overflow');
    });

    burgerMenu.querySelector('.close').addEventListener("click", function() {
        burgerMenu.classList.remove('show-burger');
        body.classList.remove('overflow');
    });
})();