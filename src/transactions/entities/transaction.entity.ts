
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "src/users/entities/user.entity";

@Entity()
export class Transaction {
  @PrimaryColumn('uuid')
  id: string = uuid();

  @Column('bool',{
    default: true,
  })
  active?: Boolean;

  @Column('text',
    {default: ''}
  )
  state: string;

  @Column('text',
    {default: ''}
  )
  locationIni: string;

  @Column('text',
    {default: ''}
  )
  locationEnd: string;

  @Column('number',
    {default: 0}
  )
  km: number;

  @Column('number',
    {default: 0}
  )
  value: number;
  @Column('text',
    {default: ''}
  )
  timeIni: string;

  @Column('text',
    {default: ''}
  )
  timeEnd: string;

  @ManyToOne(() => User, (user) => user.transactionsDriver, {
    cascade: true,
    eager: true,
  })
  userDriver: User;

  @ManyToOne(() => User, (user) => user.transactionsRider, {
    cascade: true,
    eager: true,
  })
  userRider: User;
}
