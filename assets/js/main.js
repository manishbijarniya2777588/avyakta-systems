// Avyakta — shared front-end logic.
// Everything here is a placeholder: no real auth or backend exists yet.
// Each handler is written so it's obvious where a real API call goes later.

function handlePlaceholderLogin(formId, redirectTo) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // TODO: replace with a real API call, e.g.
    // const res = await fetch('/api/auth/login', { method: 'POST', body: ... });
    // if (!res.ok) { show an error state, don't redirect }

    window.location.href = redirectTo || 'index.html';
  });
}

handlePlaceholderLogin('riderForm', 'index.html');
handlePlaceholderLogin('contractorForm', 'index.html');
handlePlaceholderLogin('municipalForm', 'index.html');
