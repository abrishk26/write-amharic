export type NodeObj = { value: string; next: NodeDict | null };
export type NodeDict = { [key: string]: NodeObj };

let map: NodeDict = {
  h: {
    value: "ህ",
    next: {
      a: {
        value: "ሀ",
        next: {
          "'": {
            value: "ሃ",
            next: {
              "'": {
                value: "ሐ",
                next: {
                  "'": {
                    value: "ሓ",
                    next: {
                      "'": {
                        value: "ኀ",
                        next: { "'": { value: "ኃ", next: null } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      u: {
        value: "ሁ",
        next: {
          "'": { value: "ሑ", next: { "'": { value: "ኁ", next: null } } },
          "a": { value: "ኋ", next: null },
        },
      },
      i: {
        value: "ሂ",
        next: {
          "'": { value: "ሒ", next: { "'": { value: "ኂ", next: null } } },
        },
      },
      e: {
        value: "ሄ",
        next: {
          "'": { value: "ሔ", next: { "'": { value: "ኄ", next: null } } },
        },
      },
      "'": { value: "ሕ", next: { "'": { value: "ኅ", next: null } } },
      o: {
        value: "ሆ",
        next: {
          "'": { value: "ሖ", next: { "'": { value: "ኆ", next: null } } },
        },
      },
    },
  },

  l: {
    value: "ል",
    next: {
      e: { value: "ለ", next: { "'": { value: "ሌ", next: null } } },
      u: { value: "ሉ", next: { a: { value: "ሏ", next: null } } },
      i: { value: "ሊ", next: null },
      a: { value: "ላ", next: null },
      o: { value: "ሎ", next: null },
    },
  },

  m: {
    value: "ም",
    next: {
      e: { value: "መ", next: { "'": { value: "ሜ", next: null } } },
      u: { value: "ሙ", next: { a: { value: "ሟ", next: null } } },
      i: { value: "ሚ", next: { e: { value: "ሜ", next: null } } },
      a: { value: "ማ", next: null },
      o: { value: "ሞ", next: null },
    },
  },

  s: {
    value: "ሥ",
    next: {
      e: {
        value: "ሠ",
        next: {
          "'": {
            value: "ሤ",
            next: {
              "'": { value: "ሰ", next: { "'": { value: "ሴ", next: null } } },
            },
          },
        },
      },
      u: {
        value: "ሡ",
        next: {
          "'": { value: "ሱ", next: { a: { value: "ሷ", next: null } } },
        },
      },
      i: { value: "ሢ", next: { "'": { value: "ሲ", next: null } } },
      a: { value: "ሣ", next: { "'": { value: "ሳ", next: null } } },
      "'": { value: "ስ", next: null },
      o: { value: "ሦ", next: { "'": { value: "ሶ", next: null } } },
    },
  },

  x: {
    value: "ሽ",
    next: {
      e: { value: "ሸ", next: { "'": { value: "ሼ", next: null } } },
      u: { value: "ሹ", next: { a: { value: "ሿ", next: null } } },
      i: { value: "ሺ", next: null },
      a: { value: "ሻ", next: null },
      o: { value: "ሾ", next: null },
    },
  },

  q: {
    value: "ቅ",
    next: {
      e: { value: "ቀ", next: { "'": { value: "ቄ", next: null } } },
      u: {
        value: "ቁ",
        next: {
          e: { value: "ቈ", next: null },
          u: { value: "ቍ", next: null },
          i: {
            value: "ቊ",
            next: {
              e: { value: "ቌ", next: null },
            },
          },
          a: { value: "ቋ", next: null },
        },
      },
      i: {
        value: "ቂ",
        next: null,
      },
      a: { value: "ቃ", next: null },
      o: { value: "ቆ", next: null },
    },
  },

  b: {
    value: "ብ",
    next: {
      e: { value: "በ", next: { "'": { value: "ቤ", next: null } } },
      u: {
        value: "ቡ",
        next: {
          a: { value: "ቧ", next: null },
        },
      },
      i: {
        value: "ቢ",
        next: null,
      },
      a: { value: "ባ", next: null },
      o: { value: "ቦ", next: null },
    },
  },

  t: {
    value: "ት",
    next: {
      e: {
        value: "ተ",
        next: {
          "'": { value: "ቴ", next: null },
          e: {
            value: "ጠ",
            next: {
              "'": { value: "ጤ", next: null },
            },
          },
        },
      },

      u: {
        value: "ቱ",
        next: {
          a: { value: "ቷ", next: null },
          u: {
            value: "ጡ",
            next: {
              a: { value: "ጧ", next: null },
            },
          },
        },
      },
      i: {
        value: "ቲ",
        next: {
          i: {
            value: "ጢ",
            next: {
              "'": { value: "ጥ", next: null },
            },
          },
        },
      },
      a: {
        value: "ታ",
        next: {
          a: { value: "ጣ", next: null },
        },
      },
      o: {
        value: "ቶ",
        next: {
          o: { value: "ጦ", next: null },
        },
      },

      s: {
        value: "ጽ",
        next: {
          e: {
            value: "ጸ",
            next: {
              "'": { value: "ጼ", next: null },
            },
          },
          u: {
            value: "ጹ",
            next: {
              a: { value: "ጿ", next: null },
            },
          },
          i: {
            value: "ጺ",
            next: null,
          },
          a: { value: "ጻ", next: null },
          o: { value: "ጾ", next: null },
        },
      },
    },
  },

  n: {
    value: "ን",
    next: {
      e: { value: "ነ", next: { "'": { value: "ኔ", next: null } } },
      u: {
        value: "ኑ",
        next: {
          a: { value: "ኗ", next: null },
        },
      },
      i: {
        value: "ኒ",
        next: null,
      },
      a: { value: "ና", next: null },
      o: { value: "ኖ", next: null },
    },
  },

  g: {
    value: "ግ",
    next: {
      e: {
        value: "ገ",
        next: {
          "'": { value: "ጌ", next: null },
        },
      },
      u: {
        value: "ጉ",
        next: {
          a: { value: "ጓ", next: null },
        },
      },
      i: {
        value: "ጊ",
        next: null,
      },
      a: { value: "ጋ", next: null },
      o: { value: "ጎ", next: null },
      n: {
        value: "ኝ",
        next: {
          e: { value: "ኘ", next: { "'": { value: "ኜ", next: null } } },
          u: {
            value: "ኙ",
            next: {
              a: { value: "ኟ", next: null },
            },
          },
          i: {
            value: "ኚ",
            next: null,
          },
          a: { value: "ኛ", next: null },
          o: { value: "ኞ", next: null },
        },
      },
    },
  },

  r: {
    value: "ር",
    next: {
      e: {
        value: "ረ",
        next: {
          "'": { value: "ሬ", next: null },
        },
      },
      u: {
        value: "ሩ",
        next: {
          a: { value: "ሯ", next: null },
        },
      },
      i: {
        value: "ሪ",
        next: null,
      },
      a: { value: "ራ", next: null },
      o: { value: "ሮ", next: null },
    },
  },

  w: {
    value: "ው",
    next: {
      e: {
        value: "ወ",
        next: {
          "'": { value: "ዌ", next: null },
        },
      },
      u: { value: "ዉ", next: null },
      i: {
        value: "ዊ",
        next: null,
      },
      a: { value: "ዋ", next: null },
      o: { value: "ዎ", next: null },
    },
  },

  d: {
    value: "ድ",
    next: {
      e: {
        value: "ደ",
        next: {
          "'": { value: "ዴ", next: null },
        },
      },
      u: {
        value: "ዱ",
        next: {
          a: { value: "ዷ", next: null },
        },
      },
      i: {
        value: "ዲ",
        next: null,
      },
      a: { value: "ዳ", next: null },
      o: { value: "ዶ", next: null },
    },
  },

  a: {
    value: "አ",
    next: {
      e: {
        value: "እ",
        next: {
          "'": { value: "ኤ", next: null },
        },
      },
      u: { value: "ኡ", next: null },
      i: {
        value: "ኢ",
        next: null,
      },
      "'": { value: "ኣ", next: null },
      o: { value: "ኦ", next: null },
    },
  },
  k: {
    value: "ክ",
    next: {
      e: {
        value: "ከ",
        next: {
          "'": { value: "ኬ", next: null },
        },
      },
      u: {
        value: "ኩ",
        next: {
          e: { value: "ኰ", next: null },
          E: { value: "ኰ", next: null },
          u: { value: "ኵ", next: null },
          U: { value: "ኵ", next: null },
          i: {
            value: "ኲ",
            next: {
              e: { value: "ኴ", next: null },
              E: { value: "ኴ", next: null },
            },
          },
          I: {
            value: "ኲ",
            next: {
              e: { value: "ኴ", next: null },
              E: { value: "ኴ", next: null },
            },
          },
          a: { value: "ኳ", next: null },
          A: { value: "ኳ", next: null },
        },
      },
      i: {
        value: "ኪ",
        next: null,
      },
      a: { value: "ካ", next: null },
      o: { value: "ኮ", next: null },
    },
  },
  z: {
    value: "ዝ",
    next: {
      e: {
        value: "ዘ",
        next: {
          "'": { value: "ዜ", next: null },
        },
      },
      u: {
        value: "ዙ",
        next: {
          a: { value: "ዟ", next: null },
        },
      },
      i: {
        value: "ዚ",
        next: null,
      },
      a: { value: "ዛ", next: null },
      o: { value: "ዞ", next: null },
    },
  },
  y: {
    value: "ይ",
    next: {
      e: {
        value: "የ",
        next: {
          "'": { value: "ዬ", next: null },
        },
      },
      u: { value: "ዩ", next: null },
      i: {
        value: "ዪ",
        next: null,
      },
      a: { value: "ያ", next: null },
      o: { value: "ዮ", next: null },
    },
  },

  j: {
    value: "ጅ",
    next: {
      e: {
        value: "ጀ",
        next: {
          "'": { value: "ጄ", next: null },
        },
      },
      u: {
        value: "ጁ",
        next: {
          a: { value: "ጇ", next: null },
        },
      },
      i: {
        value: "ጂ",
        next: null,
      },
      a: { value: "ጃ", next: null },
      o: { value: "ጆ", next: null },
    },
  },

  c: {
    value: "ጭ",
    next: {
      e: {
        value: "ጨ",
        next: {
          "'": { value: "ጬ", next: null },
        },
      },
      h: {
        value: "ች",
        next: {
          e: { value: "ቸ", next: { "'": { value: "ቼ", next: null } } },
          u: {
            value: "ቹ",
            next: {
              a: { value: "ቿ", next: null },
            },
          },
          i: {
            value: "ቺ",
            next: null,
          },
          a: { value: "ቻ", next: null },
          o: { value: "ቾ", next: null },
        },
      },
      u: {
        value: "ጩ",
        next: {
          a: { value: "ጯ", next: null },
        },
      },
      i: {
        value: "ጪ",
        next: null,
      },
      a: { value: "ጫ", next: null },
      o: { value: "ጮ", next: null },
    },
  },

  f: {
    value: "ፍ",
    next: {
      e: {
        value: "ፈ",
        next: {
          "'": { value: "ፌ", next: null },
        },
      },
      u: {
        value: "ፉ",
        next: {
          a: { value: "ፏ", next: null },
        },
      },
      i: {
        value: "ፊ",
        next: null,
      },
      a: { value: "ፋ", next: null },
      o: { value: "ፎ", next: null },
    },
  },
  p: {
    value: "ፕ",
    next: {
      e: {
        value: "ፐ",
        next: {
          "'": { value: "ፔ", next: null },
        },
      },
      u: {
        value: "ፑ",
        next: {
          a: { value: "ፗ", next: null },
        },
      },
      i: {
        value: "ፒ",
        next: null,
      },
      a: { value: "ፓ", next: null },
      o: { value: "ፖ", next: null },
    },
  },
  ".": { value: "።", next: null },
  ":": {
    value: "፡",
    next: {
      ":": { value: "።", next: { ":": { value: ":", next: null } } },
      ",": { value: "፥", next: null },
    },
  },
  ",": {
    value: "፣",
    next: {
      ",": { value: "፥", next: { ",": { value: ",", next: null } } },
    },
  },
  ";": { value: "፤", next: { ";": { value: ";", next: null } } },
  "<": {
    value: "‹",
    next: {
      "<": { value: "«", next: { "<": { value: "<", next: null } } },
    },
  },
  ">": {
    value: "›",
    next: {
      ">": { value: "»", next: { ">": { value: ">", next: null } } },
    },
  },
};

export default map;
