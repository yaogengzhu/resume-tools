import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import resumeMd from '@/readme/resume.md';
import './index.less';
import DragBar from '@/components/dragBar/dragBar';
import DragBox from '@/components/dragBox';

const Index = () => {
  const [text, setText] = useState(resumeMd);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth / 2);

  useEffect(() => {
    const handleMouseUp = () => setIsDrag(false);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="resumePage">
      <div
        className="container"
        onMouseMove={(e) => {
          if (!isDrag) return;
          const pageX = e.nativeEvent.pageX;
          setWidth(pageX - startX);
        }}
      >
        <div className="editor no-print" style={{ width }}>
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
        <DragBar isDrag={isDrag} setDrag={setIsDrag} setStartX={setStartX} />
        <div className="privew">
          <div className="privewContent" id="preview">
            <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]} />
          </div>
        </div>
      </div>
      <DragBox
        onClick={() => {
          window.print();
        }}
      />
    </div>
  );
};

export default Index;
