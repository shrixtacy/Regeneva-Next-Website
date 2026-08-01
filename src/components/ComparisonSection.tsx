import parse from 'html-react-parser';

export const ComparisonSection = () => {
    const html = `<section id="competitive-advantage" class="section dark-beige comparison">
        <div class="w-layout-blockcontainer container w-container">
            <div class="comparison-wrap">
                <div class="comparison-heading">
                    <h2 letters-slide-up-h1="" text-split-h1="" class="h2">Comprehensive ESG Services</h2>
                </div>
                <div data-current="Tab 2" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
                    <div class="tabs-menu w-tab-menu">
                        <a data-w-tab="Tab 1" class="tab-link w-inline-block w-tab-link">
                            <div>Advisory &amp; Consulting</div>
                        </a>
                        <a data-w-tab="Tab 2" class="tab-link w-inline-block w-tab-link w--current">
                            <div>Reporting &amp; Assurance</div>
                        </a>
                    </div>
                    <div class="tabs-content w-tab-content">
                        <div data-w-tab="Tab 1" class="w-tab-pane">
                            <div class="table-grid">
                                <div></div><div class="logo-dark" style="display:flex; align-items:center; justify-content:center;"><span style="font-weight:700; color:#322D24; font-size:20px; font-family:sans-serif;">ReGeneva</span><span style="color:#54BF44; font-size:20px; font-weight:700;">.</span></div>
                                <div class="grid-category-column">Strategy</div>
                                <div class="grid-category-column">Maturity</div>
                                <div class="grid-category-column">Decarbonization</div>
                                <div id="w-node-cbcfd7df-ecca-497e-dcc4-7d436a12ca41-b9dd0595" class="grid-category-raw">Description</div>
                                <div class="text-16-regular brown center">Align ESG with business goals</div>
                                <div class="text-16-regular brown center">Materiality &amp; Readiness Assessment</div>
                                <div class="text-16-regular brown center">Current State vs Future Ambition</div>
                                <div class="text-16-regular brown center">Carbon Footprint &amp; Net Zero Roadmaps</div>
                                <div id="w-node-f7e6ccc6-d4fd-3d06-cd71-c6e2e1753a01-b9dd0595" class="divider"></div>
                                <div id="w-node-_8fc0c0e8-b26f-45e7-c6b6-7ba4e6a8c223-b9dd0595" class="grid-category-raw">Key Outcomes</div>
                                <div class="text-16-regular brown center">Clear KPIs &amp; targets</div>
                                <div class="text-16-regular brown center">Gap Analysis</div>
                                <div class="text-16-regular brown center">Benchmarking</div>
                                <div class="text-16-regular brown center">Science-based targets</div>
                                <div id="w-node-_5293912c-bbc2-2535-9fdc-729ac86615c2-b9dd0595" class="divider"></div>
                                <div id="w-node-_46429059-a321-b8ca-9bf4-d6c6d20fb2d8-b9dd0595" class="grid-category-raw">Value Created</div>
                                <div class="text-16-regular brown center">Business alignment</div>
                                <div class="text-16-regular brown center">Risk Mitigation</div>
                                <div class="text-16-regular brown center">Opportunity ID</div>
                                <div class="text-16-regular brown center">Resilience</div>
                                <div id="w-node-be4fdf66-e4fc-8b73-fe75-3969c6c6f56e-b9dd0595" class="divider"></div>
                                <div id="w-node-_39a89557-565f-d303-81a7-4a8c584fc6b5-b9dd0595" class="grid-category-raw">Timeframe</div>
                                <div class="text-16-regular brown center">2-4 Weeks</div>
                                <div class="text-16-regular brown center">4-6 Weeks</div>
                                <div id="w-node-b8b6db48-7f59-90cb-3f66-3f88226cb128-b9dd0595" class="text-16-regular brown center">4-6 Weeks</div>
                                <div id="w-node-b714d584-846f-03a9-c648-52967c8ac465-b9dd0595" class="text-16-regular brown center">3-6 Months</div>
                                <div id="w-node-f45f0936-b732-628e-bf18-cadc162a8bdc-b9dd0595" class="divider"></div>
                                <div id="w-node-_4634db99-f950-2e50-036f-7cdb5eccd035-b9dd0595" class="grid-category-raw">Deliverables</div>
                                <div class="text-16-regular brown center">Strategic Roadmap</div>
                                <div class="text-16-regular brown center">Materiality Matrix</div>
                                <div class="text-16-regular brown center">Maturity Report</div>
                                <div class="text-16-regular brown center">Net Zero Strategy</div>
                                <div id="w-node-bd6035eb-3740-4fdb-0773-255ddf9f53bd-b9dd0595" class="divider"></div>
                                <div id="w-node-d1fa43e8-1c8c-e5f2-89d9-64ac96a73048-b9dd0595" class="grid-category-raw">Business Impact</div>
                                <div class="text-16-regular brown center">High</div>
                                <div class="text-16-regular brown center">High</div>
                                <div class="text-16-regular brown center">High</div>
                                <div class="text-16-regular brown center">High</div>
                            </div>
                            <div class="highlight-saapro"></div>
                        </div>
                        <div data-w-tab="Tab 2" class="w-tab-pane w--tab-active">
                            <div class="table-grid">
                                <div></div><div class="logo-dark" style="display:flex; align-items:center; justify-content:center;"><span style="font-weight:700; color:#322D24; font-size:20px; font-family:sans-serif;">ReGeneva</span><span style="color:#54BF44; font-size:20px; font-weight:700;">.</span></div>
                                <div class="grid-category-column">BRSR / CSRD</div>
                                <div class="grid-category-column">GRI / SASB</div>
                                <div class="grid-category-column">Assurance</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0a90-b9dd0595" class="grid-category-raw">Description</div>
                                <div class="text-16-regular brown center">Global reporting standards</div>
                                <div class="text-16-regular brown center">Mandatory Disclosures</div>
                                <div class="text-16-regular brown center">Voluntary Frameworks</div>
                                <div class="text-16-regular brown center">Independent Verification</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0a9a-b9dd0595" class="divider"></div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0a9b-b9dd0595" class="grid-category-raw">Applicability</div>
                                <div class="text-16-regular brown center">Universal</div>
                                <div class="text-16-regular brown center">Listed Entities</div>
                                <div class="text-16-regular brown center">Global Entities</div>
                                <div class="text-16-regular brown center">All Disclosures</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0aa5-b9dd0595" class="divider"></div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0aa6-b9dd0595" class="grid-category-raw">Focus</div>
                                <div class="text-16-regular brown center">Compliance</div>
                                <div class="text-16-regular brown center">Regulatory</div>
                                <div class="text-16-regular brown center">Stakeholder Comm.</div>
                                <div class="text-16-regular brown center">Credibility</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0ab0-b9dd0595" class="divider"></div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0ab1-b9dd0595" class="grid-category-raw">Data Required</div>
                                <div class="text-16-regular brown center">Comprehensive</div>
                                <div class="text-16-regular brown center">Quantitative &amp; Qualitative</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0ab7-b9dd0595" class="text-16-regular brown center">Topic-specific</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0ab9-b9dd0595" class="text-16-regular brown center">Audit-ready data</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0abb-b9dd0595" class="divider"></div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0abc-b9dd0595" class="grid-category-raw">Assurance Level</div>
                                <div class="text-16-regular brown center">Ready for Audit</div>
                                <div class="text-16-regular brown center">Reasonable/Limited</div>
                                <div class="text-16-regular brown center">Limited</div>
                                <div class="text-16-regular brown center">–</div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0aca-b9dd0595" class="divider"></div>
                                <div id="w-node-_4276d4ff-4fd2-f747-0059-68251bfb0acb-b9dd0595" class="grid-category-raw">Deliverables</div>
                                <div class="text-16-regular brown center">Annual Report</div>
                                <div class="text-16-regular brown center">BRSR/CSRD Report</div>
                                <div class="text-16-regular brown center">GRI Index</div>
                                <div class="text-16-regular brown center">Assurance Statement</div>
                            </div>
                            <div class="highlight-saapro"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
    return parse(html);
};
