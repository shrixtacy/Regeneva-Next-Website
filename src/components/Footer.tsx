import parse from 'html-react-parser';

export const Footer = () => {
  const html = `<section id="Contacts" class="section footer">
        <div class="w-layout-blockcontainer container w-container">
            <div data-w-id="ee0b188b-43b2-e4fe-fe44-4e1b3c1f7f88" style="opacity:0" class="footer-wrap">
                <div class="footer-cta">
                    <h2 letters-slide-up-h1="" text-split-h1="" class="text-60-regular">Elevate Your Sustainability<br>Journey Today</h2>
                    <a data-w-id="dad13301-777b-df86-512e-74c34ce1ba6a" href="#" class="contact-btn white w-inline-block">
                        <div class="dot-contact-btn green"></div>
                        <div>Get in touch</div>
                    </a><img src="/assets/673a530f0b330ab2995ede3d_dots-cta.png" loading="lazy" alt="" class="dots-cta"></div>
                <div class="footer-grid">
                    <div class="div-block-3"><img src="/assets/673a553308efbe5eadc686be_logo-white.svg" loading="lazy" alt="" class="logo-white"><a href="mailto:contact@regeneva.com" class="link-footer">contact@regeneva.com</a>
                        <a href="tel:+971551755470" class="link-footer">+971551755470</a>
                    </div>
                    <div class="footer-links"><a href="#why-saapro" class="link-footer">Why ReGeneva</a><a href="#effects" class="link-footer">What We Help You Achieve</a><a href="#how-it-works" class="link-footer">How it works</a><a href="#competitive-advantage" class="link-footer">Comprehensive ESG Services</a></div>
                    <div letters-slide-up-h1="" text-split-h1="" id="w-node-e5366479-8e5a-4895-035a-aea949508e1f-b9dd0595" class="text-55-medium">Driving Sustainable<br>Value</div>
                <div id="w-node-ccb98bc6-2bad-1cfc-80a4-b30bf3a92a27-b9dd0595" class="gap-10">
                    <div id="w-node-cbd77f7c-b501-8da7-e322-3eec5e48977f-b9dd0595" class="link-footer no-hover">© 2024</div>
                    <div data-w-id="9c2d0254-5b04-bf37-f723-f83730569f0c" class="adelt-info">
                        <div class="text-block-3">Made by</div><a href="https://adelt.io" target="_blank" class="adelt-wrapper w-inline-block"><img loading="lazy" src="/assets/673fc44de6d6c72322bc11eb_adelt%20logo.svg" alt="Adelt разработка дизайна и веб-сайта Startech Awards" class="adelt-logo"><div style="width:0%" class="adelt-line"></div></a>
                        <div class="text-block-3">with</div><img style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" loading="lazy" alt="" src="/assets/673fc44de6d6c72322bc11ed_white%20heart.png" class="heart-icon"></div>
            </div>
        </div><img src="/assets/673a55d098fc4326f5141ce0_circles-footer-img.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 732px" srcset="/assets/673a55d098fc4326f5141ce0_circles-footer-img-p-500.png 500w, /assets/673a55d098fc4326f5141ce0_circles-footer-img.png 732w" alt="" class="circles-footer-img"></div>
        </div>
    </section>
<div style="display:none;opacity:0;-webkit-transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="cta-adelt"><img src="/assets/67b3499b69a54c9b494e5273_Group%202087324091.png" loading="lazy" alt="" class="logo-img">
        <div class="text-14-regular brown limit-10">Hi! This website is made by <a href="http://adelt.io/" target="_blank" class="orange-link">adelt</a>. <br>Do you want an equally awesome project? <a href="https://api.whatsapp.com/send?phone=34675389458&amp;text=Hello%20Adelt!%20We%20wanna%20create%20an%20amazing%20website%20%F0%9F%A4%A9%20Can%20we%20start%20tomorrow%3F%20" target="_blank" class="orange-link">Contact us</a></div><img src="/assets/67b34a78fe49ef166e6dd16e_cross%20(4)%201.svg" loading="lazy" data-w-id="5d657477-a60a-83ac-0e46-c592c34bcc40" alt="" class="cross-icon adelt"></div>
`;
  return parse(html);
};
