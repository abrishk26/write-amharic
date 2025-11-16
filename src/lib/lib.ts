import map from "./am.ts";
import type { NodeDict, NodeObj } from "./am.ts";

function find_word(input: string, map: NodeDict) {
    let result = "";
    let i = 0;

    while (i < input.length) {
        let current: NodeDict | NodeObj = map
        let last_value: string | null = null
        let last_index = i

        for (let j = i; j < input.length; j++) {
            const ch = input[j]

            if (!current[ch]) break

            current = current[ch]

            last_value = current.value
            last_index = j

            if (!current.next) break
            current = current.next
        }

        if (last_value) {
            result += last_value
            i = last_index + 1
        } else {
            result += input[i]
            i++
        }
    }

    return result
}

export function find_words(input: string): string[] {
    return input.split(" ").map((word) => find_word(word.toLowerCase(), map))
}
