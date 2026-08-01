import parse from 'html-react-parser';

export const TeamSection = () => {
  const html = `<section id="our-team" class="section beige">
        <div class="w-layout-blockcontainer container w-container">
            <div class="our-team-wrap">
                <h1 class="h1 dark-brown">Our <span class="text-span-block">Team</span></h1>
                <div class="team-wrap">
                    <div class="ava-box _1" style="border-radius: 28px !important;">
                        <div class="img-wrap _1" style="background: #E3DCCE !important; background-image: none !important; border-radius: 28px !important;"></div>
                        <div class="ava-description" style="border-radius: 28px !important;">
                            <div class="name-wrap">
                                <div class="text-32-regular">First<span class="text-span-block _2">Last Name</span></div>
                                <div>Designation</div>
                            </div>
                            <div class="team-social-box"><a href="#" target="_blank" class="social-link w-inline-block"><img src="/assets/67ec549cc54422e36efb8057_linkd.svg" loading="lazy" alt="" class="img-ico"></a>
                            </div>
                        </div>
                    </div>
                    <div class="ava-box _2" style="border-radius: 28px !important;">
                        <div class="img-wrap _2" style="background: #E3DCCE !important; background-image: none !important; border-radius: 28px !important;"></div>
                        <div class="ava-description" style="border-radius: 28px !important;">
                            <div class="name-wrap">
                                <div class="text-32-regular">First<span class="text-span-block _2">Last Name</span></div>
                                <div>Designation</div>
                            </div>
                            <div class="team-social-box"><a href="#" target="_blank" class="social-link w-inline-block"><img src="/assets/67ec549cc54422e36efb8057_linkd.svg" loading="lazy" alt="" class="img-ico"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="circles">
                    <div class="crcle"></div>
                    <div class="crcle"></div>
                    <div class="crcle"></div>
                    <div class="crcle"></div>
                </div>
            </div>
        </div>
    </section>
`;
  return parse(html);
};
