export const makeStringShort = (str: string, length: number) => {
    if (str.length > length) {
        return str.slice(0, length) + '...';
    }
    return str;
};


export const convertor3000 = (str: string | undefined): string[][] => {
    if (!str) {
        return []
    }
    let arr: string[][] = str.split('\n').map(line =>
        line
            .replace(/\d+\)/, "")
            .split('-')
            .map(e => e.replace(/_/g, '-').trim())
    );

    for (let i = 0; i < arr.length; i++) {
        const ran = Math.floor(Math.random() * 2);
        if (ran === 1) {
            const f = arr[i][0];
            arr[i][0] = arr[i][1];
            arr[i][1] = f;
        }
    }

    return arr;
};