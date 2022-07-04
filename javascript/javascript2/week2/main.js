console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);
const displayOutput = document.getElementById('displayOutput');
const searchType = document.getElementById('searchProducts');
const cheapBtn = document.querySelector(".btn-min-price")
const cheapProducts = document.getElementById("minPrice")
const expensiveBtn = document.querySelector(".btn-max-price")
const expensiveProducts = document.getElementById("maxPrice")

const myProducts = document.querySelector("ul");
myProducts.setAttribute("class", "my-products");

console.log(searchType);
function renderProducts(products) {

    for (let i = 0; i < products.length; i++) {
        let myProductList = document.createElement("li");
        myProductList.setAttribute("class", "my-products-list")
        myProductList.style.listStyle = "none";

        const title = document.createElement("li");
        title.setAttribute("class", "my-products-list-list")
        title.style.fontWeight = "bold"

        const price = document.createElement("li");
        price.setAttribute("class", "my-products-list-list")

        const rate = document.createElement("li");
        rate.setAttribute("class", "my-products-list-list")

        title.innerText = `Title: ${products[i].name}`;
        price.innerText = `Price: ${products[i].price}`;
        rate.innerText = `Rating: ${products[i].rating}`;

        myProductList.appendChild(title); 
        myProductList.appendChild(price);
        myProductList.appendChild(rate);

        myProducts.appendChild(myProductList);
        console.log(myProductList);
    }
};
renderProducts(products);

searchType.addEventListener('keyup', function () {
    const text = searchType.value;
    const rander = products.filter(list => list.name.toLowerCase().includes(text.toLowerCase()))
    if (!text) {
        myProducts.innerHTML = "";
        alert('Please enter your product name')
        renderProducts(products);
    }
    else if (rander.length > 0) {
        myProducts.innerHTML = "";
        renderProducts(rander);
    } else {
        displayOutput.innerHTML = "No more products";
    }
});

cheapBtn.addEventListener("click", function () {
    const inputPrice = cheapProducts.value;
    const cheapRander = products.filter(list => list.price < inputPrice).sort((a, b) => a.price - b.price);
    if (!inputPrice) {
        myProducts.innerHTML = "";
        alert("This is not a Price")
    } else {
        myProducts.innerHTML = "";
        renderProducts(cheapRander)
    }
});

expensiveBtn.addEventListener("click", function () {
    const inputPrice2 = +expensiveProducts.value;
    console.log(inputPrice2)
    const expensiveRander = products.filter(list => list.price > inputPrice2)
    console.log(expensiveRander)
    // const expensiveRander2 = expensiveRander.sort((a, b) => b.price - a.price);
    myProducts.innerHTML = "";
    renderProducts(expensiveRander);
});