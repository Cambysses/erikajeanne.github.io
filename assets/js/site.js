document.addEventListener("DOMContentLoaded", function () {
    let logo = document.querySelector("#logo");
    document.querySelector(".navbar-brand").addEventListener("mouseover", function () {
        logo.src = "/assets/images/site/logo_winky.webp";
    });
    document.querySelector(".navbar-brand").addEventListener("mouseout", function () {
        logo.src = "/assets/images/site/logo.webp";
    });

    document.querySelectorAll('.gallery-image').forEach(function (img) {
        img.addEventListener('click', function () {
            let modalImage = document.querySelector('#theaterModal .theater-image');
            modalImage.src = this.src;
            let modal = new bootstrap.Modal(document.getElementById('theaterModal'));
            modal.show();
        });
    });

    // Initialize bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});