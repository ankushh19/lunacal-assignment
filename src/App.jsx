import React from "react";
import { Gallery, Info } from "./components";

function App() {
  return (
    <section className="h-screen w-screenc flex justify-center items-center gap-10 px-14 bg-[#202328] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]">
      <div className="empty h-[75%] w-[40%] bg-zinc-500 rounded-md"></div>
      <div>
        <Info />
        <Gallery />
      </div>
    </section>
  );
}

export default App;
