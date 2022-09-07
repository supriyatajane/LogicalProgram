let a = [10, 9, 8, 7, 6, 5, 4]

let b = []
for (let i = a.length - 1; i >= 0; i--) {
    let arr = a[i]
    b.push(arr)
}
console.log(b)




//problem 2
let c = [20, 19, 18, 17, 16, 15, 14]
let n = c.length - 1
for (let i = 0, j = n; i <= n / 2, j >= n / 2; i++, j--) {
    let d = c[i]
    c[i] = c[j]
    c[j] = d
}
console.log(c)





//find one array positive and negative number
console.log("---------------------------------------positive and negative number-----------------------------")

let arrr = [1, 2, 89, -4, -22, -88, -90]

let pos = []
let neg = []
for(let i=0;i<arrr.length-1;i++)
{
if (arrr[i] >= 0) {
    pos.push(arrr[i])
}
else if(arrr[i] <0) {
    neg.push(arrr[i])


}

}
console.log(pos, neg)

if(pos.length>neg.length)
{
    console.log("positive")
}
else if(pos.length<neg.length)
{
    console.log("negative")
}
else if(pos.length==neg.length)
{
    console.log("equal")
}


//find the pos and neg value in array and also find the length of two array
function xyz(z)
{
    let pos = []
let neg = []
for(let i=0;i<z.length-1;i++)
{
if (z[i] >= 0) {
    pos.push(z[i])
}
else if(z[i] <0) {
    neg.push(z[i])


}

}
console.log(pos, neg)

if(pos.length>neg.length)
{
    console.log("positive")
}
else if(pos.length<neg.length)
{
    console.log("negative")
}
else if(pos.length==neg.length)
{
    console.log("equal")
}

}
let r=[11,22,-20,30,-40,-50,22,-11]
xyz(r)

let mau=[2,4,5,9,6,5]
for(let i=0;i<mau.length;i++)
{
    for(let j=0;j<mau.length;j++)
    {
        if(mau[i]<mau[j])
        {
            let temp=mau[i]
            mau[i]=mau[j]
            mau[j]=temp
        }
    }
}
console.log(mau)

function abc(v){
    for(let i=0;i<v.length;i++){
        for(let j=0;j<v.length;j++){
            if(v[i]<v[j]){
                let s=v[i]
                v[i]=v[j]
                v[j]=s
            }
        }
    }
    return v
}
let aa=[2,4,5,9,6,5]
let cb=abc(aa)
console.log(cb)