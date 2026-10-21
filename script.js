document.addEventListener("DOMContentLoaded", function () {

    const pages = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const pageLinks = document.querySelectorAll(".page-link");
    const navButtons = document.querySelectorAll(".nav-button");

    const mainNav = document.getElementById("mainNav");
    const menuToggle = document.getElementById("menuToggle");

    const modal = document.getElementById("messageModal");
    const modalClose = document.getElementById("modalClose");
    const modalOk = document.getElementById("modalOk");

    const contactForm = document.getElementById("contactForm");


    /* ================= PAGE SWITCHING ================= */

    function showPage(pageId) {

        pages.forEach(function (page) {
            page.classList.remove("page-active");
        });

        const selectedPage = document.getElementById(pageId);

        if (selectedPage) {
            selectedPage.classList.add("page-active");
        }


        /* Update active navigation */

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.dataset.page === pageId) {
                link.classList.add("active");
            }

        });


        /* Close mobile navigation */

        if (mainNav) {
            mainNav.classList.remove("show");
        }


        /* ALWAYS go to the top when changing page */

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

    }


    /* ================= NAV LINKS ================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const pageId = this.dataset.page;

            showPage(pageId);

        });

    });


    /* ================= FOOTER LINKS ================= */

    pageLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const pageId = this.dataset.page;

            showPage(pageId);

        });

    });


    /* ================= HOME BUTTONS ================= */

    navButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const pageId = this.dataset.page;

            if (pageId) {
                showPage(pageId);
            }

        });

    });


    /* ================= MOBILE MENU ================= */

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("show");

        });

    }


    /* ================= CONTACT FORM ================= */

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            modal.classList.add("show");

            contactForm.reset();

        });

    }


    /* ================= MODAL ================= */

    function closeModal() {

        modal.classList.remove("show");

    }


    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modalOk) {
        modalOk.addEventListener("click", closeModal);
    }


    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    /* ================= YEAR ================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================= DEFAULT PAGE ================= */

    showPage("home");

});