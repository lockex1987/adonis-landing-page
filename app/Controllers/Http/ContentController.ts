import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Content from 'App/Models/Content'

export default class ContentController {
    public async getTermsOfService(ctx: HttpContextContract) {
        const content = await Content
            // .query()
            // .setVisible(['content'])
            .findBy('slug', 'dieu-khoan-su-dung')
        return content
    }
}
