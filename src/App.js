import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import "./App.css";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

/* 여기서 *은 wildcard의 문자로, 아무 텍스트나 매칭한다는 뜻이다.
 이 라우트 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 
 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 된다. */
export default App;
