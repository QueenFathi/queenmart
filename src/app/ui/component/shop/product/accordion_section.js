"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function AccordionTab({ title, data, isOpen, onClick }) {
  const lines = data.split("<br />");
  return (
    <div className="py-10 border-b border-stone-200">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg md:text-2xl">{title}</h1>
        <button onClick={onClick}>
          <FaAngleDown
            className={`w-8 h-8 p-2 transition-transform duration-300 ${
              isOpen && "rotate-180"
            }`}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 mt-2 text-gray-800 rounded-xl transition-all duration-300 ease-in-out">
              <p className="font-bold pb-1">{lines[0]}</p>
              <ul className="list-disc pl-6">
                {lines.slice(1).map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AccordionSection({
  shippingdata,
  descriptiondata,
  detaildata,
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {[
        { title: "Description", data: descriptiondata },
        { title: "Details", data: detaildata },
        { title: "Shipping", data: shippingdata },
      ].map((item, index) => (
        <AccordionTab
          key={index}
          title={item.title}
          data={item.data}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
