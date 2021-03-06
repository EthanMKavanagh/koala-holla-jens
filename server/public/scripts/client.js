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
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: false,
      notes: $('#notesIn').val(),
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
      // TO DO "if" statement for readyToTransfer btn
      if(koala.readyForTransfer === 'false'){
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
      } // end if
      else if(koala.readyForTransfer === 'true'){
        el.append(`
        <li>
          ${koala.name}
          ${koala.age}
          ${koala.gender}
          ${koala.readyForTransfer}
          ${koala.notes}
          <button class="deleteBtn" data-id="${koala.id}">Delete</button>
        </li>
      `);
      } // end else if
      else{
        console.log('Something is wrong in GET appends!!!');
      } // end else
    } // end for
  }).catch( function(err){
    alert('error!');
    console.log( err);
  }); // end ajax GET
} // end getKoalas

function saveKoala( koalaToSend ){
  console.log( 'in saveKoala', koalaToSend );
  // ajax call to server to get koalas

  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: koalaToSend
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
  $( '.readyForTransferBtn' ).on( 'click', function(){
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
  })
});
} // end markAsReady

