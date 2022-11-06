import React from "react";
import styled from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
function App() {
  return (
    <BrowserRouter>
      <MainTitleText>찬웅's Blog</MainTitleText>
      <Routes>
        <Route index element = {<MainPage/>} />

        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
