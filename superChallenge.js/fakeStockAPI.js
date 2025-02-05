export function getStockData() {
  return {
    name: "TESLA",
    sym: "TSLA",
    price: (Math.random() * 3).toFixed(2),
    time: new Date().toLocaleTimeString(),
  };
}
