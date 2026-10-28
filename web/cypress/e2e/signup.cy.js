describe('Cadastro', ()=> {
    beforeEach(()=> {
        cy.start()
        cy.goToSignup()

        cy.intercept('POST', 'http://localhost:3333/api/users/register', {
            statusCode: 200,
            body: {
                message: 'Usuário cadastrado com sucesso!'
            }
        }).as('postSignup')
    })

    it('Deve cadastrar um novo usuário com sucesso,', ()=> {
        cy.log('todo')

        cy.get('#name').type('Raquel Alves Pinto')
        cy.get('#email').type('raquel@teste.com')
        cy.get('#password').type('123456')

        cy.contains('button', 'Criar conta').click()

        cy.wait('@postSignup')
        cy.contains("Conta criada com sucesso!")
            .should('be.visible')
    })
})