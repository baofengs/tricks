---
title: Flexible Images
---

**问题**：图片加载之前，图片的容器会塌陷

**解决**：

1. 使用`padding-bottom`使容器*宽高比化*，关于宽高比更多知识查看
    - [CSS实现长宽比的几种方案](https://www.w3cplus.com/css/aspect-ratio.html)
    - [容器长宽比](https://www.w3cplus.com/css/aspect-ratio-boxes.html)
2. 添加 loading 样式

### HTML

```html
<div class="demo-wrapper">
    <div class="image-wrapper image-wrapper--loading">
        <img class="image" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-278967.jpg" />
    </div>
</div>
<p>Hit the button!</p>
<button class="load-image">Load Image</button>
```

### CSS

```css {2}
.image-wrapper {
    padding-bottom: 62.5%;
}
.demo-wrapper {
  max-width: 320px;
  width: 100%;
}
.image-wrapper {
    width: 100%;
	border: 2px solid black;
    position: relative;
	background: white;
}
.image-wrapper img {
    position: absolute;
    width: 100%;
    opacity: 1;
}
.image-wrapper--loading {
    background: white url(data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==) center center no-repeat;
}
.image-wrapper--loading img {
     opacity: 0;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #00EFE8;
}

```

### JS

```js
$(document).ready(function() {
    // when the image has loaded
    $('.image').load(function() {
        // remove loading class from the wrapper
         $(this).parent('.image-wrapper').removeClass('image-wrapper--loading');
    });
    
    var imagePath = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-278967.jpg';
    
    // delaying the loading of the image so you can see the loading state
    $('.load-image').click(function() {
      $('.image').parent('.image-wrapper').addClass('image-wrapper--loading');
      $('.image').attr('src', '');
      setTimeout(() => {
        $('.image').attr('src', imagePath + '?' + Math.random());        
      }, 1000);
    });
});
```

<iframe height="421" style="width: 100%;" scrolling="no" title="EreVzg" src="//codepen.io/Bfeng/embed/EreVzg/?height=421&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Bfeng/pen/EreVzg/'>EreVzg</a> by Baofeng
  (<a href='https://codepen.io/Bfeng'>@Bfeng</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
