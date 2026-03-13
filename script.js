let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const list = document.getElementById('items');
    list.innerHTML = '';
    total = 0;
    cart.forEach(i => {
        total += i.price;
        list.innerHTML += `<div class="item-row"><span>${i.name}</span><span>Rp ${i.price.toLocaleString()}</span></div>`;
    });
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('total').innerText = "Total: Rp " + total.toLocaleString();
}

function sendWA() {
    if (cart.length === 0) return alert("Keranjang kosong!");
    let msg = "Halo Aksesorismu.shop, saya mau order:\n";
    cart.forEach(i => msg += `- ${i.name} (Rp ${i.price.toLocaleString()})\n`);
    msg += `\nTotal: Rp ${total.toLocaleString()}`;
    // Ganti nomor di bawah ini dengan nomor WA kamu
    window.open(`https://wa.me/6282191510425?text=${encodeURIComponent(msg)}`);

}
