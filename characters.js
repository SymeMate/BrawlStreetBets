export const characters = {
    mario: {
        name: "Mario",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mario/main.png",
        tagline: "The all-around fighter with reliable combos",
        overview: "Mario is the quintessential all-around character in Super Smash Bros. His balanced attributes and straightforward yet effective moveset make him an excellent choice for both beginners and advanced players. While he doesn't excel in any particular area, he has no significant weaknesses either.",
        stats: {
            speed: 5,
            power: 5,
            technique: 7,
            recovery: 6
        },
        moves: [
            {
                name: "Fireball (Neutral B)",
                description: "A projectile that bounces along the ground, useful for approaching and edgeguarding."
            },
            {
                name: "Cape (Side B)",
                description: "Reflects projectiles and turns opponents around, great for mind games and recovery mixups."
            },
            {
                name: "Super Jump Punch (Up B)",
                description: "A recovery move that can also be used as a quick out-of-shield option."
            },
            {
                name: "F.L.U.D.D. (Down B)",
                description: "A water pump that can push opponents away, excellent for edge guarding and recovery disruption."
            }
        ],
        strategy: "Focus on using Mario's excellent frame data to apply pressure and rack up damage with combos. His back throw is a reliable kill move, and his cape can be used both defensively and offensively. Use fireballs to force approaches and F.L.U.D.D. to control space."
    },
    link: {
        name: "Link",
        image: "https://www.smashbros.com/assets_v2/img/fighter/link/main.png",
        tagline: "The versatile warrior with powerful projectiles",
        overview: "Link is a heavyweight fighter with a diverse arsenal of projectiles and powerful melee attacks. His ability to control space with bombs, arrows, and boomerang makes him a formidable opponent at any range.",
        stats: {
            speed: 4,
            power: 7,
            technique: 8,
            recovery: 6
        },
        moves: [
            {
                name: "Hero's Bow (Neutral B)",
                description: "A chargeable arrow that can be used for zoning and edge guarding."
            },
            {
                name: "Boomerang (Side B)",
                description: "A projectile that returns to Link, can hit twice and set up combos."
            },
            {
                name: "Spin Attack (Up B)",
                description: "A powerful recovery move that also serves as a great out-of-shield option."
            },
            {
                name: "Remote Bomb (Down B)",
                description: "A versatile tool for setups, recovery, and mind games."
            }
        ],
        strategy: "Use your projectiles to control space and force approaches. The Remote Bomb is crucial for both recovery and setups. Master the art of Z-dropping bombs and combining them with aerial attacks. Don't forget that your sword attacks have excellent range and power."
    }
    // Add more characters as needed
};

export default characters;
