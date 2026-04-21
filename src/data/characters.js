export const characters = [
    {
        id: "amber",
        name: "Amber",
        title: "Gliding Champion",
        rarity: 4,
        version: "1.0",
        element: "Pyro",
        weapon: "Bow",
        region: "Mondstadt",
        role: "Sub-DPS",
        unlocked: true,
        lore: "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
        abilities: [
            {
                id: "normal",
                name: "Sharpshooter",
                desc: "Normal Attack\nPerforms up to 5 consecutive shots with a bow.\n\nCharged Attack\nPerform a more precise Aimed Shot with increased DMG.\nWhile aiming, flames will accumulate on the arrowhead. A fully charged flaming arrow will deal Pyro DMG.\n\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Explosive Puppet",
                desc: "The ever-reliable Baron Bunny takes the stage.\n\nBaron Bunny\nContinuously taunts the enemy, drawing their fire.\nBaron Bunny's HP scales with Amber's Max HP.\nWhen destroyed or when its timer expires, Baron Bunny explodes, dealing AoE Pyro DMG.\n\nHold\nAdjusts the throwing direction of Baron Bunny.\nThe longer the button is held, the further the throw.",
                previews: [
                    "skill-press",
                    "skill-hold"
                ]
            },
            {
                id: "burst",
                name: "Fiery Rain",
                desc: "Fires off a shower of arrows, dealing continuous AoE Pyro DMG.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Every Arrow Finds Its Target",
                desc: "Increases the CRIT Rate of Fiery Rain by 10% and widens its AoE by 30%.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-4",
                name: "Precise Shot",
                desc: "Aimed Shot hits on weak spots increase ATK by 15% for 10s",
                previews: []
            },
            {
                id: "utility",
                name: "Gliding Champion",
                desc: "Decreases gliding Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "One Arrow to Rule Them All",
                desc: "Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the first arrow's DMG."
            },
            {
                id: "const-2",
                level: 2,
                name: "Bunny Triggered",
                desc: "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.\nExplosion via manual detonation deals 200% additional DMG."
            },
            {
                id: "const-3",
                level: 3,
                name: "It Burns!",
                desc: "Increases the Level of Fiery Rain by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "It's Not Just Any Doll...",
                desc: "Decreases Explosive Puppet's CD by 20%. Adds 1 additional charge."
            },
            {
                id: "const-5",
                level: 5,
                name: "It's Baron Bunny!",
                desc: "Increases the Level of Explosive Puppet by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Wildfire",
                desc: "Fiery Rain increases all party members' Movement SPD by 15% and ATK by 15% for 10s."
            }
        ]
    },
    {
        id: "arlecchino",
        name: "Arlecchino",
        title: "Dire Balemoon",
        rarity: 5,
        version: "4.6",
        element: "Pyro",
        weapon: "Polearm",
        region: "Fontaine",
        role: "Main DPS",
        unlocked: true,
        lore: "\"The Knave,\" Fourth of the Fatui Harbingers. Revered as \"Father\" by the children of the House of the Hearth.",
        abilities: [
            {
                id: "normal",
                name: "Invitation to a Beheading",
                desc: "Normal Attack\nPerforms up to 6 consecutive spear strikes.\n\nCharged Attack\nConsumes a fixed amount of Stamina, dashing toward a nearby opponent and cleaving once.\nContinuously holding this button will cause Arlecchino to consume Stamina and engage in up to 5s of high-speed movement.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n\nMasque of the Red Death\nWhen Arlecchino has a Bond of Life equal to or greater than 30% of her Max HP, she will enter the \"Masque of the Red Death\" state, where her Normal, Charged, and Plunging Attacks will be converted to deal Pyro DMG. This cannot be overridden.\nWhen in the \"Masque of the Red Death\" state, Arlecchino's Normal Attacks will deal extra DMG to opponents on hit that scales off her ATK multiplied by a certain ratio of her current Bond of Life percentage. This will consume 7.5% of said current Bond of Life. Her Bond of Life can be consumed this way every 0.03s. When her Bond of Life is consumed in this manner, All Is Ash's CD will decrease by 0.8s.",
                previews: [
                    "normal",
                    "normal-convert",
                    "normal-charge",
                    "normal-charge_convert",
                    "normal-plunge",
                    "normal-move"
                ]
            },
            {
                id: "skill",
                name: "All Is Ash",
                desc: "Summons forth Balemoon Bloodfire, dealing Pyro DMG to multiple nearby opponents and performing a dash-cleave against one of them, dealing AoE Pyro DMG.\nOpponents hit by the aforementioned attack will have a Blood-Debt Directive applied to them.\n\nBlood-Debt Directive\nLasts 30s. Every 5s, it will deal 1 instance of Pyro DMG to the opponent. Max 2 instances. This DMG will be considered Elemental Skill DMG.\nWhen Arlecchino uses a Charged Attack or her Elemental Burst, Balemoon Rising, she will absorb and clear nearby Blood-Debt Directives. Each Directive absorbed grants her a Bond of Life worth 65% of her Max HP.\nThe maximum value of the Bond of Life she can be granted through Blood-Debt Directives within 35s after using her Elemental Skill is 145% of her Max HP. Using the Elemental Skill again during this duration will restart the count on duration and the limit on the value of Bond of Life she may gain from Blood-Debt Directives.",
                previews: [
                    "skill"
                ]
            },
            {
                id: "burst",
                name: "Balemoon Rising",
                desc: "Arlecchino's great wing of Balemoon Bloodfire beats as she absorbs and clears Blood-Debt Directives around her. She deals AoE Pyro DMG before clearing the CD of All Is Ash and healing herself. The healing is based on her Bond of Life value and ATK.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Agony Alone May Be Repaid",
                desc: "Blood-Debt Directives have the following characteristics:\n\nArlecchino will be granted a Bond of Life worth 130% of her Max HP when an opponent to which she herself applied a Directive is defeated.\n5s after a Directive is applied, it will be upgraded to a Blood-Debt Due. When absorbed, it will instead grant Arlecchino a Bond of Life worth 130%.\n\nA Bond of Life created in the aforementioned ways cannot exceed the original limit on the value of Bonds of Life obtained through All Is Ash.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Strength Alone Can Defend",
                desc: "Arlecchino gains 1% All Elemental and Physical RES for every 100 ATK she has in excess of 1,000. The maximum RES increase she can gain this way for each is 20%.",
                previews: []
            },
            {
                id: "utility",
                name: "The Balemoon Alone May Know",
                desc: "While in combat, Arlecchino gains a 40% Pyro DMG Bonus and can only be healed through Balemoon Rising.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "\"All Reprisals and Arrears, Mine to Bear...\"",
                desc: "Masque of the Red Death is further enhanced, the value of the increase is 100%. Additionally, Arlecchino's interruption resistance is increased when she performs Normal or Charged Attacks while affected by the Masque of the Red Death."
            },
            {
                id: "const-2",
                level: 2,
                name: "\"All Rewards and Retribution, Mine to Bestow...\"",
                desc: "Blood-Debt Directives are now already Blood-Debt Due when first applied.\nWhen Arlecchino absorbs such a Due, she unleashes Balemoon Bloodfire in front of her, dealing 900% of her ATK as AoE Pyro DMG and increasing her All Elemental RES and Physical RES by 20% for 15s. This effect can trigger once every 10s.\nYou must first unlock the Ascension Talent \"Agony Alone May Be Repaid.\""
            },
            {
                id: "const-3",
                level: 3,
                name: "\"You Shall Become a New Member of Our Family...\"",
                desc: "Increases the Level of Normal Attack: Invitation to a Beheading by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "\"You Shall Love and Protect Each Other Henceforth...\"",
                desc: "When Arlecchino successfully absorbs a Blood-Debt Directive, Balemoon Rising's CD will decrease by 2s and 15 Elemental Energy will be restored to her. This effect can occur once every 10s."
            },
            {
                id: "const-5",
                level: 5,
                name: "\"For Alone, We Are as Good as Dead...\"",
                desc: "Increases the Level of Balemoon Rising by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "\"From This Day On, We Shall Delight in New Life Together.\"",
                desc: "The DMG of Balemoon Rising is increased by Arlecchino's ATK multiplied by 700% of Arlecchino's current Bond of Life percentage.\nFor 20s after Arlecchino uses All Is Ash, both her Normal Attacks and Elemental Burst gain 10% increased CRIT Rate and 70% increased CRIT DMG. This effect can be triggered up to once every 15s."
            }
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
        lore: "The mightiest Champion Duelist. Sword in hand, she defends justice in the Court of Fontaine.",
        abilities: [
            {
                id: "normal",
                name: "Oath of Hunting Shadows",
                desc: "Performs up to 5 rapid strikes.\n\n Charged Attack:\n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n \n Plunging Attack:\n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Hunter's Vigil",
                desc: "Preparing her pistolet, she enters the \"Night Vigil\" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into \"Swift Hunt\" pistolet attacks, and the DMG dealt is converted into Electro DMG that cannot be overridden by infusions, and she will be unable to use Charged Attacks. Using her Elemental Skill will transform it into \"Impale the Night\": Perform a lunging attack, dealing Electro DMG. The DMG done through the aforementioned method is considered Normal Attack DMG.\n\nSwift Hunt\nWhen her Bond of Life is equal to or greater than 100% of her max HP: Performs a pistolet shot.\nWhen her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.\n\nImpale the Night\nThe current percentage value of Clorinde's Bond of Life determines its effect:\nWhen the Bond of Life value is 0%, perform a normal lunging strike;\nWhen the Bond of Life value is less than 100% of her max HP, Clorinde is healed based on the Bond of Life value, and the AoE of the lunging attack and the DMG dealt is increased;\nWhen the value of the Bond of Life is equal to or greater than 100% of her max HP, use Impale the Night: Pact. The healing multiplier is increased, and the AoE and DMG dealt by the lunge is increased even further.\n\nIn addition, when Clorinde is in the Night Vigil state, healing effects other than Impale the Night will not take effect and will instead be converted into a Bond of Life that is a percentage of the healing that would have been received.\n\nClorinde will exit the \"Night Vigil\" state when she leaves the field.\n\nArkhe: Ousia\nPeriodically, when Clorinde's Swift Hunt shots strike opponents, she will summon a Surging Blade at the position hit that deals Ousia-aligned Electro DMG.",
                previews: [
                    "skill-1",
                    "skill-2",
                    "skill-activate",
                    "skill-imp-1",
                    "skill-imp-2",
                    "skill-imp-3"
                ]
            },
            {
                id: "burst",
                name: "Last Lightfall",
                desc: "Grants herself a Bond of Life based upon her own max HP before swiftly evading and striking with saber and sidearm as one, dealing AoE Electro DMG.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Dark-Shattering Flame",
                desc: "After a nearby party member triggers an Electro-related reaction against an opponent, Electro DMG dealt by Clorinde's Normal Attacks and Last Lightfall will be increased by 20% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. The Maximum DMG increase achievable this way for the above attacks is 1,800.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Lawful Remuneration",
                desc: "If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.\nAdditionally, Hunter's Vigil's Night Vigil state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%.",
                previews: []
            },
            {
                id: "utility",
                name: "Night Vigil's Harvest",
                desc: "Displays the location of nearby resources unique to Fontaine on the mini-map.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "\"From This Day, I Pass the Candle's Shadow-Veil\"",
                desc: "While Hunter's Vigil's Night Vigil state is active, when Electro DMG from Clorinde's Normal Attacks hit opponents, they will trigger 2 coordinated attacks from a Nightvigil Shade summoned near the hit opponent, each dealing 30% of Clorinde's ATK as Electro DMG.\nThis effect can occur once every 1.2s. DMG dealt this way is considered Normal Attack DMG."
            },
            {
                id: "const-2",
                level: 2,
                name: "\"Now, As We Face the Perils of the Long Night\"",
                desc: "Enhance the Ascension Talent \"Dark-Shattering Flame\": After a nearby party member triggers an Electro-related reaction against an opponent, Electro DMG dealt by Clorinde's Normal Attacks and Last Lightfall will be increased by 30% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. When you have 3 stacks, Clorinde's interruption resistance will be increased. The Maximum DMG increase achievable this way for the above attacks is 2,700.\nYou must first unlock the Ascension Talent \"Dark-Shattering Flame.\""
            },
            {
                id: "const-3",
                level: 3,
                name: "\"I Pledge to Remember the Oath of Daylight\"",
                desc: "Increases the Level of Hunter's Vigil by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "\"To Enshrine Tears, Life, and Love\"",
                desc: "When Last Lightfall deals DMG to opponent(s), DMG dealt is increased based on Clorinde's Bond of Life percentage. Every 1% of her current Bond of Life will increase Last Lightfall DMG by 2%. The maximum Last Lightfall DMG increase achievable this way is 200%."
            },
            {
                id: "const-5",
                level: 5,
                name: "\"Holding Dawn's Coming as My Votive\"",
                desc: "Increases the Level of Last Lightfall by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "\"And So Shall I Never Despair\"",
                desc: "For 12s after Hunter's Vigil is used, Clorinde's CRIT Rate will be increased by 10%, and her CRIT DMG by 70%.\nAdditionally, while Night Vigil is active, a Glimbright Shade will appear under specific circumstances, executing an attack that deals 200% of Clorinde's ATK as Electro DMG. DMG dealt this way is considered Normal Attack DMG.\n\nThe Glimbright Shade will appear under the following circumstances:\nWhen Clorinde is about to be hit by an attack.\nWhen Clorinde uses Impale the Night: Pact.\n\n1 Glimbright Shade can be summoned in the aforementioned ways every 1s. 6 Shades can be summoned per single Night Vigil duration.\nIn addition, while Night Vigil is active, the DMG Clorinde receives is decreased by 80% and her interruption resistance is increased. This effect will disappear after the Night Vigil state ends or 1s after she summons 6 Glimbright Shades."
            }
        ]
    },
    {
        id: "hu-tao",
        name: "Hu Tao",
        title: "Spirit of the Eternal Flame",
        rarity: 5,
        version: "1.3",
        element: "Pyro",
        weapon: "Polearm",
        region: "Liyue",
        role: "Main DPS",
        unlocked: true,
        lore: "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs.\n\nShe does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang.\n\nAside from this, she is also a talented poet whose many \"masterpieces\" have passed around Liyue's populace by word of mouth.",
        abilities: [
            {
                id: "normal",
                name: "Secret Spear of Wangsheng",
                desc: "Performs up to 5 rapid strikes.\n\n Charged Attack:\n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n \n Plunging Attack:\n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Guide to Afterlife",
                desc: "Only an unwavering flame can cleanse the impurities of this world.\nHu Tao consumes a set portion of her HP to knock the surrounding enemies back and enter the Paramita Papilio state.\n\nParamita Papilio\nIncreases Hu Tao's ATK based on her Max HP at the time of entering this state. ATK Bonus gained this way cannot exceed 400% of Hu Tao's Base ATK.\nConverts attack DMG to Pyro DMG, which cannot be overridden by any other elemental infusion.\nCharged Attacks apply the Blood Blossom effect to the enemies hit.\nIncreases Hu Tao's resistance to interruption.\n\nBlood Blossom\nEnemies affected by Blood Blossom will take Pyro DMG every 4s. This DMG is considered Elemental Skill DMG.\nEach enemy can be affected by only one Blood Blossom effect at a time, and its duration may only be refreshed by Hu Tao herself.\n\nParamita Papilio ends when its duration is over, or Hu Tao has left the battlefield or fallen.",
                previews: [
                    "skill-charge",
                    "skill",
                    "skill-effect"
                ]
            },
            {
                id: "burst",
                name: "Spirit Soother",
                desc: "Commands a blazing spirit to attack, dealing Pyro DMG in a large AoE.\n\nUpon striking the enemy, regenerates a percentage of Hu Tao's Max HP. This effect can be triggered up to 5 times, based on the number of enemies hit.\n\nIf Hu Tao's HP is below or equal to 50% when the enemy is hit, both the DMG and HP Regeneration are increased.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Flutter By",
                desc: "When a Paramita Papilio state activated by Guide to Afterlife ends, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Sanguine Rouge",
                desc: "When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is increased by 33%.",
                previews: []
            },
            {
                id: "utility",
                name: "The More the Merrier",
                desc: "When Hu Tao cooks a dish perfectly, she has a 18% chance to receive an additional \"Suspicious\" dish of the same type.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Crimson Bouquet",
                desc: "While in a Paramita Papilio state activated by Guide to Afterlife, Hu Tao's Charged Attacks do not consume Stamina."
            },
            {
                id: "const-2",
                level: 2,
                name: "Ominous Rainfall",
                desc: "Increases the Blood Blossom DMG by an amount equal to 10% of Hu Tao's Max HP at the time the effect is applied.\nAdditionally, Spirit Soother will also apply the Blood Blossom effect."
            },
            {
                id: "const-3",
                level: 3,
                name: "Lingering Carmine",
                desc: "Increases the Level of Guide to Afterlife by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Garden of Eternal Rest",
                desc: "Upon defeating an enemy affected by a Blood Blossom that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s."
            },
            {
                id: "const-5",
                level: 5,
                name: "Floral Incense",
                desc: "Increases the Level of Spirit Soother by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Butterfly's Embrace",
                desc: "Triggers when Hu Tao's HP drops below 25%, or when she suffers a lethal strike:\nHu Tao will not fall as a result of the DMG sustained. Additionally, for the next 10s, all of her Elemental and Physical RES is increased by 200%, her CRIT Rate is increased by 100%, and her resistance to interruption is greatly increased.\nThis effect triggers automatically when Hu Tao has 1 HP left.\nCan only occur once every 60s."
            }
        ]
    },
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
        lore: "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue \u2060\u2014 but in truth, gods admire skeptics such as her quite a lot. \n\nShe firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.",
        abilities: [
            {
                id: "normal",
                name: "Yunlai Swordsmanship",
                desc: "Performs up to 5 rapid strikes.\n\n Charged Attack:\n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n \n Plunging Attack:\n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Stellar Restoration",
                desc: "Hurls a Lightning Stiletto that annihilates her opponents like the swift thunder. When the Stiletto hits its target, it deals Electro DMG to opponents in a small AoE, and places a Stiletto Mark on the spot hit. \n\nHold \nHold to adjust the direction in which the Stiletto shall be thrown. Stilettos thrown by the Hold attack mode can be suspended in mid-air, allowing Keqing to jump to them when using Stellar Restoration a second time. \n\nLightning Stiletto \nIf Keqing uses Stellar Restoration again or uses a Charged Attack while its duration lasts, it will clear the Stiletto Mark and produce different effects: \n\nIf she uses Stellar Restoration again, she will blink to the location of the Mark and unleash one slashing attack that deals AoE Electro DMG. \nWhen blinking to a Stiletto that was thrown from a Holding attack, Keqing can leap across obstructing terrain. \nIf Keqing uses a Charged Attack, she will ignite a series of thundering cuts at the Mark's location, dealing AoE Electro DMG.",
                previews: [
                    "skill-charge",
                    "skill-detonate",
                    "skill-hold",
                    "skill-normal",
                    "skill-plunge",
                    "skill-slash"
                ]
            },
            {
                id: "burst",
                name: "Starward Sword",
                desc: "Keqing unleashes the power of lightning, dealing Electro DMG in an AOE. She then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby opponents simultaneously that deal multiple instances of Electro DMG. The final attack deals massive AoE Electro DMG.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Thundering Penance",
                desc: "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's weapon gains an Electro Infusion for 5s.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Aristocratic Dignity",
                desc: "When casting Starward Sword, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.",
                previews: []
            },
            {
                id: "utility",
                name: "Land's Overseer",
                desc: "When dispatched on an expedition in Liyue, time consumed is reduced by 25%.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Thundering Might",
                desc: "Recasting Stellar Restoration while a Lightning Stiletto is present causes Keqing to deal 50% of her ATK as AoE Electro DMG at the start point and terminus of her Blink."
            },
            {
                id: "const-2",
                level: 2,
                name: "Keen Extraction",
                desc: "When Keqing's Normal and Charged Attacks hit opponents affected by Electro, they have a 50% chance of producing an Elemental Particle.\nThis effect can only occur once every 5s."
            },
            {
                id: "const-3",
                level: 3,
                name: "Foreseen Reformation",
                desc: "Increases the Level of Starward Sword by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Attunement",
                desc: "For 10s after Keqing triggers an Electro-related Elemental Reaction, her ATK is increased by 25%."
            },
            {
                id: "const-5",
                level: 5,
                name: "Beckoning Stars",
                desc: "Increases the Level of Stellar Restoration by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Tenacious Star",
                desc: "When initiating a Normal Attack, a Charged Attack, Elemental Skill or Elemental Burst, Keqing gains a 6% Electro DMG Bonus for 8s.\nEffects triggered by Normal Attacks, Charged Attacks, Elemental Skills and Elemental Bursts are considered independent entities."
            }
        ]
    },
    {
        id: "template",
        name: "",
        title: "",
        rarity: 0,
        version: "",
        element: "",
        weapon: "",
        region: "",
        role: "",
        unlocked: false,
        lore: "",
        abilities: [
            {
                id: "normal",
                name: "",
                desc: "Performs up to 5 rapid strikes.\n\n Charged Attack:\n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n \n Plunging Attack:\n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "",
                desc: "",
                previews: []
            },
            {
                id: "burst",
                name: "",
                desc: "",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "",
                desc: "",
                previews: []
            },
            {
                id: "ascension-4",
                name: "",
                desc: "",
                previews: []
            },
            {
                id: "utility",
                name: "",
                desc: "",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "",
                desc: ""
            },
            {
                id: "const-2",
                level: 2,
                name: "",
                desc: ""
            },
            {
                id: "const-3",
                level: 3,
                name: "",
                desc: ""
            },
            {
                id: "const-4",
                level: 4,
                name: "",
                desc: ""
            },
            {
                id: "const-5",
                level: 5,
                name: "",
                desc: ""
            },
            {
                id: "const-6",
                level: 6,
                name: "",
                desc: ""
            }
        ]
    }
];