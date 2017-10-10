const bree = (input, opts = {}) => {
    return new Promise((resolve, reject) => {
        if (typeof input !== 'string') {
            reject(new TypeError(`Expected a string, got ${typeof input}`));
        }

        resolve(input + ' & ' + (opts.postfix || 'rainbows'));
    });
};

module.exports = bree;
