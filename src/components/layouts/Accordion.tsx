"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import * as React from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const id = React.useId();

  const accordionButtonId = `accordion-button-${id}`;
  const accordionContentId = `accordion-content-${id}`;

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div
      role="presentation"
      className={clsx(
        "w-full max-w-md overflow-hidden",
        isOpen ? "divide-y-0" : "divide-y divide-shade-200"
      )}
    >
      <h3>
        <button
          type="button"
          id={accordionButtonId}
          aria-controls="accordion-content"
          aria-expanded={isOpen}
          onClick={toggleOpen}
          onKeyDown={handleKeyDown}
          className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          <strong>{title}</strong>

          <ChevronDown
            className={clsx(
              "w-5 h-5 transition-transform duration-300",
              isOpen ? "rotate-180" : ""
            )}
          />
        </button>
      </h3>

      <div
        id={accordionContentId}
        role="region"
        aria-labelledby="accordion-header"
        className={clsx(
          "px-4 text-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0",
          isOpen ? "py-4" : "py-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
