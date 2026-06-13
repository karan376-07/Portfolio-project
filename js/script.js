// Accessible client-side form validation
// - Errors are announced via role="alert" live regions
// - aria-invalid is toggled on inputs
// - Focus moves to the first invalid field on submit

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successBox = document.getElementById("form-success");

  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("name-error"),
      validate: function (value) {
        return value.trim().length > 0 ? "" : "Please enter your name.";
      }
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
      validate: function (value) {
        if (value.trim().length === 0) return "Please enter your email address.";
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value) ? "" : "Please enter a valid email address.";
      }
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("message-error"),
      validate: function (value) {
        return value.trim().length > 0 ? "" : "Please enter a message.";
      }
    }
  };

  function validateField(field) {
    const errorText = field.validate(field.input.value);
    field.error.textContent = errorText;

    if (errorText) {
      field.input.setAttribute("aria-invalid", "true");
    } else {
      field.input.removeAttribute("aria-invalid");
    }
    return errorText === "";
  }

  // Validate on blur for immediate, non-intrusive feedback
  Object.values(fields).forEach(function (field) {
    field.input.addEventListener("blur", function () {
      validateField(field);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstInvalid = null;
    let allValid = true;

    Object.values(fields).forEach(function (field) {
      const isValid = validateField(field);
      if (!isValid) {
        allValid = false;
        if (!firstInvalid) {
          firstInvalid = field.input;
        }
      }
    });

    if (!allValid) {
      firstInvalid.focus();
      successBox.hidden = true;
      return;
    }

    // Simulate successful submission.
    // Replace this block with a real fetch() call to your backend/API.
    form.reset();
    Object.values(fields).forEach(function (field) {
      field.error.textContent = "";
      field.input.removeAttribute("aria-invalid");
    });

    successBox.hidden = false;
    successBox.focus();
  });
});
