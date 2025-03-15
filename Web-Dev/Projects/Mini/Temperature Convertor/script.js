//!Temperature Convertor

document.getElementById("convertButton").addEventListener("click", function () {
  //get the value from temperature input
  const temperature = parseInt(
    document.getElementById("temperatureInput").value
  );
  //get the value from select input
  const conversionType = document.getElementById("conversionType").value;
  //select where to display the result
  const resultDiv = document.getElementById("result");

  //clear the previous value in result div
  resultDiv.innerHTML = "";
  //validiate the user
  if (isNaN(temperature)) {
    resultDiv.innerHTML = "Please Enter Valid Temperature";
    return;
  }
  //conversion logic
  let convertedTemperature;
  if (conversionType == "toCelsius") {
    convertedTemperature = (temperature - 32) * (5 / 9);
    resultDiv.innerHTML = `${temperature}°F is equal to ${convertedTemperature.toFixed(
      2
    )}°C`;
  } else if (conversionType === "toFahrenheit") {
    convertedTemperature = temperature * (9 / 5) + 32;
    resultDiv.innerHTML = `${temperature}°C is equal to ${convertedTemperature.toFixed(
      2
    )}°F`;
  }
});
