let body = document.querySelector('body');
let header = document.createElement('header');
header.className = "header"
body.append(header)
let container = document.createElement('div');
container.className = 'container';
header.append(container);

let divLogoMenu = document.createElement('div');
divLogoMenu.className = 'divLogoMenu';
container.append(divLogoMenu);
let divLogo = document.createElement('div');
divLogoMenu.append(divLogo)
$(divLogo).html('<p>BRAND <span>LY</span></p>')

let divNav = document.createElement('nav');
divLogoMenu.append(divNav);
let id = 1;
for(let i = 0; i<6; i++){
    let li = document.createElement('li');
    li.id = id++;
    divNav.append(li);
}

document.getElementById('1').innerHTML = 'Home'
document.getElementById('2').innerHTML = 'Shop'
document.getElementById('3').innerHTML = 'Brands'
document.getElementById('4').innerHTML = 'Blog'
document.getElementById('5').innerHTML = 'About'
document.getElementById('6').innerHTML = 'Contact'

let contentText = document.createElement('div');
container.append(contentText)
contentText.className = 'contentText';
let springSummerParag = document.createElement('p');
springSummerParag.className = 'springSummerParag';
contentText.append(springSummerParag);
springSummerParag.innerHTML = 'Spring / Summer Collection';

let discountParag = document.createElement('p');
contentText.append(discountParag)
discountParag.className = 'discountParag';
discountParag.innerHTML = 'UP TO 60% DISCOUNT ON NEW ARRIVALS'

let itemsTreding = document.createElement('p');
contentText.append(itemsTreding);
itemsTreding.className = 'itemsTreding';
itemsTreding.innerHTML = 'TRENDING NEW ITEMS,FROM CREATORS AROUND THE WORLD';

let btnShopNow = document.createElement('button');
contentText.append(btnShopNow);
btnShopNow.innerHTML = 'SHOP NOW';
btnShopNow.className = 'btnShopNow'

let divCircle = document.createElement('div');
divCircle.className = 'divCircle'
container.append(divCircle)
let i1 = document.createElement('i');
let i2 = document.createElement('i');
let i3 = document.createElement('i');
let i4 = document.createElement('i');
i1.className = 'fas fa-circle'
i2.className = 'fas fa-circle'
i3.className = 'far fa-circle'
i4.className = 'fas fa-circle'
divCircle.append(i1)
divCircle.append(i2)
divCircle.append(i3)
divCircle.append(i4)

