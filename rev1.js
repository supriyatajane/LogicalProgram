//prime no
//prime no means those number they divisible 1 and and itself

function prime(n)
{
    let ans=0
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            ans=1
            break
        }
    }
    if(ans==0)
    {
        return true
       // console.log('no is prime')
    }
    else if(ans==1){
        return false
    //console.log('no is not prime')
    }
}
//prime(12)

//find 1 to n prime no
let n=13
for(let j=1;j<=n;j++)
{
    if(prime(j))
    {
        console.log(j)
    }
}



//factorial no 
//factorial no means 1to n multiplication

console.log("---------------Factorial no-----------")

function Fact(n)
{
    let ans=1
    for(let i=1;i<=n;i++)
    {
        ans=ans*i
    }
    console.log(ans)
}
Fact(4)


console.log('====================fibonaci series==================')
//fibonaci series
//means 1 to n number sum
m=10
let a=0
let b=1

let sum=a+b
for(let i=3;i<=m;i++)
{
    let c=a+b
    a=b
    b=c
    if(i==m)//find the no number
    {
        console.log(c)
    }
   // sum+=c
}
//console.log(sum)
function fibonaci(n)
{
    let a=0
    let b=1
    let sum=0
    sum=a+b
for(let i=3;i<=n;i++)
{
    let c=a+b
    a=b
    b=c
    sum+=c
}
console.log(sum)

}
fibonaci(10)


//reverse array

let arr=[2,3,4,5,8,9]
let mm=arr.length

// for(let i=0;i<=mm/2;i++)
// {
//     let temp=arr[i]
//     arr[i]=arr[n-i-1]
//     arr[n-i-1]=temp
// }
// console.log(arr)

// for(let i=0;i<=n/2;i++){
//     //     let temp=a[i]
//     //     a[i]=a[n-i-1]
//     //     a[n-i-1]=temp
//     // }
//     // console.log(a)
    
//     // let n=a.length
//     // // i=1,j=4
    for(let i=0,j=mm-1;i<mm/2,j>mm/2;i++,j--){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    console.log(arr)











