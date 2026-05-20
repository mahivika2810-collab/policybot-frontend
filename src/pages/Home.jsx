import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import CitationPanel from "../components/CitationPanel";

export default function Home() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">
        <ChatBox />
      </div>

      <CitationPanel />

    </div>
  );
}