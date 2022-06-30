// 在真是环境中，如果使用firebase这种第三方auth服务，本文件就不需要开发
import { User } from "./screens/project-list/search-panel";

// 存放token
const localStorageKey = "__auth_provider_token__";

// 配置的路径，在系统处于来发环境时，运行的是.env这个文件
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

// 登录

export const login = (data: { username: string; password: string }) => {
  // json-server 中的fetch请求
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

// 注册
export const register = (data: { username: string; password: string }) => {
  // json-server 中的fetch请求
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

// 退出登录
export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
