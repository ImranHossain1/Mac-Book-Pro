let promo = false;

//getting individual inner text as a float value
function getInnerText(productId){
    const productPrice= document.getElementById(productId);
    const productPriceAmount =parseFloat(productPrice.innerText);
    return productPriceAmount;
}

// setting price at innertext
function setInnerText(productId,price){
    const productPrice= document.getElementById(productId);
    productPrice.innerText = price;
}

//adding extra added products
function addAmount(section, price){
    const sectionPrice= document.getElementById(section);
    let sectionPriceAmount =parseInt(sectionPrice.innerText);
    sectionPriceAmount =price;
    sectionPrice.innerText= sectionPriceAmount;
}

// update total addAmount with discounted price
function UpdateTotalAmount(){
    let bestPriceAmount =getInnerText('best-price');
    let memoryPriceAmount =getInnerText('memory-amount');
    let StoragePriceAmount =getInnerText('storage-amount');
    let deliveryPriceAmount =getInnerText('delivery-amount');
    let totalPriceAmount =getInnerText('total-amount');
    let totalPriceWithDiscountAmount =getInnerText('Total-price');;
    

    totalPriceAmount = bestPriceAmount + memoryPriceAmount + StoragePriceAmount + deliveryPriceAmount;
    setInnerText('memory-amount', memoryPriceAmount);
    setInnerText('total-amount', totalPriceAmount);

    if(promo == true){
        const discount = (totalPriceAmount /100) * 20;
        totalPriceWithDiscountAmount = totalPriceAmount - discount;
    }
    else{
        totalPriceWithDiscountAmount = totalPriceAmount ;
    }
    setInnerText('Total-price', totalPriceWithDiscountAmount);
}


// Memory button Functionalities
document.getElementById('btn-memory-radio1').addEventListener('click',function(){
    addAmount('memory-amount', 0);
    UpdateTotalAmount();
});

document.getElementById('btn-memory-radio2').addEventListener('click',function(){
    addAmount('memory-amount', 180);
    UpdateTotalAmount();
});

//storage Functionalities
document.getElementById('btn-storage-radio1').addEventListener('click',function(){
    addAmount('storage-amount', 0);
    UpdateTotalAmount();
});

document.getElementById('btn-storage-radio2').addEventListener('click',function(){
    addAmount('storage-amount', 100);
    UpdateTotalAmount();
});

document.getElementById('btn-storage-radio3').addEventListener('click',function(){
    addAmount('storage-amount', 180);
    UpdateTotalAmount();
});

// Delivery button Functionalities
document.getElementById('btn-delivery-radio1').addEventListener('click',function(){
    addAmount('delivery-amount', 0);
    UpdateTotalAmount();
});

document.getElementById('btn-delivery-radio2').addEventListener('click',function(){
    addAmount('delivery-amount', 20);
    UpdateTotalAmount();
});

//Apply button functionalities
document.getElementById('apply-discount').addEventListener('click',function(){
    let totalPriceAmount = getInnerText('total-amount');
    let totalPriceWithDiscountAmount = getInnerText('Total-price');

    const promoCode = document.getElementById('promo-code');

    if(promoCode.value == 'stevekaku'){
        promo = true;
        const discount = (totalPriceAmount /100) * 20;
        totalPriceWithDiscountAmount = totalPriceAmount - discount;
        promoCode.value = '';
    }
    else{
        promo = false;
        totalPriceWithDiscountAmount = totalPriceAmount ;
        promoCode.value = '';
    }
    setInnerText('Total-price', totalPriceWithDiscountAmount);
})