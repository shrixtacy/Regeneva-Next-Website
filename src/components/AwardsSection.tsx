import parse from 'html-react-parser';

export const AwardsSection = () => {
  const html = `<section id="Awards" class="section beige">
        <div class="w-layout-blockcontainer container w-container">
            <div class="awards-title-wrap">
                <h1 class="h1 dark-brown">Awards &amp; <span class="text-span-block">Recognition</span></h1>
                <div class="text-16-regular--brown-span">Recognized for excellence, innovation, and impact <span class="text-span-block">across our sustainability initiatives.</span></div><img loading="lazy" src="/assets/67ed0c30ebc5a7c142b8c61d_flying_pieces_of_greene.webp" alt="" class="slider-bg-img">
                <div class="slider-bg-shape"></div>
                <div data-delay="4000" data-animation="slide" class="slider w-slider" data-autoplay="false" data-easing="ease-out-quint" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="800" data-infinite="true">
                    <div class="mask w-slider-mask">
                        <div class="slide w-slide">
                            <div class="slide-content-box">
                                <div class="award-poster _2"></div>
                                <div class="award-description">
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Award Title <br>Placeholder 01</div>
                                        <div class="text-span">Category · Recognition Subtitle</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide w-slide">
                            <div class="slide-content-box">
                                <div class="award-poster"></div>
                                <div class="award-description">
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Award Title <br>Placeholder 02</div>
                                        <div class="text-span">Category · Recognition Subtitle</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide w-slide">
                            <div class="slide-content-box">
                                <div class="award-poster _3"></div>
                                <div class="award-description _2">
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Category 01</div>
                                        <div class="text-span">Recognition Detail</div>
                                    </div>
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Category 02</div>
                                        <div class="text-span">Recognition Detail</div>
                                    </div>
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Category 03</div>
                                        <div class="text-span">Recognition Detail</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-arrow w-slider-arrow-left"><img loading="lazy" src="/assets/673a42776117c3cdcc4acdc7_arrow%20left.svg" alt="" class="arrow"></div>
                    <div class="right-arrow w-slider-arrow-right"><img loading="lazy" src="/assets/673a43379820f5ce5a843d98_arrow%20right.svg" alt="" class="arrow"></div>
                    <div class="slide-nav w-slider-nav"></div>
                </div>
            </div>
        </div>
    </section>
`;
  return parse(html);
};
