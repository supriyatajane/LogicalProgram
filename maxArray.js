//find the minumum and maximum number
console.log("=============find min and max==============")


let a = [1, 2, 34, 67, 9]
let max = a[0]
let min = a[0]
for (let i = 0; i < a.length; i++) {
    if (max <= a[i]) {
        max = a[i]
    }
    else if (min >= a[i]) {
        min = a[i]
    }
}
console.log(max, min)

//using function

function minMax(a) {
    let max = a[0]
    let min = a[0]
    for (let i = 0; i < a.length; i++) {
        if (max <= a[i]) {
            max = a[i]
        }
        else if (min >= a[i]) {
            min = a[i]
        }
    }
    console.log(max, min)

}
minMax([22,33,44,55,66,77])
minMax([0,33,55,7])


//can given array strictly incrasing order or not
let arr=[11,11,22,22,45,67,89]

let s=new Set(arr)
if(s.size==arr.length)
{
    console.log("eql")
}
else{
    console.log('not eql')
}


let d=[6,7,8,9,10]
let f=0
for(let i=0;i<d.length;i++)
{
    if(d[i]%2==0)
    {
        f=f+d[i]
    }
    
}
console.log(f)