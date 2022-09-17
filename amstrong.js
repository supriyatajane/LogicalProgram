//given no and then the string repated

let a = '1a4r'

let final = ""

for (let i = 0; i < a.length; i += 2) {
    let x = Number(a[i])
    while (x > 0) {
        final += a[i + 1]
        x--
    }
}
console.log(final)


function nofchar(a) {
    let final = ""

    for (let i = 0; i < a.length; i += 2) {
        let x = Number(a[i])
        while (x > 0) {
            final += a[i + 1]
            x--
        }
    }
    console.log(final)

}
nofchar('5d6k3s')
nofchar('1a2b3c')


//2 .armstrong number ----means cube of no is equal to given no

let num = 153
let sum = 0
let m = num

while (m > 0) {
    let s = m % 10
    sum += s ** 3
    m = Math.floor(m / 10)

}
if (sum == num) {
    console.log('no is amstrong')
}
else {
    console.log('no is not amstrong no')
}



function amstrong(num) {


    let sum = 0
    let m = num

    while (m > 0) {
        let s = m % 10
        sum += s ** 3
        m = Math.floor(m / 10)

    }
    if (sum == num) {
        console.log('no is amstrong')
    }
    else {
        console.log('no is not amstrong no')
    }
}
amstrong(153)
amstrong(12)


// In an unsorted array ,let index of element x be i, find index of x after sorting

let arr=[2,5,3,8,6]

for(let i=0;i<arr.length;i++)
{
    for(let j=0;j!=i,j<arr.length;j++)
    {
        if(arr[i]<=arr[j])
        {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)

function sort(arr)
{

    for(let i=0;i<arr.length;i++)
{
    for(let j=0;j!=i,j<arr.length;j++)
    {
        if(arr[i]<=arr[j])
        {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
return arr
}

let arr2=[11,77,88,22,33]
let x=11
arr2.sort()
let ans=-1
console.log(arr2)

for(let i=0;i<arr2.length;i++)
{
    if(arr2[i]==x)
    {
      ans=i
      break
    }
}
if(ans!=-1)
{
    console.log(ans)
}
else if(ans==-1)
{
    console.log('value is not found')
}
