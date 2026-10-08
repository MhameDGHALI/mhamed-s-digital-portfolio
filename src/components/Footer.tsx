import { Mail, Phone, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Mhamed El Ghali <span className="text-accent">Bellahbib</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              HPC & Big Data Engineering student passionate about Data,
              Business Intelligence and Big Data.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#welcome"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#engineering"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33774753873"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  +33 7 74 75 38 73
                </a>
              </li>
              <li>
                <a
                  href="mailto:mhamedghali12@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  mhamedghali12@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mhamed-el-ghali-bellahbib-2796081b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Mhamed El Ghali Bellahbib. Made with
            <Heart size={14} className="text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};
