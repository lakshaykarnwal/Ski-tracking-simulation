import ArcGISMap from './ArcGISMap.vue'

describe('<ArcGISMap />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ArcGISMap)
  })
})