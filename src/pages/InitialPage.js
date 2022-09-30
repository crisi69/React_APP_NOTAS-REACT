import CarouselApp from "../components/CarouselApp";
import { useAllNotes } from "../hooks/useAllNotes";
import { SearchNotes } from "../components/ShearchNotes";

export const InitialPage = () => {
  const { notes, loading, error } = useAllNotes();

  if (loading) return <p>Loading Notes</p>;
  if (error) return <p>{error}</p>;
  console.log(notes);
  return (
    <section className="PaginaInicio">
      <hr />
      <h1>Tu lista de notas personal.</h1>
      <div>
        <CarouselApp />
      </div>
      <h3>Distintas categorias de Notas como; Viajes, Rutas, Hoteles..</h3>
      <hr />
      <h1>Search Notes</h1>

      <SearchNotes notes={notes} />
    </section>
  );
};
