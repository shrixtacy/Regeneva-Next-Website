const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlPath = path.join(__dirname, '..', 'www.saapro.ae', 'index.html');
const fullHtml = fs.readFileSync(htmlPath, 'utf8');

const bodyTag = '<body class="body">';
const bodyStart = fullHtml.indexOf(bodyTag);
const bodyContentStart = bodyStart + bodyTag.length;
const scriptsMarker = '<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery';
const scriptsStart = fullHtml.indexOf(scriptsMarker);
const bodyContent = fullHtml.substring(bodyContentStart, scriptsStart);

const $ = cheerio.load(bodyContent, null, false);
const rootElements = $.root().children();

const componentMap = [
  { name: 'Navbar', elements: [] },
  { name: 'HeroSection', elements: [] },
  { name: 'ProblemSection', elements: [] },
  { name: 'SolutionSection', elements: [] },
  { name: 'EffectsSection', elements: [] },
  { name: 'ComparisonSection', elements: [] },
  { name: 'TeamSection', elements: [] },
  { name: 'AwardsSection', elements: [] },
  { name: 'Footer', elements: [] },
];

let currentComponentIdx = 0;

rootElements.each((i, el) => {
  const node = $(el);
  const id = node.attr('id') || '';
  if (id === 'hero' || node.find('#hero').length > 0) currentComponentIdx = 1;
  else if (id === 'the-problem' || node.find('#the-problem').length > 0) currentComponentIdx = 2;
  else if (id === 'Our-Solution' || node.find('#Our-Solution').length > 0) currentComponentIdx = 3;
  else if (id === 'effects' || node.find('#effects').length > 0) currentComponentIdx = 4;
  else if (id === 'competitive-advantage' || node.find('#competitive-advantage').length > 0) currentComponentIdx = 5;
  else if (id === 'our-team' || node.find('#our-team').length > 0) currentComponentIdx = 6;
  else if (id === 'Awards' || node.find('#Awards').length > 0) currentComponentIdx = 7;
  else if (id === 'Contacts' || node.find('#Contacts').length > 0) currentComponentIdx = 8;
  
  componentMap[currentComponentIdx].elements.push(node);
});

const outDir = path.join(__dirname, 'src', 'components');

componentMap.forEach(comp => {
  if (comp.elements.length > 0) {
    let rawHtml = '';
    comp.elements.forEach(el => {
      rawHtml += $.html(el) + '\n';
    });
    
    // Properly escape backslashes, backticks, and dollar signs for template literal
    const escapedHtml = rawHtml
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');
    
    const tsxCode = `
import parse from 'html-react-parser';

export const ${comp.name} = () => {
  const html = \`${escapedHtml}\`;
  return parse(html);
};
`;
    fs.writeFileSync(path.join(outDir, `${comp.name}.tsx`), tsxCode.trim() + '\n');
  }
});

console.log('Regenerated components with proper escaping.');
