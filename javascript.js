//1.sorting an array object

const arr = [
    { name:'John',age:20},
    { name:'Jane',age:30},
    { name:'Bob',age:19},
    { name:'sam',age:21}
  ];
  arr.sort((a, b) => a.age - b.age); 
  console.log(arr);

  //2. Merging th array

  let arr1=[1,2,3,4,5];
  let arr2=[6,7,8,9,10];
  let arr3=arr1.concat(arr2);
  console.log(arr1);
  console.log(arr2);
  console.log("Merge : "+arr3);

//3.find the index of first occurance

let arr4=[2,4,6,8,10,12,14];
let index=arr4.indexOf(8);
console.log("array : "+arr4);
console.log("index of 8 : "+index);

//.4 create new array with given length

let n=5;
let arr5=[];
for(let i=0;i<n;i++){
arr5[i]=i+3;
}
console.log("create new array with a given length 5");
console.log(arr5);

//5.Array d2 creation(duplicate remove)

let d2=[12,23,54,75,33,23,54];
let d3=[];
console.log("array : "+d2);
for(let i=0;i<d2.length;i++){
    let count=0;
    for(let j=0;j<d2.length;j++){
        if(d2[i]==d2[j]){
         count++;
        }
    }
    if(count==1){
      d3.push(d2[i]);
      d2.pop(d2[i]);
    }
    }
console.log("duplicate element : "+d3);
console.log("array without duplicate : "+d2);

