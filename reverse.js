let a=1234
let n=a.length

for(let i=0;i<=n/2;i++)
{
    let z=a[i]
    a[i]=a[n-i-1]
    a[n-i-1]=z
}
console.log(a)



//let a='Today'
// let n=a.length
// for(let i=0;i<=n/2;i++){
//     let z=a[i]
//     a[i]=a[n-i-1]
//     a[n-i-1]=z
// }
// console.log(a)


let num=121
let sum=0

while(num>0)
{
    let r=num%10
    sum+=r
    num=Math.floor(num/10)
}
console.log(sum)

//reverse string 
// let f='star is shine'
// let s=f.split('')
// let ss=s.reverse()
// console.log(ss)

// let sss=ss.join('')
// console.log(sss)


