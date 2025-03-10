(function() {
  // 创建样式
  const style = document.createElement('style');
  style.textContent = `
    .back-to-top {
      position: fixed;
      bottom: 120px;
      right: 20px;
      cursor: pointer;
      font-size: 24px;
      background-color: #FFFFFFB3;
      color: #656d76b3;
      border: 2px solid #656d76b3;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: none;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12);
      z-index: 10000;
      transition: transform 0.1s ease, opacity 0.1s ease;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      outline: none;
      padding: 0; /* 加了这两行才能修复移动端变形+不显示图标问题 */
      margin: 0; /* 加了这两行才能修复移动端变形+不显示图标问题 */
    }
    .back-to-top:hover {
      transform: scale(1.1);
      color: #FFFFFFB3;
      background-color: #81D8D0B3;
      border-color: #FFFFFFB3; /* 激活按钮边框颜色改为白色 */
    }
    .back-to-top:active {
      transform: scale(0.9); /* 按住时缩小 */
    }
    .back-to-top svg {
      width: 24px;
      height: 24px;
      fill: none; /* 设置 svg 内部不填充颜色（透明） */
      stroke: currentColor; /* 想要即时切换只能用 currentColor 将描边颜色设置为当前文字颜色（继承父元素的颜色）*/
      stroke-width: 2; /* 设置描边（线条）的宽度为 2 像素 */
      stroke-linecap: round; /* 设置描边端点为圆形，使线条末端圆润 */
      stroke-linejoin: round;  /* 设置线条转角为圆形，使角部更平滑 */
    }

  `;
  document.head.appendChild(style);

  // 创建按钮
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(btn);

  // 点击事件处理
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 滚动事件处理
  function toggleButtonVisibility() {
    if (window.pageYOffset > 100) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  }

  window.addEventListener('scroll', toggleButtonVisibility);
  window.addEventListener('resize', toggleButtonVisibility);

  // 初始检查
  toggleButtonVisibility();
})();
