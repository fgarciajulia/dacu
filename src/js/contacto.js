/*===========================================================*/
/*  Contact Form
/*===========================================================*/
$(document).ready(function () {
  $('#contact-form').validate({
    rules: {
      name: {
        minlength: 3,
        required: true
      },
      email: {
        minlength: 5,
        required: true
      },
      message: {
        required: true
      },
    },
    highlight: function (element) {
      $(element).closest('input').removeClass('success').addClass('error');
    },
    success: function (element) {
      element
        .text('').addClass('valid')
        .closest('input').removeClass('error').addClass('success');
    },
    submitHandler: function (form) {
      $.ajax({
        type: 'POST',
        url: 'php/contacto.php',
        data: $(form).serialize(),
        success: function () {
          $('.oculto').fadeOut(300);
          $('.enviado').delay(400).fadeIn(300);
          $('.Input').val('');
          $('.error').text('');
          $('.enviado').delay(5000).fadeOut(300);
          $('.oculto').delay(6000).fadeIn(300);
        }
      });
      return false; // required to block normal submit since you used ajax
    }
  });

});

(function (window) {


  // class helper functions from bonzohttps://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ('classList' in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie);
  } else {
    // browser global
    window.classie = classie;
  }

})(window);

(function () {
  // trim polyfill :https://developer.mozilla.org/en-US/docs/gjvaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function () {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function () {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call(document.querySelectorAll('.input__field')).forEach(function (inputEl) {
    // in case the input is already filled..
    if (inputEl.value.trim() !== '') {
      classie.add(inputEl.parentNode, 'input--filled');
    }

    // events:
    inputEl.addEventListener('focus',
      onInputFocus);
    inputEl.addEventListener('blur',
      onInputBlur);
  });

  function onInputFocus(ev) {
    classie.add(ev.target.parentNode, 'input--filled');
  }

  function onInputBlur(ev) {
    if (ev.target.value.trim() === '') {
      classie.remove(ev.target.parentNode, 'input--filled');
    }
  }
})();