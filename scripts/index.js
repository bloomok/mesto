const closeButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

function popupToggler() {
  popup.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  popupToggler();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

closeButton.addEventListener('click', popupToggler);

editButton.addEventListener('click', function popupOpener() {
    popupToggler();
    nameInput.placeholder = profileName.textContent;
    jobInput.placeholder = profileJob.textContent;
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});
