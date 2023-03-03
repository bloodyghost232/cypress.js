describe('магазин qa', function () {


    it ('оформление заказ', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('[href="https://sh3910517.c.had.su"]').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .header-cart').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Ekaterina');
        cy.get('#billing_last_name').type ('Fortnite');
        cy.get('#billing_address_1').type ('г.Москва, ул. Дубининская 80');
        cy.get('#billing_address_2').type ('подъезд 1, этаж 7, кв 130');
        cy.get('#billing_city').type ('Москва');
        cy.get('#billing_state').type ('Москва');
        cy.get('#billing_postcode').type ('127470');
        cy.get('#billing_phone').type ('89683931800');
        cy.get('#billing_email').type ('bloodyghosts23@gmail.com');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
        })
    })
    
