import { Test, TestingModule } from '@nestjs/testing';
import { RoutesdoneService } from './routesdone.service';

describe('RoutesdoneService', () => {
  let service: RoutesdoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutesdoneService],
    }).compile();

    service = module.get<RoutesdoneService>(RoutesdoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
