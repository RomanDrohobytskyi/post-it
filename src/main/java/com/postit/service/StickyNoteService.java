package com.postit.service;

import com.postit.entity.StickyNote;
import com.postit.exception.StickyNoteNotFoundException;
import com.postit.repository.StickyNoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
public class StickyNoteService {
    private final StickyNoteRepository stickyNoteRepository;

    public List<StickyNote> getAll() {
        return (List<StickyNote>) stickyNoteRepository.findAll();
    }

    public StickyNote saveOrUpdate(StickyNote stickyNote) {
        return this.stickyNoteRepository.save(stickyNote);
    }

    public void delete(Long id) {
        try {
            StickyNote stickyNote = getById(id);
            this.stickyNoteRepository.delete(stickyNote);
        } catch (NullPointerException | StickyNoteNotFoundException e) {
            log.error("Could not delete sticky note with id: " + id);
        }
    }

    public StickyNote getById(Long id) {
        Objects.requireNonNull(id);
        return this.stickyNoteRepository.findById(id)
                .orElseThrow(() -> new StickyNoteNotFoundException(id));
    }

}
