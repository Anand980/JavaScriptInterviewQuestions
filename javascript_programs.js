find no of occurance of an item in array

function frequency(arr){
let maparr={}
for(let item of arr){
    maparr[item]=(maparr[item] || 0)+1
}
return maparr
}

arr=[1,5,3,6,1,5,2,0,2,4,2]
console.log(frequency(arr))
-------------------------------------------------------------------------------------
function isPallindrome(str){
    if(str.split('').reverse().join('')==str){
        console.log(true)
    }else{
        console.log(false)
    }
}
isPallindrome('racecar')

-------------------------------------------------------------------------------------
function getMinMax(arr){
    const sortarr=arr.sort()
    const minv=sortarr[0]
    const maxv=sortarr[sortarr.length-1]
    console.log("min:",minv,"max:",maxv)
}
getMinMax([37,45,12,6,99])
-------------------------------------------------------------------------------------
function isBalancedParanthesis(str){
    let openp=0
    let closedp=0
    for (let c of str){
        if(c=='('){openp+=1}
        if(c==')'){closedp+=1}
    }
    if(openp==closedp){
        console.log("balanced")
    }else{
        console.log("unbalanced")
    }
}
isBalancedParanthesis('')
isBalancedParanthesis('()')
isBalancedParanthesis('(())')
isBalancedParanthesis('(()')
-------------------------------------------------------------------------------------
function removeDuplicate1(arr){
    let uniqarr=new Set(arr)
    console.log(uniqarr)
}
function removeDuplicate2(arr){
   let uniqarr2=[];
    for(let item in arr){
        if(!uniqarr2.includes(arr[item])){
            uniqarr2.push(arr[item])
        }
    }
    console.log(uniqarr2)
}
removeDuplicate1([2,5,7,5,8,8,0])
removeDuplicate2([2,5,7,5,8,8,0])
-------------------------------------------------------------------------------------
function reverseString(str){
    console.log(str.split('').reverse().join(''))
}
reverseString('Anand')
-------------------------------------------------------------------------------------
function reverseSentence(sent){
    const revout=[];
    const revsentarr=sent.split(' ').reverse()
    for(let item in revsentarr){
        revout.push(revsentarr[item].split('').reverse().join(''))
    }
    console.log(revout.join(' '))
}
reverseSentence("hi! there. how are you")
-------------------------------------------------------------------------------------
function getVowelsCount1(sent){
    const count = sent.match(/[aeiou]/gi) ? sent.match(/[aeiou]/gi).length : 0
    console.log("vowels count: ",count)
}
function getVowelsCount2(sent){
   const vowels=['a','e','i','o','u']
   let count=0;
   for(let c of sent){
       if(vowels.includes(c)){count+=1}
   }
    console.log("vowels count: ",count)
}
getVowelsCount1('amazing')
getVowelsCount2('amazing')
-------------------------------------------------------------------------------------
function Capitalize(sent){
    const cap=[]
    for(let c of sent){
        cap.push(c.toUpperCase())
    }
    console.log(cap.join(''))
}
Capitalize('hello there')
-------------------------------------------------------------------------------------
function getMaxChar(str){
    const charobj={}
    for(let char of str){
        if(charobj[char]){
            charobj[char]++
        }else{
            charobj[char]=1
        }
    }
    const maxarr=Object.values(charobj).sort()
    console.log(charobj)
    console.log("max count:",maxarr[maxarr.length-1])
}
getMaxChar("amazing")
-------------------------------------------------------------------------------------
function anagram(str1,str2){
    const str1arr=str1.split('')
    const str2arr=str2.split('')
    let status=true
    for(let c of str2arr){
        if(!str1arr.includes(c)){
            status=false
        }
    }
    console.log(status)
}
anagram('night','thing')

//Another approach - using map & frequency
//anagram - using map

str1="hello"
str2="lleh0"

function isAnagram(str1,str2){

	if(str1.length != str2.length) return false
    let strarr1=str1.split('')
    let strarr2=str2.split('')
    
    let strmap1={}
    let strmap2={}
    for(let a of strarr1){
        strmap1[a]=(strmap1[a]||0)+1
    }
    for(let a of strarr2){
        strmap2[a]=(strmap2[a]||0)+1
    }
    console.log(strmap1,strmap2)
    
    for(let a in strmap1){
        if(!strmap2[a]){return false}
        if(strmap2[a]!=strmap1[a]){return false}
    }
    return true
}
console.log(isAnagram(str1,str2))

-------------------------------------------------------------------------------------
function fibonacci(num) {
   var series = [];
  var x = 0; var y = 1; var z;

  series.push(x);
  if(num==1) return series
  series.push(y);

  var i = 2;
  while (i < num) {
    z = x + y;
    series.push(z);
   
    x = y; y = z;
    i = i + 1;
  }
  return series;
}

console.log(fibonacci(3))

----------------------------------------------------------------------------------
Unique array from a array of array

function uniqueMultiDArray(bigarray){
	let stringArray = bigarray.map(JSON.stringify);
    let uniqueStringArray = new Set(stringArray);
    let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
	return uniqueArray
	}
//1 liner ->
uniqueArray= Array.from(new Set(bigArray.map(JSON.stringify)), JSON.parse);

bigArray=[[],[2],[2],[2,2],[1],[1,2],[1,2],[1,2,2]]
uniqueMultiDArray(bigArray)

----------------------------------------------------------------------------------------
find minimum elem in array


function findminelem(arr){

if(arr.length==0){
    return "array is empty"
}
else if(arr.length==1){
    return arr[0]
}else{
    let min=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
        min=arr[i]
        }
    }
}
return min
}

arr=[4,3,2,5]
console.log(findminelem(arr))

----------------------------------------------------------------------------------------------
find pair of numbers whose sum is zero

function zerosum(arr){
    if(arr.length==0) return
    let posarr=[]
    let negarr=[]
    for(let a of arr){
        if(Math.sign(a)==-1){
            negarr.push(a)
        }else{
            posarr.push(a)
        }
    }
    let res=[]
    for(let a of negarr){
        if(posarr.includes(Math.abs(a))){
            res.push([a,negarr[negarr.indexOf(a)]])
        }
    }
    console.log(res)
}

arr=[-5,-4,-3,-2,0,1,2,3,4,5,6,8]
zerosum(arr)

//Another better approach
function zerosum(arr){

    let res=[]
    for(let a of arr){
        if(a<0){
        let pair=findpair(a)
        if(pair!=false){
            res.push([a,pair])
        }
        }
    }
   function findpair(a){
        for(let i=arr.length;i>0;i--){
            if(arr[i]>0){
                if(a+arr[i]==0){
                    return arr[i]
                }
            }
        }
        return false
    }
    return res
}

arr=[-5,-4,-3,-2,0,1,2,3,4,5,6,8]
console.log(zerosum(arr))

//Another approach
function zerosum(arr){

    let res=[]
    for(let a of arr){
        if(a<0){
            if(arr.includes(Math.abs(a))){
                res.push([a,-a])
            }
        }
    }
   
    return res
}

arr=[-5,-4,-3,-2,0,1,2,3,4,5,6,8]
console.log(zerosum(arr))
--------------------------------------------------------------------------------------------------

max sum of 4 consecutive numbers

arr=[1,2,3,4,3,5,4,6,7,8]

function maxSumOfConsecutiveNum(arr){
let max=0
for(let i=0;i<arr.length-3;i++){
    let prevsum = arr[i]+arr[i+1]+arr[i+2]+arr[i+3]
    let cursum = arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]
    if((cursum) > prevsum){
        max=cursum
    }else{
        max=prevsum
    }
}
return max
}
maxSumOfConsecutiveNum(arr)

///////////////////////////////////////////////////////////////////
max sum of n consecutive number
arr=[1,2,3,4,3,5,4,6,7,8]

function maxSumOfConsecutiveNum(arr,n){
let max=0
for(let i=0;i<arr.length-n;i++){
    let prevarr=arr.slice(i,i+n)
    let prevsum = prevarr.reduce((prevsum,i)=>prevsum+i,0)
    let curarr=arr.slice(i+1,i+n+1)
    let cursum = curarr.reduce((cursum,i)=>cursum+i,0)
    //console.log(prevsum,cursum)
    if((cursum) > prevsum){
        max=cursum
    }else{
        max=prevsum
    }
}
return max
}
console.log(maxSumOfConsecutiveNum(arr,4))
----------------------------------------------------------------------------------------------------
//find the index of an element in a sorted array
//Binary search method

function findindex(arr,num){
    let start=0;
    let end=arr.length-1
    
    while(start < end-1){
        if(arr[start]==num){
            return start
        }
        if(arr[end]==num){
            return end
        }
        let mid=Math.floor((start+end)/2)
        //console.log(start,mid,end)
        if(arr[mid]==num){
            return mid
        }
        else if(arr[mid]<num){
            start=mid
        }else{
            end=mid
        }
    }
    return -1
}

arr=[1,2,3,4,5,7,8,9]
num=1
console.log(findindex(arr,num))

--------------------------------------------------------------------------------------------------------------
//Naive Search Algo
//Complexity 0(n*n)
str="hellob buddy"
substr="bud"

function naiveSearch(str,substr){
    for(let i=0;i<str.length;i++){
        for(let j=0;j<substr.length;j++){
            if(substr[j]!=str[i+j]){
                //any letter of string does not match then break the inner loop and check for next letter of string
                break
            }else if(j===substr.length-1){
                //if j reaches to substring length that means 
                //all letters of substring matches
                return true
            }
        }
    }
    return false
}
console.log(naiveSearch(str,substr))
---------------------------------------------------------------------------------------------------------------------------------
