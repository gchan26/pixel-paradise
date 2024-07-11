export const getPageTitle = (company, category) => {
    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  
    const mapping = {
      game: "Games",
      console: "Consoles",
      accessory: "Accessories",
      poster: "Posters",
    };
  
    if (company && category) {
      return `${capitalize(company)} ${capitalize(mapping[category] || category)}`;
    }
  
    if (category) {
      return category === 'game' ? 'All Games' : `All ${capitalize(mapping[category] || category)}`;
    }
  
    return 'All Products';
};