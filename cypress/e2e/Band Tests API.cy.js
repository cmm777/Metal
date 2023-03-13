describe('Band tests API', () => {
  
  it('1. Band profile exists', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.metal-archives.com/search?searchString=Metallica&type=band_name',
      qs: {
        type: 'band_name',
        searchString: 'Metallica'
      },
    }).then(
      (response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('2. Band profile contains band information', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.metal-archives.com/bands/Metallica/125',

    }).then(
      (response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.contains('<dt>Country of origin:</dt>')
        expect(response.body).to.contains('<dd><a href="https://www.metal-archives.com/lists/US">United States</a></dd>')
        expect(response.body).to.contains('<dt>Location:</dt>')
        expect(response.body).to.contains('<dd>Los Angeles/San Francisco, California</dd>')
        expect(response.body).to.contains('<dt>Status:</dt>')
        expect(response.body).to.contains('<dd class="active">Active</dd>')
        expect(response.body).to.contains('<dt>Formed in:</dt>')
        expect(response.body).to.contains('<dd>1981</dd>')
      })
  })


})