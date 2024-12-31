import { useEffect, useState } from 'react';
import CreateNoteForm from './components/CreateNoteForm';
import Filters from './components/Filters';
import './index.css';
import { fetchNotes, createNote, deleteNote } from './services/note';
import Note from './components/Note';
import { NoteProps } from './types/NoteProps';


interface Filter {
  search: string;
  sortOrder: string;
}

function App() {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [filter, setFilter] = useState<Filter>({ search: "", sortOrder: "desc" });

  useEffect(() => {
    const fetchData = async () => {
      const notes = await fetchNotes(filter);
      setNotes(notes || []);
    };
    fetchData();
  }, [filter]);

  const onCreate = async (note: Omit<NoteProps, 'id' | 'createdAt'>) => {
    await createNote(note);
    const notes = await fetchNotes(filter);
    setNotes(notes || []);
  };

  const onDelete = async (id: number) => {
    await deleteNote(id);
    const notes = await fetchNotes(filter);
    setNotes(notes || []);
  };
``
  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm onCreate={onCreate} />
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <ul className="flex flex-col gap-5 w-1/2">
        {notes.map((note) => (
          <li key={note.id}>
            <Note
              id={note.id}
              title={note.title}
              description={note.description}
              createdAt={note.createdAt}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
