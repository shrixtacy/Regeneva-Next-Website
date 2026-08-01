"use client";
import parse from 'html-react-parser';

export const EsgWhySection = () => {
  const html = `<section id="why-regeneva" class="section dark-beige">
        <div class="w-layout-blockcontainer container w-container">
            <div class="solution-wrapper">
                <div class="solutions-heading-wrap" style="width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 4rem;">
                    <div class="solutions-heading" style="justify-content: center; margin-bottom: 2rem;">
                        <h2 class="text-140-regular">Why<br>ReGeneva</h2>
                    </div>
                    <div class="text-16-regular brown" style="max-width: 800px; font-size: 1.2rem; line-height: 1.6;">
                        Every organization's ESG journey is different and so is our approach. Our team combines strategic thinking with practical implementation, helping organizations embed ESG into governance, operations, and decision-making. 
                        <br><br>
                        Whether you're preparing for BRSR, CSRD, or GRI reporting, strengthening investor confidence, improving ESG ratings, reducing climate risks, or building a Net Zero roadmap, we tailor every engagement to your business priorities.
                    </div>
                </div>
            </div>
        </div>
    </section>`;
  return parse(html);
};
