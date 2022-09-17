// 1.Find char with heighest occurence in a given string


let a = ['a', 'w', 'a', 'a', 'a', 'a', 2, 2, 2, 2, '@']
let m = new Map()

for (let i = 0; i < a.length; i++) {
    m.set(a[i], 0)
}
console.log(m)

for (let i = 0; i < a.length; i++) {
    let x = m.get(a[i])
    x++
    m.set(a[i], x)
}
console.log(m)


// 2.check if given substring is present in other string 

let str = 'abcdef'
let str2 = 'abca'

let n1 = str.length
let n2 = str2.length
let s = ''
ans = 0

for (let i = 0; i < n1 - n2; i++) {
    for (let j = 0; j < n2; j++) {
        s += str[i + j]

    }
    if (str2 == s) {
        ans = 1
    }
}
if (ans == 1) {
    console.log('find')
}
else {
    console.log('not found')
}


//in function
function substring(str,str2) {
    let n1 = str.length
    let n2 = str2.length
    let s = ''
    ans = 0

    for (let i = 0; i < n1 - n2; i++) {
        for (let j = 0; j < n2; j++) {
            s += str[i + j]

        }
        if (str2 == s) {
            ans = 1
        }
    }
    if (ans == 1) {
        console.log('find')
    }
    else if(ans==0){
        console.log('not found')
    }
}
substring('supriya','sup')
substring('dipa','d')