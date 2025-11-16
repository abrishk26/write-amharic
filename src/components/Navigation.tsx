import { Button } from './ui/button';

interface NavigationProps {
  currentPage: 'home' | 'docs' | 'playground';
  onNavigate: (page: 'home' | 'docs' | 'playground') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gray-900">አ</div>
            <span className="font-semibold text-gray-900 text-lg">
              Amharic Transliterator
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
            >
              Home
            </Button>
            <Button
              size="sm"
              variant={currentPage === 'docs' ? 'default' : 'ghost'}
              onClick={() => onNavigate('docs')}
            >
              Docs
            </Button>
            <Button
              size="sm"
              variant={currentPage === 'playground' ? 'default' : 'ghost'}
              onClick={() => onNavigate('playground')}
            >
              Playground
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

