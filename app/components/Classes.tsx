"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut", // ok when type is tween
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between cards
    },
  },
};

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

const Classes = () => {
  return (
    <div className="max-w-[1200px] m-auto my-12">
      {/* Title */}
      <div className="flex items-center mb-12 md:mb-20">
        <div className="flex-grow border-t border-coffee"></div>
        <p className="mx-4 font-playfair text-6xl text-coffee text-center opsz-auto no-synth">
          Classes
        </p>
        <div className="flex-grow border-t border-coffee"></div>
      </div>

      {/* Animated grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1 */}
        <motion.div
          variants={item}
          className="text-center h-[60vh] bg-[url('/pose-2.webp')] bg-cover bg-center flex justify-center items-center"
        >
          <div className="p-6 w-2/3 h-3/4 bg-bg/80 flex flex-col">
            <h3 className="font-playfair text-lg font-medium text-expresso">
              Mat Pilates
            </h3>
            <p className="font-playfair text-3xl mt-4 text-expresso">
              Bodyweight core work; alignment and flexibility.
            </p>
            <Link
              href="/"
              className="mt-auto w-fit mx-auto bg-expresso text-light font-playfair font-medium font-lg py-1 px-5 cursor-pointer transition duration-200 hover:bg-expresso-alt rounded-4xl"
            >
              Book
            </Link>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={item}
          className="text-center h-[60vh] bg-[url('/pose-3.webp')] bg-cover bg-center flex justify-center items-center"
        >
          <div className="p-6 w-2/3 h-3/4 bg-bg/80 flex flex-col">
            <h3 className="font-playfair text-lg font-medium text-expresso">
              Reformer Pilates
            </h3>
            <p className="font-playfair text-3xl mt-4 text-expresso">
              Spring-resisted, full-body strength with precise control.
            </p>
            <Link
              href="/"
              className="mt-auto w-fit mx-auto bg-expresso text-light font-playfair font-medium font-lg py-1 px-5 cursor-pointer transition duration-200 hover:bg-expresso-alt rounded-4xl"
            >
              Book
            </Link>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={item}
          className="text-center h-[60vh] bg-[url('/pose-4.webp')] bg-cover bg-center flex justify-center items-center"
        >
          <div className="p-6 w-2/3 h-3/4 bg-bg/80 flex flex-col">
            <h3 className="font-playfair text-lg font-medium text-expresso">
              Jumpboard/Cardio Reformer
            </h3>
            <p className="font-playfair text-3xl mt-4 text-expresso">
              Low-impact cardio on reformer; power and endurance.
            </p>
            <Link
              href="/"
              className="mt-auto w-fit mx-auto bg-expresso text-light font-playfair font-medium font-lg py-1 px-5 cursor-pointer transition duration-200 hover:bg-expresso-alt rounded-4xl"
            >
              Book
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* View All */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Link
          href={"/"}
          className="block w-fit font-playfair font-medium text-expresso px-6 py-2
            mt-8 hover:bg-secondary hover:text-bg transition duration-200 cursor-pointer text-lg m-auto"
        >
          View All Classes
        </Link>
      </motion.div>
    </div>
  );
};

export default Classes;
