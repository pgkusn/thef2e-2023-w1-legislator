<template>
  <header
    class="fixed top-0 inset-x-0 z1 pl4 bg-white/85 py3 md:(top-4 inset-x-4 flex justify-between items-center px6 py3 rounded-4)"
  >
    <h1 class="text-5 font-700 text-primary flex items-center gap-x2 md:text-6">
      <Icon name="LogoIcon" class="w8.5 h7 md:(w13 h10.75)" />
      喵立翰 Miao Li-Han
    </h1>

    <!-- TODO: 取消隱藏 -->
    <!-- <nav
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
    </nav> -->

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

  <main class="mt4">
    <!-- 主視覺 -->
    <div class="bg-white">
      <div class="container pt8 flex flex-col items-center gap-y4 relative">
        <p
          class="gradient font-['Mantou_Sans'] text-13 leading-[1.05] tracking-0.5 text-center [&>span]:block 2xl:(text-24 [&>span]:inline-block)"
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

    <!-- 候選人主張 -->
    <section class="py16 2xl:py26 bg-#F7ECE1">
      <div class="container">
        <div class="bg-white rounded-6 overflow-hidden flex flex-col 2xl:(flex-row gap-x-6)">
          <div class="2xl:(w0 flex-grow)">
            <div class="py10 px6 2xl:(py16 px10)">
              <h2 class="subtitle gradient" data-tag="ADVOCATE">候選人主張</h2>
              <p class="text-gray-700 text-6 font-700 my4 2xl:text-7">
                我堅信 ! 藉由推動更完善的<strong class="text-#DA7D4A">貓咪福利</strong
                >和相關政策，更是間接地投資於<strong class="text-#DA7D4A">台灣的未來</strong>。
              </p>
              <p class="text-gray-700 2xl:text-4.5">
                畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
                GDP 經濟帶來巨大效益。<br />因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
              </p>
            </div>
          </div>
          <div class="2xl:(w0 flex-grow)">
            <img
              src="@/assets/images/advocate.png"
              srcset="@/assets/images/advocate@2x.png 2x"
              class="2xl:(h-full object-cover)"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 最新活動 -->
    <section class="py16 2xl:py26">
      <div class="container">
        <h2 class="subtitle gradient mb10 2xl:16" data-tag="LATEST EVENTS">最新活動</h2>
        <div class="flex flex-col gap-y-6 2xl:(flex-row gap-x-6)">
          <div class="2xl:(w0 flex-grow)">
            <img
              src="@/assets/images/events_1.png"
              srcset="@/assets/images/events_1@2x.png 2x"
              alt=""
            />
            <div class="mt4">
              <p class="text-3.5 text-gray-500">2023/12/26</p>
              <p class="text-5 font-700 text-gray-700 my2">參與台北寵物論壇，爭取貓咪友善環境</p>
              <p class="text-gray-700">
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                VIP 休憩空間。
              </p>
            </div>
          </div>
          <div class="2xl:(w0 flex-grow)">
            <ul>
              <li class="flex items-start gap-x-4">
                <img
                  src="@/assets/images/events_2_thumb.png"
                  srcset="@/assets/images/events_2_thumb@2x.png 2x"
                  class="w27.25 h28 object-cover rounded-2 2xl:(w-auto h-auto)"
                  alt=""
                />
                <div>
                  <p class="text-3.5 text-gray-500">2023/12/24</p>
                  <p class="font-700 text-gray-700 my2">
                    掃街模式開啟！帶著你的貓耳，來和我一起走！
                  </p>
                  <p class="text-3.5 text-gray-700 2xl:text-base">
                    街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-x-4 mt6">
                <img
                  src="@/assets/images/events_3_thumb.png"
                  srcset="@/assets/images/events_3_thumb@2x.png 2x"
                  class="w27.25 h28 object-cover rounded-2 2xl:(w-auto h-auto)"
                  alt=""
                />
                <div>
                  <p class="text-3.5 text-gray-500">2023/12/20</p>
                  <p class="font-700 text-gray-700 my2">收容所模特兒大比拼！</p>
                  <p class="text-3.5 text-gray-700 2xl:text-base">
                    今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-x-4 mt6">
                <img
                  src="@/assets/images/events_1_thumb.png"
                  srcset="@/assets/images/events_1_thumb@2x.png 2x"
                  class="w27.25 h28 object-cover rounded-2 2xl:(w-auto h-auto)"
                  alt=""
                />
                <div>
                  <p class="text-3.5 text-gray-500">2023/12/26</p>
                  <p class="font-700 text-gray-700 my2">參與台北寵物論壇，爭取貓咪友善環境</p>
                  <p class="text-3.5 text-gray-700 2xl:text-base">
                    炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！
                  </p>
                </div>
              </li>
            </ul>
            <a
              href=""
              class="inline-flex items-center gap-x-2 mt6 px6 py4 bg-gray-100 text-gray-700 font-700 rounded-full"
            >
              查看更多
              <Icon name="ArrowForwardIcon" size="32px" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 政策議題 -->
    <section class="py16 2xl:py26 bg-#FDFCFB">
      <div class="container">
        <h2 class="subtitle gradient mb10 2xl:16" data-tag="POLICY ISSUES">政策議題</h2>
        <ul class="grid justify-items-center gap-x-6 gap-y-16 md:grid-cols-2 2xl:grid-cols-3">
          <li>
            <p class="text-6 font-700 text-gray-700 ml4 mb4">
              為毛孩子謀福利！<br />推動寵物醫療保障方案
            </p>
            <img
              src="@/assets/images/policy_1.png"
              srcset="@/assets/images/policy_1@2x.png 2x"
              alt=""
            />
          </li>
          <li>
            <p class="text-6 font-700 text-gray-700 ml4 mb4">
              打造休閒天堂！<br />推廣寵物休閒與娛樂場所
            </p>
            <img
              src="@/assets/images/policy_2.png"
              srcset="@/assets/images/policy_2@2x.png 2x"
              alt=""
            />
          </li>
          <li>
            <p class="text-6 font-700 text-gray-700 ml4 mb4">推廣寵物飼養教育<br />讓愛更加專業</p>
            <img
              src="@/assets/images/policy_3.png"
              srcset="@/assets/images/policy_3@2x.png 2x"
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
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
.subtitle {
  @apply flex flex-col items-center font-['Mantou_Sans'] text-13 2xl:text-16 before:(content-[attr(data-tag)] font-sans text-base font-700 text-white px3 py2 bg-gray-700 rounded-2);
}
.gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-#E5793B to-#FF4185;
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
