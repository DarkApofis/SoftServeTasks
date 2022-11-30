function createPhoneNumber(numbers){
    const parenthesisNumb = `(${numbers.slice(0, 3).join("")})`
    const beforeHyphen = `${numbers.slice(3, 6).join("")}`
    const afterHyphen = `${numbers.slice(6,).join("")}`
    return `${parenthesisNumb} ${beforeHyphen}-${afterHyphen}`
}