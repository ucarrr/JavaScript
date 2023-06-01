class JokeApi {
  constructor() {
    this.baseURL = "https://api.chucknorris.io";
    this.axiosObj = axios.create({
      baseURL: this.baseURL,
    });
  }

  async getRamdomJoke() {
    try {
      const jokeResponse = await this.axiosObj.get("/jokes/random");
      console.log(jokeResponse.data.value);
      return jokeResponse.data.value;
    } catch (err) {
      console.log(err);
    }
  }
}
