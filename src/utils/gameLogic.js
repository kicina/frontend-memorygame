// gameLogic.js
export function generateCards(gridSize) {
    const size = gridSize === "4x4" ? 8 : 18; // 8 unique cards for 4x4, 18 unique cards for 6x6
    const base = Array.from({ length: size }, (_, i) => ({ value: i + 1, matched: false }));
    const fullSet = [...base, ...base];
    return fullSet.sort(() => Math.random() - 0.5);
  }
  
  // New function to generate image-based cards with unique images
  export function generateImageCards(gridSize) {
    // Define a larger set of images for the 6x6 grid
    const imageCards = [
      { value: "helmet", src: "/images/helmet.png", matched: false },
      { value: "potion", src: "/images/potion.png", matched: false },
      { value: "ring", src: "/images/ring.png", matched: false },
      { value: "scroll", src: "/images/scroll.png", matched: false },
      { value: "shield", src: "/images/shield.png", matched: false },
      { value: "sword", src: "/images/sword.png", matched: false },
      { value: "dragon", src: "/images/dragon.png", matched: false },
      { value: "bow", src: "/images/bow.png", matched: false },
      { value: "axe", src: "/images/axe.png", matched: false },
      { value: "magic", src: "/images/magic.png", matched: false },
      { value: "helmet", src: "/images/helmet.png", matched: false },
      { value: "potion", src: "/images/potion.png", matched: false },
      { value: "ring", src: "/images/ring.png", matched: false },
      { value: "scroll", src: "/images/scroll.png", matched: false },
      { value: "shield", src: "/images/shield.png", matched: false },
      { value: "sword", src: "/images/sword.png", matched: false },
      { value: "dragon", src: "/images/dragon.png", matched: false },
      { value: "bow", src: "/images/bow.png", matched: false },
      { value: "axe", src: "/images/axe.png", matched: false },
      { value: "magic", src: "/images/magic.png", matched: false },
    ];
  
    const numImages = gridSize === "4x4" ? 8 : 18; 
    const selectedImages = imageCards.slice(0, numImages); 
    const fullSet = [...selectedImages, ...selectedImages]; 
    return fullSet.sort(() => Math.random() - 0.5); 
  }
  