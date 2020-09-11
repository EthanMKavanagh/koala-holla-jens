console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn'),
      age: $('#ageIn'),
      gender: $('#genderIn'),
      readyForTransfer: false,
      notes: $('#notesIn'),
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then( function(response){
    console.log('Inside of client side GET. Response:', response);
    let el = $('#viewKoalas');
    el.empty();
    for(let koala of koalas){
      el.append(`
        <li>
          ${koala.name}
          ${koala.age}
          ${koala.gender}
          ${koala.readyForTransfer}
          ${koala.notes}
          <button class="readyForTransferBtn" data-id="${koala.id}">Ready For Transfer</button>
          <button class="deleteBtn" data-id="${koala.id}">Delete</button>
        </li>
      `);
    }
  }).catch( function(err){
    alert('error!');
    console.log( err);
  }); // end ajax GET
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas

  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: newKoala
  }).then(function (response) {
    console.log('back from server with:', response);
    //use ethan's get function here
   getKoalas()
  }).catch(function (err) {
    alert('KOALA ERROR');
    console.log(err);
 }) //end koala POST ajax request
}//end saveKoala

function markAsReady(){
  let koalaId = $(this).data('id');
  let isReady = {
    readyStatus: true
  }
  console.log('in markAsReady:', koalaId);
  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaId}`, 
    data: isReady
  }).then(function(response){
    console.log('back from markAsReady PUT with:', response);
    getKoalas();
  }).catch(function(err){
    alert('error!');
    console.log(err);
});
} // end markAsReady

