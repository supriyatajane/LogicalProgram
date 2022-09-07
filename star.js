
//program 1
//*
//**
//***
//****
//*****
//Ans=>
for(let i=1;i<=5;i++)
{
    let s=''
    for(let j=1;j<=i;j++)
    {
        s+='* '
    }
    console.log(s)
}


/*

* * * *
* * *
* * 
*


*/

console.log('star')
for(let i=5;i>=1;i--)
{
    s=''
    for(let j=i;j>=1;j--)
    {
        s+='* '
    }
    console.log(s)
}


console.log('star pattern')

// for(let i=6;i>=1;i--)
// {
//     s=''
//     for(j=0;j<=4;j++)
//     {
//         if(j>=i)
//         {
//             s+=s+'*'
//         }
//         else{
//             s+=' '
//         }
        
//     }
//     console.log(s)
// }

/*
   **
  ***
 ****
*****
*/
for(let i=4;i>=0;i--){
    let s=''
    for(let j=0;j<=4;j++){
        if(j>=i){
            s=s+'*'
        }
        else{
            s+=' '
        }
    }
    console.log(s)
}



console.log("------------------------------------")
/*
 *
   * *
  * * *
 * * * *
* * * * *
*/


for(let i=4;i>=0;i--){
    let s=''
    for(let j=0;j<=4;j++){
        if(j>=i){
            s=s+'* '
        }
        else{
            s+=' '
        }
    }
    console.log(s)
}




