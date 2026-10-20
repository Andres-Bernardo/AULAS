const convertButton = document.getElementById("convert-button");
const convertedCurrency = document.querySelector(".converted-currency");

function convertCurrency() {
    const convertValue = document.querySelector(".values-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value");
    const convertedCurrencyValue = document.querySelector(".converted-currency-value");

    const dolarValue = 5.2;
    const euroValue = 6.5;
    const libraValue = 6.8;

    if (convertedCurrency.value == "dolar") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertValue / dolarValue);
    }

    if (convertedCurrency.value == "euro") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertValue / euroValue);
    }

    if (convertedCurrency.value == "libra") {
    convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(convertValue / libraValue);
}

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(convertValue);

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".USAflag");

    if (convertedCurrency.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolarEUA.png";
    }
    if (convertedCurrency.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (convertedCurrency.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./assets/libra 1.png";
}
    
convertCurrency()
}

convertedCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)