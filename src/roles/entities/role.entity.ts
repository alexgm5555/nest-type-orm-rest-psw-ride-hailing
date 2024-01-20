import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "src/users/entities/user.entity";

@Entity()
export class Role {
  @PrimaryColumn('uuid')
  id: string;

  @Column('text' ,
  {
    unique: true
  })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

}
