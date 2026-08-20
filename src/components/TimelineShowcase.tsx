import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Shield,
  Compass,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Play,
  Pause,
  RotateCw,
  Eye
} from 'lucide-react';

interface CardSlide {
  id: string;
  step: string;
  theme: string;
  flower: string;
  flowerNameZh: string;
  flowerNameEn: string;
  keyword: string;
  category: '花語卡・接納' | '花語卡・界線' | '提問卡・覺察';
  emoji: string;
  accentColor: string;
  lightBg: string;
  backBg: string;
  borderColor: string;
  badgeBg: string;
  icon: React.ReactNode;
  tagline: string;
  quote: string;
  actionTitle: string;
  actionText: string;
  journalPrompt: string;
  flowerMeaning: string;
}

const THREE_SLIDES: CardSlide[] = [
  {
    id: 'slide-1',
    step: '01',
    theme: '內在轉化 • 接納',
    flower: '牡丹 Peony',
    flowerNameZh: '牡丹',
    flowerNameEn: 'Peony',
    keyword: '自信與包容',
    category: '花語卡・接納',
    emoji: '🌸',
    accentColor: '#B91C1C',
    lightBg: 'from-rose-50/90 via-pink-50/50 to-white',
    backBg: 'from-slate-900 via-[#1A365D] to-[#0E2038]',
    borderColor: 'border-rose-200/90 hover:border-rose-400',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
    icon: <Heart className="w-4 h-4 text-rose-600" />,
    tagline: '「不卑不亢，綻放屬於你的天然姿態。」',
    quote: '溫柔看見那些未曾被肯定的部分，它們同樣構成了完整的你。',
    actionTitle: '今日心行動 (Micro Action)',
    actionText: '對鏡中的自己微笑，並說出一個今天做得很好的微小細節。',
    journalPrompt: '如果我不再追求所有人的認同，我現在最想為自己做什麼？',
    flowerMeaning: '代表自尊、富饒與圓滿，提醒我們擁抱每一刻的真實自我。'
  },
  {
    id: 'slide-2',
    step: '02',
    theme: '外在防護 • 界線',
    flower: '雛菊 Daisy',
    flowerNameZh: '雛菊',
    flowerNameEn: 'Daisy',
    keyword: '清晰與守護',
    category: '花語卡・界線',
    emoji: '🌼',
    accentColor: '#0D9488',
    lightBg: 'from-teal-50/90 via-emerald-50/50 to-white',
    backBg: 'from-[#064E3B] via-[#0F3934] to-[#0A2723]',
    borderColor: 'border-teal-200/90 hover:border-teal-400',
    badgeBg: 'bg-teal-100 text-teal-800 border-teal-200',
    icon: <Shield className="w-4 h-4 text-teal-600" />,
    tagline: '「說『不』，是為了對自己的靈魂說『好』。」',
    quote: '界線不是用來推開他人，而是保護彼此關係能長久健康的呼吸空間。',
    actionTitle: '今日心行動 (Micro Action)',
    actionText: '在今天嘗試溫和拒絕一件超出自己能量負荷的請求，給予自己留白時間。',
    journalPrompt: '在最近的生活或工作中，哪一個情境最常讓我感到能量被過度消耗？',
    flowerMeaning: '象徵純粹的堅定與清晰，提醒我們保持心中的淨土。'
  },
  {
    id: 'slide-3',
    step: '03',
    theme: '深度覺察 • 提問',
    flower: '薰衣草 Lavender',
    flowerNameZh: '薰衣草',
    flowerNameEn: 'Lavender',
    keyword: '沉澱與安歇',
    category: '提問卡・覺察',
    emoji: '🪻',
    accentColor: '#7C3AED',
    lightBg: 'from-purple-50/90 via-violet-50/50 to-white',
    backBg: 'from-[#3B0764] via-[#2E1065] to-[#1E1B4B]',
    borderColor: 'border-purple-200/90 hover:border-purple-400',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: <Compass className="w-4 h-4 text-purple-600" />,
    tagline: '「卸下白日的盔甲，在靜謐中找回心跳的節奏。」',
    quote: '每一個提問都是一把鑰匙，為你打開通往內在智慧的大門。',
    actionTitle: '今日心行動 (Micro Action)',
    actionText: '在睡前寫下 3 件今天感恩的小事，帶著平靜的心情入眠。',
    journalPrompt: '如果今天是我生命中重獲自由的一天，我會如何度過接下來的時光？',
    flowerMeaning: '象徵沉靜、放鬆與等待希望，引領心靈進入深層休養。'
  }
];

export const TimelineShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Auto play option
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setIsFlipped(false);
      setCurrentIndex((prev) => (prev + 1) % THREE_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentSlide = THREE_SLIDES[currentIndex];

  const handleSelectCard = (index: number) => {
    setIsFlipped(false);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + THREE_SLIDES.length) % THREE_SLIDES.length);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % THREE_SLIDES.length);
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <section
      id="interactive-showcase-section"
      className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-stone-200/60"
    >
      {/* Background organic glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/40 via-rose-50/30 to-indigo-50/30 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A365D]/5 border border-[#1A365D]/15 text-[#1A365D] text-xs sm:text-sm font-semibold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>精選 3 張卡牌 • 3D 翻轉互動展示</span>
          </div>
          
          <h2 className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A365D] tracking-tight leading-snug">
            卡牌展示 • 點擊卡牌體驗正反翻面
          </h2>
          
          <p className="font-serif-tc text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            精選 3 款代表性卡牌（花語卡與提問卡），點擊卡片即可體驗 3D 翻面動畫，探索正面花語與背面心靈提問。
          </p>
        </motion.div>

        {/* 3-Cards Selection Top Bar */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.06)] overflow-hidden">
          
          {/* Top 3 Cards Navigation Tabs */}
          <div className="border-b border-stone-200/80 bg-stone-50/80 p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
              {THREE_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleSelectCard(idx)}
                    className={`relative p-3 sm:p-4 rounded-2xl transition-all duration-300 flex flex-col items-center sm:items-start text-left cursor-pointer ${
                      isActive
                        ? 'bg-white shadow-md border border-stone-200/90 text-[#1A365D] scale-[1.02]'
                        : 'hover:bg-white/60 text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 w-full justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                            isActive
                              ? 'bg-[#1A365D] text-white'
                              : 'bg-stone-200/80 text-stone-600'
                          }`}
                        >
                          {slide.step}
                        </span>
                        <span className="text-sm font-serif-tc font-bold text-slate-800 hidden sm:inline">
                          {slide.flowerNameZh}
                        </span>
                      </div>
                      <span className="text-base sm:text-lg">{slide.emoji}</span>
                    </div>

                    <div className="mt-1.5 text-xs text-slate-500 font-serif-tc truncate w-full flex items-center justify-between">
                      <span className="font-medium text-slate-600">{slide.category}</span>
                      <span className="hidden md:inline text-[11px] text-slate-400">{slide.keyword}</span>
                    </div>

                    {/* Active bottom bar indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeThreeCardBar"
                        className="absolute bottom-0 left-3 right-3 h-1 bg-[#1A365D] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Interactive Flip Card Content Area */}
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: 3D Flip Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                
                {/* 3D Perspective Container */}
                <div
                  className="w-full max-w-sm cursor-pointer group"
                  style={{ perspective: 1200 }}
                  onClick={toggleFlip}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative w-full aspect-[3/4.4] min-h-[440px] sm:min-h-[460px] rounded-3xl shadow-xl transition-shadow group-hover:shadow-2xl"
                  >
                    
                    {/* Front Face (正面：花語與特質) */}
                    <div
                      style={{ backfaceVisibility: 'hidden' }}
                      className={`absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br ${currentSlide.lightBg} border-2 ${currentSlide.borderColor} flex flex-col justify-between overflow-hidden`}
                    >
                      {/* Top Bar */}
                      <div className="flex items-center justify-between relative z-10">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${currentSlide.badgeBg}`}
                        >
                          {currentSlide.icon}
                          <span>{currentSlide.category}</span>
                        </span>
                        <div className="flex items-center gap-1 text-xs font-mono font-bold text-slate-400">
                          <span>{currentSlide.step}</span>
                          <span>/ 03</span>
                        </div>
                      </div>

                      {/* Flower Graphic & Identity */}
                      <div className="text-center py-4 relative z-10">
                        <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-md border border-stone-200/80 flex items-center justify-center text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">
                          {currentSlide.emoji}
                        </div>
                        <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-[#1A365D] tracking-tight">
                          {currentSlide.flower}
                        </h3>
                        <p className="text-xs sm:text-sm font-serif-tc text-slate-500 font-medium mt-1">
                          核心特質：<span className="font-semibold text-slate-700">{currentSlide.keyword}</span>
                        </p>
                      </div>

                      {/* Tagline Box */}
                      <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-stone-200/80 text-center shadow-xs relative z-10">
                        <p className="font-serif-tc text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed">
                          {currentSlide.tagline}
                        </p>
                      </div>

                      {/* Bottom Hint to Flip */}
                      <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#1A365D] font-medium opacity-90 relative z-10">
                        <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                        <span>點擊翻轉卡牌查看卡背</span>
                      </div>
                    </div>

                    {/* Back Face (背面：心靈提問與微行動引導) */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                      className={`absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br ${currentSlide.backBg} text-white border-2 border-white/20 flex flex-col justify-between overflow-hidden shadow-2xl`}
                    >
                      {/* Top Bar Back */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20">
                          <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                          <span>卡背練習 • 內在探索</span>
                        </span>
                        <span className="text-xs font-mono font-bold text-white/60">
                          BACK SIDE
                        </span>
                      </div>

                      {/* Back Content */}
                      <div className="space-y-4 py-2">
                        <div className="text-center">
                          <span className="text-xs tracking-widest text-amber-200/80 font-mono uppercase">
                            JOURNAL PROMPT
                          </span>
                          <h4 className="font-serif-tc text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                            深度對話提問
                          </h4>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15">
                          <p className="font-serif-tc text-xs sm:text-sm text-slate-100 leading-relaxed italic text-center">
                            「{currentSlide.journalPrompt}」
                          </p>
                        </div>

                        <div className="bg-amber-400/10 rounded-2xl p-3.5 border border-amber-300/20">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-200 font-serif-tc mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                            <span>今日心行動</span>
                          </div>
                          <p className="text-xs text-slate-200 font-serif-tc leading-relaxed pl-5">
                            {currentSlide.actionText}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Hint Back */}
                      <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-white/80 font-medium">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>點擊翻回卡片正面</span>
                      </div>
                    </div>

                  </motion.div>
                </div>

                {/* Flip button toggle */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={toggleFlip}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-xs sm:text-sm font-semibold text-[#1A365D] shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    <RotateCw className="w-4 h-4 text-amber-600" />
                    <span>{isFlipped ? '翻轉至【卡牌正面】' : '翻轉至【卡牌背面】'}</span>
                  </button>
                </div>

              </div>

              {/* Right Column: Deep Meaning & Practice Guides */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Topic theme & subtitle */}
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 font-mono tracking-wider uppercase mb-1">
                    <span>CARD DETAILS</span>
                    <span>•</span>
                    <span className="text-[#1A365D] font-bold">{currentSlide.theme}</span>
                  </div>
                  <h3 className="font-serif-tc text-2xl sm:text-3xl font-bold text-[#1A365D] leading-snug">
                    {currentSlide.quote}
                  </h3>
                  <p className="text-sm font-serif-tc text-slate-600 mt-2 leading-relaxed">
                    {currentSlide.flowerMeaning}
                  </p>
                </div>

                {/* Section 1: Micro Action */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-amber-900 font-serif-tc">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>{currentSlide.actionTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950 font-serif-tc leading-relaxed pl-6">
                    {currentSlide.actionText}
                  </p>
                </div>

                {/* Section 2: Journal Prompt */}
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-indigo-900 font-serif-tc">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>深度書寫引導 (Journal Prompt)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-950 font-serif-tc leading-relaxed pl-6 italic">
                    「{currentSlide.journalPrompt}」
                  </p>
                </div>

                {/* Navigation controls & CTA */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Card"
                      className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Card"
                      className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      aria-label={isAutoPlaying ? "Pause Auto Play" : "Start Auto Play"}
                      className={`px-3 py-2 rounded-full border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isAutoPlaying
                          ? 'bg-[#1A365D] text-white border-[#1A365D]'
                          : 'bg-stone-100 text-slate-600 border-stone-200 hover:bg-stone-200'
                      }`}
                    >
                      {isAutoPlaying ? (
                        <>
                          <Pause className="w-3 h-3" />
                          <span>自動輪播中</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3" />
                          <span>自動輪播</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href="https://forms.gle/rQi939f5KzBqG7uT6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1A365D] hover:text-[#14284B] underline underline-offset-4 group cursor-pointer"
                  >
                    <span>親自擁有 50 張完整卡牌組</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
