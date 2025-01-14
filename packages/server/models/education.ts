import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';





@Entity()
export class Education {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable:false
    })
    title: string

    @Column({
        type: "float",
        nullable:false
    })
    result: number

    @Column({
        type: "date",
        nullable:false
    })
    passingyear: number

    @ManyToOne(() => User, (user) => user.education)
    user: User
    
}