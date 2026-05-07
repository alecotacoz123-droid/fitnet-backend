import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';

// Configuración de variables de entorno
dotenv.config();

// Inicializar app
const app = express();

// Puerto
const PORT = process.env.PORT || 5000;

// =========================
// Middlewares
// =========================
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// =========================
// Rutas
// =========================

// Ruta de prueba
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

// Auth routes
app.use('/api/auth', authRoutes);

// =========================
// Iniciar servidor
// =========================
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});