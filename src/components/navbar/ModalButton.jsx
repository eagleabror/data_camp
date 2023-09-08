import React from "react";
import { motion } from "framer-motion";

const ModalButton = ({ open, lang, btnLang }) => {
  return (
    <>
      {open ? (
        <ul className="md:hidden z-50 block absolute top-[120px] right-0 w-fit">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex flex-row items-center gap-6 bg-blue py-2 px-6"
          >
            <div className="flex flex-row items-center justify-end">
              <ul className="flex flex-row items-center gap-6">
                <button
                  className="button-hover border-[#dc4298] text-[#dc4298] w-[80px] h-[60px] rounded-xl border border-sky-500 flex flex-row items-center justify-center"
                  onClick={() => btnLang(!lang)}
                >
                  {lang ? "Uz" : "Ru"}
                </button>
              </ul>
            </div>
          </motion.div>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalButton;
