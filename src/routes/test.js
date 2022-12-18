
//  Q1.
//  // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// // Your route code will look like this
app.get("/sol1", function (req, res) {
//      //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr= [1,2,3,5,6,7]
  let n = arr.length + 1;
  let total = n*(n+1) / 2
  let res=0;
  for(let i=0; i<arr.length; i++){
      res+=arr[i];
  }

    let missingNumber=res-sum

//      ///LOGIC WILL GO HERE 
     res.send(  { data: missingNumber  }  );
 });
// const arr = [1,2,3,5,6,7,8,9,10] //6

// console.log(total)
// console.log(res)
// console.log(total-res)


// Q2. 
// // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// // Your route code will look like this
app.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
   
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i]
    }
    
let n=arr1.length+1;
let res=n*(arr1[0]+arr1[arr1.length-1])/2


//         //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
       
     let missingNumber=res-sum
           
//         ///LOGIC WILL GO HERE 


res.send(  { data: missingNumber  }  );
});


