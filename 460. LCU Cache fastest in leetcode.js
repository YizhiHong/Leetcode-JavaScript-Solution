// Least Frequently Used

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0;

        this._first = null;
        this._map = {};
    }

    _getMapped(key) {
        let mappedEntry = this._map[key];

        if(mappedEntry == null) {
            return null;
        }

        let moveAfter = null;
        if(mappedEntry.groupedLast.ptr.next != null
            && (mappedEntry.counter + 1) === mappedEntry.groupedLast.ptr.next.counter) {
            moveAfter = mappedEntry.groupedLast.ptr.next.groupedLast.ptr;

            let nextNode = mappedEntry.groupedLast.ptr.next;

            if(mappedEntry.groupedFirst.ptr == mappedEntry
                && mappedEntry.next.counter === mappedEntry.counter) {
                mappedEntry.groupedFirst.ptr = mappedEntry.next;
            }
            else if(mappedEntry.groupedLast.ptr == mappedEntry
                && mappedEntry.prev != null
                && mappedEntry.prev.counter === mappedEntry.counter) {
                mappedEntry.groupedLast.ptr = mappedEntry.prev;
            }
            
            mappedEntry.groupedFirst = nextNode.groupedFirst;
            mappedEntry.groupedLast = nextNode.groupedLast;

            mappedEntry.groupedLast.ptr = mappedEntry;
        }
        else {
            if(mappedEntry.groupedLast.ptr != mappedEntry) {
                moveAfter = mappedEntry.groupedLast.ptr;
            }

            if(mappedEntry.groupedFirst.ptr == mappedEntry
                && mappedEntry.next != null
                && mappedEntry.next.counter === mappedEntry.counter) {
                mappedEntry.groupedFirst.ptr = mappedEntry.next;
            }
            else if(mappedEntry.groupedLast.ptr == mappedEntry
                && mappedEntry.prev != null
                && mappedEntry.prev.counter === mappedEntry.counter) {
                mappedEntry.groupedLast.ptr = mappedEntry.prev;
            }

            mappedEntry.groupedFirst = {ptr: mappedEntry};
            mappedEntry.groupedLast = {ptr: mappedEntry};
        }

        if(moveAfter != null) {
            if(mappedEntry == this._first) {
                if(mappedEntry.prev != null) {
                    this._first = mappedEntry.prev;
                }
                else {
                    this._first = mappedEntry.next;
                }
            }

            if(mappedEntry.prev != null) {
                mappedEntry.prev.next = mappedEntry.next;
            }

            if(mappedEntry.next != null) {
                mappedEntry.next.prev = mappedEntry.prev;
            }

            mappedEntry.prev = moveAfter;
            mappedEntry.next = moveAfter.next;

            if(moveAfter.next != null) {
                moveAfter.next.prev = mappedEntry;
            }

            moveAfter.next = mappedEntry;
        }

        mappedEntry.counter++;

        return mappedEntry;
    }

    get(key) {
        if(this.capacity <= 0) {
            return -1;
        }

        let mappedEntry = this._getMapped(key);

        if(mappedEntry == null) {
            return -1;
        }

        return mappedEntry.value;
    }

    put(key, value) {
        if(this.capacity <= 0) {
            return;
        }

        let existingEntry = this._getMapped(key);

        if(existingEntry != null) {
            existingEntry.value = value;
        }
        else {
            let entry = {
                key,
                value,
                next: null,
                prev: null,

                groupedFirst: null,
                groupedLast: null,

                counter: 0
            };
            
            this.count++;

            if(this._first != null
                && this.count > this.capacity) {
                if(this._first.next != null) {
                    this._first.next.prev = null;
                }

                delete this._map[this._first.key];
                this.count--;

                this._first = this._first.next;

                if(this._first != null) {
                    this._first.groupedFirst.ptr = this._first;
                }
            }

            if(this._first == null) {
                entry.groupedLast = {ptr: entry};
                entry.groupedFirst = {ptr: entry};
                this._first = entry;
            }
            else {
                if(this._first.counter === 0) {
                    if(this._first.groupedLast.ptr.next != null) {
                        this._first.groupedLast.ptr.next.prev = entry;
                    }
    
                    entry.next = this._first.groupedLast.ptr.next;
                    entry.prev = this._first.groupedLast.ptr;
    
                    this._first.groupedLast.ptr.next = entry;
                    
                    this._first.groupedLast.ptr = entry;
    
                    entry.groupedFirst = this._first.groupedFirst;
                    entry.groupedLast = this._first.groupedLast;

                    entry.groupedLast.ptr = entry;
                }
                else {
                    this._first.prev = entry;
                    entry.next = this._first;
                    entry.groupedLast = {ptr: entry};
                    entry.groupedFirst = {ptr: entry};
                    this._first = entry;
                }
            }

            this._map[key] = entry;
        }
    }
}

module.exports = LFUCache;

