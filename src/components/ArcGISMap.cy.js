import { mount } from '@cypress/vue2';
import ArcGISMap from './ArcGISMap.vue'

describe('ArcGISMap Tests', () => {
  let recenterMapSpy;

  beforeEach(() => {
    recenterMapSpy = cy.spy();
    mount(ArcGISMap, {
      methods: {
        recenterMap: recenterMapSpy,
      },
    });

    cy.get('body').then((body) => {
      console.log(body.html());
    });
  });

  it('should call recenterMap when the Re-center button is clicked', () => {
    console.log('Attempting to find the Re-center button.');

    cy.get('#recenterBtn', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click()
      .then(() => {
        console.log('Re-center button clicked.');

        expect(recenterMapSpy).to.have.been.called;
      });
  });

});