describe('форма логина и пароля', function () {

    it ('правильный пароль,правильный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

    it ('верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio15');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');

        })
    it ('неверный логин, верный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.rurr');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        })

    it ('восстановление пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('bloodyghosts23@gmail.com');
       cy.get('#restoreEmailButton').click();
       cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
       })
    
       
    it ('ошибка валидации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.rurr');
       cy.get('#pass').type('iLoveqastudio1555');
       cy.get('#loginButton').click();

       cy.contains('Нужно исправить проблему валидации').should('be.visible');
       })


   it ('проверка к приведению строчных букв в логине', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('GerMan@Dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Авторизация прошла успешно').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
      })
   })