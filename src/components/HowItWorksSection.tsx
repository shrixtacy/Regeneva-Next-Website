import parse from 'html-react-parser';

export const HowItWorksSection = () => {
  const html = `<section id="how-it-works" class="section green how-it-works">
        <div class="w-layout-blockcontainer container w-container">
            <div data-w-id="4cd81f7a-1c1c-f90f-c2b1-8256574335a8" class="main-how">
                <div class="sticky-how">
                    <div class="content-how">
                        <div class="heading-how">
                            <div class="how-it-works-wrap">
                                <div class="how-it-works-heading">
                                    <div class="how-it-works-heading-item">
                                        <h2 letters-slide-up-h1="" text-split-h1="" class="text-140-regular how">How it </h2>
                                        <h2 letters-slide-up-h1="" text-split-h1="" class="text-140-regular how second">works</h2>
                                    </div>
                                    <div class="green-icons-container"><img src="/assets/676463cbe8ac4fd1f5cd6693_Ellipse%2029.webp" loading="lazy" sizes="(max-width: 690px) 100vw, 690px" srcset="/assets/676463cbe8ac4fd1f5cd6693_Ellipse%2029-p-500.webp 500w, /assets/676463cbe8ac4fd1f5cd6693_Ellipse%2029.webp 690w" alt="" class="circle-1"><img src="/assets/6764658045105f1072cbb30b_Ellipse%2030.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcset="/assets/6764658045105f1072cbb30b_Ellipse%2030-p-500.png 500w, /assets/6764658045105f1072cbb30b_Ellipse%2030.webp 962w" alt="" class="circle-2">
                                        <div class="green-icon-4-rounds-wrap">
                                            <div class="star-cross-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.363279 21.7099L0.363279 21.7419L21.3633 21.7419L21.3633 0.741945L21.3313 0.741945C20.7278 12.0466 11.6681 21.1065 0.363279 21.7099Z" fill="currentColor"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.3633 21.774V21.7419L21.3633 21.7419L21.3633 42.7419H21.3953C21.9988 31.4373 31.0584 22.3774 42.3633 21.774Z" fill="currentColor"></path>
</svg></div><img src="/assets/673a1bd2a8de37d4fbf906ba_dots.svg" loading="lazy" alt="" class="green-icon main"></div>
                                        <div class="green-icon leaf w-embed"><svg width="100%" height="100%" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.999999C0 0.447715 0.447715 0 1 0H42C64.6437 0 83 18.3563 83 41V82C83 82.5523 82.5523 83 82 83H41C18.3563 83 0 64.6437 0 42V0.999999Z" fill="currentColor"></path>
</svg></div>
                                    </div>
                                </div>
                                <div letters-slide-up-h1="" text-split-h1="" class="text-16-regular max-w-80">Our disposal technology is based on the results of&nbsp;full-scale industrial implementation in&nbsp;the&nbsp;period 2010-2020</div>
                            </div>
                        </div>
                        <div class="text-how">
                            <div class="line-1-text-how">
                                <div class="line-1-text-item">
                                    <div class="number-text">01</div>
                                    <div class="text-step max-504">Raw materials are fed into the&nbsp;chamber directly from waste collectors or otherwise</div>
                                </div>
                                <div class="line-1-text-item _03">
                                    <div class="number-text">03</div>
                                    <div class="text-step max-400">The temperature rises above&nbsp;3000°C in local zones without external power</div>
                                </div>
                                <div class="line-1-text-item _05">
                                    <div class="number-text">05</div>
                                    <div class="text-step max-510">Heat and a combustible vapor-gas mixture (gas, oxygen, and water vapor) are released simultaneously</div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <div class="dots-progress web" data-w-id="fba5f7b8-dced-fb91-3d35-85dc1291346a" data-animation-type="lottie" data-src="/assets/673a2cf83d717f1dc1345502_dots-progress.json" data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0" data-duration="2.2" data-loading="eager"></div>
                                <div class="dots-progress mobile" data-w-id="476a04c2-a1d1-5d81-3ea5-3381f0f9d7b3" data-animation-type="lottie" data-src="/assets/673a7c100db3b51ff593faab_dots-progress-mobile.json" data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0" data-duration="0.72" data-loading="eager"></div>
                            </div>
                            <div class="line-2-text-how">
                                <div class="line-2-text-item">
                                    <div class="number-text">02</div>
                                    <div class="text-step max-617">Gas flow and movement of free boundary contacts between different components create self-generated energy</div>
                                </div>
                                <div class="line-2-text-item _04">
                                    <div class="number-text">04</div>
                                    <div class="text-step max-381">The waste composition properties are structured when disposed</div>
                                </div>
                                <div class="line-2-text-item _06">
                                    <div class="number-text">06</div>
                                    <div class="text-step max-480">It ensures eco-friendly disposal of waste with any structure and moisture content up to 80%.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
  return parse(html);
};
