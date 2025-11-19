import { AmharicMappingDocs } from "./amharic-mapping-docs";
import map from "../lib/am";
import { find_words } from "@/lib/lib";
import { Separator } from "@radix-ui/react-separator";

function ExampleCard({ ascii, amharic }: { ascii: string; amharic: string }) {
  return (
    <div className="group bg-white rounded-lg p-5 border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all flex flex-col gap-2">
      <div className="font-mono text-sm text-gray-700 font-medium">{ascii}</div>
      <Separator className="h-px bg-gray-200 w-full" />
      <div className="text-lg font-bold text-gray-900">{amharic}</div>
    </div>
  );
}

export function DocsPage() {
  const examples = [
    { ascii: "selam", amharic: find_words("selam").join(" ") },
    {
      ascii: "tee'na ystii'lgn",
      amharic: find_words("tee'na ystii'lgn").join(" "),
    },
    { ascii: "amharik", amharic: find_words("amharik").join(" ") },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-50">
        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Amharic Transliterator
          </h1>
          <Separator className="h-px w-24 bg-gray-300 mx-auto mb-4" />
          <p className="text-lg text-gray-700">
            Complete documentation for ASCII to Amharic character mapping
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-0 px-6 py-12 space-y-12">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Introduction
          </h2>
          <Separator className="h-px w-16 bg-gray-300 mb-4" />
          <p className="text-gray-700 leading-relaxed">
            The Amharic Transliterator allows you to type Amharic text using
            Latin letters (ASCII), which are automatically converted to Amharic
            script.
          </p>
        </section>

        {/* How It Works Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <Separator className="h-px w-16 bg-gray-300 mb-4" />
          <p className="text-gray-700 leading-relaxed">
            The transliterator uses a romanization system where Latin letters
            represent Amharic sounds.
          </p>
        </section>

        {/* Character Guide Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Character Guide
          </h2>
          <Separator className="h-px w-16 bg-gray-300 mb-4" />
          <AmharicMappingDocs data={map} />
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Examples</h2>
          <Separator className="h-px w-16 bg-gray-300 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {examples.map((example) => (
              <ExampleCard
                key={example.ascii}
                ascii={example.ascii}
                amharic={example.amharic}
              />
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="p-6 rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3 text-lg">
            💡 Pro Tips
          </h3>
          <Separator className="h-px bg-gray-200 mb-4" />
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3 items-center">
              <span className="font-bold text-gray-500">•</span>
              <span>Use the expandable consonant tables above.</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="font-bold text-gray-500">•</span>
              <span>Longer ASCII sequences are matched first.</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="font-bold text-gray-500">•</span>
              <span>
                Type ASCII sequences and space to see real-time conversion.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
