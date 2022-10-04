import { useAllNotes } from "../hooks/useAllNotes";
import { SearchNotes } from "../components/ShearchNotes";

export const InitialPage = () => {
  const { notes, loading, error } = useAllNotes();

  if (loading) return <p>Loading Notes</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="PaginaInicio">
      <div></div>
      <aside></aside>
      <h3>Different categories of Notes...</h3>
      <h4>Hoteles, Restaurantes, Campings, Rutas.</h4>

      <SearchNotes notes={notes} />
    </section>
  );
};
