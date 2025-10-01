import { motion } from "framer-motion";
import { Cpu } from "lucide-react"; // AI icon

const FloatingAI = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
      animate={{ y: [0, -15, 0] }} // Jump effect
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.2 }}
      onClick={() => window.location.href = "/chatbot"} // Open chatbot page
    >
      <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl">
        <Cpu className="w-8 h-8" />
      </div>
    </motion.div>
  );
};

export default FloatingAI;
