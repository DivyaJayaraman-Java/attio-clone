import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Optional, or use emoji

export default function DesktopAnnouncement() {
  return (
    <motion.button
      className="relative flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-200 group"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => alert("Attio for Desktop is here!")}
    >
      {/* Top Gradient Bar */}
      <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-full" />

      <span>Attio for desktop is here</span>
      <motion.span
        className="text-gray-500 group-hover:translate-x-0.5 transition-transform duration-300"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <ChevronRight size={16} strokeWidth={2} />
      </motion.span>
    </motion.button>
  );
}
