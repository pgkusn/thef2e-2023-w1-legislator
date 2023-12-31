<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

useHead({
  link: [
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
    { rel: 'preload', href: '/images/hero.png', as: 'image', media: '(max-resolution: 1dppx)' },
    { rel: 'preload', href: '/images/hero@2x.png', as: 'image', media: '(min-resolution: 2dppx)' },
    { rel: 'preload', href: '/fonts/MantouSans-Regular.ttf', as: 'font', type: 'font/ttf' },
  ],
})
useSeoMeta({
  title: '喵立翰 Miao Li-Han - 台灣的明天 喵先鋪路',
  ogTitle: '喵立翰 Miao Li-Han - 台灣的明天 喵先鋪路',
  ogUrl: 'https://thef2e-2023-w1-legislator.vercel.app/',
  ogImage: 'https://thef2e-2023-w1-legislator.vercel.app/images/cover.jpg',
})

const { $AOS } = useNuxtApp()

const isOpenModal = ref(false)

onMounted(() => {
  $AOS.init()
})
</script>

<template>
  <div class="h4 hidden md:block"></div>

  <header
    class="pl4 bg-white/85 py3 md:(sticky top-0 z1 mx-4 flex justify-between items-center px6 py3 rounded-4)"
  >
    <h1 class="text-5 font-700 text-primary flex items-center gap-x2 md:text-6">
      <Icon name="Logo" class="w8.5 h7 md:(w13 h10.75)" />
      喵立翰 Miao Li-Han
    </h1>

    <nav
      class="fixed z1 w-full h17 left-0 bottom-0 bg-white/90 flex justify-evenly gap-x2 px2 [&>a]:(flex-grow w0 flex flex-col justify-center items-center gap1 text-xs text-gray-700) 2xl:(static w-auto h-auto bg-transparent gap-x-8 [&>a]:w-auto [&>a]:text-4.5 [&>a]:leading-11 [&_svg]:!hidden)"
    >
      <a href="#advocate">
        <Icon name="User" size="24px"></Icon>
        候選人主張
      </a>
      <a href="#events">
        <Icon name="Events" size="24px"></Icon>
        最新活動
      </a>
      <a href="#policy">
        <Icon name="Policy" size="24px"></Icon>
        政策議題
      </a>
      <a href="#other">
        <Icon name="Money" size="24px"></Icon>
        小額捐款
      </a>
      <a href="#other">
        <Icon name="Mail" size="24px"></Icon>
        服務信箱
      </a>
    </nav>

    <!-- only desktop -->
    <ul class="gap-x-4 [&_a]:(block p0.5) hidden md:flex">
      <li>
        <a href="javascript:;"><Icon name="FB" size="28px" /></a>
      </li>
      <li>
        <a href="javascript:;"><Icon name="IG" size="28px" /></a>
      </li>
      <li>
        <a href="javascript:;"><Icon name="YT" size="28px" /></a>
      </li>
    </ul>
  </header>

  <main class="mt4 overflow-x-hidden">
    <!-- 主視覺 -->
    <div class="bg-white">
      <div class="container pt8 flex flex-col items-center gap-y4 relative 2xl:pt24">
        <p
          class="text-gradient font-['Mantou_Sans'] text-13 leading-[1.05] tracking-0.5 text-center [&>span]:block 2xl:(text-24 [&>span]:inline-block)"
          data-aos="fade"
        >
          <span>台灣的明天</span>
          <span class="2xl:ml4">喵先鋪路</span>
        </p>
        <div
          class="flex flex-col gap-y-4 items-center md:flex-row 2xl:gap-x-4"
          data-aos="fade"
          data-aos-delay="500"
        >
          <p class="text-5 font-700 text-white px4 py3 bg-gray-700 rounded-4 2xl:text-7">
            2024 立委參選人
          </p>
          <p
            class="flex items-center gap-x4 px4 py3 bg-white/90 rounded-4 shadow-[0_4px_12px_0_#A3B4CB33] text-7 font-700 text-primary tracking-tight before:(content-[attr(data-num)] text-6.25 font-900 text-white bg-gradient w10 h10 rounded-full flex justify-center items-center bg-gradient-to-r from-#E5793B to-#FF4185) 2xl:(text-10 before:(text-8 w12.5 h12.5))"
            data-num="3"
          >
            喵立翰 Miao LiHan
          </p>
        </div>
        <div class="max-w-85.75 2xl:max-w-none" data-aos="fade" data-aos-delay="1000">
          <img src="/images/hero.png" srcset="/images/hero@2x.png 2x" alt="" />
        </div>
        <!-- only mobile -->
        <ul
          class="flex justify-center gap-x-4 absolute bottom-3 bg-white rounded-3 px10 py2 shadow-[0_1px_4px_0_#0000001A] [&_a]:(block p0.5) md:hidden"
        >
          <li>
            <a href="javascript:;"><Icon name="FB" size="28px" /></a>
          </li>
          <li>
            <a href="javascript:;"><Icon name="IG" size="28px" /></a>
          </li>
          <li>
            <a href="javascript:;"><Icon name="YT" size="28px" /></a>
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
    <section id="advocate" class="py16 2xl:py26 bg-#F7ECE1" data-aos="fade-up">
      <div class="container">
        <div class="bg-white rounded-6 overflow-hidden flex flex-col 2xl:(flex-row gap-x-6)">
          <div class="2xl:(w0 flex-grow)">
            <div class="py10 px6 2xl:(py16 px10)">
              <h2 class="subtitle text-gradient" data-tag="ADVOCATE">候選人主張</h2>
              <p class="text-gray-700 text-6 font-700 my4 2xl:text-7">
                我堅信 ! 藉由推動更完善的<strong class="text-primary">貓咪福利</strong
                >和相關政策，更是間接地投資於<strong class="text-primary">台灣的未來</strong>。
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
    <section id="events" class="py16 2xl:py26">
      <div class="container">
        <h2 class="subtitle text-gradient mb10 2xl:16" data-tag="LATEST EVENTS" data-aos="fade">
          最新活動
        </h2>
        <div class="flex flex-col gap-y-6 2xl:(flex-row gap-x-6)" data-aos="fade">
          <div class="2xl:(w0 flex-grow) cursor-pointer" @click="isOpenModal = true">
            <img
              src="@/assets/images/events_1.png"
              srcset="@/assets/images/events_1@2x.png 2x"
              alt=""
            />
            <div class="mt4">
              <time class="text-3.5 text-gray-500">2023/12/26</time>
              <h3 class="text-5 font-700 text-gray-700 my2">參與台北寵物論壇，爭取貓咪友善環境</h3>
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
                  <time class="text-3.5 text-gray-500">2023/12/24</time>
                  <h3 class="font-700 text-gray-700 my2">
                    掃街模式開啟！帶著你的貓耳，來和我一起走！
                  </h3>
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
                  <time class="text-3.5 text-gray-500">2023/12/20</time>
                  <h3 class="font-700 text-gray-700 my2">收容所模特兒大比拼！</h3>
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
                  <time class="text-3.5 text-gray-500">2023/12/26</time>
                  <h3 class="font-700 text-gray-700 my2">參與台北寵物論壇，爭取貓咪友善環境</h3>
                  <p class="text-3.5 text-gray-700 2xl:text-base">
                    炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！
                  </p>
                </div>
              </li>
            </ul>
            <a
              href="javascript:;"
              class="inline-flex items-center gap-x-2 mt6 px6 py4 bg-gray-100 text-gray-700 font-700 rounded-full"
            >
              查看更多
              <Icon name="ArrowForward" size="20px" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 政策議題 -->
    <section id="policy" class="py16 2xl:py26 bg-#FDFCFB">
      <div class="container">
        <h2
          class="subtitle text-gradient mb10 2xl:16"
          data-tag="POLICY ISSUES"
          data-aos="fade-left"
        >
          政策議題
        </h2>
        <ul
          class="grid justify-items-center gap-x-6 gap-y-16 md:grid-cols-2 2xl:grid-cols-3"
          data-aos="fade"
        >
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

    <!-- 贊助 & 信箱 -->
    <div id="other" class="py16 md:py15 2xl:py26 bg-#FDFCFB" data-aos="fade-left">
      <div class="container flex flex-col gap-6 md:flex-row">
        <div class="md:(w-0 flex-grow)">
          <aside
            class="max-w85.75 px6 py10 rounded-8 bg-primary mx-auto md:h-full 2xl:(max-w-none px24 py24)"
          >
            <h3 class="font-['Mantou_Sans'] text-10 text-white 2xl:text-13">小額支持喵喵</h3>
            <p class="text-5 mt4 mb6 text-white 2xl:h15">
              您的小筆捐款，是每隻毛孩未來的大大動力！
            </p>
            <div class="flex justify-between items-center">
              <a
                href="javascript:;"
                class="inline-flex items-center gap-x-2 px6 py4 bg-white text-gray-700 font-700 rounded-full"
              >
                小額捐款
                <Icon name="ArrowForward" size="20px" />
              </a>
              <img
                src="@/assets/images/donate.png"
                srcset="@/assets/images/donate@2x.png 2x"
                class="w32 h32 object-contain 2xl:(w56 h-60)"
                alt=""
              />
            </div>
          </aside>
        </div>
        <div class="md:(w-0 flex-grow)">
          <aside
            class="max-w85.75 px6 py10 rounded-8 bg-gray-700 mx-auto md:h-full 2xl:(max-w-none px24 py24)"
          >
            <h3 class="font-['Mantou_Sans'] text-10 text-white 2xl:text-13">民眾服務信箱</h3>
            <p class="text-5 mt4 mb6 text-white">
              親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
            </p>
            <div class="flex justify-between items-center">
              <a
                href="javascript:;"
                class="inline-flex items-center gap-x-2 px6 py4 bg-white text-gray-700 font-700 rounded-full"
              >
                填寫表單
                <Icon name="ArrowForward" size="20px" />
              </a>
              <img
                src="@/assets/images/mail.png"
                srcset="@/assets/images/mail@2x.png 2x"
                class="w32 h32 object-contain 2xl:(w64 h-60)"
                alt=""
              />
            </div>
          </aside>
        </div>
      </div>
    </div>

    <div class="py26 text-center" data-aos="zoom-in">
      <p
        class="text-gradient font-['Mantou_Sans'] text-13 leading-[1.05] tracking-0.5 text-center [&>span]:block 2xl:(text-16 [&>span]:inline-block)"
      >
        <span>台灣的明天</span>
        <span class="2xl:ml4">喵先鋪路</span>
      </p>
      <p
        class="inline-flex items-center gap-x4 px4 py3 mt4 bg-white/90 rounded-4 shadow-[0_4px_12px_0_#A3B4CB33] text-6 font-700 text-primary before:(content-[attr(data-num)] text-6 font-900 text-white bg-gradient w10 h10 rounded-full flex justify-center items-center bg-gradient-to-r from-#E5793B to-#FF4185) 2xl:(text-10 before:(text-8 w12.5 h12.5))"
        data-num="3"
      >
        喵立翰 Miao LiHan
      </p>
    </div>
  </main>

  <footer class="pt16 pb33 2xl:pb16 bg-#F7ECE1">
    <div class="container flex flex-col gap-x4 gap-y6 2xl:flex-row">
      <div class="2xl:(w-0 flex-grow)">
        <p
          class="inline-flex justify-center items-center gap-x2 text-7 font-700 text-primary before:(content-[attr(data-num)] text-5 font-900 text-white bg-gradient w8 h8 rounded-full flex justify-center items-center bg-gradient-to-r from-#E5793B to-#FF4185)"
          data-num="3"
        >
          喵立翰 Miao LiHan
        </p>
        <ul class="flex gap-x-2 my4 [&_a]:(block p2.5 bg-white rounded-full)">
          <li>
            <a href="javascript:;"><Icon name="FB" size="28px" /></a>
          </li>
          <li>
            <a href="javascript:;"><Icon name="IG" size="28px" /></a>
          </li>
          <li>
            <a href="javascript:;"><Icon name="YT" size="28px" /></a>
          </li>
        </ul>
        <p class="text-3.5">© 2023 喵立翰 Miao Li-Han 版權所有</p>
      </div>
      <div class="2xl:(w-0 flex-grow)">
        <p class="text-6 font-700">競選總部</p>
        <ul class="mt4">
          <li>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
          <li>電話：(02) 888-5678</li>
          <li>電子郵件地址：meowoffice@linmeow.tw</li>
        </ul>
      </div>
    </div>
  </footer>

  <Teleport to="body">
    <ClientOnly>
      <TransitionRoot appear :show="isOpenModal" as="template">
        <Dialog as="div" @close="isOpenModal = false" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="max-w350 transform overflow-hidden rounded-6 bg-white p-4 transition-all flex flex-col gap-8 md:(flex-row px12 py6)"
                >
                  <div class="md:w4/10">
                    <DialogTitle as="h2" class="text-6 font-700 text-gray-700 mb4"
                      >最新活動</DialogTitle
                    >
                    <img
                      src="@/assets/images/events_1.png"
                      srcset="@/assets/images/events_1@2x.png 2x"
                      class="rounded-6 w-full"
                      alt=""
                    />
                    <DialogDescription class="text-gray-700 mt4 mb2 md:text-3.5">
                      參與台北寵物論壇，爭取貓咪友善環境
                    </DialogDescription>
                    <div>
                      <span class="mr4">分享</span>
                      <ul class="inline-flex items-center gap-x-4">
                        <li>
                          <a href="javascript:;" class="outline-0">
                            <Icon name="FB" size="28px" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;" class="outline-0">
                            <Icon name="IG" size="28px" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;" class="outline-0">
                            <Icon name="Line" size="28px" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;" class="outline-0">
                            <Icon name="X" size="32px" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <article class="md:(w6/10 pt13)">
                    <h1 class="text-primary text-6 font-700 md:text-8">
                      參與台北寵物論壇，爭取貓咪友善環境
                    </h1>
                    <time class="mt2 text-gray-500 text-3.5">2023/12/24</time>
                    <p class="text-primary-700 mt10 mb24">
                      炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                      VIP 休憩空間。
                    </p>
                    <aside class="p4 bg-gray-50 rounded-3">
                      <h2 class="text-gray-700 font-600">更多活動</h2>
                      <div class="grid gap4 grid-cols-2 2xl:grid-cols-[244px_244px] mt4">
                        <fieldset>
                          <img
                            src="@/assets/images/events_2_thumb.png"
                            srcset="@/assets/images/events_2_thumb@2x.png 2x"
                            class="w-full object-cover rounded-2"
                            alt=""
                          />
                          <figcaption class="text-gray-700 mt3">
                            掃街模式開啟！帶著你的貓耳，來和我一起走！
                          </figcaption>
                        </fieldset>
                        <fieldset>
                          <img
                            src="@/assets/images/events_3_thumb.png"
                            srcset="@/assets/images/events_3_thumb@2x.png 2x"
                            class="w-full object-cover rounded-2"
                            alt=""
                          />
                          <figcaption class="text-gray-700 mt3">收容所模特兒大比拼！</figcaption>
                        </fieldset>
                      </div>
                    </aside>
                  </article>

                  <button
                    type="button"
                    class="absolute top-0 right-0 w13 h17 outline-0 md:(top-3 right-8)"
                    @click="isOpenModal = false"
                  >
                    <Icon name="Cancel" class="w5 h5 md:(w8 h8)" />
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </ClientOnly>
  </Teleport>
</template>

<style>
@font-face {
  font-family: 'Mantou Sans';
  font-weight: 400;
  src: local('Mantou Sans'), url(/fonts/MantouSans-Regular.ttf) format('truetype');
  font-display: swap;
}
html {
  @apply scroll-smooth;
}
body {
  @apply font-sans bg-#FDFCFB;
}
.subtitle {
  @apply flex flex-col items-center font-['Mantou_Sans'] text-13 2xl:text-16 before:(content-[attr(data-tag)] font-sans text-base font-700 text-white px3 py2 bg-gray-700 rounded-2);
}
.text-gradient {
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
