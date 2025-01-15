import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { EventCard } from "@/components/events/EventCard";
import { Newsletter } from "@/components/events/Newsletter";
import { Sponsors } from "@/components/events/Sponsors";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const featuredEvent = {
    title: "IEEE Technical Workshop 2024",
    date: "March 15, 2024",
    description: "Join us for an intensive workshop on emerging technologies",
    image: "/placeholder.svg",
    category: "Workshop",
  };

  const upcomingEvents = [
    {
      title: "AI & Machine Learning Conference",
      date: "April 5, 2024",
      description: "Explore the latest advancements in AI and ML",
      image: "/placeholder.svg",
      category: "Conference",
    },
    {
      title: "Robotics Competition",
      date: "April 20, 2024",
      description: "Annual robotics competition for engineering students",
      image: "/placeholder.svg",
      category: "Competition",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-ieee-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            IEEE Club Events
          </h1>
          <p className="text-xl mb-8">Discover, Learn, and Connect</p>
          <Button
            variant="secondary"
            className="bg-white text-ieee-blue hover:bg-ieee-lightBlue hover:text-white"
          >
            View Featured Event
          </Button>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 bg-ieee-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-ieee-blue">Featured Event</h2>
          <EventCard {...featuredEvent} />
        </div>
      </section>

      {/* Calendar and Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-ieee-blue">Event Calendar</h2>
              <Card>
                <CardContent className="p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-ieee-blue">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-ieee-gray">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Sponsors />
        </div>
      </section>
    </div>
  );
};

export default Index;