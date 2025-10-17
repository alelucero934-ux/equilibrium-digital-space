import { Heart, Brain, Calendar, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Ejercicios diarios",
    description: "Rutinas personalizadas adaptadas a tus necesidades emocionales cada día",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: Brain,
    title: "Apoyo contra la ansiedad",
    description: "Técnicas probadas para gestionar el estrés y encontrar calma mental",
    gradient: "from-secondary to-secondary/70"
  },
  {
    icon: Heart,
    title: "Hábitos saludables",
    description: "Construye una rutina de bienestar sostenible paso a paso",
    gradient: "from-accent to-accent/70"
  },
  {
    icon: Bell,
    title: "Recordatorios motivadores",
    description: "Notificaciones inspiradoras que te acompañan en tu camino",
    gradient: "from-primary via-secondary to-accent"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Todo lo que necesitas para tu bienestar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas diseñadas para ayudarte a mantener tu equilibrio emocional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
