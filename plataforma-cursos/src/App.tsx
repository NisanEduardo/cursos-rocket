import { gql, useQuery } from "@apollo/client";
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { Event } from "./pages/Event";

function App(): JSX.Element {
  return (
    <div>
      <Event />
    </div>
  );
}

export default App;
