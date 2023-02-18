
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

// function setTextElementValueById(elementId, newValue) {
//     const textElement = document.getElementById(elementId);
    
//     // textElement.innerText =newValue;
//     textElement.innerHTML = elementId +"  " +newValue.toFixed(2) +"<span>cm <sup>2</sup></span>" +'   '+' '+ "<span style='color: white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px;' >Convet to m<sup>2</sup></span>";
// }

