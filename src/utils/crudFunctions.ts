import { BadRequestException, InternalServerErrorException, NotFoundException } from "@nestjs/common";

/**
 * Function to preccharge new data to update register
 * @param id unique identificator to look into data base
 * @param toUpdate data to Update
 * @param repository repository of table to modify
 * @returns data mofified
 */
export const updateCode = async (
  id: string,
  toUpdate: any,
  repository: any
) => {
    let register = await  repository.preload({
      id,
      ...toUpdate
    });
    
    
    ownNotFoundException(id, register);
    return register
}
/**
 * function to eliminate register
 * @param id unique identificator to look into data base
 * @param repository repository of table to modify
 */
export const deleteCode =async (id: string, repository: any) => {
  const result = await repository.delete(id);
  if (result.affected === 0) {
    throw new NotFoundException(`Item with ID ${id} not found`);
  }
}

/**
 * function to get all data from table 
 * Remember that if you whant to use this function, you need create the import 
 * into model file to import as a dependecy like and it is Repository es necesary import from TpeOrem
 * imports: [
 *  TypeOrmModule.forFeature([
 *     Rutine
 *  ])
 * ],
 * @param id unique identificator to look into data base
 * @param repository repository of table to modify
 * @param relations it is a arry strint tha containt the relation into the table
 * @returns all register
 */
export const getDataById = async (
  id: string,
  repository: any,
  relations?: string[]
) => {
  const register = await repository.findOne({
    where: {id},
    relations: relations
  })
  ownNotFoundException(id, register);
  return register;
}
/**
 * function to get all data from table 
 * Remember that if you whant to use this function, you need create the import 
 * into model file to import as a dependecy like and it is Repository es necesary import from TpeOrem
 * imports: [
 *  TypeOrmModule.forFeature([
 *     Rutine
 *  ])
 * ],
 * @param id unique identificator to look into data base
 * @param repository repository of table to modify
 * @param relations it is a arry strint tha containt the relation into the table
 * @returns all register
 */
export const getDataByEmail = async (
  email: string,
  repository: any,
  relations?: string[]
) => {
  const register = await repository.findOne({
    where: {email},
    relations: relations
  })
  ownNotFoundException(email, register);
  return register;
}

export const ownNotFoundException = (id: string, register: any, ) => {
  if (!register)
      throw new NotFoundException(`Item with id: ${id} not found`);
}

export  const handleDBErrors= (error: any): never => { // el never fuerza a que jamas de un return en el metodo
  if (error.code === 23505)
    throw new BadRequestException(error.detail);
  console.log(error);
  throw new InternalServerErrorException('Please check Server logs');
    
}


