let cart = [];

function addToCart(name, price) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const itemsContainer = document.getElementById('items');
    const cartCount = document.getElementById('cart-count');
    const totalDisplay = document.getElementById('total-price');
    
    itemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;
        itemsContainer.innerHTML += `
            <div class="item-row">
                <span>${item.name} (x${item.quantity})</span>
                <span>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
            </div>
        `;
    });

    cartCount.innerText = count;
    totalDisplay.innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

function sendWA() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    // GANTI NOMOR DI BAWAH INI DENGAN NOMOR WA ANDA
    let nomorWA = "6282191510425"; // Sesuaikan kembali dengan nomor Anda
    
    let pesan = "*PESANAN BARU - AKSESORISMU.SHOP*\n";
    pesan += "------------------------------------------\n\n";
    
    cart.forEach(item => {
        pesan += `✅ *${item.name}* (x${item.quantity})\n`;
    });

    let totalHarga = 0;
    cart.forEach(item => totalHarga += item.price * item.quantity);

    pesan += `\n💰 *Total: Rp ${totalHarga.toLocaleString('id-ID')}*`;
    pesan += "\n\n------------------------------------------\n";
    pesan += "*Tolong isi tipe/merek HP Anda di sini:*\n";
    pesan += "✍️ Tipe HP: "; // Pembeli tinggal ketik di sini

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}

function toggleCart() {
    document.querySelector('.sidebar').classList.toggle('active');
}
