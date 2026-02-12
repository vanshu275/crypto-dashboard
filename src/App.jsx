import React from "react";
import ProfileNav from "./components/ProfileNav";
import SideNav from "./components/SideNav";

const App = () => {
  return (
    <main>
      <div className="flex items-start">
        <SideNav/>
        <ProfileNav />
      </div>
      <section>
        
      </section>
    </main>
  );
};

export default App;
