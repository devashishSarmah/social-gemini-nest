import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {

  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {
  }

  async create(post: Post) {
    const _post = this.postRepository.create(post);

    return await this.postRepository.save(_post);
  }

}
