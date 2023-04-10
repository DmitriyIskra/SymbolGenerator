import Bowerman from "../bowerman";
import Zombie from "../zombie";
import Magician from "../magician";
import Team from "../team";


let bowerman = new Bowerman('Svet','bowerman');
let zombie = new Zombie('Oleg','zombie');
let magician = new Magician('Sergey', 'magician')

const team = new Team();

const generator = team.gen()

team.add(bowerman);
team.add(zombie);
team.add(magician);

test('testing generator', () => { 
    generator.next();
    const result = generator.next().value;

    expect(result).toEqual(zombie);
})

test('testing end generator', () => { 
    generator.next();
    const result = generator.next().value;

    expect(result).toBe(undefined);
})