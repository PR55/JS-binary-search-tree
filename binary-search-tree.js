// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root= null;
  }

  insert(val, currentNode=this.root) {
    if(this.root === null){
      this.root = new TreeNode(val);
    }else if(currentNode.val > val){
      if(!currentNode.left){
        currentNode.left = new TreeNode(val);
      }else{
        this.insert(val,currentNode.left);
      }
    } else{
      if(!currentNode.right){
        currentNode.right = new TreeNode(val);
      }else{
        this.insert(val,currentNode.right);
      }
    }
  }

  search(val) {
    let curNode = this.root;

    while(curNode){
      if(curNode.val === val){return true};

      if(curNode.val > val){curNode = curNode.left;}
      else{curNode = curNode.right;}
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    if(currentNode){
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }

  }


  inOrderTraversal(currentNode = this.root) {
    if(currentNode){
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if(currentNode){
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let curNode = this.root;

    let arr = [curNode];

    for(let i = 0; i < arr.length; i++){
      if(!(arr[i] instanceof Array)){
        console.log(arr[i].val);
        arr.push([arr[i].left, arr[i].right])
      }else if(arr[i].length){
        let tempArr = [];
        for(let el of arr[i]){
          if(el){
            console.log(el.val);
            tempArr.push(el.left);
            tempArr.push(el.right);
          }
        }
        arr.push(tempArr);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let curNode = this.root;

    let arr = [curNode];

    for(let i = 0; i < arr.length; i++){
      if(arr[i]){
        if(!(arr[i] instanceof Array)){
          console.log(arr[i].val);
          arr.push([arr[i].right])
          arr.push([arr[i].left])
        }else if(arr[i].length){
          let tempArr = [];
          for(let el of arr[i]){
            if(el){
              console.log(el.val);
              if(el.right)
              {tempArr.push(el.right);}
              if(el.left)
              {tempArr.push(el.left);}
            }
          }
          if(tempArr.length && !arr.includes(tempArr)){
            arr.push(null);
            arr[i + 2] = arr[i + 1];
            arr[i + 1] = tempArr;
          }
        }
      }
    }
  }
}

bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

// console.log(bst.search(4));
bst.depthFirstTraversal();

module.exports = { BinarySearchTree, TreeNode };
