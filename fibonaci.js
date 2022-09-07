//fibonaci no means first two number sum third no
//0,1,2,3,4,5,6,7,

function fib(m)
{
    let a=0
    let b=1
    
    console.log(a)
    console.log(b)
    for(let i=3;i<=m;i++)
    {
       let c=a+b
        console.log(c)
        a=b
        b=c
    }
}
fib(10)


//star pattern

//*
//* *
//* * *
//* * * *
//* * * * *

for(let i=1;i<=5;i++)
{
    let s=''
    for(let j=1;j<=i;j++)
    {
    s+='*'
    }
    console.log(s)
}



//1
//1  2
//1   2  3
//1    2  3  4


for(let i=1 ;i<=4;i++)
{
    s=''
    for(let j=1;j<=i;j++)
    {
        s+=j+' '
    }
    console.log(s)
}

