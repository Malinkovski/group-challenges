$(function () {
  const bannerTitle = $(".banner h1");

  const CARDS_PER_RENDER = 9;
  const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';
  let bannerIndex = 0;

  const container = $('#container');
  //_____________________________________________________________________________
  //functions
  function createCards(data) {
    let row = $("<div>").addClass('row');
    container.append(row);

    data.forEach(item => {

      const card = $("<div>").addClass('col-12 col-md-4 card');

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.src = item.url;
      cardImage.alt = item.id;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      card.append(cardImage, cardBody);
      row.append(card);
      

      // Show card title on click
      card.on('click', function () {
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
    });
  }

  function fetchCards(start = 0) {
    fetch(`${BASE_URL}?_start=${start}&_limit=${CARDS_PER_RENDER}`)
      .then((res) => res.json())
      .then((data) => {
        createCards(data);
      })
      .catch((error) => {
        console.log("Error fetching data from url:", error);
      });
  }

  // __________________________________________________________________________
  //banner logic
  const arr = ["CREATIVE", "ARTISTIC", "BEAUTIFUL"];

  bannerTitle.text(arr[bannerIndex]);

  setInterval(function () {
    bannerIndex++
    bannerTitle.fadeOut(500, function () {
      bannerTitle.text(arr[bannerIndex % arr.length]).fadeIn(500);

    });
  }, 2000);

  // __________________________________________________________________________
  //fetch the first 9 cards

  fetchCards()

  // __________________________________________________________________________
  //scroll to top on click
  $('.scroll-up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // __________________________________________________________________________
  // Infinite scroll to update the cards

  $(window).on('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log('-----------')
    console.log('scrollTop: ', scrollTop)
    console.log('clientHeight: ', clientHeight)
    console.log('scrollHeight: ', scrollHeight)
    console.log('-----------')
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchCards($('.card').length);
    }
  });
});

