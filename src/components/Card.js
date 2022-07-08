import { showFormattedDate } from "../utils";

export default function Card({ id, title, createdAt, body, action }) {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));

  return (
    <article id={id} className="note-item note-item__content">
      <header className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <small className="note-item__date">{showFormattedDate(createdAt)}</small>
        <p className="note-item__body">{body}</p>
      </header>
      <footer className="note-item__action">
        <button className="note-item__delete-button" type='button' onClick={() => deleteNote(id)}>delete</button>
      </footer>
    </article>
  );
};