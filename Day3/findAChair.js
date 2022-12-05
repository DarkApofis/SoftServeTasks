let meeting = (meetRooms, chairsNeeded) =>{
    if(chairsNeeded === 0) return 'Game on'

    const avalCha = meetRooms.map(([occupChairs, totalChairs]) => (occupChairs.length >= totalChairs) ? 0 : totalChairs - occupChairs.length)
    const totalAvalChairs = avalCha.reduce((a,b) => a + b, 0)

    if(totalAvalChairs < chairsNeeded) return 'Not enough'

    let totalSparedChairs = 0
    const spareChairs = []
    
    for(let i = 0; i < avalCha.length; i++){
        if(totalSparedChairs === chairsNeeded) break
        totalSparedChairs += avalCha[i]
        spareChairs.push(avalCha[i])
    }

    return spareChairs
}


console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)) // ---> [0, 1, 3]

console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)) //---> [0, 0, 1, 2, 2]

console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)) // ---> 'Game On'

console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4)) // ---> 'Not enough!'