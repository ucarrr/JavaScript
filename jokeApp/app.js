class Screen {
  constructor() {
    this.getJokeBtn = document.querySelector(".btn-get-joke");
    this.getJokeBtn.addEventListener("click", () => this.getJoke());
  }

  async getJoke() {
    console.log("Joke buttun Clicked");
    const randomImage = await new UnSplashApi().getImage();
    const randomJoke = await new JokeApi().getRamdomJoke();

    const allResult = {
      randomImage,
      randomJoke,
    };

    this.printScreen(allResult);
  }

  printScreen(result) {
    document.querySelector(".result").innerHTML = `
    <img
    src="${result.randomImage}"
    aria-placeholder="resim"
    alt="Avatar"
    style="width: 40%; height: 10%"
  />
  <div class="content">
    <h4><b>${result.randomJoke}</b></h4>
  </div>
  <div class="content">
    <h4><b>Gelecek Şaka</b></h4>
  </div>
</div>
    `;
  }
}
