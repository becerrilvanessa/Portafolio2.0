let btnQuote = document.getElementById("btnQuote");
let btnPrint = document.getElementById("btnPrint");
btnQuote.addEventListener("click", function(e){
    e.preventDefault();
    let hours = parseInt(document.getElementById("inputHours").value);
    let rate = parseFloat(document.getElementById("inputRate").value);
    let iva = document.getElementById("checkIVA").checked;
    let extras = document.getElementById("inputExtras");

    let   Changes =  parseFloat(document.getElementById("inputChanges").value);


    let email = document.getElementById("inputEmail").value;
    let name = document.getElementById("inputName").value;
    Changes = (isNaN (Changes) ? 0 : Changes);
    let fixedCost =  parseFloat(document.getElementById("inputFCost").value);
    
    fixedCost = (isNaN (fixedCost) ? 0 : fixedCost);
   
   
    let cardText = document.getElementById("cardText");
    let cardCost = document.getElementById("cardCost");
    let flag = true;

    if (isNaN(hours)){
       
        document.getElementById("inputHours").style.borderColor = "#00FF00";
        flag=false;
    }

    else{
        document.getElementById("inputHours").value = hours;
        document.getElementById("inputHours").style.borderColor = "#FF0000"; 
    }

    if (isNaN(rate)){
        console.log("Rate Not a Number");
        document.getElementById("inputRate").style.borderColor = "#FF0000";
        flag=false;
    }


    else{
        document.getElementById("inputRate").value = rate;
        document.getElementById("inputRate").style.borderColor = "#00FF00"; 
    }

    if(flag){
       cardText.innerHTML = `Email: ${email},<br/>Name: ${name}`;
//cardText.innerHTML = quote(hours, rate,iva, extras.selectedIndex).toFixed(2);
    cardCost.innerHTML ="$" + quote(hours, rate,iva, extras, Changes, fixedCost).toFixed(2);
}
});

btnPrint.addEventListener("click",function (e){

    e.preventDefault();
    window.print();
});



function quote(h,r,vat,ex,p,fc) {
    p /= 100;//change management
    let result = (h*r) * (1+p);
    //for (inicio; condicion; incremento/decremento)
    let i = 0;//inicio
    do {
  
        console.log(ex.options[i].selected);
        if(ex.options[i].selected){
        result += parseFloat(ex.options[i].value);

    }//if
    i++;//incremento decremento
    } while (i < ex.options.length);//condicion
    result += fc;
    
    if (vat){
        result *= 1.16; 
                        
   }//if vat
   return result;
                        
   } 
