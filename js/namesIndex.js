
let submitForm = document.querySelector('#submit');



submitForm.addEventListener('click', function() {
    if (document.getElementById("gender").value !== "gender") {
        let newGender = document.getElementById('item').value
    } else {
        alert("please select a gender")
    }
})


import { namesOne, namesTwo } from "./namesDictionary.js";

const initApp = () => {
    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        //clearNames
        clearName();
        //generateNames
        const namesArray = generateName();
        console.log(namesArray);
        //displayNames
        displayName(namesArray);
    });
}

document.addEventListener("DOMContentLoaded", initApp);

//clearNames
const clearName = () => {
    const display = document.getElementById("suggestionSection");
    if (!display.classList.contains("hidden")) display.classList.toggle("hidden");
    const list = document.querySelector('.suggestionSection');
    //list.innerHTML = "";
}

//generateNames
const generateName = () => {
    const randomNumArr = [];
    for (let i = 0; i < 12;) {
        const randomNumber = Math.floor(Math.random() * 12); //from 0 to 11
        if (randomNumArr.includes(randomNumber)) continue;
        randomNumArr.push(randomNumber);
        i++;
    }
    const name1 = namesOne[randomNumArr[5]] + namesTwo[randomNumArr[2]];
    return [name1];
}

//displayNames
const displayName = (namesArray) => {
    const list = document.querySelector('.suggestionSection');
    const rawFirstName = document.getElementById("vocal").value;
    const firstName = sanitizeInput(rawFirstName);
    namesArray.forEach(name => {
        alert(`${name}`) //turn into better display type
    });
    const display = document.getElementById("suggestionSection");
    if (display.classList.contains("hidden")) display.classList.toggle("hidden");
}

const sanitizeInput = (inputValue) => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML; //turn into toString method
}
