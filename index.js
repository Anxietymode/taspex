const wrapper = document.querySelector('.wrapper');

function getInfo() {
    const cardNumber = document.getElementById('inpCard').value;
    const holderName = document.getElementById('Holder').value;
    const expiryDate = document.getElementById('date').value;
    const cvvCode = document.getElementById('cvv').value;

    
    const card = document.createElement('div');
    card.classList.add('card-display'); // 


    const title = document.createElement('h3');
    title.textContent = "Card: " + cardNumber;

    const desc = document.createElement('p');
    desc.textContent = "Holder: " + holderName;

    const dateDisplay = document.createElement('p');
    dateDisplay.textContent = "Expires: " + expiryDate;

    const cvvDisplay = document.createElement('p');
    cvvDisplay.textContent = "CVV: " + cvvCode;


    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(dateDisplay);
    card.appendChild(cvvDisplay);
    wrapper.appendChild(card);
}