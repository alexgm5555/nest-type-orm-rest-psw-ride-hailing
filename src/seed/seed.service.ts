import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarsService } from 'src/cars/cars.service';
import { Role } from 'src/roles/entities/role.entity';
import { Routesdone } from 'src/routesdone/entities/routesdone.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { initialData } from './data/seed-data';
import { Car } from 'src/cars/entities/car.entity';
import { getDataById } from 'src/utils';
import { getDataByEmail } from 'src/utils/crudFunctions';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly userService: UsersService,
    
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,

    @InjectRepository(Routesdone)
    private readonly routesdoneRepository: Repository<Routesdone>
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertRoles();
    await this.insertUsersRole();
    await this.insertCarsUser();
    return 'SEED EXECUTE';
  }

  private async deleteTables() {
    await  this.routesdoneRepository.clear()
    await  this.carRepository.clear();
    const queryBuilderUser = this.userRepository.createQueryBuilder();
    await queryBuilderUser
    .delete()
    .where({})
    .execute()
    const queryBuilderRole = this.roleRepository.createQueryBuilder();
    await queryBuilderRole
    .delete()
    .where({})
    .execute()
    // await  this.roleRepository.clear();
    
  }


  private async insertRoles() {
    const seedRoles = initialData.roles;
    const roles: Role[] = [];
    seedRoles.forEach(role=>{
      roles.push(this.roleRepository.create(role))
    })
    await this.roleRepository.save(seedRoles);
  }

  private async insertUsersRole() {
    const seedUser = initialData.users;
    const inserPromises = [];
    seedUser.forEach((user) => {
      inserPromises.push(this.userService.create(user));
    });
    await Promise.all(inserPromises);

    return true;
  }

  private async insertCarsUser() {
    const seedCar = initialData.cars;
    const inserPromises = [];
    seedCar.forEach((car) => {
      inserPromises.push(this.carService.create(car));
    });
    await Promise.all(inserPromises);

    return true;
  }
}
