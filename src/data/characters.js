export const characters = [
    {
        id: "amber",
        name: "Amber",
        title: "Gliding Champion",
        constellationName: "Lepus",
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
        ],
        constellationMap: {
            c1: [
                26.5,
                27
            ],
            c2: [
                28,
                57
            ],
            c3: [
                57,
                63.5
            ],
            c4: [
                59,
                28
            ],
            c5: [
                76,
                26.5
            ],
            c6: [
                69,
                44.5
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "arlecchino",
        name: "Arlecchino",
        title: "Dire Balemoon",
        constellationName: "Ignis Purgatorius",
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
        ],
        constellationMap: {
            c1: [
                49.5,
                8.5
            ],
            c2: [
                80,
                42.5
            ],
            c3: [
                50.5,
                95
            ],
            c4: [
                22,
                59.5
            ],
            c5: [
                34.5,
                29.5
            ],
            c6: [
                51,
                39.5
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c6",
                "c4"
            ]
        ]
    },
    {
        id: "clorinde",
        name: "Clorinde",
        title: "Candlebearer, Shadowhunter",
        constellationName: "Rapperia",
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
        ],
        constellationMap: {
            c1: [
                50,
                7
            ],
            c2: [
                50,
                91.5
            ],
            c3: [
                34.5,
                67.5
            ],
            c4: [
                80.5,
                64.5
            ],
            c5: [
                35.5,
                33.5
            ],
            c6: [
                61.5,
                26
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "columbina",
        name: "Columbina",
        title: "Welkin Moon's Homecoming",
        constellationName: "Columbina Hyposelenia",
        rarity: 5,
        version: "6.3",
        element: "Hydro",
        weapon: "Catalyst",
        region: "Nod-Krai",
        role: "Sub-DPS",
        unlocked: false,
        lore: "Kuutar, the Moon Goddess of Nod-Krai, and formerly The Damselette, Third of the Fatui Harbingers. Still, her friends call her Columbina Hyposelenia, and she prefers it that way.",
        abilities: [
            {
                id: "normal",
                name: "Moondew Cascade",
                desc: "Normal Attack\nSummons Moonlit Tides, performing up to 3 attacks that deal Hydro DMG.\n\nCharged Attack\nConsumes a certain amount of Stamina to deal AoE Hydro DMG after a short casting time.\nIf you have at least 1 Verdant Dew, Columbina's Charged Attacks will be replaced with the special Charged Attack Moondew Cleanse, which will not consume Stamina: Consume 1 Verdant Dew to deal 3 instances of AoE Dendro DMG to opponents in front. This DMG is considered Lunar-Bloom DMG.\n\nPlunging Attack\nPlunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Hydro DMG upon impact with the ground.",
                previews: [
                    "normal",
                    "normal-charge"
                ]
            },
            {
                id: "skill",
                name: "Eternal Tides",
                desc: "Awaken Moonbound Tides, dealing AoE Hydro DMG and summoning Gravity Ripple.\nGravity Ripple will follow the active character on the field, while continuously dealing AoE Hydro DMG to surrounding opponents. While Gravity Ripple is on the field, and nearby party members trigger Lunar reactions or inflict Lunar Reaction DMG, Columbina will accrue a special Gravity. Once Gravity is accumulated to its limit, different types of damage will be dealt to enemies based on the type of Lunar Reaction that has accumulated the most Gravity for Columbina.\nMoonsign: Ascendant Gleam: Gravity Ripple inflicts AoE Hydro DMG over a wider area.",
                previews: [
                    "skill"
                ]
            },
            {
                id: "burst",
                name: "Moonlit Melancholy",
                desc: "Hills and tides unite under the silver light of a pristine new moon. Temporarily transforms the surrounding terrain into Lunar Domain, dealing AoE Hydro DMG.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Lunacy's Lure",
                desc: "When triggering Gravity Interference, Columbina gains the Lunacy effect, increasing her CRIT Rate by 5% for 10s. This effect can be stacked up to 3 times.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Law of the New Moon",
                desc: "When characters within the Lunar Domain trigger Lunar reactions, they will gain the following effects respectively:\n\nLunar-Charged: When the Thundercloud performs lightning strike(s) against a valid target, it has a 33% chance to perform an additional lightning strike.\nLunar-Bloom: When triggering Lunar-Bloom reactions, the party gains a special Moonridge Dew. Up to 3 Moonridge Dews can be gained every 18s.\nLunar-Crystallize: When Moondrift Harmony is triggered, every Moondrift has a 33% chance to inflict an extra attack.",
                previews: []
            },
            {
                id: "utility",
                name: "Lunar Vigil",
                desc: "If one of your party members is incapacitated while in the Nod-Krai region, Columbina will revive this character. The amount of HP the character will have upon revival is based on Columbina's Friendship Level. This effect can occur once every 100s. This effect does not trigger in Domains, Trounce Domains, or the Spiral Abyss.\nAdditionally, Columbina appears to have a special affinity for certain animals who are influenced by kuuvahki…",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Radiance Over Blossoms and Peaks",
                desc: "Unleashing her Elemental Skill Eternal Tides will immediately trigger an effect equivalent to the effect of Gravity Interference. This effect can be triggered once every 15s.\nMoonsign: Ascendant Gleam\nWhen Gravity Interference is triggered, if the Lunar reaction type that has accumulated the most Gravity for Columbina is:\n\nLunar-Charged: Your current active character will recover 6 Energy.\nLunar-Bloom: Your active character's interruption resistance will be increased for 8s.\nLunar-Crystallize: Summons a Rainsea Shield. The Rainsea Shield's DMG absorption is based on 12% of Columbina's Max HP, and it will absorb Hydro DMG with 250% effectiveness for 8s.\n\nAll nearby party members' Lunar Reaction DMG is elevated by 1.5%."
            },
            {
                id: "const-2",
                level: 2,
                name: "Not in Lone Splendor",
                desc: "Rate of accumulating Gravity increases by 34%.\nWhen Gravity Interference is triggered, Columbina will receive the Lunar Brilliance effect, which increases her Max HP by 40% for 8s.\nMoonsign: Ascendant Gleam:\n\nWhen Lunar Brilliance is active, if, during the current trigger of Gravity Interference, the Lunar reaction type that has accumulated the most Gravity for Columbina is:\nLunar-Charged: ATK of your current active character increases. Increase in ATK is equal to 1% of Columbina's Max HP.\nLunar-Bloom: Elemental Mastery of your current active character increases. Increase in Elemental Mastery is equal to 0.35% of Columbina's Max HP.\nLunar-Crystallize: DEF of your current active character increases. Increase in DEF is equal to 1% of Columbina's Max HP.\n\nAll nearby party members' Lunar Reaction DMG is elevated by 7%."
            },
            {
                id: "const-3",
                level: 3,
                name: "Dreamlike Glow Across Tranquil Waters",
                desc: "Increases the Level of Elemental Skill Eternal Tides by 3.\nMaximum upgrade level is 15.\n\nAll nearby party members' Lunar Reaction DMG is elevated by 1.5%."
            },
            {
                id: "const-4",
                level: 4,
                name: "Cloudveiled Ridges in Floral Mists",
                desc: "When Gravity Interference is triggered, 4 Elemental Energy will be restored to Columbina;\nAdditionally, if the Lunar reaction type that accumulates the most Gravity for Columbina is Lunar-Charged, Lunar-Bloom, or Lunar-Crystallize, the Lunar Reaction DMG dealt by this instance of Gravity Interference is increased by 12.5%/2.5%/12.5% of Columbina's Max HP respectively. This effect can be triggered at most once every 15s.\n\nAll nearby party members' Lunar Reaction DMG is elevated by 1.5%."
            },
            {
                id: "const-5",
                level: 5,
                name: "Silence Tending One Lone Song",
                desc: "Increases the Level of Elemental Burst Moonlit Melancholy by 3.\nMaximum upgrade level is 15.\n\nAll nearby party members' Lunar Reaction DMG is elevated by 1.5%."
            },
            {
                id: "const-6",
                level: 6,
                name: "Through Darkness Led by Moonlight",
                desc: "For 8s after characters in the Lunar Domain trigger a Lunar reaction, based on the elements involved in the reaction, the CRIT DMG of the corresponding Elemental DMG done by all party members is increased by 80%. The CRIT DMG-increasing effects for the same Elemental Type do not stack.\n\nAll nearby party members' Lunar Reaction DMG is elevated by 7%."
            }
        ],
        constellationMap: {
            c1: [
                73,
                10
            ],
            c2: [
                91,
                35.5
            ],
            c3: [
                87.5,
                69.5
            ],
            c4: [
                59,
                90.5
            ],
            c5: [
                22,
                83
            ],
            c6: [
                9.5,
                58
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "cyno",
        name: "Cyno",
        title: "Judicator of Secrets",
        constellationName: "Lupus Aureus",
        rarity: 5,
        version: "3.1",
        element: "Electro",
        weapon: "Polearm",
        region: "Sumeru",
        role: "Main DPS",
        unlocked: false,
        lore: "The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.",
        abilities: [
            {
                id: "normal",
                name: "Invoker's Spear",
                desc: "Normal Attack\nPerforms up to 4 consecutive spear strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Secret Rite: Chasmic Soulfarer",
                desc: "Performs a swift thrust, dealing Electro DMG to opponents along the path.\n\nWhen Cyno is under the Pathsworn Pathclearer state triggered by Sacred Rite: Wolf's Swiftness, he will instead unleash a Mortuary Rite that deals thunderous AoE Electro DMG and extends the duration of Pathsworn Pathclearer.",
                previews: [
                    "skill",
                    "skill-empower"
                ]
            },
            {
                id: "burst",
                name: "Sacred Rite: Wolf's Swiftness",
                desc: "Calls upon a divine spirit to indwell him, morphing into the Pactsworn Pathclearer.\n\nPactsworn Pathclearer\nCyno's Normal, Charged, and Plunging Attacks will be converted to Electro DMG that cannot be overridden.\nCyno's Elemental Mastery and resistance to interruption will increase, and he gains immunity to Electro-Charged DMG.\n\nThis effect will be canceled when Cyno leaves the field and lasts a maximum of 18s.",
                previews: [
                    "burst",
                    "burst-normal",
                    "burst-charge",
                    "burst-plunge",
                    "burst-skill"
                ]
            },
            {
                id: "ascension-1",
                name: "Featherfall Judgment",
                desc: "When Cyno is in the Pactsworn Pathclearer state activated by Sacred Rite: Wolf's Swiftness, Cyno will enter the Endseer stance at intervals. If he activates Secret Rite: Chasmic Soulfarer while affected by this stance, he will activate the Judication effect, increasing the DMG of this Secret Rite: Chasmic Soulfarer by 35%, and firing off 3 Duststalker Bolts that deal 100% of Cyno's ATK as Electro DMG.\n\nDuststalker Bolt DMG is considered Elemental Skill DMG.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Authority Over the Nine Bows",
                desc: "Cyno's DMG values will be increased based on his Elemental Mastery as follows:\nPactsworn Pathclearer's Normal Attack DMG is increased by 150% of his Elemental Mastery.\nDuststalker Bolt DMG from his Ascension Talent Featherfall Judgment is increased by 250% of his Elemental Mastery.",
                previews: []
            },
            {
                id: "utility",
                name: "The Gift of Silence",
                desc: "Gains 25% more rewards when dispatched on a Sumeru Expedition for 20 hours.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Ordinance: Unceasing Vigil",
                desc: "After using Sacred Rite: Wolf's Swiftness, Cyno's Normal Attack SPD will be increased by 20% for 10s. If the Judication effect of his Ascension Talent Featherfall Judgment is triggered during Secret Rite: Chasmic Soulfarer, the duration of this increase will be refreshed.\n\nYou must first unlock the Ascension Talent \"Featherfall Judgement.\""
            },
            {
                id: "const-2",
                level: 2,
                name: "Ceremony: Homecoming of Spirits",
                desc: "When Cyno's Normal Attacks hit opponents, his Electro DMG Bonus will increase by 10% for 4s. This effect can be triggered once every 0.1s. Max 5 stacks."
            },
            {
                id: "const-3",
                level: 3,
                name: "Precept: Lawful Enforcer",
                desc: "Increases the Level of Sacred Rite: Wolf's Swiftness by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Austerity: Forbidding Guard",
                desc: "When Cyno is in the Pactsworn Pathclearer state triggered by Sacred Rite: Wolf's Swiftness, after he triggers Electro-Charged, Lunar-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or an Electro Swirl reaction, he will restore 3 Elemental Energy for all nearby party members (except himself.)\nThis effect can occur 5 times within one use of Sacred Rite: Wolf's Swiftness."
            },
            {
                id: "const-5",
                level: 5,
                name: "Funerary Rite: The Passing of Starlight",
                desc: "Increases the Level of Secret Rite: Chasmic Soulfarer by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Raiment: Just Scales",
                desc: "After using Sacred Rite: Wolf's Swiftness or triggering the Judication effect of the Ascension Talent \"Featherfall Judgment,\" Cyno will gain 4 stacks of the \"Day of the Jackal\" effect. When he hits opponents with Normal Attacks, he will consume 1 stack of \"Day of the Jackal\" to fire off one Duststalker Bolt.\n\"Day of the Jackal\" lasts for 8s. Max 8 stacks. It will be canceled once Pactsworn Pathclearer ends.\nA maximum of 1 Duststalker Bolt can be unleashed this way every 0.4s.\nYou must first unlock the Ascension Talent \"Featherfall Judgment.\""
            }
        ],
        constellationMap: {
            c1: [
                79.5,
                47.5
            ],
            c2: [
                68,
                41.5
            ],
            c3: [
                51,
                62
            ],
            c4: [
                20,
                83
            ],
            c5: [
                61.5,
                80
            ],
            c6: [
                87.5,
                86
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c5",
                "c3"
            ]
        ]
    },
    {
        id: "eula",
        name: "Eula",
        title: "Dance of the Shimmering Wave",
        constellationName: "Aphros Delos",
        rarity: 5,
        version: "1.5",
        element: "Cryo",
        weapon: "Claymore",
        region: "Mondstadt",
        role: "Main DPS",
        unlocked: false,
        lore: "A rebellious descendant of the old aristocracy who is always out on the battlefield.\nAs one born into the old aristocracy, carrying the bloodline of sinners, Eula has needed a unique approach to the world to navigate the towering walls of prejudice peacefully. Of course, this did not prevent her from severing ties with her clan. As the outstanding Spindrift Knight, she hunts down Mondstadt's enemies in the wild to exact her unique \"vengeance.\"",
        abilities: [
            {
                id: "normal",
                name: "Favonius Bladework - Edel",
                desc: "Normal Attack\nPerforms up to 5 consecutive strikes.\n\nCharged Attack\nDrains Stamina over time to perform continuous slashes.\nAt the end of the sequence, performs a more powerful slash.\n\nPlunging Attack\nPlunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Icetide Vortex",
                desc: "Sharp frost, swift blade.\n\n(‍Press‍/‍Tap‍)\nSlashes swiftly, dealing Cryo DMG.\nWhen it hits an opponent, Eula gains a stack of Grimheart that stacks up to 2 times. These stacks can only be gained once every 0.3s.\n\nGrimheart\nIncreases Eula's resistance to interruption and DEF.\n\nHold\nWielding her sword, Eula consumes all the stacks of Grimheart and lashes forward, dealing AoE Cryo DMG to opponents in front of her.\nIf Grimheart stacks are consumed, surrounding opponents will have their Physical RES and Cryo RES decreased.\nEach consumed stack of Grimheart will be converted into an Icewhirl Brand that deals Cryo DMG to nearby opponents.",
                previews: [
                    "skill",
                    "skill-hold",
                    "skill-stack"
                ]
            },
            {
                id: "burst",
                name: "Glacial Illumination",
                desc: "Brandishes her greatsword, dealing Cryo DMG to nearby opponents and creating a Lightfall Sword that follows her around for a duration of up to 7s.\nWhile present, the Lightfall Sword increases Eula's resistance to interruption. When Eula's own Normal Attack, Elemental Skill, and Elemental Burst deal DMG to opponents, they will charge the Lightfall Sword, which can gain an energy stack once every 0.1s.\nOnce its duration ends, the Lightfall Sword will descend and explode violently, dealing Physical DMG to nearby opponents.\nThis DMG scales on the number of energy stacks the Lightfall Sword has accumulated.\nIf Eula leaves the field, the Lightfall Sword will explode immediately.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Roiling Rime",
                desc: "If 2 stacks of Grimheart are consumed upon unleashing the Holding Mode of Icetide Vortex, a Shattered Lightfall Sword will be created that will explode immediately, dealing 50% of the basic Physical DMG dealt by a Lightfall Sword created by Glacial Illumination.",
                previews: [
                    "ascension-1"
                ]
            },
            {
                id: "ascension-4",
                name: "Wellspring of War-Lust",
                desc: "When Glacial Illumination is cast, the CD of Icetide Vortex is reset and Eula gains 1 stack of Grimheart.",
                previews: []
            },
            {
                id: "utility",
                name: "Aristocratic Introspection",
                desc: "When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Tidal Illusion",
                desc: "Every time Icetide Vortex's Grimheart stacks are consumed, Eula's Physical DMG is increased by 30% for 6s.\nEach stack consumed will increase the duration of this effect by 6s up to a maximum of 18s."
            },
            {
                id: "const-2",
                level: 2,
                name: "Lady of Seafoam",
                desc: "Decreases the CD of Icetide Vortex's Holding Mode, rendering it identical to (‍Press‍/‍Tapping‍) CD."
            },
            {
                id: "const-3",
                level: 3,
                name: "Lawrence Pedigree",
                desc: "Increases the Level of Glacial Illumination by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "The Obstinacy of One's Inferiors",
                desc: "Lightfall Swords deal 25% increased DMG against opponents with less than 50% HP."
            },
            {
                id: "const-5",
                level: 5,
                name: "Chivalric Quality",
                desc: "Increases the Level of Icetide Vortex by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Noble Obligation",
                desc: "Lightfall Swords created by Glacial Illumination start with 5 stacks of energy. Normal Attacks, Elemental Skills, and Elemental Bursts have a 50% chance to grant the Lightfall Sword an additional stack of energy."
            }
        ],
        constellationMap: {
            c1: [
                35.5,
                14
            ],
            c2: [
                15,
                39
            ],
            c3: [
                58,
                53
            ],
            c4: [
                28,
                77
            ],
            c5: [
                54,
                89
            ],
            c6: [
                87.5,
                62
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c2",
                "c4"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "furina",
        name: "Furina",
        title: "Endless Solo of Solitude",
        constellationName: "Animula Choragi",
        rarity: 5,
        version: "4.2",
        element: "Hydro",
        weapon: "Sword",
        region: "Fontaine",
        role: "Sub-DPS",
        unlocked: false,
        lore: "The \"Regina of All Waters, Kindreds, Peoples and Laws\" is deeply loved by her people.\nShe follows each and every trial held at the Opera Epiclese with an inextinguishable passion, and is always acutely aware of how the \"audience\" sees things.\n\nThe absolute focus of the stage of judgment, until the final applause sounds.",
        abilities: [
            {
                id: "normal",
                name: "Soloist's Solicitation",
                desc: "Normal Attack\nPerforms up to 4 consecutive strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to unleash a solo dance, dealing Physical DMG to nearby opponents and changing her Arkhe alignment. If Salon Members or Singer of Many Waters summoned by her Elemental Skill \"Salon Solitaire\" are present, their lineup will switch in response.\n\nArkhe: Seats Sacred and Secular\nAt intervals, when Furina's Normal Attacks hit, a Spiritbreath Thorn or a Surging Blade will descend based on her current alignment, dealing Hydro DMG based on her current alignment.\nWhen Furina takes the field, her starting Arkhe will be Ousia.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal-o",
                    "normal-charge-o",
                    "normal-plunge-o",
                    "normal-p",
                    "normal-charge-p",
                    "normal-plunge-p"
                ]
            },
            {
                id: "skill",
                name: "Salon Solitaire",
                desc: "Invites the guests of the Salon Solitaire to come forth and aid in Furina's performance. Will summon either the Salon Members or the Singer of Many Waters based on Furina's current Arkhe alignment.\n\nOusia\nFoaming bubbles like celebrants shall dance, dealing AoE Hydro DMG based on Furina's Max HP and summoning 3 Salon Members: the Ball Octopus-shaped Gentilhomme Usher, the Bubbly Seahorse-shaped Surintendante Chevalmarin, and the Armored Crab-shaped Mademoiselle Crabaletta.\nThey will attack nearby opponents at intervals, prioritizing the target of the active character, dealing Hydro DMG based on Max HP.\nWhen they attack, if character(s) with more than 50% HP are nearby, the Members will increase their current attack's power based on the number of such characters, and consume said characters' HP. If the characters who meet these requirements are 1/2/3/4 (or more), the Members' attacks will deal 110%/120%/130%/140% of their original DMG.\n\nPneuma\nSummons the Singer of Many Waters, who will heal nearby active character(s) based on Max HP at intervals.\n\nThe Salon Members and Singer of Many Waters share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the initial duration.\nWhile the Salon Members and the Singer of Many Waters are on the field, Furina can move on the water's surface.",
                previews: [
                    "skill-o",
                    "skill-p"
                ]
            },
            {
                id: "burst",
                name: "Let the People Rejoice",
                desc: "Rouses the impulse to revel, creating a stage of foam that will deal AoE Hydro DMG based on Furina's Max HP and cause nearby party members to enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, 1 Fanfare point will be granted to Furina for each percentage point of their Max HP by which their HP changes.\nAt the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.\nWhen the duration ends, Furina's Fanfare points will be cleared.",
                previews: [
                    "burst-o",
                    "burst-p"
                ]
            },
            {
                id: "ascension-1",
                name: "Endless Waltz",
                desc: "When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, then Furina will heal nearby party members for 2% of their Max HP once every 2s within the next 4s.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Unheard Confession",
                desc: "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned Salon Solitaire in the following ways:\nWill increase Salon Member DMG dealt by 0.7%, up to a maximum of 28%.\nWill decrease active character healing interval of the Singer of Many Waters by 0.4%, up to a maximum of 16%.",
                previews: []
            },
            {
                id: "utility",
                name: "The Sea Is My Stage",
                desc: "Xenochromatic Fontemer Aberrant ability CD decreased by 30%.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "\"Love Is a Rebellious Bird That None Can Tame\"",
                desc: "When using Let the People Rejoice, Furina will gain 150 Fanfare.\nAdditionally, Furina's Fanfare limit is increased by 100."
            },
            {
                id: "const-2",
                level: 2,
                name: "\"A Woman Adapts Like Duckweed in Water\"",
                desc: "While Let the People Rejoice lasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 250%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.35%. Her maximum Max HP increase is 140%."
            },
            {
                id: "const-3",
                level: 3,
                name: "\"My Secret Is Hidden Within Me, No One Will Know My Name\"",
                desc: "Increases the Level of Let the People Rejoice by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "\"They Know Not Life, Who Dwelt in the Netherworld Not!\"",
                desc: "When the Salon Members from Salon Solitaire hit an opponent, or the Singer of Many Waters restores HP to nearby active characters, Furina will restore 4 Energy. This effect can be triggered once every 5s."
            },
            {
                id: "const-5",
                level: 5,
                name: "\"His Name I Now Know, It Is...!\"",
                desc: "Increases the Level of Salon Solitaire by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "\"Hear Me — Let Us Raise the Chalice of Love!\"",
                desc: "When using Salon Solitaire, Furina gains \"Center of Attention\" for 10s.\nThroughout the duration, Furina's Normal Attacks, Charged Attacks, and Plunging Attacks are converted into Hydro DMG which cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 18% of Furina's max HP.\nThroughout the duration, Furina's Normal Attacks (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attacks, and the impact of Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:\n\nArkhe: Ousia\nEvery 1s, all nearby characters in the party will be healed by 4% of Furina's max HP, for a duration of 2.9s. Triggering this effect again will extend its duration.\nArkhe: Pneuma\nThis Normal Attack (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 25% of Furina's max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their current HP.\n\nDuring the duration of each instance of \"Center of Attention,\" the above effects can be triggered up to 6 times. \"Center of Attention\" will end when its effects have triggered 6 times or when the duration expires."
            }
        ],
        constellationMap: {
            c1: [
                49.5,
                13
            ],
            c2: [
                77.5,
                52.5
            ],
            c3: [
                75.5,
                75.5
            ],
            c4: [
                51.5,
                86
            ],
            c5: [
                27,
                78
            ],
            c6: [
                23.5,
                54
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c6",
                "c1"
            ]
        ]
    },
    {
        id: "hu-tao",
        name: "Hu Tao",
        title: "Spirit of the Eternal Flame",
        constellationName: "Papilio Charontis",
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
        ],
        constellationMap: {
            c1: [
                39.5,
                15.5
            ],
            c2: [
                35.5,
                64.5
            ],
            c3: [
                75.5,
                17.5
            ],
            c4: [
                67,
                71
            ],
            c5: [
                60,
                91.5
            ],
            c6: [
                75.5,
                93.5
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c2",
                "c4"
            ],
            [
                "c2",
                "c5"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "kaeya",
        name: "Kaeya",
        title: "Frostwind Swordsman",
        constellationName: "Pavo Ocellus",
        rarity: 4,
        version: "1.0",
        element: "Cryo",
        weapon: "Sword",
        region: "Mondstadt",
        role: "Sub-DPS",
        unlocked: false,
        lore: "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
        abilities: [
            {
                id: "normal",
                name: "Ceremonial Bladework",
                desc: "Normal Attack\nPerforms up to 5 rapid strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Frostgnaw",
                desc: "Unleashes a frigid blast, dealing Cryo DMG to opponents in front of Kaeya.",
                previews: [
                    "skill"
                ]
            },
            {
                id: "burst",
                name: "Glacial Waltz",
                desc: "Coalescing the frost in the air, Kaeya summons 3 icicles that revolve around him.\nThese icicles will follow the character around and deal Cryo DMG to opponents in their path for the ability's duration.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Cold-Blooded Strike",
                desc: "Every hit with Frostgnaw regenerates HP for Kaeya equal to 15% of his ATK.",
                previews: [
                    "ascension-1"
                ]
            },
            {
                id: "ascension-4",
                name: "Glacial Heart",
                desc: "Opponents Frozen by Frostgnaw will drop additional Elemental Particles.\nFrostgnaw may only produce a maximum of 2 additional Elemental Particles per use.",
                previews: []
            },
            {
                id: "utility",
                name: "Hidden Strength",
                desc: "Decreases sprinting Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Excellent Blood",
                desc: "The CRIT Rate of Kaeya's Normal and Charge Attacks against opponents affected by Cryo is increased by 15%."
            },
            {
                id: "const-2",
                level: 2,
                name: "Never-Ending Performance",
                desc: "When Glacial Waltz is in effect, for each opponent defeated, its base duration is increased by 2.5s, up to a maximum of 15s."
            },
            {
                id: "const-3",
                level: 3,
                name: "Dance of Frost",
                desc: "Increases the Level of Frostgnaw by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Frozen Kiss",
                desc: "Triggers automatically when Kaeya's HP falls below 20%:\nCreates a shield that absorbs damage equal to 30% of Kaeya's Max HP. Lasts for 20s.\nThis shield absorbs Cryo DMG with 250% efficiency.\nCan only occur once every 60s."
            },
            {
                id: "const-5",
                level: 5,
                name: "Frostbiting Embrace",
                desc: "Increases the Level of Glacial Waltz by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Glacial Whirlwind",
                desc: "Glacial Waltz will generate 1 additional icicle, and will regenerate 15 Energy when cast."
            }
        ],
        constellationMap: {
            c1: [
                62,
                24
            ],
            c2: [
                44,
                27.5
            ],
            c3: [
                36,
                44
            ],
            c4: [
                69,
                52
            ],
            c5: [
                73,
                78
            ],
            c6: [
                42.5,
                85.5
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "keqing",
        name: "Keqing",
        title: "Driving Thunder",
        constellationName: "Trulla Cementarii",
        rarity: 5,
        version: "1.0",
        element: "Electro",
        weapon: "Sword",
        region: "Liyue",
        role: "Main DPS",
        unlocked: true,
        lore: "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot. \n\nShe firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.",
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
        ],
        constellationMap: {
            c1: [
                28.9,
                43.5
            ],
            c2: [
                54.1,
                15.2
            ],
            c3: [
                69.3,
                28.0
            ],
            c4: [
                62.5,
                57.7
            ],
            c5: [
                70.6,
                70.6
            ],
            c6: [
                41.8,
                90.4
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c4",
                "c6"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "kuki-shinobu",
        name: "Kuki Shinobu",
        title: "Mender of Tribulations",
        constellationName: "Tribulatio Demptio",
        rarity: 4,
        version: "2.7",
        element: "Electro",
        weapon: "Sword",
        region: "Inazuma",
        role: "Sub-DPS",
        unlocked: false,
        lore: "The deputy leader of the Arataki Gang. She wears a unique mask and is rather stoic.\nFew people know why a talent of this caliber would run away to join a street gang. Even fewer people know what she hides under her mask.",
        abilities: [
            {
                id: "normal",
                name: "Shinobu's Shadowsword",
                desc: "Normal Attack\nPerforms up to 4 rapid strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Sanctifying Ring",
                desc: "Creates a Grass Ring of Sanctification at the cost of part of her HP, dealing Electro DMG to nearby opponents.\n\nGrass Ring of Sanctification\nFollows your current active character around. Deals Electro DMG to nearby opponents every 1.5s and restores HP for the active character(s) within the ring's AoE based on Kuki Shinobu's Max HP.\n\nThe HP consumption from using this skill can only bring her to 20% HP.",
                previews: [
                    "skill"
                ]
            },
            {
                id: "burst",
                name: "Gyoei Narukami Kariyama Rite",
                desc: "Stabs an evil-excoriating blade into the ground, creating a field that cleanses the area of all that is foul, dealing continuous Electro DMG to opponents within its AoE based on Shinobu's Max HP.\nIf Shinobu's HP is less than or equal to 50% when this skill is used, the field will last longer.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Breaking Free",
                desc: "When Shinobu's HP is not higher than 50%, her Healing Bonus is increased by 15%.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Heart's Repose",
                desc: "Sanctifying Ring's abilities will be boosted based on Shinobu's Elemental Mastery:\n\nHealing amount will be increased by 75% of Elemental Mastery.\nDMG dealt is increased by 25% of Elemental Mastery.",
                previews: []
            },
            {
                id: "utility",
                name: "Protracted Prayers",
                desc: "Gains 25% more rewards when dispatched on an Inazuma Expedition for 20 hours.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "To Cloister Compassion",
                desc: "Gyoei Narukami Kariyama Rite's AoE is increased by 50%."
            },
            {
                id: "const-2",
                level: 2,
                name: "To Forsake Fortune",
                desc: "Grass Ring of Sanctification's duration is increased by 3s."
            },
            {
                id: "const-3",
                level: 3,
                name: "To Sequester Sorrow",
                desc: "Increases the Level of Sanctifying Ring by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "To Sever Sealing",
                desc: "When the Normal, Charged, or Plunging Attacks of the character affected by Shinobu's Grass Ring of Sanctification hit opponents, a Thundergrass Mark will land on the opponent's position and deal AoE Electro DMG based on 9.7% of Shinobu's Max HP.\n\nThis effect can occur once every 5s."
            },
            {
                id: "const-5",
                level: 5,
                name: "To Cease Courtesies",
                desc: "Increases the Level of Gyoei Narukami Kariyama Rite by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "To Ward Weakness",
                desc: "When Kuki Shinobu takes lethal DMG, this instance of DMG will not take her down. This effect will automatically trigger when her HP reaches 1 and will trigger once every 60s.\nWhen Shinobu's HP drops below 25%, she will gain 150 Elemental Mastery for 15s. This effect will trigger once every 60s."
            }
        ],
        constellationMap: {
            c1: [
                68,
                52
            ],
            c2: [
                87,
                35.5
            ],
            c3: [
                57,
                14.5
            ],
            c4: [
                23,
                32
            ],
            c5: [
                19.5,
                69
            ],
            c6: [
                48.5,
                87
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "lisa",
        name: "Lisa",
        title: "Witch of Purple Rose",
        constellationName: "",
        rarity: 4,
        version: "1.0",
        element: "Electro",
        weapon: "Catalyst",
        region: "Mondstadt",
        role: "Main DPS",
        unlocked: false,
        lore: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.\nAs much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
        abilities: [
            {
                id: "normal",
                name: "Lightning Touch",
                desc: "Normal Attack\nPerforms up to 4 lightning attacks that deal Electro DMG.\n\nCharged Attack\nConsumes a certain amount of Stamina to deal AoE Electro DMG after a short casting time.\n\nPlunging Attack\nGathering the might of Electro, Lisa plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Electro DMG upon impact with the ground.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Violet Arc",
                desc: "Channels the power of lightning to sweep bothersome matters away.\n\n(‍Press‍/‍Tap‍)\nReleases a homing Lightning Orb.\nOn hit, it deals Electro DMG and applies a stack of the Conductive status (max 3 stacks) to opponents in a small AoE.\n\nHold\nAfter an extended casting time, calls down lightning from the heavens, dealing massive Electro DMG to all nearby opponents.\nDeals great amounts of extra damage to opponents based on the number of Conductive stacks applied to them, and clears their Conductive status.",
                previews: [
                    "skill-tap",
                    "skill-hold"
                ]
            },
            {
                id: "burst",
                name: "Lightning Rose",
                desc: "Summons a Lightning Rose that unleashes powerful lightning bolts, launching surrounding opponents and dealing Electro DMG.\n\nThe Lightning Rose will continuously emit lightning to knock back opponents and deal Electro DMG throughout the ability's duration.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Induced Aftershock",
                desc: "Hits by Charged Attacks apply Violet Arc's Conductive status to opponents.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Static Electricity Field",
                desc: "Opponents hit by Lightning Rose have their DEF decreased by 15% for 10s.",
                previews: []
            },
            {
                id: "utility",
                name: "General Pharmaceutics",
                desc: "When Lisa crafts a potion, she has a 20% chance to refund a portion of the crafting materials used.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Infinite Circuit",
                desc: "Lisa regenerates 2 Energy for every opponent hit while holding Violet Arc.\nA maximum of 10 Energy can be regenerated in this manner at any one time."
            },
            {
                id: "const-2",
                level: 2,
                name: "Electromagnetic Field",
                desc: "Holding Violet Arc has the following effects:\n\nIncreases DEF by 25%.\nIncreases Lisa's resistance to interruption."
            },
            {
                id: "const-3",
                level: 3,
                name: "Resonant Thunder",
                desc: "Increases the Level of Lightning Rose by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Plasma Eruption",
                desc: "Lightning Rose now unleashes 1-3 lightning bolts when it attacks."
            },
            {
                id: "const-5",
                level: 5,
                name: "Electrocute",
                desc: "Increases the Level of Violet Arc by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Pulsating Witch",
                desc: "When Lisa takes the field, she applies 3 stacks of Violet Arc's Conductive status onto nearby opponents.\nThis effect can only occur once every 5s."
            }
        ],
        constellationMap: {
            c1: [
                31.5,
                29
            ],
            c2: [
                71.5,
                29
            ],
            c3: [
                50,
                42.5
            ],
            c4: [
                50,
                68
            ],
            c5: [
                31.5,
                77.5
            ],
            c6: [
                70,
                77
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c1"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c6",
                "c4"
            ]
        ]
    },
    {
        id: "mavuika",
        name: "Mavuika",
        title: "Night-Igniting Flame",
        constellationName: "Sol Invictus",
        rarity: 5,
        version: "5.2",
        element: "Pyro",
        weapon: "Claymore",
        region: "Natlan",
        role: "Main DPS",
        unlocked: false,
        lore: "Natlan's Archon and leader, the everlasting flame of hope for all living beings, and the cleansing flame that incinerates all evil.",
        abilities: [
            {
                id: "normal",
                name: "Flames Weave Life",
                desc: "Normal Attack\nPerforms up to 4 consecutive claymore strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to perform an especially powerful Severing Splendor strike toward the front.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "The Named Moment",
                desc: "Calling upon her authority over \"conflict,\" Mavuika summons the All-Fire Armaments passed down through the line of human Archons, dealing Nightsoul-aligned Pyro DMG\nAfter using this, Mavuika's Nightsoul points are restored to max value, and she enters the Nightsoul's Blessing state.\n\nAll-Fire Armaments\nHas different forms when Tapped or Held.\n\n(‍Press‍/‍Tap‍)\n\"Divine Name Unleashed\": The All-Fire Armaments manifest as a Ring of Searing Radiance. The Ring follows the current active character and attacks nearby opponents at intervals, dealing Nightsoul-aligned Pyro DMG.\n\nHold\n\"Ancient Name Unbound\": The All-Fire Armaments manifest as a Flamestrider. In this state, Mavuika can ride the Flamestrider at high speed, or activate its hidden backup propulsion module to temporarily cross various terrain types and glide in mid-air. Mavuika's Normal, Charged, and Plunging Attacks will also be converted to deal Nightsoul-aligned Pyro DMG which cannot be overridden. When sprinting, she also deals Nightsoul-aligned Pyro DMG to opponents along her path.\n\nWhile in the Nightsoul's Blessing state, Tapping the Elemental Skill can switch the All-Fire Armaments' form. The Armaments will disappear once Mavuika's Nightsoul's Blessing state ends.\n\nNightsoul's Blessing: Mavuika\nContinuously consumes Nightsoul points according to the All-Fire Armaments' form. Mavuika's Nightsoul's Blessing state ends once her Nightsoul points are exhausted.",
                previews: [
                    "skill-o",
                    "skill-m",
                    "skill"
                ]
            },
            {
                id: "burst",
                name: "Hour of Burning Skies",
                desc: "Let the people's inner voices reach the divine throne in the heavens.\nMavuika's Elemental Burst is not reliant on Energy, but instead, on \"Fighting Spirit.\"\n\nFighting Spirit\nWhen Mavuika has at least 50% Fighting Spirit, she can consume it all to unleash her Elemental Burst.\nMavuika can obtain Fighting Spirit via the following methods:\nWhen in combat, Nightsoul points consumed by nearby party members are converted to Fighting Spirit.\nWhen nearby party members' Normal Attacks hit opponents, Mavuika gains 1.5 Fighting Spirit. This can trigger once every 0.1s.\n\nAfter using this, Mavuika gains 10 Nightsoul points and enters the Nightsoul's Blessing state. Riding her Flamestrider high in the air, she uses a powerful Sunfell Slice against opponents on the ground, dealing Nightsoul-aligned AoE Pyro DMG and entering the \"Crucible of Death and Life\" state.\n\nCrucible of Death and Life\nDuring this time, Mavuika's various actions will no longer consume Nightsoul points, and her interruption resistance is increased. Also, the DMG dealt by Sunfell Slice and \"Ancient Name Unbound\"'s Normal and Charged Attacks is increased based on the amount of Fighting Spirit she has when using the Elemental Burst.\nCrucible of Death and Life will be canceled when Mavuika leaves the field.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Gift of Flaming Flowers",
                desc: "When a nearby party member triggers a Nightsoul Burst, Mavuika's ATK increases by 30% for 10s.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "\"Kiongozi\"",
                desc: "After using her Elemental Burst, Hour of Burning Skies, every point of Fighting Spirit present when it is used increases the DMG that the current active party member deals by 0.2%. The maximum increase obtainable this way is 40%, and this effect lasts 20s, decaying over this duration until it reaches 0.",
                previews: []
            },
            {
                id: "utility",
                name: "Night-Shattering Radiance",
                desc: "The party's Nightsoul Transmission CD is decreased by 20%.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "The Night-Lord's Explication",
                desc: "Mavuika's maximum Nightsoul points are increased to 120, and she gains Fighting Spirit 25% more efficiently.\nAdditionally, she gains 40% ATK for 8s after gaining Fighting Spirit."
            },
            {
                id: "const-2",
                level: 2,
                name: "The Ashen Price",
                desc: "When in the Nightsoul's Blessing State, Mavuika's Base ATK is increased by 200, and she obtains the following effects based on All-Fire Armaments' form:\n\nRing of Searing Radiance: Nearby opponents' DEF decreased by 20%.\nFlamestrider: Mavuika's Normal Attacks, Charged Attacks, and her Sunfell Slice from the Elemental Burst Hour of Burning Skies deal 60%, 90%, and 120% of her ATK as increased DMG respectively."
            },
            {
                id: "const-3",
                level: 3,
                name: "The Burning Sun",
                desc: "Increases the Level of Hour of Burning Skies by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "The Leader's Resolve",
                desc: "Enhances the effects of the Ascension Talent \"Kiongozi\":\nThe DMG increase gained after using the Elemental Burst Hour of Burning Skies will not decay over time, and an additional 10% DMG Bonus will be gained.\nYou must first unlock the Ascension Talent \"Kiongozi.\""
            },
            {
                id: "const-5",
                level: 5,
                name: "The Meaning of Truth",
                desc: "Increases the Level of The Named Moment by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "\"Humanity's Name\" Unfettered",
                desc: "The All-Fire Armaments from the Elemental Skill The Named Moment receive all-round improvements:\n\nRing of Searing Radiance: When the Ring's attacks hit opponents, a Flamestrider will crash into the struck opponent, dealing 200% of ATK as Nightsoul-aligned AoE Pyro DMG.\nFlamestrider: When Mavuika is riding the Flamestrider, she will also summon a Scorching Ring of Searing Radiance to follow her, which will decrease nearby opponents' DEF by 20% and deal 500% of ATK as Nightsoul-aligned AoE Pyro DMG to nearby opponents once every 3s. Mavuika's terrain-crossing abilities will also be further improved.\n\nAdditionally, when Mavuika is riding her Flamestrider and is not in combat, when her Nightsoul points drop to 5, she will gain 80 Nightsoul points. This effect can trigger once every 15s."
            }
        ],
        constellationMap: {
            c1: [
                50,
                50
            ],
            c2: [
                42,
                67
            ],
            c3: [
                74.5,
                67
            ],
            c4: [
                59,
                24.5
            ],
            c5: [
                42,
                24.5
            ],
            c6: [
                26,
                67
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "nahida",
        name: "Nahida",
        title: "Physic of Purity",
        constellationName: "Sapientia Oromasdis",
        rarity: 5,
        version: "3.2",
        element: "Dendro",
        weapon: "Catalyst",
        region: "Sumeru",
        role: "Buffer",
        unlocked: false,
        lore: "Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much.\nHer burden is heavy, but though she may experience loneliness, and though darkness is all she sees before her, she will not stop moving forward.",
        abilities: [
            {
                id: "normal",
                name: "Akara",
                desc: "Normal Attack\nPerforms up to 4 attacks that deal Dendro DMG to opponents in front of her.\n\nCharged Attack\nConsumes a certain amount of Stamina to deal AoE Dendro DMG to opponents in front of her after a short casting time.\n\nPlunging Attack\nCalling upon the might of Dendro, Nahida plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Dendro DMG upon impact with the ground.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "All Schemes to Know",
                desc: "Sends forth karmic bonds of wood and tree from her side, dealing AoE Dendro DMG and marking up to 8 opponents hit with the Seed of Skandha.\nWhen held, this skill will trigger differently.\n\nHold\nEnters Aiming Mode, which will allow you to select a limited number of opponents within a limited area. During this time, Nahida's resistance to interruption will be increased.\nWhen released, this skill deals Dendro DMG to these opponents and marks them with the Seed of Skandha.\nAiming Mode will last up to 5s and can select a maximum of 8 opponents.\n\nSeed of Skandha\nOpponents who have been marked by the Seed of Skandha will be linked to one another up till a certain distance.\nAfter you trigger Elemental Reactions on opponents who are affected by the Seeds of Skandha or when they take DMG from Dendro Cores (including Burgeon and Hyperbloom DMG), Nahida will unleash Tri-Karma Purification on the opponents and all connected opponents, dealing Dendro DMG based on her ATK and Elemental Mastery.\n\nYou can trigger at most 1 Tri-Karma Purification within a short period of time.",
                previews: [
                    "skill-hold",
                    "skill-tap",
                    "skill-seed"
                ]
            },
            {
                id: "burst",
                name: "Illusory Heart",
                desc: "Manifests the Court of Dreams and expands the Shrine of Maya.\n\nWhen the Shrine of Maya field is unleashed, the following effects will be separately unleashed based on the Elemental Types present within the party.\nPyro: While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from \"All Schemes to Know\" is increased.\nElectro: While Nahida remains within the Shrine of Maya, the interval between each Tri-Karma Purification from \"All Schemes to Know\" is decreased.\nHydro: The Shrine of Maya's duration is increased.\n\nIf there are at least 2 party members of the aforementioned Elemental Types present when the field is deployed, the aforementioned effects will be increased further.\n\nEven if Nahida is not on the field, these bonuses will still take effect so long as party members are within the Shrine of Maya.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Compassion Illuminated",
                desc: "When unleashing Illusory Heart, the Shrine of Maya will gain the following effects:\nThe Elemental Mastery of the active character within the field will be increased by 25% of the Elemental Mastery of the party member with the highest Elemental Mastery.\nYou can gain a maximum of 250 Elemental Mastery in this manner.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Awakening Elucidated",
                desc: "Each point of Nahida's Elemental Mastery beyond 200 will grant 0.1% Bonus DMG and 0.03% CRIT Rate to Tri-Karma Purification from All Schemes to Know.\nA maximum of 80% Bonus DMG and 24% CRIT Rate can be granted to Tri-Karma Purification in this manner.",
                previews: []
            },
            {
                id: "utility",
                name: "",
                desc: "On All Things MeditatedNahida can use All Schemes to Know to interact with some harvestable items within a fixed AoE. This skill may even have some other effects...",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "The Seed of Stored Knowledge",
                desc: "When the Shrine of Maya is unleashed and the Elemental Types of the party members are being tabulated, the count will add 1 to the number of Pyro, Electro, and Hydro characters respectively."
            },
            {
                id: "const-2",
                level: 2,
                name: "The Root of All Fullness",
                desc: "Opponents that are marked by Seeds of Skandha applied by Nahida herself will be affected by the following effects:\nBurning, Bloom, Hyperbloom, and Burgeon Reaction DMG they receive can score CRIT Hits. CRIT Rate and CRIT DMG are fixed at 20% and 100% respectively. CRIT Rate from this effect stacks with CRIT Rate from similar effects that allow these Elemental Reactions to CRIT.\nWithin 8s of being affected by Quicken, Aggravate, or Spread, DEF is decreased by 30%.\nThe CRIT Rate and CRIT DMG of Lunar-Bloom DMG received are increased by 10% and 20% respectively."
            },
            {
                id: "const-3",
                level: 3,
                name: "The Shoot of Conscious Attainment",
                desc: "Increases the Level of All Schemes to Know by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "The Stem of Manifest Inference",
                desc: "When 1/2/3/4 (or more) nearby opponents are affected by All Schemes to Know's Seeds of Skandha, Nahida's Elemental Mastery will be increased by 100/120/140/160."
            },
            {
                id: "const-5",
                level: 5,
                name: "The Leaves of Enlightening Speech",
                desc: "Increases the Level of Illusory Heart by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "The Fruit of Reason's Culmination",
                desc: "When Nahida hits an opponent affected by All Schemes to Know's Seeds of Skandha with Normal or Charged Attacks after unleashing Illusory Heart, she will use Tri-Karma Purification: Karmic Oblivion on this opponent and all connected opponents, dealing Dendro DMG based on 200% of Nahida's ATK and 400% of her Elemental Mastery.\nDMG dealt by Tri-Karma Purification: Karmic Oblivion is considered Elemental Skill DMG and can be triggered once every 0.2s.\nThis effect can last up to 10s and will be removed after Nahida has unleashed 6 instances of Tri-Karma Purification: Karmic Oblivion."
            }
        ],
        constellationMap: {
            c1: [
                50,
                7
            ],
            c2: [
                83,
                43
            ],
            c3: [
                86,
                85.5
            ],
            c4: [
                50,
                86
            ],
            c5: [
                22,
                86.5
            ],
            c6: [
                17,
                43.5
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c1",
                "c4"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c6",
                "c1"
            ]
        ]
    },
    {
        id: "navia",
        name: "Navia",
        title: "Helm of the Radiant Rose",
        constellationName: "Rosa Multiflora",
        rarity: 5,
        version: "4.3",
        element: "Geo",
        weapon: "Claymore",
        region: "Fontaine",
        role: "Main DPS",
        unlocked: false,
        lore: "The ever-beaming President of the Spina di Rosula, devoted to helping the people of Fontaine solve all kinds of thorny issues.",
        abilities: [
            {
                id: "normal",
                name: "Blunt Refusal",
                desc: "Normal Attack\nPerforms up to 4 consecutive strikes.\n\nCharged Attack\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt the end of the sequence, performs a more powerful slash.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Ceremonial Crystalshot",
                desc: "When a character in the party obtains an Elemental Shard created from the Crystallize reaction, or when they trigger the Lunar-Crystallize reaction, Navia will gain 1 Crystal Shrapnel stack. Navia can have up to 6 stacks of Crystal Shrapnel at once. Each time Crystal Shrapnel gain is triggered, the duration of the Crystal Shrapnel stacks you already have will be reset. Through the Lunar-Crystallize reaction, Navia will gain up to 1 Crystal Shrapnel stack every second.\nWhen she fires, Navia will consume all Crystal Shrapnel stacks and open her elegant yet lethal Gunbrella, firing multiple Rosula Shardshots that can penetrate opponents, dealing Geo DMG to opponents hit.\nWhen 0/1/2/3 or more stacks of Crystal Shrapnel are consumed, 5/7/9/11 Rosula Shardshots will be fired respectively. The more Rosula Shardshots that strike a single opponent, the greater the DMG dealt to them. When all 11 Rosula Shardshots strike, 200% of the original amount of DMG is dealt.\nIn addition, when more than 3 stacks of Crystal Shrapnel are consumed, every stack consumed beyond those 3 will increase the DMG dealt by this Gunbrella attack by an additional 15%.\n\nHold\nEnter Aiming Mode, continually collecting nearby Elemental Shards created by Crystallize reactions. When released, fire Rosula Shardshots with the same effect as when the skill is Tapped.\n\nTwo initial charges.\n\nArkhe: Ousia\nPeriodically, when Navia fires her Gunbrella, a Surging Blade will be summoned, dealing Ousia-aligned Geo DMG.",
                previews: [
                    "skill-1",
                    "skill-2",
                    "skill-3",
                    "skill-4",
                    "skill-hold"
                ]
            },
            {
                id: "burst",
                name: "As the Sunlit Sky's Singing Salute",
                desc: "On the orders of the President of the Spina di Rosula, call for a magnificent Rosula Dorata Salute. Unleashes a massive cannon bombardment on opponents in front of her, dealing AoE Geo DMG and providing Cannon Fire Support for a duration afterward, periodically dealing Geo DMG to nearby opponents.\nWhen cannon attacks hit opponents, Navia will gain 1 stack of Crystal Shrapnel. This effect can be triggered up to once every 2.4s.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Undisclosed Distribution Channels",
                desc: "For 4s after using Ceremonial Crystalshot, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into Geo DMG which cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
                previews: [
                    "ascension-1",
                    "ascension-charge"
                ]
            },
            {
                id: "ascension-4",
                name: "Mutual Assistance Network",
                desc: "For each Pyro/Electro/Cryo/Hydro party member, Navia gains 20% increased ATK. This effect can stack up to 2 times.",
                previews: []
            },
            {
                id: "utility",
                name: "Painstaking Transaction",
                desc: "Gains 25% more rewards when dispatched on a Fontaine Expedition for 20 hours.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "A Lady's Rules for Keeping a Courteous Distance",
                desc: "Each stack of Crystal Shrapnel consumed when Navia uses Ceremonial Crystalshot will restore 3 Energy to her and decrease the CD of As the Sunlit Sky's Singing Salute by 1s. Up to 9 Energy can be gained this way, and the CD of \"As the Sunlit Sky's Singing Salute\" can be decreased by up to 3s."
            },
            {
                id: "const-2",
                level: 2,
                name: "The President's Pursuit of Victory",
                desc: "Each stack of Crystal Shrapnel consumed will increase the CRIT Rate of this Ceremonial Crystalshot instance by 12%. CRIT Rate can be increased by up to 36% in this way.\nIn addition, when Ceremonial Crystalshot hits an opponent, one Cannon Fire Support shot from As the Sunlit Sky's Singing Salute will strike near the location of the hit. Up to one instance of Cannon Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by said Cannon Fire Support this way is considered Elemental Burst DMG."
            },
            {
                id: "const-3",
                level: 3,
                name: "Businesswoman's Broad Vision",
                desc: "Increases the Level of Ceremonial Crystalshot by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "The Oathsworn Never Capitulate",
                desc: "When As the Sunlit Sky's Singing Salute hits an opponent, that opponent's Geo RES will be decreased by 20% for 8s."
            },
            {
                id: "const-5",
                level: 5,
                name: "Negotiator's Resolute Negotiations",
                desc: "Increases the Level of As the Sunlit Sky's Singing Salute by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "The Flexible Finesse of the Spina's President",
                desc: "If more than 3 stacks of Crystal Shrapnel are consumed when using Ceremonial Crystalshot, each stack consumed beyond the first 3 increases the CRIT DMG of that Ceremonial Crystalshot by 45%, and any stacks consumed beyond the first 3 are returned to Navia."
            }
        ],
        constellationMap: {
            c1: [
                67.5,
                19
            ],
            c2: [
                65.5,
                37
            ],
            c3: [
                29.5,
                48
            ],
            c4: [
                35.5,
                71
            ],
            c5: [
                57.5,
                67
            ],
            c6: [
                53.5,
                23.5
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c6",
                "c1"
            ]
        ]
    },
    {
        id: "noelle",
        name: "Noelle",
        title: "Chivalric Blossom",
        constellationName: "Parma Cordis",
        rarity: 4,
        version: "1.0",
        element: "Geo",
        weapon: "Claymore",
        region: "Mondstadt",
        role: "Tank",
        unlocked: false,
        lore: "Like most of Mondstadt's young people, Noelle always dreamed of being a knight of Favonius when she grew up.\nShe may not have what it takes to be a knight just yet, but she is learning. Working as a maid at the Knights' headquarters, she is constantly taking notes on what constitutes knightly speech, knightly conduct, and knightly customs.\nShe holds firm to her belief that one day she will join their ranks — she just needs to keep trying her hardest at everything she does.",
        abilities: [
            {
                id: "normal",
                name: "Favonius Bladework - Maid",
                desc: "Normal Attack\nPerforms up to 4 consecutive strikes.\n\nCharged Attack\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt the end of the sequence, performs a more powerful slash.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Breastplate",
                desc: "Summons protective stone armor, dealing Geo DMG to surrounding opponents and creating a shield. The shield's DMG Absorption scales based on Noelle's DEF.\nThe shield has the following properties:\nWhen Noelle's Normal and Charged Attacks hit a target, they have a certain chance to regenerate HP for all characters.\nPossesses 150% DMG Absorption efficiency against all Elemental and Physical DMG.\n\nThe amount of HP healed when regeneration is triggered scales based on Noelle's DEF.",
                previews: [
                    "skill"
                ]
            },
            {
                id: "burst",
                name: "Sweeping Time",
                desc: "Gathering the strength of stone around her weapon, Noelle strikes the opponents surrounding her within a large AoE, dealing Geo DMG.\nAfterwards, Noelle gains the following effects:\nLarger attack AoE.\nConverts attack DMG to Geo DMG that cannot be overridden by any other elemental infusion.\nIncreased ATK that scales based on her DEF.",
                previews: [
                    "burst",
                    "burst-normal",
                    "burst-charge",
                    "burst-plunge"
                ]
            },
            {
                id: "ascension-1",
                name: "Devotion",
                desc: "When Noelle is in the party but not on the field, this ability triggers automatically when your active character's HP falls below 30%:\nCreates a shield for your active character that lasts for 20s and absorbs DMG equal to 400% of Noelle's DEF.\nThe shield has a 150% DMG Absorption effectiveness against all Elemental and Physical DMG.\nThis effect can only occur once every 60s.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Nice and Clean",
                desc: "Every 4 Normal or Charged Attack hits will decrease the CD of Breastplate by 1s.\nHitting multiple opponents with a single attack is only counted as 1 hit.",
                previews: []
            },
            {
                id: "utility",
                name: "Maid's Knighthood",
                desc: "When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle has a 12% chance to obtain double the product.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "I Got Your Back",
                desc: "While Sweeping Time and Breastplate are both in effect, the chance of Breastplate's healing effects activating is increased to 100%."
            },
            {
                id: "const-2",
                level: 2,
                name: "Combat Maid",
                desc: "Decreases the Stamina Consumption of Noelle's Charged Attacks by 20% and increases her Charged Attack DMG by 15%."
            },
            {
                id: "const-3",
                level: 3,
                name: "Invulnerable Maid",
                desc: "Increases the Level of Breastplate by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "To Be Cleaned",
                desc: "When Breastplate's duration expires or it is destroyed by DMG, it will deal 400% of Noelle's ATK of Geo DMG to surrounding opponents."
            },
            {
                id: "const-5",
                level: 5,
                name: "Favonius Sweeper Master",
                desc: "Increases the Level of Sweeping Time by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Must Be Spotless",
                desc: "Sweeping Time increases Noelle's ATK by an additional 50% of her DEF.\nAdditionally, every opponent defeated during the skill's duration adds 1s to the duration, up to 10s."
            }
        ],
        constellationMap: {
            c1: [
                49.5,
                8.5
            ],
            c2: [
                77.5,
                23.5
            ],
            c3: [
                75,
                65.5
            ],
            c4: [
                49.5,
                93
            ],
            c5: [
                24,
                65
            ],
            c6: [
                22,
                23.5
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c1",
                "c6"
            ]
        ]
    },
    {
        id: "raiden-shogun",
        name: "Raiden Shogun",
        title: "Plane of Euthymia",
        constellationName: "Imperatrix Umbrosa",
        rarity: 5,
        version: "2.1",
        element: "Electro",
        weapon: "Polearm",
        region: "Inazuma",
        role: "Sub DPS",
        unlocked: false,
        lore: "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.\nWith the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity.",
        abilities: [
            {
                id: "normal",
                name: "Origin",
                desc: "Performs up to 5 rapid strikes.\n\n Charged Attack:\n Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n \n Plunging Attack:\n Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Transcendence: Baleful Omen",
                desc: "The Raiden Shogun unveils a shard of her Euthymia, dealing Electro DMG to nearby opponents, and granting nearby party members the Eye of Stormy Judgment.\n\nEye of Stormy Judgment\nWhen characters with this buff attack and deal DMG to opponents, the Eye will unleash a coordinated attack, dealing AoE Electro DMG at the opponent's position.\nCharacters who gain the Eye of Stormy Judgment will have their Elemental Burst DMG increased based on the Energy Cost of the Elemental Burst during the Eye's duration.\n\nThe Eye can initiate one coordinated attack every 0.9s per party.\nCoordinated attacks generated by characters not controlled by you deal 20% of the normal DMG.",
                previews: [
                    "skill",
                    "skill-a",
                    "skill-eye"
                ]
            },
            {
                id: "burst",
                name: "Secret Art: Musou Shinsetsu",
                desc: "Gathering truths unnumbered and wishes uncounted, the Raiden Shogun unleashes the Musou no Hitotachi and deals AoE Electro DMG, using Musou Isshin in combat for a certain duration afterward. The DMG dealt by Musou no Hitotachi and Musou Isshin's attacks will be increased based on the number of Chakra Desiderata's Resolve stacks consumed when this skill is used.\n\nMusou Isshin\nWhile in this state, the Raiden Shogun will wield her tachi in battle, while her Normal, Charged, and Plunging Attacks will be infused with Electro DMG, which cannot be overridden. When such attacks hit opponents, she will regenerate Energy for all nearby party members. Energy can be restored this way once every 1s, and this effect can be triggered 5 times throughout this skill's duration.\nWhile in this state, the Raiden Shogun's resistance to interruption is increased, and she is immune to Electro-Charged reaction DMG.\nWhile Musou Isshin is active, the Raiden Shogun's Normal, Charged, and Plunging Attack DMG will be considered Elemental Burst DMG.\n\nThe effects of Musou Isshin will be cleared when the Raiden Shogun leaves the field.\n\nChakra Desiderata\nWhen nearby party members (excluding the Raiden Shogun herself) use their Elemental Bursts, the Raiden Shogun will build up Resolve stacks based on the Energy Cost of these Elemental Bursts.\nThe maximum number of Resolve stacks is 60.\n\nThe Resolve gained by Chakra Desiderata will be cleared 300s after the Raiden Shogun leaves the field.",
                previews: [
                    "burst",
                    "burst-c",
                    "burst-cc",
                    "burst-charge",
                    "burst-normal"
                ]
            },
            {
                id: "ascension-1",
                name: "Wishes Unnumbered",
                desc: "When nearby party members gain Elemental Orbs or Particles, Chakra Desiderata gains 2 Resolve stacks.\nThis effect can occur once every 3s.",
                previews: [
                    "ascension-1"
                ]
            },
            {
                id: "ascension-4",
                name: "Enlightened One",
                desc: "Each 1% above 100% Energy Recharge that the Raiden Shogun possesses grants her:\n\n0.6% greater Energy restoration from Musou Isshin\n0.4% Electro DMG Bonus.",
                previews: []
            },
            {
                id: "utility",
                name: "All-Preserver",
                desc: "Mora expended when ascending Swords and Polearms is decreased by 50%.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Ominous Inscription",
                desc: "Chakra Desiderata will gather Resolve even faster. When Electro characters use their Elemental Bursts, the Resolve gained is increased by 80%. When characters of other Elemental Types use their Elemental Bursts, the Resolve gained is increased by 20%."
            },
            {
                id: "const-2",
                level: 2,
                name: "Steelbreaker",
                desc: "While using Musou no Hitotachi and in the Musou Isshin state applied by Secret Art: Musou Shinsetsu, the Raiden Shogun's attacks ignore 60% of opponents' DEF."
            },
            {
                id: "const-3",
                level: 3,
                name: "Shinkage Bygones",
                desc: "Increases the Level of Secret Art: Musou Shinsetsu by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Pledge of Propriety",
                desc: "When the Musou Isshin state applied by Secret Art: Musou Shinsetsu expires, all nearby party members (excluding the Raiden Shogun) gain 30% bonus ATK for 10s."
            },
            {
                id: "const-5",
                level: 5,
                name: "Shogun's Descent",
                desc: "Increases the Level of Transcendence: Baleful Omen by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Wishbearer",
                desc: "While in the Musou Isshin state applied by Secret Art: Musou Shinsetsu, attacks by the Raiden Shogun that are considered part of her Elemental Burst will decrease all nearby party members' (but not including the Raiden Shogun herself) Elemental Burst CD by 1s when they hit opponents.\nThis effect can trigger once every 1s, and can trigger a total of 5 times during the state's duration."
            }
        ],
        constellationMap: {
            c1: [
                50,
                15
            ],
            c2: [
                82.5,
                37
            ],
            c3: [
                82.5,
                66.5
            ],
            c4: [
                50,
                88
            ],
            c5: [
                15.5,
                66.5
            ],
            c6: [
                15.5,
                37
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ],
            [
                "c1",
                "c6"
            ]
        ]
    },
    {
        id: "venti",
        name: "Venti",
        title: "Windborne Bard",
        constellationName: "Carmen Dei",
        rarity: 5,
        version: "1.0",
        element: "Anemo",
        weapon: "Bow",
        region: "Mondstadt",
        role: "Sub-DPS",
        unlocked: false,
        lore: "A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times sings poems fresh and new.\n\nLikes apples and lively places but is not a fan of cheese or anything sticky.\n\nWhen using his Anemo power to control the wind, it often appears as feathers, as he's fond of that which appears light and breezy.",
        abilities: [
            {
                id: "normal",
                name: "Divine Marksmanship",
                desc: "Normal Attack\nPerforms up to 6 consecutive shots with a bow.\n\nCharged Attack\nPerform a more precise Aimed Shot with increased DMG.\nWhile aiming, favorable winds will accumulate on the arrowhead. A fully charged wind arrow will deal Anemo DMG.\n\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Skyward Sonnet",
                desc: "O wind upon which all hymns and songs fly, bear these earth-walkers up into the sky!\n\n(‍Press‍/‍Tap‍)\nSummons a Wind Domain at the opponent's location, dealing AoE Anemo DMG and launching opponents into the air.\n\nHold\nSummons an even larger Wind Domain with Venti as the epicenter, dealing AoE Anemo DMG and launching affected opponents into the air.\nAfter unleashing the Hold version of this ability, Venti rides the wind into the air.\n\nOpponents hit by Skyward Sonnet will fall to the ground slowly.",
                previews: [
                    "skill-hold",
                    "skill-tap"
                ]
            },
            {
                id: "burst",
                name: "Wind's Grand Ode",
                desc: "Fires off an arrow made of countless coalesced winds, creating a huge Stormeye that sucks in opponents and deals continuous Anemo DMG.\n\nElemental Absorption\nIf the Stormeye comes into contact with Hydro/Pyro/Cryo/Electro, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use.",
                previews: [
                    "burst",
                    "burst-cryo",
                    "burst-electro",
                    "burst-pyro",
                    "burst-hydro"
                ]
            },
            {
                id: "ascension-1",
                name: "Embrace of Winds",
                desc: "Holding Skyward Sonnet creates an upcurrent that lasts for 20s.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Temporal Wind's Eulogy",
                desc: "After completing Witch's Homework: Of the Waking of Wind, Venti will become a Hexerei character. When the party includes at least 2 Hexerei characters, you will gain the Hexerei: Secret Rite effect, which enhances Hexerei characters.\n\nHexerei: Secret Rite\nWhile the Stormeye created by the Elemental Burst Wind's Grand Ode is active, for 4s after a nearby active character triggers a Swirl reaction, that character's DMG is increased by 50%, and Venti's Stormeye deals 135% of its original DMG.",
                previews: []
            },
            {
                id: "utility",
                name: "Windrider",
                desc: "Decreases gliding Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Splitting Gales",
                desc: "Fires 2 additional arrows per Aimed Shot, each dealing 33% of the original arrow's DMG."
            },
            {
                id: "const-2",
                level: 2,
                name: "Breeze of Reminiscence",
                desc: "Skyward Sonnet decreases opponents' Anemo RES and Physical RES by 12% for 10s.\n\nOpponents launched by Skyward Sonnet suffer an additional 12% Anemo RES and Physical RES decrease while airborne."
            },
            {
                id: "const-3",
                level: 3,
                name: "Ode to Thousand Winds",
                desc: "Increases the Level of Wind's Grand Ode by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Hurricane of Freedom",
                desc: "When Venti picks up an Elemental Orb or Particle, he receives a 25% Anemo DMG Bonus for 10s."
            },
            {
                id: "const-5",
                level: 5,
                name: "Concerto dal Cielo",
                desc: "Increases the Level of Skyward Sonnet by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Storm of Defiance",
                desc: "Targets who take DMG from Wind's Grand Ode have their Anemo RES decreased by 20%.\n\nIf an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%."
            }
        ],
        constellationMap: {
            c1: [
                47,
                21.5
            ],
            c2: [
                67,
                35
            ],
            c3: [
                82.5,
                64.5
            ],
            c4: [
                53.5,
                83
            ],
            c5: [
                30.5,
                71.5
            ],
            c6: [
                51,
                66
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    },
    {
        id: "zhongli",
        name: "Zhongli",
        title: "Vago Mundo",
        constellationName: "",
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
                name: "Rain of Stone",
                desc: "Normal Attack\nPerforms up to 6 consecutive spear strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, causing stone spears to fall along his path.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
                previews: [
                    "normal",
                    "normal-charge",
                    "normal-plunge"
                ]
            },
            {
                id: "skill",
                name: "Dominus Lapidis",
                desc: "Every mountain, rock and inch of land is filled with the power of Geo, but those who can wield such powers freely are few and far between.\n\n(‍Press‍/‍Tap‍)\nCommands the power of earth to create a Stone Stele.\n\nHold\nCauses nearby Geo energy to explode, causing the following effects:\nIf their maximum number hasn't been reached, creates a Stone Stele.\nCreates a shield of jade. The shield's DMG Absorption scales based on Zhongli's Max HP.\nDeals AoE Geo DMG.\nIf there are nearby targets with the Geo element, it will drain a large amount of Geo element from a maximum of 2 such targets. This effect does not cause DMG.\n\nStone Stele\nWhen created, deals AoE Geo DMG.\nAdditionally, it will intermittently resonate with other nearby Geo constructs, dealing Geo DMG to surrounding opponents.\nThe Stone Stele is considered a Geo construct that can both be climbed and used to block attacks.\nOnly one Stele created by Zhongli himself may initially exist at any one time.\n\nJade Shield\nPossesses 150% DMG Absorption against all Elemental and Physical DMG.\nCharacters protected by the Jade Shield will decrease the Elemental RES and Physical RES of opponents in a small AoE by 20%. This effect cannot be stacked.",
                previews: [
                    "skill",
                    "skill-charge",
                    "skill-res"
                ]
            },
            {
                id: "burst",
                name: "Planet Befall",
                desc: "Brings a falling meteor down to earth, dealing massive Geo DMG to opponents caught in its AoE and applying the Petrification status to them.\n\nPetrification\nOpponents affected by the Petrification status cannot move.",
                previews: [
                    "burst"
                ]
            },
            {
                id: "ascension-1",
                name: "Resonant Waves",
                desc: "When the Jade Shield takes DMG, it will Fortify:\n\nFortified characters have 5% increased Shield Strength.\nCan stack up to 5 times, and lasts until the Jade Shield disappears.",
                previews: []
            },
            {
                id: "ascension-4",
                name: "Dominance of Earth",
                desc: "Zhongli deals bonus DMG based on his Max HP:\n\nNormal Attack, Charged Attack, and Plunging Attack DMG is increased by 1.39% of Max HP.\nDominus Lapidis' Stone Stele, resonance, and hold DMG is increased by 1.9% of Max HP.\nPlanet Befall's DMG is increased by 33% of Max HP.",
                previews: []
            },
            {
                id: "utility",
                name: "Arcanum of Crystal",
                desc: "Refunds 15% of the ore used when crafting Polearm-type weapons.",
                previews: []
            }
        ],
        constellations: [
            {
                id: "const-1",
                level: 1,
                name: "Rock, the Backbone of Earth",
                desc: "Increases the maximum number of Stone Steles created by Dominus Lapidis that may exist simultaneously to 2."
            },
            {
                id: "const-2",
                level: 2,
                name: "Stone, the Cradle of Jade",
                desc: "Planet Befall grants nearby characters on the field a Jade Shield when it descends."
            },
            {
                id: "const-3",
                level: 3,
                name: "Jade, Shimmering through Darkness",
                desc: "Increases the Level of Dominus Lapidis by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-4",
                level: 4,
                name: "Topaz, Unbreakable and Fearless",
                desc: "Increases Planet Befall's AoE by 20% and increases the duration of Planet Befall's Petrification effect by 2s."
            },
            {
                id: "const-5",
                level: 5,
                name: "Lazuli, Herald of the Order",
                desc: "Increases the Level of Planet Befall by 3.\nMaximum upgrade level is 15."
            },
            {
                id: "const-6",
                level: 6,
                name: "Chrysos, Bounty of Dominator",
                desc: "When the Jade Shield takes DMG, 40% of that incoming DMG is converted to HP for the current character.\nA single instance of regeneration cannot exceed 8% of that character's Max HP."
            }
        ],
        constellationMap: {
            c1: [
                37,
                47.5
            ],
            c2: [
                24,
                65.5
            ],
            c3: [
                50.5,
                92.5
            ],
            c4: [
                77,
                65.5
            ],
            c5: [
                50.5,
                28
            ],
            c6: [
                50.5,
                62
            ]
        },
        constConnections: [
            [
                "c1",
                "c2"
            ],
            [
                "c2",
                "c3"
            ],
            [
                "c3",
                "c4"
            ],
            [
                "c4",
                "c5"
            ],
            [
                "c5",
                "c6"
            ]
        ]
    }
];
