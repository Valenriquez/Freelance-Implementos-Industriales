function showVideo() {
  // Show the back button
  var backButton = document.getElementById("back-button");
  backButton.classList.remove('hide');
  
  // Hide the next button
  var nextButton = document.getElementById("next-button");
  nextButton.classList.add('hide');

  var mainText = document.getElementById("main-text");
  mainText.classList.add('hide');
 
  var acercaDeSection = document.getElementById('acerca-de');
  acercaDeSection.style.display = 'none';


  
  // Show the video container and hide the image container
  var videoContainer = document.getElementById("video-container");
  var imageContainer = document.querySelector(".image-container");
  videoContainer.classList.remove('hide');
  imageContainer.classList.add('hide');

  var mainVideo = document.getElementById("main-video");
  mainVideo.play();
}

function showImage() {
  // Show the next button
  var nextButton = document.getElementById("next-button");
  nextButton.classList.remove('hide');
  
  // Hide the back button
  var backButton = document.getElementById("back-button");
  backButton.classList.add('hide');
  
  // Show the image container and hide the video container
  var videoContainer = document.getElementById("video-container");
  var imageContainer = document.querySelector(".image-container");
  videoContainer.classList.add('hide');
  imageContainer.classList.remove('hide');

  var mainText = document.getElementById("main-text");
  mainText.classList.remove('hide');

  var acercaDeSection = document.getElementById('acerca-de');
  acercaDeSection.style.display = 'none';

  var mainVideo = document.getElementById("main-video");
  mainVideo.pause();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function displayAcercaDe() {
  var acercaDeSection = document.getElementById('acerca-de');
  var mainText = document.getElementById("main-text");
  mainText.classList.add('hide');
   

  if (acercaDeSection.style.display === 'none') {
    acercaDeSection.style.display = 'block';
  } else {
    acercaDeSection.style.display = 'none';
  }
}

function sendMessage(phoneNumber) {
  // Construct the WhatsApp URL with the phone number
  var whatsappUrl = 'https://wa.me/' + phoneNumber;
  // Open a new window or tab with the WhatsApp URL
  window.open(whatsappUrl, '_blank');
}