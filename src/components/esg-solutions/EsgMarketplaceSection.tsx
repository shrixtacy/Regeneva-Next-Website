"use client";
import parse from 'html-react-parser';

export const EsgMarketplaceSection = () => {
  const html = `<section id="talent-marketplace" class="section" style="background-color: #1A2F25; padding: 6rem 2rem;">
        <div class="container w-container" style="max-width: 1200px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 5rem;">
                <h2 class="h2" style="color: #FFFFFF;">ESG Talent Marketplace</h2>
                <div class="text-16-regular" style="color: #FFFFFF; max-width: 700px; margin: 1rem auto; opacity: 0.9;">
                    Flexible Talent-as-a-Service (TaaS) for Your ESG & Sustainability Needs. Building an in-house ESG team isn't always practical. Get specialized resources exactly when you need them.
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div style="background-color: rgba(255,255,255,0.05); border-radius: 20px; padding: 3rem; border: 1px solid rgba(255,255,255,0.1);">
                    <div style="margin-bottom: 1.5rem;"><img src="/assets/6738c2f3a5741ddf29be8a84_brown-1.svg" alt="" style="filter: brightness(0) invert(1);" /></div>
                    <h3 class="text-32-regular" style="color: #FFFFFF; margin-bottom: 1rem;">Corporate Sustainability Teams</h3>
                    <div class="text-16-regular" style="color: #FFFFFF; opacity: 0.8;">
                        For companies needing dedicated ESG professionals without the commitment of full-time hires.
                    </div>
                </div>
                
                <div style="background-color: rgba(255,255,255,0.05); border-radius: 20px; padding: 3rem; border: 1px solid rgba(255,255,255,0.1);">
                    <div style="margin-bottom: 1.5rem;"><img src="/assets/6738c316c8e327ef3cd1b687_brown-2.svg" alt="" style="filter: brightness(0) invert(1);" /></div>
                    <h3 class="text-32-regular" style="color: #FFFFFF; margin-bottom: 1rem;">Listed Companies</h3>
                    <div class="text-16-regular" style="color: #FFFFFF; opacity: 0.8;">
                        To meet strict BRSR & CSRD reporting mandates with highly specialized resources and experts.
                    </div>
                </div>
                
                <div style="background-color: rgba(255,255,255,0.05); border-radius: 20px; padding: 3rem; border: 1px solid rgba(255,255,255,0.1);">
                    <div style="margin-bottom: 1.5rem;"><img src="/assets/673a6882be5bfd64dcad92e5_elipse%202.webp" alt="" style="width: 40px; height: 40px; border-radius: 50%;" /></div>
                    <h3 class="text-32-regular" style="color: #FFFFFF; margin-bottom: 1rem;">Consulting & Auditors</h3>
                    <div class="text-16-regular" style="color: #FFFFFF; opacity: 0.8;">
                        Scalable talent to support large client engagements and scale operations seamlessly during peak periods.
                    </div>
                </div>
            </div>
            
        </div>
    </section>`;
  return parse(html);
};
