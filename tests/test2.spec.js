// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
import locators from '../TestSuporte/locators.js'
import dadosFixtures from '../TestSuporte/testFixtures.json'
import { PrencherCadastro } from '../TestSuporte/testComands.js'

test.beforeEach(async({page}) => {
  // Abre a página do site
  await page.goto('https://automationexercise.com/');
})

test.describe('Cadastro', () => {
  test('primeiro teste', async ({ page }) => {
  
    await PrencherCadastro(page)

  });

})