const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

videoList.forEach((video) => {
    if (!video) return;

    video.addEventListener('mouseover', () => {
        video.play();
        if (hoverSign) hoverSign.classList.add('active');
    });

    video.addEventListener('mouseout', () => {
        video.pause();
        if (hoverSign) hoverSign.classList.remove('active');
    });
});

if (menu && sideBar) {
    menu.addEventListener('click', () => {
        sideBar.classList.remove('close-sidebar');
        sideBar.classList.add('open-sidebar');
    });
}

if (closeIcon && sideBar) {
    closeIcon.addEventListener('click', () => {
        sideBar.classList.remove('open-sidebar');
        sideBar.classList.add('close-sidebar');
    });
}

AOS.init({
    duration: 900,
    once: true,
    offset: 100
});

const typingElement = document.getElementById('typing');

if (typingElement) {
    const words = [
        'Full Stack Web Developer',
        'QA Engineer',
        'Software Tester',
        'Automation Tester',
        'Problem Solver'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeEffect = () => {
        const currentWord = words[wordIndex];

        if (!deleting) {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                deleting = true;
                setTimeout(typeEffect, 1800);
                return;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        const speed = deleting ? 45 : 90;
        setTimeout(typeEffect, speed);
    };

    typeEffect();
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 250;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );

                    if (
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "form-message"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const subject =
            document.getElementById(
                "subject"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            formMessage.style.display =
                "block";

            formMessage.style.color =
                "#f87171";

            formMessage.style.background =
                "rgba(248,113,113,0.1)";

            formMessage.textContent =
                "Please fill in all fields.";

            return;
        }


        formMessage.style.display =
            "block";

        formMessage.style.color =
            "#4ade80";

        formMessage.style.background =
            "rgba(34,197,94,0.1)";

        formMessage.textContent =
            "Thank you! Your message has been received.";


        contactForm.reset();

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* =========================================================
   SCROLL REVEAL FOR SKILLS
========================================================= */

const skillBars =
    document.querySelectorAll(
        ".skill-bar span"
    );


skillBars.forEach(
    bar => {

        const width =
            bar.style.width;

        bar.style.width = "0";


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                setTimeout(
                                    () => {

                                        bar.style.transition =
                                            "width 1.5s ease";

                                        bar.style.width =
                                            width;

                                    },
                                    200
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.4
                }
            );


        observer.observe(bar);

    }
);


/* =========================================================
   BACKGROUND VIDEO FALLBACK
========================================================= */

const video =
    document.querySelector(
        ".back-vid"
    );


video.addEventListener(
    "error",
    () => {

        document.querySelector(
            ".background"
        ).style.background =
            "radial-gradient(circle at center, #1b1235, #030305 70%)";

    }
);


/* =========================================================
   DISABLE RIGHT CLICK
   Optional
========================================================= */

// document.addEventListener(
//     "contextmenu",
//     event => event.preventDefault()
// );