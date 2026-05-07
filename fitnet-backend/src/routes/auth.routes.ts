import { Router } from 'express';

const router = Router();

router.post('/register', (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    body: req.body,
  });
});

export default router;