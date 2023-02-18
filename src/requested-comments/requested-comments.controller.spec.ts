import { Test, TestingModule } from '@nestjs/testing';
import { RequestedCommentsController } from './requested-comments.controller';
import { RequestedCommentsService } from './requested-comments.service';

describe('RequestedCommentsController', () => {
  let controller: RequestedCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestedCommentsController],
      providers: [RequestedCommentsService],
    }).compile();

    controller = module.get<RequestedCommentsController>(RequestedCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
