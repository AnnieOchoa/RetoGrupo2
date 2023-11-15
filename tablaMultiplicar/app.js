//Imprimir una tabla de multiplicar

const tablaMulti = (numb) => {
    let total = 0

    for (let i = 1; i <= 10; i++) {
        total = numb * i
        console.log(`${numb} x ${i} = ${total}`);
    }
}

tablaMulti(2)