// Objective : get base, height of a triangle, Calculate the area by using the provide formula. and then display the area

//step 1: get base value
//step 2: added an in the base input field
//step 3: use getElementById to access the input
//step 4: get value from the input field
//step 5: convert the value to a number using parseFloat



function calculateTringleArea(){

    //get triangle base value
    const triangleBaseInput = document.getElementById('triangel-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log( base);

    //get triangle height value

    const traingleHeightInput = document.getElementById('triangle-height');
    const traingleHeightText = traingleHeightInput.value;
    const height = parseFloat(traingleHeightText);
    console.log(height);


    //calculate tringle area
    const area = 0.5 * base * height;
    console.log('the total area is: ', area);


    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}