const textArea = document.querySelector("#textarea");

const parseTextInfo = (text) => {
    let words;
    let characters;
    let lines;
    if (text == '') {
        return [0, 0, 0];
    } else {
        text = text.trim();
        characters = text.length;
        words = text.split(' ');
        characters = characters;
        lines = text.split("\n").length;
    }

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



