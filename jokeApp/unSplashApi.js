class UnSplashApi {
  constructor() {
    this.baseURL = "https://api.unsplash.com";
    this.clientID = "Client-ID OitfqueUQfMgEdu54kMwWFfRLhtzpJ_PG5VHpPVjQew";
    this.axiosObj = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID,
      },
      params: {
        query: "animal",
      },
    });
  }

  async getImage() {
    try {
      const imageResponse = await this.axiosObj.get("/photos/random");
      console.log(imageResponse.data.urls.regular);
      return imageResponse.data.urls.regular;
    } catch (err) {
      console.log(err);
      return "resim.jpg";
    }
  }
}
