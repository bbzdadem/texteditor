function updateText(){
    let text = document.getElementById('text-input').value;

    document.getElementById('text-output').innerText = text;
    
}



function makeBold(){
    document.getElementById('text-output').classList.toggle('bold')
}
function makeItalic(){
    document.getElementById('text-output').classList.toggle('italic')
}
function makeUnderline(){
    document.getElementById('text-output').classList.toggle('underline')
}

function textcenter() {
    document.getElementById('text-output').classList.toggle('center')
}

function textleft() {
    document.getElementById('text-output').classList.toggle('left')
}

function textright() {
    document.getElementById('text-output').classList.toggle('right')
}