const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')


var fs = require('fs')
var data = fs.readFileSync("./app/data/customer.json")

var words = JSON.parse(data);
console.log(words)





router.get('/user', (req, res, next) => {
    userController.find(req, res, next)
});



router.post('/user', (req, res, next) => {
  userController.create(req,res, next)

    
});

router.post("/user", (req, res, next) => {

    res.send("hi this is me")

});




router.put("/user/:userId", (req, res, next) => {

  userController.update(req,res,next)

});




router.delete("/user/:userId", (req, res, next) => {

  userController.delete(req,res,next)

});



module.exports = router


