package com.ticketing.ticket.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import com.ticketing.ticket.models.Busticket;

public interface TicketRepository extends JpaRepository<Busticket, Long>{
}
