import {
    getCookie,
    setCookie,
    deleteCookie,
} from './cookie.js'

// Tên cookie
const AUTH_COOKIE_NAME = 'authToken'
const AUTH_EXPIRED_NAME = 'authExpired'

/**
 * Lấy root domain.
 * Ví dụ main.platform.vn, ai.platform.vn, darkweb.platform.vn sẽ có cùng root domain là .platform.vn.
 */
function getRootDomain() {
    // Nếu host có chứa ký tự (không phải tất cả là số)
    // thì là domain, không phải IP
    // Logic thế cho đơn giản
    const host = location.host
    const hasAlphabet = /[a-z]/i.test(host)
    if (!hasAlphabet) {
        // Theo IP
        return location.host
    }

    // Theo domain
    const temp = host.split('.').reverse()
    if (temp.length > 2) {
        return '.' + temp[1] + '.' + temp[0]
    }
    return '.' + temp[0]
}

/**
 * Lấy giá trị token.
 */
export const getToken = function () {
    return getCookie(AUTH_COOKIE_NAME)
}

/**
 * Lưu token.
 * @param {string} token Giá trị token
 * @param {int} expiredTime Thời điểm hết hạn của token (đơn vị millisecond)
 */
export const setToken = function (token, expiredTime) {
    const rootDomain = getRootDomain()
    setCookie(AUTH_COOKIE_NAME, token, expiredTime, rootDomain)
    setCookie(AUTH_EXPIRED_NAME, expiredTime, expiredTime, rootDomain)
}

/**
 * Xóa token.
 */
export const deleteToken = function () {
    const rootDomain = getRootDomain()
    deleteCookie(AUTH_COOKIE_NAME, rootDomain)
    deleteCookie(AUTH_EXPIRED_NAME, rootDomain)
}
