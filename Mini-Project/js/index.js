// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

let container = document.createElement('div');
container.className = 'divContainer';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {

            let divUser = document.createElement('div');
            divUser.className = 'div_user';

            let userId = document.createElement('h2');
            userId.className = 'user_id';
            userId.innerText = `${user.id} ${user.name}`;

            let userButton = document.createElement('button');
            userButton.className = 'sparkles';
            userButton.innerText = 'User information';
            userButton.onclick = function () {
                document.location.href = `user-details.html?id=${user.id}`;
            };
            divUser.append(userId, userButton);
            container.appendChild(divUser);

        }
        document.body.appendChild(container);
    });




let clr = document.querySelector("input");
let btn = document.querySelector("button");
clr.addEventListener("input", (ev) => {
    btn.style.setProperty( "--clr", ev.target.value);
});

setTimeout(() => {
    btn.classList.add( "over" );
    setTimeout(()=> {
        btn.classList.remove( "over" );
    },2500);
}, 500);


