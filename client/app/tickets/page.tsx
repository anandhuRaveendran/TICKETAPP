'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Ticket {
  _id: string;
  title: string;
  description: string;
  status: string;
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function fetchTickets() {
      const { data } = await axios.get('http://localhost:5000/tickets');
      setTickets(data);
    }
    fetchTickets();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Tickets</h1>
      <button><a href='http://localhost:3000/create'>
      Cick here to create Ticket
      </a>
        
      </button>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id} className="p-2 border-b">
            <h2 className="font-bold">{ticket.title}</h2>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
