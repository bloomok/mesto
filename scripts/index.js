// Profile
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
// Popup
const popupInfo = document.querySelector('.popup_info');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const closeButton = document.querySelector('.popup__close-button');
// popup-card
const popupCard = document.querySelector('.popup_card');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const imageLinkInput = document.querySelector('.popup__input_type_image-link');
const cardFormElement = popupCard.querySelector('.popup__form');
// popup-preview
const popupPreview = document.querySelector('.popup-preview');
const popupPreviewImage = popupPreview.querySelector('.popup-preview__image');
const popupPreviewDescription = popupPreview.querySelector('.popup-preview__description');
// Card
const cardTemplate = document.querySelector('.card-template');
const cardsList = document.querySelector('.cards__list');

function popupToggler(popup) {
  popup.classList.toggle('popup_opened');
}

function cardCreate(element) {
  const cardElement = cardTemplate.content.cloneNode(true);
  cardElement.querySelector('.card__heading').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = "Фото: " + element.name;
  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  })
  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  })
  cardElement.querySelector('.card__image-button').addEventListener('click', (evt) => {
    popupPreviewImage.src = evt.target.previousElementSibling.src;
    popupPreviewDescription.textContent = evt.target.nextElementSibling.textContent;
    popupToggler(popupPreview);
  })
  return cardElement;
}

initialCards.forEach((element) => {
  const cardElement = cardCreate(element);
  cardsList.append(cardElement);
})

function handleSubmitPopupCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: imageLinkInput.value
  };
  const cardElement = cardCreate(newCard);
  cardsList.prepend(cardElement);
  popupToggler(popupCard);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupToggler(popupInfo);
}

popupPreview.querySelector('.popup__close-button').addEventListener('click', () => {
  popupToggler(popupPreview);
})

formElement.addEventListener('submit', handleFormSubmit);

closeButton.addEventListener('click', () => {
  popupToggler(popupInfo);
});

editButton.addEventListener('click', function popupOpener() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupToggler(popupInfo);
});

addButton.addEventListener('click',() => {
  popupCard.classList.toggle('popup_opened');
});

popupCard.querySelector('.popup__close-button').addEventListener('click', () => {
  popupToggler(popupCard);
});

cardFormElement.addEventListener('submit', handleSubmitPopupCard);
