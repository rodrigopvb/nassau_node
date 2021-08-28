import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ modelName: 'users', freezeTableName: true })
export default class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  public id!: number;

  @Column
  public valid = true;

  @Column
  public name!: string;

  @Column
  @CreatedAt
  public createdAt!: Date;

  @Column
  @UpdatedAt
  public updatedAt!: Date;
}
