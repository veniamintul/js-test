////1  zadanie
const string = "Привет! Как дела?";
const getVowels=function(stringOne) {

    let  two="";

    for (let index = 0; index < stringOne.length; index++) {
        const twoLetter = stringOne[index];
        
        if(twoLetter=="а"||twoLetter=="и"||twoLetter=="е"){
        two=two+twoLetter;
        }
    }
       
    //return stringOne;
    return two;
}

console.log(getVowels(string));


//////2zadanie

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

const getWorthyWorkers=function(workersArr) {
  const oneWorkers=[]; 
  
  for (let index = 0; index < workersArr.length; index++) {
      const currentWork = workersArr[index];
      
      if (currentWork.salary>1000){
        oneWorkers.push(currentWork.name);  
      }
  }

  return oneWorkers;
}
  console.log(getWorthyWorkers(workers));


  ////3zadanie

  
  const path = "/users/download/index.html"

  const isHtml=function(path){
    const finish=".html"

    const pathone=path.slice(-5);

    if(pathone==finish){
        return true
    }else{
        return false
    }

  }

  console.log(isHtml(path));


 // 4zadanie

 const mixedArray = [3,13,74,14,66,15,22,4];
 const isEven = num => { 
     return num % 2 == 0;  //целочисленный остаток от деления
 };

 const filterArray= function(arrayTofilter ,filterfinish){

    const filteredArray=[];

    arrayTofilter.forEach(function(num){
        if(filterfinish(num)){
            filteredArray.push(num);   
        }
    })

    return filteredArray;

 }

 console.log(filterArray(mixedArray, isEven));
