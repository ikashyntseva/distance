"use strict";

document.querySelector('.post-link-share').addEventListener('click', function (ev) {
  ev.preventDefault();
  var currentTarget = ev.currentTarget;
  var offsetTop = currentTarget.offsetTop,
      offsetLeft = currentTarget.offsetLeft;
  var postShareMenu = document.querySelector('.post-share-menu');
  var top = "".concat(offsetTop - window.getComputedStyle(postShareMenu).height.match(/\d+/g)[0] - 6 - 7, "px");
  var left = "".concat(offsetLeft - 18, "px");
  postShareMenu.style.top = top;
  postShareMenu.style.left = left;
  postShareMenu.classList.add('shown');
});
document.querySelector('.post-link-like').addEventListener('click', function (ev) {
  ev.preventDefault();
  var likeIcon = document.querySelector('.post-likes .icon-like use');
  var likeIconHref = likeIcon.getAttribute('xlink:href');
  likeIcon.setAttribute('xlink:href', "".concat(likeIconHref, "-active"));
});