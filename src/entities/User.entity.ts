import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./Schedules.entity";

@Entity('users')
class User {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column({ length: 45 })
   name: string;

   @Column({ length: 45, unique: true })
   email: string;

   @Column({ length: 120 })
   password: string;

   @Column({default: false, type: "boolean"})
   admin: boolean;


    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @DeleteDateColumn({type: "date"})
    deletedAt: string | null;

   @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Array<Schedule>;

   @BeforeInsert()
   @BeforeUpdate()
   hashPassord() {
      const hasRounds: number = getRounds(this.password);

      if (!hasRounds) {
         this.password = hashSync(this.password, 10);
      };
   };
};

export default User;
