import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/**
 * Trang landing.
 */
export default class LandingPageController {
    /**
     * Vào trang.
     */
    public async index({ view, request }: HttpContextContract) {
        // Sử dụng ở porfolio.edge
        const products = [
            {
                name: 'Rename',
                description: 'Chuẩn hóa, đổi tên file hàng loạt. Nén và giải nén các file truyện tranh.',
                technologies: [
                    'Bash',
                ],
                demoLink: 'https://lockex1987.com/posts/php%20-%20rename/',
                screenshot: '/images/portfolio/rename.png',
            },
            {
                name: 'Gia đình tôi',
                description: 'Cây phả hệ',
                technologies: [
                    'JS',
                ],
                demoLink: 'https://lockex1987.com/posts/project%20-%20my%20family/',
                screenshot: '/images/portfolio/my_family.png',
            },
            {
                name: 'Three.js',
                description: 'Tự tạo ebook',
                technologies: [
                    'three.js',
                ],
                demoLink: 'https://github.com/lockex1987/learn-threejs',
                screenshot: '/images/portfolio/learn_three.js.png',
            },
            {
                name: 'Lịch của tôi',
                description: 'Âm lịch, thông báo ngày lễ / ngày sinh nhật.',
                technologies: [
                    'progressive web app',
                    'pwa',
                    'push notification',
                ],
                demoLink: 'https://lockex1987.com/posts/project%20-%20lich%20cua%20toi/',
                screenshot: '/images/portfolio/lich_cua_toi.png',
            },
            {
                name: 'Batch downloader',
                description: 'Tiện ích download file hàng loạt, php, curl',
                technologies: [
                    'web extension',
                ],
                demoLink: 'https://lockex1987.com/posts/webext%20-%20batch%20downloader/',
                screenshot: '/images/portfolio/batch_downloader.png',
            },
            {
                name: 'Cloud downloader',
                description: 'usercloud, zippyshare, fshare, mega, tự động điều chỉnh độ cao của textarea cho khớp với nội dung, auto grow, scrollHeight',
                technologies: [
                    'web extension',
                ],
                demoLink: 'https://lockex1987.com/posts/webext%20-%20cloud%20downloader/',
                screenshot: '/images/portfolio/cloud_downloader.png',
            },
            {
                name: 'Media player',
                description: 'audio, video, subtitle, srt, lyric, lrc, karaoke, svg, fullscreen, vue, lock screen orientation',
                technologies: [
                    'js',
                    'vue',
                ],
                demoLink: 'https://lockex1987.com/posts/project%20-%20media%20player/',
                screenshot: '/images/portfolio/media_player.png',
            },
            {
                name: 'Tiện ích download subtitle từ YouTube',
                description: 'download youtube subtitle, closed caption, xml parser, import es6 module, web_accessible_resources',
                technologies: [
                    'web extension',
                ],
                demoLink: 'https://lockex1987.com/posts/webext%20-%20youtube%20subtitle%20downloader/',
                screenshot: '/images/portfolio/youtube_subtitle_downloader.png',
            },
            {
                name: 'SSO Passport',
                description: 'Đăng nhập tập trung',
                technologies: [
                    'laravel',
                    'redis',
                ],
                demoLink: 'https://github.com/lockex1987/sso-passport',
                screenshot: '/images/portfolio/sso_passport.png',
            },
            {
                name: 'SSO Admin',
                description: 'Các chức năng thường gặp',
                technologies: [
                    'laravel',
                    'vue',
                ],
                demoLink: 'https://github.com/lockex1987/sso-admin',
                screenshot: '/images/portfolio/sso_admin.png',
            },
            {
                name: 'Landing Page',
                description: 'Trang landing page, tin tức, sản phẩm',
                technologies: [
                    'adonis',
                    'node',
                    'typescript',
                ],
                demoLink: 'https://github.com/lockex1987/landing-page',
                screenshot: '/images/portfolio/landing_page.png',
            },
            {
                name: 'Websocket server',
                description: 'Chat, truyền file',
                technologies: [
                    'websocket',
                    'webrtc',
                    'deno',
                    'typescript',
                ],
                demoLink: 'https://github.com/lockex1987/websocket-server',
                screenshot: '/images/portfolio/websocket_server.png',
            },
        ]

        return view.render('pages/landing/landing', {
            products,
            request,
        })
    }
}
