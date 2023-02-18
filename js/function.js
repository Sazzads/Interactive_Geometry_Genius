//
function getinputFieldValueById(inputField1Id1, inputField2Id2) {


    const inputField1 = document.getElementById(inputField1Id1);
    const inputField1ValueString = inputField1.value;;
    const inputField1Value = parseFloat(inputField1ValueString);

    inputField1.value = '';

    const inputField2 = document.getElementById(inputField2Id2);
    const inputField2ValueString = inputField2.value;;
    const inputField2Value = parseFloat(inputField2ValueString);
    if(inputField2Value<0){
        alert('Please enter the valid Number');
        inputField2.value = '';

        return;
    }
    inputField2.value = '';

    const functionResult = inputField1Value * inputField2Value;
    return functionResult;


}


let number=0;
function serialNumber(){
    number++;
    return number;
}
//set text function
function setTextElementValueById(NameOfmasurement, results) {
    const resultDashboard = document.getElementById('calculation-dashboard');
    const p = document.createElement('p')
    p.innerHTML = serialNumber()+NameOfmasurement + "  " + results.toFixed(2) + "<span>cm <sup>2</sup></span>" + '   ' + ' ' + "<span style='color: white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px;' >Convert to m<sup>2</sup></span>";
    resultDashboard.appendChild(p);
}

