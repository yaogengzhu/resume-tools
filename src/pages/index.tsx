import { TextareaHTMLAttributes, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import resumeMd from '../readme/resume.md';
import './index.less';

const Index = () => {
  const [text, setText] = useState(resumeMd);
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
        <div className="privewContent">
          <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]} />
        </div>
      </div>
    </div>
  );
};

export default Index;
