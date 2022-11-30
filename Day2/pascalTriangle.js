function pascal(depth) {
    //code here
    if(depth === 1){
      return [[1]]
    }
    let pascalTri = []
    for(let row =  1; row <= depth; row++){
      const rowItems = []
      for(let column = 0; column < row; column++){
        if(column === 0 || column === row - 1){
          rowItems.push(1)
        } else{
          rowItems.push(pascalTri[row-2][column-1] + pascalTri[row-2][column])
        }
      }
      pascalTri.push(rowItems)
    }
    return pascalTri
}
