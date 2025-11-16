import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { find_words } from "../lib/lib";
import { Button } from "./ui/button";
import { Copy, Trash2, Info } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function Playground() {
  const [inputText, setInputText] = useState(""); // user input
  const [outputText, setOutputText] = useState(""); // processed output

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === " ") {
      const result = find_words(inputText).join(" ");
      setOutputText(result);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    toast.success("Copied to clipboard!");
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    toast.success("Cleared!");
  };

  return (
    <div className="min-h-screen bg-white p-8 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold">Amharic Transliterator</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>Type Amharic text using Latin letters (e.g., "selam" → "ሰላም").</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-gray-600 text-sm">
            Type Amharic in Latin letters and see it transform to Amharic script.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-gray-900 font-semibold">Input</h2>
              <Button variant="outline" size="sm" onClick={handleClear} className="gap-2">
                <Trash2 className="w-4 h-4" />
                Clear
              </Button>
            </div>
            <Textarea
              value={inputText}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type something..."
              className="flex-1 min-h-[400px] font-mono text-sm resize-none"
            />
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-gray-900 font-semibold">Output</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                disabled={!outputText}
                className="gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </div>
            <Textarea
              value={outputText}
              readOnly
              placeholder="Transformed output will appear here..."
              className="flex-1 min-h-[400px] font-mono text-sm resize-none bg-gray-50"
            />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

