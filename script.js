function orderNow(item, price) {
    window.location.href = `order.html?item=${encodeURIComponent(item)}&price=${price}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (document.getElementById('item')) {
        document.getElementById('item').value = urlParams.get('item') || '';
        document.getElementById('price').value = urlParams.get('price') || '';
    }

    if (document.getElementById('orderForm')) {
        document.getElementById('orderForm').addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Your order has been placed successfully!');
            window.location.href = 'index.html';
        });
    }
});