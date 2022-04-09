import './index.less';

interface IProps {
  isDrag: boolean;
  setStartX: React.Dispatch<React.SetStateAction<number>>;
  setDrag: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index: React.FC<IProps> = (props) => {
  const { setStartX, setDrag } = props;
  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { nativeEvent } = e;
    const offsetX = nativeEvent.offsetX;
    setStartX(offsetX);
  };

  return (
    <div
      className="dragBar"
      onMouseDown={(e) => {
        setDrag(true);
        dragStart(e);
      }}
    ></div>
  );
};
export default Index;
