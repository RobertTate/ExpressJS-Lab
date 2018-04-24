let form = document.getElementsByTagName('form')[0];


form.addEventListener( 'submit', function(e) {
e.preventDefault();
    console.log('Listener Works')
    let firstN = document.getElementsByTagName('input')[0].value;
    let lastN = document.getElementsByTagName('input')[1].value;

    let data = {
        firstname: firstN,
        lastname: lastN
    }

    console.log(data);

    fetch('/contact-form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'content-type': 'application/json'
          })
    }).then(res => {return res})
    .catch(error => console.log(error));
})