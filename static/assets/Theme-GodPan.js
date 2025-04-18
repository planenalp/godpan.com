//允许移动端实现图标按压特效
document.addEventListener('touchstart', function() {}, false);

document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;
    //let currentHost = window.location.hostname;

    //主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `

        /* 默认亮主题配色 */
        :root {
            --body-bgColor: rgba(255, 255, 255, 0.7); /* 白色背景，透明度70% */
            --SideNav-bgColor: rgba(255, 255, 255, 0.8); /* 白色背景，透明度80% */
            --btnSideNav-hover-bgColor: #81d8d0b3; /* 高亮颜色 70% */
            --box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加阴影 */
            --avatarURL: url("https://godpan.com/avatarTeal.svg");
        }
        /* 暗主题配色 */
        [data-color-mode=light][data-light-theme=dark],
        [data-color-mode=light][data-light-theme=dark]::selection,
        [data-color-mode=dark][data-dark-theme=dark],
        [data-color-mode=dark][data-dark-theme=dark]::selection {
            --body-bgColor: #21262db3; /* 黑色背景，透明度70% */
            --SideNav-bgColor: #21262dcc; /* 黑色背景，透明度80% */
            --btnSideNav-hover-bgColor: #008080b3; /* 高亮颜色 70% */
            --box-shadow: 0 0 transparent; /* 添加阴影 */
            --avatarURL: url("https://godpan.com/avatarWhite.svg");
        }

        /* 背景图 */
        html {    
            background: url('https://godpan.com/bg.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 */
        body {
            background: var(--body-bgColor);
            box-shadow: var(--box-shadow);
        }

        /* header布局 */
        #header {
            height: 190px;
            position: relative; /* 父元素 #header 设置定位 */
            border-bottom: unset;
            margin-bottom: unset;
        }

        #header h1 {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* avatar尺寸 */
        /* 若保留圆形实心旋转 Avatar 效果就仅保留 .avatar 及 width + height 参数，其余参数和 #avatarImg 和 .avatar:hover 和 .avatar:active 删除 */
        #avatarImg {
            content: var(--avatarURL) !important;
        }
        .avatar {
            width: 120px;
            height: 120px;
            transition: 0.1s !important; /* 强制指定动画时长 */
            object-fit: unset !important; /* 强制清除自动缩放 */
            background-color: transparent !important; /* 强制清除背景颜色 */
            border-radius: unset !important; /* 强制清除圆形框设置 */
            box-shadow: none !important; /* 强制清除边框 */
        }
        
        .avatar:hover {
            transform: scale(1.1) !important;
        }

        .avatar:active {
            transform: scale(0.9) !important;
        }
        
        #header h1 a {
            margin-left: unset; /* 重置原参数8px为0 */
            margin-top: 10px; /* 用百分比会崩 */
            font-family:
                "PingFang SC",     /* 苹方（macOS/iOS） */
                "Microsoft YaHei", /* 微软雅黑（Windows） */
                "Noto Sans SC",    /* 思源黑体（Linux/Android） */
                sans-serif;        /* 最终回退到无衬线字体 */
        }

        .blogTitle {
            display: unset; /* 重置属性取消默认屏幕过窄自动隐藏标题 */
        }

        /* 自定义按钮 */
        .title-right {
            margin: unset; /* 重置原参数 */
            margin-top: 215px; /* 用百分比会崩 */
            margin-left: 50%;
            transform: translateX(-50%);
            position: absolute;
        }

        /* 副标题居中+移位 */
        #content > div {
            margin-bottom: unset !important;
            text-align: center;  /* 子元素（副标题）水平居中 */
            height: 75px;
        }

        /* 主页文章列表 */
        .SideNav {
            background: var(--SideNav-bgColor);
            min-width: unset;
        }

        /* 主页文章列表悬停高亮 */
        .SideNav-item:hover {
            background-color: var(--btnSideNav-hover-bgColor);
            transform: scale(1.05);
            box-shadow: var(--box-shadow);
            transition: 0.1s; /* 弹起动画时长 */
        }

        /* 右上角按钮触碰颜色 */
        .btn-invisible:hover {
            background-color: var(--btnSideNav-hover-bgColor);
        }

        /* 重新定义 max-width: 768px 参数下的值，原为 600px */
        @media (max-width: 768px) {
            body {
                padding: 8px !important;
            }
            .avatar {
                width:120px !important;
                height:120px !important;
            }
            .blogTitle{
                display:unset !important;
                }
            #buttonRSS{
                display:unset !important;
            }
            .LabelTime{
                display:unset !important;
            }
            .LabelName{
                display:none !important;
            }
        }
        
        `;
        document.head.appendChild(style);
    }


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `

        /* 默认亮主题配色 */
        :root {
            --body-bgColor: rgba(255, 255, 255, 0.7); /* 白色背景，透明度70% */
            --btnSideNav-hover-bgColor: #81d8d0b3; /* 高亮颜色 70% */
            --box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加阴影 */
        }
        /* 暗主题配色 */
        [data-color-mode=light][data-light-theme=dark],
        [data-color-mode=light][data-light-theme=dark]::selection,
        [data-color-mode=dark][data-dark-theme=dark],
        [data-color-mode=dark][data-dark-theme=dark]::selection {
            --body-bgColor: #21262db3; /* 黑色背景，透明度70% */
            --btnSideNav-hover-bgColor: #008080b3; /* 高亮颜色 70% */
            --box-shadow: 0 0 transparent; /* 添加阴影 */
        }

        /* 背景图 */
        html {    
            background: url('https://godpan.com/bg.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 */
        body {
            background: var(--body-bgColor);
            box-shadow: var(--box-shadow);
        }

        /* 右上角按钮触碰颜色 */
        .btn-invisible:hover {
            background-color: var(--btnSideNav-hover-bgColor);
        }

        /* 重新定义 max-width: 768px 参数下的值，原为 600px */
        @media (max-width: 768px) {
            body {
                padding: 8px !important; /* 外边框缩窄 */
            }
            .postTitle{
                font-size:24px !important; /* 文章标题字号缩小 */
            }
        }
        
        `;
        document.head.appendChild(style);
    } 


    // 搜索页主题--------------------------------------------------------------------
    
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');
        let style = document.createElement("style");
        style.innerHTML = `

        /* 默认亮主题配色 */
        :root {
            --body-bgColor: rgba(255, 255, 255, 0.7); /* 白色背景，透明度70% */
            --SideNav-bgColor: rgba(255, 255, 255, 0.8); /* 白色背景，透明度80% */
            --btnSideNav-hover-bgColor: #81d8d0b3; /* 高亮颜色 70% */
            --box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加阴影 */
        }
        /* 暗主题配色 */
        [data-color-mode=light][data-light-theme=dark],
        [data-color-mode=light][data-light-theme=dark]::selection,
        [data-color-mode=dark][data-dark-theme=dark],
        [data-color-mode=dark][data-dark-theme=dark]::selection {
            --body-bgColor: #21262db3; /* 黑色背景，透明度70% */
            --SideNav-bgColor: #21262dcc; /* 黑色背景，透明度80% */
            --btnSideNav-hover-bgColor: #008080b3; /* 高亮颜色 70% */
            --box-shadow: 0 0 transparent; /* 添加阴影 */
        }
        
        /* 背景图 */
        html {    
            background: url('https://godpan.com/bg.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 */
        body {
            background: var(--body-bgColor);
            box-shadow: var(--box-shadow);
        }

        /* 列表透明边框 */
        .SideNav {
            background: var(--SideNav-bgColor);
            min-width: unset;
        }

        /* 鼠标放到博客标题后会高亮 */
        .SideNav-item:hover {
            background-color: var(--btnSideNav-hover-bgColor);
            transform: scale(1.05);
            box-shadow: var(--box-shadow);
        }

        /* 弹起动画时长 */
        .SideNav-item {
            transition: 0.1s;
        }
        
        /* 搜索布局 */
        .subnav-search {
            width: 230px; 
        }

        /* 右上角按钮触碰颜色 */
        .btn-invisible:hover {
            background-color: var(--btnSideNav-hover-bgColor);
        }

        /* 重新定义 max-width: 768px 参数下的值，原为 600px */
        @media (max-width: 768px) {
            body {
                padding: 8px !important; /* 外边框缩窄 */
            }
            .tagTitle {
                display: unset !important;
                font-size: 14px !important; /* tag 字号缩小 */
            }
            .LabelTime{
                display:unset !important;
            }
            .LabelName{
                display:none !important;
            }
        }
        
        `;
        document.head.appendChild(style);
    }
})
