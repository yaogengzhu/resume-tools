import { TextareaHTMLAttributes, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import resumeMd from '../readme/resume.md';
import { jsPDF } from 'jspdf';

import './index.less';

const Index = () => {
  const [text, setText] = useState(resumeMd);
  function converHTMLFileToPDF() {
    var doc = new jsPDF('l', 'mm', [1200, 1210]);
    var pdfjs: HTMLElement = document.querySelector('#temp-target')!;
    if (pdfjs) {
      doc.html(pdfjs, {
        callback: function (doc) {
          doc.save('output.pdf');
        },
        x: 10,
        y: 10,
      });
    }
  }

  return (
    <div className="resumePage">
      <div className="editor">
        <textarea
          value={text}
          autoFocus
          className="editorContent"
          onInput={(e) => {
            const value = (e.target as any).value;
            setText(value);
          }}
        ></textarea>
      </div>
      <div className="privew">
        <button onClick={() => converHTMLFileToPDF()}>下载</button>
        <div className="privewContent" id="temp-target">
          <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]} />
        </div>
      </div>
    </div>
  );
};

export default Index;
