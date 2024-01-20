interface SeedRoles {
  id: string;
  name: string;
}

interface SeedUser {
  email: string;
  fullName: string;
  phone: string;
  roleId: '001D' | '001R';
}

interface SeedCars {
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
    }
  ],
  users: [
    {
      email: 'test1@alex.co',
      fullName: 'test1FName',
      phone: '3144444441',
      roleId: '001D',
    },
    {
      email: 'test2@alex.co',
      fullName: 'test2FName',
      phone: '3144444441',
      roleId: '001R',
    },
    {
      email: 'test21@alex.co',
      fullName: 'test21FName',
      phone: '3144444442',
      roleId: '001D',
    },
    {
      email: 'test22@alex.co',
      fullName: 'test22FName',
      phone: '3144444442',
      roleId: '001D',
    },
    {
      email: 'test31@alex.co',
      fullName: 'test31FName',
      phone: '3144444443',
      roleId: '001R',
    },
    {
      email: 'test42@alex.co',
      fullName: 'test42FName',
      phone: '3144444444',
      roleId: '001R',
    },
  ],
  cars: [
    {
      placa: 'AAA111',
      brand: 'bmw',
      color: 'black',
      userEmail: 'test1@alex.co'
    },
    {
      placa: 'BBB111',
      brand: 'mazda',
      color: 'black',
      userEmail: 'test22@alex.co'
    },
    {
      placa: 'CCC111',
      brand: 'fiat',
      color: 'black',
      userEmail: 'test21@alex.co'
    }
  ]
};
