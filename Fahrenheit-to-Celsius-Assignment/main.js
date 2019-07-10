// FAHRENHEIT TO CELSIUS ASSIGNMENT

// event listeners
document.getElementById ('convert-btn').addEventListener ('click', convertToCelsius);

// event functions
function convertToCelsius() {
    // find what the user typed in
    let fahren= Number(document.getElementById ('number-box').value);  // value read in as a string 

    // convert what the user typed in 
    let celsius= (fahren-32)*5/9;
    
    // answer display where dashes are
    document.getElementById ('celsius-result').innerHTML = celsius;

}
