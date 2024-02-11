import ScrollSection from "./Components/ScrollSection/ScrollSection";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = 'My Page Title';
  }, []);

  return (
    <>
      <ScrollSection title='Hello' colour='gray' />
      <ScrollSection title='This is' colour='blue' />
      <ScrollSection title='Animating on scroll' colour='orange' />
      <ScrollSection title='Its really easy' colour='yellow' />
      <ScrollSection title='When using framer motion' colour='green' />
      <ScrollSection title='Idk how to do it without it' colour='lime' />
    </>
  )
}

export default App
