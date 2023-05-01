// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

const heartEmojis = document.querySelectorAll('.like-glyph');
heartEmojis.forEach(heartEmoji => {
  heartEmoji.addEventListener('click', e => {
    mimicServerCall()
    .then(() => {
      if (heartEmoji.textContent === EMPTY_HEART) {
        heartEmoji.textContent = FULL_HEART;
        heartEmoji.classList.add('activated-heart');
      } else {
        heartEmoji.textContent = EMPTY_HEART;
        heartEmoji.classList.remove('activated-heart');
      }
    })
    .catch(error => {
      const errorModal = document.getElementById('modal');
      const errorMessage = document.getElementById('modal-message');
        console.log(error);
      errorModal.classList.remove('hidden');
      errorMessage.textContent = error;

      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    })
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
