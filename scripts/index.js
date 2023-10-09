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



const cardTemplate = document.querySelector('.card-template').content;
const cardsList = document.querySelector(".cards__list");

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach((element)=> {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__heading').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;

  cardsList.append(cardElement);
  console.log(cardElement);
})
