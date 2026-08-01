"use client";
import parse from 'html-react-parser';
import { useEffect } from 'react';

export const CompanyHeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const img = document.getElementById('floating-company-hero-img');
      if (img) {
        const x = (window.innerWidth / 2 - e.clientX) * 0.02;
        const y = (window.innerHeight / 2 - e.clientY) * 0.02;
        img.style.transform = `scale(1.3) translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const html = `<div data-w-id="672fd4f6-3c9a-781d-6049-c474e0cfa3af" class="start">
        <section id="hero" class="section beige hero">
            <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="w-layout-blockcontainer container hero w-container">
                <div class="inner-wrapper-hero">
                    <div class="green-element-overlay">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)" class="green-circles">
                            <div class="green-dot"></div>
                            <div class="green-dot"></div>
                            <div class="green-dot"></div>
                            <div class="green-dot"></div>
                        </div>
                    </div>
                    <div data-w-id="9dbda387-80ad-348b-eb23-191135b24f45" class="hero-wrapper">
                        <h1 class="h1 _w-808">Pioneering Regenerative Business Solutions</h1>
                        <div class="text-16-regular" style="position: absolute; top: 10%; right: 0; text-align: right; max-width: 400px; padding-right: 2rem;">ReGeneva delivers breakthrough ESG technologies, mobile zero-waste solutions, and executive advisory to build resilient, carbon-neutral futures.</div>
                        <div class="main-greenery-wrap" style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                            <img id="floating-company-hero-img" src="/assets/hero-image.png" alt="Company ReGeneva" style="max-width: 100%; max-height: 80vh; object-fit: contain; z-index: 10; position: relative; transform: scale(1.3); transition: transform 0.1s ease-out;" />
                        </div>
                        <div class="hero-bottom-text">
                            <div data-w-id="4c4e508b-eb58-4012-49ac-2fb55b9ac657" class="scroll-down">
                                <div class="text-14-regular">scroll down</div><img src="/assets/675717df393cd26b8656be15_arrow-down.svg" loading="lazy" alt="" class="arrow-down-img first"><img src="/assets/675717df393cd26b8656be15_arrow-down.svg" loading="lazy" alt="" class="arrow-down-img second"></div>
                        </div>
                        <h2 class="h1 _w-808" style="position: absolute; bottom: 0; right: 0; text-align: right; max-width: 600px;">Innovation. Integrity. Impact.</h2>
                        <div data-w-id="e5a41806-ef65-470f-8e17-cc993e31f5e9" class="highlight-1"></div>
                    </div>
                    <div class="links-bottom-bg wrap">
                        <a href="https://www.linkedin.com/company/regeneva/" target="_blank" class="social-link-wrap w-inline-block">
                            <div class="social-link-icons ln"><img src="/assets/67364bfdf42bcd92a21468f6_ln.svg" loading="lazy" alt="" class="social-link-icon ln"><img src="/assets/67364bfdf42bcd92a21468f6_ln.svg" loading="lazy" alt="" class="social-link-icon first ln"></div>
                        </a>
                        <a href="tel:+919114328561" class="social-link-wrap w-inline-block">
                            <div class="social-link-icons phone"><img src="/assets/673a65bf2dd4689bf794108e_phone.svg" loading="lazy" alt="" class="social-link-icon first phone"><img src="/assets/673a65bf2dd4689bf794108e_phone.svg" loading="lazy" alt="" class="social-link-icon phone"></div>
                        </a>
                        <a href="mailto:hello@regeneva.co" class="social-link-wrap w-inline-block">
                            <div class="social-link-icons"><img src="/assets/673a65b253821f64273ae8c7_mail%20(1).svg" loading="lazy" alt="" class="social-link-icon first"><img src="/assets/673a65b253821f64273ae8c7_mail%20(1).svg" loading="lazy" alt="" class="social-link-icon"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;
  return parse(html);
};
