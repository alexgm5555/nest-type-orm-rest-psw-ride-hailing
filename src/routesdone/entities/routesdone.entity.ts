

import { Column, Entity, ManyToOne, Point, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "src/users/entities/user.entity";
import { Car } from "src/cars/entities/car.entity";

@Entity()
export class Routesdone {
  @PrimaryColumn('uuid')
  id: string = uuid();

  @Column('text',
    {default: 'active'}
  )
  state: string;

  @Column('text',
    {
      array: true,
      default: []
    }
  )
  locationIni: number[];

  @Column('text',
    {
      array: true,
      default: []
    }
  )
  locationEnd: number[];

  @Column('float',
    {default: 0}
  )
  ridesKm: number;

  @Column('float',
    {default: 0}
  )
  ridesValue: number;

  @Column({ type: 'timestamp', default: '1000-01-01 00:00:00' })
  timeIni: Date;

  @Column({ type: 'timestamp', default: '1000-01-01 00:00:00'})
  timeEnd: Date;

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

  @ManyToOne(() => Car, (car) => car.routesdones, {
    cascade: true,
    eager: true,
  })
  car: Car;
}
