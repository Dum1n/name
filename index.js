


let slideImages = document.querySelectorAll('.slides img');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;

    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}


prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;

    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}


function autoSliding(){
    deletInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}

autoSliding();

/*const container = document.querySelector('.slide-container1');*/
const buttons = document.querySelector('.buttons');
const dotsContainer1 = document.querySelector('.dotsContainer1');

buttons.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})

dotsContainer1.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})

buttons.addEventListener('mouseout', autoSliding);
dotsContainer1.addEventListener('mouseout', autoSliding);



function indicators(){
    for( i = 0; i < dots.length; i++ ){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.1s ease-in-out forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.1s ease-in-out forwards';
    }
    else if( imageId == counter){
    return
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.1s ease-in-out forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.1s ease-in-out forwards';
    }
    indicators();
}
/*for dropdown*/ 
let bars = document.querySelector('.bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

bars.onclick = function(){
    header.classList.toggle('open');
}
/*Search bar*/

/*let searchbtn = document.querySelector('.searchbtn');*/

/*let closebtn = document.querySelector('.closebtn');*/

/*let searchbox = document.querySelector('.searchbox');

searchbtn.onclick = function(){
    searchbox.classList.toggle('active');*/
    /*closebtn.classList.toggle('active');*/
    /*searchbtn.classList.toggle('active');
}*/

/*pop up*/ 

/*NO POPUP */

/*Header scrolled*/
function headerscrolled(){
    var scrollValue = window.scrollY;
    var header = document.querySelector('.header');
    var bars = document.querySelector('.fa-bars');
    var TEXT = document.querySelector('.TEXT');
    console.log(scrollValue)

    if(scrollValue > 100){
        header.classList.add('active');
        bars.classList.add('active');
        TEXT.classList.add('active');
    } else{
        header.classList.remove('active');
        bars.classList.remove('active');
        TEXT.classList.remove('active');
    }
}

window.addEventListener('scroll', headerscrolled);

if (window.innerWidth > 890) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const elementeas = document.querySelectorAll('.hidden, .hidden1, .hidden3');
    elementeas.forEach((el) => observer.observe(el));

} else {
    const elementeas = document.querySelectorAll('.hidden, .hidden1, .hidden3');
    elementeas.forEach((el) => {
        el.classList.add('show');
    });
}

const product = [
    {
        id: 0,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 1,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 2,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 3,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 4,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g', 
    },
    {
        id: 5,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 6,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 7,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 8,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 9,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 10,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 11,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 12,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 13,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 14,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 15,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 16,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 17,
        image: 'logo.png',
        title: 'Lorem',
        price: 100,
        gramaj: 500 + ' g',
    },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

var displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { id, image, title, price ,gramaj} = item;
        return (
            `<div class='box'>
            <a href='${id}.html'>
                    <img class='images' src=${image}></img>
                <div class='bottom'>
                    <p>${title}</p>
                    <h5> ${gramaj}</h5>
                    <div class='priceb'>
                    <h2>${price}.00 lei</h2></a>
                    <button class='bbb' onclick='addtocart(${JSON.stringify(item)})'><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);

var cart =[];

function addtocart(item){ 
    cart.push(item);
    displaycart(); 
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0;
    let total = 0; // reset total to 0
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Coșul este gol";
        document.getElementById("total").innerHTML = 0+".00 lei";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item)=>
        {
            var {image, title, price} = item;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00 lei";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:16px;'>${title}</p>
                <h2 style='font-size: 16px;'>${price}.00 lei</h2> <br>
                `+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
                
            );
        }).join('');
    } 
}
var displayItemAsString = (items) => {
    return items.map((item) => {
        var { id, image, title, price} = item;
        return `ID: ${id}, Image: ${image}, Title: ${title}, Price: ${price}.00 lei`;
    }).join('\n'); 
};
/*click popup and close popup */

const boxes = document.querySelectorAll('.box');
var popup = document.getElementById('popup');


/*for dropdown*/ 
bars.onclick = function(){
    header.classList.toggle('open');
}

const all = document.querySelector('.button-product1');
const Pizza = document.querySelector('.button-product2');
const Sushi = document.querySelector('.button-product3');
const Blinele = document.querySelector('.button-product4');
var a = document.querySelectorAll('.data a');
var box = document.querySelectorAll('.box');

all.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
})

Pizza.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
    for( i = 5; i < 18; i++ ){
    box[i].classList.add('active');
    }
})

Sushi.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
    for( i = 0; i < 15; i++ ){
    box[i].classList.add('active');
    }
    box[17].classList.add('active');
})

Blinele.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
    for( i = 0; i < 5; i++ ){
    box[i].classList.add('active');
    }
    for( i = 15; i < 18; i++ ){
    box[i].classList.add('active');
    }
    box[17].classList.add('active');
});
/*scroll */
function headerscrolled(){
    var scrollValue = window.scrollY;
    var searchsis = document.querySelector('.searchsis');
    var but = document.querySelector('.buttons');
    var row = document.querySelector('.row');
    console.log(scrollValue)

    if(window.innerWidth > 600){
        if(scrollValue > 845){
            searchsis.classList.add('open');
            but.classList.add('open');
            row.classList.add('open');
        } else{
            searchsis.classList.remove('open');
            but.classList.remove('open');
            row.classList.remove('open');
        }
    } else if(window.innerWidth < 600){
        if(scrollValue > 675){
            searchsis.classList.add('open');
            but.classList.add('open');
            row.classList.add('open');
        } else{
            searchsis.classList.remove('open');
            but.classList.remove('open');
            row.classList.remove('open');
        }
    }
}

window.addEventListener('scroll', headerscrolled);


function clearCart() {
    cart = []; 
    displaycart(); 
}

function clearParams() {
    document.getElementById("fullName").value = '';
    document.getElementById("adresa").value = '';
    document.getElementById("telefon").value = '';
}

function SendMail() {
    if (cart.length === 0) {
        alert("Coșul este gol");
        return;
    }
    let cartDetails = cart.map(item => `  \n ${item.title} - ${item.price}.00 lei`).join();
    var params = {
        from_name: document.getElementById("fullName").value,
        adresa: document.getElementById("adresa").value,
        telefon: document.getElementById("telefon").value,
        message: "Meniul comandat: " + cartDetails
    }

    emailjs.send("service_fzt9l1q", "template_qnxac9g", params)
        .then(function(res) {
            alert("Success! " + res.status);
            clearCart();
            clearParams(); 
        })
        .catch(function(error) {
            console.error("Failed to send email: ", error);
            alert("Failed to send email. Check console for more details.");
        });
}
