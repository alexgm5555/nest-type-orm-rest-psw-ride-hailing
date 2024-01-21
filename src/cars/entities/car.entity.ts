
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "src/users/entities/user.entity";

@Entity()
export class Car {
  @PrimaryColumn('uuid')
  id: string = uuid();

  @Column('text',
    {unique: true}
  )
  placa: string;
  
  @Column('text', {
    default: '',
  })
  brand: string;
  
  @Column('text', {
    default: '',
  })
  color: string;

  @ManyToOne(() => User, (user) => user.cars, {
    onDelete: 'CASCADE',
  })
  user: User;
}
