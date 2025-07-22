    document.addEventListener('DOMContentLoaded', function() {
            // Xử lý dropdown mobile
            const mobileDropdownTrigger = document.querySelector('.navbar-mobile-dropdown li:nth-child(2) > a');
            const mobileDropdown = document.querySelector('.dropdown-mobile');
            
            if (mobileDropdownTrigger && mobileDropdown) {
                mobileDropdownTrigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    mobileDropdown.style.display = mobileDropdown.style.display === 'block' ? 'none' : 'block';
                });
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Xử lý dropdown mobile
            const mobileDropdownTrigger = document.querySelector('.navbar-mobile-dropdown li:nth-child(3) > a');
            const mobileDropdown = document.querySelector('.dropdown-mobile');
            
            if (mobileDropdownTrigger && mobileDropdown) {
                mobileDropdownTrigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    mobileDropdown.style.display = mobileDropdown.style.display === 'block' ? 'none' : 'block';
                });
            }
        });

    document.addEventListener("DOMContentLoaded", function () {
            const toggleButton = document.getElementById("toggle-button");
            const hiddenProducts = document.querySelectorAll(".hide-product");

            let expanded = false;

            toggleButton.addEventListener("click", function () {
                hiddenProducts.forEach(item => {
                    item.style.display = expanded ? "none" : "block";
                });

                toggleButton.textContent = expanded ? "Xem thêm" : "Thu gọn";
                expanded = !expanded;
            });
        });
    const button = document.getElementById("toggle-button");

    button.addEventListener("click", function () {
    button.classList.toggle("active");
    });
