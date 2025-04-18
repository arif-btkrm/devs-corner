import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';





@Entity()
export class Credentials {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable:false
    })
    title: string

    @Column("text")
    image: string

    @Column({
        type: "text",
        nullable:false
    })
    institution: string

    @Column({
        type: "text"
    })
    cartificateUrl: string

    @Column({
        type: "text",
    })
    cartificateId: string

    @Column({
        type: "text",
        nullable:false
    })
    courseDuration: string

    @Column({
        type: "date",
        nullable:false
    })
    achivedAt: Date

    @ManyToOne(() => User, (user) => user.credentials)
    user: User
    
}