import Mock from "mockjs";
const Random = Mock.Random;

Mock.setup({
  timeout: '500-1000'
});

Mock.Random.extend({
  idVal() {
    return Random.guid();
  },
  textVal() {
    return Random.paragraph();
  },
  dateVal() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [Random.date("yyyy-MM-dd")],
    }).firstlist;
  },
  numberVal() {
    return Random.integer(20, 40);
  },
  addressVal() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [Random.province() + Random.city() + Random.county()],
    }).firstlist;
  },
  orgVal() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [Random.cname()],
    }).firstlist;
  },
  attachVal() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [
        Random.image("200x200", "#ffcc33", "#FFF", "png", Random.city()),
      ],
    }).firstlist;
  },
  website() {
    return Random.protocol() + Random.domain();
  },
  myemail() {
    return Random.email()
  },
  myip() {
    return Random.ip();
  },
  status() {
    return Random.color();
  },
  myname() {
    return Random.name(true)
  },
  brief() {
    return Random.paragraph();
  }
});

Mock.mock("/getTreeCols", function(options) {
  console.log("options: ", options);
  const columns = [
    {
      field: "title",
      title: "数据标题",
      width: 150,
    },
    {
      field: "age",
      title: "年龄",
      width: 150,
    },
    {
      field: "datetime",
      title: "创建时间",
      width: 150,
    },
    {
      field: "address",
      title: "地址",
      width: 150,
    },
    {
      field: "organization",
      title: "人员多选",
      width: 150,
    },
    {
      field: "attachment",
      title: "附件",
      width: 150,
    },
  ];
  return columns;
});

Mock.mock("/getTreeData", function(options) {
  console.log("options: ", options);
  return Mock.mock({
    "list|30": [
      {
        id: "@idVal",
        title: "@textVal",
        age: "@numberVal",
        datetime: "@dateVal",
        address: "@addressVal",
        organization: "@orgVal",
        attachment: "@attachVal",
      },
    ],
  }).list;
});
