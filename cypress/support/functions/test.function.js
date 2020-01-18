
//funcoes que o teste ira ter
//import promisify from 'cypress-promise';
import { some } from 'bluebird';
var someText;

module.exports = {

  testRest2: function(){

    
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1', {})
      .then((response) => {
        expect(response.body).to.have.property('name').to.not.be.empty
        expect(response.body).to.have.property('username').to.not.be.empty
        expect(response.body).to.have.property('email').to.not.be.empty
        expect(response.body.company.catchPhrase).to.be.lengthOf(38)
        expect(response.body.email).to.be.a('string')

  })
}
}
