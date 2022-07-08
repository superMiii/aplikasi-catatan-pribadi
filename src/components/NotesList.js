import Card from "./Card";

export default function NotesList({notes, setNotes}) {
    return (
        <>
        <div>
            <h2 className="note-app__body">Semua Catatan</h2>
        </div>
        {notes.length > 0 ? (
        <div className="notes-list">
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
        ) : <div className="notes-list"><small className="notes-list__empty-message">Tidak ada catatan</small></div>}
        </>
    )
}