let fs = require('fs');  //built in node module to read/write files

const FILE_NAME = './assets/characters.json';

let characterRepository = {
    getAll: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (error, data) {
            if (error) {
              reject(error);
            }
            else {
              resolve(JSON.parse(data));
            }
          });
        },
    

    get: function (characterId, resolve, reject) {
        fs.readFile(FILE_NAME, function (error, data) {
          if (error) {
            reject(error);
          }
          else {
            let character = JSON.parse(data).find(p => p.characterId == characterId);
            resolve(character);
          }
        });
      },

      search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (error, data) {
          if (error) {
            reject(error);
          }
          else {
            let characters = JSON.parse(data);
            // Perform search
            if (searchObject) {
                //example let searchObject = { "characterId": 1, "vocal": "antelope" };
              characters = characters.filter(
                p => (searchObject.characterId ? p.characterId == searchObject.characterId : true) &&
                  (searchObject.vocal ? p.vocal.toLowerCase().indexOf(searchObject.vocal) >= 0 : true));
            }
    
            resolve(characters);
          }
        });
      },
    
      //POST
      insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (error, data) {
          if (error) {
            reject(error);
          } else {
            let characters = JSON.parse(data);
            characters.push(newData);
            fs.writeFile(FILE_NAME, JSON.stringify(characters),function (error) {
                if (error) {
                  reject(error);
                } else { 
                    resolve(newData);
                }
            });
          }
        });     
    },

    //PATCH
    update: function (newData, characterId, resolve, reject) {
        fs.readFile(FILE_NAME, function (error, data) {
          if (error) {
            reject(error);
          } else {
            let characters = JSON.parse(data);
            let character = characters.find(p => p.characterId == characterId);
            if (character) {
                Object.assign(character, newData);
                fs.writeFile(FILE_NAME, JSON.stringify(characters),function (error) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(newData);
                    }
                });
            }
          }
        });    
    },

    //DELETE
    delete: function (characterId, resolve, reject) {
        fs.readFile(FILE_NAME, function (error, data) {
          if (error) {
            reject(error);
          } else {
            let characters = JSON.parse(data);
            let index = characters.findIndex(p => p.characterId == characterId);
            if (index != -1) {
                characters.splice(index, 1);
                fs.writeFile(FILE_NAME, JSON.stringify(characters),function (error) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(index);
                    }
                });
            }
          }
        });
    }
};


    

module.exports = characterRepository;