let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

  closeButton.addEventListener('click', function popupCloser() {
    if(popup.classList.contains('popup_opened') === true) {
      popup.classList.remove('popup_opened');
    }
  });

  editButton.addEventListener('click', function popupOpener() {
    if(popup.classList.contains('popup_opened') === false) {
      popup.classList.add('popup_opened');
    }
  });

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_job');

function handleFormSubmit (evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  let profileName = document.querySelector('.profile__name');
  let profileJob = document.querySelector('.profile__description');
  profileName.textContent = nameInputValue;
  profileJob.textContent = jobInputValue;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

nameInput.placeholder = document.querySelector('.profile__name').textContent;
jobInput.placeholder = document.querySelector('.profile__description').textContent;
