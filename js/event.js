// triangle
document.getElementById('triangle').addEventListener('click',function(){
    const base = getInputField('triangle-base');
    const height = getInputField('triangle-height');  
    const area = HalfMultiArea(base,height);
})
// rectangle
document.getElementById('rectangle').addEventListener('click',function(){
    const base = getInputField('rectangle-base');
    const height = getInputField('rectangle-height');  
    const area = FullMultiArea(base,height);
})
// parallelogram
document.getElementById('parallelogram').addEventListener('click',function(){
    const base = getInputField('parallelogram-base');
    const height = getInputField('parallelogram-height');  
    const area = FullMultiArea(base,height);
})
// rhombus
document.getElementById('rhombus').addEventListener('click',function(){
    
    const base = getInputField('major-diameter');
    const height = getInputField('minor-diameter');  
    const area = HalfMultiArea(base,height);
})
// pentagon
document.getElementById('pentagon').addEventListener('click',function(){
    const base = getInputField('pentagon-perimeter');
    const height = getInputField('pentagon-apothem');  
    const area = HalfMultiArea(base,height);
})
// ellipse
document.getElementById('ellipse').addEventListener('click',function(){
    const base = getInputField('ellipse-semi-major');
    const height = getInputField('ellipse-semi-minor');  
    const area = HalfMultiArea(base,height);
})