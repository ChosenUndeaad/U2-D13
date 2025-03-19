const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        console.log("ok", response);
        return response.json();
      } else {
        throw new Error("Il server non risponde correttamente");
      }
    })
    .then((data) => {
      console.log("DATAd", data);
      const bookTitle = data.title;
      const bookCover = data.img;
      const bookPrice = data.price;

      const title = document.getElementsByClassName("card-title");
      const cover = document.getElementsByClassName("card-img-top");
      const price = document.getElementsByClassName("card-text");

      title.innerText = bookTitle;
      cover.innerText = bookCover;
      price.innerText = bookPrice;
    })
    .catch((error) => console.error("Errore:", error));
};

getBooks();
