const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const welcome=require('../logger/logger')
const {getBatchInfo, printDate}=require("../util/helper");
const format=require("../validator/formatter")
const lodash = require('lodash');

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    
// Problem 4
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays on console.


    let months = ["january","february","March","April","May","June","July","August","September","October","November","Decemmber"];
    const splittedMonths = lodash.chunk(months,3)
    console.log(splittedMonths)

// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

    const arrofOdd=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arrofOdd))


//     - Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console

const arr1=[1,2,3,4,5];
const arr2=[2,1,5,6,7];
const arr3=[6,7,8,9,10];
const arr4=[9,10,11,12,13];
const arr5=[13,11,12,14,15];
console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))



// - Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
const newArray=[["horror","The Shining"],["drama","Titanic"],["Thriller","shutter Island"],["fantasy","pans Labyrinth"]]
console.log(lodash.fromPairs(newArray))

    welcome()
    
     getBatchInfo()
     printDate()
     format()

    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;