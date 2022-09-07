//pallidrome no
let a=['nayan']
let k=0
let n=a.length
for(let i=0;i<n/2;i++)
{
    if(a[i]!=a[n-i-1])
    {
    k=-1
    }
}
if(k==-1)
{
    console.log('no is not pallidrome')
}
else if(k==0)
{
    console.log('no is pallidrome')
}
//in function pallidrome

function pallidrome(s)
{

let k=0
let n=s.length
for(let i=0;i<n/2;i++)
{
    if(s[i]!=s[n-i-1])
    {
    k=-1
    }
}
if(k==-1)
{
    console.log('no is not pallidrome')
}
else if(k==0)
{
    console.log('no is pallidrome')
}
}
pallidrome('nayan')
pallidrome('sara')
pallidrome(121)


console.log('-----------------reverse no----------------')
//revesre no
let no=123
let s=''

while(no>0)
{
let r=no%10
s+=r
let x=Math.floor(no/10)
no=x
}
console.log(s)

console.log(typeof s)
s=Number(s)
console.log(typeof s)


//in function reverse no
function reverse(no)
{
    while(no>0)
{
let r=no%10
s+=r
let x=Math.floor(no/10)
no=x
}
console.log(s)

console.log(typeof s)
s=Number(s)
console.log(typeof s)

}
reverse(121)
reverse(098)


//find square root and cube root

console.log('-----------------cube root and square root-----------')

let nos=25
for(let i=0;i**2<=nos;i++)
{
    if(i**2==nos)
    {
    console.log(i)
    }
}

//in function
function square(nos)
{
    let k=-1
    for(let i=0;i**2<=nos;i++)
{
    if(i**2==nos)
    {
    k=i
    break
    }
}
if(k!=-1)
{
    console.log(k)
}
else if(k==-1)
{
    console.log('no is not square root')
}

}
square(625)
square(5)

console.log('----------------------------cube root---------')
let ra=64
for(let i=1;i**3<=ra;i++)
{
    if(i**3==ra)
    {
        console.log(i)
    }
}

//in function
function cube(ra)
{
    k=-1
    for(let i=1;i**3<=ra;i++)
{
    if(i**3==ra)
    {
        k=i
        break
    }
}
if(k!=-1)
{
    console.log(k)
}
else if(k==-1)
{
    console.log('not cube root')
}
}
cube(125)
cube(3)