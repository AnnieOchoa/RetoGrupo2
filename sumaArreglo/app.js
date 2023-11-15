//Suma de todos los elementos del arreglo

const sumArray = () => {
    const numArray = [2,7, 20, 17, 25, 6, 15]

    let total = 0    

    for (let i = 0; i < numArray.length; i++) {
        total = total + numArray[i] 
    }
    console.log(`La suma del arreglo ${numArray} es: ${total}`);
}

sumArray()