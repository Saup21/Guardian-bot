// function to validate if a string contains a url or not

const isValidUrl = (s: string) => {
    const matchpattern = new RegExp(`([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?`);

    // /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm

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
