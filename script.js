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
    .then((data) => console.log("DATAd", data))
    .catch((error) => console.error("Errore:", error));
};

getBooks();
