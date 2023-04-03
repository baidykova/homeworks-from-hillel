const buyButton = document.getElementById("buy-button");
const form = document.getElementById("order-form");
const nameInput = document.getElementById('name-input');
const citySelect = document.getElementById('city-select');
const postOfficeSelect = document.getElementById('post-office-select');
const paymentSelect = document.getElementById('payment-select');
const productQuantity = document.getElementById('quantity-input');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit-button');
const orderDetails = document.getElementById('order-details');

const productDetailsParagraph = document.getElementById('product-details');
const deliveryDetailsParagraph = document.getElementById('delivery-details');

buyButton.addEventListener("click", (event) => {
  form.style.display = 'flex';
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  
  if(nameInput.value === "" || citySelect.value === ""  || postOfficeSelect === "" 
    || paymentSelect === ""  || productQuantity.value === "" || productQuantity.value < 1) {
    alert("Будь ласка, коректно заповніть всі обов'язкові поля.");
    return;
  }
  
  alert("Your order has been successfully processed");
  
  const productDetails = `
  <p>Ви замовили ${productQuantity.value} одиниць товару.</p>
  <p>Ви обрали спосіб оплати: ${paymentSelect.value}.</p>
  <p>Ваш коментар до замовлення: ${commentInput.value}.</p>
  `;
  
  const deliveryDetails = `
  <p>ПІБ замовника: ${nameInput.value}.</p>
  <p>Доставка до міста ${citySelect.value} буде здійснена на склад Нової пошти №${postOfficeSelect.value}.</p>
  `;
  
  productDetailsParagraph.innerHTML = productDetails;
  deliveryDetailsParagraph.innerHTML = deliveryDetails;
  orderDetails.style.display = 'flex';
});