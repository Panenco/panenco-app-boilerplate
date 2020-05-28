// test user

const user = {
  email: 'user-to-test@mail.com',
  password: '1010',
};

Cypress.Commands.add('login', () => {
  return cy
    .request({
      method: 'POST',
      url: 'https://baseAPI.url/',
      body: user,
    })
    .then((res) => {
      // setting cookies
      cy.setCookie(
        'auth',
        encodeURIComponent(
          JSON.stringify({
            auth: res.body.token,
          }),
        ),
      );
    });
});

// First element from paginated react-select component (id, api request name, field name to get from an array)
Cypress.Commands.add('paginatedSelectOption', (selector, getRequest, field) => {
  cy.get(`#${selector} input`).first().click({ force: true });
  cy.wait(getRequest);
  cy.get(getRequest).should((xhr) => {
    const { body } = xhr.response;
    expect(xhr.method).to.equal('GET');

    cy.get(`#${selector}`).find('div:last-of-type div').contains(body.items[0][field]).click();
  });
});

// First element from react-select component (id, option label)
Cypress.Commands.add('chooseReactSelectOption', (selector, option) => {
  cy.get(`#${selector} input`).first().click({ force: true });
  cy.get(`#${selector}`).find('div:last-of-type div').contains(option).click();
});

// First element from react-select component (id, text to type, option label)
Cypress.Commands.add('typeReactSelectOption', (selector, text, option) => {
  cy.get(`#${selector} input`)
    .first()
    .click({ force: true })
    .type(text, { force: true })
    .get(`[data-cy=${selector}MenuCy]`)
    .find('div:last-of-type div')
    .contains(option)
    .click();
});
