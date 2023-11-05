<template>
  <header
    class="fixed top-0 inset-x-0 z1 pl4 bg-white/85 py3 md:(top-4 inset-x-4 flex justify-between items-center px6 py3 rounded-4)"
  >
    <h1 class="text-5 font-700 text-primary flex items-center gap-x2 md:text-6">
      <Icon name="LogoIcon" class="w8.5 h7 md:(w13 h10.75)" />
      喵立翰 Miao Li-Han
    </h1>

    <nav
      class="fixed w-full h17 left-0 bottom-0 bg-white/90 flex justify-evenly gap-x2 px2 [&>a]:(flex-grow w0 flex flex-col justify-center items-center gap1 text-xs text-gray-700) 2xl:(static w-auto h-auto bg-transparant gap-x-8 [&>a]:w-auto [&>a]:text-4.5 [&>a]:leading-11 [&_svg]:!hidden)"
    >
      <a href="">
        <Icon name="UserIcon" size="24px"></Icon>
        候選人主張
      </a>
      <a href="">
        <Icon name="EventsIcon" size="24px"></Icon>
        最新活動
      </a>
      <a href="">
        <Icon name="PolicyIcon" size="24px"></Icon>
        政策議題
      </a>
      <a href="">
        <Icon name="MoneyIcon" size="24px"></Icon>
        小額捐款
      </a>
      <a href="">
        <Icon name="MailboxIcon" size="24px"></Icon>
        服務信箱
      </a>
    </nav>

    <!-- only desktop -->
    <ul class="gap-x-4 [&_a]:(block p0.5) hidden md:flex">
      <li>
        <a href=""><Icon name="FBIcon" size="28px" /></a>
      </li>
      <li>
        <a href=""><Icon name="IGIcon" size="28px" /></a>
      </li>
      <li>
        <a href=""><Icon name="YTIcon" size="28px" /></a>
      </li>
    </ul>
  </header>

  <main class="mt4 bg-#F7ECE1">
    <!-- 主視覺 -->
    <div class="bg-white">
      <div class="container pt8 flex flex-col items-center gap-y4 relative">
        <p
          class="font-['Mantou_Sans'] text-13 leading-[1.05] tracking-0.5 text-center bg-clip-text text-transparent bg-gradient-to-r from-#E5793B to-#FF4185 [&>span]:block 2xl:(text-24 [&>span]:inline-block)"
        >
          <span>台灣的明天</span>
          <span class="2xl:ml4">喵先鋪路</span>
        </p>
        <div class="flex flex-col gap-y-4 items-center md:flex-row 2xl:gap-x-4">
          <p class="text-5 font-700 text-white px4 py3 bg-gray-700 rounded-4 2xl:text-7">
            2024 立委參選人
          </p>
          <p
            class="flex items-center gap-x4 px4 py3 bg-white/90 rounded-4 shadow-[0_4px_12px_0_#A3B4CB33] text-7 font-700 text-primary before:(content-[attr(data-num)] text-6.25 font-900 text-white bg-gradient w10 h10 rounded-full flex justify-center items-center bg-gradient-to-r from-#E5793B to-#FF4185) 2xl:(text-10 before:(text-8 w12.5 h12.5))"
            data-num="3"
          >
            喵立翰 Miao LiHan
          </p>
        </div>
        <div class="max-w-85.75 2xl:max-w-none">
          <img
            src="@/assets/images/hero.png"
            srcset="@/assets/images/hero.png, @/assets/images/hero@2x.png 2x"
            alt=""
          />
        </div>
        <!-- only mobile -->
        <ul
          class="flex justify-center gap-x-4 absolute bottom-3 bg-white rounded-3 px10 py2 shadow-[0_1px_4px_0_#0000001A] [&_a]:(block p0.5) md:hidden"
        >
          <li>
            <a href=""><Icon name="FBIcon" size="28px" /></a>
          </li>
          <li>
            <a href=""><Icon name="IGIcon" size="28px" /></a>
          </li>
          <li>
            <a href=""><Icon name="YTIcon" size="28px" /></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 跑馬燈 -->
    <ul class="flex overflow-hidden bg-primary py2.5">
      <li
        v-for="n in 3"
        class="marquee whitespace-nowrap text-white text-10 font-['Mantou_Sans'] [&>span]:px-2"
      >
        <span>為喵星人，護台灣！</span>
        <span>從喵的眼中，看見台灣</span>
        <span>喵的未來，人的希望</span>
      </li>
    </ul>

    <div class="container">content</div>
  </main>

  <footer class="container">footer</footer>
</template>

<style>
@font-face {
  font-family: 'Mantou Sans';
  font-weight: 400;
  src: local('Mantou Sans'), url(@/assets/MantouSans-Regular.ttf) format('truetype');
}
body {
  @apply font-sans pt17 md:pt20.75 bg-#FDFCFB;
}
.marquee {
  animation: marquee 10s linear infinite;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
