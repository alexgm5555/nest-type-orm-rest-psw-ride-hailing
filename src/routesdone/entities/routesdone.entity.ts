

import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "src/users/entities/user.entity";

@Entity()
export class Routesdone {
  @PrimaryColumn('uuid')
  id: string = uuid();

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

  @Column('float',
    {default: 0}
  )
  km: number;

  @Column('float',
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

  @Column('text',
    {default: ''}
  )
  idPaid: string;

  @Column('text',
    {default: ''}
  )
  idFront: string;

  @ManyToOne(() => User, (user) => user.routesdoneDriver, {
    cascade: true,
    eager: true,
  })
  userDriver: User;

  @ManyToOne(() => User, (user) => user.routesdoneRider, {
    cascade: true,
    eager: true,
  })
  userRider: User;
}
