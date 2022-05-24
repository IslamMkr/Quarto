exports.checkForAWin = (gameBoard, gameLevel) => {
    if (gameLevel === 1) {
        return levelOne(gameBoard)
    } else if (gameLevel === 2) {
        return levelTwo(gameBoard)
    } else if (gameLevel === 3) {
        return levelThree(gameBoard)
    } else if (gameLevel === 4) {
        return levelFour(gameBoard)
    }

    return undefined
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

const levelTwoChecks = [
    [0, 1, 4, 5],
    [1, 2, 5, 6],
    [2, 3, 6, 7],
    [4, 5, 8, 9], 
    [5, 6, 9, 10],
    [6, 7, 10, 11],
    [8, 9, 12, 13], 
    [9, 10, 13, 14],
    [10, 11, 14, 15]
]

const levelThreeChecks = [
    [0, 2, 8, 10],
    [1, 3, 9, 11],
    [4, 6, 12, 14],
    [5, 7, 13, 15]
]

const levelFourChecks = [
    [1, 4, 6, 9],
    [2, 5, 7, 10],
    [5, 8, 10, 13],
    [6, 9, 11, 14],
    [2, 4, 11, 13],
    [1, 7, 8, 14]
]

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

const levelTwo = (gameBoard) => {
    if (levelOne(gameBoard)) {
        return true
    }

    const tileDesc = gameBoard.map (tile => tile.split("-"))
    
    for (let check = 0; check < levelTwoChecks.length; check++) {
        let lineToVerify = levelTwoChecks[check]
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

const levelThree = (gameBoard) => {
    if (levelTwo(gameBoard)) {
        return true
    }

    const tileDesc = gameBoard.map (tile => tile.split("-"))
    
    for (let check = 0; check < levelThreeChecks.length; check++) {
        let lineToVerify = levelThreeChecks[check]
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

const levelFour = (gameBoard) => {
    if (levelThree(gameBoard)) {
        return true
    }

    const tileDesc = gameBoard.map (tile => tile.split("-"))
    
    for (let check = 0; check < levelFourChecks.length; check++) {
        let lineToVerify = levelFourChecks[check]
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