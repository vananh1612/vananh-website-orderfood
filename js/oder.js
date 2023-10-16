const orderForm = document.getElementById('order-form');
const orderModal = document.getElementById('order-modal');
const closeBtn = document.getElementById("close-modal");

const displayModal = (orderDetails) => {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = `
		<h2>Order</h2>
		<p><strong>Tên:</strong> ${orderDetails.name}</p>
		<p><strong>Email:</strong> ${orderDetails.email}</p>
		<p><strong>Số điện thoại:</strong> ${orderDetails.phone}</p>
		<p><strong>Sản phẩm:</strong> ${orderDetails.product}</p>
		<p><strong>Số lượng:</strong> ${orderDetails.quantity}</p>
		<p><strong>Địa chỉ giao hàng:</strong> ${orderDetails.address}</p>
		<p><strong>Phương thức thanh toán:</strong> ${orderDetails.payment}</p>
	`;
    orderModal.style.display = "block";
}
const acceptBtn = document.getElementById("accept-btn");

acceptBtn.addEventListener("click", () => {
    orderModal.style.display = "none";
    alert("Đặt hàng thành công")
    window.location.href = "home.html";
});
const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", () => {
    orderModal.style.display = "none";
});


// Close the modal when clicking on "x" button or outside of modal
closeBtn.addEventListener("click", () => {
    orderModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == orderModal) {
        orderModal.style.display = "none";
    }
});

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const orderDetails = {
        name: name,
        email: email,
        phone: phone,
        product: product,
        quantity: quantity,
        address: address,
        payment: payment
    };
    displayModal(orderDetails);
    orderModal.classList.add('modal-show');
});

