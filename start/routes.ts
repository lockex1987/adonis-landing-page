/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Trang landing
Route.get('/', 'LandingPageController.index')

// Lấy thông tin người dùng
Route.get('/me', 'LoginController.getUserInfo')

// Đăng xuất
Route.post('/logout', 'LoginController.logout')

Route.get('/tin-tuc', async () => {
    return 'Vào trang tin tức'
})

Route.get('/tin-tuc/danh-muc/:categoryLv1', async ({ params }) => {
    return 'Vào danh mục ' + params.categoryLv1
})

Route.get('/tin-tuc/download/:content', async ({ params }) => {
    return 'Download EPUB từ bài ' + params.content
})

Route.get('/tin-tuc/relate/:content', async ({ params }) => {
    return 'Danh sách bài viết liên quan của ' + params.content
})

Route.get('/tin-tuc/tag/:tag', async ({ params }) => {
    return 'Danh sách bài viết của thẻ ' + params.tag
})

Route.get('/tin-tuc/the-loai/:categoryLv2', async ({ params }) => {
    return 'Vào thể loại ' + params.categoryLv2
})

Route.get('/tin-tuc/:content', async ({ params }) => {
    return 'Xem chi tiết bài viết ' + params.content
})

Route.post('/like-news', async ({}) => {
    return 'Thêm like'
})

Route.post('/unlike-news', async ({}) => {
    return 'Bỏ like'
})

Route.get('/api/news/comment', async ({}) => {
    return 'Lấy danh sách bình luận'
})

Route.post('/api/news/comment', async ({}) => {
    return 'Thêm bình luận'
})

Route.get('/san-pham', async ({}) => {
    return 'Vào trang sản phẩm'
})

Route.post('/full-cart-items', async ({}) => {
    return 'Lấy thông tin chi tiết giỏ hàng'
})

Route.get('/dat-hang', async ({}) => {
    return 'Vào trang đặt hàng'
})

Route.post('/dat-hang', async ({}) => {
    return 'Thực hiện đặt hàng'
})

Route.get('/dieu-khoan', 'ContentController.getTermsOfService')
