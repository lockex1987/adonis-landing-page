import View from '@ioc:Adonis/Core/View'

View.global('mix', (text: string) => {
    return text
})
