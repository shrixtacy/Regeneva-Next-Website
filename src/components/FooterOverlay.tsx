import parse from 'html-react-parser';

export const FooterOverlay = () => {
  const html = `<div style="display:none;opacity:0;-webkit-transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 130%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="cta-adelt"><img src="/assets/67b3499b69a54c9b494e5273_Group%202087324091.png" loading="lazy" alt="" class="logo-img">
        <div class="text-14-regular brown limit-10">Hi! This website is made by <a href="http://adelt.io/" target="_blank" class="orange-link">adelt</a>. <br>Do you want an equally awesome project? <a href="https://api.whatsapp.com/send?phone=34675389458&amp;text=Hello%20Adelt!%20We%20wanna%20create%20an%20amazing%20website%20%F0%9F%A4%A9%20Can%20we%20start%20tomorrow%3F%20" target="_blank" class="orange-link">Contact us</a></div><img src="/assets/67b34a78fe49ef166e6dd16e_cross%20(4)%201.svg" loading="lazy" data-w-id="5d657477-a60a-83ac-0e46-c592c34bcc40" alt="" class="cross-icon adelt"></div>`;
  return parse(html);
};
