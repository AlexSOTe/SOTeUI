// 对外暴露的配置项
interface ITiltOptions {
  /**
   * 倾斜程度，推荐 10~30，越大倾斜角度越小
   */
  degreeRate: number;
  /**
   * z轴偏移量，默认 100px
   */
  translateZ: string;
  /**
   * 可倾斜的卡片宽度，默认 250px
   */
  width?: string;
  /**
   * 可倾斜的卡片高度，默认 250px
   */
  height?: string;
  [key: string]: any;
}
const bindValue = {
  degreeRate: 15,
  translateZ: '100px',
}
interface IBindObj {
  value: ITiltOptions | undefined;
  [key: string]: any;
}

export class TiltDirective {
  Entry() {
    const name = 'tilt';
    const obj = {
      // 这个 boxDiv 现在是外层容器
      mounted: (boxDiv: HTMLElement, bind: IBindObj) => {
        boxDiv.setAttribute('style', `
height: 300px;
background-color: lightcyan;
display: flex;
justify-content: center;
align-items: center;
perspective: 1000px;
`);

        // 创建内层相应鼠标动画的元素
        const card = document.createElement('div');
        //const cardStyleCover = {
        //  translateZ: bind.value?.translateZ ?? '100px',
        //}

        //        const floatDiv1 = document.createElement('div');
        //        floatDiv1.setAttribute('style', `
        //position: absolute;
        //left: 50%;
        //top: 50%;
        //width: 100%;
        //height: 100%;
        //background-color: #4cff0044;
        //transform: translate3d(-50%,-50%,${cardStyleCover.translateZ});
        //border: 1px solid #1e1e1e;
        //border-radius: 10px;
        //`);
        //        card.appendChild(floatDiv1);

        this.SetEleStyle(card, bind.value || bindValue);
        this.DealEleEvent(card, bind.value || bindValue);
        boxDiv.appendChild(card);
      }
    };
    return { name, obj }
  }
  /**
   * 处理事件相关
   * @param card
   * @param bindValue
   */
  DealEleEvent(card: HTMLElement, bindValue: ITiltOptions) {
    const degreeRate = bindValue.degreeRate || 15;
    const cardW = parseInt(bindValue.width || '250px');
    const cardH = parseInt(bindValue.height || '250px');
    card.addEventListener('mousemove', (evt: MouseEvent) => {
      // 获取到鼠标在被绑定元素中的位置
      const mx = evt.offsetX;
      const my = evt.offsetY;
      // 把坐标转换到lightgreen方块中间
      const ox = mx - (cardW / 2);
      const oy = my - (cardH / 2);
      console.log(ox, oy);
      // 好了( •̀ ω •́ )y
      card.style.transform = `rotateX(${-oy / degreeRate}deg) rotateY(${ox / degreeRate}deg)`;
      console.log('card.style.transform', card.style.transform);
    }, false);

    card.addEventListener('mouseleave', (evt: MouseEvent) => {
      // 鼠标离开元素的时候重置transform
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      card.style.transition = 'all ease 300ms';
      setTimeout(() => {
        card.style.transition = 'none';
      }, 300)
    }, false);
  }

  SetEleStyle(card: HTMLElement, bindValue: ITiltOptions) {
    let style = `
position: relative;
background-color: lightgreen;
border-radius: 10px;
transform-style: preserve-3d;
transition: none;
width: ${bindValue.width};
height: ${bindValue.height};
`
    // 设置默认样式
    card.setAttribute('style', style);
  }
}
