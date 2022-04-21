import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
    public static table = 'user'

    @column({ isPrimary: true })
    public id: number

    @column()
    public username: string

    @column()
    public fullName: string

    @column()
    public email: string

    @column()
    public avatar: string

    @column()
    public phone: string

    @column({ serializeAs: null })
    public password: string

    @column()
    public isActive: number

    @column()
    public organizationId: number
}
