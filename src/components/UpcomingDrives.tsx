import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarDays, MapPin } from "lucide-react";

const drives = [
  {
    id: 1,
    title: "Green Tech Collection Drive",
    date: "October 28, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Central Park, Main Plaza",
    description: "Join us for a day of responsible e-waste disposal. We'll be collecting all types of electronic waste for proper recycling.",
    registerLink: "#"
  },
  {
    id: 2,
    title: "Eco-Awareness Workshop & Collection",
    date: "November 15, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Community Center, Downtown",
    description: "Learn about e-waste management and drop off your old electronics. Special session on data security before device disposal.",
    registerLink: "#"
  },
  {
    id: 3,
    title: "Corporate E-Waste Drive",
    date: "December 5, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Tech Park, North District",
    description: "Special collection drive for businesses to responsibly dispose of their electronic equipment. Certificate of destruction provided.",
    registerLink: "#"
  }
];

const UpcomingDrives = () => {
  return (
    <section id="upcoming-drives" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Upcoming E-Waste Drives</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community initiatives for responsible e-waste disposal and environmental awareness
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {drives.map((drive) => (
            <Card key={drive.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{drive.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{drive.date} • {drive.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{drive.location}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">
                  {drive.description}
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" asChild>
                  <a href={drive.registerLink} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to organize an e-waste drive in your community?
          </p>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingDrives;
