import { motion } from "framer-motion";

export default function EquipmentAndTechnology() {
  // Animation variants
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const staggerChildren = {
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const fadeInItem = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="w-[90%] md:w-[80%] mx-auto rounded-[35px] mt-24 p-8 md:p-16"
      style={{ backgroundColor: "#fbeaf0" }}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN — HEADING + IMAGE */}
        <motion.div
          className="flex-1"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-black text-2xl md:text-4xl font-[500] leading-tight">
            We offer a wide range of equipment and technology solutions:
          </h2>

          {/* Image hidden on mobile — shown on md+ */}
          <motion.img
            src="/images/WOD.png"
            alt="Equipment Technology"
            className="hidden md:block mt-6 w-full max-w-[18rem] ml-[25%]"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="flex-1 space-y-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Block 1 */}
          <motion.div variants={fadeInItem}>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              On-the-go Mobile Devices
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Portable and easy-to-use mobile payment devices for businesses that operate anywhere.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeInItem}>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              Countertop Terminals
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Reliable and secure payment terminals designed for fast in-store checkout.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div variants={fadeInItem}>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              Point-of-Sale Systems
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Full POS setups that manage sales, inventory, analytics, and customer data effortlessly.
            </p>
          </motion.div>

          {/* Block 4 */}
          <motion.div variants={fadeInItem}>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              e-Commerce Gateways
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Secure online payment gateways that help businesses accept digital payments smoothly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
