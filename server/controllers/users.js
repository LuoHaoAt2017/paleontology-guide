const UserModel = require('../models').Users;

module.exports = {
  async getUserById(req, res) {
    const userId = req.query.id;
    try {
      const user = await UserModel.findOne({
        where: {
          id: userId
        }
      });
      if (user) {
        return res.status(200).send({
          mesg: '查找成功',
          data: user
        });
      } else {
        return res.status(404).send({
          mesg: "user id 参数错误",
        });
      }
    } catch(error) {
      return res.status(500).send({
        mesg: error,
      });
    }
  },
}