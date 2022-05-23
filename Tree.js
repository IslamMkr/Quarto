class Tree {

	constructor(root) {
		this.root = root || null;
	}

	traverse(callback) {
		function goThrough(node) {
			callback(node);
			node.children.forEach( child => {
				goThrough(child);
			});
		}
		
		goThrough(this._root);
	}


	addNode(board, parentConfiguration) {
		const newNode = {
			board,
			children: []
		};

		if (this._root === null) {
			this._root = newNode;
			return;
		}

		this.traverse((node) => {
			if (node.board === parentConfiguration) {
				node.configurations.push(newNode);
			}
		});
	}

	removeNode(board) {
		this.traverse((node) => {
			node.configurations.forEach((childNode, index) => {
				if (childNode.board === board) {
					node.configurations.splice(index, 1);
				}
			});
		})
	}

	search(board) {
		let returnNode = 'Not Found';
		this.traverse((node) => {
			if (node.board === board) {
				returnNode = node;
			}
		});
		return returnNode;
	}

	// displayLeafs(parentValue) {
	// 	const parentNode = typeof parentValue === 'array' ? this.search(parentValue) : parentValue ;
	// 	let leafsRet = [];
	// 	if (parentValue.children && !parentValue.children.length) {
	// 		return parentValue;
	// 	}

	// 	parentNode.children.forEach((child) => {
	// 		leafsRet.push(this._displayLeafs(child));
	// 	});

	// 	return leafsRet.flat();
	// }

}

class Node {
	constructor(board, configurations) {
		this.board = board;
		this.configurations = configurations;
	}
}