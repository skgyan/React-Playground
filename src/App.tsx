import React from 'react';
import './App.css';
import RefExample from './RefExample';
import ImperativeHandle from './ImperativeHandleExample';
import HigherOrderComponentExample from './HigherOrderComponent';
import {RecursiveFolder} from './RecursiveFolder';
import {ThemeProvider} from './ThemeContextProvider.jsx';
import List from './List';
import {ToggleTheme} from './ToggleTheme';

function App() {
  return (
    <>
    <ThemeProvider>
      <Greeting name="Sushil" />
      <br />
      <GreetingClass name="Kumar" />
      <RefExample />
      <ImperativeHandle />
      <HigherOrderComponentExample />
      <br/>
      <RecursiveFolder />
      <List/>
      <ToggleTheme />
      </ThemeProvider>
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
