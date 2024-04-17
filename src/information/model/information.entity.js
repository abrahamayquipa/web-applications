class Information {
  constructor(name = '', official = '', currencies = '', capital = '', region = '', subregion = '', languages = '', population = 0) {
    this.name = name;
    this.official = official;
    this.currencies = currencies;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.languages = languages;
    this.population = population;
  }
}

export default Information;