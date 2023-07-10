describe('Microdegree app login', function() {
  it('Login page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Username')
    cy.contains('Password')
  })

  it('User can log in', function() {
    cy.visit('http://localhost:5000')
    cy.get('#username').type('firma')
    cy.get('#password').type('firma')
    cy.get('#login-button').click()
    cy.contains('Courses')
    cy.contains('Firma Oy logged in')
  })
})

describe('Microdegree app views', function() {
  it('User can view a single course', function() {
    cy.visit('http://localhost:5000')
    cy.get('#username').type('firma')
    cy.get('#password').type('firma')
    cy.get('#login-button').click()
    cy.contains('Courses')

    cy.contains('Tekniikan ABC').click()
    cy.contains('Tekniikan ABC')
    cy.contains('Course description')
    cy.contains('Opit kaiken tekniikasta')
  })

  it('User can view a single company page', function() {
    cy.visit('http://localhost:5000')
    cy.get('#username').type('firma')
    cy.get('#password').type('firma')
    cy.get('#login-button').click()
    cy.contains('Courses')

    cy.contains('Companies').click()
    cy.contains('Tekijät Oy').click()
    cy.contains('Micro degrees by Tekijät Oy')
  })

  it('User can view the course adding page', function() {
    cy.visit('http://localhost:5000')
    cy.get('#username').type('firma')
    cy.get('#password').type('firma')
    cy.get('#login-button').click()
    cy.contains('Courses')

    cy.contains('Add a course').click()
    cy.contains('Add a new course!')
    cy.contains('Course title')
    cy.contains('Company name')
    cy.contains('Course description')
    cy.contains('Add!')
  })
})