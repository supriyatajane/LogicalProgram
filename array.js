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