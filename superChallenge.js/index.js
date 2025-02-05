import { getStockData } from "./fakeStockAPI.js";

let oldPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  const { name, sym, price, time } = stockData;

  const priceIconElement = document.createElement("img");
  priceIconElement.src =
    price > oldPrice
      ? "./svg/green.svg"
      : price < oldPrice
      ? "./svg/red.svg"
      : "./svg/grey.svg";
  priceIconElement.alt = "price-icon";
  stockDisplayPriceIcon.innerHTML = "";
  stockDisplayPriceIcon.appendChild(priceIconElement);

  oldPrice = price;
  stockDisplayName.textContent = `${name}`;
  stockDisplaySymbol.textContent = `${sym}`;
  stockDisplayPrice.textContent = `${price}`;
  stockDisplayTime.textContent = `${time.slice(0, 8)}`;
}

setInterval(() => {
  const timeId = renderStockTicker(getStockData());
  return () => clearInterval(timeId);
}, 1500);
