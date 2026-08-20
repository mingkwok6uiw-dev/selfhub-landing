import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const GlobalWarmingMikeK: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);
  const ertrinkenRef = useRef<SVGSVGElement>(null);
  const mundaufRef = useRef<SVGPathElement>(null);
  const mundzuRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = containerRef.current.offsetWidth || window.innerWidth;
    let height = 450;

    // Create wave path generators
    let wave1Step = 0;
    let wave2Step = 0;

    const buildWavePath = (step: number, amplitude: number, frequency: number, baseY: number) => {
      let points: string[] = [];
      points.push(`M 0 ${baseY}`);
      const segments = 20;
      const segmentWidth = width / segments;

      for (let i = 0; i <= segments; i++) {
        const x = i * segmentWidth;
        const y = baseY + Math.sin(i * frequency + step) * amplitude;
        points.push(`L ${x} ${y}`);
      }

      points.push(`L ${width} ${height}`);
      points.push(`L 0 ${height} Z`);
      return points.join(' ');
    };
    // Reference:https://codepen.io/mikeK/pen/EmjdEX
    // Animate wave drawing on every tick
    // Initial water level submerged at chin/jawline (~145px - 135px)
    let baseY1 = 145;
    let baseY2 = 135;

    const ticker = () => {
      wave1Step += 0.04;
      wave2Step += 0.03;
      if (wave1Ref.current) {
        wave1Ref.current.setAttribute('d', buildWavePath(wave1Step, 15, 0.4, baseY1));
      }
      if (wave2Ref.current) {
        wave2Ref.current.setAttribute('d', buildWavePath(wave2Step, 18, 0.35, baseY2));
      }
    };

    gsap.ticker.add(ticker);

    // Master Timeline for Global Warming animation
    const master = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    // Initial states
    gsap.set(mundzuRef.current, { autoAlpha: 0 });
    gsap.set(mundaufRef.current, { autoAlpha: 1 });
    gsap.set(ertrinkenRef.current, { y: 0, scale: 0.45, transformOrigin: 'top left' });

    // Mouth breathing / gasping (toggling between mundauf and mundzu)
    const mouthToggle = gsap.timeline({ repeat: 7, yoyo: true });
    mouthToggle
      .to(mundaufRef.current, { autoAlpha: 0, duration: 0.35, ease: 'power1.inOut' })
      .to(mundzuRef.current, { autoAlpha: 1, duration: 0.35, ease: 'power1.inOut' }, 0);

    master.add(mouthToggle, 0);

    // Water rises from chin up to mouth/lip level (baseY drops from 145/135 to 98/88 - staying well below eyes & head)
    master.to({ y1: 145, y2: 135 }, {
      y1: 98,
      y2: 88,
      duration: 5.5,
      ease: 'power1.inOut',
      onUpdate: function() {
        const target = this.targets()[0];
        baseY1 = target.y1;
        baseY2 = target.y2;
      }
    }, 0.5);

    // Face struggles and sways slightly without sinking below water
    master.to(ertrinkenRef.current, {
      y: 12,
      rotation: 2.5,
      duration: 5,
      ease: 'sine.inOut'
    }, 0.5);

    // At peak water height: mouth open wide (mundauf) gasping for air
    master.to(mundzuRef.current, { autoAlpha: 0, duration: 0.2 }, 4.5);
    master.to(mundaufRef.current, { autoAlpha: 1, duration: 0.2 }, 4.5);

    // Hold gasping pose briefly
    master.to({}, { duration: 1.5 });

    // Water recedes back to chin level for loop
    master.to({ y1: 98, y2: 88 }, {
      y1: 145,
      y2: 135,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: function() {
        const target = this.targets()[0];
        baseY1 = target.y1;
        baseY2 = target.y2;
      }
    }, 7.5);

    master.to(ertrinkenRef.current, {
      y: 0,
      rotation: 0,
      duration: 1.8,
      ease: 'power2.inOut'
    }, 7.5);

    const handleResize = () => {
      if (containerRef.current) {
        width = containerRef.current.offsetWidth || window.innerWidth;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      gsap.ticker.remove(ticker);
      master.kill();
      mouthToggle.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="hero-section0"
      ref={containerRef}
      className="relative w-full h-[450px] bg-[#5166ba] overflow-hidden select-none"
    >
      {/* Wave 1 */}
      <svg
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 3 }}
      >
        <title>Wave 1</title>
        <path
          id="feel-the-wave"
          ref={wave1Ref}
          fill="rgba(41, 128, 185, 0.85)"
          d=""
        />
      </svg>

      {/* Wave 2 */}
      <svg
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 4 }}
      >
        <title>Wave 2</title>
        <path
          id="feel-the-wave-two"
          ref={wave2Ref}
          fill="rgba(52, 152, 219, 0.7)"
          d=""
        />
      </svg>

      {/* Character (ertrinken) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="ertrinken"
        ref={ertrinkenRef}
        viewBox="0 0 595 886"
        width="380"
        height="560"
        style={{
          position: 'absolute',
          top: '20px',
          left: '50px',
          zIndex: 2
        }}
      >
        <g id="layer1" fill="#FFFFFF">
          <path
            id="mundauf"
            ref={mundaufRef}
            d="M.498 884.312C3.143 754.194-.812 621.376 47.888 510.1c7.11-34.3 21.886-64.77 37.584-94.78 8.79-16.21 13.895-28.68 17.975-46.57 17.44-79.12 27.38-146.215 55.96-207.126 10.38-19.61 17.82-40.868 8.99-76.395-10.38-19.588-8.35-45.11 34.72-42.49 8.15.495 7.175 4.844 18.072 0 .28-12.27 16.684-14.926 17.934 1.544 16.356 51.223 24.244 21.57 22.74-4.83-.21-17.8 4.3-16.85 15.19-6.51 11.91 3.13 23.2.27 24.38-9.35 1.93-20.48 19.71-37.54 52.414-4.54 19.564 12.88 27.886 27.89 45.35 15.52 19.08-14.82 40.99-4.18 62.093-.81 71.47 8.23 101.03 44.58 118.48 78.44 17.55 23.87 27.474 173.917-27.21 226.99-57.232 55.56-207.412 55.32-238.332 21.4-12.3-5.933-46.71-24.1-22.06 34.318 50.42 63.69 56.51 116.95 71.9 172.4 19.806 118.69 15.508 210.886.82 317.772z"
          />
          <path
            id="mundzu"
            ref={mundzuRef}
            d="M.498 884.312C3.143 754.194-.812 621.376 47.888 510.1c7.11-34.3 21.886-64.77 37.584-94.78 8.79-16.21 33.392-42.394 34.996-60.674 6.498-80.758 14.443-103.537 34.457-167.774 7.612-20.84 26.142-53.37 11.367-87.364-14.082-17.987-15.676-43.548 31.105-46.82 8.853-.62 8.447 3.82 19.467-2.464-1.516-12.195 15.764-17.06 19.55-.913 25.208 48.52 8.458 28.526 3.37 2.577-2.633-17.605 1.965-17.278 14.162-8.518 12.225 1.477 23.02-2.895 22.88-12.586-.88-20.55 14.41-39.874 51.305-11.638 21.14 10.094 31.43 23.83 47.046 9.196 16.883-17.28 40.038-9.724 61.404-9.26 71.923-1.586 106.16 30.4 128.06 61.565 20.64 21.256 50.913 168.552 3.97 228.58-49.13 62.84-197.94 83.064-233.194 53.673-12.995-4.202-73.688-22.337-41.31 32.178 58.63 56.226 54.573 116.792 69.966 172.242 19.806 118.69 15.508 210.886.82 317.772z"
          />
        </g>
      </svg>

      {/* "生活令你喘不過氣嗎？" Typography */}
      <div
        id="text"
        className="absolute bottom-6 right-8 md:right-12 z-10 text-right pointer-events-none select-none"
      >
        <div className="inline-flex flex-col items-end">
          <span className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            生活令你喘不過氣嗎？
          </span>
          <span className="text-white/80 text-xs sm:text-sm font-sans tracking-wide mt-1.5 flex items-center gap-1.5">
            <span>讓《每日花時》陪伴你找回呼吸的節奏</span>
            <span className="text-rose-200">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
};
