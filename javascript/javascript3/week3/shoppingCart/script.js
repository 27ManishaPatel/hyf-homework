//Shopping    cart using Classes
const searchInput = document.getElementById("searchInput");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        const rate = { EUR: 0.13, USD: 0.14, INR: 10.94 };
        return (this.price * rate[currency]).toFixed(2);
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        const index = this.products.indexOf(product)
        this.products.splice(index, 1)
    }

    searchProduct(productName) {
        const searchProduct = this.products.filter(item => item.name.toLowerCase().includes(productName.toLowerCase()));
        return searchProduct;
    }

    getTotal() {
        const totalPrice = this.products.map(product => product.price);
        let total = 0;
        for (let i = 0; i < totalPrice.length; i++) {
            total += totalPrice[i];
        }
        return total;
    }
    renderProducts() {
        const shoppingCart = document.getElementById("shoppingCart");
        this.products.forEach(pd => {
            const ul = document.createElement("ul");
            ul.innerHTML = ` Product Name: ${pd.name}`
            shoppingCart.appendChild(ul);
            const li = document.createElement("li");
            li.innerHTML = `Price: ${pd.price}`
            ul.appendChild(li)
        })
        const userDetail = document.createElement("p");
        console.log(this.getUser(1))
        userDetail.innerHTML = `UserName: ${this.getUser(2)}, Total Price: ${this.getTotal()}`;
        shoppingCart.appendChild(userDetail);
    }
    getUser(user) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
            .then(Response => Response.json())
            .then(data => {

                console.log(data.username)
            })
    }
}
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const computer = new Product("Computer", 5000);
shoppingCart.addProduct(computer);
const mobile = new Product("Mobile", 7000);
shoppingCart.addProduct(mobile);
const iphone = new Product("I-phone", 8000);
shoppingCart.addProduct(iphone);
shoppingCart.removeProduct(mobile);
shoppingCart.getTotal();
shoppingCart.renderProducts();
// Assuming dkr as default currency
const plant = new Product("plant", 50);
shoppingCart.addProduct(plant);
console.log(plant.convertToCurrency("USD")); // 7.5