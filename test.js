    const { fromEuroToDollar } = require('./app.js');
    const { fromDollarToYen } = require('./app.js');
    const { fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(dollars).toBeCloseTo(expected,3); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dolar should be 146.26168 yenes", function() {
    const yenes = fromDollarToYen(3.5);
    const expected = 3.5 * 146.26168;
    expect(yenes).toBeCloseTo(expected,3);
})

test("One yen should be 0.005591 pounds", function() {
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.005591;
    expect(pounds).toBeCloseTo(expected,3); 
})

//probando con una cadena de texto sin numeros
test("fromEuroToDollar debería lanzar error si el valor no es un número", () => {
    expect(() => fromEuroToDollar("abc")).toThrow("El valor debe ser un número");
});
test("fromDollarToYen debería lanzar error si el valor no es un número", () => {
    expect(() => fromDollarToYen("abc")).toThrow("El valor debe ser un número");
});
test("fromYenToPound debería lanzar error si el valor no es un número", () => {
    expect(() => fromYenToPound("abc")).toThrow("El valor debe ser un número");
});

//probando con cadena de texto y numeros
test("fromEuroToDollar debería lanzar error si el valor no es un número", () => {
    expect(() => fromEuroToDollar("abc57mv")).toThrow("El valor debe ser un número");
});
test("fromDollarToYen debería lanzar error si el valor no es un número", () => {
    expect(() => fromDollarToYen("abc57mv")).toThrow("El valor debe ser un número");
});
test("fromYenToPound debería lanzar error si el valor no es un número", () => {
    expect(() => fromYenToPound("abc57mv")).toThrow("El valor debe ser un número");
});

//probando con entrada null
test("fromEuroToDollar debería lanzar error si el valor no es un número", () => {
    expect(() => fromEuroToDollar(null)).toThrow("El valor debe ser un número");
});
test("fromDollarToYen debería lanzar error si el valor no es un número", () => {
    expect(() => fromDollarToYen(null)).toThrow("El valor debe ser un número");
});
test("fromYenToPound debería lanzar error si el valor no es un número", () => {
    expect(() => fromYenToPound(null)).toThrow("El valor debe ser un número");
});

//probando con entrada undefined
test("fromEuroToDollar debería lanzar error si el valor no es un número", () => {
    expect(() => fromEuroToDollar(undefined)).toThrow("El valor debe ser un número");
});
test("fromDollarToYen debería lanzar error si el valor no es un número", () => {
    expect(() => fromDollarToYen(undefined)).toThrow("El valor debe ser un número");
});
test("fromYenToPound debería lanzar error si el valor no es un número", () => {
    expect(() => fromYenToPound(undefined)).toThrow("El valor debe ser un número");
});

//probando con booleanos
test("fromEuroToDollar debería lanzar error si el valor no es un número", () => {
    expect(() => fromEuroToDollar(true)).toThrow("El valor debe ser un número");
});
test("fromDollarToYen debería lanzar error si el valor no es un número", () => {
    expect(() => fromDollarToYen(false)).toThrow("El valor debe ser un número");
});
test("fromYenToPound debería lanzar error si el valor no es un número", () => {
    expect(() => fromYenToPound(true)).toThrow("El valor debe ser un número");
});

//probando con 0
test("fromYenToPound debería lanzar error si el valor es 0", () => {
    expect(() => fromYenToPound(0)).toThrow("El valor no debe ser 0");
});
