const inputs = document.querySelectorAll('input');

var patterns = {
    nama:/^([a-zA-Z\s']{1,100})$/,
    telephone: /^[08]+[0-9]{8,10}$/,
    username: /^[a-z0-9_.]{5,12}$/,
    password: /^[a-zA-Z0-9]{8,20}$/,
    email: /^([a-z0-9._])+@+([a-z0-9-]+)+.+([a-z]{2,8})+.+([a-z]{2,8})?$/
}

const validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (evt) => {
        validate(evt.target, patterns[evt.target.attributes.name.value])
    });
});

