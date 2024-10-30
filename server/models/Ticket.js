// Ticket.js
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' },
  response: String,
});

module.exports = mongoose.model('Ticket', TicketSchema);
