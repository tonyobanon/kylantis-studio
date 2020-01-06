/*=========================================================================================
    File Name: page-account-settings.js
    Description: page user account settings
    ----------------------------------------------------------------------------------------
    Item Name: Frest HTML Admin Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {
    // language select
    var languageselect = $("#languageselect2").select2({
        dropdownAutoWidth: true,
        width: '100%'
    });
    // music select
    var musicselect = $("#musicselect2").select2({
        dropdownAutoWidth: true,
        width: '100%'
    });
    // movies select
    var moviesselect = $("#moviesselect2").select2({
        dropdownAutoWidth: true,
        width: '100%'
    });
    // birthdate date
    $('.birthdate-picker').pickadate({
        format: 'mmmm, d, yyyy'
    });
    // profile image upload
    new Dropzone(document.body, { // Make the whole body a dropzone
        url: "#", // Set the url
        clickable: "#select-files" // Define the element that should be used as click trigger to select files.
    });
});
(function (window, document, $) {
    'use strict';

    // Apparently, jqBootstrapValidation is quite outdated and is conforming to the bootstrap v4 form html structure, 
    // hence, we need to add class .control-group to every div with .form-group, so jqBootstrapValidation can
    // agree to add validation to the necessary inputs

    $('form .form-group').addClass('control-group');

    // Input, Select, Textarea validations except submit button
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
})(window, document, jQuery);
