/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Sparkles,
  Heart,
  ChevronRight,
  ExternalLink,
  Instagram,
  CheckCircle2,
  Calendar,
  Truck,
  ArrowUpRight,
  Flower2,
  MessageCircle,
  Users,
  Compass,
  Gift,
  HelpCircle,
  Layers,
  ArrowDown
} from 'lucide-react';

const PREORDER_URL = "https://forms.gle/rQi939f5KzBqG7uT6";
const IG_URL = "https://www.instagram.com/selfhub.sij/";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, -30]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1E293B] flex flex-col font-sans selection:bg-[#E2E8F0] selection:text-[#0F172A] overflow-x-hidden">
      
      {/* 1. 導覽列 (Navbar) */}
      <header
        id="navbar"
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? 'bg-white/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] border-b border-slate-100 py-3.5'
            : 'bg-[#FDFCFB]/80 py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#"
            id="nav-logo"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#1A365D] hover:opacity-90 transition-opacity"
          >
            <img
              src="/image.png"
              alt="自Hub Logo"
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-full object-cover shadow-xs border border-slate-200/60 bg-white"
            />
            <span className="font-serif-tc text-2xl tracking-wider text-[#1A365D] font-bold">
              自Hub
            </span>
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('pricing-section')}
              className="hidden md:inline-flex text-xs text-slate-500 hover:text-[#1A365D] transition-colors font-medium px-2 py-1"
            >
              早鳥優惠方案
            </button>
            <a
              id="nav-preorder-btn"
              href={PREORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1A365D] hover:bg-[#14284B] text-white text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>立即預購</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. 首屏視覺區 (Hero Section) */}
        <section
          id="hero-section"
          className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden"
        >
          {/* Subtle decorative background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/50 via-indigo-50/30 to-amber-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Copywriting */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
              >
                {/* Tag pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/70 text-[#1A365D] text-xs sm:text-sm font-medium tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                  <span>2026自我關懷必備好物！送禮．自用．帶組必備</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-[#1A365D] leading-[1.3] tracking-tight">
                  每日五分鐘，<br className="hidden sm:inline" />
                  學習溫柔對待自己
                </h1>

                {/* Description paragraph */}
                <div className="relative pl-4 border-l-2 border-[#1A365D]/30 py-1">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                    最近，我們一班社工朋友設計了一套關於「自我照顧 × 自我關懷」的工具卡《每日花時》。我們留意到這世代的大家，習慣了對人溫柔，卻很少對自己溫柔。希望能藉著這副卡，喚起大家對 self-care 的 awareness，重新學習對自己好一點🤍
                  </p>
                </div>

                {/* CTA Button & Trust signals */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <a
                    id="hero-cta-btn"
                    href={PREORDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1A365D] hover:bg-[#14284B] text-white text-base font-semibold transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(26,54,93,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(26,54,93,0.45)] hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                  >
                    <span>立即享有早鳥優惠</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <button
                    onClick={() => scrollToSection('empathy-section')}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 text-sm font-medium transition-colors cursor-pointer"
                  >
                    <span>了解背後故事</span>
                    <ArrowDown className="w-4 h-4 text-slate-400" />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    早鳥優惠進行中
                  </span>
                  <span>•</span>
                  <span>專業社工團隊研發</span>
                  <span>•</span>
                  <span>限量現貨預約</span>
                </div>
              </motion.div>

              {/* Right Column: Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: heroImageY }}
                className="lg:col-span-5 relative"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Subtle soft backdrop accent */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#1A365D]/10 to-amber-100/30 blur-lg transform -rotate-1 -z-10" />
                  
                  {/* Main Product Card Visual */}
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 group p-1 sm:p-2">
                    <img
                      src="https://www.image2url.com/r2/default/images/1786728741245-7d3c82b3-5c0a-40c5-920a-e77d8a29bfd8.jpeg"
                      alt="《每日花時》自我關懷工具卡產品照"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain block rounded-xl md:rounded-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    
                    {/* Floating badge over image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-white/60 shadow-lg flex items-center justify-between text-xs sm:text-sm text-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-serif-tc font-semibold text-[#1A365D]">《每日花時》全套工具卡</span>
                      </div>
                      <span className="text-slate-500 text-xs">50張精選卡牌</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. 痛點與共鳴區 (Empathy Section) */}
        <section
          id="empathy-section"
          className="relative bg-[#1A365D] text-white py-20 md:py-28 overflow-hidden"
        >
          {/* Subtle background star/light elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-[#1A365D] to-[#0E2038] -z-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-medium tracking-wider mb-4 border border-white/10">
                <Heart className="w-3 h-3 fill-rose-300 text-rose-300" />
                <span>自我關懷</span>
              </div>
              <h2 className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-white mb-6">
                你有多久，沒有好好照顧自己了？
              </h2>

              <div className="w-24 h-px bg-white/30 mx-auto my-6" />

              <div className="space-y-4 text-slate-200 font-serif-tc text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                <p className="text-amber-200 font-medium text-lg sm:text-xl">
                  植物需要光與水，而你的心靈，也需要養分。
                </p>
                <p className="text-slate-300 text-sm sm:text-base">
                  在紛擾的日常裡，我們常常忘了停下來聽聽內心的聲音。
                </p>
                <p className="text-sky-100 text-base sm:text-lg leading-relaxed pt-2">
                  《每日花時》透過花卉的意象與細膩文字，邀請你在不同的人生季節裡，<br className="hidden sm:inline" />
                  找尋最適合自己的陪伴方式，練習成為自己最溫暖的依靠。
                </p>
              </div>
            </motion.div>

            {/* Empathy Section Image (Scaled to 50% width) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-[90%] sm:max-w-[70%] md:max-w-[50%] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#142846] p-1.5"
            >
              <img
                src="https://www.image2url.com/r2/default/images/1786728845567-8cb283e1-72d0-4002-b6bf-1f21ff5a96e2.jpeg"
                alt="自我照顧與共鳴示意圖"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block rounded-xl"
              />
              <div className="bg-[#0E2038]/90 py-3 px-4 text-center text-xs sm:text-sm text-sky-100/90 font-serif-tc mt-1.5 rounded-lg border border-white/10">
                溫柔停步，練習聽見內在的需求與呼喚
              </div>
            </motion.div>

          </div>
        </section>

        {/* 🌟 新增：Card Function Section (自我關懷工具卡功能與全覽區 - 參照 image.png 與 image1.png 設計) */}
        <section
          id="card-function-section"
          className="py-20 md:py-28 bg-[#FBF9F5] text-[#2C3E50] relative border-b border-stone-200/60 overflow-hidden"
        >
          {/* Subtle floral background aura */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3EBE1]/60 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EBF2EE]/60 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header with Logo Brand Accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <img
                  src="/image.png"
                  alt="自Hub Logo"
                  className="w-7 h-7 object-contain opacity-80"
                />
                <span className="font-serif-tc tracking-widest text-xs uppercase text-stone-500 font-semibold">
                  SELF.HUB CARDS
                </span>
              </div>

              <h2 className="font-serif-tc text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A365D] leading-tight tracking-tight mb-4">
                一物多用的<br className="sm:hidden" />自我關懷工具卡
              </h2>

              <p className="font-serif-tc text-lg sm:text-xl md:text-2xl text-stone-600 font-medium tracking-wide">
                你，距離好好愛自己，只差一套卡片。
              </p>
            </motion.div>

            {/* 4 Cards Grid - 參照 image.png 的 4 大功能模組 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
              
              {/* 1. 想療癒 (淡紫莫蘭迪色) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#E5D7EE] shadow-[0_4px_20px_-4px_rgba(180,160,200,0.15)] flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#F0E6F7]">
                    <span className="w-8 h-8 rounded-full bg-[#F3E8FA] text-[#7C3AED] flex items-center justify-center text-base shadow-xs">
                      🔮
                    </span>
                    <h3 className="font-serif-tc text-lg font-bold text-[#5B21B6] tracking-wide">
                      想療癒：
                    </h3>
                  </div>
                  <p className="font-serif-tc text-sm sm:text-base text-stone-600 leading-relaxed">
                    每日一抽，在花語中練習愛自己，落實微小的自我關懷行動。
                  </p>
                </div>
                <div className="mt-6 pt-3 text-[11px] font-medium text-purple-700/70 flex items-center justify-between">
                  <span>#每日一抽</span>
                  <span>花語自我對話</span>
                </div>
              </motion.div>

              {/* 2. 想探索 (淡綠莫蘭迪色) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#D4E8DC] shadow-[0_4px_20px_-4px_rgba(150,190,170,0.15)] flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#E3F2E9]">
                    <span className="w-8 h-8 rounded-full bg-[#E5F5EC] text-[#059669] flex items-center justify-center text-base shadow-xs">
                      🔍
                    </span>
                    <h3 className="font-serif-tc text-lg font-bold text-[#065F46] tracking-wide">
                      想探索：
                    </h3>
                  </div>
                  <p className="font-serif-tc text-sm sm:text-base text-stone-600 leading-relaxed">
                    配合提問卡，以花為鍊，尋找內在未曾認識的一面。
                  </p>
                </div>
                <div className="mt-6 pt-3 text-[11px] font-medium text-emerald-700/70 flex items-center justify-between">
                  <span>#提問反思</span>
                  <span>探索內在智慧</span>
                </div>
              </motion.div>

              {/* 3. 想連結 (淡藍莫蘭迪色) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#D7E6F7] shadow-[0_4px_20px_-4px_rgba(150,180,220,0.15)] flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#E3EEFC]">
                    <span className="w-8 h-8 rounded-full bg-[#E6F0FA] text-[#2563EB] flex items-center justify-center text-base shadow-xs">
                      👥
                    </span>
                    <h3 className="font-serif-tc text-lg font-bold text-[#1E40AF] tracking-wide">
                      想連結：
                    </h3>
                  </div>
                  <p className="font-serif-tc text-sm sm:text-base text-stone-600 leading-relaxed">
                    20張提問卡，打破隔閡，與朋友展開一場溫暖而有深度的互流。
                  </p>
                </div>
                <div className="mt-6 pt-3 text-[11px] font-medium text-blue-700/70 flex items-center justify-between">
                  <span>#深度傾談</span>
                  <span>暖心小組破冰</span>
                </div>
              </motion.div>

              {/* 4. 想送禮 (淡粉莫蘭迪色) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#F5D8DD] shadow-[0_4px_20px_-4px_rgba(220,160,170,0.15)] flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#FAEBEE]">
                    <span className="w-8 h-8 rounded-full bg-[#FCECEF] text-[#E11D48] flex items-center justify-center text-base shadow-xs">
                      🎁
                    </span>
                    <h3 className="font-serif-tc text-lg font-bold text-[#9F1239] tracking-wide">
                      想送禮：
                    </h3>
                  </div>
                  <p className="font-serif-tc text-sm sm:text-base text-stone-600 leading-relaxed">
                    30張花語卡，每一張都能獨立化成禮物卡，將欣賞化作文字，送出一朵不凋謝的花。
                  </p>
                </div>
                <div className="mt-6 pt-3 text-[11px] font-medium text-rose-700/70 flex items-center justify-between">
                  <span>#心意卡片</span>
                  <span>送出一朵花</span>
                </div>
              </motion.div>

            </div>

            {/* Quote banner from image.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-6 px-6 rounded-2xl bg-white/70 border border-stone-200/70 max-w-2xl mx-auto shadow-xs mb-14"
            >
              <p className="font-serif-tc text-base sm:text-lg md:text-xl font-medium text-[#1A365D] tracking-wide">
                「花語，是自然的語言；關懷，是送給自己的禮物。」
              </p>
            </motion.div>

            {/* 🌟 卡片內容與插圖介紹 (整合 image1.png) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/80 shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Description (參照 image1.png 文案) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[#1A365D] text-xs font-semibold tracking-wider">
                    <span>CARD OVERVIEW</span>
                  </div>

                  <h3 className="font-serif-tc text-3xl sm:text-4xl font-bold text-[#1A365D]">
                    工具卡介紹
                  </h3>

                  <div className="space-y-4 font-serif-tc text-base sm:text-lg text-slate-700 leading-relaxed">
                    <p className="font-semibold text-[#1A365D] text-lg sm:text-xl border-b border-stone-100 pb-2">
                      這套《花語卡》共包含：<br className="sm:hidden" />
                      <span className="text-amber-800">30 張【花語卡】</span> + <span className="text-sky-800">20 張【提問卡】</span>
                    </p>

                    <p className="text-slate-600">
                      兩種類型的卡片，彼此獨立，亦可互相搭配。
                    </p>

                    <p className="text-slate-600">
                      除了基本使用方式外，更延伸出超過五種應用方法，讓你在不同情境中，自由選擇最適合的陪伴方式。
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200">牡丹．自信</span>
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200">洋桔梗．耐心</span>
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200">接納．共應</span>
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200">滋養．養分</span>
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200">界線．距離</span>
                  </div>
                </div>

                {/* Right Image Display (完整展示插圖 image1.png) */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200/90 bg-[#FAF8F5] p-2">
                    <img
                      src="/image1.png"
                      alt="《每日花時》工具卡套組散落全覽圖"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain block rounded-xl"
                    />
                  </div>
                  <div className="text-center text-xs text-stone-500 mt-2 font-serif-tc">
                    卡片精美印刷・柔和莫蘭迪色調．手感細膩
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. 產品內容區 (What's Inside) */}
        <section
          id="product-contents"
          className="py-20 md:py-28 bg-[#FAF9F8] relative"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-[#1A365D] text-xs font-semibold tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-[#1A365D]" />
                <span>WHAT'S INSIDE</span>
              </div>
              <h2 className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A365D] leading-snug">
                一套結合 自我關懷 × 花語 × 深度對話 的工具卡
              </h2>
            </motion.div>

            {/* Two Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Card 1: 花語卡 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500 opacity-60" />

                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-3xl shadow-xs">
                    🌼
                  </div>
                  
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                      PART 01
                    </div>
                    <h3 className="font-serif-tc text-2xl font-bold text-[#1A365D]">
                      30張花語卡
                    </h3>
                  </div>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    每日一抽，用花語鼓勵自己，練習自我關懷；亦可以在卡背寫下想對對方說的話，當心意卡送給朋友。
                  </p>
                </div>

                <div className="relative z-10 pt-8 mt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5 text-amber-800">
                    <Flower2 className="w-4 h-4 text-amber-600" />
                    花語療癒 × 祝福心意
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">30 Cards</span>
                </div>
              </motion.div>

              {/* Card 2: 提問卡 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500 opacity-60" />

                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-3xl shadow-xs">
                    💬
                  </div>
                  
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-1">
                      PART 02
                    </div>
                    <h3 className="font-serif-tc text-2xl font-bold text-[#1A365D]">
                      20張提問卡
                    </h3>
                  </div>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    適合自我探索、傾談、小組活動、破冰交流，幫助大家展開更深入的對話。
                  </p>
                </div>

                <div className="relative z-10 pt-8 mt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5 text-sky-900">
                    <MessageCircle className="w-4 h-4 text-sky-600" />
                    深度反思 × 人際共鳴
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">20 Cards</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. 五大玩法介紹區 (How to Play) */}
        <section
          id="how-to-play"
          className="py-20 md:py-28 bg-white relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Title & Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14 md:mb-18"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[#1A365D] text-xs font-semibold tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5 text-[#1A365D]" />
                <span>HOW TO USE</span>
              </div>
              
              <h2 className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A365D] leading-snug mb-6">
                「一套卡片， 5 種以上的延伸應用方法」
              </h2>

              <div className="space-y-2 text-slate-600 font-serif-tc text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                <p>有時想和身邊的人聊得更深，卻不知道怎麼開口？</p>
                <p>有時想好好讚美朋友，又怕顯得太肉麻？</p>
                <p>有時只想一個人靜一靜，腦袋卻總是停不下來？</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F9FB] border border-slate-200/80 text-sm sm:text-base text-[#1A365D] leading-relaxed max-w-2xl mx-auto font-normal">
                無論是獨處、伴侶對話、朋友聚會或專業諮商，《每日花時》提供五種溫柔的陪伴方式，讓你套用在不同的日常情境裡：
              </div>

              {/* 5 Fast Pills */}
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-xs font-semibold font-serif-tc">
                  01 去療癒
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold font-serif-tc">
                  02 去反思
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/70 text-xs font-semibold font-serif-tc">
                  03 去對話
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200/70 text-xs font-semibold font-serif-tc">
                  04 去致意
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200/70 text-xs font-semibold font-serif-tc">
                  05 去同行
                </span>
              </div>
            </motion.div>

            {/* Left Image / Right 5 Items List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white p-1 sm:p-2 group">
                  <img
                    src="https://www.image2url.com/r2/default/images/1786728838924-dc8f67dd-8a8f-4d24-af97-35eb4a53e00c.jpeg"
                    alt="《每日花時》工具卡多種使用情境"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain block rounded-xl md:rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="bg-slate-900/80 backdrop-blur-xs py-2 px-4 text-center text-white text-xs sm:text-sm font-serif-tc font-medium mt-1 rounded-lg">
                    隨身攜帶・在生活中隨時開啟溫柔對話
                  </div>
                </div>
              </motion.div>

              {/* Right 5 Play Methods */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Method 1: 去療癒 */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F8] border border-slate-100 hover:border-slate-300/80 hover:bg-white hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-serif-tc font-bold text-sm border border-emerald-100/80">
                    01
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1A365D] mb-1 font-serif-tc">
                      01 去療癒｜自我照顧的日常練習
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      每日一抽，為生活留白。在細膩的花語與書寫引導中練習愛自己，並在卡背空白處為自己設計、落實微小而日常的自我關懷行動。
                    </p>
                  </div>
                </motion.div>

                {/* Method 2: 去反思 */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F8] border border-slate-100 hover:border-slate-300/80 hover:bg-white hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 font-serif-tc font-bold text-sm border border-sky-100/80">
                    02
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1A365D] mb-1 font-serif-tc">
                      02 去反思｜與自己的安靜對話
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      搭配提問卡與花語卡，讓直擊心靈的問題在心中慢慢發酵。不急著尋找答案，在獨處的時光裡，享受一場溫柔的內在覺察。
                    </p>
                  </div>
                </motion.div>

                {/* Method 3: 去對話 */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F8] border border-slate-100 hover:border-slate-300/80 hover:bg-white hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 font-serif-tc font-bold text-sm border border-indigo-100/80">
                    03
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1A365D] mb-1 font-serif-tc">
                      03 去對話｜打破隔閡的深度連結
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      適合伴侶、朋友或家人圍坐交流。由提問卡開啟話題，在「不評判、不打斷、不給建議」的原則下深度聆聽，與身邊的人展開一場溫暖真誠的靈魂對談。
                    </p>
                  </div>
                </motion.div>

                {/* Method 4: 去致意 */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F8] border border-slate-100 hover:border-slate-300/80 hover:bg-white hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 font-serif-tc font-bold text-sm border border-rose-100/80">
                    04
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1A365D] mb-1 font-serif-tc">
                      04 去致意｜送一朵不會凋謝的花
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      每一種花，都代表一種特質。挑選一張最符合對方特質的花語卡，親手寫下你對他的具體欣賞與觀察，送出一朵永不凋謝的花，傳遞最真摯的祝福與肯定。
                    </p>
                  </div>
                </motion.div>

                {/* Method 5: 去同行 */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F8] border border-slate-100 hover:border-slate-300/80 hover:bg-white hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 font-serif-tc font-bold text-sm border border-purple-100/80">
                    05
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1A365D] mb-1 font-serif-tc">
                      05 去同行｜專業助人者的得力助手
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      社工、輔導員與老師的必備工具。藉由花朵的投射與特質，引導案主覺察情緒、破冰開場，並從優勢視角中發掘內在隱藏的力量，看見生命的韌性。
                    </p>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>

        {/* 6. 價格與預購區 (Pricing & Final CTA) */}
        <section
          id="pricing-section"
          className="py-20 md:py-28 bg-[#F3F6FA] relative"
        >
          {/* Decorative shapes */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-15px_rgba(26,54,93,0.12)] border border-slate-200/90 text-center relative overflow-hidden"
            >
              {/* Top Highlight Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-rose-700 text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-xs">
                <span>🔥 限定預訂優惠進行中</span>
              </div>

              {/* Poem Header */}
              <div className="max-w-2xl mx-auto mb-10 text-center">
                <p className="font-serif-tc text-lg sm:text-xl text-[#1A365D] font-medium leading-relaxed mb-4">
                  花開有時，凋零有時。<br />
                  但你的美，始終如一。
                </p>
                <p className="font-serif-tc text-sm sm:text-base text-slate-600 leading-relaxed">
                  願《花語卡》陪你走過四季，<br className="sm:hidden" />
                  在每一次翻轉與閱讀之間，<br />
                  重新愛上那個正在努力、正在成長的自己。
                </p>
              </div>

              <div className="w-16 h-0.5 bg-[#1A365D]/20 mx-auto mb-8" />

              {/* Section Title */}
              <h2 className="font-serif-tc text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A365D] mb-2">
                限定預訂優惠購買方案
              </h2>

              {/* Pricing Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 text-left items-stretch">
                
                {/* Tier 1: 獨處滋養單人套組 */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-[#1A365D]/40 transition-all flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">1 盒方案</div>
                    <h3 className="font-serif-tc text-base font-bold text-[#1A365D] mb-3">
                      【獨處滋養單人套組】
                    </h3>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#1A365D] font-serif-tc mb-4">
                      $190 <span className="text-sm font-normal text-slate-500">/ 盒</span>
                    </div>
                    
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-normal border-t border-slate-200/70 pt-4 leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#1A365D] font-bold">▪︎</span>
                        <span>包含《每日花時》花語卡一套、精裝珍藏外盒、專屬使用說明書。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#1A365D] font-bold">▪︎</span>
                        <span>適合想留給自己一個溫柔空間、開啟每日自我關懷練習的你。</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tier 2: 雙人分享傳遞套組 */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-[#1A365D]/40 transition-all flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">2 盒方案</div>
                    <h3 className="font-serif-tc text-base font-bold text-[#1A365D] mb-3">
                      【雙人分享傳遞套組】
                    </h3>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#1A365D] font-serif-tc mb-1">
                      $360 <span className="text-sm font-normal text-slate-500">/ 2 盒</span>
                    </div>
                    <div className="text-xs font-medium text-emerald-700 mb-4">
                      （平均每盒只要 $180！）
                    </div>
                    
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-normal border-t border-slate-200/70 pt-4 leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#1A365D] font-bold">▪︎</span>
                        <span>買一套給自己，送一套給那個你想好好謝謝、好好看見他特質的朋友。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#1A365D] font-bold">▪︎</span>
                        <span>讓你們在不同的空間裡，都能擁有各自的療癒與連結。</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tier 3: 溫暖同行多人團購套組 (Best Value) */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-sky-50/90 to-indigo-50/70 border-2 border-[#1A365D]/50 shadow-sm relative flex flex-col justify-between">
                  <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#1A365D] text-white text-[11px] font-bold shadow-xs">
                    最超值推薦
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1A365D] uppercase tracking-wider mb-2">3 盒或以上</div>
                    <h3 className="font-serif-tc text-base font-bold text-[#1A365D] mb-3">
                      【溫暖同行多人團購套組】
                    </h3>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#1A365D] font-serif-tc mb-1">
                      $165 <span className="text-sm font-normal text-slate-500">/ 盒</span>
                    </div>
                    <div className="text-xs font-medium text-[#1A365D] mb-4">
                      （最高現省 $75 起，買越多越划算！）
                    </div>
                    
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal border-t border-slate-300/80 pt-4 leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#1A365D] font-bold">▪︎</span>
                        <span>最適合社工、心理師、教師等專業助人者團購，或是想與辦公室夥伴、好友閨蜜一起分享，用花語傳遞生命價值的你。</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Note / Terms */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-medium mb-8 bg-slate-100/80 py-2.5 px-4 rounded-xl max-w-lg mx-auto">
                <Calendar className="w-4 h-4 text-[#1A365D]" />
                <span>優惠至2026.8.31 ｜ 預計2星期內出貨</span>
              </div>

              {/* Main Final CTA Button */}
              <a
                id="pricing-cta-btn"
                href={PREORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 sm:py-5 rounded-full bg-[#1A365D] hover:bg-[#14284B] text-white text-base sm:text-lg font-bold transition-all duration-300 shadow-[0_12px_28px_-6px_rgba(26,54,93,0.4)] hover:shadow-[0_16px_36px_-6px_rgba(26,54,93,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>立即填寫表單預購</span>
                <ExternalLink className="w-5 h-5 opacity-90" />
              </a>

              <div className="text-xs text-slate-400 mt-4">
                點擊後將前往 Google 表單完成登記與付款資訊
              </div>

            </motion.div>
          </div>
        </section>
      </main>

      {/* 7. 頁尾 (Footer) */}
      <footer id="page-footer" className="bg-[#0E1E34] text-slate-300 py-14 md:py-18 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Logo & About */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-serif-tc text-2xl font-bold">
                <img
                  src="/image.png"
                  alt="自Hub Logo"
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover bg-white p-0.5 border border-white/20"
                />
                <span>自Hub</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                自Hub，由專業社工組成的一間心理健康教育機構，希望透過輕鬆的遊戲教育形式，讓大家有系統地學習與自己共處。
              </p>
              <div className="pt-2 font-serif-tc text-lg text-slate-200 italic">
                「花開有時，愛自己有時」
              </div>
            </div>

            {/* Social link & Quick Links */}
            <div className="md:col-span-4 flex flex-col md:items-end space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                關注我們的最新動態
              </div>
              
              <a
                id="footer-ig-link"
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <Instagram className="w-4 h-4 text-pink-300" />
                <span>@selfhub.sij</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <div className="text-xs text-slate-500 md:text-right pt-4">
                © {new Date().getFullYear()} 自Hub (SelfHub). All rights reserved.
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
