// src/pages/Feed.tsx
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Dumbbell, LogOut } from 'lucide-react';

export function Feed() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar temporal */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="font-bold text-foreground">FitNet</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Hola, {user?.name}
            </span>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto p-6 mt-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            ¡Bienvenido a FitNet!
          </h1>
          <p className="text-muted-foreground">
            Has iniciado sesión correctamente. El feed de publicaciones estará disponible pronto.
          </p>
        </div>
      </div>
    </div>
  );
}