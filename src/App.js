import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { InitialPage } from "./pages/InitialPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NewNotePage } from "./pages/NewNotePage";
import { ListNotesPage } from "./pages/ListNotesPage";
import { GetNotePage } from "./pages/GetNotePage";
import { EditNotePage } from "./pages/EditNotePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/note" element={<NewNotePage />} />
        <Route path="/notes" element={<ListNotesPage />} />
        <Route path="/notes/:id" element={<GetNotePage />} />
        <Route path="/edit/:id" element={<EditNotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
