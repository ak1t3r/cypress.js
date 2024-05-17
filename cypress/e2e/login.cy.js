describe('Проверка Авторизации', function () {

    it('Верный лог и верный пасс(Напиши проверку на позитивный кейс авторизации)', function () {
         cy.visit('https://login.qa.studio'); //зайти на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //цвет кнопки Восстановить пароль
         cy.get('#mail').type('german@dolnikov.ru'); //ввести верный лог
         cy.get('#pass').type('iLoveqastudio1'); //ввести верный пасс
         cy.get('#loginButton').click(); //юз кнопка Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //после авторизации виден текст
         cy.get('#messageHeader').should('be.visible'); //текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть Х и он виден
     })

     it('Верный лог и неверный пасс(Напиши проверку на негативный кейс авторизации)', function () {
        cy.visit('https://login.qa.studio'); //зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //цвет кнопки Восстановить пароль
        cy.get('#mail').type('german@dolnikov.ru'); //ввести верный лог
        cy.get('#pass').type('iLoveqastudio'); //ввести неверный пасс
        cy.get('#loginButton').click(); //юз кнопка Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть Х и он виден
    })

    it('Валидация(Напиши проверку на негативный кейс валидации)', function () {
        cy.visit('https://login.qa.studio'); //зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //цвет кнопки Восстановить пароль
        cy.get('#mail').type('germandolnikov.ru'); //ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввести верный пасс
        cy.get('#loginButton').click(); //юз кнопка Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть Х и он виден
    })

    it('Неверный лог и верный пасс(Напиши проверку на негативный кейс авторизации:)', function () {
        cy.visit('https://login.qa.studio'); //зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //цвет кнопки Восстановить пароль
        cy.get('#mail').type('german@dolnikov1.ru'); //ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввести верный пасс
        cy.get('#loginButton').click(); //юз кнопка Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть Х и он виден
    })

    it('Забыли пароль(Напиши автотест на проверку логики восстановления пароля)', function () {
        cy.visit('https://login.qa.studio'); //зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //цвет кнопки Восстановить пароль
        cy.get('#forgotEmailButton').click(); //юз кнопка Восстановить пасс
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести верный лог
        cy.get('#restoreEmailButton').click(); //юз кнопка Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть Х и он виден
    })

    it('Разный регистр в логине и верный пасс(Напиши проверку на приведение к строчным буквам в логине)', function () {
        cy.visit('https://login.qa.studio'); //зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //цвет кнопки Восстановить пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввести верный лог
        cy.get('#pass').type('iLoveqastudio1'); //ввести верный пасс
        cy.get('#loginButton').click(); //юз кнопка Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть Х и он виден
    })
 })
