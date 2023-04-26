let languages = ["english", "german", "french", "spanish", "dutch", "portuguese", "czech", "slovak", "russian"];

languages.sort();
console.log(languages)


let input = document.getElementById("input")
let suggestion = document.getElementById("suggestion")

const enterKey = 13

window.onload = () => {
    input.value = "";
    clearSuggestion()
}

const clearSuggestion = () => {
    suggestion.innerHTML = "";
}

const caseCheck = (word) => {
    word = word.split("")
 
    let inp = input.value;

    for (let i in inp) {
        if (inp[i] == word[i]){
            continue;
        } else if (inp[i].toUpperCase() == word[i]) {
            word.splice(i,1,word[i].toLowerCase());
        }else{
            word.splice(i,1,word[i].toUpperCase())
        }
    }
    return word.join("")
}

input.addEventListener("input", e=> {
    clearSuggestion();


    let regex = new RegExp("^" + input.value, "i");
    
    for (let i in languages){

        if  (regex.test(languages[i]) && input.value != ""){
            languages[i] = caseCheck(languages[i])

            suggestion.innerHTML = languages[i]

            break;
        }
     }
});

input.addEventListener("keydown", e=>{
    if(e.keyCode == enterKey && suggestion.innerText != ""){
        e.preventDefault()
        input.value = suggestion.innerText;
        clearSuggestion();

    }
})
