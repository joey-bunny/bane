import{ Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn ()
    id: Number;

    @Column()
    discordId: string;

    @Column()
    discriminator: string;

    @Column({ nullable: true })
    avatar: string;
}
