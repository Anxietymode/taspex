const wrapper = document.querySelector('.wrapper');


function updateCard() {
    let number = document.getElementById('inpCard').value;
    let holder = document.getElementById('Holder').value;
    let date = document.getElementById('date').value;

   
    let formattedNumber = number.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();

   
    document.getElementById('prevNumber').textContent = formattedNumber || '#### #### #### ####';
    document.getElementById('prevHolder').textContent = holder || 'FULL NAME';
    document.getElementById('prevDate').textContent = date || 'MM/YY';
}


function getInfo() {
    const cardNumber = document.getElementById('inpCard').value;
    const holderName = document.getElementById('Holder').value;
    const expiryDate = document.getElementById('date').value;
    const cvvCode = document.getElementById('cvv').value;

    if (!cardNumber) return; 

    const card = document.createElement('div');
    card.classList.add('card-display');

    const title = document.createElement('h3');
    title.textContent = "Card: " + cardNumber;

    const desc = document.createElement('p');
    desc.textContent = "Holder: " + holderName;

    const dateDisplay = document.createElement('p');
    dateDisplay.textContent = "Expires: " + expiryDate;

    const cvvDisplay = document.createElement('p');
    cvvDisplay.textContent = "CVV: ***"; 

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(dateDisplay);
    card.appendChild(cvvDisplay);
    wrapper.appendChild(card);

   
    document.getElementById('inpCard').value = '';
    document.getElementById('Holder').value = '';
    document.getElementById('date').value = '';
    document.getElementById('cvv').value = '';
    updateCard(); }
