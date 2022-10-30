import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Feed,
  SearchResult,
  ChannelDetails,
  VideoDetails,
} from "../pages/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/results/:item" element={<SearchResult />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/video/:id" element={<VideoDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
