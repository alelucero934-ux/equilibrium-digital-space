import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Profesora",
    content: "Equilibrio me ha ayudado a manejar mi ansiedad diaria. Los ejercicios son cortos pero muy efectivos. Me siento más tranquila y enfocada.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    role: "Diseñador",
    content: "La app es hermosa y muy fácil de usar. Las notificaciones motivadoras llegan en el momento perfecto. Ha cambiado mi rutina matinal completamente.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Emprendedora",
    content: "Finalmente encontré una app que entiende mis necesidades. Los ejercicios personalizados se adaptan a cómo me siento cada día. ¡Increíble!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de personas ya están transformando su bienestar emocional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
