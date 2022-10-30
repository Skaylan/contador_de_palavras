let textInfo = (text) => {
    var characters = text.length
    var words = text.split(' ')
    return [characters, words.length]
}


let inhtml = () => {
    let form = document.getElementById('textarea').value
    let nome = textInfo(form)
    document.getElementById('p').innerHTML = `Palavras: ${nome[1]}`
    document.getElementById('p2').innerHTML = `caracteres: ${nome[0]}`
}


$(document).ready(function () {
    $('#textarea').on('input', (event) => inhtml());
});

