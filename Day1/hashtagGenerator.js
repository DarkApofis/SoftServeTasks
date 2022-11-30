function generateHashtag (str) {
    if(str.trim() === "") return false
    const arrayStr = str.split(" ")
    const hashtag = `#${arrayStr
        .filter(word => word != "")
        .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join("")}`
    if(hashtag.length > 140) return false
    return hashtag
}