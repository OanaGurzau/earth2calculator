'use strict'

//retrieve DOM Elements
let calculatePriceButton = document.getElementById('calculatePrice');
let calculatePercentageButton = document.getElementById('calculatePercentage');

//calculate increase decrease property Price 
calculatePriceButton.addEventListener("click", function(){
    let newLandValue = document.getElementById('landValue').value;
    let percentage = document.getElementById('percentage').value;
    let percentageType = document.getElementById('percType').value;
    let result, roundedResult;

    //calculation
    if (percentageType == 1){ //increase
        result = newLandValue * (1 + percentage/100);
        roundedResult = Math.round((result + Number.EPSILON) * 100) / 100;
        document.getElementById('result').value = roundedResult;
        
    } else if (percentageType == 2) { //decrease
        console.log('decrease')
        result = newLandValue * (1 - percentage/100);
        roundedResult = Math.round((result + Number.EPSILON) * 100) / 100;
        document.getElementById('result').value = roundedResult;
    }
});

//calculate percentage increase/decrease
calculatePercentageButton.addEventListener("click", function(){
    let newLandValue = document.getElementById('newLandValue').value;
    let currentValue = document.getElementById('salePrice').value;
    let result, roundedResult;

    //calculation
    result = (currentValue - newLandValue) / Math.abs(newLandValue) * 100;
    roundedResult = Math.round((result + Number.EPSILON) * 100) / 100;
    document.getElementById('percentage2').value = roundedResult;
});


//roatate




function flip(){
    let changeText = document.getElementById("switchCalc").innerHTML;
    //  changeText = 'test'
    console.log(changeText)
    if(changeText == "Switch to Percentage Calc &gt;&gt;&gt;"){
        document.getElementById("switchCalc").innerHTML = "Switch to Price Calc &gt;&gt;&gt;";
    }else {
        document.getElementById("switchCalc").innerHTML = "Switch to Percentage Calc &gt;&gt;&gt;"
    }
    let element = document.getElementById('card')
	// var element = e.currentTarget;
	// if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
//   }
};
