class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = sentence.split(' ');

    return words
      .map((word, index) => {
        if (index === 0) {
          return this.capitalize(word);
        } else if (exceptions.includes(word.toLowerCase())) {
          return word.toLowerCase();
        } else {
          return this.capitalize(word);
        }
      })
      .join(' ');
  }
}
