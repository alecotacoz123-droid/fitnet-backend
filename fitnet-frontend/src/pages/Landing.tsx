// src/pages/Landing.tsx
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Dumbbell, Users, Brain, Trophy, Activity, Heart } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">FitNet</span>
          </div>
          <div className="flex gap-3">
            <Link to="/login">
              <Button variant="secondary">Iniciar Sesión</Button>
            </Link>
            <Link to="/register">
              <Button>Registrarse</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Tu comunidad fitness con
            <span className="text-primary"> inteligencia artificial</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conecta, entrena y mejora tu rendimiento con FitNet. 
            Comparte tus logros, recibe acompañamiento personalizado y 
            mantén la motivación con nuestra comunidad.
          </p>
          <Link to="/register">
            <Button size="lg" className="text-lg px-8 py-4">
              Comenzar Gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir FitNet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2026 FitNet - Red Social Fitness con IA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Comunidad Activa",
    description: "Conecta con personas que comparten tus mismos objetivos fitness."
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Asistente IA",
    description: "Chatbot inteligente que te ayuda con rutinas y motivación 24/7."
  },
  {
    icon: <Trophy className="w-6 h-6 text-primary" />,
    title: "Gamificación",
    description: "Gana puntos, sube de nivel y desbloquea logros por tu constancia."
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "Seguimiento Personalizado",
    description: "Visualiza tu progreso con gráficas y estadísticas detalladas."
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Acompañamiento Digital",
    description: "Recibe apoyo constante para mantener la adherencia al entrenamiento."
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-primary" />,
    title: "Contenido Fitness",
    description: "Comparte y descubre rutinas, ejercicios y tips de la comunidad."
  },
];