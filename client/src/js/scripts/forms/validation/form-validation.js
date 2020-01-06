/*=========================================================================================
  File Name: form-validation.js
  Description: jquery bootsreap validation js
  ----------------------------------------------------------------------------------------
  Item Name: Frest HTML Admin Template
  Version: 1.0
  Author: PIXINVENT
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

(function(window, document, $) {
  'use strict';

  // Apparently, jqBootstrapValidation is quite outdated and is conforming to the bootstrap v4 form html structure, 
  // hence, we need to add class .control-group to every div with .form-group, so jqBootstrapValidation can
  // agree to add validation to the necessary inputs

  $('form .form-group').addClass('control-group');

  // Input, Select, Textarea validations except submit button
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

})(window, document, jQuery);
