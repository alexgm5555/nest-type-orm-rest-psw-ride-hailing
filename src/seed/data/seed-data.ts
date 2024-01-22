import { v4 as uuid } from 'uuid';

interface SeedRoles {
  id: string;
  name: string;
}

interface SeedUser {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  roleId: string;
  idNumber: string
}

interface SeedCars {
  id: string;
  placa: string;
  brand: string;
  color: string;
  userEmail: string
}

interface SeedData {
  roles: SeedRoles[];
  users: SeedUser[];
  cars: SeedCars[];
}

export const initialData: SeedData = {
  roles: [
    {
      id: '001D',
      name: 'Driver',
    },
    {
      id: '001R',
      name: 'Rider',
    },
  ],
  users: [
    {
      id: uuid(),
      email: 'test1@alex.co',
      fullName: 'test1FName',
      phone: '3144444441',
      roleId: '001D',
      idNumber: '1011001111'
    },
    {
      id: uuid(),
      email: 'test2@alex.co',
      fullName: 'test2FName',
      phone: '3144444441',
      roleId: '001R',
      idNumber: '1011001112'
    },
    {
      id: uuid(),
      email: 'test21@alex.co',
      fullName: 'test21FName',
      phone: '3144444442',
      roleId: '001D',
      idNumber: '1011001113'
    },
    {
      id: uuid(),
      email: 'test22@alex.co',
      fullName: 'test22FName',
      phone: '3144444442',
      roleId: '001D',
      idNumber: '1011001114'
    },
    {
      id: uuid(),
      email: 'test31@alex.co',
      fullName: 'test31FName',
      phone: '3144444443',
      roleId: '001R',
      idNumber: '1011001115'
    },
    {
      id: uuid(),
      email: 'test42@alex.co',
      fullName: 'test42FName',
      phone: '3144444444',
      roleId: '001R',
      idNumber: '1011001116'
    },
  ],
  cars: [
    {
      id: uuid(),
      placa: 'AAA111',
      brand: 'bmw',
      color: 'black',
      userEmail: 'test1@alex.co'
    },
    {
      id: uuid(),
      placa: 'BBB111',
      brand: 'mazda',
      color: 'black',
      userEmail: 'test22@alex.co'
    },
    {
      id: uuid(),
      placa: 'CCC111',
      brand: 'fiat',
      color: 'black',
      userEmail: 'test21@alex.co'
    }
  ]
};
