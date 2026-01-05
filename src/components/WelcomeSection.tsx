import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="min-h-screen bg-hero-gradient text-primary-foreground section-padding flex items-center"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Profile Photo Placeholder */}
            <div className="relative mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary/20 border-4 border-accent overflow-hidden shadow-accent flex items-center justify-center">
                <img 
                src="/img_cv.jpg" 
                alt="Mhamed El Ghali Bellahbib" 
                className="w-full h-full object-cover"
              />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-2xl">👋</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center lg:text-left">
              BELLAHBIB
              <br />
              <span className="text-accent">Mhamed El Ghali</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 text-center lg:text-left max-w-lg">
              Étudiant en ingénierie informatique, passionné par le Big Data, le
              HPC et la Business Intelligence. En double diplôme ENSIAS (Maroc)
              → ENSEEIHT (Toulouse).
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="tel:+33774753873"
                className="flex items-center gap-2 text-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-full transition-colors"
              >
                <Phone size={16} />
                +33 7 74 75 38 73
              </a>
              <a
                href="mailto:mhamedghali12@gmail.com"
                className="flex items-center gap-2 text-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-full transition-colors"
              >
                <Mail size={16} />
                mhamedghali12@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mhamed-el-ghali-bellahbib-2796081b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-full transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Column - Video Pitch */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Play className="text-accent" size={24} />
              Video Pitch (3 min)
            </h2>

            {/* Video Placeholder */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-accent/30 bg-black">
              <video 
                controls 
                className="w-full h-full object-contain"
                poster="/img_cv.jpg"
              >
                <source src="/video_presentation.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            {/* Location Badge */}
            <div className="mt-8 flex items-center gap-2 text-primary-foreground/70">
              <MapPin size={18} className="text-accent" />
              <span>Toulouse, France</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
