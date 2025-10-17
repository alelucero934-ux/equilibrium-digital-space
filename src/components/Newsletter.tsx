import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu email",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Gracias por unirte!",
      description: "Te enviaremos información sobre el lanzamiento de la beta",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-1">
          <div className="bg-background rounded-3xl p-12 md:p-16">
            <div className="text-center space-y-6">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Únete a la beta
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Sé de los primeros en experimentar Equilibrio. 
                Recibe acceso anticipado y ayúdanos a crear la mejor app de bienestar mental.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 border-2 border-primary/20 focus:border-primary"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all duration-300"
                >
                  Unirme
                </Button>
              </form>

              <p className="text-sm text-muted-foreground">
                No spam, solo actualizaciones importantes sobre Equilibrio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
