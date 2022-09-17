// 1. Find smallest positive number n such that sum of its digits is exactly equal to given x and without repetition of digits (ex for x=25,n=1789).

// let x=25

let x = 27//16 8 1
let a = []// 9 8 7 1// 1789  
for (let i = 9; i >= 1; i--) {
    if (x > i) {
        a.push(i)
        x -= i
    }
    else if (x <= i) {
        a.push(x)
        break;
    }
}
a = Number(a.reverse().join(''))
console.log(a)

function calculteSum(x) {
    let a = []// 9 8 7 1// 1789  
    for (let i = 9; i >= 1; i--) {
        if (x > i) {
            a.push(i)
            x -= i
        }
        else if (x <= i) {
            a.push(x)
            break;
        }
    }
    a = Number(a.reverse().join(''))
    console.log(a)


}
calculteSum(25)
calculteSum(11)


// 2. Given certain tickets available with 7 colours(VIBGYOR)and n people numbered from 1 to n, 1st person gets ticket with colour Voilet,2nd with Indigo,3rd with blue ,7 th with red ..... 8th with again voilet , 9th with indigo and so on uptil n . Find which colour of ticket nth person will get .
/*

/*
v  1  8  15  
i  2  9
b  3  10
g  4  11
y  5  12
o  6  13
r  7  14
*/
let no=12
if(no%7==1)
{
console.log('voilet')
}
else if(no%7==2)
{
console.log('indigo')
}
else if(no%7==3)
{
    console.log('blue')
}
else if(no%7==4)
{
    console.log('green')
}
else if(no%7==5)
{
console.log('yellow')
}
else if(no%7==6)
{
console.log('orange')
}
else if(no%7==7)
{
console.log('red')
}

//in function
function magic(no)
{
    if(no%7==1)
{
console.log('voilet')
}
else if(no%7==2)
{
console.log('indigo')
}
else if(no%7==3)
{
    console.log('blue')
}
else if(no%7==4)
{
    console.log('green')
}
else if(no%7==5)
{
console.log('yellow')
}
else if(no%7==6)
{
console.log('orange')
}
else if(no%7==7)
{
console.log('red')
}

}
magic(7)
magic(25)



