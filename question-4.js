// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let minQuantity = Infinity
let fruitName;
for (let fruit of inventory) {
  if (fruit.quantity < minQuantity) {
    minQuantity = fruit.quantity
    fruitName = fruit.name
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${fruitName} ซึ่งมี ${minQuantity} ชิ้น`)