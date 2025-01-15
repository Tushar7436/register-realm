import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { EventCard } from "@/components/events/EventCard";
import { Newsletter } from "@/components/events/Newsletter";
import { Sponsors } from "@/components/events/Sponsors";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const featuredEvent = {
    title: "IEEE Technical Workshop 2024",
    date: "March 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Engineering Building, Room 101",
    description: "Join us for an intensive workshop on emerging technologies. Learn from industry experts about the latest trends in technology.",
    imageUrl: "/placeholder.svg",
    category: "Workshop",
  };

  const upcomingEvents = [
    {
      title: "AI & Machine Learning Conference",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Virtual Event",
      description: "Explore the latest advancements in AI and ML with leading researchers and practitioners.",
      imageUrl: "/placeholder.svg",
      category: "Conference",
    },
    {
      title: "Robotics Competition",
      date: "April 20, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "University Main Hall",
      description: "Annual robotics competition for engineering students featuring innovative projects.",
      imageUrl: "/placeholder.svg",
      category: "Competition",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-blue-700/50 backdrop-blur-sm"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-fadeIn">
            IEEE Club Events
          </h1>
          <p className="text-2xl mb-8 text-white/90 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Discover, Learn, and Connect
          </p>
          <Button
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-300 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            View Featured Event
          </Button>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-blue-600 animate-fadeIn">Featured Event</h2>
          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <EventCard {...featuredEvent} />
          </div>
        </div>
      </section>

      {/* Calendar and Upcoming Events */}
      <section className="py-16 bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl font-bold mb-8 text-blue-600">Event Calendar</h2>
              <Card className="backdrop-blur-md bg-white/90 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border hover:shadow-lg transition-shadow duration-300"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-4xl font-bold mb-8 text-blue-600">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-gradient-to-t from-white/95 to-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <Sponsors />
        </div>
      </section>
    </div>
  );
};

export default Index;