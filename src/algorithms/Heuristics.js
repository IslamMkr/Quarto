const winingConfigs = [
    [0, 1, 2, 3],   
    [4, 5, 6, 7],
    [8, 9, 10, 11], 
    [12, 13, 14, 15],
    [0, 4, 8, 12],  
    [1, 5, 9, 13],
    [2, 6, 10, 14], 
    [3, 7, 11, 15],
    [0, 5, 10, 15], 
    [12, 9, 6, 3],
    [0, 1, 4, 5],
    [1, 2, 5, 6],
    [2, 3, 6, 7],
    [4, 5, 8, 9], 
    [5, 6, 9, 10],
    [6, 7, 10, 11],
    [8, 9, 12, 13], 
    [9, 10, 13, 14],
    [10, 11, 14, 15],
    [0, 2, 8, 10],
    [1, 3, 9, 11],
    [4, 6, 12, 14],
    [5, 7, 13, 15],
    [1, 4, 6, 9],
    [2, 5, 7, 10],
    [5, 8, 10, 13],
    [6, 9, 11, 14],
    [2, 4, 11, 13],
    [1, 7, 8, 14]
]

exports.evaluate = (node) => {
    const tileDesc = node.configuration.map (tile => tile.split("-"))
    
    let winingPositions = 0
    let losingPositions = 0

    for (let check = 0; check < winingConfigs.length; check++) {
        let lineToVerify = winingConfigs[check]
        let descriptions = tileDesc[lineToVerify[0]]

        let posibilityToWin = 0

        for (let j = 0; j < descriptions.length; j++) {
            if (descriptions[j] !== "") {  
                if (tileDesc[lineToVerify[1]].includes(descriptions[j])) posibilityToWin++
                if (tileDesc[lineToVerify[2]].includes(descriptions[j])) posibilityToWin++
                if (tileDesc[lineToVerify[3]].includes(descriptions[j])) posibilityToWin++
            }
        }

        if (posibilityToWin >= 2) winingPositions++
        else losingPositions++
    }

    if (winingPositions > losingPositions) return 1
    else if (winingPositions < losingPositions) return -1

    return 0
}