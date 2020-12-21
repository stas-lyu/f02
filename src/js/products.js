window.addEventListener('load', ()=>{
    let prod = document.createElement("div");
    prod.classList.add("products");
    let body = document.querySelector("body");
    body.append(prod);
    prod.style.maxWidth = "1170px";
    prod.style.margin = "0 auto";

    let h = document.createElement("h2");
    h.classList.add("prodH");
    prod.append(h);
    h.style.cssText = `font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    position: relative;
    text-align: center;
    magrin: 60px 0;
    padding: 30px 0;`;
    h.innerHTML = "Latest Products";

    let firstFlex = document.createElement("div");
    firstFlex.classList.add("firstFlex");
    let secondFlex = document.createElement("div");
    secondFlex.classList.add("secondFlex");
    prod.append(firstFlex);
    prod.append(secondFlex);
    firstFlex.style.cssText = `display: flex;
    justify-content: space-between;
    margin: 0 0 30px 0;`;
    secondFlex.style.cssText = `display: flex;
    justify-content: space-between;
    margin: 0 0 60px 0;`;
    
    for(let i=0; i<3; i++){
        let divOne = document.createElement("div");
        divOne.style.cssText = `position: relative;
        height: 415px;
        width: 370px;
        background-image: url(img/img${i+1}.png);`;
        let divdivOne = document.createElement("div");
        divOne.append(divdivOne);
        divdivOne.style.cssText = `position: absolute;
        background-color: rgba(100,102,112,0.7);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 28px;
        padding-bottom: 180px;`;
        let pOne = document.createElement("p");
        divdivOne.append(pOne);
        pOne.style.cssText = `height: 100%;
        font-family: 'Open Sans', sans-serif;
        font-size: 40px;
        text-align: center;
        color: white;
        border: 3px solid white;
        margin: 0;
        padding: 150px 0 0 0;`;

        switch(i) {
            case 0:
                pOne.innerHTML = "Men";
                break;
            case 1:
                pOne.innerHTML = "Woman";
                break;
            case 2:
                pOne.innerHTML = "Watches";
                break;
        }
        
        firstFlex.append(divOne);
        
    }

    for(let j = 0; j<2; j++){
        let divTwo = document.createElement("div");
        divTwo.style.cssText = `position: relative;
        height: 415px;
        width: 570px;
        background-image: url(img/img${j+4}.png);`;
        let divdivTwo = document.createElement("div");
        divTwo.append(divdivTwo);
        divdivTwo.style.cssText = `position: absolute;
        background-color: rgba(100,102,112,0.7);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 125px 0;`;
        let pTwo = document.createElement("p");
        pTwo.classList.add("pAftBef");
        divdivTwo.append(pTwo);
        pTwo.style.cssText = `height: 100%;
        position: relative;
        font-family: 'Lato', sans-serif;
        font-size: 45px;
        text-align: center;
        color: white;
        margin: 0;
        padding: 0;`;

        switch(j) {
            case 0:
                pTwo.innerHTML = "40% Off </br>New Autumn </br>Collection";
                break;
            case 1:
                pTwo.innerHTML = "MEGA SALE </br>ON ITEMS FROM </br>SPIRIT COLLECTION";
                break;
        }
        
        secondFlex.append(divTwo);
    }
})