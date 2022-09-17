
console.log('---------------find the sum of pair no-----------------')
//find the sum of pair in given no
let a=[1,1,5,4,9,0]

k=9
for(let i=0;i<a.length;i++)
{
for(j=0;j!=i,j<a.length;j++)
{
    if(a[i]+a[j]==k)
    {
        console.log(i,j)
        break
    }
}
}

//fiter the given string number

console.log('------------filter the no given string------------')

let r='abc123yt0'
let f=''
for(let i=0;i<r.length;i++)
{
    if(Number (r[i])|| r[i]=='0')
    {
        f+=r[i]
    }
}
console.log(f)


//by using function

function isNum(r)
{
    let f=''
for(let i=0;i<r.length;i++)
{
    if(Number (r[i])|| r[i]=='0')
    {
        f+=r[i]
    }
}
console.log(f)

}
isNum('!%128ab00')


//filter the given string character

let jj='12AbcFGk02'
function FilterChar(z)
{
let s=''
let t=''
for(let i=0;i<z.length;i++)
{
    if(z[i]>='a'&& z[i]<='z')
    {
        s+=z[i]
    }
    else if(z[i]>='A'&& z[i]<='Z')
    {
        t+=z[i]
    }
}
console.log(s,t)
}
FilterChar(jj)




//find the occurnces how many times they are repeated
//not uderstand

let sss=[1,1,3,4,3,3,2,2,23,6,6,5]
let m=new Map()
for(let i=0;i<sss.length;i++){
    m.set(sss[i],0)
}
//console.log(m)
for(let i=0;i<sss.length;i++){
    let r=m.get(sss[i])
    r++
    m.set(sss[i],r)
}
console.log(m)


