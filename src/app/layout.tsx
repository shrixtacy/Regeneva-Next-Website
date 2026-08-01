import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SmoothScrollProvider } from "../components/providers/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ReGeneva – Elevate Your Sustainability Journey Today",
  description:
    "Driving sustainable value with comprehensive ESG solutions, Net Zero roadmaps, BRSR & CSRD reporting, and sustainability advisory.",
  openGraph: {
    title: "ReGeneva – Driving Sustainable Value",
    description:
      "Driving sustainable value with comprehensive ESG solutions, Net Zero roadmaps, and sustainability advisory.",
    images: [
      "/assets/6738e85481d888807bed36d9_badge.webp",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReGeneva – Driving Sustainable Value",
    description:
      "Driving sustainable value with comprehensive ESG solutions, Net Zero roadmaps, and sustainability advisory.",
    images: [
      "/assets/6738e85481d888807bed36d9_badge.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-wf-domain="www.regeneva.com"
      data-wf-page="6733a9fa15c9b31fb9dd0595"
      data-wf-site="6733a9fa15c9b31fb9dd058e"
    >
      <head>
        <link
          href="https://cdn.prod.website-files.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="/assets/saapro-104713.webflow.shared.f3706e33b.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/6738e65c7434df4803f99c93_favicon%20(1).ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="/assets/6738e6701229ecc8451e6006_webclip.png"
          rel="apple-touch-icon"
        />
        {/* Inline styles from the original HTML */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-smooth iframe { pointer-events: none; }

[tons-40] { opacity: 1 !important; }
[text-split-H1] { opacity: 1; }
[less-20] { opacity: 0; }
html.w-editor [text-split-H1] { opacity: 1; }

.word { overflow: hidden; padding-bottom: 0.1em; margin-bottom: -0.1em; transform-origin: bottom; position: relative; }
.line-mask { position: absolute; top: 0; right: 0; background-color: #263228; opacity: 0.8; height: 105%; width: 105%; z-index: 2; }

@media (min-width:992px) {
  html.w-mod-js:not(.w-mod-ix) [data-w-id="c1dc1309-11e1-ee5f-be02-fc193a98c671"] { transform: translate3d(0rem, 0rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="f137d37f-c651-8431-441f-0d1339ea4e1a"] { transform: translate3d(0rem, 0rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="4deda6eb-a929-b40e-232f-e3dfcb7f3594"] { transform: translate3d(0, 0rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="f137d37f-c651-8431-441f-0d1339ea4e1d"] { transform: translate3d(0, 0rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="12bf3617-52d2-4ca1-6b95-63cce7c82172"] { transform: translate3d(0rem, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="f137d37f-c651-8431-441f-0d1339ea4e1c"] { transform: translate3d(0rem, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="12c2b125-4403-73d3-19ab-3ec9cbfd01c7"] { width: 3.44rem; height: 3.44rem; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="382ef346-68af-652c-df0d-19b3fd7e5a95"] { display: none; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="f137d37f-c651-8431-441f-0d1339ea4e19"] { display: flex; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="dd984442-e46b-83e8-86f1-0632dedf5b0b"] { opacity: 0; display: none; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="f71e2ed1-b439-5ad9-6b5d-b2564d03fdde"] { opacity: 0; display: none; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="5f82477a-ba5b-021a-8bfb-e7c3e10cd1a4"] { opacity: 0; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="6a13e9f4-2f49-4911-7d1e-d1c718c052cc"] { transform: translate3d(0em, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="875318b3-fc0c-7cc9-02b5-1a7ac8c38c7b"] { display: none; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="06f4252d-27f1-228b-d73b-4a2dc368c50d"] { width: 0rem; height: 0rem; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="1f63968d-2d58-0a18-4b76-0012a61736e4"] { display: none; opacity: 0; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="0a27dd6e-aaa3-a68c-b8e4-2a535a398d4f"] { opacity: 0; }
  html.w-mod-js:not(.w-mod-ix) [data-w-id="e5a41806-ef65-470f-8e17-cc993e31f5e9"] { transform: translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); }
}
`,
          }}
        />
        <Script
          id="webflow-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`,
          }}
        />
      </head>
      <body className="body" suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>

        {/* External scripts - loaded in order like the original */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6733a9fa15c9b31fb9dd058e"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/webflow.schunk.36b8fb49256177c8.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/webflow.schunk.82f44582d86d1ea9.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/webflow.schunk.50d850aa4962b686.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/webflow.schunk.3b364098adde1998.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/webflow.schunk.dc2cb6388414c317.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/webflow.schunk.61b534daaaeddbc7.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/webflow.8d6eba25.37c32c84fdfe7b2a.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/split-type"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="gsap-animations"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
var retryCount = 0;
(function initAnimations() {
  if (typeof SplitType === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    if (retryCount++ < 10) setTimeout(initAnimations, 200);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Configure ScrollTrigger for Lenis smooth scroll
  if (window.lenis) {
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop: function(value) {
        if (arguments.length) {
          window.lenis.scrollTo(value, { immediate: true });
        }
        return window.lenis.scroll;
      },
      getBoundingClientRect: function() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    ScrollTrigger.defaults({ scroller: document.documentElement });
  }

  // Text splitting
  var typeSplitH1 = new SplitType("[text-split-H1]", { types: "words, chars", tagName: "span" });
  var typeSplitLess20 = new SplitType("[less-20]", { types: "words, chars", tagName: "span" });
  var typeSplitTons40 = new SplitType("[tons-40]", { types: "words, chars", tagName: "span" });

  function createScrollTrigger(triggerElement, timeline, startPosition) {
    ScrollTrigger.create({ trigger: triggerElement, start: startPosition, onEnter: function() { timeline.play(); } });
  }

  $("[letters-slide-up-H1]").each(function() {
    var tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: 120, duration: 0.6, ease: "power3.out", stagger: { amount: 0.3 }, delay: 0.5, force3D: true });
    createScrollTrigger($(this), tl, "top 100%");
  });

  $("[less-20]").each(function() {
    var tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: 120, duration: 0.6, ease: "power3.out", stagger: { amount: 0.3 }, delay: 0.5, force3D: true });
    createScrollTrigger(".intro-numbers-wrap", tl, "bottom-=50% bottom");
  });

  $("[tons-40]").each(function() {
    var tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: 120, duration: 0.6, ease: "power3.out", stagger: { amount: 0.3 }, delay: 0.5, force3D: true });
    createScrollTrigger(".intro-numbers-wrap", tl, "bottom-=25% bottom");
  });

  gsap.set("[text-split-H1], [less-20], [tons-40]", { opacity: 1 });

  // Intro text word mask animation
  setTimeout(function() {
    var typeSplit2 = new SplitType(".text-63-regular.intro", { types: "lines, words" });
    $(".word").append("<div class='line-mask'></div>");
    var allMasks = $(".word").map(function() { return $(this).find(".line-mask"); }).get();
    var tl = gsap.timeline({ scrollTrigger: { trigger: ".start", start: "bottom-=5% bottom", end: "bottom+=15% bottom", scrub: 0.5 } });
    tl.to(allMasks, { width: "0%", duration: 0.5, stagger: 0.5 });
  }, 300);

  // Refresh all triggers after everything is set up
  setTimeout(function() { ScrollTrigger.refresh(); }, 500);
})();
`,
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="splide-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
setTimeout(function() {
  if (typeof Splide === 'undefined') return;
  var centeredSlider = new Splide('.splide', {
    type: 'loop', perMove: 1, perPage: 3, focus: 'left', gap: 0, speed: 800,
    easing: 'cubic-bezier(.22,.48,.23,.92)', pagination: true,
    breakpoints: { 991: { perPage: 3 }, 767: { perPage: 3 }, 477: { perPage: 3 } },
    classes: { prev: 'splide__arrow--prev', next: 'splide__arrow--next', pagination: 'splide__pagination', page: 'splide__pagination__page is-outlined' },
  });
  centeredSlider.mount();
}, 1000);
`,
          }}
        />
      </body>
    </html>
  );
}
