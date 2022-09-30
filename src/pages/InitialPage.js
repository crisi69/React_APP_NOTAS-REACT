import CarouselApp from "../components/CarouselApp";
import { useAllNotes } from "../hooks/useAllNotes";
import { SearchNotes } from "../components/ShearchNotes";

export const InitialPage = () => {
  const { notes, loading, error } = useAllNotes();

  if (loading) return <p>Loading Notes</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="PaginaInicio">
      <hr />
      <div>
        <CarouselApp />
      </div>
      <h3>Distintas categorias de Notas como; Viajes, Rutas, Hoteles..</h3>
      <hr />

      <SearchNotes notes={notes} />
    </section>
  );
};
