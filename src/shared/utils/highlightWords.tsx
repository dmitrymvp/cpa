export const highlightWords = (text = '', wordsToHighlight: string[]) => {
  return text.split(' ').map((word, i) => {
    if (wordsToHighlight.includes(word)) {
      return (
        <span key={i} className="highlight-words">
          {word + ' '}
        </span>
      );
    }
    return word + ' ';
  });
};
