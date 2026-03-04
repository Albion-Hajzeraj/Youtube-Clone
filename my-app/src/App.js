import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
