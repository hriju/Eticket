package com.ticketing.ticket.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.ticketing.ticket.models.Busticket;
import com.ticketing.ticket.repositories.TicketRepository;


import java.util.List;

@RestController
@RequestMapping("api/v1/bustickets")
public class BusticketsController {
    @Autowired
    private TicketRepository ticketRepository;

    @GetMapping
    public List<Busticket> list(){
        return ticketRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Busticket busticket){
        ticketRepository.save(busticket);
    }

    @GetMapping("/{id}")
    public Busticket get(@PathVariable("id") long id) {
      return ticketRepository.getOne(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id){
         ticketRepository.deleteById(id);
    }
}
