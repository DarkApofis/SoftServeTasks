function moveZeros(arr) {
    const zeros = []
    const nonZeros = []
    arr.forEach(item => {
        if(item === 0){
            zeros.push(item)
        } else {
            nonZeros.push(item)
        }
    })
    return nonZeros.concat(zeros)
}

//-----------------Other solution-----------------//

// function moveZeros(arr) {
//     const zeros = arr.filter(item => item === 0)
//     return arr.filter(item => item !== 0).concat(zeros)
// }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))