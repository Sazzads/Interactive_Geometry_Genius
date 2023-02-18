//triangle events
document.getElementById('triangle-btn').addEventListener('click', function () {
    //call input value function
    const triangleInput = getinputFieldValueById('triangle-input1', 'triangle-input2');
    const triangleResult = 0.5 * triangleInput;
    if ( isNaN(triangleResult) || triangleResult<0 || triangleResult=='') {
        alert('Please enter the valid Number');
        return;
    }
    console.log(triangleResult);

    //call result function
    setTextElementValueById('. Triangle', triangleResult);
});

//rectangle events
document.getElementById('rectangle-btn').addEventListener('click', function () {
    //call input value function
    const rectangleInput = getinputFieldValueById('rectangle-input1', 'rectangle-input2');
    
    if ( isNaN(rectangleInput) || rectangleInput<0 || rectangleInput=='') {
        alert('Please enter the valid Number');
        return;
    }


    //call setTextElementValue function
    setTextElementValueById('. Rectangle', rectangleInput);
});

//Parallelogram events
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    //call input value function
    const parallelogramInput = getinputFieldValueById('parallelogram-input1', 'parallelogram-input2');
    if ( isNaN(parallelogramInput) || parallelogramInput<0 || parallelogramInput=='') {
        alert('Please enter the valid Number');
        return;
    }

    //call setTextElementValue function
    setTextElementValueById('. Parallelogram', parallelogramInput);
});

//Rhombus events
document.getElementById('rhombus-btn').addEventListener('click', function () {
    //call input value function
    const rhombusInput = getinputFieldValueById('rhombus-input1', 'rhombus-input2');
    const rhombusResult = 0.5 * rhombusInput;
    if ( isNaN(rhombusResult) || rhombusResult<0 || rhombusResult=='') {
        alert('Please enter the valid Number');
        return;
    }


    //call setTextElementValue function
    setTextElementValueById('. Rhombus', rhombusResult);
});

//Pentagon events
document.getElementById('pentagon-btn').addEventListener('click', function () {
    //call input value function
    const pentagonInput = getinputFieldValueById('pentagon-input1', 'pentagon-input2');
    const pentagonResult = 0.5 * pentagonInput;
    if ( isNaN(pentagonResult) || pentagonResult<0 || pentagonResult=='') {
        alert('Please enter the valid Number');
        return;
    }

    //call setTextElementValue function
    setTextElementValueById('. Pentagon', pentagonResult);
});

//Ellipse events
document.getElementById('ellipse-btn').addEventListener('click', function () {
    //call input value function
    const ellipseInput = getinputFieldValueById('ellipse-input1', 'ellipse-input2');
    const ellipseResult = 3.14 * ellipseInput;
    if ( isNaN(ellipseResult) || ellipseResult<0 || ellipseResult=='') {
        alert('Please enter the valid Number');
        return;
    }

    //call setTextElementValue function
    setTextElementValueById('. Ellipse', ellipseResult);
});

//random color add

document.querySelector('.random').addEventListener('mouseenter', function () {
    const colors = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    this.style.background = colors;
})
document.querySelector('.random2').addEventListener('mouseenter', function () {
    const colors = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    this.style.background = colors;
})
document.querySelector('.random3').addEventListener('mouseenter', function () {
    const colors = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    this.style.background = colors;
})
document.querySelector('.random4').addEventListener('mouseenter', function () {
    const colors = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    this.style.background = colors;
})
document.querySelector('.random5').addEventListener('mouseenter', function () {
    const colors = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    this.style.background = colors;
})
document.querySelector('.random6').addEventListener('mouseenter', function () {
    const colors = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    this.style.background = colors;
})