<template>
  <div class="CssHouse">
    <!--真地板-->
    <div class="realGround">
      <!--房子-->
      <div class="house">
        <!--后面的墙-->
        <div class="backWall"></div>
        <div class="leftWall"></div>
        <div class="rightWall"></div>
        <div class="frontWall">
          <div class="door">
            <div class="locker"></div>
          </div>
          <div class="window"></div>
        </div>

        <!--房顶-->
        <!--后三角-->
        <div class="backTilt"></div>
        <!--前三角-->
        <div class="frontTilt"></div>
        <!--左斜面-->
        <div class="leftHead"></div>
        <!--右斜面-->
        <div class="rightHead"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
  $wallColor: rgba(200,200,200,.9);
  $headTexture: url(/imgs/房顶.png) center center / 100px 100px repeat;
  $wallTexture: url(/imgs/墙.png) center center / 50px 50px repeat;

  @keyframes HouseRotate {
    from {
      transform: rotateZ(0deg);
    }

    to {
      transform: rotateZ(360deg);
    }
  }

  .CssHouse {
    margin-top: 200px;
    position: relative;
    height: 500px;
    perspective: 2000px;

    .realGround {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: rotateX(50deg);
      transform-style: preserve-3d;
      background: url(/imgs/地板纹理.png) center center / 50px 50px repeat;
      /* 房子box，虽然就一个空元素吧233333 */
      .house {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0px;
        height: 0px;
        transform-style: preserve-3d;
        animation: HouseRotate linear 23s infinite;

        & > div {
          transition: all ease 300ms;
          backface-visibility: hidden;
        }

        .backWall {
          position: absolute;
          left: 0;
          top: 0;
          width: 300px;
          height: 300px;
          background-color: $wallColor;
          transform-style: preserve-3d;
          transform: translate3d(-50%,-50%,0) rotateX(90deg);
          transform-origin: top center;
          background: $wallTexture;
        }

        .leftWall {
          position: absolute;
          left: 0;
          top: 0;
          width: 300px;
          height: 300px;
          background-color: $wallColor;
          transform-style: preserve-3d;
          transform: translate3d(-50%,-50%,0) rotateY(-90deg);
          transform-origin: left center;
          background: $wallTexture;
        }

        .rightWall {
          position: absolute;
          left: 0;
          top: 0;
          width: 300px;
          height: 300px;
          background-color: $wallColor;
          transform-style: preserve-3d;
          transform: translate3d(-50%,-50%,0) rotateY(90deg);
          transform-origin: right center;
          background: $wallTexture;
        }

        .frontWall {
          position: absolute;
          left: 0;
          top: 0;
          width: 300px;
          height: 300px;
          background-color: $wallColor;
          transform-style: preserve-3d;
          transform: translate3d(-50%,-50%,0) rotateX(-90deg);
          transform-origin: bottom center;
          background: $wallTexture;

          .window {
            position: absolute;
            left: 20px;
            top: 60px;
            width: 110px;
            height: 110px;
            border: 5px solid #5e5e5e;
            background-color: #abc;
          }

          .door {
            position: absolute;
            left: 165px;
            bottom: 0px;
            width: 80px;
            height: 170px;
            background-color: white;
            border: 5px solid #5e5e5e;

            .locker {
              position: absolute;
              left: 7px;
              top: 50%;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              background-image: radial-gradient(black,white,black,white,white);
            }
          }
        }

        .leftHead {
          position: absolute;
          left: 0;
          top: 0;
          width: 215px;
          height: 300px;
          background-color: $wallColor;
          transform-style: preserve-3d;
          transform: translate3d(-70%,-50%,300px) rotateY(-45deg);
          transform-origin: left center;
          background: $headTexture;
        }

        .rightHead {
          position: absolute;
          left: 0;
          top: 0;
          width: 215px;
          height: 300px;
          background-color: $wallColor;
          transform-style: preserve-3d;
          transform: translate3d(-30%,-50%,300px) rotateY(45deg);
          transform-origin: right center;
          background: $headTexture;
        }

        .backTilt {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          transform: translate3d(-50%,-100%,300px) rotateX(90deg);
          transform-origin: top center;
          border-top: 150px solid $wallColor;
          border-bottom: none;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
        }

        .frontTilt {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          transform: translate3d(-50%,-0%,300px) rotateX(-90deg);
          transform-origin: bottom center;
          border-top: none;
          border-bottom: 150px solid $wallColor;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
        }
      }
    }
  }
</style>

