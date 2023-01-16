before(function(){
    cy.fixture('testdata').then(function(testdata){
        this.testdata = testdata
    })

})