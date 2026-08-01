import parse from 'html-react-parser';

export const Footer = () => {
  const html = `<section id="Contacts" class="section footer" style="padding-top: 3.5rem;">
        <div class="w-layout-blockcontainer container w-container">
            <div data-w-id="ee0b188b-43b2-e4fe-fe44-4e1b3c1f7f88" style="opacity:1" class="footer-wrap">
                <div class="footer-cta">
                    <h2 letters-slide-up-h1="" text-split-h1="" class="text-60-regular">Elevate Your Sustainability<br>Journey Today</h2>
                    <a data-w-id="dad13301-777b-df86-512e-74c34ce1ba6a" href="#" class="contact-btn white w-inline-block">
                        <div class="dot-contact-btn green"></div>
                        <div>Get in touch</div>
                    </a><img src="/assets/673a530f0b330ab2995ede3d_dots-cta.png" loading="lazy" alt="" class="dots-cta"></div>
                <div class="footer-grid">
                    <div class="div-block-3">
                        <div class="logo-white" style="display:flex; flex-direction:column; align-items:flex-start;">
                            <div style="display:flex; align-items:center;"><span style="font-weight:700; color:white; font-size:20px; font-family:sans-serif;">ReGeneva Solutions Pvt Ltd</span><span style="color:#54BF44; font-size:20px; font-weight:700;">.</span></div>
                            <div style="color:#C7BFAC; font-size:13px; margin-top:3px; margin-bottom:6px;">Mundhwa Road, Pune, India</div>
                        </div>
                        <a href="mailto:hello@regeneva.co" class="link-footer">hello@regeneva.co</a>
                        <a href="tel:+919114328561" class="link-footer">+91 9114 328561</a>
                    </div>
                    <div class="footer-links"><a href="#why-regeneva" class="link-footer">Why ReGeneva</a><a href="#effects" class="link-footer">What We Help You Achieve</a><a href="#how-it-works" class="link-footer">How it works</a><a href="#competitive-advantage" class="link-footer">Comprehensive ESG Services</a></div>
                    <div letters-slide-up-h1="" text-split-h1="" id="w-node-e5366479-8e5a-4895-035a-aea949508e1f-b9dd0595" class="text-55-medium">Driving Sustainable<br>Value</div>
                <div id="w-node-ccb98bc6-2bad-1cfc-80a4-b30bf3a92a27-b9dd0595" class="gap-10">
                    <div id="w-node-cbd77f7c-b501-8da7-e322-3eec5e48977f-b9dd0595" class="link-footer no-hover">© 2024</div>
                    <div data-w-id="9c2d0254-5b04-bf37-f723-f83730569f0c" class="adelt-info" style="display:flex; align-items:center; gap:6px; color:#ffffff; opacity:1; visibility:visible;">
                        <div class="text-block-3" style="color:#ffffff; font-size:14px; opacity:0.9;">Made by</div><a href="https://www.elixios.in" target="_blank" class="link-footer" style="display:inline-flex; align-items:center; gap:6px; color:#ffffff !important; font-weight:700 !important; text-decoration:underline !important; font-size:14px !important; opacity:1 !important;"><img src="/assets/elixios-logo.jpg" alt="Elixios" style="height:18px; width:18px; border-radius:50%; object-fit:cover; vertical-align:middle;">Elixios</a>
                        <div class="text-block-3" style="color:#ffffff; font-size:14px; opacity:0.9;">with</div><img style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" loading="lazy" alt="" src="/assets/673fc44de6d6c72322bc11ed_white%20heart.png" class="heart-icon"></div>
            </div>
        </div><img src="/assets/673a55d098fc4326f5141ce0_circles-footer-img.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 732px" srcset="/assets/673a55d098fc4326f5141ce0_circles-footer-img-p-500.png 500w, /assets/673a55d098fc4326f5141ce0_circles-footer-img.png 732w" alt="" class="circles-footer-img"></div>
        </div>
    </section>
`;
  return parse(html);
};
