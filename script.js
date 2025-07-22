document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll('.navbar-mobile-dropdown > li > a');

    dropdownLinks.forEach(link => {
        const parentLi = link.parentElement;
        const submenu = parentLi.querySelector('ul');

        if (submenu) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const isShown = submenu.style.display === 'block';
                submenu.style.display = isShown ? 'none' : 'block';
            });
        }
    });

    const toggleButton = document.getElementById("toggle-button");
    const hiddenProducts = document.querySelectorAll(".hide-product");
    let expanded = false;

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            hiddenProducts.forEach(item => {
                item.style.display = expanded ? "none" : "block";
            });

            toggleButton.textContent = expanded ? "Xem thêm" : "Thu gọn";
            toggleButton.classList.toggle("active");
            expanded = !expanded;
        });
    }
});
