/**
 * Renvoie un arbre de jeu avec une profondeur donné
 * 
 * @param {*} tree arbre de jeu 
 * @param {*} pieces pieces de jeu
 * @param {*} depth profondeur, 1 par défaut
 * @returns un arbre de jeu
 */
const createTree = (tree, pieces, depth = 1) => {
    if (depth === 0) {
        return tree
    }

    console.log("depth ", depth, " : before iteration : \n", [...tree.postOrderTraversal()])
    
    const leafs = [...tree.preOrderTraversal()].filter(node => node.isLeaf)

    let key = currentKey(leafs) 

    for (let i = 0; i < leafs.length; i++) {
        let config = copy(leafs[i].configuration)

        for (let j = 0; j < config.length; j++) {
            if (config[j] === '') {
                let newConfig = copy(config)

                for (let v = 0; v < pieces.length; v++) {
                    if (!newConfig.includes[pieces[v]]) {
                        newConfig[j] = pieces[v]
                        tree.insert(leafs[i].key, key, newConfig)
                        key++
                    }
                } 
            }
        }
    }

    console.log("depth ", depth, " : after iteration : \n", [...tree.postOrderTraversal()])
    
    createTree(tree, pieces, depth - 1)
}

const currentKey = (leafs) => {
    let biggest = 0;

    for (let i = 0; i < leafs.length; i++) {
        if (leafs[i].key > biggest) {
            biggest = leafs[i].key
        }
    }

    return biggest + 1
}

const copy = (config) => {
    let newConfig = []

    for (let i = 0; i < config.length; i++) {
        newConfig.push(config[i])
    }

    return newConfig
}

export {
    createTree,
    copy
}