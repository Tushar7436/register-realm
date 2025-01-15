import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  category,
}: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      <div className="p-6 transform transition-all duration-500">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-ieee-blue bg-ieee-gray rounded-full hover:bg-ieee-blue hover:text-white transition-all duration-300 transform hover:scale-105">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 hover:text-ieee-blue transition-colors duration-300 transform hover:translate-x-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 transition-all duration-300 hover:text-gray-800">
          {description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 hover:text-ieee-blue transition-all duration-300 transform hover:translate-x-2">
            <Calendar className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-500 hover:text-ieee-blue transition-all duration-300 transform hover:translate-x-2">
            <Clock className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-500 hover:text-ieee-blue transition-all duration-300 transform hover:translate-x-2">
            <MapPin className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            <span>{location}</span>
          </div>
        </div>
        <Button className="w-full bg-ieee-blue hover:bg-ieee-lightBlue transform hover:scale-105 transition-all duration-500 hover:shadow-lg animate-pulse">
          Register Now
        </Button>
      </div>
    </div>
  );
};