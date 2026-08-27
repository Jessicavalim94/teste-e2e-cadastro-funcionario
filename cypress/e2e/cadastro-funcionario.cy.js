describe('Cadastro de Funcionário', () => {
  beforeEach(() => {
    cy.visit('http://10.51.47.20:5500/teste-e2e-cadastro-funcionario/site/')
  })

  it('Deve validar idade mínima de 18 anos exibindo mensagem de erro', () => {
    // 1. Preencher todos os campos do formulário
    cy.get('#name').type('Jéssica')
    cy.get('#email').type('jessica@gmail.com')
    cy.get('#age').type('18')
    cy.get('#cpf').type('12345678901')
    cy.get('#position').select('Desenvolvedor')
    cy.get('#salary').type('10000')

    // 2. Clicar no botão de envio
    cy.get('.primary-button').click()

    // 3. Validar a mensagem de erro esperada
    cy.get('#message').should('contain', 'Idade mínima de 18 anos')
    // 4. Validar que o formulário não foi enviado
    cy.get('#message').should('not.contain', 'Funcionário cadastrado com sucesso')
    // 5. Validar que o formulário não foi enviado
    cy.get('#message').should('not.contain', 'Funcionário cadastrado com sucesso')
    // Excluir funcionário cadastrado
    cy.get('#delete-button').click()
    //Confirmar exclusão
    cy.get('#confirm-delete-button').click()
    //Verificar se o funcionário foi excluído
    cy.get('#message').should('contain', 'Funcionário excluído com sucesso')
  })
})