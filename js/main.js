function* createIdGenerator() {
    let i = 0;
    while (true) {
        yield ++i;
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


const text = document.querySelector("#text");

const upTextSizeButton = document.querySelector("#upButton");

upTextSizeButton.addEventListener("click", function() {
    const fontSize = updateFontSize.next('+').value;
    text.style.fontSize = `${fontSize}px`;
})

const downTextSizeButton = document.querySelector("#downButton");

downTextSizeButton.addEventListener("click", function() {
    const fontSize = updateFontSize.next('-').value;
    text.style.fontSize = `${fontSize}px`;
})

function* newFontGenerator (initialFontSize = 14) {
    let fontSize = initialFontSize;
    while (true) {
        const sizeChange = yield fontSize;
        if (sizeChange === '+'){
            fontSize += 2;
        }else if (sizeChange === '-'){
            fontSize -= 2;
        }
    }
}  

const updateFontSize = newFontGenerator(14);


