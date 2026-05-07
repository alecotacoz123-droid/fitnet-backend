// src/pages/Login.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Dumbbell, Mail, Lock } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/feed');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Dumbbell className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Bienvenido a FitNet</h1>
          <p className="text-muted-foreground mt-2">Inicia sesión para continuar</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="w-5 h-5" />}
            required
          />
          
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="w-5 h-5" />}
            required
          />

          {error && (
            <div className="p-3 rounded-xl bg-destructive/10 text-destructive text-sm text-center">
              {error}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
            Iniciar Sesión
          </Button>
        </form>

        {/* Link to register */}
        <p className="text-center text-muted-foreground mt-6">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-primary hover:underline">
            Regístrate aquí
          </Link>
        </p>

        {/* Demo credentials hint (solo para testing) */}
        <div className="mt-8 p-4 rounded-xl bg-card border border-border">
          <p className="text-xs text-muted-foreground text-center">
            Demo: test@fitnet.com / 123456
          </p>
        </div>
      </div>
    </div>
  );
}