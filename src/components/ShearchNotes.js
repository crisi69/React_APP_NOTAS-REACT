import { Note } from "../components/Note";
import { useAllNotes } from "../hooks/useAllNotes";
import { useState } from "react";

export const SearchNotes = () => {
  const { notes } = useAllNotes();
  const [search, setSearch] = useState("");

  const results = !search
    ? notes
    : notes.filter(
        (data) =>
          data.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
          data.place.toLowerCase().includes(search.toLocaleLowerCase()) ||
          data.category.toLowerCase().includes(search.toLocaleLowerCase()) ||
          data.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
          data.createdAt.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Notes"
        className="inputSearchNotes"
      ></input>

      <ul className="ulsearch">
        {results.map((note) => (
          <li key={note.id} className="liSearch">
            <Note note={note}></Note>
          </li>
        ))}
      </ul>
    </>
  );
};
