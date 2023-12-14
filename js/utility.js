function getInputField(fieldId) {
    const id = document.getElementById(fieldId);
    const numberString = id.value;
    const number = parseFloat(numberString);
    return number;
}
function check( allGeometry,shapeValue) {
    if (Object.keys(allGeometry).indexOf(shapeValue) > -1) {
        return true;
    }
    else
        return false;
}
function showResult(area, geometry,className) {
    const resultShower = document.getElementById('result-area');
    const p = document.createElement('p');
    p.innerText = allGeometry[geometry] + geometry + ' ' + area;
    p.classList.add(className);
    // console.log(p.classList);
    resultShower.appendChild(p);
}
function EditResult(area, geometry,className) {
    const p = document.getElementsByClassName(className);
    p[0].innerText = allGeometry[geometry] + geometry + area;
}