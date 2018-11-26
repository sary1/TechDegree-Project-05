$(document).ready(function(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {

      // Getting and displaying 12 random users
      $.each(data.results, function(index, item){
        let card = '<div class="card">';
        const info = {
          userThumbnail: item.picture.large,
          first: item.name.first,
          last: item.name.last,
          email: item.email,
          city: item.location.city,
          state: item.location.state
        }
        card += '<div class="card-img-container">';
        card += `<img class="card-img" src="${info.userThumbnail}" alt="profile picture">`;
        card += '</div><div class="card-info-container">';
        card += `
          <h3 id="name" class="card-name cap">${info.first} ${info.last}</h3>
          <p class="card-text">${info.email}</p>
          <p class="card-text cap">${info.city}, ${info.state}</p>
        `;
        card += '</div></div>';
        $('#gallery').append(card);
      }) // end each



    } // end success
  }); // end ajax
}) // end ready
