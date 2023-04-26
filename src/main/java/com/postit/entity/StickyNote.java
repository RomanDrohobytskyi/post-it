package com.postit.entity;

import com.postit.model.StickyNoteState;
import jakarta.persistence.*;
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import static org.apache.commons.lang3.StringUtils.isNotBlank;

@Entity
@Table(name = "sticky_notes")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StickyNote extends BaseEntity {
    @Column
    @NotNull
    @Size(max = 200)
    private String content;
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private StickyNoteState state = StickyNoteState.DRAFT;

    public boolean wasModified() {
        return state.equals(StickyNoteState.MODIFIED);
    }

    public boolean hasContent() {
        return isNotBlank(this.content);
    }
}
