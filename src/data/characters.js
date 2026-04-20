export const characters = [
  {
    id: "keqing",
    name: "Keqing",
    title: "Driving Thunder",
    rarity: 5,
    version: "1.0",
    element: "Electro",
    weapon: "Sword",
    region: "Liyue",
    role: "Main DPS",
    unlocked: true,
    lore: `The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.

    She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.`,
    abilities: [
      { id: "normal", 
        name: "Yunlai Swordsmanship", 
        desc: "Normal Attack: \n Performs up to 5 rapid strikes. \n\n Charged Attack: \n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes. \n\n Plunging Attack: \n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.", previews: ["normal", "normal-charge", "normal-plunge"]},
      { id: "skill", name: "Stellar Restoration", 
        desc: `Hurls a Lightning Stiletto that annihilates her opponents like the swift thunder.

        When the Stiletto hits its target, it deals Electro DMG to opponents in a small AoE, and places a Stiletto Mark on the spot hit.

        Hold
        Hold to adjust the direction in which the Stiletto shall be thrown.
        Stilettos thrown by the Hold attack mode can be suspended in mid-air, allowing Keqing to jump to them when using Stellar Restoration a second time.

        Lightning Stiletto
        If Keqing uses Stellar Restoration again or uses a Charged Attack while its duration lasts, it will clear the Stiletto Mark and produce different effects:

        If she uses Stellar Restoration again, she will blink to the location of the Mark and unleash one slashing attack that deals AoE Electro DMG. When blinking to a Stiletto that was thrown from a Holding attack, Keqing can leap across obstructing terrain.

        If Keqing uses a Charged Attack, she will ignite a series of thundering cuts at the Mark's location, dealing AoE Electro DMG.`, 
        
        previews: ["skill-charge", "skill-detonate", "skill-hold", "skill-normal", "skill-plunge", "skill-slash"]},
        
      { id: "burst", name: "Starward Sword", desc: "Keqing unleashes the power of lightning, dealing Electro DMG in an AOE. She then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby opponents simultaneously that deal multiple instances of Electro DMG. The final attack deals massive AoE Electro DMG.", previews: ["burst"] },
      { id: "ascension-1", name: "Thundering Penance", desc: "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's weapon gains an Electro Infusion for 5s.", previews: []},
      { id: "ascension-4", name: "Aristocratic Dignity", desc: "When casting Starward Sword, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.", previews: []},
      { id: "utility", name: "Land's Overseer", desc: "When dispatched on an expedition in Liyue, time consumed is reduced by 25%.", previews: []}
    ]
  },
  {
    id: "hu-tao",
    name: "Hu Tao",
    title: "Spirit of the Eternal Flame",
    rarity: 5,
    version: "1.3",
    weapon: "Polearm",
    element: "Pyro",
    region: "Liyue",
    role: "Main DPS",
    unlocked: true,
    lore: `Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs.
        She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang.
        Aside from this, she is also a talented poet whose many "masterpieces" have passed around Liyue's populace by word of mouth.`,
    abilities: [
      { id: "normal", 
        name: "Secret Spear of Wangsheng", 
        desc: "Normal Attack: \n Performs up to 5 rapid strikes. \n\n Charged Attack: \n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes. \n\n Plunging Attack: \n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.", previews: ["normal", "normal-charge", "normal-plunge"]},                 
      { id: "skill", name: "Guide to Afterlife", 
        desc: `Only an unwavering flame can cleanse the impurities of this world.
              Hu Tao consumes a set portion of her HP to knock the surrounding enemies back and enter the Paramita Papilio state.

              Paramita Papilio
              Increases Hu Tao's ATK based on her Max HP at the time of entering this state. ATK Bonus gained this way cannot exceed 400% of Hu Tao's Base ATK.
              Converts attack DMG to Pyro DMG, which cannot be overridden by any other elemental infusion.
              Charged Attacks apply the Blood Blossom effect to the enemies hit.
              Increases Hu Tao's resistance to interruption.

              Blood Blossom
              Enemies affected by Blood Blossom will take Pyro DMG every 4s. This DMG is considered Elemental Skill DMG.
              Each enemy can be affected by only one Blood Blossom effect at a time, and its duration may only be refreshed by Hu Tao herself.

              Paramita Papilio ends when its duration is over, or Hu Tao has left the battlefield or fallen.`, 
        
        previews: ["skill-charge", "skill", "skill-effect"]},
        
      { id: "burst", name: "Spirit Soother", desc: `Commands a blazing spirit to attack, dealing Pyro DMG in a large AoE.
      Upon striking the enemy, regenerates a percentage of Hu Tao's Max HP. This effect can be triggered up to 5 times, based on the number of enemies hit.
      If Hu Tao's HP is below or equal to 50% when the enemy is hit, both the DMG and HP Regeneration are increased.`, 
      previews: ["burst"] },
      { id: "ascension-1", name: "Flutter By", desc: "When a Paramita Papilio state activated by Guide to Afterlife ends, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s.", previews: []},
      { id: "ascension-4", name: "Sanguine Rouge", desc: "When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is increased by 33%.", previews: []},
      { id: "utility", name: "The More the Merrier", desc: "When Hu Tao cooks a dish perfectly, she has a 18% chance to receive an additional \"Suspicious\" dish of the same type.", previews: []}
    ]
  },
  {
    id: "clorinde",
    name: "Clorinde",
    title: "Candlebearer, Shadowhunter",
    rarity: 5,
    version: "4.7",
    element: "Electro",
    weapon: "Sword",
    region: "Fontaine",
    role: "Main DPS",
    unlocked: true,
    lore: `The mightiest Champion Duelist. Sword in hand, she defends justice in the Court of Fontaine.`,
    abilities: [
      { id: "normal", 
        name: "Oath of Hunting Shadows", 
        desc: "Normal Attack: \n Performs up to 5 rapid strikes. \n\n Charged Attack: \n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes. \n\n Plunging Attack: \n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.", previews: ["normal", "normal-charge", "normal-plunge"]},
      { id: "skill", name: "Hunter's Vigil", 
        desc: `Preparing her pistolet, she enters the "Night Vigil" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into "Swift Hunt" pistolet attacks, and the DMG dealt is converted into Electro DMG that cannot be overridden by infusions, and she will be unable to use Charged Attacks. Using her Elemental Skill will transform it into "Impale the Night": Perform a lunging attack, dealing Electro DMG. The DMG done through the aforementioned method is considered Normal Attack DMG.

        Swift Hunt
        When her Bond of Life is equal to or greater than 100% of her max HP: Performs a pistolet shot.
        When her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.

        Impale the Night
        The current percentage value of Clorinde's Bond of Life determines its effect:
        When the Bond of Life value is 0%, perform a normal lunging strike;
        When the Bond of Life value is less than 100% of her max HP, Clorinde is healed based on the Bond of Life value, and the AoE of the lunging attack and the DMG dealt is increased;
        When the value of the Bond of Life is equal to or greater than 100% of her max HP, use Impale the Night: Pact. The healing multiplier is increased, and the AoE and DMG dealt by the lunge is increased even further.

        In addition, when Clorinde is in the Night Vigil state, healing effects other than Impale the Night will not take effect and will instead be converted into a Bond of Life that is a percentage of the healing that would have been received.

        Clorinde will exit the "Night Vigil" state when she leaves the field.

        Arkhe: Ousia
        Periodically, when Clorinde's Swift Hunt shots strike opponents, she will summon a Surging Blade at the position hit that deals Ousia-aligned Electro DMG.`, 
        
        previews: ["skill-charge", "skill-detonate", "skill-hold", "skill-normal", "skill-plunge", "skill-slash"]},
        
      { id: "burst", name: "Starward Sword", desc: "Keqing unleashes the power of lightning, dealing Electro DMG in an AOE. She then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby opponents simultaneously that deal multiple instances of Electro DMG. The final attack deals massive AoE Electro DMG.", previews: ["burst"] },
      { id: "ascension-1", name: "Thundering Penance", desc: "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's weapon gains an Electro Infusion for 5s.", previews: []},
      { id: "ascension-4", name: "Aristocratic Dignity", desc: "When casting Starward Sword, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.", previews: []},
      { id: "utility", name: "Land's Overseer", desc: "When dispatched on an expedition in Liyue, time consumed is reduced by 25%.", previews: []}
    ]
  },
];