import hljs from 'highlight.js/lib/core';

// Languages you already had
import javascript from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';

// New languages
import xml from 'highlight.js/lib/languages/xml';
import sql from 'highlight.js/lib/languages/sql';
import php from 'highlight.js/lib/languages/php';
import csharp from 'highlight.js/lib/languages/csharp';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('xml', xml);
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
  // allow HTML injection for ABCJS output
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

// Expose render function globally
window.renderMarkdown = text => md.render(text);