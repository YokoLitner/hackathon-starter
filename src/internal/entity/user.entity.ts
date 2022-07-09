import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @ManyToMany(() => Role, (role) => role.id, {
    cascade: ['soft-remove'],
  })
  @JoinTable({
    name: 'user_roles_role',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  role: Role[];

  constructor(email: string, name: string, password: string, roles: Role[]) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.role = roles;
  }
}
