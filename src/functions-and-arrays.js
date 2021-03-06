// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1,n2){
  if(n1>n2){
    return n1;
  }
  return n2;
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const testMe = ['hola','halo','ey','si','y'];

//Find the longest word on the array
function findLongestWord(words){
    let longestWord='';
    if(words.length===0){
      return null;}
    if(words.length=== 1){
      return words[0]}
  
  for(let i=0;i<words.length;i++){
    if(longestWord.length<words[i].length){
        longestWord=words[i]
    }
  }
  
  for(let i=0;i<words.length;i++){
    if(longestWord.length===words[i].length){
      if(words.indexOf(longestWord)<words.indexOf(words[i])){
        longestWord= longestWord;
      }else{
      longestWord=words[i];
      }
    }
  }
    return longestWord;
    
};

console.log(findLongestWord(words));
console.log(findLongestWord(testMe));

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(arr){

  let sumResult=0;
  if(arr.length===0){
   return 0;
  };

  arr.forEach(function(number){
    sumResult+=number;
  });
  return sumResult;

};

console.log(sumNumbers(numbers));

//Iteration 3.1 Bonus
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10,];
let arrayTest=[6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}];

function sum(arr){
let sumResult=0;
let error=false;
  arr.forEach(function(element){
    if(typeof element==='boolean'){
      if(element===true){
        sumResult+=1;}
      else{
        sumResult+=0;
      }
    }
    else if(typeof element === 'string'){
      sumResult+= element.length}
    else if(typeof element === 'number'){
      sumResult+= element
    }
    else{
       error=true
       
    }
    });
if(error===true){throw new Error("Unsupported data type sir or ma'am")};
return sumResult;
}

console.log(sum(mixedArr));
console.log(sum(arrayTest));

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr){
  let result=0;
    if(arr.length===0){
      return null
    };
    
  arr.forEach(function(element){
    result+=element
  });
  result=result/arr.length;
  
  return result
}

console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr){
  let result=0;
    if(arr.length===0){
      return null
    };
  
  arr.forEach(function(element){
    result+=element.length;
  });
  result=result/arr.length;

  return result
}

console.log(averageWordLength(wordsArr));

//BONUS Iteration 4.1



function avg(arr){
  let result=0;
  let error= false;
    if(arr.length===0){
      return null
    };
      arr.forEach(function(element){
        if(typeof element === 'boolean'){
          if(element === true){
            result+= 1
          }else{
            result += 0
          }
        }
        else if(typeof element === 'string'){
          result += element.length}
        
        else if(typeof element === 'number'){
          result += element
        }else {
          error=true;
        }
      })

  if(error===true){
    throw new Error("Unsupported data type sir or ma'am")
  }
  result= parseFloat((result/arr.length).toFixed(2));
  return result;
}

console.log(avg(mixedArr));



// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr){
  if(arr.length===0){
    return null
  }
  let uniqueArray=[];
  arr.forEach(function(word){
    if(!uniqueArray.includes(word)){
      uniqueArray.push(word);
    }
  });
    return uniqueArray;
    
}

  console.log(uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr,word){
  let exist=false;
  if(arr.length===0){
    return null;
  }
  arr.forEach(function(element){
    if(element===word){
       exist=true
    }
  })
  if(exist===true){
    return true
  }
  return false
};

console.log(doesWordExist(wordsFind,'fjhr'));
console.log(doesWordExist(wordsFind,'matter'));

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr,word){
  let counter=0;
  if(arr.length===0){
    return 0;
  }
  arr.forEach(function(element){
    if(element===word){
      counter+=1
    }
  })
  return counter;
}

console.log(howManyTimes(wordsCount,'matter'));

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];



function greatestProduct(arr){
  let result=1;
  let matrixResult=[]; //Array with multiplication results
  let numbers=[]; //Array that contents more arrays with the numbers that conform the multiplication
  let subNumbers=[];//Array that content 4 numbers to do the operations.
  let maxNumber;
  let fourNumbers;
  
  //Horizontal loop (rows)
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-3;j++){ //I substract 3 to the length of the array because j init must be followed by 3 more numbers to compelte the block iteration.
      for(let k=0;k<4;k++){
        result*=arr[i][j+k]; 
        subNumbers.push(arr[i][j+k]);
      }
      numbers.push(subNumbers);
      subNumbers=[];//I clean the array to reuse it
      matrixResult.push(result);
      result=1;//I clean the result variable to start multiplying another block of numbers. 
    }
  }
  //Vertical loop (columns)
  for(let i=0;i<arr.length-3;i++){
    for(let j=0;j<arr.length;j++){
      for(let k=0;k<4;k++){
        result*=arr[i+k][j];
        subNumbers.push(arr[i+k][j])
      }
      numbers.push(subNumbers);
      subNumbers=[];
      matrixResult.push(result);
      result=1;
    }
  }

  maxNumber= Math.max(...matrixResult);
  fourNumbers=numbers[matrixResult.indexOf(maxNumber)];
  console.log(`The product of numbers ${fourNumbers} is ${maxNumber} and it's the greatest product of the array`); //To know which four numbers were multiplied to get the greatest result
  return maxNumber;
}

greatestProduct(matrix);

//BONUS 8.1 Product of diagonals

function greatestProductOfDiagonals(arr){
  let result=1;
  let matrixResult=[]; 
  let numbers=[]; 
  let subNumbers=[];
  let maxNumber;
  let fourNumbers;
  
  //Right-down diagonals
  for(let i=0;i<arr.length-3;i++){
    for(let j=0;j<arr.length-3;j++){ 
      for(let k=0;k<4;k++){
        result*=arr[i+k][j+k]; 
        subNumbers.push(arr[i+k][j+k]);
      }
      numbers.push(subNumbers);
      subNumbers=[];
      matrixResult.push(result);
      result=1;
    }
  }
  //Left-down diagonals
  for(let i=0;i<arr.length-3;i++){
    for(let j=arr.length-1;j>2;j--){
      for(let k=0;k<4;k++){
        result*=arr[i+k][j-k];
        subNumbers.push(arr[i+k][j-k])
      }
      numbers.push(subNumbers);
      subNumbers=[];
      matrixResult.push(result);
      result=1;
    }
  }

  maxNumber= Math.max(...matrixResult);
  fourNumbers=numbers[matrixResult.indexOf(maxNumber)];
  console.log(`The product of numbers ${fourNumbers} is ${maxNumber} and it's the greatest product of Diagonals`); 
  return maxNumber;
}

greatestProductOfDiagonals(matrix);