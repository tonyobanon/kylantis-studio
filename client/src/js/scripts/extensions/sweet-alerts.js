/*=========================================================================================
	File Name: sweet-alerts.js
	Description: A beautiful replacement for javascript alerts
	----------------------------------------------------------------------------------------
	Item Name: Frest HTML Admin Template
	Version: 1.0
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function () {

  // Basic

  $('#basic-alert').on('click', function () {
    Swal.fire({
      title: 'Any fool can use a computer',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  });

  $('#with-title').on('click', function () {
    Swal.fire({
      title: 'The Internet?,',
      text: "That thing is still around?",
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    }
    )
  });

  $('#footer-alert').on('click', function () {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  });

  $('#html-alert').on('click', function () {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="https://pixinvent.com/" target="_blank">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="bx bx-like"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="bx bx-dislike"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
      customClass: {
        cancelButton: 'btn btn-danger ml-1',
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  });

  // Position

  $('#position-top-start').on('click', function () {
    Swal.fire({
      position: 'top-start',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })

  $('#position-top-end').on('click', function () {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })

  $('#position-bottom-start').on('click', function () {
    Swal.fire({
      position: 'bottom-start',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })
  $('#position-bottom-end').on('click', function () {
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })

  // Animations

  $("#bounce-in-animation").on('click', function () {
    Swal.fire({
      title: 'Bounce In Animation',
      showClass: {
        popup: 'animated bounceIn'
      },
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })

  })
  $("#fade-in-animation").on('click', function () {
    Swal.fire({
      title: 'Fade In Animation',
      showClass: {
        popup: 'animated fadeIn'
      },
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })
  $("#flip-x-animation").on('click', function () {
    Swal.fire({
      title: 'Flip In Animation',
      showClass: {
        popup: 'animated flipInX'
      },
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })
  $("#tada-animation").on('click', function () {
    Swal.fire({
      title: 'Tada Animation',
      showClass: {
        popup: 'animated tada'
      },
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })
  $("#shake-animation").on('click', function () {
    Swal.fire({
      title: 'Shake Animation',
      showClass: {
        popup: 'animated shake'
      },
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  })

  // type

  $('#type-success').on('click', function () {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    });
  });

  $('#type-info').on('click', function () {
    Swal.fire({
      title: "Info!",
      text: "You clicked the button!",
      icon: "info",
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    });
  });

  $('#type-warning').on('click', function () {
    Swal.fire({
      title: "Warning!",
      text: " You clicked the button!",
      icon: "warning",
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    });
  });

  $('#type-error').on('click', function () {
    Swal.fire({
      title: "Error!",
      text: " You clicked the button!",
      icon: "error",
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    });
  });

  // options

  $('#custom-icon').on('click', function () {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: '/app-assets/images/slider/04.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    })
  });

  $('#auto-close').on('click', function () {
    var timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <strong></strong> seconds.',
      timer: 2000,
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
      onBeforeOpen: function () {
        Swal.showLoading()
        timerInterval = setInterval(function () {
          Swal.getContent().querySelector('strong')
            .textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose: function () {
        clearInterval(timerInterval)
      }
    }).then(function (result) {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  });

  $('#outside-click').on('click', function () {
    Swal.fire({
      title: 'Click outside to close!',
      text: 'This is a cool message!',
      allowOutsideClick: true,
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    });
  });

  $('#prompt-function').on('click', function () {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3'],
      customClass: {
        cancelButton: 'btn btn-danger ml-1',
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then(function (result) {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html:
            'Your answers: <pre><code>' +
            JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  });

  $('#ajax-request').on('click', function () {
    Swal.fire({
      title: 'Search for a user',
      input: 'text',
      customClass: {
        cancelButton: 'btn btn-danger ml-1',
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: function (login) {
        return fetch("//api.github.com/users/" + login + "")
          .then(function (response) {
            if (!response.ok) {
              console.log(response)
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(function (error) {
            Swal.showValidationMessage(
              "Request failed:  " + error + ""
            )
          })
      },
      allowOutsideClick: function () {
        !Swal.isLoading()
      }
    }).then(function (result) {
      if (result.value) {
        Swal.fire({
          title: "" + result.value.login + "'s avatar",
          imageUrl: result.value.avatar_url
        })
      }
    })
  });

  // confirm options

  $('#confirm-text').on('click', function () {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Your text here!',
      customClass: {
        cancelButton: 'btn btn-danger ml-1',
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        Swal.fire(
          {
            icon: "success",
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          }
        )
      }
    })
  });

  $('#confirm-color').on('click', function () {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        cancelButton: 'btn btn-danger ml-1',
        confirmButton: 'btn btn-warning'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        Swal.fire({
          icon: "success",
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        })
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        })
      }
    })
  });

});
