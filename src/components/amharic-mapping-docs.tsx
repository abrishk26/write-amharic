'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { NodeDict } from '@/lib/am';


interface MappingEntry {
  sequence: string;
  amharic: string;
}

/**
 * Recursively traverse the nested node structure and collect all mappings
 * Returns an array of {sequence, amharic} pairs
 */
function extractMappings(
  nodeDict: NodeDict | null,
  prefix: string = ''
): MappingEntry[] {
  if (!nodeDict) return [];

  const mappings: MappingEntry[] = [];

  for (const [key, node] of Object.entries(nodeDict)) {
    const currentSequence = prefix + key;

    // Add the current node's value as a mapping
    mappings.push({
      sequence: currentSequence,
      amharic: node.value,
    });

    // Recursively process children
    if (node.next) {
      mappings.push(...extractMappings(node.next, currentSequence));
    }
  }

  return mappings;
}

/**
 * Groups mappings by their first character (consonant)
 */
function groupMappingsByConsonant(mappings: MappingEntry[]): Record<string, MappingEntry[]> {
  const grouped: Record<string, MappingEntry[]> = {};

  for (const mapping of mappings) {
    const consonant = mapping.sequence[0];
    if (!grouped[consonant]) {
      grouped[consonant] = [];
    }
    grouped[consonant].push(mapping);
  }

  return grouped;
}

interface AmharicMappingDocsProps {
  data: NodeDict;
  title?: string;
}

function CollapsibleConsonantSection({ 
  consonant, 
  mappings 
}: { 
  consonant: string; 
  mappings: MappingEntry[] 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card transition-all duration-300 hover:border-accent">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-card hover:bg-secondary transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-mono font-bold text-slate-900">"{consonant}"</span>
          <span className="text-xs text-muted-foreground">({mappings.length} mappings)</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-accent transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-0 bg-card border-t border-border">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="py-3 px-4 text-foreground font-semibold text-xs uppercase tracking-wide">ASCII Sequence</th>
                  <th className="py-3 px-4 text-foreground font-semibold text-xs uppercase tracking-wide">Amharic Letter</th>
                  <th className="py-3 px-4 text-foreground font-semibold text-xs uppercase tracking-wide text-right">Length</th>
                </tr>
              </thead>
              <tbody>
                {mappings.map((mapping, idx) => (
                  <tr
                    key={`${mapping.sequence}-${idx}`}
                    className="border-b border-border hover:bg-secondary transition-colors duration-150"
                  >
                    <td className="py-3 px-4 font-mono text-slate-900 text-base font-semibold">
                      {mapping.sequence}
                    </td>
                    <td className="py-3 px-4 text-base font-extrabold text-slate-900">
                      {mapping.amharic}
                    </td>
                    <td className="py-3 px-4 text-right text-muted-foreground text-sm">
                      {mapping.sequence.length}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export function AmharicMappingDocs({ data, title = "ASCII to Amharic Mapping" }: AmharicMappingDocsProps) {
  const mappings = extractMappings(data);
  const groupedMappings = groupMappingsByConsonant(mappings);

  const sortedConsonants = Object.keys(groupedMappings);

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3 tracking-tight">
              {title}
            </h1>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Complete ASCII sequence to Amharic letter mapping reference
          </p>
        </div>

        <section className="mb-12 p-6 md:p-8 bg-secondary rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">About This Mapping</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This documentation provides a comprehensive reference for the ASCII to Amharic letter transliteration system. Each consonant group contains all possible ASCII sequences that map to Amharic characters.
            </p>
            <p>
              <span className="text-foreground font-semibold">How it works:</span> When you type an ASCII sequence (e.g., "a", "aa", "e"), the system matches it against the mapping table and returns the corresponding Amharic letter. Longer sequences are matched first, allowing for both single-character and multi-character mappings.
            </p>
            <p>
              <span className="text-foreground font-semibold">Browsing:</span> Click on any consonant below to expand its mapping table and see all the ASCII sequences that produce Amharic letters for that consonant.
            </p>
          </div>
        </section>

        <div className="mb-12 p-6 bg-secondary rounded-lg border border-border">
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Total Mappings</p>
              <p className="text-4xl font-bold text-white">{mappings.length}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Consonants</p>
              <p className="text-4xl font-bold text-white">{sortedConsonants.length}</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Consonant Mappings</h2>
          <div className="space-y-2">
            {sortedConsonants.map((consonant) => {
              const consonantMappings = groupedMappings[consonant];
              return (
                <CollapsibleConsonantSection
                  key={consonant}
                  consonant={consonant}
                  mappings={consonantMappings}
                />
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
