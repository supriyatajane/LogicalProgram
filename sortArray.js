//array sorted
//increasing order


function incrasingOrder(m)
{
s=0
for(let i=0;i<m.length;i++)
{
    if(m[i]>m[i+1])
    {
        s=1
        break
    }
    
}
if(s==0)
{
    console.log('array is sorted')
}
if(s==1)
{
    console.log('array is not sorted')
}

}
let a=[1,3,4,5,6]
incrasingOrder(a)



console.log("-------------------------------decreasing order array-------------")

function decrasingOrder(b)
{
t=0
for(let i=0;i<b.length;i++)
{
    if(b[i]<b[i+1])
    {
        t=1
        break
    }
}
if(t==0)
{
    console.log('array is sorted')
}
else if(t==1)
{
console.log('array is not sorted')
}
}
let ba=[100,10,9,3]
decrasingOrder(ba)

///check the same time one function incrasing and decrasing order array

console.log("------------------incre&&decre-----------------------")
function xyz(a)
{
    let m=a.length
    let s=0
    let t=0
    for(let i=0;i<m.length;i++)
{
    if(m[i]>m[i+1])
    {
        s=1
        break
    }
    
}
    for(let i=0;i<m.length;i++)
    {
        if(m[i]>m[i+1])
        {
            t=1
            break
        }
}
if(s==0 || t==0)
{
    console.log('array is sorted')
}
else if(s==1 || t==1)
{
    console.log('array is not sorted')
}

}
let y=[11,22,33,44,55]
xyz(y)
let z=[50,30,20]
xyz(z)

console.log("--------------------------find the particular element count in array---------------------")
//count particular element in array
let aaa=[1,1,1,4,87,9]
count=0
target=1
for(let i=0;i<aaa.length;i++)
{
    if(aaa[i]==target)
   count++
}
console.log(count)


function cou(m,t)
{
    
    count=0
    for(let i=0;i<=m.length;i++)
    {
        if(m[i]==t)
        {
            count++
        }
      
    }
    
    return count
}
let arr=[11,11,11,32,45]
    let str=['supriya','sarika','sara','sas']
  let rrr=  cou(arr,11)
   let sss= cou(str,'sarika')
   console.log(rrr)
   console.log(sss)