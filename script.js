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


function addToCart(product) { 
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Đã thêm sản phẩm vào giỏ hàng!');
    updateCartCount(); // cập nhật số trên icon giỏ hàng
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const cartCountDesktop = document.getElementById('cart-count');
    const cartCountMobile = document.getElementById('cart-count-mobile');

    if (cartCountDesktop) cartCountDesktop.innerText = totalItems;
    if (cartCountMobile) cartCountMobile.innerText = totalItems;
}


document.addEventListener('DOMContentLoaded', updateCartCount);

function formatCurrency(value) {
    return value.toLocaleString('vi-VN') + ' đ';
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p>Giỏ hàng trống.</p>';
        totalElement.innerText = '0 đ';
        return;
    }

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-details">
                <h3>${item.name}</h3>
                <p>Giá: ${formatCurrency(item.price)}</p>
                <p>Số lượng: ${item.quantity}</p>
            </div>
            <div class="cart-actions">
                <p>${formatCurrency(item.price * item.quantity)}</p>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Xóa</button>
            </div>
        `;
        container.appendChild(itemEl);
        total += item.price * item.quantity;
    });

    totalElement.innerText = formatCurrency(total);
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function checkout() {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
        return;
    }

    if (!name || !phone || !address) {
        alert("Vui lòng nhập đầy đủ thông tin khách hàng.");
        return;
    }

    const phoneRegex = /^0[0-9]{9,10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Số điện thoại không hợp lệ.");
        return;
    }

    alert(`Cảm ơn ${name} đã mua hàng!\nSĐT: ${phone}\nĐịa chỉ: ${address}`);
    
    // Xoá giỏ hàng
    localStorage.removeItem('cart');

    // Tải lại giỏ hàng rỗng
    loadCart();

    // Reset form
    document.getElementById('customer-info-form').reset();
}

document.addEventListener('DOMContentLoaded', loadCart);
