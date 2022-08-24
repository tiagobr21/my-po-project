let nc = 0
let a1 = 1
let a2 = 1
console.log(1)
for (let i = 0; i < 50; i++) {
    nc = a1 + a2
    a2 = a1
    a1 = nc
console.log(nc)
}