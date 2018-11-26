
/*
$('#gallery').on('click', e => {
  let name;
  if(e.target.className === 'card'){
    name = e.target.children[1].children[0].textContent;
  } else if(e.target.className === 'card-img-container' || e.target.className === 'card-info-container'){
    name = e.target.parentElement.children[1].children[0].textContent;
  } else {
    name = e.target.parentElement.parentElement.children[1].children[0].textContent;
  }
  $.ajax({
    url: `https://randomuser.me/api/?name=${name}`,
    dataType: 'json',
    success: function(data) {
      console.log(data.results);
      // console.log(data.results[0].picture.large);
      // const personInfo = data.results[0];
      // const modalInfo = {
      //   image: personInfo.picture.large
      // }
    }
  });
})
*/