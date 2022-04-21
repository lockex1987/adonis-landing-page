import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginLog from 'App/Models/LoginLog'
import User from 'App/Models/User'
import Auth from 'App/Cache/Auth'

/**
 * Xác thực người dùng.
 */
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

    /**
     * Thực hiện đăng xuất.
     */
    public async logout({ request }: HttpContextContract) {
        // Cập nhật trạng thái phiên trong MySQL là đã kết thúc
        // TODO: RedisUser
        const redisUser = await Auth.user(request) as User
        const userId = redisUser.id
        const token = Auth.getToken(request)
        await LoginLog.query()
            .where('user_id', userId)
            .where('token', token)
            .where('status', 1) // running
            .update({
                status: 2, // stop
            })

        // Xóa phiên ở Redis
        Auth.removeUser(request)

        return {
            code: 0,
        }
    }
}
