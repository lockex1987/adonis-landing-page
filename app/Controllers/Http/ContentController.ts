// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Content from 'App/Models/Content'

export default class ContentController {
    // ctx: HttpContextContract
    public async getTermsOfService() {
        const content = await Content
            // .query()
            // .setVisible(['content'])
            .findBy('slug', 'dieu-khoan-su-dung')
        return content
    }
}
