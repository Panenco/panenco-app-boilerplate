// import { format } from 'date-fns';

// import { baseAppPath } from '../../src/constants/url/admin';

// const entityShortDate = format(new Date(), 'HHmmss.SS');

//
describe('Admin EPD', () => {
  beforeEach(() => {
    cy.login();
  });

  it('is logged in as admin', () => {
    cy.visit('/admin');

    // cy.url().should('include', baseAppPath);
  });

  it('is cookies accepted', () => {
    cy.get('[data-cy=cookies-accepting]').click();
  });

  // it('is active tab', () => {
  //   cy.server();
  //   cy.route('**/admins/*/patients/active?**').as('getActivePatients');

  //   cy.get('[data-cy="overview-list"]').click();
  //   cy.url().should('include', path);

  //   cy.wait('@getActivePatients');
  // });

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
  // it('resend invitation', () => {
  //   cy.server();
  //   cy.route('POST', '**/users/*/invite-again').as('postPatientInvitation');
  //   cy.get('[data-cy="accountUnconfirmedButton"]').click();

  //   cy.get('[data-cy="patientResendInvitation"]').click();
  //   cy.wait('@postPatientInvitation');
  //   cy.get('[data-cy="patientResendBackToEPD"]').click();
  // });

  // it('create trajectory', () => {
  //   cy.server();
  //   cy.route('POST', '**/admins/*/patients/*/trajectories').as('postTrajectory');

  //   cy.get('[data-cy="addActiveTrajectoryButton"]').click();

  //   cy.wait('@postTrajectory');
  // });

  // it('skip session', () => {
  //   cy.server();
  //   cy.route('POST', '**/admins/*/trajectories/*/sessions/next').as('postSessionCreate');
  //   cy.route('POST', '**/admins/*/trajectories/*/sessions/*/skip').as('postSessionSkip');
  //   cy.route('GET', '**/patients/*/trajectories').as('getPatientTrajectories');

  //   cy.get('[data-cy="addEventButtonCy"]').click();

  //   cy.chooseReactSelectOption('eventCreation', 'Survey');

  //   cy.get('[data-cy="eventCreationSubmitCy"]').click();

  //   cy.wait('@postSessionCreate');

  //   cy.get('[data-cy="sessionSkipCy"]').click();

  //   cy.wait('@postSessionSkip');
  // });

  // it('change trajectory type', () => {
  //   cy.server();
  //   cy.route('GET', '**/protocols?**').as('getProtocols');
  //   cy.route('PATCH', '**/admins/*/trajectories/*').as('patchTrajectoryType');

  //   cy.paginatedSelectOption('trajectoryType', '@getProtocols', 'name');

  //   cy.get('[data-cy="trajectoryTypeSubmitCy"]').click();

  //   cy.wait('@patchTrajectoryType');
  // });

  // it('add survey', () => {
  //   cy.server();
  //   cy.route('GET', '**/questionnaires?**').as('getQuestionnaires');
  //   cy.route('POST', '**/admins/*/trajectories/*/sessions/*/send').as('postSessionSend');
  //   cy.get('[data-cy="addQuestionnaireFromCatalogueCy"]').click();
  //   cy.wait('@getQuestionnaires');

  //   cy.get('[data-cy="questionnaireSearchInputCy"]').type('Agoraphobic');

  //   cy.wait('@getQuestionnaires');

  //   cy.get('[data-cy="questionnaireSearchInputCy"]').clear();

  //   cy.wait('@getQuestionnaires');

  //   cy.get('[data-cy="questionnaireSearchInputCy"]').type('AGO');

  //   cy.wait('@getQuestionnaires');

  //   cy.get('[data-cy="questionnaireCatalogueCheckboxCy"]').first().check({ force: true });
  //   cy.get('[data-cy="questionnaireCatalogueAddSubmitCy"]').click();

  //   cy.get('[data-cy="submitSessionSendCy"]').click();

  //   cy.wait('@postSessionSend');
  // });

  // it('send again session', () => {
  //   cy.server();
  //   cy.route('POST', '**/admins/*/sessions/*/send-again').as('postSessionSendAgain');

  //   cy.get('[data-cy="sessionSendAgainCy"]').click();

  //   cy.wait('@postSessionSendAgain');

  //   cy.get('[data-cy="sessionSendAgainGoBackCy"]').click();
  // });

  // it('survey notes unsharing', () => {
  //   cy.server();
  //   cy.route('PATCH', '**/sessions/*/notes/*').as('patchNote');

  //   cy.get('[data-cy="noteButtonUnlockCy"]').click();

  //   cy.wait('@patchNote').should('have.property', 'status', 200);

  //   cy.get('@patchNote').should((xhr) => {
  //     expect(xhr.method).to.equal('PATCH');
  //     expect(xhr.response.body).to.include({
  //       private: true,
  //     });
  //   });
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

  // it('survey notes removing', () => {
  //   cy.server();
  //   cy.route('DELETE', '**/sessions/*/notes/*').as('deleteNote');

  //   cy.get('[data-cy="noteButtonRemoveCy"]').click();

  //   cy.get('[data-cy="popupNoteRemoveButtonCy"]').click();

  //   cy.wait('@deleteNote').should('have.property', 'status', 204);

  //   cy.get('@deleteNote').should((xhr) => {
  //     expect(xhr.method).to.equal('DELETE');
  //   });
  // });

  // it('remove survey', () => {
  //   cy.server();
  //   cy.route('DELETE', '**/sessions/*').as('deleteSession');

  //   cy.get('[data-intercom-target="active-trajectory-target"] a').first().click();

  //   cy.get('[data-cy="sessionRemoveCy"]').click();
  //   cy.get('#primary-button-id-delete').click();

  //   cy.wait('@deleteSession');
  // });

  // it('add next session', () => {
  //   cy.server();
  //   cy.route('POST', '**/trajectories/*/interactions').as('postInteractionSend');

  //   cy.get('[data-cy="addEventButtonCy"]').click();

  //   cy.chooseReactSelectOption('eventCreation', 'Session');

  //   cy.get('[data-cy="eventCreationSubmitCy"]').click();

  //   cy.get('[data-cy="submitInteractionSendCy"]').click();

  //   cy.wait('@postInteractionSend');
  // });

  // it('session notes creation', () => {
  //   cy.server();
  //   cy.route('POST', '**/interactions/*/notes').as('postSessionNoteCreate');

  //   cy.get('[data-cy="addSessionNoteCy"]').click();

  //   cy.wait('@postSessionNoteCreate');
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

  // it('session notes sharing', () => {
  //   cy.server();
  //   cy.route('PATCH', '**/interactions/*/notes/*').as('patchNote');

  //   cy.get('[data-cy="noteButtonLockCy"]').click();

  //   cy.wait('@patchNote').should('have.property', 'status', 200);

  //   cy.get('@patchNote').should((xhr) => {
  //     expect(xhr.method).to.equal('PATCH');
  //     expect(xhr.response.body).to.include({
  //       private: false,
  //     });
  //   });
  // });

  // it('session notes editing', () => {
  //   cy.server();
  //   cy.route('PATCH', '**/interactions/*/notes/*').as('patchNote');

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

  // it('session notes removing', () => {
  //   cy.server();
  //   cy.route('DELETE', '**/interactions/*/notes/*').as('deleteNote');

  //   cy.get('[data-cy="noteButtonRemoveCy"]').click();

  //   cy.get('[data-cy="popupNoteRemoveButtonCy"]').click();

  //   cy.wait('@deleteNote').should('have.property', 'status', 204);

  //   cy.get('@deleteNote').should((xhr) => {
  //     expect(xhr.method).to.equal('DELETE');
  //   });
  // });

  // it('remove session', () => {
  //   cy.server();
  //   cy.route('DELETE', '**/interactions/*').as('deleteSession');

  //   cy.get('[data-cy="sessionRemoveCy"]').click();
  //   cy.get('#primary-button-id-delete').click();

  //   cy.wait('@deleteSession');
  // });

  // it('active notes tab', () => {
  //   cy.get('[data-intercom-target="page-files-card-note-id"]').click();
  //   cy.get('[data-cy="verticalSessionNotesCy"]').first().click();
  // });

  // it('ended notes tab', () => {
  //   cy.get('[data-cy="NotesSecondTabCy"]').click();
  // });

  // it('is documents tab', () => {
  //   cy.get('[data-intercom-target="page-files-card-documents-id"]').click();

  //   cy.url().should('include', '/files/documents/templates/page/1');
  // });

  // it('add document from template', () => {
  //   cy.server();
  //   cy.route('GET', '**/admins/*/templates?**').as('getTemplates');
  //   cy.route('GET', '**/admins/*/patients/*/documents?**').as('getDocuments');
  //   cy.route('POST', '**/admins/*/templates/*/related-to/*/documents').as('postDocument');

  //   cy.get('[data-intercom-target="add-templates-button-target"]').click();

  //   cy.paginatedSelectOption('templates', '@getTemplates', 'title');

  //   cy.get('.ql-editor p').clear();

  //   cy.get('.ql-editor p').type('New document content');

  //   cy.get('[data-cy="addFromTemplateSubmitCy"]').click();

  //   cy.wait('@postDocument');

  //   cy.wait('@getDocuments');

  //   cy.get('@getDocuments').should((xhr) => {
  //     expect(xhr.method).to.equal('GET');
  //     expect(xhr.response.body.items[0]).to.include({
  //       content: '<p>New document content</p>',
  //     });
  //   });
  // });

  // it('sending document', () => {
  //   cy.server();
  //   cy.route('POST', '**/admins/*/documents/*/send-to/*').as('sendDocument');

  //   cy.get('[data-cy="documentSendingButtonCy"]').first().click();

  //   cy.get('[data-cy="documentSendingPatientCheckboxCy"]').click({ force: true });
  //   cy.get('[data-cy="sendingSubmitButtonCy"]').click();

  //   cy.wait('@sendDocument');
  // });

  // it('deleting document', () => {
  //   cy.server();
  //   cy.route('DELETE', '**/users/documents/*').as('deleteDocument');

  //   cy.get('[data-cy="documentDeletingButtonCy"]').first().click();

  //   cy.get('[data-cy="deletingSubmitButtonCy"]').click();

  //   cy.wait('@deleteDocument');
  // });

  // it('treatment info edit', () => {
  //   cy.server();
  //   cy.route('GET', '**/patients/*/members?**').as('getAffiliates');
  //   cy.route('GET', '**/admins/*/patients/*/documents?**').as('getDocuments');
  //   cy.route('GET', '**/patients/*/trajectories?**').as('getTrajectories');
  //   cy.route('GET', '**/protocols?**').as('getProtocols');
  //   cy.route('PATCH', '**/patients/*').as('patchPatient');

  //   cy.get('[data-intercom-target="treatment-info-small-card-link-icon"]').click({ force: true });

  //   cy.fixture('users').then((user) => {
  //     const { patientTreatmentInfo } = user;

  //     cy.chooseReactSelectOption('natureTreatment', patientTreatmentInfo.natureTreatmentCy);

  //     cy.paginatedSelectOption('typeOfTrajectory', '@getProtocols', 'name');

  //     cy.get('[data-cy="treatmentSpecificationCy"]')
  //       .type(patientTreatmentInfo.treatmentSpecificationCy)
  //       .should('have.value', patientTreatmentInfo.treatmentSpecificationCy);

  //     cy.get('[data-cy="previousHealthcareCy"]')
  //       .type(patientTreatmentInfo.previousHealthcareCy)
  //       .should('have.value', patientTreatmentInfo.previousHealthcareCy);

  //     cy.get('[data-cy="referrerCy"]')
  //       .type(patientTreatmentInfo.referrerCy)
  //       .should('have.value', patientTreatmentInfo.referrerCy);

  //     cy.get('[data-cy="generalPractitionerCy"]')
  //       .type(patientTreatmentInfo.generalPractitionerCy)
  //       .should('have.value', patientTreatmentInfo.generalPractitionerCy);

  //     cy.get('[data-cy="otherHealthcareProvidersCy"]')
  //       .type(patientTreatmentInfo.otherHealthcareProvidersCy)
  //       .should('have.value', patientTreatmentInfo.otherHealthcareProvidersCy);

  //     cy.get('[data-cy="dbcNumberCy"]')
  //       .type(patientTreatmentInfo.dbcNumberCy)
  //       .should('have.value', patientTreatmentInfo.dbcNumberCy);

  //     cy.get('[data-cy="patientDescriptionCy"]')
  //       .type(patientTreatmentInfo.patientDescriptionCy)
  //       .should('have.value', patientTreatmentInfo.patientDescriptionCy);

  //     cy.get('[data-cy="registrationComplaintsCy"]')
  //       .type(patientTreatmentInfo.registrationComplaintsCy)
  //       .should('have.value', patientTreatmentInfo.registrationComplaintsCy);

  //     cy.get('[data-cy="helpRequestCy"]')
  //       .type(patientTreatmentInfo.helpRequestCy)
  //       .should('have.value', patientTreatmentInfo.helpRequestCy);

  //     cy.get('[data-cy="currentFunctioningCy"]')
  //       .type(patientTreatmentInfo.currentFunctioningCy)
  //       .should('have.value', patientTreatmentInfo.currentFunctioningCy);

  //     cy.get('[data-cy="historyCy"]')
  //       .type(patientTreatmentInfo.historyCy)
  //       .should('have.value', patientTreatmentInfo.historyCy);

  //     cy.get('[data-cy="contextCy"]')
  //       .type(patientTreatmentInfo.contextCy)
  //       .should('have.value', patientTreatmentInfo.contextCy);

  //     cy.get('[data-cy="resilienceCy"]')
  //       .type(patientTreatmentInfo.resilienceCy)
  //       .should('have.value', patientTreatmentInfo.resilienceCy);

  //     cy.get('[data-cy="medicationCy"]')
  //       .type(patientTreatmentInfo.medicationCy)
  //       .should('have.value', patientTreatmentInfo.medicationCy);

  //     cy.chooseReactSelectOption('clinicalDisorders', patientTreatmentInfo.clinicalDisordersCy);
  //     cy.chooseReactSelectOption('personalityDisorders', patientTreatmentInfo.personalityDisordersCy);
  //     cy.chooseReactSelectOption('somaticDisorders', patientTreatmentInfo.somaticDisordersCy);
  //     cy.chooseReactSelectOption('psychosocialFactors', patientTreatmentInfo.psychosocialFactorsCy);
  //     cy.chooseReactSelectOption('gafScore', patientTreatmentInfo.gafScoreCy);
  //   });

  //   cy.get('[data-cy="treatmentInfoSubmit"]').click();

  //   cy.wait('@patchPatient');
  //   cy.wait('@getAffiliates');
  //   cy.wait('@getDocuments');
  //   cy.wait('@getTrajectories');
  // });

  // it('detail info edit', () => {
  //   cy.server();
  //   cy.route('PATCH', '**/patients/*').as('patchPatient');
  //   cy.route('GET', '**/patients/*/members?**').as('getAffiliates');
  //   cy.route('GET', '**/admins/*/patients/*/documents?**').as('getDocuments');
  //   cy.route('GET', '**/patients/*/trajectories?**').as('getTrajectories');

  //   cy.get('[data-intercom-target="personal-info-small-card-link-icon"]').click({ force: true });

  //   cy.fixture('users').then((user) => {
  //     cy.get('[data-cy="firstName"]').clear();

  //     cy.get('[data-cy="firstName"]').type('Edited').should('have.value', 'Edited');

  //     cy.get('[data-cy="lastName"]').clear();

  //     cy.get('[data-cy="lastName"]').type(user.patient.lastName).should('have.value', user.patient.lastName);

  //     cy.get('[data-cy="female"]').click({ force: true });

  //     cy.get('.DayPickerInput').click({ force: true });
  //     cy.get('#birthday').click();

  //     cy.typeReactSelectOption('month', 'July', 'July');

  //     cy.typeReactSelectOption('year', '2000', '2000');

  //     cy.get('[data-cy="birthdayDatePickerDaysCy"]').contains(1).click();

  //     cy.get('[data-cy="email"]').clear();

  //     cy.get('[data-cy="email"]')
  //       .type(`${entityShortDate}-edit-${user.patient.email}`)
  //       .should('have.value', `${entityShortDate}-edit-${user.patient.email}`);

  //     cy.get('[data-cy="telephone"]').clear();

  //     cy.get('[data-cy="telephone"]').type(user.patient.telephone).should('have.value', user.patient.telephone);

  //     cy.get('[data-cy="alternativePhone"]')
  //       .type(user.editPatient.alternativePhone)
  //       .should('have.value', user.editPatient.alternativePhone);
  //     cy.get('[data-cy="education"]').type(user.editPatient.education).should('have.value', user.editPatient.education);
  //     cy.get('[data-cy="activity"]').type(user.editPatient.activity).should('have.value', user.editPatient.activity);
  //     cy.get('[data-cy="emergencyContactPerson"]')
  //       .type(user.editPatient.emergencyContactPerson)
  //       .should('have.value', user.editPatient.emergencyContactPerson);
  //     cy.get('[data-cy="emergencyContactPhone"]')
  //       .type(user.editPatient.emergencyContactPhone)
  //       .should('have.value', user.editPatient.emergencyContactPhone);
  //     cy.get('[data-cy="healthInsurance"]')
  //       .type(user.editPatient.healthInsurance)
  //       .should('have.value', user.editPatient.healthInsurance);
  //     cy.get('[data-cy="address"]').type(user.editPatient.address).should('have.value', user.editPatient.address);
  //     cy.get('[data-cy="postalCode"]')
  //       .type(user.editPatient.postalCode)
  //       .should('have.value', user.editPatient.postalCode);
  //     cy.get('[data-cy="townShip"]').type(user.editPatient.townShip).should('have.value', user.editPatient.townShip);

  //     cy.chooseReactSelectOption('nationality', user.editPatient.nationality);
  //     cy.chooseReactSelectOption('maritalStatus', user.editPatient.maritalStatus);
  //     cy.chooseReactSelectOption('country', user.editPatient.country);

  //     cy.get('form').submit();
  //     cy.wait('@patchPatient').should('have.property', 'status', 200);
  //     cy.wait('@getAffiliates');
  //     cy.wait('@getDocuments');
  //     cy.wait('@getTrajectories');
  //   });
  // });
});
