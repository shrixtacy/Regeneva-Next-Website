import parse from 'html-react-parser';

export const Navbar = () => {
  const html = `<div class="global-css w-embed">
        <style>
            body {
                font-size: 1.05vw;
            }

            /* Max Font Size */

            @media screen and (min-width:1920px) {
                body {
                    font-size: 21.333333333333332px;
                }
            }

            @media screen and (max-width: 479px) {
                body {
                    font-size: 4.10256vw;
                    /*16px*/
                }
            }

            html {
                font-size: 1.333rem;
            }

            @media screen and (max-width:1920px) {
                html {
                    font-size: calc(0.0009999999999998899rem + 1.11vw);
                }
            }

            @media screen and (max-width:1440px) {
                html {
                    font-size: calc(0.0005411030176898923rem + 1.1105098855359001vw);
                }
            }

            @media screen and (max-width:479px) {
                html {
                    font-size: calc(-0.009615384615384803rem + 4.307692307692308vw);
                }
            }

            @media screen and (max-width:375px) {
                html {
                    font-size: calc(-0.00267379679144385rem + 4.27807486631016vw);
                }
            }

            body {
                overscroll-behavior: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                -o-font-smoothing: antialiased;
            }

            .dropdown-wrapper {
                position: relative;
                display: block;
            }

            .dropdown-content {
                display: grid;
                grid-template-rows: 0fr;
                transition: grid-template-rows 0.3s ease-in-out;
            }

            .dropdown-content-inner {
                overflow: hidden;
                padding-left: 15px; /* Slight indent for sub-items */
            }

            .dropdown-wrapper:hover .dropdown-content {
                grid-template-rows: 1fr;
            }

            .dropdown-link {
                color: inherit;
                padding: 10px 15px 10px 25px;
                text-decoration: none;
                display: block;
                font-size: 15px;
                font-family: inherit;
                transition: all 0.2s ease;
                line-height: 1.4;
                position: relative;
            }

            .dropdown-link::before {
                content: '';
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                width: 6px;
                height: 6px;
                background-color: #54BF44;
                border-radius: 50%;
            }

            .dropdown-link:hover {
                color: #54BF44;
            }
        </style>
    </div>
<div class="sticky-logo">
        <div class="logo-regeneva w-embed" style="display:flex; align-items:center;">
            <span style="font-weight:700; color:white; font-size:24px; font-family:sans-serif;">ReGeneva</span><span style="color:#54BF44; font-size:24px; font-weight:700;">.</span>
        </div>
    </div>
<div data-w-id="875318b3-fc0c-7cc9-02b5-1a7ac8c38c7b" class="contact-overlay">
        <div data-w-id="0a27dd6e-aaa3-a68c-b8e4-2a535a398d4f" class="contact-overlay-bg"></div>
        <div data-w-id="06f4252d-27f1-228b-d73b-4a2dc368c50d" class="contact-item">
            <div data-w-id="1f63968d-2d58-0a18-4b76-0012a61736e4" class="contact-content">
                <div data-w-id="cb923945-5e32-4f79-c00e-bb2a00d2b750" class="close-contact"><img src="/assets/673a60f198fc4326f51d4a5e_Group%20155.svg" loading="lazy" alt="" class="cross-icon"></div>
                <div class="contact-heading-wrap">
                    <div class="contact-heading">Get in<br>touch</div>
                    <div class="text-15-regular _w-90">We're here to help you explore how our ESG solutions can support and improve your sustainability goals. If you have any questions or want to dive deeper into our services, get in touch with us directly!</div>
                </div>
                <div class="divider-contact"></div>
                <div class="div-block-4">
                    <div class="gap-6">
                        <div class="text-15-regular _w-90">For all inquiries</div><a href="mailto:hello@regeneva.co" class="link-green">hello@regeneva.co</a></div>
                    <div class="gap-6">
                        <div class="text-15-regular _w-90">Contact number</div><a href="tel:+919114328561" class="link-green">+91 9114 328561</a></div>
                </div>
            </div>
        </div>
    </div>
<div class="menu-wrapper">
        <div data-w-id="12c2b125-4403-73d3-19ab-3ec9cbfd01c7" class="menu">
            <div data-w-id="382ef346-68af-652c-df0d-19b3fd7e5a95" class="menu-icon close">
                <div data-w-id="c1dc1309-11e1-ee5f-be02-fc193a98c671" class="dot-top"></div>
                <div data-w-id="07963aa2-0c42-f0d5-21c2-4e7fcc86eb47" class="dot-left"></div>
                <div data-w-id="12bf3617-52d2-4ca1-6b95-63cce7c82172" class="dot-right"></div>
                <div data-w-id="4deda6eb-a929-b40e-232f-e3dfcb7f3594" class="dot-bottom"></div>
                <div class="mobile-menu-bg"></div>
            </div>
            <div data-w-id="f137d37f-c651-8431-441f-0d1339ea4e19" class="menu-icon open">
                <div data-w-id="f137d37f-c651-8431-441f-0d1339ea4e1a" class="dot-top"></div>
                <div data-w-id="f137d37f-c651-8431-441f-0d1339ea4e1b" class="dot-left"></div>
                <div data-w-id="f137d37f-c651-8431-441f-0d1339ea4e1c" class="dot-right"></div>
                <div data-w-id="f137d37f-c651-8431-441f-0d1339ea4e1d" class="dot-bottom"></div>
                <div class="mobile-menu-bg"></div>
            </div>
            <div data-w-id="f71e2ed1-b439-5ad9-6b5d-b2564d03fdde" class="menu-links">
                <a href="/" class="menu_large-text">Home</a>
                <div class="dropdown-wrapper">
                    <a href="/esg-solutions" class="nav-link" style="display: inline-block;">ESG Solutions</a>
                    <div class="dropdown-content">
                        <div class="dropdown-content-inner">
                            <a href="#" class="dropdown-link">ESG Consulting & Advisory</a>
                            <a href="#" class="dropdown-link">Carbon, Climate & Net Zero</a>
                            <a href="#" class="dropdown-link">ESG Reporting & Disclosure</a>
                            <a href="#" class="dropdown-link">ESG Assurance, Ratings & Compliance</a>
                        </div>
                    </div>
                </div>
                <div class="dropdown-wrapper">
                    <a href="/academy" class="nav-link" style="display: inline-block;">Academy</a>
                    <div class="dropdown-content">
                        <div class="dropdown-content-inner">
                            <a href="/academy/courses?category=professional" class="dropdown-link">Professional Courses & Certifications</a>
                            <a href="/academy/courses?category=corporate" class="dropdown-link">Corporate Learning & Training</a>
                            <a href="/academy/courses?category=masterclass" class="dropdown-link">Workshops & Masterclasses</a>
                            <a href="/academy/courses" class="dropdown-link">View All Courses</a>
                        </div>
                    </div>
                </div>
                <a href="#" class="nav-link">Marketplace</a>
                <div class="dropdown-wrapper">
                    <a href="/resources" class="nav-link" style="display: inline-block;">Resources</a>
                    <div class="dropdown-content">
                        <div class="dropdown-content-inner">
                            <a href="/resources/blogs" class="dropdown-link">Blogs</a>
                            <a href="/resources/insights" class="dropdown-link">Insights</a>
                            <a href="/resources/case-studies" class="dropdown-link">Case Studies</a>
                        </div>
                    </div>
                </div>
                <div class="dropdown-wrapper">
                    <a href="/company" class="nav-link" style="display: inline-block;">Company</a>
                    <div class="dropdown-content">
                        <div class="dropdown-content-inner">
                            <a href="/company/about-us" class="dropdown-link">About Us</a>
                            <a href="/company/contact" class="dropdown-link">Contact Us</a>
                            <a href="/company/clients" class="dropdown-link">Clients</a>
                        </div>
                    </div>
                </div>
                <div class="menu_spacer-8"></div>
            </div>
            <div class="contact-btn-wrap test">
                <a data-w-id="30a9028c-5614-c4de-be82-aadb549d65ab" href="#" class="contact-btn w-inline-block">
                    <div class="dot-contact-btn"></div>
                    <div>Contact us</div>
                </a>
            </div>
            <div data-w-id="dd984442-e46b-83e8-86f1-0632dedf5b0b" class="dots-decor">
                <div class="menu_mask-for-dots">
                    <div class="menu_mask-bg"></div>
                </div>
                <div class="dot-gray mobile-hide"></div>
                <div class="dot-gray mobile-hide"></div>
                <div class="dot-gray mobile-hide"></div>
                <div class="dot-gray mobile-hide"></div>
                <div class="dot-gray mobile-hide"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="dot-gray"></div>
                <div class="menu_dots-wrapper">
                    <div>
                        <div class="w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 195 370" fill="none">
<circle cx="3" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="3" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="29" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="55" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="81" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="107" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="133" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="159" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="185" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="211" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="237" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="263" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="289" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="315" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="341" r="3" fill="#C7BFAC"></circle>
<circle cx="3" cy="367" r="3" fill="#C7BFAC"></circle>
<circle cx="30" cy="367" r="3" fill="#C7BFAC"></circle>
<circle cx="57" cy="367" r="3" fill="#C7BFAC"></circle>
<circle cx="84" cy="367" r="3" fill="#C7BFAC"></circle>
<circle cx="111" cy="367" r="3" fill="#C7BFAC"></circle>
<circle cx="138" cy="367" r="3" fill="#C7BFAC"></circle>
<circle cx="165" cy="367" r="3" fill="#C7BFAC"></circle>
<circle cx="192" cy="367" r="3" fill="#C7BFAC"></circle>
</svg></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
  return parse(html);
};
