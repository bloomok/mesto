const closeButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

function popupCloser() {
  if(popup.classList.contains('popup_opened') === true) {
    popup.classList.remove('popup_opened');
  }
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  popupCloser();
}

formElement.addEventListener('submit', handleFormSubmit);

closeButton.addEventListener('click', popupCloser());

editButton.addEventListener('click', function popupOpener() {
  if(popup.classList.contains('popup_opened') === false) {
    popup.classList.add('popup_opened');
    nameInput.placeholder = profileName.textContent;
    jobInput.placeholder = profileJob.textContent;
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  }
});
