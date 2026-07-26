import parse from 'html-react-parser';

export const TeamSection = () => {
  const html = `<section id="our-team" class="section beige">
        <div class="w-layout-blockcontainer container w-container">
            <div class="our-team-wrap">
                <h1 class="h1 dark-brown">Our <span class="text-span-block">Team</span></h1>
                <div class="team-wrap">
                    <div class="ava-box _1">
                        <div class="img-wrap _1"></div>
                        <div class="ava-description">
                            <div class="name-wrap">
                                <div class="text-32-regular">Eugene<span class="text-span-block _2">Krasicki</span></div>
                                <div>Co-founder</div>
                            </div>
                            <div class="team-social-box"><a href="https://www.linkedin.com/in/efkrasicki/" target="_blank" class="social-link w-inline-block"><img src="/assets/67ec549cc54422e36efb8057_linkd.svg" loading="lazy" alt="" class="img-ico"></a>
                                <a href="https://x.com/efkrasicki" target="_blank" class="social-link w-inline-block"><img src="/assets/67ed5a46345a7f56153f6e42_inst.svg" loading="lazy" alt="" class="img-ico"></a>
                            </div>
                        </div>
                    </div>
                    <div class="ava-box _2">
                        <div class="img-wrap _2"></div>
                        <div class="ava-description">
                            <div class="name-wrap">
                                <div class="text-32-regular">Yakov<span class="text-span-block _2">Valentiukevich</span></div>
                                <div>Co-founder</div>
                            </div>
                            <div class="team-social-box"><img src="/assets/67ec561cff123f63a8ee866d_Group%20132.svg" loading="lazy" alt="" class="image-2"></div>
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
