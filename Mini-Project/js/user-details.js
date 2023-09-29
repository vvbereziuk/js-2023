// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let url = new URL(location.href);

let id = url.searchParams.get('id');

let userInfo = document.createElement('div');
userInfo.className = 'user_data';

let divTitle = document.createElement('div');
divTitle.className = 'title_data';

let titleH = document.createElement('h2');
titleH.className = 'header';
titleH.innerText = 'User information';
userInfo.append(titleH);

let divWrap = document.createElement('div');
divWrap.className = 'wrap';

divWrap.append(userInfo, divTitle);
document.body.appendChild(divWrap);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(obj =
        function arrayUsers(array) {
            for (const key in array) {
                if (typeof array[key] !== 'object') {
                    let divElement = document.createElement('div');
                    divElement.className = 'titles';
                    divElement.innerText = `${key} - ${array[key]}`;
                    userInfo.append(divElement);
                } else {
                    arrayUsers(array[key]);
                }
            }
        }
    )

    .then(resp => {
        let userButton = document.createElement('button');
        userButton.className = 'sparkles';
        userButton.innerText = 'Post of current users';
        userInfo.append(userButton);

        userButton.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(titlePosts => {
                        for (const titlePost of titlePosts) {
                            let titlePostDiv = document.createElement('div');
                            titlePostDiv.className = 'div_post';

                            let titleP = document.createElement('p');
                            titleP.className = 'p_post';
                            titleP.innerText = titlePost.title;

                            let titlePostBtn = document.createElement('button');
                            titlePostBtn.innerText = 'Comments';
                            titlePostBtn.className = 'sparkles';

                            titlePostBtn.onclick = function () {
                                document.location.href = `post-details.html?postId=${titlePost.id}`;
                            }
                            titlePostDiv.append(titleP, titlePostBtn);
                            divTitle.append(titlePostDiv);
                            userButton.disabled = true;
                        }
                    }
                )
        }
    });

function previous() {
    window.history.back();
}
