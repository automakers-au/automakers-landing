import React from "react";
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "David Mitchell",
      role: "Owner, Mitchell Plumbing Services",
      content: "Cut no-shows by 35% with automated booking reminders. The SMS and email automation saves me 8 hours a week on admin work.",
      rating: 5,
    },
    {
      name: "Sophie Chen",
      role: "Managing Director, Digital Marketing Co",
      content: "The workflow automation transformed our quote follow-ups. Response rates increased 45% and we closed more deals without hiring extra staff.",
      rating: 5,
    },
    {
      name: "Tom Harrison",
      role: "Senior Partner, Northbridge Legal Group",
      content: "Document processing that used to take days now takes minutes. The AI integration with our practice management system was seamless.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-base sm:text-xl text-muted-foreground">Real results from real businesses</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-golden text-golden" />
                  ))}
                </div>
                <CardDescription className="text-sm sm:text-base italic">"{testimonial.content}"</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
