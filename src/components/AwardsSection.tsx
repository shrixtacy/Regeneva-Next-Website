import parse from 'html-react-parser';

export const AwardsSection = () => {
  const html = `<section id="Awards" class="section beige">
        <div class="w-layout-blockcontainer container w-container">
            <div class="awards-title-wrap">
                <h1 class="h1 dark-brown">Awards &amp; <span class="text-span-block">Recognition</span></h1>
                <div class="text-16-regular--brown-span">Our website has been honored with multiple international awards <span class="text-span-block">for design, innovation, and impact.</span></div><img loading="lazy" src="/assets/67ed0c30ebc5a7c142b8c61d_flying_pieces_of_greene.webp" alt="" class="slider-bg-img">
                <div class="slider-bg-shape"></div>
                <div data-delay="4000" data-animation="slide" class="slider w-slider" data-autoplay="false" data-easing="ease-out-quint" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="800" data-infinite="true">
                    <div class="mask w-slider-mask">
                        <div class="slide w-slide">
                            <div class="slide-content-box">
                                <div class="award-poster _2"></div>
                                <div class="award-description">
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Awwwards. <br>Site of the Day</div>
                                        <div class="text-span">Nominated for Development</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide w-slide">
                            <div class="slide-content-box">
                                <div class="award-poster"></div>
                                <div class="award-description">
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">CSS Design<br>Awards (CSSDA)</div>
                                        <div class="text-span">Site of the Day · &nbsp;Best UX Design
                                            <br>· Best UI Design · Best Innovation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slide w-slide">
                            <div class="slide-content-box">
                                <div class="award-poster _3"></div>
                                <div class="award-description _2">
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Gold</div>
                                        <div class="text-span">Best International Website</div>
                                    </div>
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Silver</div>
                                        <div class="text-span">Best Industry Website</div>
                                    </div>
                                    <div class="award-title-wrap">
                                        <div class="text-32-regular">Shortlisted</div>
                                        <div class="text-span">Website of the Year</div>
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
