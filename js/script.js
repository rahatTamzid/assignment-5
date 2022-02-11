//Total Price calculation function 
function totalPrice() {
    const bestPrice = 1299;
    const extraMemoryprice = parseFloat(document.getElementById('memory-feild').innerText);
    const extraStorageprice = parseFloat(document.getElementById('storage-feild').innerText);
    const deliveryCharge = parseFloat(document.getElementById('delivery-feild').innerText);
    const subTotal = bestPrice + extraMemoryprice + extraStorageprice + deliveryCharge;
    document.getElementById('total-price-feild').innerText = subTotal;
    document.getElementById('total-price-footer').innerText = subTotal;

}
//  price set in table    function 
function setPrice(feildID, price) {
    document.getElementById(feildID).innerText = price;
    totalPrice();

}

//Button click handle function
function buttonHandle(buttonID, feildID, price) {
    document.getElementById(buttonID).addEventListener('click', function () {
        setPrice(feildID, price);
        document.getElementById('promo-button').removeAttribute("disabled", false); //enabling button when previous price restored
        document.getElementById('promo-code').setAttribute('placeholder', 'Enter Promo Code ');
        document.getElementById('promo-code').value = '';
    })
}

//Best Price Button Handle
buttonHandle('best-price', 'memory-feild', '00');
//Extended Memory Button Handle
buttonHandle('extended-memory-price', 'memory-feild', '180');
//Base Storage Button Handle 
buttonHandle('base-storage', 'storage-feild', '00');
//Extra storage 1 button handle
buttonHandle('extended-storage-1', 'storage-feild', '100');
//Extra storage 2 button handle
buttonHandle('extended-storage-2', 'storage-feild', '180');
//Base delivery button handle 
buttonHandle('base-delivery', 'delivery-feild', '00');
//Fast  delivery button handle 
buttonHandle('fast-delivery', 'delivery-feild', '20');


//Apply Promo  button handle 
document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-code');
    let promoCode = promoInput.value;
    if (promoCode == 'stevekaku') {
        let previousPrice = parseFloat(document.getElementById('total-price-feild').innerText);
        price = previousPrice * 0.8;
        document.getElementById('total-price-feild').innerText = price;
        document.getElementById('total-price-footer').innerText = price;
        document.getElementById('promo-button').setAttribute("disabled", false); //disabled button for avoiding multiple promo code apply 
        document.getElementById('promo-code').value = '';
        promoInput.setAttribute('placeholder', 'Promo Successfully Applied');
    }
    else {
        document.getElementById('promo-code').value = '';
    }
});



