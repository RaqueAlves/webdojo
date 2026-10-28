describe('Links abrindo nova guia/janela', ()=> {

    it('Validando o atributo do link do Instagram', ()=> {
        cy.login()

        cy.get('[data-cy="instagram-link"]')
        .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .should('have.attr', 'target', '_blank')
    })

    it('Acessa link de termos de uso removendo o target blank', ()=> {
        cy.login()

        cy.contains('Formulários').click()
        cy.contains('a', 'termos de uso').click()
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços.')
            .should('be.visible')
    })
})