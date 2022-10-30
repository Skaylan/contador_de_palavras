const textArea = document.querySelector("#textarea");

const parseTextInfo = (text) => {
    text = text.trim();
    let characters = text.length;
    let words = text.split(' ');
    characters = characters;
    let lines = text.split("\n").length;

    return [words.length+lines-1, characters, lines];
}


const inhtml = () => {
    const textArea = document.querySelector("#textarea");
    const textInfo = parseTextInfo(textArea.value);
    document.querySelector('#p').innerHTML = `Palavras: ${textInfo[0]}`;
    document.querySelector('#p2').innerHTML = `caracteres: ${textInfo[1]}`;
    document.querySelector('#p3').innerHTML = `linhas: ${textInfo[2]}`;
}

textArea.addEventListener('input', () => {
    inhtml();
})



