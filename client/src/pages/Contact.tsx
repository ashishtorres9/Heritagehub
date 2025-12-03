import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your mushroom farming journey? Get in touch with our team for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center" data-testid="card-contact-email">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium text-foreground mb-1">Email</div>
              <a
                href="mailto:heritagehubnepal@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                heritagehubnepal@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center" data-testid="card-contact-phone">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium text-foreground mb-1">Phone</div>
              <a
                href="tel:+9779800000000"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +977 9808390808
              </a>
            </Card>

            <Card className="p-6 text-center" data-testid="card-contact-location">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium text-foreground mb-1">Location</div>
              <p className="text-sm text-muted-foreground">
                Kathmandu, Nepal
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
