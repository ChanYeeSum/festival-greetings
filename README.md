# 节日烟花祝福页

一个带烟花特效的节日祝福网页，可以通过 URL 参数为某个人生成专属祝福。

## 使用方式

- **直接打开 `index.html`**
  - 在浏览器中打开 `index.html` 即可看到烟花和默认祝福。

- **通过地址栏指定祝福对象**
  - 在 URL 后面添加参数：
    - `lang`：语言 `zh` / `en`（可选）
    - `name`：被祝福的人名（或称呼）
    - `festival`：节日名称
    - `message`：自定义祝福语（可选）
    - `from`：署名（可选）
    - `density`：烟花密度 1-10（可选）
    - `star`：星空亮度 0-10（可选）
    - `comet`：是否显示彗星 1/0（可选）
    - `firework`：是否显示烟花 1/0（可选）
    - `paused`：是否暂停动画 1/0（可选）
  - 示例：
    - `index.html?lang=zh&name=小明&festival=新年快乐&message=祝你每天开心&from=你的朋友`
    - `index.html?lang=en&name=Mike&festival=圣诞快乐&message=Have%20a%20wonderful%20holiday!&from=Alice`
    - `index.html?name=爸爸妈妈&festival=中秋快乐`

网页会在中心展示类似：

> 新年快乐  
> 小明，愿你岁岁常欢愉，年年皆胜意。

## 运行一个本地服务（可选）

项目自带一个简单的 `package.json`，方便你使用 `npm` 启动本地静态服务（体验会比直接双击打开更接近线上效果）。

```bash
npm install
npm run start
```

然后按终端提示在浏览器访问对应地址即可。

