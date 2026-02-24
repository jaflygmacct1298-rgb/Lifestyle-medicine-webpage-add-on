import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center space-y-8"
      >
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Leaf className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
          Lifestyle Medicine
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          I've set up a calming, wellness-focused foundation for your website. 
          Whenever you're ready, paste your code or link below!
        </p>

        <div className="pt-8">
          <div className="animate-pulse flex space-x-2 items-center justify-center text-sm text-primary/70">
            <div className="h-2 w-2 rounded-full bg-primary/50"></div>
            <div className="h-2 w-2 rounded-full bg-primary/50" style={{ animationDelay: "0.2s" }}></div>
            <div className="h-2 w-2 rounded-full bg-primary/50" style={{ animationDelay: "0.4s" }}></div>
            <span className="ml-2 font-medium tracking-wide">Waiting for input...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
