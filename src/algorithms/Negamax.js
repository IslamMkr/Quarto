import Heuristics from "./Heuristics"

const negamax = (node, tree) => {
    if (node.isLeaf) {
        return Heuristics.evaluate(node)
    } 
    
    let val = Number.NEGATIVE_INFINITY

    let children = node.children

    for (let i = 0; i < children.length; i++) {
        val = Math.max(val, -negamax(children[i], tree))
    }

    return val
}

export default negamax