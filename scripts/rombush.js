

function calculateRombushArea() {
    const rombushDimensionOne = document.getElementById('rombush-d-one');
    const rombushDimensionText = rombushDimensionOne.value;
    const rombushDimensionValue = parseFloat(rombushDimensionText);


    const rombushDimensionTwo = document.getElementById('rombush-d-two');
    const rombushDimensionTextTwo = rombushDimensionTwo.value;
    const rombushDimension = parseFloat(rombushDimensionTextTwo);

    const rombushArea = 0.5 * rombushDimensionValue * rombushDimension;

    const rombushResult = document.getElementById('rombush-area');
    rombushResult.innerText = rombushArea;
}