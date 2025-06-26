# phase-1-final-project-Agriconnect
#  AgriConnect Marketplace

AgriConnect is a modern web-based marketplace platform that connects farmers and buyers, enabling seamless trade of agricultural products. The platform aims to promote transparency, accessibility, and fair pricing in the agriculture value chain.

##  Features

-  Browse products by category (vegetables, cereals, fruits, etc.)
-  Filter products by category
-  View seller details (name, location, contact)
-  Add new products (form submission)
-  Delete existing products
-  Responsive and styled product cards
-  Works with a JSON Server for quick prototyping and API simulation

##  Tech Stack

- **HTML5**  
- **CSS3 (Responsive Design)**  
- **JavaScript**  
- **JSON Server** *(Mock REST API)*

## 📁 File Structure

```
/agriconnect
│
├── index.html             # Main HTML file
├── style.css              # Stylesheet for layout and design
├── index.js              # All JavaScript logic for UI and API interaction
├── db.json                # JSON Server database (products, sellers, categories)
└── README.md              # Project documentation
```

##  Setup Instructions

### Prerequisites
- Node.js installed
- JSON Server globally installed

### Installation & Run

1. Clone the repository:
```bash
git clone https://github.com/your-username/agriconnect.git
cd agriconnect
```

2. Start JSON Server:
```bash
json-server --watch db.json
```

3. Open `index.html` in your browser

##  Sample API Endpoints

- `GET /products`
- `GET /sellers`
- `GET /categories`
- `POST /products`
- `DELETE /products/:id`

##  Future Enhancements

-  Product update/edit functionality
-  Mobile-first design improvements
-  Dark mode toggle
-  Authentication & role-based access

##  Contributing

Feel free to fork this repository and contribute via pull requests. All suggestions and improvements are welcome!
## Author

AMOS KIPKORIR

##  License

MIT License © 2025 AgriConnect Team