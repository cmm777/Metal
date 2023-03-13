describe('Band tests UI', () => {
  
  it('1. Band profile page can be accessed', () => {
    cy.visit('https://www.metal-archives.com/')
    cy.get('#searchQueryBox').type('Metallica')
    cy.get('button.btn_submit').contains('Submit').click();
    cy.get('h1.band_name').then(($band_name) => {
      expect($band_name.text()).to.eq('Metallica')
    })
  })
  
  it('2. Band status is active', () => {
    cy.visit('https://www.metal-archives.com/')
    cy.get('#searchQueryBox').type('Metallica')
    cy.get('button.btn_submit').contains('Submit').click();
    cy.xpath('//div[@id="band_stats"]//dt[text()="Status:"]/following-sibling::dd[1]').then(($band_status) => {
      expect($band_status.text()).to.eq('Active')
    })
  })

})