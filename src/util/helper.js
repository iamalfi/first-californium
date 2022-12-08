// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

const printDate = () => {
    const date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    
    console.log(day+'-'+month+'-'+year);
}

const getBatchInfo=()=>{
    let batch = "californium"
    let topic = " Nodejs module system"
    let week = "W3"
    let day = "D4";
    let wd = week+day
    console.log(batch,wd,topic)
}

module.exports.printDate = printDate
module.exports.getBatchInfo = getBatchInfo