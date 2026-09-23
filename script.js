/* =========================================================
   THE CHANAKYA COUNCIL
   Interactive JavaScript
   ========================================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navigation =
        document.getElementById("navigation");

    navigation.classList.toggle("active");

}


/* Close mobile menu after clicking */

document
    .querySelectorAll("#navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navigation")
                .classList.remove("active");

        });

    });



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".committee-card, .leader, .value, .philosophy-card, .conference-card, .info-box, .contact-grid > div"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* ================= NAVBAR EFFECT ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ================= ACTIVE NAV LINK ================= */

const sections =
    document.querySelectorAll("main section[id]");

const navLinks =
    document.querySelectorAll(
        "#navigation a"
    );


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* ================= SMOOTH BUTTON FEEDBACK ================= */

document
    .querySelectorAll(".button")
    .forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transition =
                    "all .25s ease";

            }
        );

    });



/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});
