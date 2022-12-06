// CUSTOM MAP METHOD

Array.prototype.customMap = function (callback) {
    const newArray = []

    this.forEach((element, index, array) =>
      newArray.push(callback(element, index, array))
    )

    return newArray;
};

const numbers = [1, 2, 3, 4, 5, 6, 7]
const numbersMultipliedBy2 = numbers.customMap((item) => item * 2)

console.log(numbersMultipliedBy2)

// CUSTOM FILTER METHOD

Array.prototype.customFilter = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const numberGreaterThan3 = numbers.customFilter((item) => item > 3)
console.log(numberGreaterThan3)

// CUSTOM EVERY METHOD

Array.prototype.customEvery = function(callback){
    let isEverythingTrue = true
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i], i, this)){
            return isEverythingTrue = false
        }
    }
    return isEverythingTrue
}

const allNumberLowerThan8 = numbers.customEvery((item) => item < 8)
console.log(allNumberLowerThan8)

const three = [3, 3, 3, 3, 3].customEvery((item) => item !== 3)
console.log(three)
