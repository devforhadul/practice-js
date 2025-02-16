let products = [
    {pname: 'T-Shirt', price: 400,quantity: 4  },
    {pname: 'Pant', price: 1200,  quantity: 2 },
    {pname: 'Watch', price: 800,  quantity: 1 },
    {pname: 'Mobile', price: 1200,quantity: 3 }
];
function costProduct(product){
    let total = 0;
    for(const count of product){ 
        const totalOfQty = count.price * count.quantity;
        total = total + totalOfQty;
    }
    return total;
}

console.log("Total product cost: ",costProduct(products));