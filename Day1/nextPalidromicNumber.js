function nextPal(val){
    let nextVal = val + 1
    let reverseVal = Number(nextVal.toString().split("").reverse().join(""))
    if(nextVal === reverseVal){
      return reverseVal
    } else {
      return nextPal(nextVal)
    }
}