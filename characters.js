export const characters = {
    mario: {
        name: "Mario",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mario/main.png",
        tagline: "The all-around fighter with reliable combos",
        overview: "Mario is the quintessential all-around character in Super Smash Bros. His balanced attributes and straightforward yet effective moveset make him an excellent choice for both beginners and advanced players. Mario excels at close-quarters combat, with a variety of combo starters and finishers that allow him to rack up damage quickly. His Fireball projectile is great for controlling space and forcing approaches, while his Cape and F.L.U.D.D. provide unique edge-guarding and recovery options. Mario's aerials are fast and versatile, making him a threat both on the ground and in the air. While he lacks the raw power of some heavyweights, his consistency and adaptability make him a staple in competitive play. Mastering Mario means learning to string together creative combos, punish mistakes, and use his toolkit to adapt to any opponent.",
        stats: {
            speed: 5,
            power: 5,
            technique: 7,
            recovery: 6
        },
        moves: [
            {
                name: "Fireball (Neutral B)",
                description: "A projectile that bounces along the ground, useful for approaching, zoning, and edgeguarding. It can interrupt opponents and force them to jump or shield."
            },
            {
                name: "Cape (Side B)",
                description: "Reflects projectiles and turns opponents around, great for mind games, edgeguarding, and disrupting recoveries."
            },
            {
                name: "Super Jump Punch (Up B)",
                description: "A recovery move that can also be used as a quick out-of-shield option. It has invincibility on startup and can KO at high percentages."
            },
            {
                name: "F.L.U.D.D. (Down B)",
                description: "A water pump that can push opponents away, excellent for edge guarding, disrupting recoveries, and stage control."
            }
        ],
        strategy: "Focus on using Mario's excellent frame data to apply pressure and rack up damage with combos. His back throw is a reliable kill move, and his cape can be used both defensively and offensively. Use fireballs to force approaches and F.L.U.D.D. to control space. Mario's up-air and down-throw are great combo starters, and his forward-air spike is a powerful edgeguarding tool."
    },
    link: {
        name: "Link",
        image: "https://www.smashbros.com/assets_v2/img/fighter/link/main.png",
        tagline: "The versatile warrior with powerful projectiles",
        overview: "Link is a heavyweight fighter with a diverse arsenal of projectiles and powerful melee attacks. His ability to control space with bombs, arrows, and boomerang makes him a formidable opponent at any range. Link's sword gives him excellent reach, and his attacks can deal significant knockback. The Remote Bomb is a unique tool that allows for creative setups and recovery options. Link's Hero's Bow can be charged for extra damage, and his Boomerang can combo into other moves or disrupt opponents from afar. While Link is slower than some other fighters and has a larger hurtbox, his zoning tools and kill power make him a threat in the hands of a skilled player. Mastering Link involves learning to juggle his projectiles, control the pace of the match, and capitalize on openings with strong sword attacks.",
        stats: {
            speed: 4,
            power: 7,
            technique: 8,
            recovery: 6
        },
        moves: [
            {
                name: "Hero's Bow (Neutral B)",
                description: "A chargeable arrow that can be used for zoning, edge guarding, and combo setups. The longer you charge, the more damage and knockback it deals."
            },
            {
                name: "Boomerang (Side B)",
                description: "A projectile that returns to Link, can hit twice and set up combos. It can also be angled up or down for different trajectories."
            },
            {
                name: "Spin Attack (Up B)",
                description: "A powerful recovery move that also serves as a great out-of-shield option. It hits multiple times and can KO at high percentages."
            },
            {
                name: "Remote Bomb (Down B)",
                description: "A versatile tool for setups, recovery, and mind games. The bomb can be detonated remotely, allowing for creative edgeguards and traps."
            }
        ],
        strategy: "Use your projectiles to control space and force approaches. The Remote Bomb is crucial for both recovery and setups. Master the art of Z-dropping bombs and combining them with aerial attacks. Don't forget that your sword attacks have excellent range and power. Link's forward smash and up-air are potent kill moves, and his down-throw can combo into aerials at low percentages."
    },
    pikachu: {
        name: "Pikachu",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png",
        tagline: "Speed demon and combo machine",
        overview: "Pikachu is one of the fastest and most elusive fighters in Super Smash Bros. With a small hurtbox and lightning-quick attacks, Pikachu excels at weaving in and out of combat, punishing mistakes, and stringing together long combos. Thunder Jolt is a versatile projectile for controlling space, while Quick Attack gives Pikachu unmatched mobility and recovery options. Pikachu's aerials are fast and can combo into each other, and its Thunder move is a powerful vertical finisher. While Pikachu is light and can be KO'd early, its agility and combo potential make it a top-tier threat in the hands of a skilled player. Mastering Pikachu means learning to maximize movement, edgeguard relentlessly, and capitalize on every opening.",
        stats: {
            speed: 9,
            power: 4,
            technique: 9,
            recovery: 9
        },
        moves: [
            {
                name: "Thunder Jolt (Neutral B)",
                description: "A projectile that travels along the ground and walls, great for controlling space and starting combos."
            },
            {
                name: "Skull Bash (Side B)",
                description: "A charging headbutt that can be used for recovery or as a surprise attack."
            },
            {
                name: "Quick Attack (Up B)",
                description: "A two-part dash that gives Pikachu incredible recovery and mobility."
            },
            {
                name: "Thunder (Down B)",
                description: "A vertical lightning strike that can KO opponents and combo out of throws."
            }
        ],
        strategy: "Use Pikachu's speed and small size to avoid attacks and punish mistakes. Chain aerials and tilts for long combos, and use Quick Attack to recover from almost anywhere. Thunder Jolt can force approaches, and Thunder is a strong finisher. Edgeguard aggressively and use Pikachu's mobility to control the pace of the match."
    },
    samus: {
        name: "Samus",
        image: "https://www.smashbros.com/assets_v2/img/fighter/samus/main.png",
        tagline: "Ranged specialist with powerful projectiles",
        overview: "Samus is a heavyweight zoner who excels at keeping opponents at bay with a variety of projectiles. Her Charge Shot is a powerful tool for racking up damage and forcing approaches, while her Missiles and Bombs add layers to her zoning game. Samus has a strong recovery with her Screw Attack and can edgeguard effectively with her long-range aerials. While her close-quarters combat is slower than some fighters, her ability to control space and punish mistakes makes her a formidable opponent. Mastering Samus means learning to mix up projectile patterns, use her aerials for spacing, and capitalize on openings with Charge Shot and Smash attacks.",
        stats: {
            speed: 3,
            power: 8,
            technique: 7,
            recovery: 7
        },
        moves: [
            {
                name: "Charge Shot (Neutral B)",
                description: "A chargeable energy blast that deals heavy damage and knockback. Can be used for zoning and punishing."
            },
            {
                name: "Missile (Side B)",
                description: "Fires a homing or super missile, great for controlling space and pressuring shields."
            },
            {
                name: "Screw Attack (Up B)",
                description: "A spinning recovery move that hits multiple times and can be used out of shield."
            },
            {
                name: "Bomb (Down B)",
                description: "Drops a bomb that can be used for edgeguarding, recovery mixups, and setting traps."
            }
        ],
        strategy: "Zone with Charge Shot and Missiles, and use Bombs to control the ground. Punish approaches with Screw Attack and aerials. Samus's grab is long-range but slow, so use it to catch shielding opponents. Her up-smash and forward-smash are strong finishers."
    },
    fox: {
        name: "Fox",
        image: "https://www.smashbros.com/assets_v2/img/fighter/fox/main.png",
        tagline: "Technical master and fast attacker",
        overview: "Fox is one of the fastest and most technical characters in Super Smash Bros. His Blaster allows him to rack up damage from a distance, while his speed and agility make him a threat up close. Fox's Reflector can turn the tide against projectile users, and his up-smash is one of the best KO moves in the game. Fox excels at applying pressure with quick aerials and tilts, and his recovery is versatile but can be predictable. Mastering Fox requires precise execution, fast reactions, and the ability to string together combos with his fast moveset. Fox is light and can be KO'd early, but his offensive potential is unmatched in the right hands.",
        stats: {
            speed: 10,
            power: 4,
            technique: 10,
            recovery: 6
        },
        moves: [
            {
                name: "Blaster (Neutral B)",
                description: "A rapid-fire laser that racks up damage from a distance."
            },
            {
                name: "Fox Illusion (Side B)",
                description: "A quick dash that can be used for recovery or to surprise opponents."
            },
            {
                name: "Fire Fox (Up B)",
                description: "A multi-directional recovery move that can also deal damage."
            },
            {
                name: "Reflector (Down B)",
                description: "Reflects projectiles and can be used as a quick attack."
            }
        ],
        strategy: "Use Fox's speed to overwhelm opponents and apply constant pressure. Combo with up-tilt, up-air, and neutral-air. Use Blaster to force approaches and Reflector to counter projectiles. Fox's up-smash is a reliable KO move. Mix up recoveries to avoid being edgeguarded."
    },
    "captain-falcon": {
        name: "Captain Falcon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/captain_falcon/main.png",
        tagline: "Combo king and crowd favorite",
        overview: "Captain Falcon is a high-speed, high-risk, high-reward fighter known for his explosive combos and flashy finishers. His dash speed is among the best in the game, allowing him to close gaps quickly and start devastating combos. Falcon's Knee Smash is legendary for its KO power, and his aerials can string together for big damage. While his recovery can be predictable and he lacks a projectile, his offensive pressure and crowd-pleasing style make him a fan favorite. Mastering Captain Falcon means learning to read opponents, land grabs and aerials, and go for bold edgeguards and finishers.",
        stats: {
            speed: 9,
            power: 8,
            technique: 8,
            recovery: 5
        },
        moves: [
            {
                name: "Falcon Punch (Neutral B)",
                description: "A slow but extremely powerful punch that can KO at low percentages."
            },
            {
                name: "Raptor Boost (Side B)",
                description: "A dash attack that launches opponents and can combo into aerials."
            },
            {
                name: "Falcon Dive (Up B)",
                description: "A recovery move that grabs and launches opponents."
            },
            {
                name: "Falcon Kick (Down B)",
                description: "A fast, sliding kick that covers ground quickly and can catch opponents off guard."
            }
        ],
        strategy: "Use Falcon's speed to start combos with grabs and aerials. Go for Knee Smash finishers and edgeguard with down-air. Mix up recovery options and use Falcon Punch as a hard read. Falcon thrives on momentum and reads, so play aggressively and keep the pressure on."
    }
};

export default characters;
