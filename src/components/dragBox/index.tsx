import './index.less';

interface IProps {
  onClick: () => void;
}

const Index: React.FC<IProps> = (props) => {
  const { onClick } = props;

  return (
    <div className="dragBox no-print">
      <div className="content">
        <span
          onClick={() => {
            onClick();
          }}
        >
          下载PDF
        </span>
      </div>
    </div>
  );
};

export default Index;
