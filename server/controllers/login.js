const UserModel = require('../models').Users;
const { createJwtToken } = require('../utils');

module.exports = {
  /**
   * 先去数据库中查询 username 的用户信息，
   * 比对 password 是否相同，不同则登录失败。
   * 相同的话登录成功，生成 token，写进响应头部。
   */
  async login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    try {
      const user = await UserModel.findOne({
        where: {
          username: username
        }
      });
      if (user && user.password === password) {
        const token = createJwtToken();
        return res.status(200).send({
          mesg: '登录成功',
          data: user,
          token: token
        });
      } else {
        return res.status(500).end({
          mesg: "用户名或者密码错误",
        });
      }
    } catch(error) {
      return res.status(500).send({
        mesg: error,
      });
    }
  },
  /**
   * 先去数据库中查询 username 的用户信息，
   * 如果存在，说明这个用户名已经被占用。
   * 否则，注册。
   */
  async register(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await UserModel.findOne({
      where: {
        username: username
      }
    });
    if (user) {
      return res.status(404).send({
        mesg: '用户名已经被占用',
      });
    }
    try {
      const data = await UserModel.create({
        username: username,
        password: password
      });
      if (data) {
        return res.status(200).send({
          mesg: "注册成功",
          data: {
            id: data.id,
            username: data.username
          }
        });
      } else {
        return res.status(500).send({
          mesg: '注册失败',
        });
      }
    } catch(error) {
      return res.status(500).send({
        mesg: error,
      });
    }
  }
}