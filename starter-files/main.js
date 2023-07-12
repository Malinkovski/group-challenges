$(function () {
  const container = document.getElementById('container');
  const bannerTitle = $(".banner h1");

  let bannerIndex = 0;

  //_____________________________________________________________________________
  //functions
  function CreateCards(data) {
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('col-md-4');

      const cardImage = document.createElement('img');
      cardImage.src = item.url;
      cardImage.alt = item.id;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      card.appendChild(cardImage);
      card.appendChild(cardBody);
      container.appendChild(card);

      // Show card title on click
      card.addEventListener('click', function () {
        if (cardBody.innerHTML.trim() === '') {
          const cardTitle = document.createElement('h1');
          cardTitle.classList.add('card-title');
          cardTitle.textContent = item.title;
          cardBody.appendChild(cardTitle);
        } else {
          cardBody.innerHTML = '';
        }
      });
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

  fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
    .then(res => res.json())
    .then(data => {
      //const limitedData = data.slice(0, 9);
      CreateCards(data);
    })
    .catch(error => {
      console.log('Error fetching data from url', error);
    });

  $('.scroll-up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // Infinite scroll to update the cards
  let page = 1;

  window.addEventListener('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      page++;
      fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=9`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            CreateCards(data);
          }
        })
        .catch(error => {
          console.log('Error fetching data from the URL', error);
        });
    }
  });
});
