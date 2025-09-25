import { Calendar, MapPin, CheckCircle, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Schedule Collection",
      description: "Book a pickup online or call us. Choose your preferred date and time slot.",
      stepNumber: "01"
    },
    {
      icon: MapPin,
      title: "We Collect",
      description: "Our certified team arrives at your location to safely collect your e-waste.",
      stepNumber: "02"
    },
    {
      icon: CheckCircle,
      title: "Process & Sort",
      description: "Items are transported to our facility for professional segregation and assessment.",
      stepNumber: "03"
    },
    {
      icon: Award,
      title: "Recycle Responsibly",
      description: "Materials are processed through eco-friendly recycling methods with full certification.",
      stepNumber: "04"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process makes e-waste management effortless and environmentally responsible
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Connection Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="inline-block text-sm font-bold text-primary/40 mb-4 text-right w-full">
                    {step.stepNumber}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center shadow-green group-hover:shadow-large group-hover:scale-110 transition-all duration-300">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-eco-green mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Devices Recycled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-tech-blue mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success-green mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Recycling Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warning-orange mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;