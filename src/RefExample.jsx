import { forwardRef, useRef } from 'react';

const MyInput = forwardRef(function MyInput(props, myRef) {
  return <input ref={myRef} />;
});

const RefExample = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <MyInput ref={ref} />
      <button onClick={handleClick}>Focus my input</button>
    </div>
  );
};

export default RefExample;
