const express = require('express');
const Ticket = require('../models/Ticket');

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, description, priority } = req.body;
  const ticket = new Ticket({ title, description, priority, status: 'Open' });
  await ticket.save();
  res.json(ticket);
});

router.get('/', async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

router.put('/:id', async (req, res) => {
  const { status, response } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status, response }, { new: true });
  res.json(ticket);
});
router.post('/tickets', async (req, res) => {
  const { title, description, priority } = req.body;
  
  // Insert logic to save the ticket in the database
  const newTicket = new Ticket({
    title,
    description,
    priority,
    status: 'Open',
  });

  try {
    await newTicket.save();
    res.status(201).send(newTicket);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create ticket' });
  }
});

module.exports = router;
