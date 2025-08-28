import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Star } from "lucide-react";
import indoorImage from "@/assets/indoor-plants.jpg";
import outdoorImage from "@/assets/outdoor-plants.jpg";

interface PlantCardProps {
  name: string;
  price: string;
  difficulty: string;
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

const PlantCard = ({ name, price, difficulty, rating, isNew, isBestseller }: PlantCardProps) => {
  return (
    <Card className="hover-lift cursor-pointer group overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nature-mint/20 to-nature-earth/20"></div>
          {(isNew || isBestseller) && (
            <div className="absolute top-3 left-3 z-10">
              {isNew && <Badge variant="secondary" className="bg-primary text-primary-foreground">New</Badge>}
              {isBestseller && <Badge variant="secondary" className="bg-accent text-accent-foreground">Bestseller</Badge>}
            </div>
          )}
          <Button variant="ghost" size="icon" className="absolute top-3 right-3 z-10 bg-background/50 hover:bg-background/80">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">{rating}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {difficulty} Care
            </Badge>
            <Button variant="nature" size="sm" className="group/btn">
              Add to Cart
              <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const indoorPlants = [
  { name: "Monstera Deliciosa", price: "$45", difficulty: "Easy", rating: 4.8, isBestseller: true },
  { name: "Snake Plant", price: "$32", difficulty: "Easy", rating: 4.9 },
  { name: "Fiddle Leaf Fig", price: "$68", difficulty: "Medium", rating: 4.6, isNew: true },
  { name: "Pothos Golden", price: "$28", difficulty: "Easy", rating: 4.7 },
  { name: "Rubber Plant", price: "$52", difficulty: "Easy", rating: 4.5 },
  { name: "Peace Lily", price: "$38", difficulty: "Medium", rating: 4.4 },
];

const outdoorPlants = [
  { name: "Garden Rose Bush", price: "$35", difficulty: "Medium", rating: 4.6, isBestseller: true },
  { name: "Lavender Plant", price: "$24", difficulty: "Easy", rating: 4.8 },
  { name: "Japanese Maple", price: "$89", difficulty: "Medium", rating: 4.7, isNew: true },
  { name: "Ornamental Grass", price: "$22", difficulty: "Easy", rating: 4.5 },
  { name: "Hydrangea Bush", price: "$48", difficulty: "Medium", rating: 4.6 },
  { name: "Boxwood Shrub", price: "$36", difficulty: "Easy", rating: 4.4 },
];

const PlantSection = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Indoor Plants Section */}
        <section id="indoor" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-nature-mint text-nature-mint-foreground">
                Indoor Collection
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Transform Your
                <span className="block text-primary">Indoor Spaces</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Create a peaceful indoor oasis with our carefully selected houseplants. 
                Perfect for beginners and plant enthusiasts alike, each plant comes with 
                detailed care instructions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Shop Indoor Plants
                </Button>
                <Button variant="outline" size="lg">
                  Care Guide
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={indoorImage}
                  alt="Beautiful indoor plants collection"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg hover-lift"
                />
                <div className="absolute inset-0 gradient-nature rounded-2xl opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {indoorPlants.map((plant, index) => (
              <div key={index} className="plant-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                <PlantCard {...plant} />
              </div>
            ))}
          </div>
        </section>

        {/* Outdoor Plants Section */}
        <section id="outdoor" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative">
                <img
                  src={outdoorImage}
                  alt="Beautiful outdoor garden plants"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg hover-lift"
                />
                <div className="absolute inset-0 gradient-earth rounded-2xl opacity-20"></div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-nature-earth text-nature-earth-foreground">
                Outdoor Collection
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Create Your
                <span className="block text-primary">Dream Garden</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Build the garden of your dreams with our premium outdoor plants. 
                From colorful flowers to elegant shrubs, find everything you need 
                for your outdoor sanctuary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Shop Outdoor Plants
                </Button>
                <Button variant="outline" size="lg">
                  Garden Planning
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outdoorPlants.map((plant, index) => (
              <div key={index} className="plant-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                <PlantCard {...plant} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlantSection;