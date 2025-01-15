import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "You will now receive notifications about upcoming events.",
    });
    setEmail("");
  };

  return (
    <div className="bg-ieee-blue text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Bell className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">
          Subscribe to our newsletter to get notified about upcoming events and
          opportunities.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-black"
            required
          />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};