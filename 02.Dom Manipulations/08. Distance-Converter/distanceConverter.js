function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');

    let fromDistance = document.getElementById('inputUnits');
    let toDistance = document.getElementById('outputUnits');

    let convertButton = document.getElementById('convert');


    let conversionRatesFromMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    convertButton.addEventListener('click', function () {
        let convertFrom = fromDistance.value;
        let converTo = toDistance.value;

        let inMeters = inputDistance.value * conversionRatesFromMeter[convertFrom];
        let convertedValue = inMeters / conversionRatesFromMeter[converTo];
        outputDistance.value = convertedValue

    })

}