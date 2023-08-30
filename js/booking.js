'use strict';
//Variables del formulario:
const selectRest = document.querySelector('.js_select');
const inputDate = document.querySelector('.js_input_date');
const inputTime = document.querySelector('.js_input_time');
const inputText = document.querySelector('.js_input_text');
const bookingText = document.querySelector('.js_booking_text');
const bookingBtn = document.querySelector('.js_booking_button');

//
const renderBookingText = (restName, date, time, diners) => {
  let bookingTextResult;
  if (restName === '' || date === '' || time === '' || diners === '') {
    bookingTextResult = 'Debes rellenar todos los campos';
  } else {
    bookingTextResult = `¡Te esperamos en ${restName}, el día ${date} a las ${time} y seréis ${diners} comensales!`;
    selectRest.value = '';
    inputDate.value = '';
    inputTime.value = '';
    inputText.value = '';
  }

  bookingText.innerHTML = bookingTextResult;
};

const handlerInputs = (event) => {
  event.preventDefault();
  const restName = selectRest.value;
  const date = inputDate.value;
  const time = inputTime.value;
  const diners = inputText.value;

  renderBookingText(restName, date, time, diners);
};

bookingBtn.addEventListener('click', handlerInputs);

//

function setDate() {
  const actualDate = new Date().toISOString().split('T')[0];
  inputDate.setAttribute('min', actualDate);
}

setDate();
