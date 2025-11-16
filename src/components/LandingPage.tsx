import { Button } from "./ui/button";
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
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="text-6xl mb-4">አ</div>
                    <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-4">
                        Type Amharic the Easy Way
                    </h1>
                    <p className="text-gray-700 mb-6 text-xl">
                        Convert Latin letters to Amharic script instantly.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => onNavigate("playground")}
                            className="gap-2"
                        >
                            Try Playground
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => onNavigate("docs")}
                        >
                            Read Docs
                        </Button>
                    </div>
                </div>
            </div>

            {/* Feature Highlights */}
            <div className="max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-gray-900 text-2xl font-bold mb-2">
                        Powerful Features
                    </h2>
                    <p className="text-gray-700">
                        Everything you need to type in Amharic with ease
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-6 h-6 text-gray-500" />
                            <h3 className="text-gray-900 font-semibold">
                                Auto-Convert
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Words convert to Amharic automatically when you
                            press space
                        </p>
                    </div>

                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Copy className="w-6 h-6 text-gray-500" />
                            <h3 className="text-gray-900 font-semibold">
                                Editable Input
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            You can freely edit your input text, and the output
                            will update automatically so you always see the
                            latest Amharic conversion.
                        </p>
                    </div>

                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Download className="w-6 h-6 text-gray-500" />
                            <h3 className="text-gray-900 font-semibold">
                                Export Ready
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Copy your Amharic text instantly for use
                            anywhere
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                        <div className="bg-gray-100 w-12 h-12 rounded-md flex items-center justify-center mb-3">
                            <Keyboard className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-gray-900 font-semibold mb-1">
                            Simple Input
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Type using your regular keyboard with Latin letters.
                            No complex input methods needed.
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
                            real-time as you type.
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
                            Intuitive romanization system that follows natural
                            pronunciation patterns.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-gray-900 text-2xl font-bold mb-2">
                        Ready to get started?
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Jump into the playground and start typing in Amharic
                        right away.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => onNavigate("playground")}
                        className="gap-2"
                    >
                        Open Playground
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
