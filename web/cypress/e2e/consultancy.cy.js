describe('Formulário de Consultoria', ()=> {

  beforeEach(()=> {
    cy.login()
    cy.goTo('Formulários', 'Consultoria')
  })
    
  it('Deve solicitar consultoria individual.', ()=> {
    const consultancyForm = {
      name: 'Raquel Alves Pinto',
      email: 'raquel@webdojo.com.br',
      phone: '(55) 55555-5555',
      consultancyType: 'Individual',
      personType: 'cpf',
      document: '123.456.789-00',
      discoveryChannels: ['Instagram', 'LinkedIn', 'Udemy', 'YouTube', 'Indicação de Amigo'],
      filePath: './cypress/fixtures/document.pdf',
      description: 'Preciso de uma consultoria para melhorar meu site e aumentar a conversão de leads.',
      newTecnologies: ['Cypress', 'React', 'Node.js', 'Playwright', 'TypeScript'],
      termsAccepted: true,
      successMessage: 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.'
    }

      cy.get('input[placeholder="Digite seu nome completo"]').type(consultancyForm.name)

      cy.get('input[placeholder="Digite seu email"]').type(consultancyForm.email)

      cy.get('input[placeholder="(00) 00000-0000"]')
        .type(consultancyForm.phone)
        .should('have.value', '(55) 55555-5555')

      cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(consultancyForm.consultancyType)

      if (consultancyForm.personType === 'cpf') {
        cy.contains('label', 'Pessoa Física')
          .find('input')
          .check()
          .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
          .find('input')
          .should('not.be.checked')
      } else if (consultancyForm.personType === 'cnpj') {
        cy.contains('label', 'Pessoa Jurídica')
          .find('input')
          .check()
          .should('be.checked')

        cy.contains('label', 'Pessoa Física')
          .find('input')
          .should('not.be.checked')
      }

      cy.contains('label', 'CPF')
        .parent()
        .find('input')
        .type(consultancyForm.document)
        .should('have.value', '123.456.789-00')

      for (const channel of consultancyForm.discoveryChannels) {
        cy.contains('label', channel)
          .find('input')
          .check()
          .should('be.checked')
      }

      cy.get('input[type=file]')
        .selectFile(consultancyForm.filePath, { force: true })

      cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(consultancyForm.description)

      for (const tech of consultancyForm.newTecnologies) {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
          .type(tech)
          .type('{enter}')

        cy.contains('label', 'Tecnologias')
          .parent()
          .contains('span', tech)
          .should('be.visible')
      }

      if (consultancyForm.termsAccepted) {
        cy.contains('label', 'Li e aceito os termos de uso')
          .find('input')
          .check()
          .should('be.checked')
      }

      cy.contains('button', 'Enviar formulário')
        .click()

      cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', consultancyForm.successMessage)
  })

  it('Deve solicitar consultoria In Company.', ()=> {
    const consultancyForm = {
      name: 'Raquel Alves Pinto',
      email: 'raquel@webdojo.com.br',
      phone: '(55) 55555-5555',
      consultancyType: 'In Company',
      personType: 'cnpj',
      document: '70636431000124',
      discoveryChannels: ['LinkedIn'],
      filePath: './cypress/fixtures/document.pdf',
      description: 'Preciso de uma consultoria para melhorar meu site e aumentar a conversão de leads.',
      newTecnologies: ['Cypress'],
      termsAccepted: true,
      successMessage: 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.'
    }

      cy.get('input[placeholder="Digite seu nome completo"]').type(consultancyForm.name)

      cy.get('input[placeholder="Digite seu email"]').type(consultancyForm.email)

      cy.get('input[placeholder="(00) 00000-0000"]')
        .type(consultancyForm.phone)
        .should('have.value', '(55) 55555-5555')

      cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(consultancyForm.consultancyType)

      if (consultancyForm.personType === 'cpf') {
        cy.contains('label', 'Pessoa Física')
          .find('input')
          .check()
          .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
          .find('input')
          .should('not.be.checked')
      } else if (consultancyForm.personType === 'cnpj') {
        cy.contains('label', 'Pessoa Jurídica')
          .find('input')
          .check()
          .should('be.checked')

        cy.contains('label', 'Pessoa Física')
          .find('input')
          .should('not.be.checked')
      }

      cy.contains('label', 'CNPJ')
        .parent()
        .find('input')
        .type(consultancyForm.document)
        //.should('have.value', '123.456.789-00')

      for (const channel of consultancyForm.discoveryChannels) {
        cy.contains('label', channel)
          .find('input')
          .check()
          .should('be.checked')
      }

      cy.get('input[type=file]')
        .selectFile(consultancyForm.filePath, { force: true })

      cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(consultancyForm.description)

      for (const tech of consultancyForm.newTecnologies) {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
          .type(tech)
          .type('{enter}')

        cy.contains('label', 'Tecnologias')
          .parent()
          .contains('span', tech)
          .should('be.visible')
      }

      if (consultancyForm.termsAccepted) {
        cy.contains('label', 'Li e aceito os termos de uso')
          .find('input')
          .check()
          .should('be.checked')
      }

      cy.contains('button', 'Enviar formulário')
        .click()

      cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', consultancyForm.successMessage)
  })

  it('Deve verificar os campos obrigatórios.', ()=> {
      cy.contains('button', 'Enviar formulário')
        .click()

      cy.contains('label', 'Nome Completo *')
        .parent()
        .find('p')
        .should('have.text', 'Campo obrigatório')
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')

      cy.contains('label', 'Email *')
        .parent()
        .find('p')
        .should('have.text', 'Campo obrigatório')
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')

      cy.contains('p', 'Você precisa aceitar os termos de uso')
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')
  })

})