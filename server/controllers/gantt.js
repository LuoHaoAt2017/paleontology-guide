const Gantt = require('../models').Gantt;

module.exports = {
  async create(req, res) {
    if (!req.body.title) {
      res.status(404).send('参数错误');
    }
    const params = {
      title: req.body.title
    };
    if (req.body.parent) {
      params.parent_id = req.body.parent;
    }
    try {
      const gantt = await Gantt.create(params);
      res.status(200).send(gantt);
    } catch(error) {
      res.status(500).send(error.message);
    }
  },
  async remove(req, res) {
    if (!req.body.id) {
      res.status(404).send('参数错误');
    }
    const task = await Gantt.findByPk(req.body.id);
    if (task === null) {
      res.status(404).send('没有找到相应的任务');
    }
    try {
      await task.destroy();
      res.status(200).send('删除成功');
    } catch(error) {
      res.status(500).send(error.message);
    }
  },
  update(req, res) {
    res.status(200).send('gantt');
  },
  async search(req, res) {
    try {
      const list = await Gantt.findAll({
        include: 'parent'
      });
      res.status(200).send(list);
    } catch(error) {
      res.status(500).send(error.message);
    }
  }
}