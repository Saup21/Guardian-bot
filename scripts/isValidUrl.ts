// function to validate if a string contains a url or not

const isValidUrl = (s: string): string[] => {
    const matchpattern = new RegExp(`(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})`); // Better regex found

    // ([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)? // Previous regex

    let matches: string[] = [];
    let split_s: string[] = s.split(" ");

    split_s.forEach( (check: string) => {
        if(matchpattern.test(check) && check[0] === 'h') {
            matches.push(check);
        }
    });

    return matches;
}

export default isValidUrl;
