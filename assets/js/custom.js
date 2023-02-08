const input = document.querySelectorAll('.custom-input input');
input.forEach(item => {
    item.oninput = () => {
        let inputValue = item.value;
        inputValue.length > 0 ? item.classList.add('focus') : item.classList.remove('focus')
    };
})

var checkbox = document.querySelectorAll("[type='checkbox'], [type='radio']");
checkbox.forEach(item => {
    item.closest('.custom-input').classList.add('checked-box')
})


var typePassword = document.querySelectorAll('[type="password"]');

typePassword.forEach(password => {
 
    const id = password.getAttribute('id')
    const link = document.createElement('a');
    link.href = "#" + id;
    link.className = 'show';
    link.title = 'show';
    console.log(id);

    password.before(link);

    link.addEventListener("click", (e) => {
    e.preventDefault()
        if (password.type === "password") {
            password.type = "text";
            link.classList.add('hide')
            link.classList.remove('show');
            link.title = 'hide';
        } else {
            password.type = "password";
            link.classList.add('show');
            link.classList.remove('hide');
            link.title = 'show';
        }
    })
})

 jQuery(document).ready(function($) {
    if($("[type='tel']").length){
        $("[type='tel']").mask('+38(000)-00-00-000');
        $("[type='tel']").addClass('focus')
    }

    if($('select').length){
        $('select').niceSelect();
    }

    
 });