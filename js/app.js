
//triangle events

document.getElementById('triangle-btn').addEventListener('click', function () {
   //call input value function
    const triangleInput = getinputFieldValueById('triangle-input1', 'triangle-input2');
    const triangleResult = 0.5 * triangleInput;
    // console.log(triangleResult);

    //call result function
    setTextElementValueById('triangle-calculation', triangleResult);
});

//rectangle events
document.getElementById('rectangle-btn').addEventListener('click', function () {
   //call input value function
    const rectangleInput = getinputFieldValueById('rectangle-input1', 'rectangle-input2');

    //call result function
    setTextElementValueById('rectangle-calculation', rectangleInput);
});
//Parallelogram events
document.getElementById('parallelogram-btn').addEventListener('click', function () {
   //call input value function
    const parallelogramInput = getinputFieldValueById('parallelogram-input1', 'parallelogram-input2');

    //call result function
    setTextElementValueById('parallelogram-calculation', parallelogramInput);
});

//Rhombus events
document.getElementById('rhombus-btn').addEventListener('click', function () {
    //call input value function
     const rhombusInput = getinputFieldValueById('rhombus-input1', 'rhombus-input2');
     const rhombusResult = 0.5 * rhombusInput;
    //  console.log(rhombusResult);
 
     //call result function
     setTextElementValueById('rhombus-calculation', rhombusResult);
 });

//Pentagon events
document.getElementById('pentagon-btn').addEventListener('click', function () {
    //call input value function
     const pentagonInput = getinputFieldValueById('pentagon-input1', 'pentagon-input2');
     const pentagonResult = 0.5 * pentagonInput;
    //  console.log(rhombusResult);
 
     //call result function
     setTextElementValueById('pentagon-calculation', pentagonResult);
 });
//Ellipse events
document.getElementById('ellipse-btn').addEventListener('click', function () {
    //call input value function
     const ellipseInput = getinputFieldValueById('ellipse-input1', 'ellipse-input2');
     const ellipseResult = 3.14 * ellipseInput;
    //  console.log(rhombusResult);
 
     //call result function
     setTextElementValueById('ellipse-calculation', ellipseResult);
 });