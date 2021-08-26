class Vector2 {
  mx: number;
  my: number;
  constructor(x: number, y: number) {
    this.mx = x;
    this.my = y;
  }
}

export class RippleDirective {
  aniBox: HTMLElement | undefined;
  Entry() {
    const obj = {
      mounted: (ele: HTMLElement, bind: any) => {
        console.log(ele);
        this.SetEleStyle(ele);
        this.DealEvent(ele);
      }
    }
    return {
      name: 'ripple',
      obj,
    }
  }
  SetEleStyle(ele: HTMLElement) {
    ele.setAttribute('style', `
position:relative;
height: 450px;
border: 1px solid #369;
user-select: none;
`)
  }
  DealEvent(ele: HTMLElement) {
    ele.addEventListener('mousedown', (evt: MouseEvent) => {
      console.log(evt.offsetX, evt.offsetY);
      // 获取点击时鼠标在元素中的位置
      const mx = evt.offsetX;
      const my = evt.offsetY;
      // 创建一个元素用来包含点击动画所需的元素
      this.aniBox = this.CreateAniBox(ele, new Vector2(mx, my));
      ele.appendChild(this.aniBox);
      // 动画时间结束后移除dom
      setTimeout(() => {
        // 先这样移除吧，真正移除需要对内存做处理，会用到WeakMap，再说，反正我这不会内存溢出，毕竟OvO 32G内存
        this.aniBox?.remove();
      }, 300);
    });
    ele.addEventListener('mouseup', (evt: MouseEvent) => {
      this.aniBox?.remove();
    });
  }
  CreateAniBox(ele: HTMLElement, pos: Vector2): HTMLElement {
    const aniBox = document.createElement('div');
    aniBox.classList.add('ripple-animate');
    // 生成随机颜色
    const colorNum = Math.floor(Math.random() * 360);

    aniBox.setAttribute('style', `
position:absolute;
top:${pos.my}px;
left:${pos.mx}px;
width:0;
height:0;
box-shadow: 0 0 10px 5px hsl(${colorNum},50%,50%);
transform:translate(-50%,-50%);
border-radius:50%;
`);
    return aniBox;
  }
}
