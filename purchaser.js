function purchase(page, args) {
  console.log("purchasE");
  console.log(page.title);
  page.evaluate(function(params) {
  }, {});
}
function print(s) { 
  console.log(s);
}
exports.purchase = purchase
exports.print = print
