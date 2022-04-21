import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Auth from 'App/Cache/Auth'

export default class ContentController {
    /**
     * Lấy thông tin người dùng từ token truyền vào.
     */
    public async getUserInfo({ request }: HttpContextContract) {
        const redisUser = await Auth.user(request)

        if (redisUser == null) {
            return {
                code: 2,
            }
        }

        const id = redisUser.id
        const user = await User.find(id)

        if (!user) {
            return {
                code: 1,
            }
        }

        return {
            code: 0,
            user: user,
        }
    }
}
