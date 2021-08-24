/**
 * 使一个有宽高的元素在鼠标移入时有倾斜效果
 * @param degreeRate 倾斜程度，默认15
 */
function TiltDirective(degreeRate: number = 15) {
  const name = 'tilt';
  const obj = {
    mounted(ele: HTMLElement) {
      // 设置默认样式
      ele.style.transformStyle = 'preserve-3d';
      ele.style.transition = 'none';
      // 获取被绑定元素的宽高
      const eleStyle = getComputedStyle(ele);
      const eleW = parseInt(eleStyle.width);
      const eleH = parseInt(eleStyle.height);
      ele.addEventListener('mousemove', (evt: MouseEvent) => {
        // 获取到鼠标在被绑定元素中的位置
        const mx = evt.offsetX;
        const my = evt.offsetY;
        // 把坐标转换到pink方块中间
        const ox = mx - (eleW / 2);
        const oy = my - (eleH / 2);
        // 好了( •̀ ω •́ )y
        ele.style.transform = `rotateX(${-oy / degreeRate}deg) rotateY(${ox / degreeRate}deg)`;
      }, false);
      ele.addEventListener('mouseleave', (evt: MouseEvent) => {
        // 鼠标离开元素的时候重置transform
        ele.style.transform = `rotateX(0deg) rotateY(0deg)`;
        ele.style.transition = 'all ease 300ms';
        setTimeout(() => {
          ele.style.transition = 'none';
        }, 300)
      }, false);
    }
  };
  return { name, obj }
}


export default TiltDirective;
