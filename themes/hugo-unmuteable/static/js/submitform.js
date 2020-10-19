// vanilla JS async form submission, thank you:
// https://pqina.nl/blog/async-form-posts-with-a-couple-lines-of-vanilla-javascript/

document.addEventListener('submit', e => {
   
  // Store reference to form to make later code easier to read
  const form = e.target;

  // get status message references
  const statusBusy = form.querySelector('.status-busy');
  const statusFailure = form.querySelector('.status-failure');

  // Post data using the Fetch API
  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    })
    // We turn the response into text as we expect HTML
    .then(res => res.text())

    // Let's turn it into an HTML document
    .then(text => new DOMParser().parseFromString(text, 'text/html'))

    // Now we have a document to work with let's replace the <form>
    .then(doc => {

      // Create result message container and copy HTML from doc
      const result = document.createElement('div');
      result.innerHTML = doc.body.innerHTML;

      // Allow focussing this element with JavaScript
      result.tabIndex = -1;

      // And replace the form with the response children
      form.parentNode.replaceChild(result, form);

      // Move focus to the status message
      result.focus();

    })
    .catch(err => {

      // Unlock form elements
      Array.from(form.elements).forEach(field => field.disabled = false);

      // Return focus to active element
      lastActive.focus();

      // Hide the busy state
      statusBusy.hidden = false;

      // Show error message
      statusFailure.hidden = false;

    });

  // Before we disable all the fields, remember the last active field
  const lastActive = document.activeElement;

  // Show busy state and move focus to it
  statusBusy.hidden = false;
  statusBusy.tabIndex = -1;
  statusBusy.focus();

  // Disable all form elements to prevent further input
  Array.from(form.elements).forEach(field => field.disabled = true);

  // Make sure connection failure message is hidden
  statusFailure.hidden = true;

  // Prevent the default form submit
  e.preventDefault();

});