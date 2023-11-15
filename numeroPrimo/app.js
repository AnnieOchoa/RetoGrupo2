//Numero primo

const isPrimo = (number) => {
    let esPrimo

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        } else {
            return true
        }
    }
}

let num = ('')

 if (isPrimo(num)) {
    console.log(num + " es un número primo");
 } else {
    console.log(num + " no es un número primo");
 }