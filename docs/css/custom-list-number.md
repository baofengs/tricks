---
title: 自定义列表序号
---

# 自定义列表序号

> 此方法不限于修改 `ul/li`、`ol/li` 默认排序数字，其他元素同样适用

**CSS**

```scss {9,14,15}
/* reset */
ul {
    list-style: none;
    padding: 0;
}

/* reset counter */
ul {
  counter-reset: li;
}

/* set counter */
li:before {
  content: counter(li);
  counter-increment: li;
  display: inline-block;
  width: 20px;
  text-align: center;
}
```

**HTML**

```html
ul>li{item $}*10
```
