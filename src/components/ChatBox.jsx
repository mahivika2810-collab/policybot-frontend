import { useState } from "react";

export default function ChatBox() {

  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-screen">

      <div className="flex-1 p-6">

        <div className="bg-gray-200 p-4 rounded-xl w-fit">
          What are PM Kisan eligibility criteria?
        </div>

      </div>

      <div className="border-t p-4 flex gap-2">

        <input
          type="text"
          placeholder="Ask your question..."
          className="flex-1 border p-3 rounded-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 rounded-lg">
          Send
        </button>

      </div>

    </div>
  );
}