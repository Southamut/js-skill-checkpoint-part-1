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

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0
  for (goods of products) {
    if (promotionCode === "SALE20") {
      totalPrice += 0.8 * (goods.price * goods.quantity)
    } else if (promotionCode === "SALE50") {
      totalPrice += 0.5 * (goods.price * goods.quantity)
    } else {
      totalPrice += goods.price * goods.quantity
    }
  }
  return totalPrice
}

console.log(calculateTotalPrice(products, promotionCode))