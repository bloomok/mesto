// Page
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const editButton = document.querySelector('.profile__edit-button');
//Popup
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const closeButton = document.querySelector('.popup__close-button');

function popupToggler() {
  popup.classList.toggle('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupToggler();
}

formElement.addEventListener('submit', handleFormSubmit);

closeButton.addEventListener('click', popupToggler);

editButton.addEventListener('click', function popupOpener() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupToggler();
});
