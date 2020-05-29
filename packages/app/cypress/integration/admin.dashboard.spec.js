// import { format } from 'date-fns';

// import { baseAppPath } from '../../src/constants/url/admin';

// const entityShortDate = format(new Date(), 'HHmmss.SS');

describe('Admin', () => {
  beforeEach(() => {
    cy.login();
  });

  it('is logged in as admin', () => {
    cy.visit('/admin');
  });

  it('is cookies accepted', () => {
    cy.get('[data-cy=cookies-accepting]').click();
  });

  // it('patient creation', () => {
  //   cy.fixture('users').then((user) => {
  //     cy.server();
  //     cy.route('POST', '**/admins/*/patients').as('postPatient');

  //     cy.get('[data-intercom-target="add-patient-link"]').click();
  //     cy.url().should('include', addPatientPath);

  //     cy.get('[data-cy="firstName"]').clear();

  //     cy.get('[data-cy="firstName"]').type(user.patient.firstName).should('have.value', user.patient.firstName);

  //     cy.get('[data-cy="lastName"]').clear();

  //     cy.get('[data-cy="lastName"]').type(user.patient.lastName).should('have.value', user.patient.lastName);

  //     cy.get('.DayPickerInput').click({ force: true });
  //     cy.get('#birthday').click();

  //     cy.typeReactSelectOption('month', 'June', 'June');

  //     cy.typeReactSelectOption('year', '1996', '1996');

  //     cy.get('[data-cy="birthdayDatePickerDaysCy"]').contains(1).click();

  //     cy.get('[data-cy="email"]').clear();

  //     cy.get('[data-cy="email"]')
  //       .type(`${entityShortDate}-${user.patient.email}`)
  //       .should('have.value', `${entityShortDate}-${user.patient.email}`);

  //     cy.get('form').submit();
  //     cy.wait('@postPatient').should('have.property', 'status', 201);

  //     cy.get('@postPatient').should((xhr) => {
  //       expect(xhr.method).to.equal('POST');
  //       expect(xhr.response.body).to.include({
  //         ...user.patient,
  //         email: `${entityShortDate}-${user.patient.email}`,
  //       });

  //       cy.url().should('include', xhr.response.body.id);
  //     });
  //   });
  // });

  // it('change trajectory type', () => {
  //   cy.server();
  //   cy.route('GET', '**/protocols?**').as('getProtocols');
  //   cy.route('PATCH', '**/admins/*/trajectories/*').as('patchTrajectoryType');

  //   cy.paginatedSelectOption('trajectoryType', '@getProtocols', 'name');

  //   cy.get('[data-cy="trajectoryTypeSubmitCy"]').click();

  //   cy.wait('@patchTrajectoryType');
  // });

  // it('survey notes sharing', () => {
  //   cy.server();
  //   cy.route('PATCH', '**/sessions/*/notes/*').as('patchNote');

  //   cy.get('[data-cy="noteButtonLockCy"]').click();

  //   cy.wait('@patchNote').should('have.property', 'status', 200);

  //   cy.get('@patchNote').should((xhr) => {
  //     expect(xhr.method).to.equal('PATCH');
  //     expect(xhr.response.body).to.include({
  //       private: false,
  //     });
  //   });
  // });

  // it('survey notes editing', () => {
  //   cy.server();
  //   cy.route('PATCH', '**/sessions/*/notes/*').as('patchNote');

  //   cy.fixture('epd').then((epd) => {
  //     cy.get('[data-cy="noteContentTextareaCy"]').clear();

  //     cy.get('[data-cy="noteContentTextareaCy"]').type(epd.note).should('have.value', epd.note);

  //     cy.get('[data-cy="saveSessionNoteCy"]').click();

  //     cy.wait('@patchNote').should('have.property', 'status', 200);

  //     cy.get('@patchNote').should((xhr) => {
  //       expect(xhr.method).to.equal('PATCH');
  //       expect(xhr.response.body).to.include({
  //         body: epd.note,
  //       });
  //     });
  //   });
  // });

  // it('session notes unsharing', () => {
  //   cy.server();
  //   cy.route('PATCH', '**/interactions/*/notes/*').as('patchNote');

  //   cy.get('[data-cy="noteButtonUnlockCy"]').click();

  //   cy.wait('@patchNote').should('have.property', 'status', 200);

  //   cy.get('@patchNote').should((xhr) => {
  //     expect(xhr.method).to.equal('PATCH');
  //     expect(xhr.response.body).to.include({
  //       private: true,
  //     });
  //   });
  // });
});
