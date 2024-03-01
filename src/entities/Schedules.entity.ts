import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./RealEstate.entity";
import User from "./User.entity";

@Entity('schedules')
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User, (user) => user.schedules)
    user: User;
};

export default Schedule;