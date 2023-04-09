const localStorage = window.localStorage;
const products = [
    { category: "футболки", name: "Футболка 1", price: 1000, amount: 0 },
    { category: "футболки", name: "Футболка 2", price: 700, amount: 0 },
    { category: "штани", name: "Штани 1", price: 1500, amount: 0 },
    { category: "штани", name: "Штани 2", price: 1300, amount: 0 },
    { category: "шапки", name: "Шапка 1", price: 400, amount: 0 },
    { category: "шапки", name: "Шапка 2", price: 300, amount: 0 }
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
    "<button onclick=\"BuyProduct('" + product.name + "')\">Купити</button>";
}

function BuyProduct(name) {
  let product;
   
  for (let i = 0; i < products.length; i++) {
    if (products[i].name == name) {
      product = products[i];
      product.orderDate = Date.now();
      product.amount++;
      localStorage.setItem(product.name, JSON.stringify(product));
      break;
    }
  }

  const productList = document.getElementById("products");
  productList.innerHTML = "";
  const productInfo = document.getElementById("productInfo");
  productInfo.innerHTML = "";
  
  ShowMyOrders();
}
  
function ShowMyOrders() {
  const orders = [];

  for(let element in localStorage) {
    if(!localStorage.hasOwnProperty(element))
      continue;
    
    const product = JSON.parse(localStorage.getItem(element));
    orders.push(product);
  }
  
  const myOrders = document.getElementById("my-orders");
  myOrders.innerHTML = "";
  orders.forEach(elem => {
    myOrders.innerHTML += "<strong>" + elem.name + "</strong><br>" +
      "Категорія: " + elem.category + "<br>" +
      "Ціна: " + elem.price + " грн<br>" +
      "Дата замовлення: " + new Date(elem.orderDate).toLocaleString() + "<br>" +
      "Кількість: " + elem.amount + "<br>" +
      "<button onclick=\"DeleteProduct('" + elem.name + "')\">Видалити</button><br><br>";
  });
}

function DeleteProduct(name) {

  for(let element in localStorage) {
    if(!localStorage.hasOwnProperty(element))
      continue;
    
    if(element === name) {
      const product = JSON.parse(localStorage.getItem(element));
      
      if(product.amount === 1) {
        product.amount--;
        localStorage.removeItem(name);
      }
      else {
        product.amount--;
        localStorage.setItem(product.name, JSON.stringify(product));
      }
    }
  }
  
  ShowMyOrders();
}