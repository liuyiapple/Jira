import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DevTools, loadServer } from "jira-dev-tool";
import { AppProviders } from "./context";
// 引入 antd 的 css
import "antd/dist/antd.less";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
loadServer(() => {
  root.render(
    <React.StrictMode>
      {/*  包裹之后可以将所有的组件连接起来 context，那么App下的组件就成了ReactNode了
            当然也可以直接使用在AppProvider中写的方法或者constomHook
        ，就相当于Vue中的prevend */}
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
