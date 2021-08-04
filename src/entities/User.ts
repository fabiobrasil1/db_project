import {Entity, PrimaryColumn,Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import {v4 as uuid} from "uuid" 
import { Highlight } from "./Highlight";

@Entity("users")
class User {
   @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Highlight, highlight => highlight.user )
    highlights: Highlight[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { User };
