// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
//     - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);

let postId = url.searchParams.get('postId');

let divWrap = document.createElement('div');
divWrap.className = 'wrap';

let divPost = document.createElement('div');
divPost.className = 'head_post';

let wrapComments = document.createElement('div');
wrapComments.className = 'head_comments';

divWrap.append(divPost, wrapComments);
document.body.appendChild(divWrap);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => posts.forEach(posts => {
            if (postId === (posts.id + "")) {
                let postH = document.createElement('h2');
                postH.className = 'post_title';

                let postP = document.createElement('p');
                postP.className = 'post_body';
                postH.innerText = `${posts.id}     ${posts.title}`;
                postP.innerText = `${posts.body}`;

                divPost.append(postH, postP);
            }
        }
    ))

    .then(resp =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(comments => comments.forEach(comments => {
                let divComments = document.createElement('div');
                divComments.className = 'comments';

                let commentH = document.createElement('h3');
                commentH.className = 'comment_title';
                commentH.innerText = `${comments.name}`;

                let commentE = document.createElement('h4');
                commentE.className = 'comment_mail';
                commentE.innerText = `${comments.email}`;

                let commentP = document.createElement('p');
                commentP.innerText = `${comments.body}`;

                divComments.append(commentH, commentE, commentP);
                wrapComments.append(divComments);
            })));


function previous() {
    window.history.back();
}