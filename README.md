# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## TypeScript

```tsx
    interface 事实上与 类型别名 type 是差不太多的

    interface 在下面这种联合类型上是无法取代type联合类型的

    type FavoriteNumber = string | number

    Utility type类型的 parameters

    js中的typeof实在runtime时执行的的，而 typescript 中的 typeof 是当传递一个函数的时候，
    传入一个泛型
    parameters对函数中所需要传递到额值的类型进行提取


    Partial
    当我们对一个类型传参时，不知道需要传递什么，或者说只知道其中几个
    此时就可以进行 Partial<> 类型的指定

    Omit
    当拥有一个不知道内容类型的参数时，就可以用到Omit泛型进行定义
    Omit<参数一：指定的类型，参数二：删除的对象>
```
