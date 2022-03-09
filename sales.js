const sales = [ 

    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    
    ];

    displaySales(sales);
    
    function displaySales(){
        const salesArray = [];
        for(i=0;i<sales.length;i++){
            var salePrice=0,total=0;
            if(sales[i].discount==null){
                salePrice=sales[i].original;
            }else{
              var  Original=sales[i].original-(sales[i].original*sales[i].discount);
                salePrice=Original;
            }
            total = salePrice*sales[i].stock;
            var Item = sales[i].item;
            var Stock = sales[i].stock;
            var OriginalPrice = sales[i].original;
            var Discount = sales[i].discount;
            var SalePrice = salePrice;
            var Total = total;
            salesArray.push({Item, Stock, OriginalPrice, Discount, SalePrice, Total});
            //var saleItem = "{\n Item: "+ sales[i].item +",\n\t"+"Stock: "+ sales[i].stock +",\n\t"+"OriginalPrice: "+ sales[i].original+",\n\t"+"Discount: "+ sales[i].discount+",\n\t"+"Saleprice: "+salePrice+",\n\t"+"Total: "+total+"\n}";
            //salesArray.push( saleItem);
        }
        console.log(salesArray);
    }