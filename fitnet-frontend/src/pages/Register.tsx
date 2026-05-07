// src/pages/Register.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Dumbbell, Mail, Lock, User } from 'lucide-react';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setIsLoading(true);

    try {
      await register(email, password, name);
      navigate('/feed');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al registrarse');
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
          <h1 className="text-2xl font-bold text-foreground">Crear cuenta</h1>
          <p className="text-muted-foreground mt-2">Únete a la comunidad fitness</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={<User className="w-5 h-5" />}
            required
          />
          
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
            placeholder="Contraseña (mínimo 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="w-5 h-5" />}
            required
          />

          <Input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={<Lock className="w-5 h-5" />}
            required
          />

          {error && (
            <div className="p-3 rounded-xl bg-destructive/10 text-destructive text-sm text-center">
              {error}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
            Registrarse
          </Button>
        </form>

        {/* Link to login */}
        <p className="text-center text-muted-foreground mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
}