
document.getElementById('triangle-btn').addEventListener('click',function(){
    console.log('clicked');
    const triangleInput1=document.getElementById('triangle-input1');
    const triangleInput1ValueString=triangleInput1.value;
    const triangleInput1Value=parseFloat(triangleInput1ValueString);
    console.log(triangleInput1Value)
    triangleInput1.value='';

    const triangleInput2=document.getElementById('triangle-input2');
    const triangleInput2ValueString=triangleInput2.value;
    const triangleInput2Value=parseFloat(triangleInput2ValueString);
    console.log(triangleInput2Value)
    triangleInput2.value='';

    const area=0.5*triangleInput1*triangleInput2;

    const PreviousTriangleCalculation =document.getElementById('triangle-calculation');
    // const triangleCalculation=



})