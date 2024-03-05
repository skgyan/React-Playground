import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const imperativeRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          imperativeRef.current.focus();
        },
      };
    },
    []
  );

  return <input ref={imperativeRef} props />;
});

const ImperativeRefExample = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <MyInput ref={ref} />
      <button onDoubleClick={handleClick}>ImperativeHandle button</button>
    </div>
  );
};

export default ImperativeRefExample;
