class SearchRecipesService {
  splitIntoKeywords(word) {
      return word.match(/\S+/g);
  }
  setsInterleave(set1, set2) {
    //TODO: make private? 
    return set1.filter(item => set2.includes(item)).length > 0;
  }
  filterRecipes(searchQuery, allRecipes) {
    if(!searchQuery) {
      return allRecipes;
    } else {
      const keywords = this.splitIntoKeywords(searchQuery);
      return allRecipes.filter(recipe => {
        const nameKeywords = this.splitIntoKeywords(recipe.name);
        const descKeywords = this.splitIntoKeywords(recipe.description);
        return this.setsInterleave(nameKeywords, keywords) || this.setsInterleave(descKeywords, keywords);
      });
    }
  }
}

export default SearchRecipesService;