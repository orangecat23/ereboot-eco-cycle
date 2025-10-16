import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data for recycling centers
const recyclingCenters = [
  {
    id: 1,
    name: "Green Earth Recycling",
    address: "123 Eco Park, Bangalore",
    authorized: true,
    distance: "1.2 km",
    hours: "Mon-Sat: 9 AM - 6 PM",
    contact: "+91 98765 43210"
  },
  {
    id: 2,
    name: "EcoTech Solutions",
    address: "456 Green Tech Park, Bangalore",
    authorized: false,
    distance: "2.5 km",
    hours: "Mon-Fri: 10 AM - 7 PM",
    contact: "+91 87654 32109"
  },
  {
    id: 3,
    name: "Green Planet E-Waste",
    address: "789 Environment Street, Bangalore",
    authorized: true,
    distance: "3.1 km",
    hours: "Mon-Sat: 8 AM - 8 PM",
    contact: "+91 76543 21098"
  }
];

// E-waste categories with descriptions
const EWASTE_CATEGORIES = [
  {
    id: 'small-appliances',
    name: 'Small Appliances',
    description: 'e.g., keyboards, mice, hair dryers, toasters, blenders',
    icon: '⌨️'
  },
  {
    id: 'large-appliances',
    name: 'Large Appliances',
    description: 'e.g., washing machines, refrigerators, air conditioners',
    icon: '🧺'
  },
  {
    id: 'computers',
    name: 'Computers & Laptops',
    description: 'Desktops, laptops, servers, and their components',
    icon: '💻'
  },
  {
    id: 'mobile-devices',
    name: 'Mobile Devices',
    description: 'Smartphones, tablets, e-readers',
    icon: '📱'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'TVs, audio systems, gaming consoles',
    icon: '🎮'
  },
  {
    id: 'batteries',
    name: 'Batteries',
    description: 'All types of rechargeable and single-use batteries',
    icon: '🔋'
  }
];

const Collection = () => {
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSchedule = async () => {
    if (!selectedCenter || !address || !category) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const center = recyclingCenters.find(c => c.id === selectedCenter);
      const categoryData = EWASTE_CATEGORIES.find(c => c.id === category);
      
      // Here you would typically send this data to your backend
      console.log('Scheduling collection:', {
        centerId: selectedCenter,
        centerName: center?.name,
        address,
        category: categoryData?.name,
        description,
        timestamp: new Date().toISOString()
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(`Collection scheduled at ${center?.name}! We'll contact you soon to confirm the pickup.`);
      navigate('/');
    } catch (error) {
      console.error('Error scheduling collection:', error);
      alert('Failed to schedule collection. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Schedule E-Waste Collection</h1>
        
        <Tabs defaultValue="centers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="centers">Recycling Centers</TabsTrigger>
            <TabsTrigger value="segregation">Segregation</TabsTrigger>
            <TabsTrigger value="learn">Learn More</TabsTrigger>
          </TabsList>

          {/* Recycling Centers Tab */}
          <TabsContent value="centers">
            <Card>
              <CardHeader>
                <CardTitle>Nearby E-Waste Recycling Centers</CardTitle>
                <CardDescription>
                  Select a center to schedule a pickup. Authorized centers are verified by the government.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recyclingCenters.map((center) => (
                  <div 
                    key={center.id}
                    onClick={() => setSelectedCenter(center.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedCenter === center.id 
                        ? 'border-primary bg-primary/5' 
                        : 'hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold flex items-center">
                          {center.name}
                          {center.authorized ? (
                            <CheckCircle2 className="w-4 h-4 ml-2 text-green-500" />
                          ) : (
                            <XCircle className="w-4 h-4 ml-2 text-yellow-500" />
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <MapPin className="w-3.5 h-3.5 mr-1" />
                          {center.address} • {center.distance} away
                        </p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Hours:</span> {center.hours}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Contact:</span> {center.contact}
                        </p>
                      </div>
                      {center.authorized ? (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Authorized
                        </span>
                      ) : (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Unauthorized
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                
                {selectedCenter && (
                  <div className="mt-8 space-y-6 border-t pt-6">
                    <h3 className="text-lg font-semibold">Pickup Details</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">E-Waste Category *</Label>
                        <Select onValueChange={setCategory} value={category}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {EWASTE_CATEGORIES.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                <div className="flex items-center">
                                  <span className="mr-2 text-lg">{cat.icon}</span>
                                  <div>
                                    <div className="font-medium">{cat.name}</div>
                                    <div className="text-xs text-muted-foreground">{cat.description}</div>
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Pickup Address *</Label>
                        <Textarea
                          id="address"
                          placeholder="Enter your full address for pickup"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Additional Details (Optional)</Label>
                        <Textarea
                          id="description"
                          placeholder="Any special instructions or details about your e-waste"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={3}
                        />
                      </div>

                      <div className="pt-2">
                        <Button 
                          onClick={handleSchedule}
                          disabled={!category || !address || isSubmitting}
                          className="w-full bg-gradient-hero hover:shadow-green transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Scheduling...
                            </>
                          ) : (
                            'Schedule Collection'
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Segregation Tab */}
          <TabsContent value="segregation">
            <Card>
              <CardHeader>
                <CardTitle>E-Waste Segregation Guide</CardTitle>
                <CardDescription>
                  Proper segregation helps in efficient recycling and reduces environmental impact.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">How to Segregate E-Waste</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Small Appliances:</strong> Remove batteries and separate them.</li>
                    <li><strong>Computers & Laptops:</strong> Remove all personal data and separate chargers.</li>
                    <li><strong>Mobile Phones:</strong> Remove SIM cards and memory cards.</li>
                    <li><strong>Printers & Scanners:</strong> Remove ink/toner cartridges.</li>
                    <li><strong>TVs & Monitors:</strong> Handle with care due to fragile glass.</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Do Not Include</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Household hazardous waste (batteries, light bulbs, etc.)</li>
                    <li>Medical waste or any biohazard materials</li>
                    <li>Explosive or radioactive materials</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learn More Tab */}
          <TabsContent value="learn">
            <Card>
              <CardHeader>
                <CardTitle>Why E-Waste Management is Crucial</CardTitle>
                <CardDescription>
                  Understanding the impact of e-waste and the importance of responsible disposal.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">The Growing E-Waste Crisis</h3>
                  <p>
                    Electronic waste is the fastest-growing waste stream globally, with over 53 million metric tons generated annually. 
                    Only 17.4% of this waste is properly collected and recycled, while the rest ends up in landfills, causing 
                    severe environmental and health hazards.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Environmental Impact</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Toxic Materials:</strong> E-waste contains hazardous substances like lead, mercury, and cadmium that can leach into soil and water.</li>
                    <li><strong>Resource Depletion:</strong> Valuable materials like gold, silver, and rare earth elements are lost when e-waste isn't recycled.</li>
                    <li><strong>Carbon Footprint:</strong> Proper recycling reduces the need for mining and manufacturing new materials, lowering greenhouse gas emissions.</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Why Act Now?</h3>
                  <p>
                    The time to address e-waste is now. With increasing technology adoption, the problem is only growing. 
                    By responsibly recycling your e-waste, you're not just complying with regulations—you're protecting 
                    the environment, conserving resources, and supporting the circular economy.
                  </p>
                  <p>
                    Every device recycled is a step towards a sustainable future. Join us in making a difference today.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Did You Know?</h4>
                  <p className="text-blue-700">
                    Recycling one million laptops saves the energy equivalent to the electricity used by 3,657 U.S. homes in a year.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
