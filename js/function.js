
function getinputFieldValueById(inputField1Id1,inputField2Id2) {
    const inputField1 = document.getElementById(inputField1Id1);
    const inputField1ValueString = inputField1.value;;
    const inputField1Value = parseFloat(inputField1ValueString);
    inputField1.value = '';

    const inputField2 = document.getElementById(inputField2Id2);
    const inputField2ValueString = inputField2.value;;
    const inputField2Value = parseFloat(inputField2ValueString);
    inputField2.value = '';

    const functionResult=inputField1Value*inputField2Value;
    return functionResult;
}


function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}