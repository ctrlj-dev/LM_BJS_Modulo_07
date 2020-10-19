//Validar un IBAN

// Caso 1
//Dado este IBAN:
//ES6600190020961234567890
//Validar que se informa con dos letras, y los números correspondientes.

console.log('Validar un IBAN: Caso 1');

const value = ['ES6600190020961234567890'];


const pattern = /^ES\d{22}$/;

console.log('Regexp coincide con ' + value + ' ? ->  ', pattern.test(value));
console.log(value); 

console.log('');
console.log('//=======================//');
console.log('Validar un IBAN: Caso 2');

//Caso 2
//Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
//ES6600190020961234567890
//ES66 0019 0020 9612 3456 7890


const values = ['ES6600190020961234567890','ES66 0019 0020 9612 3456 7890'];


const patternV2 = /^ES\d{22}|ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;

values.forEach(values => {
    console.log('Regexp  coincide con ' + values + ' ? ->  ', patternV2.test(values));      
});
console.log(values); 

console.log('');
console.log('//=======================//');
console.log('Validar un IBAN: Caso 3');
//Caso 3
//Vamos a extraer el código de páis y el dígito de control.

const valuesCase3 = 'ES66 0019 0020 9612 3456 7890';
const patternV3 = /^(ES\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
const resultExecMethod = patternV3.exec(valuesCase3);
// Este método devuelve el mismo valor que el anterior, dos maneras diferentes de hacer lo mismo
const resultMatchMethod = valuesCase3.match(patternV3);

console.log('Regexp  coincide con ' + valuesCase3 + ' ? ->  ', patternV3.test(valuesCase3));   
console.log('Exec Method: Código del país y digito de control: ',resultExecMethod);   
console.log('Match Method: Código del país y digito de control: ',resultMatchMethod);   

//Caso 4 y 5
//Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:
console.log('');
console.log('//=======================//');
console.log('Validar matrícula y extraer datos: Caso 4 y 5');
console.log('//=======================//');

const carValues = ['2021 GMD','2345-GMD','4532BDB','0320-AAA'];
const carPattern = /^(\d{4})(\s|-|_)?([A-Z]{3})$/;

carValues.forEach(carValues => {
    console.log('Regexp  coincide con ' + carValues + ' ? ->  ', carPattern.test(carValues));   
    console.log(carPattern.exec(carValues));   
});


