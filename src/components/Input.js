import { useState } from "react"

export default function Input({createNotes}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const createNewNote = (e) => {
        e.preventDefault();
        const times = new Date().toISOString();
        const data = {
            id: times,
            title: title,
            body: body,
            archived: false,
            createdAt: times,
        }

        createNotes((notes) => [
            ...notes,
            data,
        ]);
        setTitle('');
        setBody('');
    }
    return (
        <>
            <form className="note-input" onSubmit={createNewNote}>
                <h2 className="note-app__body">Buat Catatan Baru</h2>
                <small className="note-input__title__char-limit">Limit Karakter: <span>{50 - title.length}</span></small>
                <input type="text" name="title" className="note-input__title" placeholder="insert a title" value={title} onChange={(e) => setTitle((e.target.value.length <= 50 ? e.target.value : title))} />
                <input type="textarea" name="body" className="note-input__body" placeholder="insert a body" value={body} onChange={(e) => setBody(e.target.value)} />
                <button type="submit" className="note-input">Submit</button>
            </form>
        </>
    )
}