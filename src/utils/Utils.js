export const parsedText = (text) => text.replace(/<p>/g, `<span>`).replace(/<\/p>/g, `</span>`);
