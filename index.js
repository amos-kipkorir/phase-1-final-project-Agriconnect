const API_URL = 'http://localhost:3000/products';

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    setupForm();
    setupNavigationToggle();
});


async function fetchProducts() {
    try {
        const res = await fetch(API_URL);
        const products = await res.json();
        displayProducts(products);
    } catch (err) {
        console.error("Failed to load products", err);
    }
}


function displayProducts(products) {
    const container = document.querySelector('#product-list');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> KES ${product.price}</p>
            <p><strong>Location:</strong> ${product.location}</p>
            <div class="card-buttons">
                <button class="edit-btn" data-id="${product.id}">Edit</button>
                <button class="delete-btn" data-id="${product.id}">Delete</button>
            </div>
        `;

        container.appendChild(card);
    });

    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', handleDelete);
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', handleEdit);
    });
}

async function handleDelete(e) {
    const id = e.target.dataset.id;
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            fetchProducts();
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    }
}


function handleEdit(e) {
    const id = e.target.dataset.id;
    const productCard = e.target.closest('.product-card');

    const name = productCard.querySelector('h3').textContent;
    const category = productCard.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
    const price = productCard.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
    const location = productCard.querySelector('p:nth-of-type(3)').textContent.split(': ')[1];
    const image = productCard.querySelector('img').src;

    const form = document.querySelector('#product-form');
    form.name.value = name;
    form.category.value = category;
    form.price.value = price;
    form.location.value = location;
    form.image.value = image;

    form.dataset.editing = id; 
    form.scrollIntoView({ behavior: 'smooth' });
}


function setupForm() {
    const form = document.querySelector('#product-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const newProduct = {
            name: form.name.value.trim(),
            category: form.category.value.trim(),
            price: parseInt(form.price.value),
            location: form.location.value.trim(),
            image: form.image.value.trim()
        };

        const editingId = form.dataset.editing;

        try {
            if (editingId) {
                
                await fetch(`${API_URL}/${editingId}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProduct)
                });
                delete form.dataset.editing;
            } else {
                
                await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProduct)
                });
            }

            fetchProducts(); 
            form.reset();    
        } catch (err) {
            console.error('Failed to save product', err);
        }
    });
}


function setupNavigationToggle() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav');
    });
}