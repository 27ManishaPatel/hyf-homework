console.log("Script loaded");
const products = getAvailableProducts();

const myProducts = document.querySelector("ul");
myProducts.innerText = "My Products";


function renderProducts(products) {

    for (let i = 0; i < products.length; i++) {
        let myProductList = document.createElement("li");
        myProductList.style.padding = "10px";
        myProductList.style.listStyle = "none";

        const title = document.createElement("li");
        title.style.fontWeight = "bold"

        const price = document.createElement("li");

        const rate = document.createElement("li");

        title.innerText = `Title: ${products[i].name}`;
        price.innerText = `Price: ${products[i].price}`;
        rate.innerText = `Rating: ${products[i].rating}`;

        myProductList.appendChild(title);
        myProductList.appendChild(price);
        myProductList.appendChild(rate);

        myProducts.appendChild(myProductList);


    }// your code here
}

console.log(renderProducts(products));
console.log(products)
 // This should create the ul and the li's with the
//individual products details.
