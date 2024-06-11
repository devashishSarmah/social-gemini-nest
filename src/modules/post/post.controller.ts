import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  async create(@Body() body: PostEntity): Promise<PostEntity> {
    return await this.postService.create(body);
  }
}
