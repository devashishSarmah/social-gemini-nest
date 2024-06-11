import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'post',
})
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  user_id: number;

  @Column({
    nullable: false,
  })
  image_url: string;

  @Column({
    type: 'text',
  })
  caption: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  location: string;

  @CreateDateColumn()
  created_at: Date;
}
