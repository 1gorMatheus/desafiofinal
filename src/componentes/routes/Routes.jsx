import { Route, BrowserRouter, Routes } from "react-router-dom";
import GenreMovie from "../Main/GenreMovie";
import Main from './../Main/Main'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<GenreMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
