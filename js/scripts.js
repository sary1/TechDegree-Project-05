$(document).ready(function(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      // console.log(data.results[0].name.first);
      // console.log(data.results);
      $.each(data.results, function(index, item){
        // console.log(item);
        // console.log(item.picture);
        let card = '<div class="card">';
        const userThumbnail = item.picture.large;
        const first = item.name.first;
        const last = item.name.last;
        const email = item.email;
        const city = item.location.city;
        const state = item.location.state;
        card += '<div class="card-img-container">';
        card += `<img class="card-img" src="${userThumbnail}" alt="profile picture">`;
        card += '</div><div class="card-info-container">';
        card += `
          <h3 id="name" class="card-name cap">${first} ${last}</h3>
          <p class="card-text">${email}</p>
          <p class="card-text cap">${city}, ${state}</p>
        `;
        card += '</div></div>';
        $('#gallery').append(card);
      })
    }
  });
}) // end ready
