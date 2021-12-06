let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Red Bee Leather Bag',
        tag: 'redbeeleatherbag',
        price: 115,
        inCart: 0
    },
    {
    name: 'Chanel Red Bag',
    tag: 'chanelredbag',
    price: 110,
    inCart: 0
},
{
    name: 'Chanel Ash Bag',
    tag: 'chanelashbag',
    price: 119,
    inCart: 0
},
{
    name: 'Baby Pink Bag',
    tag: 'babypinkbag',
    price: 120,
    inCart: 0
},
{
    name: 'Deering Black Bag',
    tag: 'deeringblackbag',
    price: 112,
    inCart: 0
},
{
    name: 'Classic White Bag',
    tag: 'classicwhitebag',
    price: 100,
    inCart: 0
}
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
} 

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }

}
onLoadCartNumbers();