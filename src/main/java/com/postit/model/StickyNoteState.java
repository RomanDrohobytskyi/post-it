package com.postit.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StickyNoteState {
    DRAFT(1),
    NEW(2),
    MODIFIED(3),
    DELETED(4);

    private final int stateId;
}
