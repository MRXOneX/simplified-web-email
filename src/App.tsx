import { useState } from "react";
// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? "dark" : ""} h-full`}>
      <div className="bg-[#F6F7F8] h-full dark:bg-[#19191A] ">
        <Header isDark={isDark} />
        <Sidebar setIsDark={setIsDark} isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
