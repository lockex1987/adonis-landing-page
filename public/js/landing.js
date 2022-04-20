/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./frontend/js/pages/landing.js ***!
  \**************************************/
/**
 * Animation khi scroll.
 */
function initAnimationOnScroll() {
  AOS.init({// duration: 800,
    // easing: 'slide',
    // once: true
  });
}
/**
 * Khởi tạo partical animation.
 */


function initParticleAnimation() {
  new JParticles.Particle('#particleGround', {
    color: 'rgba(255, 255, 255, 0.5)',
    num: 0.1,
    minR: 0.1,
    maxR: 1,
    maxSpeed: 1,
    minSpeed: 0.3 // proximity: 90,
    // range: 100

  });
}
/**
 * Animate counting number.
 * @param {Integer} number Con số cuối cùng
 * @param {Integer} duration Khoảng thời gian animation, tính theo milli giây
 */


function animateCountingNumber(spanDiv, number) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
  // Thời điểm đánh dấu bắt đầu animation
  var startTime = 0;
  /**
   * Hàm ease.
   * Tham số đầu vào là một số, khoảng thời gian đã trôi qua, trong khoảng 0 -> 1.
   * Trả về khoảng cách tương ứng, trong khoảng từ 0 -> 1.
   */

  var easeFunction = function easeFunction(x) {
    // easeOutExpo
    // return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    // linear
    return x;
  };
  /**
   * Thực hiện animation.
   */


  var animateNumber = function animateNumber() {
    startTime = performance.now();
    requestAnimationFrame(updateNumber);
  };
  /**
   * Hàm gọi mỗi frame khi animation.
   */


  var updateNumber = function updateNumber(currentTime) {
    var elapsedTime = currentTime - startTime;

    if (elapsedTime >= duration) {
      // Đã kết thúc
      callback(number);
    } else {
      // Tính toán số hiện tại
      var timeRate = 1.0 * elapsedTime / duration;
      var numberRate = easeFunction(timeRate);
      var currentNumber = Math.floor(numberRate * number);
      callback(currentNumber); // Thực hiện tiếp animation

      requestAnimationFrame(updateNumber);
    }
  };
  /**
   * Cập nhật giá trị hiện tại.
   */


  var callback = function callback(currentNumber) {
    spanDiv.textContent = currentNumber;
  };

  animateNumber();
}

initAnimationOnScroll();
initParticleAnimation();
animateCountingNumber(document.querySelector('#countingNumber2'), 250);
animateCountingNumber(document.querySelector('#countingNumber1'), 90);
Carousel.makeInfinite(document.querySelector('.nat-carousel-inner'));
/******/ })()
;
//# sourceMappingURL=landing.js.map