//For characters generated from dropdown form

// Bring in express server from node, imports and create application 
let express = require('express');
let app = express();

// Create server to listen on port [5000]
const PORT = 5000;
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

// Configure middleware to support JSON data parsing in request object
app.use(express.static('public'));

//write data to JSON file
const character = {
    gender: "",
    physique: "",
    personality: "",
    vocal: ""
}

const fs = require("fs");

const saveData = (character) => {
    const incomplete = (error) => {
        if (error) {
            console.error(error)
            return;
        }
    }

    const jsonData = JSON.stringify(character, null, 5)
    //console.log(character)
    fs.writeFile('character.json', jsonData, incomplete)
}

saveData(character)