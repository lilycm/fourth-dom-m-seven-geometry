


function calculateParallalogramArea(){
    //get the parallalogram width
    const parallalogramWidth = document.getElementById('parallelogram-width');
    const parallalogramWidthText = parallalogramWidth.value;
    const parallalogramWidthValue = parseFloat(parallalogramWidthText);
    console.log(parallalogramWidthValue);


    //get the parallalogramheight
    const parallalogramHeight = document.getElementById('parallelogram-height');
    const parallalogramHeightText = parallalogramHeight.value;
    const parallalograHeighthValue = parseFloat(parallalogramHeightText);

    const parallalogramArea = parallalogramWidthValue * parallalograHeighthValue;

    const parallalogramAreaSpan = document.getElementById('parallelogram-area');
    parallalogramAreaSpan.innerText = parallalogramArea;
}