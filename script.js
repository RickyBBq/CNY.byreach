const wishes = [
  "Wishing you happiness and prosperity!",
  "May your year be filled with success and joy!",
  "Good health and fortune to you and your family!",
  "May all your dreams come true this year!",
  "Wishing you endless opportunities and blessings!",
  "A year of wealth, health, and happiness awaits!",
  "May this year bring you peace and harmony!",
  "Wishing you a bountiful year ahead!",
  "Success and good fortune are coming your way!",
  "May the new year be as bright as your smile!",
  "Wishing you a year of love and laughter!",
  "Happiness, health, and abundance to you!",
  "May your year be filled with exciting adventures!",
  "Luck and success are on your side this year!",
  "Wishing you peace, prosperity, and plenty of joy!",
  "A year of achievement and growth awaits you!",
  "Good fortune and happiness to you and your loved ones!",
  "Wishing you a bright and prosperous new year!",
  "May your year be filled with unforgettable moments!",
  "Wishing you endless joy and love this year!",
  "May your family be blessed with good fortune!",
  "Wishing you longevity and peace in your life!",
  "May the Lantern Festival bring light to your dreams!",
  "Good luck and success in all your endeavors!",
  "Wishing you an abundance of wealth and happiness!"
];

function generateWish() {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  document.getElementById("wish").innerText = randomWish;
  document.getElementById("nextButton").style.display = "inline-block";
}
