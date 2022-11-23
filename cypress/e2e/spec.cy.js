describe('Check the Edit Status Functionally', () => {
  it('Check Option "Terima"', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('input[id="username"]').type("Admin")
    cy.get('input[id="password"]').type("654321")
    cy.get('button[type="submit"]').click()
    cy.get('a[id="admin"]').click()
    cy.get(':nth-child(3) > :nth-child(5) > form > .btn-success').click()
    cy.get('select[name="role"]').select('Siswa')
    cy.get('button[type="submit"]').click()
  });

  it('Check Option "Tidak Terima"', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('input[id="username"]').type("Admin")
    cy.get('input[id="password"]').type("654321")
    cy.get('button[type="submit"]').click()
    cy.get('a[id="admin"]').click()
    cy.get(':nth-child(3) > :nth-child(5) > form > .btn-success').click()
    cy.get('select[name="role"]').select('User')
    cy.get('button[type="submit"]').click()
  });
})
describe('Check the Search Functionally', () => {
  it('Check existing data', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('input[id="username"]').type("Admin")
    cy.get('input[id="password"]').type("654321")
    cy.get('button[type="submit"]').click()
    cy.get('a[id="admin"]').click()
    cy.get('input[id="search"]').type("joko")
    cy.get('button[id="cari"]').click()
  });

  it('Check missing data', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('input[id="username"]').type("Admin")
    cy.get('input[id="password"]').type("654321")
    cy.get('button[type="submit"]').click()
    cy.get('a[id="admin"]').click()
    cy.get('input[id="search"]').type("nagi")
    cy.get('button[id="cari"]').click()
  });
})