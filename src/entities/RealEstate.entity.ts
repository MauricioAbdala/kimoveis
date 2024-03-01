import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./Address.entity";
import Category from "./Category.entity";
import Schedule from "./Schedules.entity";

@Entity('realEstates')
class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({default: false, type: "boolean"})
    sold: boolean;


    @Column({default: 0, type: "decimal", precision: 10, scale: 2})
    value: number | string;

    @Column({ type: 'integer' })
    size: number;

    
    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type:"date"})
    updatedAt: string;

    @OneToOne(() => Address, {cascade:true})
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Array<Schedule>;
};

export default RealEstate;