function textToBinary(text) {
    return Array.from(text, char => ('00000000' + char.charCodeAt(0).toString(2)).slice(-8)).join(' ');
}

function binaryToText(binary) {
    const binaryChars = binary.trim().split(' ');
    return binaryChars.map(binaryChar => String.fromCharCode(parseInt(binaryChar, 2))).join('');
}

function convert() {
    const inputText = document.getElementById("inputText").value;
    let result;

    if (inputText.match(/^[01\s]+$/)) {
        result = binaryToText(inputText);
    } else {
        result = textToBinary(inputText);
    }

    document.getElementById("resultText").innerText = result;
}