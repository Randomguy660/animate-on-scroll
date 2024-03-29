import ScrollSection from "/src/Components/ScrollSection/ScrollSection.jsx";

function AnimateOnScroll(){
    return (
        <>
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