import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Content extends BaseModel {
  public static table = 'content'

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public description: string

  @column()
  public thumbnail: string

  @column() // { serializeAs: null }
  public content: string

  @column()
  public status: number

  @column()
  public type: number

  @column.date()
  public publishedDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public readCount: number

  @column()
  public isMarked: number

  @column()
  public categoryId: number
}
