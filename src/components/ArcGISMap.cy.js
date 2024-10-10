import { mount } from '@cypress/vue2';
import ArcGISMap from './ArcGISMap.vue'

describe('ArcGISMap Tests', () => {
  let recenterMapSpy;

  beforeEach(() => {
    // Create a spy for the recenterMap method
    recenterMapSpy = cy.spy();

    // Mount the component and replace the recenterMap method with the spy
    mount(ArcGISMap, {
      methods: {
        recenterMap: recenterMapSpy,
      },
    });

    // Log the body HTML to inspect rendering
    cy.get('body').then((body) => {
      console.log(body.html()); // Check what elements are rendered
    });
  });

  it('should call recenterMap when the Re-center button is clicked', () => {
    console.log('Attempting to find the Re-center button.');

    // Check if the "Re-center" button with the ID 'recenterBtn' is visible and click it
    cy.get('#recenterBtn', { timeout: 10000 }) // Using ID selector
      .should('be.visible')
      .and('not.be.disabled') // Ensure the button is not disabled
      .click()
      .then(() => {
        console.log('Re-center button clicked.');

        // Ensure the recenterMap method was called
        expect(recenterMapSpy).to.have.been.called;
      });
  });

});