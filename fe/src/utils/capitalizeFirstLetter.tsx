export function capitalizeFirstLetter(word: string | undefined) {
  if (word) {
    word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
