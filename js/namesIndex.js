
import { namesOne, namesTwo } from "./namesDictionary.js";

const initApp = () => {
    document.getElementById("startButton").addEventListener("click", (event) => {
        event.preventDefault();
        //clearNames
        clearName();
        //generateNames
        const namesArray = generateName();
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
