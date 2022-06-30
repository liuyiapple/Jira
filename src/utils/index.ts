import { useEffect, useState } from "react";
// 这里对数据是0的值做一个判断

export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;
export const isVoid = (value: unknown): boolean =>
  value === undefined || value === null || value === "";
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    const value = result[key];
    // 这里存在一个逻辑问题，就是当key的值是0的时候，0会作为一个有效值存在，取反的话则则会变成true，
    // 这样就会将result[key]真正的删掉，所以这里需要做一下处理
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// 这里将要自定义一些hooks

// 第一次加载的时候，都需要进行useEffect的操作,所以这里封装一个
//  直接传递一个回到函数，进来就给他执行了
// 在进行封装constom hook的时候，需要以use开头，这样才能被react识别
// react中的hook只能在以use开头的函数中执行或者在其他hook中执行
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // TODO useEffect依赖项加上callback之后会造成无限循环
  }, []);
};

// useDebounce 封装一个防抖的constome hook
/**
 *  后面用泛型来约束这个函数的类型
 * */
export const useDebounce = <T>(value: T, delay?: number): any => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次value变化之后，都设置一个value
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 这里是来处理上一次的执行任务
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
