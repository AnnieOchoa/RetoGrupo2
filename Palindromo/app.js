const palindrome = (palindrom) => {

    const textoAlReves = [];
    for (let i = palindrom.length; i >= 0; i--){
        textoAlReves.push(palindrom[i]);
    }

    const textoAlRevesFormateado = textoAlReves.toString().replace(/,/g, '').toLowerCase();

    if (palindrom === '') {
        console.log('Debes escribir un texto')
    }else if (textoAlRevesFormateado === palindrom.toLowerCase()) {
        console.log('Esto es un palindromo!');
    } else {
        console.log('Esto no es un palindromo!')
    }

}

palindrome('')

