const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode1');
  document.querySelector('.top').classList.toggle('dark-mode2');
  document.querySelector('.bg-button').classList.toggle('bg-button-dark');
  document.querySelector('.more-btn').classList.toggle('more-btn-dark');
})

const gallery = document.querySelector('.gallery')

function getPhotos() {
  let photoList = ''
  fetch('https://api.unsplash.com/photos/?client_id=Zd7QwV5NTfh0Bw1yOqjYqFjadXZOHl41nYUXWrLKhkE')
    .then(function (response) {
      return response.json()
    })
    .then(function (photos) {
      let index = 1
      photos.forEach(item => {
        photoList += `
          <img class="img-item" src="${item.urls.small}" alt="">
        `
        index++
      })
      gallery.innerHTML = photoList
    })
}

const btnload = document.querySelector('.btn-load')

btnload.addEventListener('click', () => {
  getPhotos()
})