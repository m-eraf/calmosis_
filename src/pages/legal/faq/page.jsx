 
import Footer from "../../Basic/footer";
import Navbar from "../../Basic/navbar";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const items = [
  {
    question: "What harsh truths do you prefer to ignore?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    question: "What is Calmosis, and what type of products do you offer?",
    answer:
      "Calmosis is a company that offers a wide range of products that help you relax and feel better. We offer everything from essential oils to bath bombs, and we are always looking for new ways to help our customers.",
  },
  {
    question: "Is free will real or just an illusion?",
    answer:
      "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
];

const FAQ = () => {
  return (
    <main className="faq">
      <Navbar />

      <div className="content">
        <h2 className="out">Frequently Asked Questions</h2>

        <Accordion>
          <AccordionItem>
            {/* map with data */}
            {items.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h3>{item.question}</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{item.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </AccordionItem>
        </Accordion>
      </div>

      <div className="line" />
      <Footer />
    </main>
  );
};

export default FAQ;
