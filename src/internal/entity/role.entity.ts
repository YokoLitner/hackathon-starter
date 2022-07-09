import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Permission, (permission) => permission.id, {
    cascade: ['soft-remove'],
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'role_permissions_permission',
    joinColumn: { name: 'role_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' },
  })
  permissions: Permission[];

  constructor(name: string, permissions: Permission[]) {
    this.name = name;
    this.permissions = permissions;
  }
}
