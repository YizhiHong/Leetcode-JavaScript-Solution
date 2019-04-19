var ladderLength = function(beginWord, endWord, wordList) {
    let wordMap = new Map()
    for(let word of wordList){
        for(let i = 0; i < word.length; i++){
            let key = word.substring(0,i) + "*" + word.substring(i+1)
            wordMap.has(key) ? 
                wordMap.get(key).push(word) :                  
                wordMap.set(key, [word])
        }
    }
    let queue = [[beginWord,1]],
        wordSet = new Set()
    
    while (queue.length > 0){
        let [word, count] = queue.shift()
        
        if (word === endWord) return count
        
        if (!wordSet.has(word)){
            wordSet.add(word)
            for(let i = 0; i < word.length; i++){
                let key = word.substring(0,i) + "*" + word.substring(i+1)
                if(!wordMap.has(key)) continue
                for( let neighbors of wordMap.get(key)){
                    queue.push([neighbors,count + 1])
                }
            }
        }
    }
    return 0
};