// 



function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangel-width');
    const rectangelWdthText = rectangleWidth.value;
    const rectangelWidthValue = parseFloat(rectangelWdthText);
    console.log(rectangelWidthValue);


    const rectangelLength = document.getElementById('rectangle-length');
    const rectangelLengthText = rectangelLength.value;
    const rectangelLengthValue = parseFloat(rectangelLengthText);
    console.log(rectangelLengthValue);


    const rectangelArea = rectangelWidthValue * rectangelLengthValue;


    const rectangelAreaSpan = document.getElementById('rectangle-area');
    rectangelAreaSpan.innerText = rectangelArea;

    
}