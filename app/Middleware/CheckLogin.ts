import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auth from 'App/Cache/Auth'

export default class CheckLogin {
    /**
     * Danh sách các đường dẫn không kiểm tra.
     * Không có ký tự / ở đầu.
     * @var array
     */
    private exceptPaths = [
        'login',
        'logout',
        'me',
        'login-callback',
    ]

    public async handle(
        { request, response }: HttpContextContract,
        next: () => Promise<void>,
    ) {
        const path = request.url()
        console.log(path)

        /*
        if (this.exceptPaths.includes(path)) {
            await next()
            return
        }

        const redisUser = await Auth.user(request)
        if (!redisUser) {
            response.unauthorized({ error: 'Must be logged in' })
            return
        }
        */

        await next()
    }
}
