const genderInput = document.getElementById("gender");

const reGender = /(male)/g;
const str = genderInput.value;
console.log(str)

let checkGender = reGender.test(str);
console.log(checkGender)


const genderValue = () => {
    
    if (checkGender === "true") {
        console.log(checkGender)
    } else {
        alert("choose a gender")
    }
}

let once = {
    once :true
};

const submitEvent = document.querySelector('#submit');
submitEvent.addEventListener('click', genderValue, once); 
