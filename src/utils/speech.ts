export const speak = (text: string, lang: string = "es-ES") => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = lang;
  speech.rate = 0.9;
  window.speechSynthesis.speak(speech);
};