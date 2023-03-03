/*Almacena el numero mediante un prompt*/
let DNI = prompt("Ingresa tu numero del DNI SIN LETRA:");

DNI = parseInt(DNI);

/*si es menor que 0 o mayor que 99999999, da error*/
if (DNI < 10000000 || DNI > 99999999) {
    window.alert("El numero invalido, intentelo de nuevo");
} 

else{
    /*variable letras del DNI*/
    const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    /*calculamos el resto*/
    const divisionLetra = DNI % 23;
    /*numero del resto localiza letra string*/
    const letraDNI = letrasDNI.charAt(divisionLetra);
    /*Muestra el resultado*/
    window.alert(`Tu DNI es: ${DNI}${letraDNI}`);
}
