console.log("Ingresa dos numeros");

console.log("Primer numero:");
let a = 8;
console.log(a);

console.log("Segundo numero:");
let b = 20;
console.log(b);

console.log("Numeros en diferencia");
 if (a >= b) {
        console.log("El primer número debe ser menor que el segundo.");
        return;
    }
    for (let i = a; i <= b; i++) {
        console.log(i);
    }