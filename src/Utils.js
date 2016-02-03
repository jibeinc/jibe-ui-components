const $ = require('jquery');

class Utils {
  constructor() {

  }

  /**
   * Binds to either click or touch, based on what is available
   * @param element The jquery wrapped element to bind to
   * @param onClickFunction The function to call on click or touch
   */
  static bindClick(element, onClickFunction) {

    if ('ontouchstart' in document.documentElement) {
      element.on('touchstart', () => {
        element.on('touchend', () => {
          onClickFunction();
          element.off('touchend');
        });
        element.on('touchmove', () => {
          element.off('touchend');
        });
      });
    }
    else {
      element.on('click', onClickFunction);
    }
  }
}

module.exports = Utils;