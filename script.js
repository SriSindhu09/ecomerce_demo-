/*console.log('====================================');
console.log("Connected");
console.log('====================================');
*/
document.getElementById('add-to-cart').addEventListener('click', function() {
    alert('Item added to cart!');
});
originalPrice =19999
let finalPrice = originalPrice - (originalPrice * discount / 100);
document.write("Original Price: $" + originalPrice + "<br>");
document.write("Discount: " + discount + "%<br>");
document.write("Final Price: $" + finalPrice.toFixed(2));


