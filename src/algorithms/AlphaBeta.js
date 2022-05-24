import Heuristics from "./Heuristics"

const alphabeta = (node, tree, max, alpha = Number.NEGATIVE_INFINITY, beta = Number.POSITIVE_INFINITY) => {
    if (node.isLeaf) {
        return Heuristics.evaluate(node)
    }

    if (max) {
        let children = node.children

        for (let i = 0; i < children.length && alpha < beta; i++) {
            alpha = Math.max(alpha, alphabeta(children[i], tree, false, alpha, beta))
        }

        return alpha
    } else {
        let children = node.children

        for (let i = 0; i < children.length && alpha < beta; i++) {
            beta = Math.min(beta, alphabeta(children[i], tree, true, alpha, beta))
        }

        return beta
    }
}

export default alphabeta