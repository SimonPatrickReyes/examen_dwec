/*pedimos numero*/
let num = prompt("Ingres un numero entero para calcular su factorial:");
/*pasemos a entero*/
num = parseInt(num);
let factorial = 1;
/*bucle for que recorra el numero*/
for (let i = 1; i <= num; i++) {
    /*se multiplica tantas veces como el valor sea de alto*/
    factorial *= i;
}
window.alert(`Factorial de ${num} es= ${factorial}`);
