const withLogging = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    console.log(`logging ${WrappedComponent.name}`);
    return <WrappedComponent {...props} />;
  };

  EnhancedComponent.displayName = `withLogging(${WrappedComponent.name})`;

  return EnhancedComponent;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

const LoggedButton = withLogging(Button);

const HigherOrderComponentExample = () => {
  return (
    <LoggedButton onClick={() => console.log('Button clicked')}>
      Click me!
    </LoggedButton>
  );
};

export default HigherOrderComponentExample;
