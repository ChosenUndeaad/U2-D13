document.addEventListener("DOMContentLoaded", () => {
  const getBooks = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/books"
      );

      if (response.ok) {
        const data = await response.json();

        const booksContainer = document.querySelector("#row-libri");
        booksContainer.innerHTML = "";

        for (let book of data) {
          const col = document.createElement("div");
          col.classList.add("col-md-4", "mb-4");

          const card = document.createElement("div");
          card.classList.add("card");
          card.style.width = "20em";
          card.style.height = "42em";

          const img = document.createElement("img");
          img.classList.add("card-img-top");
          img.src = book.img;
          img.alt = book.title;

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          cardBody.style.flex = "1";

          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.innerText = book.title;

          const price = document.createElement("p");
          price.classList.add("card-text");
          price.innerText = `Price: €${book.price}`;

          const button = document.createElement("a");
          button.classList.add("btn", "btn-primary");
          button.href = "#";
          button.innerText = "Buy Now";

          cardBody.appendChild(title);
          cardBody.appendChild(price);
          cardBody.appendChild(button);
          card.appendChild(img);
          card.appendChild(cardBody);
          col.appendChild(card);

          booksContainer.appendChild(col);
        }
      } else {
        throw new Error("The server is not responding correctly");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getBooks();
});
