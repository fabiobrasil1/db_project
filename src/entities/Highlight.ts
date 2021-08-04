
import { Entity, PrimaryColumn, Column, CreateDateColumn ,JoinColumn, ManyToOne, OneToMany } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("highlights")
    class Highlight {
        @PrimaryColumn()
        readonly id: string;

        @Column()
        highlights: string;
        
        @Column()    
        message: string;

        @Column()
        user_highlights: string;

        @CreateDateColumn()
        created_at: Date;

        @JoinColumn({name: "user_highlights" })
        @ManyToOne(() => User )
        user: User 




        constructor(){
            if(!this.id){
                this.id = uuid();
            }
        }

    }

    export { Highlight  }