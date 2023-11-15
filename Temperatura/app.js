const convertTemp = (celsius) => {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let celsius = prompt("Coloque la temperatura en celsius que desea convertir: ")
console.log(`La temperatura en Farenhiht es: ${convertTemp(celsius)}`) 


