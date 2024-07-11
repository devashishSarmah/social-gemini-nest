import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @Inject('REDIS') private redisClient: ClientProxy,
  ) {}

  async create(post: Post) {
    const _post = this.postRepository.create(post);
    const savedPost = await this.postRepository.save(_post);
    this.redisClient.send(
      { cmd: 'ADD' },
      { key: `${savedPost.user_id}`, payload: savedPost },
    );
    return savedPost;
  }
}
