
interface IBindObjValue {
  degreeRate: number;
  translateZ: string;
  [key: string]: any;
}
interface IBindObj {
  value: IBindObjValue | undefined;
  [key: string]: any;
}

export class TiltDirective {
  Entry() {
    const name = 'tilt';
    const obj = {
      mounted: (ele: HTMLElement, bind: IBindObj) => {
        const degreeRate = bind.value && bind.value.degreeRate ?
          bind.value.degreeRate : 15;
        const eleStyleCover = {
          translateZ: bind.value?.translateZ ?? '100px',
        }
        // 获取被绑定元素的宽高
        const eleStyle = getComputedStyle(ele);
        console.log('style', eleStyle);

        const floatDiv1 = document.createElement('div');
        floatDiv1.setAttribute('style', `
position: absolute;
left: 50%;
top: 50%;
width: 100%;
height: 100%;
background-color: #4cff0044;
transform: translate3d(-50%,-50%,${eleStyleCover.translateZ});
border: 1px solid #1e1e1e;
border-radius: 10px;
`);
        ele.appendChild(floatDiv1);

        this.SetStyle(ele, eleStyle);
        this.DealEvent(ele, eleStyle, degreeRate);
      }
    };
    return { name, obj }
  }
  /**
   * 处理事件相关
   * @param ele
   * @param degreeRate
   */
  DealEvent(ele: HTMLElement, eleStyle: CSSStyleDeclaration, degreeRate: number) {
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

  SetStyle(ele: HTMLElement, eleStyle: CSSStyleDeclaration) {
    const eleW = parseInt(eleStyle.width);
    const eleH = parseInt(eleStyle.height);
    let style = `
position: relative;
background-color: pink;
border-radius: 10px;
transform-style: preserve-3d;
transition: none;
`
    style += eleW ? `width: ${eleW}px;` : `width: 100px;`;
    style += eleH ? `height: ${eleH}px;` : `height: 100px;`;
    // 设置默认样式
    ele.setAttribute('style', style);
  }
}
