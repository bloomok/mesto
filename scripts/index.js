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
    cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like-button_active');
    })
    cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
      evt.target.closest('.card').remove();
    })

    cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
      popupPreviewImage.src = evt.target.src;
      popupPreviewDescription.textContent = evt.target.nextElementSibling.textContent;
      popupPreview.classList.toggle('popup_opened');
    })

    cardsList.append(cardElement);
})


// Page
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const likeButton = document.querySelector('.card__like-button');
//Popup
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const closeButton = document.querySelector('.popup__close-button');
//popup-card
const popupCard = document.querySelector('.popup_card');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const imageLinkInput = document.querySelector('.popup__input_image-link');
const cardFormElement = popupCard.querySelector('.popup__form');
const deleteButton = document.querySelector('.card__delete-button');

//popup-preview
const popupPreview = document.querySelector('.popup-preview');
const popupPreviewImage = popupPreview.querySelector('.popup-preview__image');
const popupPreviewDescription = popupPreview.querySelector('.popup-preview__description');

popupPreview.querySelector('.popup__close-button').addEventListener('click', () => {
  popupPreview.classList.toggle('popup_opened');
})

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

closeButton.addEventListener('click', (evt) => {
    const eventTarget = evt.target;
    eventTarget.parentElement.parentElement.classList.toggle('popup_opened');
});
editButton.addEventListener('click', function popupOpener() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupToggler();
});

addButton.addEventListener('click',() => {
  popupCard.classList.toggle('popup_opened');
})
popupCard.querySelector('.popup__close-button').addEventListener('click', (evt) => {
  evt.target.parentElement.parentElement.classList.toggle('popup_opened')
})
function createCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__heading').textContent = cardNameInput.value;
  cardElement.querySelector('.card__image').src = imageLinkInput.value;
  cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  })
  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  })
  cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
    popupPreviewImage.src = evt.target.src;
    popupPreviewDescription.textContent = evt.target.nextElementSibling.textContent;
    popupPreview.classList.toggle('popup_opened');
  })

  cardsList.prepend(cardElement);
  popupCard.classList.toggle('popup_opened');
}

cardFormElement.addEventListener('submit', createCardFormSubmit);
