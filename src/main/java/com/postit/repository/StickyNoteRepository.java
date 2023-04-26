package com.postit.repository;

import com.postit.entity.StickyNote;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StickyNoteRepository extends CrudRepository<StickyNote, Long> {
}
