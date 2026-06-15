import { motion } from "motion/react";
const animations = {
  left: { opacity: 0, x: -50 },
  right: { opacity: 0, x: 50 },
  up: { opacity: 0, y: 50 },

  fade: { opacity: 0 },

  pop: {
    opacity: 0,
    scale: 0.8,
  },

  blur: {
    opacity: 0,
    filter: "blur(10px)",
  },
};
export default function AnimatedDiv({
  children,
  animation = "up",
  delay = 0,
  once = false,   // default for sections
}) {
  return (
    <motion.div
      initial={animations[animation]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{
        once,        // controlled from outside
        amount: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}