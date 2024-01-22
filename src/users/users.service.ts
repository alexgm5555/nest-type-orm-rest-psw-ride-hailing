import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { getDataById } from 'src/utils';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getDataByEmail } from 'src/utils/crudFunctions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      let { roleId, ...userData } = createUserDto;
      let roleData = await getDataById(roleId, this.roleRepository, );

      const newCar = this.userRepository.create({ role: roleData, ...userData});
      return this.userRepository.save(newCar);
    } catch (error) {
      this.handleDBExeptions(error);
    }
  }

  async findOnebyId(id: string) {
    return await getDataById(id, this.userRepository )
  }

  async findOnebyEmail(userEmail: string) {
    return await getDataByEmail(userEmail, this.userRepository )
  }

  handleDBExeptions(error: any) {
    throw new Error('Method not implemented.');
  }
}
