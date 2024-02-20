interface KeyValuePair<K, V> extends Array<K | V> {
    0: K,
    1: V
}

let myTuple: [number, string] = [1, 'sample']

let myTuple1: KeyValuePair<number, string> = [1, 'sample']
