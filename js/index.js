// Bring in express server from node, imports and create application 
let express = require('express');
let app = express();
let characterRepository = require('./repository/characterRepository');


// Use the express Router object ---for endpoints
let router = express.Router();

// Configure middleware to support JSON data parsing in request object
app.use(express.json());


// Create GET to return ALL [character/getAll]
router.get('/', function (req, res, next) {
    characterRepository.getAll(function(data) {
            res.status(200).json({
                "status": 200,
                "request": "getAllCharacters",
                "endpoint": "/api/character/getAll",
                "message": "All characters retrieved.",
                "data": data
            });
    }, function(error) {
        next(error);
    });
});

// Create GET/search parametersOnQueryLine [character/search/?characterId=n&vocal=str]
router.get('/search', function (req, res, next) {
    let searchObject = {
        "characterId": req.query.characterId,
        "vocal": req.query.vocal
    };
    characterRepository.search(searchObject, function (data) {
        res.status(200).json({
            "status": 200,
            "request": "get",
            "endpoint": "/api/character/getAll",
            "message": "All characters retrieved.",
            "data": data
        });
    }, function(error) {
        next(error);
    });
});

// Create GET to return ONE [character/{characterId}]
router.get('/:characterId', function (req, res, next) {
    characterRepository.get(req.params.characterId, function(data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "request": "getCharacter",
                "endpoint": "/api/character/{characterId}",
                "message": "One character retrieved.",
                "data": data
            });
        } else {
            res.status(404).json({
                "status": 404,
                "request": "getCharacter",
                "endpoint": "/api/character/{error}",
                "message": "Character not found."
            });
        }
    }, function(error) {
        next(error);
    });
});

// Configure router so all routes are prefixed with /api/v1  ---localhost address
app.use('/api/', router);

// Create server to listen on port [5000]
var server = app.listen(65084, function () {
  console.log('Node server is running on http://localhost:[5000]');
});