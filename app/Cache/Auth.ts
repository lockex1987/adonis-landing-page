import Redis from '@ioc:Adonis/Addons/Redis'
import { string } from '@ioc:Adonis/Core/Helpers'
import HttpContext from '@ioc:Adonis/Core/HttpContext'
import { RequestContract } from '@ioc:Adonis/Core/Request'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { v4 as uuid } from 'uuid'

type User = {
    id: number;
    username: string;
}

export default {
    /**
     * Lấy token từ cookie.
     */
    getTokenFromCookie(): string {
        const ctx = HttpContext.get() as HttpContextContract
        const { request } = ctx
        // Chú ý cẩn thận cookie có bị mã hóa không
        const token = request.cookie('authToken')
        return token ?? ''
    },

    /**
     * Lấy thông tin người dùng từ một giá trị token.
     */
    async getUserFromToken(token: string, request: RequestContract) {
        const redisKey = this.getRedisKeyFromToken(token, request)
        if (!redisKey) {
            return null
        }

        const redisValue = await Redis.get(redisKey)
        if (!redisValue) {
            return null
        }

        return JSON.parse(redisValue)
    },

    /**
     * Lấy thông tin người dùng hiện tại (đang được lưu ở Redis).
     */
    async user(request: RequestContract): Promise<User|null> {
        // const ctx = HttpContext.get() as HttpContextContract
        // const { request } = ctx

        // Nếu đã có ở request rồi thì lấy luôn
        /*
        if (!empty(request.attributes.checkUser)) {
            return request.attributes.user
        }
        */

        const redisKey = this.getRedisKeyFromRequest(request)

        const redisValue = await Redis.get(redisKey)
        const user = !redisValue ? null : JSON.parse(redisValue)

        // Lưu lại vào request luôn, để đỡ gọi Redis nhiều lần
        /*
        request.attributes.checkUser = true
        request.attributes.user = user
        */

        return user
    },

    /**
     * Lưu thông tin người dùng vào Redis (id, username).
     * Sử dụng sau khi đăng nhập thành công.
     */
    saveUser(user: User, request: RequestContract): [string, number] {
        const token = this.generateRandomToken()

        // Sinh code và lưu ở Redis trong 10 ngày
        const expiredTime = 10 * 24 * 60 * 60
        const redisKey = this.getRedisKeyFromToken(token, request)
        const redisValue = JSON.stringify({
            id: user.id,
            username: user.username,
        })
        Redis.set(redisKey, redisValue, 'EX', expiredTime)

        return [token, expiredTime]
    },

    /**
     * Cập nhật thông tin người dùng ở Redis (id, username).
     * Sử dụng ở chức năng "View as".
     */
    async updateUser(user: User, request: RequestContract) {
        const redisKey = this.getRedisKeyFromRequest(request)

        const redisValue = JSON.stringify({
            id: user.id,
            username: user.username,
        })

        // Lấy thời gian hết hạn cũ, không thay đổi thời gian hết hạn
        const expiredTime = await Redis.ttl(redisKey)

        Redis.set(redisKey, redisValue, 'EX', expiredTime)
    },

    /**
     * Loại bỏ thông tin người dùng khỏi Redis.
     * Sử dụng khi đăng xuất.
     */
    removeUser(request: RequestContract) {
        const redisKey = this.getRedisKeyFromRequest(request)
        Redis.del(redisKey)
    },

    /**
     * Lấy giá trị token từ request (trong header).
     */
    getToken(request: RequestContract): string {
        const token = (request.header('Authorization') ?? '').replace('Bearer ', '')
        return token
    },

    /**
     * Lấy ra Redis key để lưu token.
     */
    getRedisKeyFromToken(token: string, request: RequestContract): string {
        // Thêm IP của người dùng để nếu lỡ bị lộ thông tin token thì cũng không thực hiện được ở máy khác

        const ip = request.ip()
        return 'sso_token:' + token + '-' + ip
    },

    /**
     * Lấy Redis key từ request hiện tại.
     */
    getRedisKeyFromRequest(request: RequestContract): string {
        const token = this.getToken(request)
        const redisKey = this.getRedisKeyFromToken(token, request)
        return redisKey
    },

    /**
     * Sinh token ngẫu nhiên.
     */
    generateRandomToken(): string {
        const token = uuid() + string.generateRandom(100)
        return token
    },
}
