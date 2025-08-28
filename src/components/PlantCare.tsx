import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sun, Scissors, Heart, Calendar, Thermometer } from "lucide-react";
import careImage from "@/assets/plant-care.jpg";

const careServices = [
  {
    icon: Droplets,
    title: "Watering Schedule",
    description: "Get personalized watering schedules for all your plants based on their specific needs.",
    features: ["Smart reminders", "Seasonal adjustments", "Plant-specific timing"],
  },
  {
    icon: Sun,
    title: "Light Requirements",
    description: "Learn about optimal lighting conditions and how to position your plants for best growth.",
    features: ["Light meter readings", "Position guides", "Seasonal changes"],
  },
  {
    icon: Scissors,
    title: "Pruning & Maintenance",
    description: "Expert guidance on when and how to prune your plants to keep them healthy and beautiful.",
    features: ["Pruning techniques", "Tool recommendations", "Recovery care"],
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Understand temperature and humidity needs to create the perfect environment for your plants.",
    features: ["Temperature ranges", "Humidity control", "Seasonal adjustments"],
  },
];

const tips = [
  {
    title: "Check Soil Moisture",
    description: "Stick your finger 2 inches deep into soil before watering",
    difficulty: "Beginner",
    time: "2 min",
  },
  {
    title: "Rotate Your Plants",
    description: "Turn plants quarterly for even growth and light exposure",
    difficulty: "Easy",
    time: "5 min",
  },
  {
    title: "Clean the Leaves",
    description: "Dust leaves monthly to improve photosynthesis and plant health",
    difficulty: "Easy",
    time: "10 min",
  },
  {
    title: "Monitor for Pests",
    description: "Weekly inspection helps catch problems before they spread",
    difficulty: "Intermediate",
    time: "15 min",
  },
];

const PlantCare = () => {
  return (
    <section id="care" className="py-20 gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            Plant Care Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Expert Plant Care
            <span className="block text-primary">Made Simple</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Get professional guidance and personalized care plans to keep your plants thriving. 
            Our experts are here to help you every step of the way.
          </p>
        </div>

        {/* Main Care Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative">
              <img
                src={careImage}
                alt="Plant care tools and healthy plants"
                className="w-full h-96 object-cover rounded-2xl shadow-lg hover-lift"
              />
              <div className="absolute inset-0 gradient-hero rounded-2xl opacity-10"></div>
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">97% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Personalized Plant Care Plans
            </h3>
            <p className="text-muted-foreground mb-8 text-balance">
              Our AI-powered plant care system creates custom schedules and reminders 
              tailored to your specific plants and environmental conditions. Never guess 
              when to water or fertilize again.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <span>Custom care schedules for each plant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Droplets className="h-4 w-4 text-primary" />
                </div>
                <span>Smart watering and fertilizing reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span>24/7 expert support and guidance</span>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Get Your Care Plan
            </Button>
          </div>
        </div>

        {/* Care Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {careServices.map((service, index) => (
            <Card key={index} className="hover-lift bg-card/50 backdrop-blur-sm plant-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Quick Care Tips
            </h3>
            <p className="text-muted-foreground">
              Simple daily habits that make a big difference for your plants
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-background rounded-lg p-6 hover-lift plant-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {tip.difficulty}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{tip.time}</span>
                </div>
                <h4 className="font-semibold mb-2">{tip.title}</h4>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantCare;