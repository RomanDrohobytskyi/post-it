package com.postit.controller;


import com.postit.entity.StickyNote;
import com.postit.service.StickyNoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stickyNotes")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class StickyNotesController {
    private final StickyNoteService stickyNoteService;

    @GetMapping("/all")
    public List<StickyNote> getStickyNotes() {
        return stickyNoteService.getAll();
    }

    @PostMapping("/add")
    public StickyNote add(@RequestBody StickyNote stickyNote) {
        return stickyNoteService.saveOrUpdate(stickyNote);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        stickyNoteService.delete(id);
    }
}
