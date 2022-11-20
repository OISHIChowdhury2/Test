import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
// import bcrypt from 'bcryptjs';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()

  id!: number;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;


 

  // @BeforeInsert()
  // async hashPassword() {
  //   if (this.password) {
  //     this.password = await bcrypt.hash(this.password, 10);
  //   }
  // }
}
