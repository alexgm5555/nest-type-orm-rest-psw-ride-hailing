
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Role } from "src/roles/entities/role.entity";
import { Car } from "src/cars/entities/car.entity";
import { Routesdone } from "src/routesdone/entities/routesdone.entity";

@Entity()
export class User {
  @PrimaryColumn('uuid')
  id: string = uuid();

  @Column('bool',{
    default: true,
  })
  active?: Boolean;

  @Column('text',
    {unique: true}
  )
  email: string;

  @Column('text',
    {default: ''}
  )
  fullName: string;

  @Column('text', {
    default: '',
  })
  phone: string;

  @Column('text', {
    default: '',
  })
  tokenPayment: string;

  @Column('text', {
    default: '',
  })
  idNumber: string;

  @ManyToOne(() => Role, (role) => role.users, {
    cascade: true,
    eager: true,
  })
  role: Role;

  @OneToMany(() => Routesdone, (routesdone) => routesdone.userDriver)
  routesdoneDriver?: Routesdone[];

  @OneToMany(() => Routesdone, (routesdone) => routesdone.userRider)
  routesdoneRider?: Routesdone[];

  @OneToMany(() => Car, (car) => car.user)
  cars?: Car[];

  @BeforeInsert()
  checkUserInsert() {
    this.email = this.email
      .toLowerCase()
      .trim()
  }

  @BeforeUpdate()
  checkUserUpdate() {
    this.checkUserInsert();
  }
}
