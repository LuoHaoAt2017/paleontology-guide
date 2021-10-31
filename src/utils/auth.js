import Cookies from "js-cookie";
// 登录中心
// 从 app 登录
// 从 web 登录
// 从 微信小程序 登录
// 从 钉钉工作台 登录

/**
 * 区分从哪里进到登录中心
 * 从地址栏中获取路由参数，根据路由参数发起请求，将 token 信息 写进 cookie。
 * 根据 token 信息发起请求获取当前用户的信息，包括角色信息。
 */
export default function loginAuth() {
  return true;
}
