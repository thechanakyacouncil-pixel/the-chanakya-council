function toggleMenu() {

    const navigation =
        document.getElementById("navigation");

    navigation.classList.toggle("active");

}


/* Close mobile menu after clicking a link */

document
    .querySelectorAll("#navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navigation")
                .classList.remove("active");

        });

    });


/* Scroll reveal animation */

const elements =
    document.querySelectorAll(
        ".committee-card, .leader, .value, .philosophy-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
