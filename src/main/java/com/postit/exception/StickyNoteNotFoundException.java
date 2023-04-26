package com.postit.exception;

public class StickyNoteNotFoundException extends RuntimeException {

    public StickyNoteNotFoundException(Long stickyNoteId) {
        super(String.format("Sticky note with id: %s not found!", stickyNoteId));
    }
}
