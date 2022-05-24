import Heuristics from "./Heuristics"

const minimax = (node, tree, max) => {
    if (node.isLeaf) {
        return Heuristics.evaluate(node)
    }

    let val

    if (max) {
        val = Number.NEGATIVE_INFINITY

        let children = node.children

        for (let i = 0; i < children.length; i++) {
            val = Math.max(val, minimax(children[i], tree, false))
        }
    } else {
        val = Number.POSITIVE_INFINITY

        let children = node.children

        for (let i = 0; i < children.length; i++) {
            val = Math.min(val, minimax(children[i], tree, false))
        }
    }

    return val
}

export default minimax