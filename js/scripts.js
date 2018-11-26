$(document).ready(function(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {

      // All retrieved users data
      const usersInfos = [];

      // Getting and displaying 12 random users
      $.each(data.results, function(index, item){
        let card = '<div class="card">';
        const info = {
          userThumbnail: item.picture.large,
          first: item.name.first,
          last: item.name.last,
          email: item.email,
          city: item.location.city,
          state: item.location.state,
          cell: item.cell,
          street: item.location.street,
          postcode: item.location.postcode,
          birthday: item.dob.date
        }
        usersInfos.push(info);
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


      // Modal window creation
      $('#gallery').on('click', e => {

        // Extracting the name from the clicked card
        let name;
        if(e.target.className === 'card'){
          name = e.target.children[1].children[0].textContent;
        } else if(e.target.className === 'card-img-container' || e.target.className === 'card-info-container'){
          name = e.target.parentElement.children[1].children[0].textContent;
        } else {
          name = e.target.parentElement.parentElement.children[1].children[0].textContent;
        }

        // extracting all names from cards
        const namesList = [];
        const allDivs = $('#gallery')[0].children;
        for(let div of allDivs){
          namesList.push(div.children[1].children[0].textContent);
        }

        // Person's index
        const index = namesList.indexOf(name);
        const reqInfo = usersInfos[index];

        // Creating a modal window
        let modal = `
          <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${reqInfo.userThumbnail}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${reqInfo.first} ${reqInfo.last}</h3>
                    <p class="modal-text">${reqInfo.email}</p>
                    <p class="modal-text cap">${reqInfo.city}</p>
                    <hr>
                    <p class="modal-text">${reqInfo.cell}</p>
                    <p class="modal-text">${reqInfo.street}, ${reqInfo.state} ${reqInfo.postcode}</p>
                    <p class="modal-text">Birthday: ${reqInfo.birthday}</p>
                </div>
            </div>
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        </div>
        `;

        $('body').append(modal);

        $('#modal-close-btn').on('click', e => {
          $('.modal-container').remove();
        })
      })

      
    } // end success
  }); // end ajax
}) // end ready


