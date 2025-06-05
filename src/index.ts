import express from 'express';
import { sendEmail } from './emailService';

const app = express();
app.use(express.json());

app.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await sendEmail(to, subject, text);
    res.send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Email failed to send');
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
