 function getInputField(fieldId){
    const id = document.getElementById(fieldId);
    const numberString = id.value;
    const number = parseFloat(numberString);
    return number;
 }
