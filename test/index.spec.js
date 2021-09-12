import Tree from '../src/index';

const list = [
  {
    objectId: '001',
    name: '湖北省',
    parentId: ''
  },
  {
    objectId: '0011',
    name: '武汉市',
    parentId: '001'
  },
  {
    objectId: '0012',
    name: '荆州市',
    parentId: '001'
  },
  {
    objectId: '0013',
    name: '宜昌市',
    parentId: '001'
  },
  {
    objectId: '00110',
    name: '武昌区',
    parentId: '0011'
  },
  {
    objectId: '00111',
    name: '洪山区',
    parentId: '0011'
  },
  {
    objectId: '00112',
    name: '江夏区',
    parentId: '0011'
  },
]

let tree = new Tree(list);
let treeData = tree.getTreeData();
let flatData = tree.getFlatData();

describe('树的构造测试', () => {
  beforeAll(() => {

  });

  test('树形数据是一个数组', () => {
    expect(treeData).toBeInstanceOf(Array);
  });

  test('根节点有一个子节点', () => {
    expect(treeData[0].hasChild).toBeTruthy();
  });

  test('原始数据的长度和扁平化后节点的个数相等', () => {
    expect(list.length).toBe(flatData.length);
  });
});

describe('节点顺序测试', () => {
  test('第一个节点是湖北省', () => {
    expect(flatData[0].name).toBe('湖北省');
  });

  test('第二个节点是武汉市', () => {
    expect(flatData[1].name).toBe('武汉市');
  });

  test('第三个节点是武昌区', () => {
    expect(flatData[2].name).toBe('武昌区');
  });

  test('第四个节点是洪山区', () => {
    expect(flatData[3].name).toBe('洪山区');
  });

  test('第五个节点是江夏区', () => {
    expect(flatData[4].name).toBe('江夏区');
  });

  test('第六个节点是荆州市', () => {
    expect(flatData[5].name).toBe('荆州市');
  });

  test('第七个节点是宜昌市', () => {
    expect(flatData[6].name).toBe('宜昌市');
  });
});

describe('节点层次测试', () => {
  test('湖北省处于第一层级', () => {
    expect(flatData[0].level).toBe(0);
  });

  test('武汉市处于第二层级', () => {
    expect(flatData[1].level).toBe(1);
  });

  test('武昌区处于第三层级', () => {
    expect(flatData[2].level).toBe(2);
  });

  test('洪山区处于第三层级', () => {
    expect(flatData[3].level).toBe(2);
  });

  test('江夏区处于第三层级', () => {
    expect(flatData[4].level).toBe(2);
  });

  test('荆州市处于第二层级', () => {
    expect(flatData[5].level).toBe(1);
  });

  test('宜昌市处于第二层级', () => {
    expect(flatData[6].level).toBe(1);
  });
});

describe('孩子节点测试', () => {
  test('湖北省有孩子节点，孩子节点的数量是3。', () => {
    expect(flatData[0].hasChild).toBeTruthy();
    expect(flatData[0].children.length).toBe(3);
  });

  test('武汉市有孩子节点，孩子节点的数量是3。', () => {
    expect(flatData[1].hasChild).toBeTruthy();
    expect(flatData[1].children.length).toBe(3);
  });

  test('武昌区没有孩子节点', () => {
    expect(flatData[2].hasChild).toBeFalsy();
  });

  test('洪山区没有孩子节点', () => {
    expect(flatData[3].hasChild).toBeFalsy();
  });

  test('江夏区没有孩子节点', () => {
    expect(flatData[4].hasChild).toBeFalsy();
  });

  test('荆州市没有孩子节点', () => {
    expect(flatData[5].hasChild).toBeFalsy();
  });

  test('宜昌市没有孩子节点', () => {
    expect(flatData[6].hasChild).toBeFalsy();
  });
});