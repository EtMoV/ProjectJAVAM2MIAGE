package com.bierrophile.bierrophile.web.controller;
import com.bierrophile.bierrophile.dao.BierreDao;
import com.bierrophile.bierrophile.model.Bierre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class BierreController {

    @Autowired
    private BierreDao bierreDao;

    //Récupérer la liste des bierres
    @GetMapping(value="/Bierres")
    public List<Bierre>listeBierres() throws InterruptedException {

        return bierreDao.findAll();
    }

    //Récupérer la liste des bierres selon un type particulier
    @GetMapping(value="/Bierres/{type}")
    public List<Bierre>listeBierresType(@PathVariable String type) {
        return bierreDao.findByType(type);
    }

    //Ajouter une bierre
    @PostMapping(value = "/Bierre")
    public ResponseEntity<Void> ajouterBierre(@RequestBody Bierre bierre) {


        Bierre bierreAdded =  bierreDao.save(bierre);

        if (bierreAdded == null)
            return ResponseEntity.noContent().build();

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(bierreAdded.getId())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    @DeleteMapping (value = "/Bierre/{id}")
    public void supprimerBierre(@PathVariable int id) {

        bierreDao.deleteById(id);
    }

    @PutMapping (value = "/Bierre")
    public void majBierre(@RequestBody Bierre bierre) {

        bierreDao.save(bierre);
    }
}