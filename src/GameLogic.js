exports.checkForAWin = (gameBoard, gameLevel) => {
    if (gameLevel === 1) {
        return levelOne(gameBoard)
    }
}

const levelOneChecks = [
      [0, 1, 2, 3],   
      [4, 5, 6, 7],
      [8, 9, 10, 11], 
      [12, 13, 14, 15],
      [0, 4, 8, 12],  
      [1, 5, 9, 13],
      [2, 6, 10, 14], 
      [3, 7, 11, 15],
      [0, 5, 10, 15], 
      [12, 9, 6, 3]
];

const levelOne = (gameBoard) => {
    const tileDesc = gameBoard.map (tile => tile.split("-"))
    
    for (let check = 0; check < levelOneChecks.length; check++) {
        let lineToVerify = levelOneChecks[check]
        let descriptions = tileDesc[lineToVerify[0]]

        for (let j = 0; j < descriptions.length; j++) {
            if (descriptions[j] !== "") {  
                if (tileDesc[lineToVerify[1]].includes(descriptions[j]) &&
                    tileDesc[lineToVerify[2]].includes(descriptions[j]) &&
                    tileDesc[lineToVerify[3]].includes(descriptions[j])) {
                        return true
                }
            }
        }
    }

    return false
}
