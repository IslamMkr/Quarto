/**
 * Arbre de jeu, représenté par une racine root.
 */
class Tree {
	constructor(key, configuration) {
		this.root = new TreeNode(key, configuration);
	}

	*preOrderTraversal(node = this.root) {
		yield node;
		if (node.children.length) {
			for (let child of node.children) {
				yield* this.preOrderTraversal(child);
			}
		}
	}

	*postOrderTraversal(node = this.root) {
		if (node.children.length) {
			for (let child of node.children) {
				yield* this.postOrderTraversal(child);
			}
		}
		yield node;
	}

    ready() {
        let placeePieces = 0

        for (let i = 0; i < this.root.configuration.length; i++) {
            if (this.root.configuration[i] !== '') placeePieces++
        }

        return placeePieces >= 2
    }

	insert(parentNodeKey, key, configuration) {
		for (let node of this.preOrderTraversal()) {
			if (node.key === parentNodeKey) {
				node.children.push(new TreeNode(key, configuration, node));
				return true;
			}
		}
		return false;
	}

	remove(key) {
		for (let node of this.preOrderTraversal()) {
			const filtered = node.children.filter(c => c.key !== key);
			if (filtered.length !== node.children.length) {
				node.children = filtered;
				return true;
			}
		}
		return false;
	}

	find(key) {
		for (let node of this.preOrderTraversal()) {
			if (node.key === key) {
				return node;
			}
		}
		return undefined;
	}
}

/**
 * Noeud d'un arbre de jeu, représenté par:
 * key : un identifiant
 * configuration : position de jeu.
 * parent : noeud parent
 * children : sous-noeud
 */
class TreeNode {
	constructor(key, configuration, parent = null) {
		this.key = key;
		this.configuration = configuration;
		this.parent = parent;
		this.children = [];
	}

	get isLeaf() {
		return this.children.length === 0;
	}

	get hasChildren() {
		return !this.isLeaf;
	}
}

export {
    Tree, 
    TreeNode
}