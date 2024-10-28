//comands
import locators from '../TestSuporte/locators.js'
import dadosFixtures from '../TestSuporte/testFixtures.json'
import { Faker, faker } from '@faker-js/faker';

export const PrencherCadastro = async (page) => {
    const fakerEmail = faker.internet.email();
    await locators.paginaHome.btnSignupLogin(page).click()
    // Expect a title "to contain" a substring.
    await locators.paginaSignup.fildName(page).fill(dadosFixtures.paginaSignup.name)
    await locators.paginaSignup.fildEmail(page).fill(fakerEmail)
    await locators.paginaSignup.btnSignup(page).click();

    await page.getByText('Mr.').check();
    await page.getByLabel('Password *').fill('123456789')
    await page.locator('#days').selectOption('14')
    await page.locator('#months').selectOption('December')
    await page.locator('#years').selectOption('1988');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('First name *').fill('Geraldo')
    await page.getByLabel('Last name *').fill('Souza')  
    await page.getByLabel('Company', { exact: true }).fill('CompanyTeste')
    await page.getByLabel('Address *').fill('Rua Teste, 123')
    await page.getByLabel('Country *').selectOption('Australia')
    await page.getByLabel('State *').fill('Rio de Janeiro')
    await page.getByLabel('City *').fill('Teste City')
    await page.locator('#zipcode').fill('12345') 
    await page.getByLabel('Mobile Number *').fill('999999999999999')
    
   
}