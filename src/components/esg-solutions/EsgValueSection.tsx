"use client";
import parse from 'html-react-parser';

export const EsgValueSection = () => {
  const html = `<section id="value-created" class="section dark-beige" style="padding-top: 0;">
        <div class="w-layout-blockcontainer container w-container">
            <div id="why-regeneva" class="why-saapro-wrap">
                <div class="_w-888">
                    <div class="text-16-regular brown">The Value You Will Create</div>
                    <h2 class="h2 web-why">Build an ESG Strategy That</h2>
                    <h2 class="h2 management">Drives Business Value</h2>
                </div>
                <div class="features-list">
                    <div class="feature-item">
                        <div class="text-13-regular">01</div>
                        <div class="feature-name">
                            <div class="text-32-regular">Vision & Maturity</div>
                            <div class="feature-name-list">
                                <div class="text-16-regular brown">A clear ESG vision aligned with business goals</div>
                                <div class="text-16-regular brown">A comprehensive understanding of your ESG maturity</div>
                                <div class="text-16-regular brown">Prioritized ESG themes that matter most</div>
                                <div class="text-16-regular brown">A practical implementation roadmap</div>
                            </div>
                        </div>
                    </div>
                    <div class="feature-item second">
                        <div class="text-13-regular">02</div>
                        <div class="feature-name">
                            <div class="text-32-regular">Governance & Metrics</div>
                            <div class="feature-name-list">
                                <div class="text-16-regular brown">Strong governance and accountability structures</div>
                                <div class="text-16-regular brown">Measurable ESG KPIs and performance metrics</div>
                                <div class="text-16-regular brown">Greater regulatory readiness</div>
                                <div class="text-16-regular brown">Reliable performance monitoring and reporting</div>
                            </div>
                        </div>
                    </div>
                    <div class="feature-item third">
                        <div class="text-13-regular">03</div>
                        <div class="feature-name">
                            <div class="text-32-regular">Long-Term Growth</div>
                            <div class="feature-name-list">
                                <div class="text-16-regular brown">Increased investor, customer, and stakeholder confidence</div>
                                <div class="text-16-regular brown">A stronger foundation for sustainable, long-term growth</div>
                                <div class="text-16-regular brown">Better coordination across business functions</div>
                                <div class="text-16-regular brown">Improved ESG data quality and governance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
  return parse(html);
};
