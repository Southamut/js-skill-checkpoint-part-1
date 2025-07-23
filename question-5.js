// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = ""
// เริ่มเขียนโค้ดตรงนี้

//Update code by calculate totalPrice before discout
function calculateTotalPrice(products, promotionCode) {
  //Find total
  let totalPrice = 0;
  for (let goods of products) {
    totalPrice += goods.price * goods.quantity;
  }
  //Discount
  if (promotionCode === "SALE20") {
    totalPrice *= 0.8;
  } else if (promotionCode === "SALE50") {
    totalPrice *= 0.5;
  } else {
    totalPrice;
  }
  return totalPrice;
}

// const promotionCode = "SALE20"
// const promotionCode = "SALE50"
console.log(calculateTotalPrice(products, promotionCode));