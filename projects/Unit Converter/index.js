/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const convertBtn = document.getElementById("convert-btn");
const inputVal = document.getElementById("input-value");
const resultContainer = document.getElementById("result-container")

const data = [
    { "unit": "Length", "unit1": "Meter", "unit2": "Feet", "rate": 3.281 },
    { "unit": "Volume", "unit1": "Liters", "unit2": "Gallons", "rate": 0.264 },
    { "unit": "Mass", "unit1": "Kilograms", "unit2": "Pounds", "rate": 2.204 }


]


convertBtn.addEventListener("click", function () {
    resultContainer.innerHTML = "";
    let inputdata = Number(inputVal.value);
    let htmlstring = "";
    for (let i = 0; i < data.length; i++) {
        htmlstring += `<div class="outputDiv" id="${data[i].unit}">
        <h2>${(data[i].unit)} (${data[i].unit1}/${data[i].unit2})</h2>
        <p>${inputdata} ${data[i].unit1}= ${(inputdata * data[i].rate).toFixed(3)} ${data[i].unit2} | ${inputdata} ${data[i].unit2}= ${(inputdata / data[i].rate).toFixed(3)} ${data[i].unit1}</p> </div>`
    }
    resultContainer.innerHTML = htmlstring;
})