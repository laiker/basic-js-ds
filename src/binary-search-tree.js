const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    
    function addNode(node, addValue) {

      if (!node) {
        return new Node(data);
      }

      if (node.data > addValue) {
        node.left = addNode(node.left, addValue);
      } else {
        node.right = addNode(node.right, addValue);
      }

      return node;
    }

    this.tree = addNode(this.tree, data);
  }

  has(data) {
    function hasNode(node, findValue) {
      if (!node) {
        return false;
      }

      if (node.data == findValue) {
        return true;
      }

      if (node.data > findValue) {
        return hasNode(node.left, findValue);
      } else {
        return hasNode(node.right, findValue);
      }

    }

    return hasNode(this.tree, data)
  }

  find(data) {
    
    function findNode(node, findValue) {
      if (!node) {
        return null;
      }

      if (node.data == findValue) {
        return node;
      }

      if (node.data > findValue) {
        return findNode(node.left, findValue);
      } else {
        return findNode(node.right, findValue);
      }

    }

    return findNode(this.tree, data)
  }

  remove(data) {
    function removeNode(node, removeValue) {
      if (!node) {
        return null;
      }

      if (node.data > removeValue) {
        node.left = removeNode(node.left, removeValue);
        return node;
      } else if (node.data < removeValue) {
        node.right = removeNode(node.right, removeValue);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        
        let minFromRight = node.right;
        
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
        
      }
    }

    this.tree = removeNode(this.tree, data);
  }

  min() {
    if (!this.tree) {
      return;
    }

    function minNode(node) {
      if (!node.left) {
        return node.data;
      }

      return minNode(node.left);
    }

    return minNode(this.tree);
  }

  max() {
    if (!this.tree) {
      return;
    }
    
    function maxNode(node) {
      if (!node.right) {
        return node.data;
      }

      return maxNode(node.right);
    }

    return maxNode(this.tree);
  }
}

module.exports = {
  BinarySearchTree
};