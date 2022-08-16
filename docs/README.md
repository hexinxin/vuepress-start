# Hello VuePress

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)
<!-- URL -->
[GitHub](https://github.com) 

VuePress 2 已经发布 :tada: ！

## 二级标题
### 三级标题

[[toc]]


```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

![图片](/imgSrc.jpg)

<img :src="$withBase('/imgSrc.jpg')" alt="VuePress Logo">
