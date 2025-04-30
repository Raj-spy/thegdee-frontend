async function fetchProducts() {
  try {
    const res = await fetch('http://localhost:1337/api/products');
    const data = await res.json();

    const products = data.data;
    const container = document.getElementById('product-container');

    products.forEach(product => {
      const item = product; // Directly using product

      const div = document.createElement('div');
      div.className = 'product';

      div.innerHTML = `
        <h3>${item.Title}</h3>
        <p><strong>Price:</strong> ₹${item.Price}</p>
        <p><strong>Size:</strong> ${item.Sizes}</p>
        <p><strong>Description:</strong> ${item.Description}</p>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    console.error('Error fetching products:', err);
  }
}

fetchProducts();
