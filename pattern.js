
/*1 
 2 3 
 4 5 6
 7 8 9 10
*/


function pattern(n)
{
let k=1
for(let i=1;i<=n;i++)
{
    s=''
    for(let j=1;j<=i;j++)
    {
      s+=k+' '
      k++
    }
    console.log(s)
}
}
pattern(4)




/*
1
23
456
78910
1112131415
161718192021

*/

function abc(m){
      let k=1
       for(let i=m;i>=0;i--){
         let s=''
         for(let j=0;j<=m;j++){
           if(j>=i){
             s+=k
             k++
           }
           else if(i>j){
             s+=' '
           }
         }
         console.log(s)
       }
     }
    
     abc(5)
    
//problem 3
console.log('========================================================')
/*
a
b b
c c c
d d d d
e e e e e

*/

function char(m)
{
let a=['a','b','c','d','e','f','g','h','i']

for(let i=0;i<=m;i++)
{
  let s=''
  for(let j=0;j<=i;j++)
  {
    s+=a[i]+' '
  }
  console.log(s)
}

}
char(4)
char(6)

console.log("--------------------------------------------------")
/*
a
a b
a b c
a b c d
a b c d e


*/

function rev(m)
{
  let a=['a','b','c','d','e','f','g','h','i']
for(let i=0;i<=m;i++)
{
  let s=''
  for(let j=0;j<=i;j++)
  {
    s+=a[j]+' '
  }
  console.log(s)
}
}
rev(4)

console.log('--------------------------------------------------------------------------')

function char1(m)
{
let a=['a','b','c','d','e','g','h','i','j','k','l','m','n','o','p','q','r']
let c=0
for(let i=0;i<=m;i++)
{
  let s=''

  for(let j=0;j<=i;j++)
  {
    s+=a[c]+' '
    c++
  }
  console.log(s)
}
}
char1(4)
