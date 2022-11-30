function toCsvText(array) {
    let csvText = ''
    for(let i = 0; i < array.length; i++){
      let arrayToText = array[i].join(',').concat('\n')
      csvText = csvText.concat(arrayToText)
    }
    return csvText.trim()
}