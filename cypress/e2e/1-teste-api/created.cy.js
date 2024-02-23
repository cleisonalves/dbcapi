describe('Create User', () => {
    it('Criar um usuário via API e verificar o Body da requisição', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'John Doe',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal('John Doe');
        expect(response.body.job).to.equal('leader');
        
        const userId = response.body.id;
        cy.log(`ID do usuário criado: ${userId}`);
        
        const dataCreate = response.body.createdAt;
        cy.log(`Data da criação da requisição: ${dataCreate}`);
        
      });      
    });
  });


  