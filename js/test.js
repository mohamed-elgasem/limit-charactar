const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

let limit = 20;

result.textContent = 0 + "/" + limit;

inputText.addEventListener("input", () =>{
    let textlength = inputText.value.length;

    result.textContent = textlength + "/" + limit;

    if (textlength > limit){
        inputText.style.borderColor = "#ff0000";
        result.style.color = "#ff0000"
    }else{
        inputText.style.borderColor = "#000";
        result.style.color = "#000"
    }
    console.log(textlength);
});