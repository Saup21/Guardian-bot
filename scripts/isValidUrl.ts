// function to validate if a string contains a url or not

const isValidUrl = (s: string) => {
    const matchpattern = new RegExp(`([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?`);

    let matches: string[] = [];
    let split_s: string[] = s.split(" ");

    split_s.forEach( (check: string) => {
        if(matchpattern.test(check)) {
            matches.push(check);
        }
    });

    return matches;
}

export default isValidUrl;
