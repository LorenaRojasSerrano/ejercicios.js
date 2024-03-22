const esBisiesto = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Ejemplo
const year = 2003;
if (esBisiesto(year)) {
    console.log(year + " es un año bisiesto.");
} else {
    console.log(year + " no es un año bisiesto.");
}