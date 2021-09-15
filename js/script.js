$(document).ready(function () {
  TweenMax.from($(".left-section h1.first"), 1, {
    delay: 0.1,
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from($(".left-section h1.second"), 1, {
    delay: 0.4,
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.staggerFrom(
    $(".left-section .image-row .image"),
    1,
    {
      delay: 0.4,
      width: "0%",
      ease: Expo.easeInOut,
    },
    0.09
  );
  TweenMax.from($(".left-section p"), 1.2, {
    delay: 0.6,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut,
  });
  TweenMax.from($(".right-section"), 1.2, {
    delay: 0.8,
    width: "0%",
    ease: Expo.easeInOut,
  });
  TweenMax.from($(".sidebar"), 1.2, {
    delay: 1,
    opacity: 0,
    x: -200,
    ease: Expo.easeInOut,
  });
  TweenMax.from($(".sidebar a"), 1.2, {
    delay: 1.2,
    opacity: 0,
    x: -200,
    ease: Expo.easeInOut,
  });
  TweenMax.staggerFrom(
    $(".sidebar .social-icons ul li"),
    1,
    {
      delay: 1.4,
      opacity: 0,
      x: -100,
      ease: Expo.easeInOut,
    },
    0.09
  );
});
