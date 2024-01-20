
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Role } from "src/roles/entities/role.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";
import { Car } from "src/cars/entities/car.entity";

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

  @ManyToOne(() => Role, (role) => role.users, {
    cascade: true,
    eager: true,
  })
  role: Role;

  @OneToMany(() => Transaction, (transaction) => transaction.userDriver)
  transactionsDriver?: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.userRider)
  transactionsRider?: Transaction[];

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
