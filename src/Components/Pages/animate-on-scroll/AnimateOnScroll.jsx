import ScrollSection from "/src/Components/ScrollSection/ScrollSection.jsx";
import Header from "/src/Components/Header/Full/Header.jsx";

function AnimateOnScroll(){
    return (
        <>
          <Header />
          <ScrollSection title='Hello' colour='red' />
          <ScrollSection title='This is' colour='blue' />
          <ScrollSection title='Animating on scroll' colour='orange' />
          <ScrollSection title='Its really easy' colour='yellow' />
          <ScrollSection title='When using framer motion' colour='green' />
          <ScrollSection title='Idk how to do it without it' colour='lime' />
        </>
    );
}
export default AnimateOnScroll;