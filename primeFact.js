//prime no
//prime no means those number they divide 1 and istself only

//program 1
//chek the no is prime or not

// function prime(n)
// {
//     c=0
//     for(let i=2;i<n;i++)
//     {
//         if(n%i==0)
//         {
//             c=1
//             break
//         }
//     }
//     if(c==1)
//     {
//         console.log('no is prime')
//     }
//     else{
//         console.log('no is not prime')
//     }
// }
// prime(10)
// prime(6)

 function prime(n){
     let c=0
     for(let i=2;i<n;i++){
         if(n%i==0){
             c=1
             break
         }
     }
     if(c==1){
          //console.log('NO')
         return false
     }
     else{
         // console.log('Yes')
       return true 
     }


 }
 prime(10)
 prime(13)
//
 //count the prime no
 let a=100
 let count=0
 let sum=0
 for(let i=2;i<a;i++)
 {
    if(prime(i))
    {
        console.log(i)//no s of prime
        count++//count the total prime no
        sum+=i    }
 }

 console.log('count value of prime',count,sum)



