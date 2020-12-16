window.addEventListener('load', () => {
    let tableBody = document.getElementById("table");
    let InpRow = document.createElement("input");
    let InpCol = document.createElement("input");
    InpCol.setAttribute("placeholder", "Number of columns");
    InpRow.setAttribute("placeholder", "Number of rows");
    let Btn = document.createElement("button");
    Btn.innerHTML = "Build";
    tableBody.append(InpRow);
    tableBody.append(InpCol);
    tableBody.append(Btn);

    Btn.addEventListener('click', () => {
        let col = parseInt(InpCol.value);
        let row = parseInt(InpRow.value);
        if(col != "" && row !=""){
            let tableM = document.createElement("table");
            tableBody.append(tableM);
             for(let i=0; i<row; i++){
                 let tr = document.createElement("tr");
                 for(let j=0; j<col; j++){
                     let td = document.createElement("td");
                     td.innerHTML = i+" "+j;
                     tr.append(td);
                 }
                 tableM.append(tr);
             }

        }
    })
})