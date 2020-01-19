
//funcoes que o teste ira ter
//import promisify from 'cypress-promise';
import { some } from 'bluebird';
var userid;

module.exports = {

    getUser: function () {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1', {})
            .then((response) => {
                expect(response.body).to.have.property('name').to.not.be.empty
                expect(response.body).to.have.property('username').to.not.be.empty
                expect(response.body).to.have.property('email').to.not.be.empty
                expect(response.body.company.catchPhrase).to.be.lengthOf(38)
                expect(response.body.email).to.be.a('string')

                global.userid = response.body.id;

            })
    },
    postUser: function () {

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts', // baseUrl is prepended to url
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                userId: `${global.userid}`,
                id: 2,
                title: "Raiany 2",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })

    }
}
