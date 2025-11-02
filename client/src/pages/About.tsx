import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Sprout, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Heritage Hub Nepal
            </h1>
            <p className="text-lg text-muted-foreground">
              Cultivating Nepal's Sustainable Future Through Innovation
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Heritage Hub Nepal is a pioneering sustainable ventures initiative committed to transforming Nepal's agricultural and manufacturing landscape. We believe in empowering local communities through innovative, eco-friendly solutions that generate both economic prosperity and environmental stewardship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Registered as a Private Sole Ownership company, Heritage Hub Nepal operates across multiple sectors including sustainable agriculture, bamboo-based manufacturing, value-added food processing, educational initiatives, and retail operations. Our diversified approach ensures long-term stability while maximizing positive impact on local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <Sprout className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To empower Nepali communities through sustainable agriculture, innovative manufacturing, and education - creating prosperity while preserving our natural heritage for future generations.
              </p>
            </Card>

            <Card className="p-8">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To become Nepal's leading sustainable ventures platform, demonstrating that profitable business and environmental responsibility can thrive together across agriculture, manufacturing, and education sectors.
              </p>
            </Card>

            <Card className="p-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Community Impact
              </h3>
              <p className="text-muted-foreground">
                We prioritize local farmer empowerment, guaranteed buy-back programs, and knowledge transfer to ensure sustainable livelihoods and community prosperity across all our ventures.
              </p>
            </Card>

            <Card className="p-8">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Our Approach
              </h3>
              <p className="text-muted-foreground">
                Evidence-based innovation, proven pilot programs, sustainable practices, and transparent operations guide every venture we undertake - from mushroom farming to future manufacturing initiatives.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-primary text-primary-foreground">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-center">
              Our First Success: Mushroom Farming
            </h3>
            <p className="text-center leading-relaxed mb-4">
              Heritage Hub Nepal launched with bamboo-powered mushroom cultivation as our proof of concept. This venture demonstrates our commitment to sustainable, high-yield agriculture that benefits both investors and local farmers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-serif text-3xl font-bold mb-1">1.24</div>
                <div className="text-sm opacity-90">B/C Ratio</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold mb-1">30+</div>
                <div className="text-sm opacity-90">Year Bamboo Life</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold mb-1">86%</div>
                <div className="text-sm opacity-90">Untapped Market</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
