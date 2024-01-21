import { Test, TestingModule } from '@nestjs/testing';
import { RoutesdoneController } from './routesdone.controller';
import { RoutesdoneService } from './routesdone.service';

describe('RoutesdoneController', () => {
  let controller: RoutesdoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesdoneController],
      providers: [RoutesdoneService],
    }).compile();

    controller = module.get<RoutesdoneController>(RoutesdoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
