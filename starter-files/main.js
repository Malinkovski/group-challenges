$(function () {
  const bannerTitle = $(".banner h1");

  const CARDS_PER_RENDER = 9;
  let bannerIndex = 0;

  //_____________________________________________________________________________
  //functions
  function CreateCards(data) {
    let counter = 0;
    let row;
    const container = document.getElementById('container');

    data.forEach(item => {
      if (counter < CARDS_PER_RENDER) {
        if (counter % 3 === 0) {
          row = document.createElement("div");
          row.classList.add("row","text-center");
        }
      const card = document.createElement('div');
      card.classList.add('col-12', 'col-md-4');

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.src = item.url;
      cardImage.alt = item.id;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      card.appendChild(cardImage);
      card.appendChild(cardBody);
      row.appendChild(card);
      container.appendChild(row);

      // Show card title on click
      card.addEventListener('click', function () {
        if (cardBody.innerHTML.trim() === '') {
          const cardTitle = document.createElement('div');
          const innerTitle = document.createElement('h1');
          cardTitle.classList.toggle('card-title');
          innerTitle.textContent = item.title;
          cardBody.appendChild(cardTitle);
          cardTitle.appendChild(innerTitle);
        } else {
          cardBody.innerHTML = '';
        }
      });
    }
    counter++;
  }); 
  }
  function fetchCards() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((data) => {
        CreateCards(data);
      })
      .catch((error) => {
        console.log("Error fetching data from url:", error);
      });
  }
  // __________________________________________________________________________
  //banner logic
  let arr = ["CREATIVE", "ARTISTIC", "BEAUTIFUL"];

  bannerTitle.text(arr[bannerIndex++]);

  setInterval(function () {
    bannerTitle.fadeOut(500, function () {
      bannerTitle.text(arr[bannerIndex++]).fadeIn(500);
    });

    if (bannerIndex === arr.length) {
      bannerIndex = 0;
    }
  }, 2000);

  // __________________________________________________________________________
  //fetch the first 9 cards

  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      CreateCards(data);
    })
    .catch((error) => {
      console.log("Error fetching data from url:", error);
    });

  // __________________________________________________________________________
  //scroll to top on click
  $('.scroll-up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // __________________________________________________________________________
  // Infinite scroll to update the cards

  window.addEventListener('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchCards();
    }
  });
});
