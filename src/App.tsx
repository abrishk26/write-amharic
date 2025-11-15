import { useState } from "react";
import { Textarea } from "./components/ui/textarea";
import { find_words } from "./lib/lib";

export default function App() {
  const [liveText, setLiveText] = useState("");       // user input
  const [processedText, setProcessedText] = useState(""); // processed output

  // update live text
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLiveText(e.target.value);
  };

  // process text on space
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === " ") {
      const result = find_words(liveText).join(" ");
      setProcessedText(result);
    }
  };

  return (
    <div className="space-y-4">
      {/* User input */}
      <Textarea
        placeholder="Type here..."
        value={liveText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="h-40"
      />

      {/* Processed output */}
      <Textarea
        value={processedText}
        readOnly
        className="h-40 bg-gray-50 text-gray-700"
      />
    </div>
  );
}
