const submitForm = (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const duration = document.getElementById('duration').value;
    const id_dentist = document.getElementById('id_dentist').value;
    const id_treatment = document.getElementById('id_treatment').value;
    const id_user = document.getElementById('id_user').value;
    const image = document.getElementById('image').value;

    const data = {
        amount,
        date,
        description,
        duration,
        id_dentist,
        id_treatment,
        id_user,
        image,
    };

    fetch('https://odontologica.onrender.com/api/v1/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

const button = document.getElementById('submit');
button.addEventListener('click', submitForm);
