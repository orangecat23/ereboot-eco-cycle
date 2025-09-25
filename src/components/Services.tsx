import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, SeparatorHorizontal, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Collection",
      description: "Door-to-door pickup of electronic waste from homes, offices, and businesses.",
      features: [
        "Scheduled pickup services",
        "Bulk collection for businesses",
        "Safe transportation",
        "Real-time tracking"
      ],
      color: "text-eco-green"
    },
    {
      icon: SeparatorHorizontal,
      title: "Segregation",
      description: "Professional sorting and categorization of electronic components and materials.",
      features: [
        "Component identification",
        "Material classification",
        "Hazardous waste separation",
        "Quality assessment"
      ],
      color: "text-tech-blue"
    },
    {
      icon: RefreshCw,
      title: "Recycling",
      description: "Eco-friendly processing and transformation into reusable materials.",
      features: [
        "Environmental compliance",
        "Material recovery",
        "Certified destruction",
        "Sustainability reporting"
      ],
      color: "text-success-green"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive e-waste management solutions designed for efficiency and sustainability
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-soft group-hover:shadow-green transition-all duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary/5 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;