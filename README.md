#  AgriConnect  Bridging Farmers and Buyers

**AgriConnect** is a digital platform designed to bridge the gap between farmers, buyers, and agricultural input suppliers. It empowers farmers to list their produce or livestock, allows buyers to find fresh products, and connects stakeholders for a more efficient, transparent agricultural ecosystem.

---

##  Features

-  List and display farm products (vegetables, livestock, grains, etc.)
-  Add, edit, and delete product entries 
-  Display product images dynamically using a public API
-  Responsive, clean user interface
-  Event-driven interactions (form submissions, navigation toggles)
-  JSON-based communication with a mock backend (JSON Server)

---

##  Demo

![AgriConnect Screenshot](https://via.placeholder.com/800x400?text=AgriConnect+Demo)

---

##  Technologies Used

- **HTML5** & **CSS3**
- **JavaScript (ES6+)**
- **Font Awesome**
- **JSON Server** for mock backend
- **Fetch API** for async operations

---

##  Project Structure

```
AgriConnect/
│
├── index.html          # Main HTML layout
├── style.css           # Styling and responsiveness
├── index.js            # JavaScript logic (CRUD operations)
├── db.json             # Mock database (JSON Server)
└── assets/             # (Optional) Images or extra assets
```

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/amos-kipkorir/phase-1-final-project-Agriconnect.git
cd agriconnect
```

### 2. Install JSON Server

```bash
npm install -g json-server
```

### 3. Start the mock API

```bash
json-server --watch db.json
```

### 4. Open in Browser

Open `index.html` with Live Server or any browser.

---

##  API Routes (Mock)

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/products`       | Fetch all products       |
| POST   | `/products`       | Add a new product        |
| PATCH  | `/products/:id`   | Edit an existing product |
| DELETE | `/products/:id`   | Delete a product         |

---

##  Learning Goals

- Practice API integration using `fetch`
- Build dynamic user interfaces with JavaScript
- Apply DOM manipulation and event handling
- Simulate full CRUD functionality

---

##  Future Enhancements

-  User authentication (Farmers & Buyers)
-  Image upload support
-  Search & filter products
-  Categories or tags
-  Chat between buyer and seller
-  Real-time market pricing

---

##  Contributing

Feel free to fork this project and submit a pull request. All contributions are welcome!

---

##  Author

AMOS KIPKORIR

---

##  License

This project is licensed under the MIT License.