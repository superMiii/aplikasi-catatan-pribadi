import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import NotesList from "./components/NotesList";
import { getInitialData } from "./utils";

export default function App() {
    const [notes, setNotes] = useState(getInitialData());
    return (
        <>
            <Header />
            <main>
                <Input createNotes={setNotes} />
                <NotesList notes={notes} setNotes={setNotes} />
            </main>
        </>
    )
} 