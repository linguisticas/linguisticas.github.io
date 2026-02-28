import hljs from 'highlight.js/lib/core';

// Languages you already had
import javascript from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import sql from 'highlight.js/lib/languages/sql';
import php from 'highlight.js/lib/languages/php';
import csharp from 'highlight.js/lib/languages/csharp';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('php', php);
hljs.registerLanguage('csharp', csharp);

import MarkdownIt from 'markdown-it';

// Markdown-it plugins
import markdownItFootnote from 'markdown-it-footnote';
import markdownItSub from 'markdown-it-sub';
import markdownItSup from 'markdown-it-sup';
import { full as emoji } from 'markdown-it-emoji';
import { katex as markdownItKatex } from '@mdit/plugin-katex';

// Create instance with your preset + highlight callback
const md = MarkdownIt('linguisticas', {
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) { }
    }
    return ''; // fallback
  }
});

// Attach plugins
md.use(markdownItFootnote);
md.use(markdownItSub);
md.use(markdownItSup);
md.use(emoji);
md.use(markdownItKatex, { throwOnError: false });

// --- Copy to clipboard button logic ---
function addCopyHeaders() {
  document.querySelectorAll('pre code').forEach(code => {
    const pre = code.parentElement;

    // Avoid wrapping twice
    if (pre.parentElement.classList.contains('code-block')) return;

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';

    // Create header
    const header = document.createElement('div');
    header.className = 'code-header';

    // Detect language from class (e.g. language-sql)
    const langClass = [...code.classList].find(c => c.startsWith('language-'));
    const langName = langClass ? langClass.replace('language-', '').toUpperCase() : '';

    if (langName) {
      const langSpan = document.createElement('span');
      langSpan.className = 'code-lang';
      langSpan.textContent = langName;
      header.appendChild(langSpan);
    }

    // Create copy button with icon
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerHTML = '📋'; // clipboard emoji/icon

    button.addEventListener('click', () => {
      const text = code.innerText;
      navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = '✔️'; // feedback icon
        setTimeout(() => (button.innerHTML = '📋'), 2000);
      });
    });

    header.appendChild(button);

    // Wrap structure: header + pre
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(header);
    wrapper.appendChild(pre);
  });
}

// Expose render function globally
window.renderMarkdown = text => {
  const html = md.render(text);
  setTimeout(addCopyHeaders, 0);
  return html;
};