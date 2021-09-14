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
  async search(req, res) {
    try {
      if (req.query.id) {
        const task = await Gantt.findByPk(req.query.id);
        if (task) {
          res.status(200).send(task);
        } else {
          res.status(404).send('参数有问题');
        }
      } else {
        const list = await Gantt.findAll({
          include: 'parent'
        });
        res.status(200).send(list);
      }
    } catch(error) {
      res.status(500).send(error.message);
    }
  },
  async update(req, res) {
    try {
      const task = await Gantt.findByPk(req.body.id);
      if (task) {
        task.title = req.body.title;
        task.parent_id = req.body.parent;
        await task.save();
        res.status(200).send('更新成功');
      } else {
        res.status(404).send('传递的参数有问题');
      }
    } catch(err) {
      res.status(500).send('更新失败');
    }
  },
}