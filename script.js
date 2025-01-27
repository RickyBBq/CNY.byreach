// Wishes array (includes both English and Chinese wishes)
const wishes = [
  "Wishing you wealth and prosperity!", // English
  "May your year be filled with joy and happiness!", // English
  "Good health and success in the year ahead!", // English
  "A year of abundance and peace for you and your family!", // English
  "May all your dreams come true this Chinese New Year!", // English
  "Wishing you a year of boundless opportunities and success!", // English
  "Good fortune and prosperity in everything you do!", // English
  "May your heart be filled with joy and your home with blessings!", // English
  "A year full of celebrations, achievements, and happiness!", // English
  "Wishing you strength and courage to achieve all your goals!", // English
  "May the year bring you endless happiness and laughter!", // English
  "Abundant blessings and joy for you and your loved ones!", // English
  "May this year be your best one yet!", // English
  "Good luck and good fortune will always follow you!", // English
  "May every day bring new reasons to smile and celebrate!", // English
  "Happiness, health, and success all year round!", // English
  "May your business flourish and your wealth multiply!", // English
  "Wishing you endless peace, love, and happiness!", // English
  "May this year bring prosperity to your family!", // English
  "A bright future full of hope and success awaits you!", // English
  "恭喜发财！(Gōngxǐ fācái!) Wishing you prosperity!", // Chinese
  "年年有余！(Nián nián yǒu yú!) May you have surplus every year!", // Chinese
  "身体健康，万事如意！(Shēntǐ jiànkāng, wàn shì rú yì!) Wishing you good health and all the best!", // Chinese
  "事业腾飞，家庭幸福！(Shìyè téngfēi, jiātíng xìngfú!) May your career soar and your family be happy!", // Chinese
  "福星高照，财运亨通！(Fúxīng gāo zhào, cáiyùn hēngtōng!) May good fortune and wealth follow you!", // Chinese
  "合家欢乐，万事如意！(Hé jiā huānlè, wàn shì rú yì!) Wishing your family happiness and all things go smoothly!", // Chinese
  "生活美满，事业有成！(Shēnghuó měimǎn, shìyè yǒu chéng!) Wishing you a perfect life and success in your career!" // Chinese
];

// Function to generate a random wish
function generateWish() {
  const randomIndex = Math.floor(Math.random() * wishes.length);
  const wishElement = document.getElementById("wish");
  const nextButton = document.getElementById("nextButton");

  wishElement.textContent = wishes[randomIndex];
  wishElement.style.display = "block"; // Show the wish
  nextButton.style.display = "inline-block"; // Show the next page button
}
