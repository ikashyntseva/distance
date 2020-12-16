document.querySelector('.post-link-share').addEventListener('click', ev => {
  ev.preventDefault();
  const { currentTarget } = ev;
  const { offsetTop, offsetLeft } = currentTarget;
  const postShareMenu = document.querySelector('.post-share-menu');
  const top = `${
    offsetTop -
    window.getComputedStyle(postShareMenu).height.match(/\d+/g)[0] -
    6 -
    7
  }px`;
  const left = `${offsetLeft - 18}px`;

  postShareMenu.style.top = top;
  postShareMenu.style.left = left;
  postShareMenu.classList.add('shown');
});

document.querySelector('.post-link-like').addEventListener('click', ev => {
  ev.preventDefault();
  const likeIcon = document.querySelector('.post-likes .icon-like use');
  const likeIconHref = likeIcon.getAttribute('xlink:href');
  likeIcon.setAttribute('xlink:href', `${likeIconHref}-active`);
});
