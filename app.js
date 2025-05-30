let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    if (typeof valueInEuro !== 'number' || isNaN(valueInEuro) || valueInEuro < 0) {
        throw new Error("El valor debe ser un número positivo");
    }
    return valueInEuro * oneEuroIs.USD;
};

const fromDollarToYen = function(valueInDollar) {
    if (typeof valueInDollar !== 'number' || isNaN(valueInDollar) || valueInDollar < 0) {
        throw new Error("El valor debe ser un número positivo");
    }
    return (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
};

/*el throw new Error lo estaba usando como un control extra por si tenia una falla de
logica haciendo los test y no estaban bien implementados. */
/*En este caso salta tambien el error del test porque se implemento uno explicitamente
para la condicion de entrada 0.
Pero en caso que no se hubiera implementado, cuando se ejecuta npm run app,
aparece el error del throw*/
const fromYenToPound = function(valueInYen) {
    if (typeof valueInYen !== 'number' || isNaN(valueInYen) || valueInYen <= 0) {
        throw new Error("El valor debe ser un número positivo y diferente de 0");
    }
    return (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
};


module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};

console.log(fromYenToPound(0));