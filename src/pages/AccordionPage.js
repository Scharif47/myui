import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "jszdf23jd",
      label: "Is React the best?",
      content: "React is the best because it is the most popular.",
    },
    {
      id: "jsddfsd3jd",
      label: "Is Angular the best?",
      content: "Angular is the best because it is the most powerful.",
    },
    {
      id: "jsdsdf23jdsd",
      label: "Is Vue the best?",
      content: "Vue is the best because it is the easiest to learn.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
