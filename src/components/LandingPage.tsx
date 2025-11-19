import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import {
    ArrowRight,
    BookOpen,
    Copy,
    Download,
    Keyboard,
    Sparkles,
    Zap,
} from "lucide-react";

interface LandingPageProps {
    onNavigate: (page: "docs" | "playground") => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-8 py-16 text-center">
                <div className="text-6xl mb-4">አ</div>

                {/* Decorative Separator */}
                <Separator className="h-px w-24 bg-gray-300 mx-auto mb-4" />

                <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-2">
                    Type Amharic the Easy Way
                </h1>

                {/* Decorative Separator */}
                <Separator className="h-px w-24 bg-gray-300 mx-auto mb-6" />

                <p className="text-gray-700 mb-6 text-xl">
                    Convert Latin letters to Amharic script instantly.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <Button
                        size="lg"
                        onClick={() => onNavigate("playground")}
                        className="gap-2"
                    >
                        Try Playground <ArrowRight className="w-4 h-4" />
                    </Button>

                    {/* Vertical separator between buttons */}
                    <Separator
                        orientation="vertical"
                        className="h-6 w-px bg-gray-300"
                    />

                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => onNavigate("docs")}
                    >
                        Read Docs
                    </Button>
                </div>
            </div>

            {/* Section Separator */}
            <Separator className="my-12 h-px bg-gray-200" />

            {/* Feature Highlights */}
            <div className="max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-gray-900 text-2xl font-bold mb-2">
                        Powerful Features
                    </h2>
                    <Separator className="h-px w-16 bg-gray-300 mx-auto mb-2" />
                    <p className="text-gray-700">
                        Everything you need to type in Amharic with ease
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-6 h-6 text-gray-500" />
                            <h3 className="text-gray-900 font-semibold">
                                Auto-Convert
                            </h3>
                        </div>
                        <Separator className="h-px bg-gray-100" />
                        <p className="text-gray-600 text-sm">
                            Words convert to Amharic automatically when you
                            press space
                        </p>
                    </div>

                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Copy className="w-6 h-6 text-gray-500" />
                            <h3 className="text-gray-900 font-semibold">
                                Editable Input
                            </h3>
                        </div>
                        <Separator className="h-px bg-gray-100" />
                        <p className="text-gray-600 text-sm">
                            Edit freely and see instant conversion updates.
                        </p>
                    </div>

                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Download className="w-6 h-6 text-gray-500" />
                            <h3 className="text-gray-900 font-semibold">
                                Export Ready
                            </h3>
                        </div>
                        <Separator className="h-px bg-gray-100" />
                        <p className="text-gray-600 text-sm">
                            Copy your Amharic text instantly for use anywhere
                        </p>
                    </div>
                </div>

                {/* Section Separator */}
                <Separator className="my-12 h-px bg-gray-200" />

                {/* More Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                        <div className="bg-gray-100 w-12 h-12 rounded-md flex items-center justify-center mb-3">
                            <Keyboard className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-gray-900 font-semibold mb-1">
                            Simple Input
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Type using your regular keyboard with Latin letters.
                        </p>
                    </div>

                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                        <div className="bg-gray-100 w-12 h-12 rounded-md flex items-center justify-center mb-3">
                            <Zap className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-gray-900 font-semibold mb-1">
                            Instant Conversion
                        </h3>
                        <p className="text-gray-600 text-sm">
                            See your text transform to Amharic script in
                            real-time.
                        </p>
                    </div>

                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                        <div className="bg-gray-100 w-12 h-12 rounded-md flex items-center justify-center mb-3">
                            <BookOpen className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-gray-900 font-semibold mb-1">
                            Easy to Learn
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Intuitive romanization system following natural
                            pronunciation.
                        </p>
                    </div>
                </div>

                {/* Section Separator */}
                <Separator className="my-12 h-px bg-gray-200" />

                {/* CTA Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-gray-900 text-2xl font-bold mb-2">
                        Ready to get started?
                    </h2>
                    <Separator className="h-px w-16 bg-gray-300 mx-auto mb-4" />
                    <p className="text-gray-700 mb-4">
                        Jump into the playground and start typing in Amharic
                        right away.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => onNavigate("playground")}
                        className="gap-2"
                    >
                        Open Playground <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
