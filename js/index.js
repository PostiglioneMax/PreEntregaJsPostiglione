// <  <=  >=  > * `
// Calculo de liquidacion de sueldos de cualquier empleado para una empresa(Condicionales)
let sueldoAcordado = parseInt(prompt("Escribe tu sueldo acordado"));
let añosAntiguedad = parseInt(prompt("Ingrese sus años trabajados"));

let adicionalAntiguedad = 0;

if (añosAntiguedad >= 20) {
    adicionalAntiguedad = sueldoAcordado * 0.2;
} else {
    adicionalAntiguedad = (añosAntiguedad / 100) * sueldoAcordado;
}
// Calc seguro de retiro
let seguroRetiro = 0.11 * sueldoAcordado;
// Calc seguro medico
let seguroMedico = 0.06 * sueldoAcordado;
// Calc sueldo total (Sueldo acordado + adicional antiguedad)
let sueldoTotal = sueldoAcordado + adicionalAntiguedad;
// Calc impuesto a la ganancia
let impuestoGanancia = 0;
if (sueldoTotal > 120000) {
    impuestoGanancia = 0.25 * sueldoTotal;
} else if (sueldoTotal > 70000) {
    impuestoGanancia = 0.2 * sueldoTotal;
}
// Calc sueldo final (Sueldo total - Descuentos)
let sueldoFinal = sueldoTotal - seguroRetiro - seguroMedico - impuestoGanancia;

console.log("Sueldo final del trabajador: $" + sueldoFinal.toFixed(2));

// tabla de multiplicar de numero deseado, empleando bucles
let numero = parseInt(prompt("Ingrese un numero"));
for (let i = 1; i <= 10; i++) {
    let multi = numero * i;
    console.log(numero + " x " + i + " = " + multi);
}
