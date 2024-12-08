import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-teal-50 to-purple-50 dark:from-rose-950/20 dark:via-teal-950/20 dark:to-purple-950/20 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What brings you to Flora today?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button
            variant="outline"
            size="lg"
            className="h-32 text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            I'm looking for support
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="h-32 text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            I'm here to listen
          </Button>
        </div>
      </motion.div>
    </div>
  );
}