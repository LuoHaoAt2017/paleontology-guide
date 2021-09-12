export default function Tree(data) {
  this.tree = []; // 树形结构
  this.list = []; // 线性结构
  this.init(data);
}
// 树的构造
Tree.prototype.init = function(data) {
  // 找到所有的第一层级的节点。它们是每一棵树的根结点。
  for(let i = 0; i < data.length; i++) {
    const node = data[i];
    if (!node.parentId) {
      node.children = [];
      node.level = 0;
      this.build(node, data);
      node.hasChild = node.children.length > 0;
      this.tree.push(node);
    }
  }
  // 将树形结构数据扁平化。
  this.flat();
}
// 结构化
Tree.prototype.build = function(parant, data) {
  if (!parant) {
    return;
  }
  for(let i = 0; i < data.length; i++) {
    if (data[i].parentId === parant.objectId) {
      const node = data[i];
      node.children = [];
      node.level = parant.level + 1;
      this.build(node, data);
      node.hasChild = node.children.length > 0;
      parant.children.push(node);
    }
  }
}
// 扁平化
Tree.prototype.flat = function() {
  for(let i = 0; i < this.tree.length; i++) {
    preOrder(this.tree[i], (node) => {
      this.list.push(node);
    });
  }
}

Tree.prototype.getTreeData = function() {
  return this.tree;
}

Tree.prototype.getFlatData = function() {
  return this.list;
}

function preOrder(node, callback) {
  if (!node) {
    return;
  }
  callback(node);
  if (node.children && node.children.length) {
    for(let i = 0; i < node.children.length; i++) {
      preOrder(node.children[i], callback);
    }
  }
}