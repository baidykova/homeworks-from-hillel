const products = [
    { category: "футболки", name: "Футболка 1", price: 1000 },
    { category: "футболки", name: "Футболка 2", price: 700 },
    { category: "штани", name: "Штани 1", price: 1500 },
    { category: "штани", name: "Штани 2", price: 1300 },
    { category: "шапки", name: "Шапка 1", price: 400 },
    { category: "шапки", name: "Шапка 2", price: 300 }
];

function showCategory(category) {
    const productList = document.getElementById("products");
    productList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        if (products[i].category == category) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.onclick = function () { showProduct(this.innerHTML); };
            a.innerHTML = products[i].name;
            li.appendChild(a);
            productList.appendChild(li);
            a.style.textDecoration = "none";
            a.style.color = "#00000090";
            li.style.display = "block";
        }
    }
}

function showProduct(name) {
    let product;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            product = products[i];
            break;
        }
    }
    const productInfo = document.getElementById("productInfo");
    productInfo.innerHTML = "<strong>" + product.name + "</strong><br>" +
    "Категорія: " + product.category + "<br>" +
    "Ціна: " + product.price + " грн<br>" +
    "<button onclick=\"buyProduct('" + product.name + "')\">Купити</button>";
}

function buyProduct(name) {
    let product;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            product = products[i];
            break;
        }
    }
    alert("Ви купили " + product.name);
    const productList = document.getElementById("products");
    productList.innerHTML = "";
    const productInfo = document.getElementById("productInfo");
    productInfo.innerHTML = "";
}