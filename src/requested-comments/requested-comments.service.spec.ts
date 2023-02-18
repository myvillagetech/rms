import { Test, TestingModule } from '@nestjs/testing';
import { RequestedCommentsService } from './requested-comments.service';

describe('RequestedCommentsService', () => {
  let service: RequestedCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestedCommentsService],
    }).compile();

    service = module.get<RequestedCommentsService>(RequestedCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
