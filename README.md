# mock-configuration

## Project setup

```
yarn install or npm install
```

### Compiles and hot-reloads for development

```
yarn serve or npm run serve
```

### Compiles and minifies for production

```
yarn build or npm run build
```

### Lints and fixes files

```
yarn lint or npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 代码参考

### 渲染加载md文件

```javascript
testFunc()
{
    // marked 文件需要先通过接口的方式请求.md 文件获取值再通过marked.parse 赋值给html
    this.text = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
    this.$services.test({})
}
```

### 组件库

[ElementUI](https://element.eleme.cn/#/zh-CN)
