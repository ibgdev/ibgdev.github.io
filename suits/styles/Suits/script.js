//  Ibrahim Ghrbali

const MAX_QTY = 9;
const productIdKey = "product";
const orderIdKey = "order";
const inputIdKey = "qte";

var total = 0;

var init = function () {
  createShop();
};
window.addEventListener("load", init);

var createShop = function () {
  var shop = document.getElementById("boutique");
  for (var i = 0; i < catalog1.length; i++) {
    shop.appendChild(createProduct(catalog1[i], i));
  }
};

var createProduct = function (product, index) {
  var block = document.createElement("div");
  block.className = "produit";
  block.id = index + "-" + productIdKey;
  block.appendChild(createBlock("h4", product.name));

  block.appendChild(createFigureBlock(product));

  block.appendChild(createBlock("div", product.description, "description"));
  block.appendChild(createBlock("div", product.price, "prix"));
  block.appendChild(createOrderControlBlock(index));
  return block;
};

var createBlock = function (tag, content, cssClass) {
  var element = document.createElement(tag);
  if (cssClass != undefined) {
    element.className = cssClass;
  }
  element.innerHTML = content;
  return element;
};

var createOrderControlBlock = function (index) {
  var control = document.createElement("div");
  control.className = "controle";

  var input = document.createElement("input");
  input.id = index + "-" + inputIdKey;
  input.type = "number";
  input.step = "1";
  input.value = "0";
  input.min = "0";
  input.max = MAX_QTY.toString();
  input.addEventListener("input", function () {
    var button = document.getElementById(index + "-" + orderIdKey);
    if (parseInt(input.value) > 0) {
      button.style.cursor = "pointer";
    } else {
      button.style.cursor = "auto";
    }
  });
  control.appendChild(input);

  var button = document.createElement("button");
  button.className = "commander";
  button.id = index + "-" + orderIdKey;
  button.addEventListener("click", function () {
    handleCommanderClick(index);
  });
  control.appendChild(button);

  return control;
};

var handleCommanderClick = function (index) {
  var input = document.getElementById(index + "-" + inputIdKey);
  var quantity = parseInt(input.value);

  if (quantity > 0) {
      var product;
      var existingItem = document.querySelector(`.achat[data-index="${index}"]`);

      if (existingItem) {
          var existingQuantity = parseInt(existingItem.querySelector(".quantite").innerText);
          if (existingQuantity + quantity <= 9) {
            var existingPriceText = existingItem.querySelector(".prix").innerText;
            var existingPrice = parseFloat(existingPriceText.substring(0, existingPriceText.length - 2)); 
            var existingTotal = existingQuantity * existingPrice;
            
              quantity += existingQuantity;
              existingItem.querySelector(".quantite").innerText = quantity + "x";
    
              var newTotal = quantity * existingPrice;
              total += newTotal - existingTotal;
              document.getElementById("montant").innerText = total.toFixed(2) ;
            }
      } else {
          if (index < catalog1.length) {
              product = catalog1[index];
          } else if (index < catalog1.length + catalog2.length) {
              product = catalog2[index - catalog1.length];
          }

          var item = document.createElement("div");
          item.className = "achat";
          item.setAttribute("data-index", index);

          item.innerHTML = `
              <figure>
                  <img src="${product.image}" alt="${product.name}" title="${product.name}">
              </figure>
              <h4>${product.name}</h4>
              <div class="prix">${product.price} €</div>
              <div class="quantite">${quantity}x</div>
              <button class="retirer"></button> 
          `;

          var deleteButton = item.querySelector(".retirer");
          deleteButton.addEventListener("click", function () {
              item.parentNode.removeChild(item);
              total -= quantity * product.price;
              document.getElementById("montant").innerText = total.toFixed(2);
          });

          var basket = document.querySelector(".achats");
          basket.appendChild(item);

          total += quantity * product.price;
          document.getElementById("montant").innerText = total.toFixed(2);
      }
  }
};

var createFigureBlock = function (product) {
  var figure = document.createElement("figure");

  var img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.title = product.name;

  figure.appendChild(img);

  return figure;
};

function filtre() {
    var prods = document.getElementsByClassName("produit");
    var rech = document.getElementById('filter').value.trim().toLowerCase();
    
    for (let i = 0; i < prods.length; i++) {
        var productName = prods[i].querySelector("h4").textContent.toLowerCase();
        if (productName.includes(rech) || rech === "") { 
            prods[i].removeAttribute("hidden");
        } else {
            prods[i].setAttribute("hidden", "true");
        }
    }
}


