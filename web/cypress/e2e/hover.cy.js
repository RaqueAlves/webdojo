describe('Simulando Mouseover', ()=> {

    it('Deve mostrar o tooltip ao passar o mouse sobre o botão.', ()=> {
        cy.login()
        
        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist')
    })
})