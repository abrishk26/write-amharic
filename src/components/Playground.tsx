import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { find_words } from "../lib/lib";
import { Button } from "./ui/button";
import { Copy, Info, Trash2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "@radix-ui/react-separator";

export function Playground() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
    setOutputText(find_words(text).join(" "));
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
        {/* Header Section */}
        <div className="p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Amharic Transliterator</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>
                    Type Amharic text using Latin letters (e.g., "selam" →
                    "ሰላም").
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-gray-600 text-sm">
            Type Amharic in Latin letters and see it transform to Amharic
            script.
          </p>
        </div>

        {/* Horizontal Separator */}
        <Separator className="h-px bg-gray-200 w-full" />

        {/* Input & Output Section */}
        <div className="flex flex-1 min-h-[500px]">
          {/* Input Panel */}
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-gray-900 font-semibold">Input</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={handleClear}
                className="gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </Button>
            </div>
            <Textarea
              value={inputText}
              onChange={handleChange}
              placeholder="Type something..."
              className="flex-1 font-mono text-sm resize-none min-h-[400px]"
            />
          </div>

          {/* Vertical Separator */}
          <Separator orientation="vertical" className="w-px bg-gray-200" />

          {/* Output Panel */}
          <div className="flex-1 p-6 flex flex-col">
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
              className="flex-1 font-mono text-sm resize-none min-h-[400px] bg-gray-50"
            />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
