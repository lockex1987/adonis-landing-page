import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * Log đăng nhập.
 */
export default class LoginLog extends BaseModel {
  public static table = 'login_log'

  @column({ isPrimary: true })
  public id: number

  @column()
  public userAgent: string

  @column()
  public browser: string

  @column()
  public os: string

  @column()
  public ip: string

  // Ẩn cột token ở JSON trả về
  @column({ serializeAs: null })
  public token: string

  @column()
  public status: number

  @column()
  public userId: number
}
