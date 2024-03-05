import React from 'react';
import './App.css';
import RefExample from './RefExample';
import ImperativeHandle from './ImperativeHandleExample';
import HigherOrderComponentExample from './HigherOrderComponent';

function App() {
  return (
    <>
      <Greeting name="Sushil" />
      <br />
      <GreetingClass name="Kumar" />
      <RefExample />
      <ImperativeHandle />
      <HigherOrderComponentExample />
    </>
  );
}

function Greeting({ name }: { name: String }) {
  return <h1>{`Hi, ${name}`}</h1>;
}

class GreetingClass extends React.Component<{ name: string }> {
  render() {
    return <h2>{`Hello ${this.props.name}, from Greeting Class`}</h2>;
  }
}

export default App;
