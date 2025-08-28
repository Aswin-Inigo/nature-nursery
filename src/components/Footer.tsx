import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-nature-mint to-nature-earth rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-nature-mint-foreground mb-4">
              Stay Connected with Nature
            </h3>
            <p className="text-nature-mint-foreground/80 mb-6 max-w-2xl mx-auto">
              Get weekly plant care tips, seasonal guides, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-nature-mint-foreground/20 bg-background/90 backdrop-blur-sm"
              />
              <Button variant="hero" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-primary plant-float" />
              <span className="text-xl font-bold text-foreground">GreenSpace</span>
            </div>
            <p className="text-muted-foreground mb-6 text-balance">
              Transforming homes and gardens with beautiful, healthy plants. 
              Your trusted partner in creating green spaces that inspire.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Indoor Plants</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Outdoor Plants</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Plant Accessories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gift Sets</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sale Items</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Plant Care Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Garden Street<br />
                  Green City, GC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">(555) 123-PLANT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@greenspace.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 GreenSpace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;