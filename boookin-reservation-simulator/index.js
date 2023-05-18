const main = document.querySelector('.main');
console.log(main);

let html = '';

for (let i = 0; i < 12; i++) {
  let isReserved = false;
  let isConfirmed = false;
  let isBookedByStudent = false;

  if (i == 1 || i == 3 || i == 9 || i == 5 || i == 11) {
    isReserved = true;
  }

  if (i == 3 || i == 9 || i == 7) {
    isConfirmed = true;
  }

  if (i == 3 || i == 1 || i == 2 || i == 11) {
    isBookedByStudent = true;
  }

  html += `
    <div class='date ${isReserved ? "reserved" : ""} ${isConfirmed ? "confirmed" : ""} ${isConfirmed && isReserved ? "confirmed" : ""} ${isBookedByStudent ? "booked" : ""}'>
      ${i}
      <div class="dateconfirmedhover">Booked</div>
      <div class="datereservedhover">Booked</div>
      <div class="datebookedhover">Booked by you</div>

    </div>
  `;
}

main.innerHTML = html;

const dateBookedElements = document.querySelectorAll('.date.booked');

dateBookedElements.forEach((element) => {
  const dateBookedHover = element.querySelector('.datebookedhover');

  element.addEventListener('mouseover', () => {
    dateBookedHover.style.display = 'flex';
  });

  element.addEventListener('mouseout', () => {
    dateBookedHover.style.display = 'none';
  });
});

const dateReservedElements = document.querySelectorAll('.date.reserved');

dateReservedElements.forEach((element) => {
  const datereservedhover = element.querySelector('.datereservedhover');

  element.addEventListener('mouseover', () => {
    datereservedhover.style.display = 'flex';
  });

  element.addEventListener('mouseout', () => {
    datereservedhover.style.display = 'none';
  });
});

const dateConfirmedElements = document.querySelectorAll('.date.confirmed');

dateConfirmedElements.forEach((element) => {
  const dateconfirmedhover = element.querySelector('.dateconfirmedhover');

  element.addEventListener('mouseover', () => {
    dateconfirmedhover.style.display = 'flex';
  });

  element.addEventListener('mouseout', () => {
    dateconfirmedhover.style.display = 'none';
  });
});
