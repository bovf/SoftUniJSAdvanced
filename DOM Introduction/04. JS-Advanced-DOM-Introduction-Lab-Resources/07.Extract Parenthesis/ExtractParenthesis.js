function extract(content) {
    const regPattern = /\((\w+|\w+ )+\)/g;
    const text = document.getElementById(content).textContent;
    const matches = text.match(regPattern);
    let result = '';
    for (const match of matches) {
        result += match.slice(1,-1) + `; `;
    }
    return result 
}