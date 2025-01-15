import { useState } from "react";
import { Calendar as CalendarIcon, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/events/EventCard";
import { Newsletter } from "@/components/events/Newsletter";
import { Sponsors } from "@/components/events/Sponsors";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      title: "Technical Workshop: AI & Machine Learning",
      date: "2024-04-15",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Building, Room 101",
      description: "Join us for an intensive workshop on AI and Machine Learning fundamentals.",
      imageUrl: "/placeholder.svg",
      category: "Workshop",
    },
    {
      title: "IEEE Annual Conference 2024",
      date: "2024-05-20",
      time: "9:00 AM - 6:00 PM",
      location: "University Convention Center",
      description: "Annual gathering of IEEE members featuring keynote speakers and networking.",
      imageUrl: "/placeholder.svg",
      category: "Conference",
    },
    {
      title: "Industry Expert Talk Series",
      date: "2024-04-25",
      time: "3:00 PM - 4:30 PM",
      location: "Virtual Event",
      description: "Learn from industry experts about the latest technological trends.",
      imageUrl: "/placeholder.svg",
      category: "Seminar",
    },
  ];

  const categories = ["all", "Workshop", "Conference", "Seminar", "Hackathon"];

  const filteredEvents = selectedCategory === "all"
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-ieee-blue text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IEEE Events</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover upcoming events, workshops, and conferences organized by our IEEE
            Student Branch.
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <Filter className="w-5 h-5" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Sponsors Section */}
      <Sponsors />
    </div>
  );
};

export default Events;