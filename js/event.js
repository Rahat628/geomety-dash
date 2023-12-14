var count = 1;
var allGeometry ={};
// triangle
document.getElementById('triangle').addEventListener('click', function () {
    const base = getInputField('triangle-base');
    const height = getInputField('triangle-height');
    const area = HalfMultiArea(base, height);
    if (check(allGeometry, 'triangle')) {
        // if it exist then change that p tag
        EditResult(area,'triangle','classTriangle');
    }
    else {
        // if it doesn't exist
        allGeometry.triangle = count ;
        count++;
        showResult(area,'triangle','classTriangle');
    }
});
// rectangle
document.getElementById('rectangle').addEventListener('click', function () {
    const base = getInputField('rectangle-width');
    const height = getInputField('rectangle-height');
    const area = FullMultiArea(base, height);
    if (check(allGeometry, 'rectangle')) {
        // if it exist then change that p tag
        EditResult(area,'rectangle','classRectangle');
    }
    else {
        // if it doesn't exist
        allGeometry.rectangle = count ;
        count++;
        showResult(area,'rectangle','classRectangle');
    }
    
});
// parallelogram
document.getElementById('parallelogram').addEventListener('click', function () {
    const base = getInputField('parallelogram-base');
    const height = getInputField('parallelogram-height');
    const area = FullMultiArea(base, height);
    if (check(allGeometry, 'parallelogram')) {
        // if it exist then change that p tag
        EditResult(area,'parallelogram','classParallelogram');
    }
    else {
        // if it doesn't exist
        allGeometry.parallelogram= count ;
        count++;
        showResult(area,'parallelogram','ClassParallelogram');
    }
});
// rhombus
document.getElementById('rhombus').addEventListener('click', function () {

    const base = getInputField('major-diameter');
    const height = getInputField('minor-diameter');
    const area = HalfMultiArea(base, height);
    if (check(allGeometry, 'rhombus')) {
        // if it exist then change that p tag
        EditResult(area,'rhombus','classRhombus');
    }
    else {
        // if it doesn't exist
        allGeometry.rhombus = count ;
        count++;
        showResult(area,'rhombus','classRhombus');
    }
});
// pentagon
document.getElementById('pentagon').addEventListener('click', function () {
    const base = getInputField('pentagon-perimeter');
    const height = getInputField('pentagon-apothem');
    const area = HalfMultiArea(base, height);
    if (check(allGeometry, 'pentagon')) {
        // if it exist then change that p tag
        EditResult(area,'pentagon','clasPentagon');
    }
    else {
        // if it doesn't exist
        allGeometry.pentagon = count ;
        count++;
        showResult(area,'pentagon','classPentagon');
    }
});
// ellipse
document.getElementById('ellipse').addEventListener('click', function () {
    const base = getInputField('ellipse-semi-major');
    const height = getInputField('ellipse-semi-minor');
    const area = HalfMultiArea(base, height);
    if (check(allGeometry, 'ellipse')) {
        // if it exist then change that p tag
        EditResult(area,'ellipse','classEllipse');
    }
    else {
        // if it doesn't exist
        allGeometry.ellipse = count ;
        count++;
        showResult(area,'ellipse','classEllipse');
    }
});


