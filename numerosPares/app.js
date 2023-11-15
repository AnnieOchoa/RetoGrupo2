//Crear un array que contenga solo numeros pares

const paresArray = () => {
    const numArray = [2, 5, 8, 20, 7, 10, 17, 30, 91]

    let par = 0
    let parArray = []
    let j = 0

    for (let i = 0; i < numArray.length; i++) {
        par = numArray[i]
        if (par % 2 == 0) {
            parArray[j] = (par)
            j++
        }   

    }

    console.log(`Arreglo normal: ${numArray}`);
    console.log(`Arreglo de numeros pares: ${parArray}`);
}

paresArray()