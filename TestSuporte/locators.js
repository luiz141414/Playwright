
const locators = {
    
    paginaHome:  {
        btnSignupLogin: (page) => page.getByRole('link', { name: ' Signup / Login' }),
        
    },
    paginaSignup:{
        fildName: (page) => page.getByPlaceholder('name'),
        fildEmail: (page) => page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address'),
        btnSignup: (page) => page.getByRole('button', { name: 'Signup' })
    },

    paginaCadastro :{


    }
  

}
export default locators