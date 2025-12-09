const components = {
    intel: {
        cpus: [
            // Intel 15th Gen (Arrow Lake) - LGA 1851
            { name: "Intel Core Ultra 9 285K", socket: "LGA1851", generation: "15th", tier: "maxed", ramType: ["DDR5"], description: "Flagship 15th gen with 24 cores, excellent for high-end builds", price: "₱36,495 - ₱38,000" },
            { name: "Intel Core Ultra 7 265K", socket: "LGA1851", generation: "15th", tier: "maxed", ramType: ["DDR5"], description: "High-end 20-core processor for enthusiasts", price: "₱23,619 - ₱36,495" },
            { name: "Intel Core Ultra 5 245K", socket: "LGA1851", generation: "15th", tier: "balanced", ramType: ["DDR5"], description: "Balanced 14-core option for new platform", price: "₱16,430 - ₱24,660" },
            
            // Intel 14th Gen - LGA 1700
            { name: "Intel Core i9-14900K", socket: "LGA1700", generation: "14th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "24-core flagship for extreme performance", price: "₱32,000 - ₱38,000" },
            { name: "Intel Core i7-14700K", socket: "LGA1700", generation: "14th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "20-core powerhouse for gaming and productivity", price: "₱24,000 - ₱28,000" },
            { name: "Intel Core i7-14700KF", socket: "LGA1700", generation: "14th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "Latest high-end unlocked processor", price: "₱22,000 - ₱26,000" },
            { name: "Intel Core i5-14600K", socket: "LGA1700", generation: "14th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "14-core balanced gaming CPU", price: "₱16,000 - ₱19,000" },
            { name: "Intel Core i5-14400F", socket: "LGA1700", generation: "14th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Great value 10-core processor", price: "₱11,000 - ₱13,000" },
            
            // Intel 13th Gen - LGA 1700
            { name: "Intel Core i9-13900F", socket: "LGA1700", generation: "13th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "Flagship performance for demanding tasks", price: "₱28,000 - ₱33,000" },
            { name: "Intel Core i7-13700F", socket: "LGA1700", generation: "13th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "High-end gaming and productivity powerhouse", price: "₱20,000 - ₱24,000" },
            { name: "Intel Core i7-13700K", socket: "LGA1700", generation: "13th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "Unlocked 16-core performance beast", price: "₱22,000 - ₱26,000" },
            { name: "Intel Core i5-13600K", socket: "LGA1700", generation: "13th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Excellent balanced performance", price: "₱15,000 - ₱18,000" },
            { name: "Intel Core i5-13400F", socket: "LGA1700", generation: "13th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Stronger midrange with 10-core hybrid design", price: "₱9,500 - ₱11,500" },
            { name: "Intel Core i5-13400", socket: "LGA1700", generation: "13th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "10-core with integrated graphics", price: "₱11,000 - ₱13,000" },
            { name: "Intel Core i3-13100F", socket: "LGA1700", generation: "13th", tier: "budget", ramType: ["DDR4", "DDR5"], description: "Newer budget option with better performance", price: "₱6,500 - ₱7,500" },
            
            // Intel 12th Gen - LGA 1700
            { name: "Intel Core i9-12900K", socket: "LGA1700", generation: "12th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "First hybrid architecture flagship", price: "₱24,000 - ₱28,000" },
            { name: "Intel Core i7-12700F", socket: "LGA1700", generation: "12th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "12-core balanced performance", price: "₱16,000 - ₱19,000" },
            { name: "Intel Core i5-12600KF", socket: "LGA1700", generation: "12th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Unlocked balanced CPU for enthusiasts", price: "₱12,000 - ₱14,000" },
            { name: "Intel Core i5-12400F", socket: "LGA1700", generation: "12th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Best bang for buck midrange gaming", price: "₱7,500 - ₱9,000" },
            { name: "Intel Core i5-12400", socket: "LGA1700", generation: "12th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Great value with iGPU", price: "₱9,000 - ₱10,500" },
            { name: "Intel Core i3-12100F", socket: "LGA1700", generation: "12th", tier: "budget", ramType: ["DDR4", "DDR5"], description: "Budget gaming champion, excellent value", price: "₱5,500 - ₱6,500" },
            
            // Intel 11th Gen - LGA 1200
            { name: "Intel Core i9-11900K", socket: "LGA1200", generation: "11th", tier: "maxed", ramType: ["DDR4"], description: "11th gen flagship, 8C/16T", price: "₱18,000 - ₱22,000" },
            { name: "Intel Core i7-11700K", socket: "LGA1200", generation: "11th", tier: "balanced", ramType: ["DDR4"], description: "8-core 11th gen unlocked", price: "₱15,000 - ₱18,000" },
            { name: "Intel Core i7-11700F", socket: "LGA1200", generation: "11th", tier: "balanced", ramType: ["DDR4"], description: "Solid 8-core performance", price: "₱12,000 - ₱15,000" },
            { name: "Intel Core i5-11600K", socket: "LGA1200", generation: "11th", tier: "balanced", ramType: ["DDR4"], description: "Unlocked 6-core option", price: "₱10,000 - ₱12,500" },
            { name: "Intel Core i5-11400F", socket: "LGA1200", generation: "11th", tier: "budget", ramType: ["DDR4"], description: "Older but still capable budget choice", price: "₱6,000 - ₱7,500" },
            { name: "Intel Core i5-11400", socket: "LGA1200", generation: "11th", tier: "budget", ramType: ["DDR4"], description: "Budget with integrated graphics", price: "₱7,500 - ₱9,000" },
            
            // Intel 10th Gen - LGA 1200
            { name: "Intel Core i9-10900K", socket: "LGA1200", generation: "10th", tier: "maxed", ramType: ["DDR4"], description: "10-core 10th gen flagship", price: "₱16,000 - ₱20,000" },
            { name: "Intel Core i7-10700K", socket: "LGA1200", generation: "10th", tier: "balanced", ramType: ["DDR4"], description: "8-core unlocked Comet Lake", price: "₱13,000 - ₱16,000" },
            { name: "Intel Core i7-10700F", socket: "LGA1200", generation: "10th", tier: "balanced", ramType: ["DDR4"], description: "Non-K 8-core option", price: "₱11,000 - ₱14,000" },
            { name: "Intel Core i5-10600K", socket: "LGA1200", generation: "10th", tier: "balanced", ramType: ["DDR4"], description: "6-core unlocked for gaming", price: "₱9,000 - ₱11,500" },
            { name: "Intel Core i5-10400F", socket: "LGA1200", generation: "10th", tier: "budget", ramType: ["DDR4"], description: "Popular budget 6-core", price: "₱5,500 - ₱7,000" },
            { name: "Intel Core i3-10100F", socket: "LGA1200", generation: "10th", tier: "budget", ramType: ["DDR4"], description: "Quad-core budget option", price: "₱4,000 - ₱5,500" },
            
            // Intel 9th Gen - LGA 1151
            { name: "Intel Core i9-9900K", socket: "LGA1151", generation: "9th", tier: "maxed", ramType: ["DDR4"], description: "8C/16T flagship Coffee Lake Refresh", price: "₱15,000 - ₱19,000" },
            { name: "Intel Core i7-9700K", socket: "LGA1151", generation: "9th", tier: "balanced", ramType: ["DDR4"], description: "8-core without HT, strong gaming", price: "₱12,000 - ₱15,000" },
            { name: "Intel Core i7-9700F", socket: "LGA1151", generation: "9th", tier: "balanced", ramType: ["DDR4"], description: "Non-K 8-core variant", price: "₱10,000 - ₱13,000" },
            { name: "Intel Core i5-9600K", socket: "LGA1151", generation: "9th", tier: "balanced", ramType: ["DDR4"], description: "6-core unlocked gaming CPU", price: "₱8,000 - ₱10,000" },
            { name: "Intel Core i5-9400F", socket: "LGA1151", generation: "9th", tier: "budget", ramType: ["DDR4"], description: "Budget 6-core workhorse", price: "₱5,000 - ₱6,500" },
            { name: "Intel Core i3-9100F", socket: "LGA1151", generation: "9th", tier: "budget", ramType: ["DDR4"], description: "Entry quad-core", price: "₱3,500 - ₱4,500" },
            
            // Intel 8th Gen - LGA 1151
            { name: "Intel Core i7-8700K", socket: "LGA1151", generation: "8th", tier: "balanced", ramType: ["DDR4"], description: "First mainstream 6C/12T Coffee Lake", price: "₱10,000 - ₱13,000" },
            { name: "Intel Core i7-8700", socket: "LGA1151", generation: "8th", tier: "balanced", ramType: ["DDR4"], description: "6-core locked variant", price: "₱9,000 - ₱11,500" },
            { name: "Intel Core i5-8600K", socket: "LGA1151", generation: "8th", tier: "balanced", ramType: ["DDR4"], description: "6-core unlocked, no HT", price: "₱7,500 - ₱9,500" },
            { name: "Intel Core i5-8400", socket: "LGA1151", generation: "8th", tier: "budget", ramType: ["DDR4"], description: "Popular budget 6-core", price: "₱6,000 - ₱7,500" },
            { name: "Intel Core i3-8100", socket: "LGA1151", generation: "8th", tier: "budget", ramType: ["DDR4"], description: "Budget quad-core Coffee Lake", price: "₱3,500 - ₱4,500" },
            
            // Intel 7th Gen - LGA 1151
            { name: "Intel Core i7-7700K", socket: "LGA1151", generation: "7th", tier: "balanced", ramType: ["DDR4"], description: "Kaby Lake flagship, 4C/8T", price: "₱8,000 - ₱10,500" },
            { name: "Intel Core i5-7600K", socket: "LGA1151", generation: "7th", tier: "budget", ramType: ["DDR4"], description: "Unlocked quad-core", price: "₱6,000 - ₱7,500" },
            { name: "Intel Core i5-7400", socket: "LGA1151", generation: "7th", tier: "budget", ramType: ["DDR4"], description: "Budget quad-core Kaby Lake", price: "₱4,500 - ₱6,000" },
            
            // Intel 6th Gen - LGA 1151
            { name: "Intel Core i7-6700K", socket: "LGA1151", generation: "6th", tier: "balanced", ramType: ["DDR4"], description: "Skylake flagship, 4C/8T", price: "₱7,500 - ₱9,500" },
            { name: "Intel Core i5-6600K", socket: "LGA1151", generation: "6th", tier: "budget", ramType: ["DDR4"], description: "Unlocked Skylake quad-core", price: "₱5,500 - ₱7,000" },
            { name: "Intel Core i5-6400", socket: "LGA1151", generation: "6th", tier: "budget", ramType: ["DDR4"], description: "Entry Skylake quad-core", price: "₱4,000 - ₱5,500" }
        ],
        motherboards: [
            // LGA 1851 (15th Gen)
            { name: "MSI Z890 GAMING PLUS WIFI", socket: "LGA1851", ramType: "DDR5", chipset: "Z890", tier: "maxed", description: "Premium 15th gen board with WiFi 7, PCIe 5.0", price: "₱18,400+" },
            { name: "ASUS ROG STRIX Z890-E GAMING", socket: "LGA1851", ramType: "DDR5", chipset: "Z890", tier: "maxed", description: "High-end with Thunderbolt 4/5 support", price: "₱22,000 - ₱28,000" },
            { name: "Gigabyte Z890 AORUS ELITE", socket: "LGA1851", ramType: "DDR5", chipset: "Z890", tier: "maxed", description: "Feature-rich Z890 flagship", price: "₱20,000 - ₱24,000" },
            { name: "MSI B860M GAMING PLUS WIFI", socket: "LGA1851", ramType: "DDR5", chipset: "B860", tier: "balanced", description: "Mid-range 15th gen with WiFi 7", price: "₱12,200+" },
            { name: "ASUS PRIME B860M-A", socket: "LGA1851", ramType: "DDR5", chipset: "B860", tier: "balanced", description: "Solid mid-range option for Arrow Lake", price: "₱10,500 - ₱13,000" },
            
            // LGA 1700 (12th/13th/14th Gen)
            { name: "ASUS ROG STRIX Z790-E GAMING", socket: "LGA1700", ramType: "DDR5", chipset: "Z790", tier: "maxed", description: "Premium Z790 with WiFi 6E, PCIe 5.0", price: "₱24,000 - ₱30,000" },
            { name: "MSI MPG Z790 Gaming Plus", socket: "LGA1700", ramType: "DDR5", chipset: "Z790", tier: "maxed", description: "High-end gaming with latest features", price: "₱18,000 - ₱22,000" },
            { name: "Gigabyte Z790 Aorus Elite AX", socket: "LGA1700", ramType: "DDR5", chipset: "Z790", tier: "maxed", description: "Premium motherboard with WiFi 6E", price: "₱19,000 - ₱23,000" },
            { name: "ASUS ROG STRIX Z690-E Gaming", socket: "LGA1700", ramType: "DDR5", chipset: "Z690", tier: "maxed", description: "Premium gaming motherboard with overclocking", price: "₱20,000 - ₱25,000" },
            { name: "MSI PRO Z690-A WIFI DDR4", socket: "LGA1700", ramType: "DDR4", chipset: "Z690", tier: "balanced", description: "DDR4 option for budget Z690", price: "₱12,000 - ₱15,000" },
            { name: "MSI PRO B760M-A WIFI", socket: "LGA1700", ramType: "DDR5", chipset: "B760", tier: "balanced", description: "Intel 13th gen midrange with WiFi", price: "₱8,500 - ₱10,500" },
            { name: "ASUS TUF Gaming B760M-Plus", socket: "LGA1700", ramType: "DDR5", chipset: "B760", tier: "balanced", description: "Gaming-focused with DDR5", price: "₱9,000 - ₱11,000" },
            { name: "ASRock B760M Pro RS", socket: "LGA1700", ramType: "DDR5", chipset: "B760", tier: "balanced", description: "Feature-rich balanced option", price: "₱7,500 - ₱9,500" },
            { name: "ASUS TUF Gaming B660M-Plus", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "balanced", description: "Gaming-focused balanced motherboard", price: "₱7,000 - ₱9,000" },
            { name: "ASUS PRIME B660M-A D4", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "budget", description: "Intel 12th/13th budget motherboard", price: "₱5,500 - ₱7,000" },
            { name: "MSI PRO B660M-A", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "budget", description: "Reliable budget option with good features", price: "₱5,000 - ₱6,500" },
            { name: "Gigabyte B660M DS3H", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "budget", description: "Basic but solid budget motherboard", price: "₱4,800 - ₱6,200" },
            
            // LGA 1200 (10th/11th Gen)
            { name: "ASUS ROG STRIX Z590-E GAMING", socket: "LGA1200", ramType: "DDR4", chipset: "Z590", tier: "maxed", description: "Premium Z590 for 10th/11th gen", price: "₱12,000 - ₱16,000" },
            { name: "MSI MAG Z590 TOMAHAWK", socket: "LGA1200", ramType: "DDR4", chipset: "Z590", tier: "maxed", description: "High-end Z590 motherboard", price: "₱10,500 - ₱14,000" },
            { name: "ASUS TUF Gaming Z490-Plus", socket: "LGA1200", ramType: "DDR4", chipset: "Z490", tier: "balanced", description: "Gaming Z490 for 10th gen", price: "₱9,000 - ₱12,000" },
            { name: "MSI MAG B560M MORTAR", socket: "LGA1200", ramType: "DDR4", chipset: "B560", tier: "balanced", description: "Mid-range B560 with memory OC", price: "₱6,500 - ₱8,500" },
            { name: "ASUS PRIME B560M-A", socket: "LGA1200", ramType: "DDR4", chipset: "B560", tier: "budget", description: "Budget B560 option", price: "₱5,500 - ₱7,000" },
            { name: "MSI B560M PRO-VDH WIFI", socket: "LGA1200", ramType: "DDR4", chipset: "B560", tier: "budget", description: "Budget 11th gen option", price: "₱4,500 - ₱5,500" },
            { name: "Gigabyte B460M DS3H", socket: "LGA1200", ramType: "DDR4", chipset: "B460", tier: "budget", description: "Entry-level for 10th gen", price: "₱4,000 - ₱5,500" },
            { name: "ASRock H410M-HDV", socket: "LGA1200", ramType: "DDR4", chipset: "H410", tier: "budget", description: "Ultra-budget LGA1200", price: "₱3,000 - ₱4,200" },
            
            // LGA 1151 (6th-9th Gen)
            { name: "ASUS ROG STRIX Z390-E GAMING", socket: "LGA1151", ramType: "DDR4", chipset: "Z390", tier: "maxed", description: "Premium Z390 for 8th/9th gen", price: "₱9,000 - ₱12,000" },
            { name: "MSI MPG Z390 GAMING PLUS", socket: "LGA1151", ramType: "DDR4", chipset: "Z390", tier: "balanced", description: "Mid-range Z390 board", price: "₱7,500 - ₱10,000" },
            { name: "Gigabyte Z390 UD", socket: "LGA1151", ramType: "DDR4", chipset: "Z390", tier: "balanced", description: "Budget Z390 option", price: "₱6,500 - ₱8,500" },
            { name: "ASUS TUF Z370-Plus Gaming", socket: "LGA1151", ramType: "DDR4", chipset: "Z370", tier: "balanced", description: "Gaming Z370 for 8th gen", price: "₱6,000 - ₱8,000" },
            { name: "MSI B365M PRO-VDH", socket: "LGA1151", ramType: "DDR4", chipset: "B365", tier: "budget", description: "Budget 8th/9th gen option", price: "₱4,000 - ₱5,500" },
            { name: "Gigabyte H310M H", socket: "LGA1151", ramType: "DDR4", chipset: "H310", tier: "budget", description: "Entry-level for 8th/9th gen", price: "₱3,000 - ₱4,500" },
            { name: "ASRock H110M-DVS", socket: "LGA1151", ramType: "DDR4", chipset: "H110", tier: "budget", description: "Budget for 6th/7th gen", price: "₱2,500 - ₱3,800" },
            { name: "ASUS PRIME B250M-A", socket: "LGA1151", ramType: "DDR4", chipset: "B250", tier: "budget", description: "7th gen budget option", price: "₱3,000 - ₱4,200" }
        ]
    },
    ryzen: {
        cpus: [
            // AMD Ryzen 9000 Series (Zen 5) - AM5
            { name: "Ryzen 9 9950X3D", socket: "AM5", generation: "9000", tier: "maxed", ramType: ["DDR5"], description: "Ultimate gaming CPU with 3D V-Cache, 16C/32T", price: "₱43,395 - ₱48,000" },
            { name: "Ryzen 9 9950X", socket: "AM5", generation: "9000", tier: "maxed", ramType: ["DDR5"], description: "Zen 5 flagship with 16C/32T, 170W TDP", price: "₱31,900 - ₱38,200" },
            { name: "Ryzen 9 9900X", socket: "AM5", generation: "9000", tier: "maxed", ramType: ["DDR5"], description: "12-core Zen 5 powerhouse", price: "₱28,000 - ₱33,000" },
            { name: "Ryzen 7 9700X", socket: "AM5", generation: "9000", tier: "balanced", ramType: ["DDR5"], description: "8-core Zen 5 for gaming and productivity", price: "₱18,500 - ₱22,000" },
            { name: "Ryzen 5 9600X", socket: "AM5", generation: "9000", tier: "balanced", ramType: ["DDR5"], description: "6-core Zen 5 mainstream", price: "₱14,000 - ₱17,000" },
            
            // AMD Ryzen 7000 Series (Zen 4) - AM5
            { name: "Ryzen 9 7950X3D", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "Ultimate gaming and productivity CPU", price: "₱38,000 - ₱45,000" },
            { name: "Ryzen 9 7950X", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "16-core Zen 4 flagship", price: "₱32,000 - ₱38,000" },
            { name: "Ryzen 9 7900X3D", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "12-core with 3D V-Cache", price: "₱28,000 - ₱33,000" },
            { name: "Ryzen 9 7900X", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "12-core powerhouse for content creation", price: "₱25,000 - ₱30,000" },
            { name: "Ryzen 7 7800X3D", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "Gaming king with 3D V-Cache technology", price: "₱24,000 - ₱28,000" },
            { name: "Ryzen 7 7700X", socket: "AM5", generation: "7000", tier: "balanced", ramType: ["DDR5"], description: "8-core balanced Zen 4", price: "₱18,000 - ₱21,000" },
            { name: "Ryzen 5 7600X", socket: "AM5", generation: "7000", tier: "balanced", ramType: ["DDR5"], description: "6-core gaming focused", price: "₱14,000 - ₱17,000" },
            { name: "Ryzen 5 7600", socket: "AM5", generation: "7000", tier: "balanced", ramType: ["DDR5"], description: "Great midrange for AM5 platform", price: "₱12,500 - ₱15,000" },
            
            // AMD Ryzen 5000 Series (Zen 3) - AM4
            { name: "Ryzen 9 5950X", socket: "AM4", generation: "5000", tier: "maxed", ramType: ["DDR4"], description: "16-core AM4 flagship", price: "₱28,000 - ₱33,000" },
            { name: "Ryzen 9 5900X", socket: "AM4", generation: "5000", tier: "maxed", ramType: ["DDR4"], description: "12-core productivity beast", price: "₱22,000 - ₱26,000" },
            { name: "Ryzen 7 5800X3D", socket: "AM4", generation: "5000", tier: "maxed", ramType: ["DDR4"], description: "Gaming champion with 3D V-Cache", price: "₱18,000 - ₱22,000" },
            { name: "Ryzen 7 5700X", socket: "AM4", generation: "5000", tier: "balanced", ramType: ["DDR4"], description: "8-core balanced performance", price: "₱10,000 - ₱12,500" },
            { name: "Ryzen 5 5600X", socket: "AM4", generation: "5000", tier: "balanced", ramType: ["DDR4"], description: "Popular 6-core gaming CPU", price: "₱8,500 - ₱10,500" },
            { name: "Ryzen 5 5600", socket: "AM4", generation: "5000", tier: "balanced", ramType: ["DDR4"], description: "King of budget builds, very common in PH", price: "₱7,000 - ₱8,500" },
            { name: "Ryzen 5 5600G", socket: "AM4", generation: "5000", tier: "balanced", ramType: ["DDR4"], description: "APU option, popular in PH shops", price: "₱7,500 - ₱9,000" },
            { name: "Ryzen 5 5500", socket: "AM4", generation: "5000", tier: "budget", ramType: ["DDR4"], description: "Budget 6-core option", price: "₱5,500 - ₱6,500" },
            
            // AMD Ryzen 4000 Series - AM4
            { name: "Ryzen 5 4500", socket: "AM4", generation: "4000", tier: "budget", ramType: ["DDR4"], description: "Entry-level Ryzen, very affordable", price: "₱4,000 - ₱5,000" },
            { name: "Ryzen 3 4100", socket: "AM4", generation: "4000", tier: "budget", ramType: ["DDR4"], description: "Budget quad-core for basic gaming", price: "₱3,500 - ₱4,500" },
            
            // AMD Ryzen 3000 Series (Zen 2) - AM4
            { name: "Ryzen 9 3950X", socket: "AM4", generation: "3000", tier: "maxed", ramType: ["DDR4"], description: "16C/32T Zen 2 flagship", price: "₱22,000 - ₱28,000" },
            { name: "Ryzen 9 3900X", socket: "AM4", generation: "3000", tier: "maxed", ramType: ["DDR4"], description: "12-core Zen 2 powerhouse", price: "₱18,000 - ₱23,000" },
            { name: "Ryzen 7 3800X", socket: "AM4", generation: "3000", tier: "balanced", ramType: ["DDR4"], description: "8-core higher clock Zen 2", price: "₱14,000 - ₱17,000" },
            { name: "Ryzen 7 3700X", socket: "AM4", generation: "3000", tier: "balanced", ramType: ["DDR4"], description: "8C/16T excellent efficiency", price: "₱12,000 - ₱15,000" },
            { name: "Ryzen 5 3600X", socket: "AM4", generation: "3000", tier: "balanced", ramType: ["DDR4"], description: "6-core higher performance variant", price: "₱9,000 - ₱11,500" },
            { name: "Ryzen 5 3600", socket: "AM4", generation: "3000", tier: "balanced", ramType: ["DDR4"], description: "Legendary 6-core value king", price: "₱7,500 - ₱9,500" },
            { name: "Ryzen 5 3500X", socket: "AM4", generation: "3000", tier: "budget", ramType: ["DDR4"], description: "Budget 6-core without SMT", price: "₱6,000 - ₱7,500" },
            { name: "Ryzen 3 3300X", socket: "AM4", generation: "3000", tier: "budget", ramType: ["DDR4"], description: "Quad-core with SMT, great value", price: "₱5,000 - ₱6,500" },
            { name: "Ryzen 3 3100", socket: "AM4", generation: "3000", tier: "budget", ramType: ["DDR4"], description: "Entry quad-core Zen 2", price: "₱4,000 - ₱5,500" },
            
            // AMD Ryzen 2000 Series (Zen+) - AM4
            { name: "Ryzen 7 2700X", socket: "AM4", generation: "2000", tier: "balanced", ramType: ["DDR4"], description: "8C/16T Zen+ with XFR2", price: "₱10,000 - ₱13,000" },
            { name: "Ryzen 7 2700", socket: "AM4", generation: "2000", tier: "balanced", ramType: ["DDR4"], description: "Non-X 8-core Zen+", price: "₱8,500 - ₱11,000" },
            { name: "Ryzen 5 2600X", socket: "AM4", generation: "2000", tier: "budget", ramType: ["DDR4"], description: "6-core Zen+ with XFR2", price: "₱7,000 - ₱9,000" },
            { name: "Ryzen 5 2600", socket: "AM4", generation: "2000", tier: "budget", ramType: ["DDR4"], description: "Popular budget 6C/12T", price: "₱6,000 - ₱7,500" },
            { name: "Ryzen 3 2200G", socket: "AM4", generation: "2000", tier: "budget", ramType: ["DDR4"], description: "Budget APU with Vega graphics", price: "₱4,000 - ₱5,500" },
            
            // AMD Ryzen 1000 Series (Zen) - AM4
            { name: "Ryzen 7 1800X", socket: "AM4", generation: "1000", tier: "balanced", ramType: ["DDR4"], description: "First Zen flagship 8C/16T", price: "₱9,000 - ₱12,000" },
            { name: "Ryzen 7 1700X", socket: "AM4", generation: "1000", tier: "balanced", ramType: ["DDR4"], description: "8-core first-gen Ryzen", price: "₱8,000 - ₱10,500" },
            { name: "Ryzen 7 1700", socket: "AM4", generation: "1000", tier: "budget", ramType: ["DDR4"], description: "65W 8-core Zen", price: "₱7,000 - ₱9,000" },
            { name: "Ryzen 5 1600X", socket: "AM4", generation: "1000", tier: "budget", ramType: ["DDR4"], description: "6-core first Zen launch", price: "₱6,000 - ₱7,500" },
            { name: "Ryzen 5 1600", socket: "AM4", generation: "1000", tier: "budget", ramType: ["DDR4"], description: "Popular budget 6C/12T Zen", price: "₱5,000 - ₱6,500" },
            { name: "Ryzen 5 1400", socket: "AM4", generation: "1000", tier: "budget", ramType: ["DDR4"], description: "Quad-core with SMT", price: "₱4,000 - ₱5,500" },
            { name: "Ryzen 3 1200", socket: "AM4", generation: "1000", tier: "budget", ramType: ["DDR4"], description: "Entry quad-core Zen", price: "₱3,000 - ₱4,500" }
        ],
        motherboards: [
            // AM5 (Ryzen 7000/9000)
            { name: "ASUS ROG STRIX X870E-E GAMING", socket: "AM5", ramType: "DDR5", chipset: "X870E", tier: "maxed", description: "Premium AM5 with USB4/Thunderbolt, PCIe 5.0", price: "₱25,000 - ₱32,000" },
            { name: "MSI MPG X670E Carbon", socket: "AM5", ramType: "DDR5", chipset: "X670E", tier: "maxed", description: "High-end AM5 with premium features", price: "₱22,000 - ₱28,000" },
            { name: "Gigabyte X670 Aorus Master", socket: "AM5", ramType: "DDR5", chipset: "X670", tier: "maxed", description: "Flagship AM5 motherboard", price: "₱20,000 - ₱26,000" },
            { name: "ASUS TUF Gaming X670E-Plus", socket: "AM5", ramType: "DDR5", chipset: "X670E", tier: "maxed", description: "X870E alternative with great features", price: "₱17,700 - ₱22,000" },
            { name: "MSI B650M Mortar", socket: "AM5", ramType: "DDR5", chipset: "B650", tier: "balanced", description: "Ryzen 7000 midrange motherboard", price: "₱10,500 - ₱13,000" },
            { name: "ASUS TUF Gaming B650M-Plus", socket: "AM5", ramType: "DDR5", chipset: "B650", tier: "balanced", description: "Gaming-focused B650", price: "₱9,500 - ₱12,000" },
            { name: "Gigabyte B650 Gaming X AX", socket: "AM5", ramType: "DDR5", chipset: "B650", tier: "balanced", description: "B650 with WiFi", price: "₱9,000 - ₱11,500" },
            { name: "ASRock B650M-AYW", socket: "AM5", ramType: "DDR5", chipset: "B650", tier: "budget", description: "Entry-level AM5 option", price: "₱7,350 - ₱9,000" },
            
            // AM4 (Ryzen 3000/5000)
            { name: "ASUS ROG STRIX X570-E Gaming", socket: "AM4", ramType: "DDR4", chipset: "X570", tier: "maxed", description: "Premium AM4 flagship", price: "₱15,000 - ₱20,000" },
            { name: "MSI B550 Tomahawk", socket: "AM4", ramType: "DDR4", chipset: "B550", tier: "balanced", description: "Popular B550 choice", price: "₱8,500 - ₱11,000" },
            { name: "ASRock B550M Steel Legend", socket: "AM4", ramType: "DDR4", chipset: "B550", tier: "balanced", description: "Ryzen 3000-5000 balanced choice", price: "₱7,000 - ₱9,000" },
            { name: "ASUS TUF Gaming B550M-Plus", socket: "AM4", ramType: "DDR4", chipset: "B550", tier: "balanced", description: "Gaming-focused AM4 motherboard", price: "₱6,500 - ₱8,500" },
            { name: "Gigabyte B550M DS3H", socket: "AM4", ramType: "DDR4", chipset: "B550", tier: "budget", description: "Budget B550 option", price: "₱5,000 - ₱6,500" },
            { name: "MSI A520M-A Pro", socket: "AM4", ramType: "DDR4", chipset: "A520", tier: "budget", description: "Reliable budget option for Ryzen", price: "₱3,500 - ₱4,500" },
            { name: "ASRock A520M-HVS", socket: "AM4", ramType: "DDR4", chipset: "A520", tier: "budget", description: "Basic AM4 budget motherboard", price: "₱3,200 - ₱4,200" },
            { name: "Gigabyte A520M S2H", socket: "AM4", ramType: "DDR4", chipset: "A520", tier: "budget", description: "Entry-level AM4 motherboard", price: "₱3,000 - ₱4,000" },
            
            // Legacy AM4 Motherboards (X470/B450/X370/B350/A320) - Ryzen 1000-3000 series
            { name: "ASUS ROG STRIX X470-F Gaming", socket: "AM4", ramType: "DDR4", chipset: "X470", tier: "maxed", description: "Premium X470 for Ryzen 1000-3000", price: "₱8,000 - ₱11,000" },
            { name: "MSI X470 Gaming Pro Carbon", socket: "AM4", ramType: "DDR4", chipset: "X470", tier: "maxed", description: "High-end X470 enthusiast board", price: "₱7,500 - ₱10,000" },
            { name: "Gigabyte X470 Aorus Ultra Gaming", socket: "AM4", ramType: "DDR4", chipset: "X470", tier: "balanced", description: "X470 gaming motherboard", price: "₱6,500 - ₱9,000" },
            { name: "ASRock X470 Master SLI", socket: "AM4", ramType: "DDR4", chipset: "X470", tier: "balanced", description: "X470 with multi-GPU support", price: "₱6,000 - ₱8,000" },
            { name: "MSI B450 Tomahawk Max", socket: "AM4", ramType: "DDR4", chipset: "B450", tier: "balanced", description: "Popular B450 MAX variant", price: "₱5,500 - ₱7,500" },
            { name: "ASUS ROG STRIX B450-F Gaming", socket: "AM4", ramType: "DDR4", chipset: "B450", tier: "balanced", description: "Gaming B450 board", price: "₱5,000 - ₱7,000" },
            { name: "Gigabyte B450 Aorus Elite", socket: "AM4", ramType: "DDR4", chipset: "B450", tier: "balanced", description: "Balanced B450 option", price: "₱4,800 - ₱6,500" },
            { name: "ASRock B450M Steel Legend", socket: "AM4", ramType: "DDR4", chipset: "B450", tier: "balanced", description: "Micro-ATX B450 with RGB", price: "₱4,500 - ₱6,000" },
            { name: "MSI B450M Mortar Max", socket: "AM4", ramType: "DDR4", chipset: "B450", tier: "balanced", description: "Compact B450 MAX board", price: "₱4,200 - ₱5,800" },
            { name: "ASUS Prime B450M-A", socket: "AM4", ramType: "DDR4", chipset: "B450", tier: "budget", description: "Budget B450 micro-ATX", price: "₱3,800 - ₱5,000" },
            { name: "Gigabyte B450M DS3H", socket: "AM4", ramType: "DDR4", chipset: "B450", tier: "budget", description: "Entry B450 option", price: "₱3,500 - ₱4,800" },
            { name: "ASUS ROG STRIX X370-F Gaming", socket: "AM4", ramType: "DDR4", chipset: "X370", tier: "balanced", description: "First-gen premium Ryzen board", price: "₱6,000 - ₱8,000" },
            { name: "MSI X370 Gaming Pro Carbon", socket: "AM4", ramType: "DDR4", chipset: "X370", tier: "balanced", description: "X370 enthusiast board", price: "₱5,500 - ₱7,500" },
            { name: "Gigabyte GA-AB350-Gaming 3", socket: "AM4", ramType: "DDR4", chipset: "B350", tier: "budget", description: "Budget B350 for Ryzen 1000/2000", price: "₱3,500 - ₱5,000" },
            { name: "ASRock AB350M Pro4", socket: "AM4", ramType: "DDR4", chipset: "B350", tier: "budget", description: "Micro-ATX B350 board", price: "₱3,200 - ₱4,500" },
            { name: "ASUS Prime A320M-K", socket: "AM4", ramType: "DDR4", chipset: "A320", tier: "budget", description: "Ultra-budget A320 board", price: "₱2,500 - ₱3,500" },
            { name: "Gigabyte GA-A320M-S2H", socket: "AM4", ramType: "DDR4", chipset: "A320", tier: "budget", description: "Basic A320 for Ryzen 1000/2000", price: "₱2,300 - ₱3,200" }
        ]
    }
};

const gpuData = {
    // NVIDIA RTX 50-Series (Blackwell) - Latest
    "RTX 5090": { tier: "maxed", minPSU: 1000, description: "Flagship 32GB GDDR7, 575W TDP, 12V-2x6 connector", price: "₱170,500 - ₱198,720+" },
    "RTX 5080": { tier: "maxed", minPSU: 850, description: "High-end 16GB GDDR7, 360W TDP, 12V-2x6 connector", price: "₱84,790 - ₱110,630" },
    "RTX 5070 Ti": { tier: "maxed", minPSU: 750, description: "Upper high-end 12GB GDDR7, exceptional 1440p/4K", price: "₱50,000 - ₱60,000" },
    "RTX 5070": { tier: "balanced", minPSU: 650, description: "Strong 12GB GDDR7, 250W TDP, great 1440p gaming", price: "₱40,040 - ₱46,000" },
    "RTX 5060 Ti": { tier: "balanced", minPSU: 550, description: "Mainstream 8GB GDDR7, excellent 1080p/1440p", price: "₱25,000 - ₱30,000" },
    "RTX 5060": { tier: "balanced", minPSU: 500, description: "Modern mainstream 8GB GDDR7, efficient 1080p", price: "₱18,000 - ₱22,000" },
    
    // AMD RX 9000 Series (RDNA 4) - Latest
    "RX 9070 XT": { tier: "maxed", minPSU: 750, description: "AMD high-end 16GB GDDR6, ~300W TDP, RTX 5070 competitor", price: "₱41,650 - ₱52,450" },
    "RX 9060 XT": { tier: "balanced", minPSU: 600, description: "Strong midrange 16GB GDDR6, ~180W TDP", price: "₱25,200 - ₱28,600" },
    "RX 9060": { tier: "balanced", minPSU: 550, description: "Mainstream 8GB GDDR6, efficient performance", price: "₱18,000 - ₱22,000" },
    
    // NVIDIA RTX 40-Series (Ada Lovelace)
    "RTX 4090": { tier: "maxed", minPSU: 1000, description: "Previous flagship 24GB GDDR6X, still excellent", price: "₱110,000 - ₱140,000" },
    "RTX 4080 Super": { tier: "maxed", minPSU: 850, description: "4K gaming capable, premium choice", price: "₱70,000 - ₱85,000" },
    "RTX 4070 Ti Super": { tier: "maxed", minPSU: 750, description: "Excellent 1440p/4K performance", price: "₱52,000 - ₱62,000" },
    "RTX 4070 Super": { tier: "maxed", minPSU: 650, description: "High-end 1440p gaming powerhouse", price: "₱38,000 - ₱46,000" },
    "RTX 4070": { tier: "balanced", minPSU: 650, description: "Strong 1440p gaming, 12GB VRAM", price: "₱32,000 - ₱38,000" },
    "RTX 4060 Ti 16GB": { tier: "balanced", minPSU: 550, description: "16GB for content creation and gaming", price: "₱26,000 - ₱31,000" },
    "RTX 4060 Ti 8GB": { tier: "balanced", minPSU: 550, description: "Solid 1080p/1440p gaming", price: "₱22,000 - ₱27,000" },
    "RTX 4060": { tier: "balanced", minPSU: 550, description: "Efficient modern mainstream GPU", price: "₱17,000 - ₱21,000" },
    
    // AMD RX 7000 Series (RDNA 3)
    "RX 7900 XTX": { tier: "maxed", minPSU: 850, description: "AMD flagship, excellent 4K performance, 24GB", price: "₱50,000 - ₱62,000" },
    "RX 7900 XT": { tier: "maxed", minPSU: 800, description: "High-end 20GB, strong 4K gaming", price: "₱42,000 - ₱52,000" },
    "RX 7800 XT": { tier: "balanced", minPSU: 700, description: "Excellent 1440p, 16GB VRAM", price: "₱28,000 - ₱34,000" },
    "RX 7700 XT": { tier: "balanced", minPSU: 700, description: "Strong 1440p gaming performance, 12GB", price: "₱24,000 - ₱29,000" },
    "RX 7600 XT": { tier: "balanced", minPSU: 600, description: "16GB midrange option", price: "₱18,000 - ₱22,000" },
    "RX 7600": { tier: "balanced", minPSU: 550, description: "Solid 1080p gaming, 8GB", price: "₱15,000 - ₱18,000" },
    
    // AMD RX 6000 Series (RDNA 2)
    "RX 6950 XT": { tier: "maxed", minPSU: 850, description: "High-end RDNA 2, 16GB", price: "₱38,000 - ₱48,000" },
    "RX 6900 XT": { tier: "maxed", minPSU: 800, description: "Flagship RDNA 2, 16GB", price: "₱32,000 - ₱42,000" },
    "RX 6800 XT": { tier: "maxed", minPSU: 750, description: "High performance 16GB", price: "₱28,000 - ₱35,000" },
    "RX 6700 XT": { tier: "balanced", minPSU: 650, description: "Strong 1440p gaming performance, 12GB", price: "₱20,000 - ₱25,000" },
    "RX 6650 XT": { tier: "balanced", minPSU: 600, description: "1080p/1440p capable, 8GB", price: "₱15,000 - ₱19,000" },
    "RX 6600 XT": { tier: "balanced", minPSU: 550, description: "Good 1080p gaming, 8GB", price: "₱13,000 - ₱16,000" },
    "RX 6600": { tier: "balanced", minPSU: 500, description: "Efficient 1080p gaming, 8GB", price: "₱11,000 - ₱14,000" },
    "RX 6500 XT": { tier: "budget", minPSU: 450, description: "AMD budget option, decent 1080p performance", price: "₱8,000 - ₱10,000" },
    
    // NVIDIA RTX 30-Series (Ampere)
    "RTX 3090 Ti": { tier: "maxed", minPSU: 1000, description: "Previous flagship 24GB", price: "₱60,000 - ₱75,000" },
    "RTX 3090": { tier: "maxed", minPSU: 850, description: "24GB for content creation", price: "₱50,000 - ₱65,000" },
    "RTX 3080 Ti": { tier: "maxed", minPSU: 850, description: "High-end 12GB Ampere", price: "₱42,000 - ₱52,000" },
    "RTX 3080": { tier: "maxed", minPSU: 750, description: "Strong 10GB performance", price: "₱35,000 - ₱45,000" },
    "RTX 3070 Ti": { tier: "balanced", minPSU: 750, description: "8GB high refresh 1440p", price: "₱28,000 - ₱35,000" },
    "RTX 3070": { tier: "balanced", minPSU: 650, description: "Excellent 1440p gaming, 8GB", price: "₱24,000 - ₱30,000" },
    "RTX 3060 Ti": { tier: "balanced", minPSU: 600, description: "Great 1440p value, 8GB", price: "₱20,000 - ₱25,000" },
    "RTX 3060": { tier: "balanced", minPSU: 550, description: "Mainstream 1080p gaming with ray tracing, 12GB", price: "₱16,000 - ₱20,000" },
    "RTX 3050": { tier: "budget", minPSU: 550, description: "Entry RTX, ray tracing on budget, 8GB", price: "₱12,000 - ₱15,000" },
    
    // NVIDIA RTX 20-Series (Turing)
    "RTX 2080 Ti": { tier: "maxed", minPSU: 750, description: "Previous flagship 11GB Turing", price: "₱30,000 - ₱40,000" },
    "RTX 2080 Super": { tier: "maxed", minPSU: 750, description: "High-end Turing with RT cores", price: "₱24,000 - ₱32,000" },
    "RTX 2080": { tier: "maxed", minPSU: 750, description: "First RTX high-end, 8GB", price: "₱22,000 - ₱28,000" },
    "RTX 2070 Super": { tier: "balanced", minPSU: 650, description: "Strong 1440p Turing", price: "₱18,000 - ₱24,000" },
    "RTX 2070": { tier: "balanced", minPSU: 650, description: "Mid-high Turing with RT", price: "₱16,000 - ₱21,000" },
    "RTX 2060 Super": { tier: "balanced", minPSU: 600, description: "Enhanced 2060, 8GB", price: "₱14,000 - ₱18,000" },
    "RTX 2060": { tier: "balanced", minPSU: 550, description: "First affordable RTX, 6GB", price: "₱12,000 - ₱16,000" },
    
    // NVIDIA GTX 16-Series (Turing without RT)
    "GTX 1660 Super": { tier: "budget", minPSU: 450, description: "Budget gaming champion, widely available", price: "₱10,000 - ₱13,000" },
    "GTX 1660 Ti": { tier: "budget", minPSU: 450, description: "Slightly better 1660, 6GB", price: "₱11,000 - ₱14,000" },
    "GTX 1660": { tier: "budget", minPSU: 450, description: "Solid budget 1080p, 6GB", price: "₱9,000 - ₱12,000" },
    "GTX 1650 Super": { tier: "budget", minPSU: 450, description: "Entry-level gaming upgrade", price: "₱8,000 - ₱10,000" },
    "GTX 1650": { tier: "budget", minPSU: 400, description: "Entry-level gaming, still popular in PH", price: "₱7,000 - ₱9,000" },
    
    // NVIDIA GTX 10-Series (Pascal)
    "GTX 1080 Ti": { tier: "maxed", minPSU: 600, description: "Legendary Pascal flagship, 11GB", price: "₱18,000 - ₱25,000" },
    "GTX 1080": { tier: "balanced", minPSU: 600, description: "High-end Pascal, 8GB", price: "₱14,000 - ₱19,000" },
    "GTX 1070 Ti": { tier: "balanced", minPSU: 550, description: "Near-1080 performance", price: "₱12,000 - ₱16,000" },
    "GTX 1070": { tier: "balanced", minPSU: 550, description: "Strong 1080p/1440p Pascal", price: "₱10,000 - ₱14,000" },
    "GTX 1060 6GB": { tier: "budget", minPSU: 500, description: "Most popular Pascal card, 6GB", price: "₱8,000 - ₱11,000" },
    "GTX 1060 3GB": { tier: "budget", minPSU: 450, description: "Budget Pascal with less VRAM", price: "₱6,500 - ₱9,000" },
    "GTX 1050 Ti": { tier: "budget", minPSU: 400, description: "Entry Pascal, 4GB no power connector", price: "₱5,500 - ₱7,500" },
    "GTX 1050": { tier: "budget", minPSU: 350, description: "Ultra-budget Pascal, 2GB", price: "₱4,500 - ₱6,500" },
    
    // AMD RX 5000 Series (RDNA 1)
    "RX 5700 XT": { tier: "balanced", minPSU: 650, description: "First RDNA high-end, 8GB", price: "₱16,000 - ₱21,000" },
    "RX 5700": { tier: "balanced", minPSU: 600, description: "Non-XT RDNA, strong value", price: "₱14,000 - ₱18,000" },
    "RX 5600 XT": { tier: "balanced", minPSU: 550, description: "1080p RDNA champion", price: "₱11,000 - ₱15,000" },
    "RX 5500 XT 8GB": { tier: "budget", minPSU: 500, description: "Budget RDNA with 8GB", price: "₱8,000 - ₱11,000" },
    "RX 5500 XT 4GB": { tier: "budget", minPSU: 500, description: "Entry RDNA, 4GB variant", price: "₱6,500 - ₱9,000" },
    
    // AMD RX Vega Series
    "RX Vega 64": { tier: "balanced", minPSU: 750, description: "HBM2 flagship, power hungry", price: "₱15,000 - ₱20,000" },
    "RX Vega 56": { tier: "balanced", minPSU: 650, description: "Cut-down Vega with HBM2", price: "₱12,000 - ₱16,000" },
    
    // AMD RX 500 Series (Polaris)
    "RX 590": { tier: "budget", minPSU: 550, description: "Refreshed Polaris, 8GB", price: "₱9,000 - ₱12,000" },
    "RX 580 8GB": { tier: "budget", minPSU: 550, description: "Popular budget Polaris, 8GB", price: "₱7,500 - ₱10,000" },
    "RX 580 4GB": { tier: "budget", minPSU: 500, description: "Budget Polaris with less VRAM", price: "₱6,000 - ₱8,500" },
    "RX 570 8GB": { tier: "budget", minPSU: 500, description: "Budget 1080p workhorse", price: "₱6,500 - ₱9,000" },
    "RX 570 4GB": { tier: "budget", minPSU: 500, description: "Entry Polaris gaming", price: "₱5,500 - ₱7,500" },
    "RX 560": { tier: "budget", minPSU: 400, description: "Ultra-budget Polaris, 4GB", price: "₱4,500 - ₱6,500" },
    "RX 550": { tier: "budget", minPSU: 400, description: "Entry-level Polaris, 2GB/4GB", price: "₱3,500 - ₱5,500" }
};

const ramData = {
    // DDR5 - High-End/Enthusiast
    "G.Skill Trident Z5 RGB 32GB DDR5-8000 CL38": { type: "DDR5", tier: "maxed", description: "Extreme speed DDR5 for enthusiasts", price: "₱10,450 - ₱11,550" },
    "TeamGroup T-Force Delta RGB 32GB DDR5-8000 CL38": { type: "DDR5", tier: "maxed", description: "High-performance DDR5 kit with RGB", price: "₱10,450 - ₱11,550" },
    "Corsair Dominator Platinum RGB 32GB DDR5-7200 CL34": { type: "DDR5", tier: "maxed", description: "Premium DDR5 with excellent timings", price: "₱11,000 - ₱13,000" },
    "G.Skill Trident Z5 Neo 32GB DDR5-7200 CL34": { type: "DDR5", tier: "maxed", description: "Optimized for AMD Ryzen", price: "₱10,800 - ₱12,500" },
    "Corsair Dominator Platinum RGB 32GB DDR5-6400 CL32": { type: "DDR5", tier: "maxed", description: "Premium DDR5 with RGB", price: "₱10,200 - ₱11,800" },
    "G.Skill Trident Z5 32GB DDR5-6400 CL32": { type: "DDR5", tier: "maxed", description: "High-end DDR5 performance", price: "₱9,800 - ₱11,200" },
    
    // DDR5 - Balanced/Mainstream
    "G.Skill Trident Z5 32GB DDR5-6000 CL30": { type: "DDR5", tier: "balanced", description: "Sweet spot DDR5 speed for AM5/LGA1700", price: "₱10,950 - ₱11,795" },
    "Corsair Vengeance RGB 32GB DDR5-6000 CL30": { type: "DDR5", tier: "balanced", description: "Excellent balance of speed and price", price: "₱9,500 - ₱10,800" },
    "Kingston Fury Beast 32GB DDR5-6000 CL30": { type: "DDR5", tier: "balanced", description: "Reliable DDR5 at sweet spot speed", price: "₱9,200 - ₱10,500" },
    "TeamGroup T-Force Vulcan 32GB DDR5-6000 CL30": { type: "DDR5", tier: "balanced", description: "Good value DDR5 option", price: "₱8,800 - ₱10,000" },
    "G.Skill Ripjaws S5 32GB DDR5-6000 CL30": { type: "DDR5", tier: "balanced", description: "No-RGB performance DDR5", price: "₱8,500 - ₱9,800" },
    "Kingston Fury Beast 16GB DDR5-5600 CL36": { type: "DDR5", tier: "balanced", description: "Entry-level DDR5 performance", price: "₱4,500 - ₱5,500" },
    "Corsair Vengeance 16GB DDR5-5600 CL36": { type: "DDR5", tier: "balanced", description: "Affordable DDR5 starter kit", price: "₱4,200 - ₱5,200" },
    
    // DDR5 - Budget
    "Kingston Fury Beast 16GB DDR5-5200 CL40": { type: "DDR5", tier: "budget", description: "Basic DDR5 for new platforms", price: "₱3,800 - ₱4,800" },
    "Crucial 16GB DDR5-4800 CL40": { type: "DDR5", tier: "budget", description: "Entry DDR5, JEDEC standard", price: "₱3,500 - ₱4,500" },
    
    // DDR4 - High-End
    "G.Skill Trident Z RGB 32GB DDR4-4000 CL16": { type: "DDR4", tier: "maxed", description: "Premium DDR4 with tight timings", price: "₱9,000 - ₱10,500" },
    "Corsair Dominator Platinum RGB 32GB DDR4-3600 CL16": { type: "DDR4", tier: "maxed", description: "Premium DDR4 with RGB", price: "₱8,500 - ₱10,000" },
    "G.Skill Trident Z Neo 32GB DDR4-3800 CL16": { type: "DDR4", tier: "maxed", description: "AMD Ryzen optimized DDR4", price: "₱8,200 - ₱9,500" },
    
    // DDR4 - Balanced/Mainstream
    "G.Skill Ripjaws V 32GB DDR4-3600 CL16": { type: "DDR4", tier: "balanced", description: "Excellent DDR4 value for gaming", price: "₱5,800 - ₱7,200" },
    "Corsair Vengeance RGB Pro 32GB DDR4-3600 CL18": { type: "DDR4", tier: "balanced", description: "High capacity with RGB lighting", price: "₱6,000 - ₱7,500" },
    "Kingston Fury Beast RGB 32GB DDR4-3600 CL17": { type: "DDR4", tier: "balanced", description: "RGB DDR4 with good performance", price: "₱5,500 - ₱6,800" },
    "TeamGroup T-Force Delta RGB 32GB DDR4-3600 CL18": { type: "DDR4", tier: "balanced", description: "Budget RGB DDR4 option", price: "₱5,200 - ₱6,500" },
    "G.Skill Ripjaws V 16GB DDR4-3600 CL16": { type: "DDR4", tier: "balanced", description: "Fast DDR4 for gaming builds", price: "₱3,200 - ₱4,000" },
    "Corsair Vengeance LPX 16GB DDR4-3600 CL18": { type: "DDR4", tier: "balanced", description: "Low-profile fast DDR4", price: "₱3,000 - ₱3,800" },
    
    // DDR4 - Budget
    "Kingston Fury Beast 16GB DDR4-3200 CL16": { type: "DDR4", tier: "budget", description: "Good value DDR4 option", price: "₱2,500 - ₱3,200" },
    "Corsair Vengeance LPX 16GB DDR4-3200 CL16": { type: "DDR4", tier: "budget", description: "Reliable budget DDR4 memory", price: "₱2,400 - ₱3,100" },
    "TeamGroup T-Force Vulcan Z 16GB DDR4-3200 CL16": { type: "DDR4", tier: "budget", description: "Budget-friendly DDR4 kit", price: "₱2,200 - ₱2,900" },
    "Crucial 16GB DDR4-3200 CL22": { type: "DDR4", tier: "budget", description: "Basic reliable DDR4", price: "₱2,000 - ₱2,700" },
    "Kingston 16GB DDR4-2666 CL19": { type: "DDR4", tier: "budget", description: "Entry-level DDR4 for basic builds", price: "₱1,800 - ₱2,400" },
    "G.Skill Aegis 8GB DDR4-3000 CL16": { type: "DDR4", tier: "budget", description: "Budget 8GB single stick", price: "₱1,200 - ₱1,600" },
    "Crucial 8GB DDR4-2666 CL19": { type: "DDR4", tier: "budget", description: "Basic 8GB for older platforms", price: "₱1,000 - ₱1,400" },
    "Kingston ValueRAM 8GB DDR4-2400 CL17": { type: "DDR4", tier: "budget", description: "Ultra-budget 8GB option", price: "₱900 - ₱1,300" }
};

const storageData = {
    // Gen5 NVMe - Premium/High-End
    "Samsung 990 Pro 2TB NVMe Gen4": { type: "NVMe Gen4", capacity: "2TB", tier: "maxed", description: "Flagship Gen4 NVMe drive, 7450 MB/s", price: "₱10,450" },
    "WD Black SN850X 2TB NVMe Gen4": { type: "NVMe Gen4", capacity: "2TB", tier: "maxed", description: "High-end gaming storage, 7300 MB/s", price: "₱10,200 - ₱12,000" },
    "Crucial T705 2TB NVMe Gen5": { type: "NVMe Gen5", capacity: "2TB", tier: "maxed", description: "Extreme Gen5 speeds up to 14,500 MB/s", price: "₱17,000 - ₱26,250" },
    "Samsung 990 Pro 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "maxed", description: "Premium Gen4 NVMe performance, 7450 MB/s", price: "₱5,800 - ₱7,200" },
    "WD Black SN850X 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "maxed", description: "Gaming-focused Gen4 drive", price: "₱5,500 - ₱6,800" },
    "Corsair MP700 2TB NVMe Gen5": { type: "NVMe Gen5", capacity: "2TB", tier: "maxed", description: "Gen5 with heatsink, 12,400 MB/s", price: "₱15,000 - ₱20,000" },
    "Crucial T700 2TB NVMe Gen5": { type: "NVMe Gen5", capacity: "2TB", tier: "maxed", description: "PCIe 5.0 flagship performance", price: "₱16,000 - ₱22,000" },
    
    // Gen4 NVMe - Balanced/Mainstream
    "Samsung 980 Pro 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "balanced", description: "Solid Gen4 performance, 7000 MB/s", price: "₱5,200 - ₱6,500" },
    "WD Black SN770 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "balanced", description: "Fast Gen4 without DRAM, 5150 MB/s", price: "₱4,200 - ₱5,200" },
    "Kingston KC3000 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "balanced", description: "High-performance Gen4, 7000 MB/s", price: "₱4,500 - ₱5,500" },
    "Crucial P5 Plus 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "balanced", description: "Great Gen4 value, 6600 MB/s", price: "₱4,000 - ₱5,000" },
    "Samsung 980 1TB NVMe Gen3": { type: "NVMe Gen3", capacity: "1TB", tier: "balanced", description: "Fast mainstream NVMe drive, 3500 MB/s", price: "₱3,800 - ₱4,800" },
    "WD Blue SN570 1TB NVMe Gen3": { type: "NVMe Gen3", capacity: "1TB", tier: "balanced", description: "Balanced performance and capacity, 3500 MB/s", price: "₱3,500 - ₱4,500" },
    "Crucial P3 Plus 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "balanced", description: "Good value Gen4 option, 5000 MB/s", price: "₱3,600 - ₱4,600" },
    "Kingston NV2 1TB NVMe Gen4": { type: "NVMe Gen4", capacity: "1TB", tier: "balanced", description: "Budget Gen4 performance", price: "₱3,200 - ₱4,200" },
    
    // Gen3 NVMe & SATA - Budget
    "WD Blue SN570 500GB NVMe Gen3": { type: "NVMe Gen3", capacity: "500GB", tier: "budget", description: "Reliable budget NVMe drive, 3500 MB/s", price: "₱2,000 - ₱2,800" },
    "Kingston NV2 500GB NVMe Gen4": { type: "NVMe Gen4", capacity: "500GB", tier: "budget", description: "Basic Gen4 NVMe storage", price: "₱1,900 - ₱2,600" },
    "Crucial P3 500GB NVMe Gen3": { type: "NVMe Gen3", capacity: "500GB", tier: "budget", description: "Entry-level NVMe, 3500 MB/s", price: "₱1,800 - ₱2,500" },
    "Samsung 980 500GB NVMe Gen3": { type: "NVMe Gen3", capacity: "500GB", tier: "budget", description: "Quality budget NVMe", price: "₱2,200 - ₱3,000" },
    "TeamGroup MP33 512GB NVMe Gen3": { type: "NVMe Gen3", capacity: "512GB", tier: "budget", description: "Affordable NVMe option", price: "₱1,700 - ₱2,400" },
    
    // SATA SSD - Budget Storage
    "Samsung 870 EVO 1TB SATA SSD": { type: "SATA", capacity: "1TB", tier: "budget", description: "Reliable SATA SSD, 560 MB/s", price: "₱3,500 - ₱4,500" },
    "Crucial MX500 1TB SATA SSD": { type: "SATA", capacity: "1TB", tier: "budget", description: "Popular SATA SSD with DRAM", price: "₱3,200 - ₱4,200" },
    "WD Blue 1TB SATA SSD": { type: "SATA", capacity: "1TB", tier: "budget", description: "Budget SATA storage", price: "₱2,800 - ₱3,800" },
    "Kingston A400 960GB SATA SSD": { type: "SATA", capacity: "960GB", tier: "budget", description: "Entry-level SATA SSD", price: "₱2,500 - ₱3,500" },
    "Crucial BX500 1TB SATA SSD": { type: "SATA", capacity: "1TB", tier: "budget", description: "Basic SATA SSD for storage", price: "₱2,600 - ₱3,600" },
    "Samsung 870 EVO 500GB SATA SSD": { type: "SATA", capacity: "500GB", tier: "budget", description: "Quality 500GB SATA option", price: "₱2,000 - ₱2,800" },
    "Kingston A400 480GB SATA SSD": { type: "SATA", capacity: "480GB", tier: "budget", description: "Ultra-budget SATA SSD", price: "₱1,500 - ₱2,200" },
    "WD Green 480GB SATA SSD": { type: "SATA", capacity: "480GB", tier: "budget", description: "Basic storage upgrade", price: "₱1,400 - ₱2,000" },
    "Crucial BX500 480GB SATA SSD": { type: "SATA", capacity: "480GB", tier: "budget", description: "Entry SATA SSD", price: "₱1,300 - ₱1,900" },
    "Patriot Burst 240GB SATA SSD": { type: "SATA", capacity: "240GB", tier: "budget", description: "Minimal boot drive", price: "₱900 - ₱1,300" },
    
    // HDD - Mass Storage Budget
    "Seagate Barracuda 2TB 7200RPM": { type: "HDD", capacity: "2TB", tier: "budget", description: "Standard 2TB HDD for mass storage", price: "₱2,500 - ₱3,200" },
    "WD Blue 1TB 7200RPM": { type: "HDD", capacity: "1TB", tier: "budget", description: "Reliable 1TB HDD", price: "₱1,800 - ₱2,400" },
    "Toshiba P300 1TB 7200RPM": { type: "HDD", capacity: "1TB", tier: "budget", description: "Budget mass storage", price: "₱1,600 - ₱2,200" }
};

const psuData = {
    // ATX 3.1 / High Wattage - Maxed
    "Corsair RM1000x 1000W 80+ Gold ATX 3.1": { wattage: 1000, tier: "maxed", description: "ATX 3.1 with 12V-2x6 connector, fully modular", price: "₱10,200 - ₱12,000" },
    "NZXT C1000 1000W 80+ Gold ATX 3.1": { wattage: 1000, tier: "maxed", description: "Native 12V-2x6 for RTX 50-series, ATX 3.1", price: "₱10,800" },
    "MSI MAG A1000GL 1000W 80+ Gold ATX 3.0": { wattage: 1000, tier: "maxed", description: "PCIe 5.0 ready, great for RTX 5080/5090", price: "₱9,650 - ₱11,000" },
    "ASUS ROG STRIX 1000W 80+ Platinum ATX 3.0": { wattage: 1000, tier: "maxed", description: "Premium efficiency with 12V-2x6", price: "₱14,450 - ₱16,000" },
    "Seasonic Prime TX-1000 80+ Titanium": { wattage: 1000, tier: "maxed", description: "Flagship efficiency PSU, 12-year warranty", price: "₱16,000 - ₱20,000" },
    "EVGA SuperNOVA 1000 G6 80+ Gold": { wattage: 1000, tier: "maxed", description: "High-wattage premium PSU", price: "₱11,000 - ₱13,000" },
    "Thermaltake Toughpower GF3 1000W 80+ Gold ATX 3.0": { wattage: 1000, tier: "maxed", description: "ATX 3.0 certified, PCIe 5.0 ready", price: "₱9,800 - ₱11,500" },
    
    "Corsair RM850x 850W 80+ Gold": { wattage: 850, tier: "maxed", description: "Premium fully modular PSU", price: "₱7,500 - ₱9,000" },
    "Seasonic Focus GX-850 80+ Gold": { wattage: 850, tier: "maxed", description: "High-quality fully modular, 10-year warranty", price: "₱7,800 - ₱9,500" },
    "MSI MPG A850G 850W 80+ Gold ATX 3.0": { wattage: 850, tier: "maxed", description: "ATX 3.0 ready for RTX 5080", price: "₱7,200 - ₱8,800" },
    "ASUS TUF Gaming 850W 80+ Gold": { wattage: 850, tier: "maxed", description: "Reliable gaming PSU", price: "₱6,800 - ₱8,200" },
    "DeepCool PX850G 850W 80+ Gold": { wattage: 850, tier: "maxed", description: "Budget-friendly 850W option", price: "₱6,200 - ₱7,500" },
    
    // Mid-Range / Balanced
    "Corsair RM750e 750W 80+ Gold ATX 3.0": { wattage: 750, tier: "balanced", description: "ATX 3.0 certified, PCIe 5.0 ready", price: "₱6,500 - ₱7,800" },
    "Seasonic Focus GX-750 80+ Gold": { wattage: 750, tier: "balanced", description: "High-quality modular PSU", price: "₱6,200 - ₱7,500" },
    "MSI MAG A750GL 750W 80+ Gold": { wattage: 750, tier: "balanced", description: "Good value 750W option", price: "₱5,500 - ₱6,800" },
    "DeepCool PM750D 750W 80+ Gold": { wattage: 750, tier: "balanced", description: "Efficient 80+ Gold PSU", price: "₱5,200 - ₱6,500" },
    "Thermaltake Smart BX1 750W 80+ Bronze": { wattage: 750, tier: "balanced", description: "Budget 750W option", price: "₱4,500 - ₱5,500" },
    
    "Corsair CV650 650W 80+ Bronze": { wattage: 650, tier: "balanced", description: "Mainstream power supply", price: "₱3,800 - ₱4,800" },
    "DeepCool PM650D 650W 80+ Gold": { wattage: 650, tier: "balanced", description: "Efficient 80+ Gold PSU", price: "₱4,200 - ₱5,200" },
    "Seasonic Core GM-650 650W 80+ Gold": { wattage: 650, tier: "balanced", description: "Semi-modular Gold efficiency", price: "₱4,500 - ₱5,500" },
    "MSI MAG A650BN 650W 80+ Bronze": { wattage: 650, tier: "balanced", description: "Reliable 650W option", price: "₱3,500 - ₱4,500" },
    "EVGA 650 BQ 650W 80+ Bronze": { wattage: 650, tier: "balanced", description: "Semi-modular budget PSU", price: "₱3,600 - ₱4,600" },
    
    // Budget
    "Corsair CV550 550W 80+ Bronze": { wattage: 550, tier: "budget", description: "Reliable budget 550W", price: "₱3,200 - ₱4,000" },
    "Seasonic S12III 550W 80+ Bronze": { wattage: 550, tier: "budget", description: "Trusted budget PSU brand", price: "₱3,000 - ₱3,800" },
    "DeepCool DN550 550W 80+ White": { wattage: 550, tier: "budget", description: "Basic 550W PSU", price: "₱2,500 - ₱3,200" },
    "Thermaltake Smart 550W 80+ White": { wattage: 550, tier: "budget", description: "Entry-level 550W", price: "₱2,400 - ₱3,100" },
    
    "EVGA BR 500W 80+ Bronze": { wattage: 500, tier: "budget", description: "Reliable budget power supply", price: "₱2,800 - ₱3,500" },
    "Corsair CV450 450W 80+ Bronze": { wattage: 450, tier: "budget", description: "Basic 80+ Bronze efficiency", price: "₱2,200 - ₱2,900" },
    "DeepCool DN450 450W 80+ White": { wattage: 450, tier: "budget", description: "Entry-level budget PSU", price: "₱1,800 - ₱2,500" },
    "Thermaltake Smart 430W 80+ White": { wattage: 430, tier: "budget", description: "Basic power for budget builds", price: "₱1,600 - ₱2,300" }
};

const caseData = {
    // High-End / Premium - Maxed
    "Lian Li O11 Dynamic EVO": { tier: "maxed", description: "Premium showcase case, excellent airflow and RGB", price: "₱8,500 - ₱10,500" },
    "Fractal Design Torrent": { tier: "maxed", description: "Extreme airflow focused design", price: "₱9,000 - ₱11,000" },
    "Corsair 5000D Airflow": { tier: "maxed", description: "Spacious high-airflow premium case", price: "₱7,500 - ₱9,500" },
    "NZXT H7 Flow": { tier: "maxed", description: "Modern design with excellent cooling", price: "₱7,200 - ₱8,800" },
    "Phanteks Eclipse P500A": { tier: "maxed", description: "Mesh front, premium build quality", price: "₱7,000 - ₱8,500" },
    "be quiet! Dark Base 701": { tier: "maxed", description: "Premium silent case with tempered glass", price: "₱9,500 - ₱12,000" },
    "Lian Li PC-O11 Dynamic": { tier: "maxed", description: "Premium showcase case for enthusiasts", price: "₱7,500 - ₱9,000" },
    "Fractal Design Define 7": { tier: "maxed", description: "High-end case with sound dampening", price: "₱8,000 - ₱10,000" },
    "NZXT H510 Flow": { tier: "maxed", description: "Premium design with excellent airflow", price: "₱6,500 - ₱8,000" },
    "Corsair 4000D Airflow": { tier: "maxed", description: "Popular high-airflow mid-tower", price: "₱5,500 - ₱7,000" },
    
    // Mid-Range / Balanced
    "Montech Air 903 MAX": { tier: "balanced", description: "Excellent budget airflow case, popular in PH", price: "₱3,800 - ₱4,800" },
    "Lian Li Lancool 207": { tier: "balanced", description: "Great airflow, clean design", price: "₱4,500 - ₱5,500" },
    "Lian Li Lancool 216": { tier: "balanced", description: "High-airflow mesh with RGB fans", price: "₱5,200 - ₱6,500" },
    "DeepCool CC560": { tier: "balanced", description: "Budget-friendly mesh case", price: "₱3,200 - ₱4,200" },
    "Cooler Master TD500 Mesh": { tier: "balanced", description: "Mesh front panel, good airflow", price: "₱4,800 - ₱6,000" },
    "Fractal Design Meshify 2": { tier: "balanced", description: "Compact mesh design with great cooling", price: "₱5,500 - ₱7,000" },
    "NZXT H5 Flow": { tier: "balanced", description: "Clean design with mesh front", price: "₱4,200 - ₱5,200" },
    "Phanteks Eclipse P360A": { tier: "balanced", description: "Mesh front, RGB included", price: "₱4,000 - ₱5,000" },
    "DeepCool Matrexx 55 Mesh": { tier: "balanced", description: "Good airflow, balanced features", price: "₱3,500 - ₱4,500" },
    "Cooler Master MasterBox MB511": { tier: "balanced", description: "Mesh front panel for airflow", price: "₱3,800 - ₱4,800" },
    "Antec NX410": { tier: "balanced", description: "Mesh design with RGB fans", price: "₱3,600 - ₱4,500" },
    "MSI MAG FORGE 100R": { tier: "balanced", description: "Gaming-focused design", price: "₱3,400 - ₱4,300" },
    
    // Budget
    "Tecware Forge M2": { tier: "budget", description: "Very popular budget case in PH", price: "₱1,800 - ₱2,500" },
    "Tecware Nexus M2": { tier: "budget", description: "Compact budget mesh case", price: "₱1,900 - ₱2,600" },
    "DeepCool Macube 110": { tier: "budget", description: "Compact budget option with mesh", price: "₱2,200 - ₱2,900" },
    "Montech X3 Mesh": { tier: "budget", description: "Budget mesh airflow case", price: "₱2,400 - ₱3,200" },
    "Rakk Haliya": { tier: "budget", description: "Local budget gaming case", price: "₱1,500 - ₱2,200" },
    "DeepCool Matrexx 30": { tier: "budget", description: "Compact budget micro-ATX case", price: "₱1,600 - ₱2,300" },
    "Cooler Master MasterBox Q300L": { tier: "budget", description: "Mini-ITX budget option", price: "₱2,000 - ₱2,700" },
    "DarkFlash DLM21 Mesh": { tier: "budget", description: "Ultra-budget mesh case", price: "₱1,400 - ₱2,000" },
    "Cooler Master N200": { tier: "budget", description: "Basic micro-ATX case", price: "₱1,800 - ₱2,500" },
    "Rakk Anyag": { tier: "budget", description: "Local PH budget case", price: "₱1,300 - ₱1,900" },
    "InPlay Meteor 03": { tier: "budget", description: "Budget gaming case", price: "₱1,200 - ₱1,800" },
    "Imperion S300": { tier: "budget", description: "Entry-level case", price: "₱1,100 - ₱1,600" },
    "Tsunami ProCube": { tier: "budget", description: "Ultra-budget micro-ATX", price: "₱900 - ₱1,400" }
};

let currentPlatform = 'intel';
let selectedComponents = {};
let feedbackTimeout;

// DOM elements
const intelToggle = document.getElementById('intel-toggle');
const ryzenToggle = document.getElementById('ryzen-toggle');
const cpuDropdown = document.getElementById('cpu-dropdown');
const motherboardDropdown = document.getElementById('motherboard-dropdown');
const gpuDropdown = document.getElementById('gpu-dropdown');
const ramDropdown = document.getElementById('ram-dropdown');
const storageDropdown = document.getElementById('storage-dropdown');
const psuDropdown = document.getElementById('psu-dropdown');
const caseDropdown = document.getElementById('case-dropdown');
const toastContainer = document.getElementById('toast-container');
const feedbackPanel = document.getElementById('feedback-panel');

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize
function init() {
    updateCPUOptions();
    updateMotherboardOptions();
    populateStaticDropdowns();
    addEventListeners();
}

function populateStaticDropdowns() {
    // GPU options - randomized
    gpuDropdown.innerHTML = '<option value="">Select GPU</option>';
    const shuffledGPUs = shuffleArray(Object.keys(gpuData));
    shuffledGPUs.forEach(gpu => {
        const option = document.createElement('option');
        option.value = gpu;
        option.textContent = gpu;
        gpuDropdown.appendChild(option);
    });

    // RAM options - randomized
    ramDropdown.innerHTML = '<option value="">Select RAM</option>';
    const shuffledRAM = shuffleArray(Object.keys(ramData));
    shuffledRAM.forEach(ram => {
        const option = document.createElement('option');
        option.value = ram;
        option.textContent = ram;
        ramDropdown.appendChild(option);
    });

    // Storage options - randomized
    storageDropdown.innerHTML = '<option value="">Select Storage</option>';
    const shuffledStorage = shuffleArray(Object.keys(storageData));
    shuffledStorage.forEach(storage => {
        const option = document.createElement('option');
        option.value = storage;
        option.textContent = storage;
        storageDropdown.appendChild(option);
    });

    // PSU options - randomized
    psuDropdown.innerHTML = '<option value="">Select PSU</option>';
    const shuffledPSU = shuffleArray(Object.keys(psuData));
    shuffledPSU.forEach(psu => {
        const option = document.createElement('option');
        option.value = psu;
        option.textContent = psu;
        psuDropdown.appendChild(option);
    });

    // Case options - randomized
    caseDropdown.innerHTML = '<option value="">Select PC Case</option>';
    const shuffledCases = shuffleArray(Object.keys(caseData));
    shuffledCases.forEach(pcCase => {
        const option = document.createElement('option');
        option.value = pcCase;
        option.textContent = pcCase;
        caseDropdown.appendChild(option);
    });
}

// Event listeners
function addEventListeners() {
    intelToggle.addEventListener('click', () => switchPlatform('intel'));
    ryzenToggle.addEventListener('click', () => switchPlatform('ryzen'));
    
    // Add change listeners for all dropdowns
    const allDropdowns = document.querySelectorAll('.component-dropdown');
    allDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function() {
            handleComponentChange(this);
            if (this.value) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    });
}

// Switch platform (Intel/Ryzen)
function switchPlatform(platform) {
    currentPlatform = platform;
    
    // Update toggle buttons
    intelToggle.classList.toggle('active', platform === 'intel');
    ryzenToggle.classList.toggle('active', platform === 'ryzen');
    
    // Reset selections
    selectedComponents = {};
    resetAllDropdowns();
    
    // Update options
    updateCPUOptions();
    updateMotherboardOptions();
    hideFeedbackPanel();
}

function resetAllDropdowns() {
    const allDropdowns = document.querySelectorAll('.component-dropdown');
    allDropdowns.forEach(dropdown => {
        dropdown.value = '';
        dropdown.classList.remove('selected');
    });
    
    // Clear all status indicators
    document.querySelectorAll('.status-indicator').forEach(indicator => {
        indicator.remove();
    });
    
    // Reset component box states
    document.querySelectorAll('.component-box').forEach(box => {
        box.classList.remove('optimized', 'warning');
    });
}

function updateCPUOptions() {
    const cpus = shuffleArray(components[currentPlatform].cpus);
    cpuDropdown.innerHTML = '<option value="">Select CPU</option>';
    
    cpus.forEach(cpu => {
        const option = document.createElement('option');
        option.value = cpu.name;
        option.textContent = cpu.name;
        cpuDropdown.appendChild(option);
    });
}

function updateMotherboardOptions() {
    const motherboards = shuffleArray(components[currentPlatform].motherboards);
    motherboardDropdown.innerHTML = '<option value="">Select Motherboard</option>';
    
    motherboards.forEach(motherboard => {
        const option = document.createElement('option');
        option.value = motherboard.name;
        option.textContent = motherboard.name;
        motherboardDropdown.appendChild(option);
    });
}

function handleComponentChange(dropdown) {
    const componentType = dropdown.id.replace('-dropdown', '');
    selectedComponents[componentType] = dropdown.value;
    
    if (dropdown.value) {
        showComponentFeedback(componentType, dropdown.value);
    }
    
    updateCompatibility();
}

function showComponentFeedback(componentType, componentValue) {
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackContent = document.getElementById('feedback-content');
    
    let feedback = getComponentFeedback(componentType, componentValue);
    
    feedbackTitle.textContent = `${componentType.toUpperCase()}: ${componentValue}`;
    feedbackContent.innerHTML = feedback;
    
    feedbackPanel.classList.add('show');
    
    // Auto-hide after 8 seconds unless hovered
    clearTimeout(feedbackTimeout);
    feedbackTimeout = setTimeout(() => {
        if (!feedbackPanel.matches(':hover')) {
            hideFeedbackPanel();
        }
    }, 8000);
}

function hideFeedbackPanel() {
    feedbackPanel.classList.remove('show');
}

function getComponentFeedback(componentType, componentValue) {
    let feedback = '';
    let status = 'balanced';
    
    switch(componentType) {
        case 'cpu':
            const cpu = getCPUData(componentValue);
            if (cpu) {
                const gpu = selectedComponents.gpu ? gpuData[selectedComponents.gpu] : null;
                
                if (gpu && isBottleneck(cpu, gpu)) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BOTTLENECK</div>`;
                    feedback += `<p>${cpu.description}</p>`;
                    if (cpu.price) feedback += `<p><strong>Price:</strong> ${cpu.price}</p>`;
                    feedback += `<p><strong>Warning:</strong> This CPU may bottleneck your selected GPU by more than 10%.</p>`;
                } else {
                    status = 'good';
                    feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                    feedback += `<p>${cpu.description}</p>`;
                    if (cpu.price) feedback += `<p><strong>Price:</strong> ${cpu.price}</p>`;
                    if (cpu.tier === 'budget') {
                        feedback += `<p>Balanced and efficient for most users at 1080p gaming.</p>`;
                    } else if (cpu.tier === 'balanced') {
                        feedback += `<p>Balanced and efficient for most users at 1080p-1440p gaming.</p>`;
                    } else if (cpu.tier === 'maxed') {
                        feedback += `<p>High-end performance for demanding tasks and 4K gaming.</p>`;
                    }
                }
            }
            break;
            
        case 'gpu':
            const gpu = gpuData[componentValue];
            if (gpu) {
                const cpu = getCPUData(selectedComponents.cpu);
                
                if (cpu && isBottleneck(cpu, gpu)) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BOTTLENECK</div>`;
                    feedback += `<p>${gpu.description}</p>`;
                    if (gpu.price) feedback += `<p><strong>Price:</strong> ${gpu.price}</p>`;
                    feedback += `<p><strong>Warning:</strong> This GPU causes >10% bottleneck with your current setup.</p>`;
                } else if (cpu && isOverkill(cpu, gpu)) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BAD</div>`;
                    feedback += `<p>${gpu.description}</p>`;
                    if (gpu.price) feedback += `<p><strong>Price:</strong> ${gpu.price}</p>`;
                    feedback += `<p><strong>Overkill / Bad pairing:</strong> This GPU is too weak for your high-end CPU.</p>`;
                } else {
                    status = 'good';
                    feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                    feedback += `<p>${gpu.description}</p>`;
                    if (gpu.price) feedback += `<p><strong>Price:</strong> ${gpu.price}</p>`;
                    feedback += `<p>Balanced and efficient for most users.</p>`;
                }
            }
            break;
            
        case 'motherboard':
            const motherboard = getMotherboardData(componentValue);
            if (motherboard) {
                const cpu = getCPUData(selectedComponents.cpu);
                
                if (cpu && motherboard.socket !== cpu.socket) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BAD</div>`;
                    feedback += `<p>Incompatible socket with selected CPU.</p>`;
                } else {
                    status = 'good';
                    feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                    feedback += `<p>${motherboard.description}</p>`;
                    if (motherboard.price) feedback += `<p><strong>Price:</strong> ${motherboard.price}</p>`;
                    feedback += `<p>Supports ${motherboard.ramType} memory and ${motherboard.socket} CPUs.</p>`;
                }
            }
            break;
            
        case 'ram':
            const ram = ramData[componentValue];
            if (ram) {
                status = 'good';
                feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                feedback += `<p>${ram.description}</p>`;
                if (ram.price) feedback += `<p><strong>Price:</strong> ${ram.price}</p>`;
            }
            break;
            
        case 'storage':
            const storage = storageData[componentValue];
            if (storage) {
                status = 'good';
                feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                feedback += `<p>${storage.description}</p>`;
                if (storage.price) feedback += `<p><strong>Price:</strong> ${storage.price}</p>`;
                feedback += `<p>Type: ${storage.type} | Capacity: ${storage.capacity}</p>`;
            }
            break;
            
        case 'psu':
            const psu = psuData[componentValue];
            const selectedGPU = selectedComponents.gpu ? gpuData[selectedComponents.gpu] : null;
            
            if (psu && selectedGPU && psu.wattage < selectedGPU.minPSU) {
                status = 'bottleneck';
                feedback = `<div class="feedback-status ${status}">BAD</div>`;
                feedback += `<p>${psu.description}</p>`;
                if (psu.price) feedback += `<p><strong>Price:</strong> ${psu.price}</p>`;
                feedback += `<p>Inadequate power for selected GPU. Minimum ${selectedGPU.minPSU}W required.</p>`;
            } else if (psu) {
                status = 'good';
                feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                feedback += `<p>${psu.description}</p>`;
                if (psu.price) feedback += `<p><strong>Price:</strong> ${psu.price}</p>`;
                feedback += `<p>Wattage: ${psu.wattage}W - Sufficient for your build.</p>`;
            }
            break;
            
        case 'case':
            const pcCase = caseData[componentValue];
            if (pcCase) {
                status = 'good';
                feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                feedback += `<p>${pcCase.description}</p>`;
                if (pcCase.price) feedback += `<p><strong>Price:</strong> ${pcCase.price}</p>`;
            }
            break;
            
        default:
            status = 'good';
            feedback = `<div class="feedback-status ${status}">GOOD</div>`;
            feedback += `<p>Balanced and efficient for most users.</p>`;
    }
    
    return feedback;
}

function showToast(message, type = 'success', duration = 5000) {
    // Clear existing toasts
    const existingToasts = toastContainer.querySelectorAll('.toast');
    existingToasts.forEach(toast => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    });

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '';
    if (type === 'success') icon = '✅';
    else if (type === 'warning') icon = '⚠️';
    else if (type === 'error') icon = '❌';
    
    toast.innerHTML = `<span class="toast-icon">${icon}</span>${message}`;
    
    toastContainer.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto-hide unless hovered
    const hideToast = () => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    };
    
    const timeoutId = setTimeout(hideToast, duration);
    
    toast.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    toast.addEventListener('mouseleave', () => setTimeout(hideToast, 1000));
    toast.addEventListener('click', hideToast);
}

function updateCompatibility() {
    clearStatusIndicators();
    
    const cpu = getCPUData(selectedComponents.cpu);
    const motherboard = getMotherboardData(selectedComponents.motherboard);
    const gpu = selectedComponents.gpu;
    const ram = selectedComponents.ram;
    const psu = selectedComponents.psu;
    const storage = selectedComponents.storage;
    const pcCase = selectedComponents.case;

    // Update motherboard compatibility
    updateMotherboardCompatibility(cpu);
    
    // Update RAM compatibility
    updateRAMCompatibility(cpu, motherboard);
    
    // Check CPU-GPU bottlenecks and show toast
    if (cpu && gpu) {
        checkCPUGPUBottleneck(cpu, gpu);
    }
    
    // Check PSU adequacy
    checkPSUAdequacy(gpu, psu);
    
    // Check overall optimization
    checkOverallOptimization(cpu, motherboard, gpu, ram, psu);
    
    updateBuildStatus(cpu, motherboard, gpu, ram, psu, storage, pcCase);
}

function getCPUData(cpuName) {
    if (!cpuName) return null;
    const allCPUs = [...components.intel.cpus, ...components.ryzen.cpus];
    return allCPUs.find(cpu => cpu.name === cpuName);
}

function getMotherboardData(motherboardName) {
    if (!motherboardName) return null;
    const allMotherboards = [...components.intel.motherboards, ...components.ryzen.motherboards];
    return allMotherboards.find(mb => mb.name === motherboardName);
}

function updateMotherboardCompatibility(cpu) {
    if (!cpu) return;
    
    const motherboardOptions = motherboardDropdown.querySelectorAll('option');
    motherboardOptions.forEach(option => {
        if (option.value === '') return;
        
        const motherboard = getMotherboardData(option.value);
        if (motherboard && motherboard.socket !== cpu.socket) {
            option.classList.add('incompatible');
            option.disabled = true;
        } else {
            option.classList.remove('incompatible');
            option.disabled = false;
        }
    });
}

function updateRAMCompatibility(cpu, motherboard) {
    if (!cpu && !motherboard) return;
    
    const ramOptions = ramDropdown.querySelectorAll('option');
    ramOptions.forEach(option => {
        if (option.value === '') return;
        
        const ram = ramData[option.value];
        if (!ram) return;
        
        let compatible = false;
        
        if (cpu && cpu.ramType.includes(ram.type)) {
            compatible = true;
        }
        
        if (motherboard && motherboard.ramType === ram.type) {
            compatible = true;
        }
        
        if (cpu && motherboard) {
            compatible = cpu.ramType.includes(ram.type) && motherboard.ramType === ram.type;
        }
        
        if (!compatible) {
            option.classList.add('incompatible');
            option.disabled = true;
        } else {
            option.classList.remove('incompatible');
            option.disabled = false;
        }
    });
}

function checkCPUGPUBottleneck(cpu, gpu) {
    if (!cpu || !gpu) return;
    
    const gpuInfo = gpuData[gpu];
    if (!gpuInfo) return;
    
    if (isBottleneck(cpu, gpuInfo)) {
        const bottleneckPercentage = calculateBottleneckPercentage(cpu, gpuInfo);
        if (bottleneckPercentage >= 10) {
            addStatusIndicator('gpu-box', 'Bottleneck Risk', 'warning');
            document.getElementById('gpu-box').classList.add('warning');
            showToast(`${gpu} causes a bottleneck with your current setup.`, 'warning');
        }
    } else if (isOverkill(cpu, gpuInfo)) {
        addStatusIndicator('gpu-box', 'Overkill / Bad pairing', 'warning');
        document.getElementById('gpu-box').classList.add('warning');
        showToast(`Overkill / Bad pairing.`, 'error');
    } else {
        addStatusIndicator('gpu-box', 'Balanced Choice', 'optimized');
        document.getElementById('gpu-box').classList.add('optimized');
        showToast('Balanced and efficient for most users.', 'success');
    }
}

function isBottleneck(cpu, gpuInfo) {
    const cpuScore = getCPUPerformanceScore(cpu);
    const gpuScore = getGPUPerformanceScore(gpuInfo);
    
    // Calculate performance gap percentage
    const performanceGap = Math.abs((gpuScore - cpuScore) / cpuScore * 100);
    
    // GPU too powerful for CPU = bottleneck
    if (gpuScore > cpuScore && performanceGap > 25) {
        return true;
    }
    
    return false;
}

function getCPUPerformanceScore(cpu) {
    // Intel scoring
    if (cpu.socket.includes('LGA')) {
        // 15th Gen
        if (cpu.name.includes('285K')) return 100;
        if (cpu.name.includes('265K')) return 95;
        if (cpu.name.includes('245K')) return 85;
        
        // 14th Gen
        if (cpu.name.includes('i9-14900')) return 98;
        if (cpu.name.includes('i7-14700')) return 90;
        if (cpu.name.includes('i5-14600')) return 80;
        if (cpu.name.includes('i5-14400')) return 70;
        
        // 13th Gen
        if (cpu.name.includes('i9-13900')) return 95;
        if (cpu.name.includes('i7-13700')) return 88;
        if (cpu.name.includes('i5-13600')) return 78;
        if (cpu.name.includes('i5-13400')) return 68;
        if (cpu.name.includes('i3-13100')) return 50;
        
        // 12th Gen
        if (cpu.name.includes('i9-12900')) return 90;
        if (cpu.name.includes('i7-12700')) return 82;
        if (cpu.name.includes('i5-12600')) return 75;
        if (cpu.name.includes('i5-12400')) return 65;
        if (cpu.name.includes('i3-12100')) return 48;
        
        // 11th Gen
        if (cpu.name.includes('i9-11900')) return 80;
        if (cpu.name.includes('i7-11700')) return 72;
        if (cpu.name.includes('i5-11600')) return 62;
        if (cpu.name.includes('i5-11400')) return 55;
        
        // 10th Gen
        if (cpu.name.includes('i9-10900')) return 78;
        if (cpu.name.includes('i7-10700')) return 70;
        if (cpu.name.includes('i5-10600')) return 60;
        if (cpu.name.includes('i5-10400')) return 53;
        if (cpu.name.includes('i3-10100')) return 42;
        
        // 9th Gen
        if (cpu.name.includes('i9-9900')) return 75;
        if (cpu.name.includes('i7-9700')) return 68;
        if (cpu.name.includes('i5-9600')) return 58;
        if (cpu.name.includes('i5-9400')) return 50;
        if (cpu.name.includes('i3-9100')) return 38;
        
        // 8th Gen
        if (cpu.name.includes('i7-8700')) return 65;
        if (cpu.name.includes('i5-8600')) return 55;
        if (cpu.name.includes('i5-8400')) return 48;
        if (cpu.name.includes('i3-8100')) return 35;
        
        // 7th Gen
        if (cpu.name.includes('i7-7700')) return 58;
        if (cpu.name.includes('i5-7600')) return 45;
        if (cpu.name.includes('i5-7400')) return 40;
        
        // 6th Gen
        if (cpu.name.includes('i7-6700')) return 55;
        if (cpu.name.includes('i5-6600')) return 42;
        if (cpu.name.includes('i5-6400')) return 38;
    }
    
    // AMD Ryzen scoring
    if (cpu.socket.includes('AM')) {
        // Ryzen 9000
        if (cpu.name.includes('9950X3D')) return 102;
        if (cpu.name.includes('9950X')) return 98;
        if (cpu.name.includes('9900X')) return 95;
        if (cpu.name.includes('9700X')) return 85;
        if (cpu.name.includes('9600X')) return 78;
        
        // Ryzen 7000
        if (cpu.name.includes('7950X3D')) return 100;
        if (cpu.name.includes('7950X')) return 96;
        if (cpu.name.includes('7900X3D')) return 93;
        if (cpu.name.includes('7900X')) return 90;
        if (cpu.name.includes('7800X3D')) return 92;
        if (cpu.name.includes('7700X')) return 82;
        if (cpu.name.includes('7600X')) return 75;
        if (cpu.name.includes('7600')) return 72;
        
        // Ryzen 5000
        if (cpu.name.includes('5950X')) return 88;
        if (cpu.name.includes('5900X')) return 85;
        if (cpu.name.includes('5800X3D')) return 87;
        if (cpu.name.includes('5700X')) return 70;
        if (cpu.name.includes('5600X')) return 68;
        if (cpu.name.includes('5600G')) return 65;
        if (cpu.name.includes('5600')) return 66;
        if (cpu.name.includes('5500')) return 55;
        
        // Ryzen 4000
        if (cpu.name.includes('4500')) return 48;
        if (cpu.name.includes('4100')) return 40;
        
        // Ryzen 3000
        if (cpu.name.includes('3950X')) return 80;
        if (cpu.name.includes('3900X')) return 78;
        if (cpu.name.includes('3700X')) return 68;
        if (cpu.name.includes('3600X')) return 62;
        if (cpu.name.includes('3600')) return 60;
        if (cpu.name.includes('3500X')) return 55;
        if (cpu.name.includes('3500')) return 52;
        if (cpu.name.includes('3400G')) return 48;
        if (cpu.name.includes('3200G')) return 42;
        if (cpu.name.includes('3100')) return 45;
        
        // Ryzen 2000
        if (cpu.name.includes('2700X')) return 58;
        if (cpu.name.includes('2600X')) return 52;
        if (cpu.name.includes('2600')) return 50;
        if (cpu.name.includes('2400G')) return 40;
        if (cpu.name.includes('2200G')) return 35;
        
        // Ryzen 1000
        if (cpu.name.includes('1700X')) return 50;
        if (cpu.name.includes('1600X')) return 45;
        if (cpu.name.includes('1600')) return 43;
        if (cpu.name.includes('1500X')) return 40;
        if (cpu.name.includes('1400')) return 35;
        if (cpu.name.includes('1200')) return 30;
    }
    
    return 50; // Default
}

function getGPUPerformanceScore(gpuInfo) {
    const gpuName = Object.keys(gpuData).find(key => gpuData[key] === gpuInfo);
    if (!gpuName) return 50;
    
    // NVIDIA RTX 50 Series
    if (gpuName.includes('RTX 5090')) return 105;
    if (gpuName.includes('RTX 5080')) return 95;
    if (gpuName.includes('RTX 5070 Ti')) return 88;
    if (gpuName.includes('RTX 5070')) return 82;
    if (gpuName.includes('RTX 5060 Ti')) return 70;
    if (gpuName.includes('RTX 5060')) return 62;
    
    // NVIDIA RTX 40 Series
    if (gpuName.includes('RTX 4090')) return 100;
    if (gpuName.includes('RTX 4080')) return 92;
    if (gpuName.includes('RTX 4070 Ti')) return 85;
    if (gpuName.includes('RTX 4070')) return 78;
    if (gpuName.includes('RTX 4060 Ti')) return 68;
    if (gpuName.includes('RTX 4060')) return 60;
    
    // NVIDIA RTX 30 Series
    if (gpuName.includes('RTX 3090')) return 88;
    if (gpuName.includes('RTX 3080')) return 82;
    if (gpuName.includes('RTX 3070')) return 72;
    if (gpuName.includes('RTX 3060 Ti')) return 65;
    if (gpuName.includes('RTX 3060')) return 58;
    if (gpuName.includes('RTX 3050')) return 48;
    
    // NVIDIA RTX 20 Series
    if (gpuName.includes('RTX 2080 Ti')) return 75;
    if (gpuName.includes('RTX 2080')) return 70;
    if (gpuName.includes('RTX 2070')) return 62;
    if (gpuName.includes('RTX 2060')) return 55;
    
    // NVIDIA GTX 16 Series
    if (gpuName.includes('GTX 1660')) return 50;
    if (gpuName.includes('GTX 1650')) return 42;
    
    // NVIDIA GTX 10 Series
    if (gpuName.includes('GTX 1080 Ti')) return 68;
    if (gpuName.includes('GTX 1080')) return 62;
    if (gpuName.includes('GTX 1070')) return 55;
    if (gpuName.includes('GTX 1060')) return 45;
    if (gpuName.includes('GTX 1050 Ti')) return 35;
    if (gpuName.includes('GTX 1050')) return 30;
    
    // AMD RX 9000 Series
    if (gpuName.includes('RX 9070')) return 90;
    if (gpuName.includes('RX 9060')) return 75;
    
    // AMD RX 7000 Series
    if (gpuName.includes('RX 7900 XTX')) return 90;
    if (gpuName.includes('RX 7900 XT')) return 85;
    if (gpuName.includes('RX 7800 XT')) return 75;
    if (gpuName.includes('RX 7700 XT')) return 68;
    if (gpuName.includes('RX 7600')) return 58;
    
    // AMD RX 6000 Series
    if (gpuName.includes('RX 6950 XT')) return 80;
    if (gpuName.includes('RX 6900 XT')) return 78;
    if (gpuName.includes('RX 6800 XT')) return 75;
    if (gpuName.includes('RX 6800')) return 70;
    if (gpuName.includes('RX 6700 XT')) return 65;
    if (gpuName.includes('RX 6600 XT')) return 55;
    if (gpuName.includes('RX 6600')) return 50;
    if (gpuName.includes('RX 6500 XT')) return 40;
    
    // AMD RX 5000 Series
    if (gpuName.includes('RX 5700 XT')) return 60;
    if (gpuName.includes('RX 5700')) return 56;
    if (gpuName.includes('RX 5600 XT')) return 52;
    if (gpuName.includes('RX 5500 XT')) return 42;
    
    // AMD RX Vega
    if (gpuName.includes('Vega 64')) return 52;
    if (gpuName.includes('Vega 56')) return 48;
    
    // AMD RX 500 Series
    if (gpuName.includes('RX 590')) return 48;
    if (gpuName.includes('RX 580')) return 45;
    if (gpuName.includes('RX 570')) return 40;
    if (gpuName.includes('RX 560')) return 32;
    
    return 50; // Default
}

function isOverkill(cpu, gpuInfo) {
    const cpuScore = getCPUPerformanceScore(cpu);
    const gpuScore = getGPUPerformanceScore(gpuInfo);
    
    // CPU too powerful for GPU = overkill/bad pairing
    if (cpuScore > gpuScore && (cpuScore - gpuScore) > 30) {
        return true;
    }
    
    return false;
}

function calculateBottleneckPercentage(cpu, gpuInfo) {
    const cpuScore = getCPUPerformanceScore(cpu);
    const gpuScore = getGPUPerformanceScore(gpuInfo);
    
    if (gpuScore > cpuScore) {
        // GPU is more powerful - calculate CPU bottleneck
        return Math.round((gpuScore - cpuScore) / cpuScore * 100);
    } else {
        // CPU is more powerful - GPU limiting factor
        return Math.round((cpuScore - gpuScore) / gpuScore * 100);
    }
}

function checkPSUAdequacy(gpu, psu) {
    if (!gpu || !psu) return;
    
    const gpuInfo = gpuData[gpu];
    const psuInfo = psuData[psu];
    
    if (!gpuInfo || !psuInfo) return;
    
    if (psuInfo.wattage < gpuInfo.minPSU) {
        addStatusIndicator('psu-box', 'Inadequate Power', 'warning');
        document.getElementById('psu-box').classList.add('warning');
        showToast(`PSU wattage too low for selected GPU. Minimum ${gpuInfo.minPSU}W required.`, 'error');
    } else {
        addStatusIndicator('psu-box', 'Adequate Power', 'optimized');
        document.getElementById('psu-box').classList.add('optimized');
    }
}

function checkOverallOptimization(cpu, motherboard, gpu, ram, psu) {
    if (!cpu || !motherboard || !gpu || !ram || !psu) return;
    
    const gpuInfo = gpuData[gpu];
    const psuInfo = psuData[psu];
    const ramInfo = ramData[ram];
    
    if (!gpuInfo || !psuInfo || !ramInfo) return;
    
    // Check if all components are optimally matched
    const cpuGPUMatch = !isBottleneck(cpu, gpuInfo) && !isOverkill(cpu, gpuInfo);
    const psuAdequate = psuInfo.wattage >= gpuInfo.minPSU;
    const ramCompatible = cpu.ramType.includes(ramInfo.type) && motherboard.ramType === ramInfo.type;
    const socketMatch = cpu.socket === motherboard.socket;
    
    if (cpuGPUMatch && psuAdequate && ramCompatible && socketMatch) {
        // Mark optimized components that aren't already marked as warning
        ['cpu-box', 'motherboard-box', 'ram-box', 'storage-box', 'case-box'].forEach(boxId => {
            const box = document.getElementById(boxId);
            if (!box.classList.contains('warning')) {
                box.classList.add('optimized');
                addStatusIndicator(boxId, 'Optimized', 'optimized');
            }
        });
    }
}

function addStatusIndicator(boxId, text, type) {
    const box = document.getElementById(boxId);
    const existingIndicator = box.querySelector('.status-indicator');
    
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    const indicator = document.createElement('div');
    indicator.className = `status-indicator status-${type}`;
    indicator.textContent = text;
    box.appendChild(indicator);
}

function clearStatusIndicators() {
    document.querySelectorAll('.status-indicator').forEach(indicator => {
        indicator.remove();
    });
    
    document.querySelectorAll('.component-box').forEach(box => {
        box.classList.remove('optimized', 'warning');
    });
    
    // Reset option states
    document.querySelectorAll('option').forEach(option => {
        option.classList.remove('incompatible', 'warning', 'optimized');
        option.disabled = false;
    });
}

function updateBuildStatus(cpu, motherboard, gpu, ram, psu, storage, pcCase) {
    // Check if all components are selected
    if (!cpu || !motherboard || !gpu || !ram || !psu || !storage || !pcCase) {
        hideSuccessModal();
        return;
    }
    
    const gpuInfo = gpuData[gpu];
    const psuInfo = psuData[psu];
    const ramInfo = ramData[ram];
    
    if (!gpuInfo || !psuInfo || !ramInfo) {
        hideSuccessModal();
        return;
    }
    
    // Check compatibility issues
    const issues = [];
    
    // Socket compatibility
    if (cpu.socket !== motherboard.socket) {
        issues.push('CPU and motherboard socket mismatch');
    }
    
    // RAM compatibility
    if (!cpu.ramType.includes(ramInfo.type) || motherboard.ramType !== ramInfo.type) {
        issues.push('RAM type incompatible with CPU/motherboard');
    }
    
    // PSU adequacy
    if (psuInfo.wattage < gpuInfo.minPSU) {
        issues.push('PSU insufficient for GPU requirements');
    }
    
    // CPU-GPU bottleneck
    if (isBottleneck(cpu, gpuInfo) || isOverkill(cpu, gpuInfo)) {
        issues.push('CPU-GPU pairing suboptimal');
    }
    
    if (issues.length === 0) {
        showSuccessModal();
    } else {
        hideSuccessModal();
    }
}

function showSuccessModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('success-modal');
    let backdrop = document.getElementById('success-modal-backdrop');
    
    // Get selected components for the build list
    const buildList = generateBuildList();
    
    if (!modal) {
        // Create backdrop
        backdrop = document.createElement('div');
        backdrop.id = 'success-modal-backdrop';
        backdrop.className = 'success-modal-backdrop';
        document.body.appendChild(backdrop);
        
        // Create modal
        modal = document.createElement('div');
        modal.id = 'success-modal';
        modal.className = 'success-modal';
        document.body.appendChild(modal);
        
        // Close on backdrop click
        backdrop.addEventListener('click', hideSuccessModal);
    }
    
    // Update modal content with build list
    modal.innerHTML = `
        <div class="success-modal-icon">✓</div>
        <h2>Perfect Build!</h2>
        <p>All components are fully compatible and optimized.<br>This build will work flawlessly!</p>
        
        <div class="build-list-container" id="build-list-container">
            <h3>Your Build Summary</h3>
            <div class="build-list" id="build-list">
                ${buildList}
            </div>
        </div>
        
        <div class="export-buttons">
            <button class="export-btn export-png" onclick="exportAsPNG()">
                <span class="export-icon">🖼️</span>
                Export as PNG
            </button>
            <button class="export-btn export-pdf" onclick="exportAsPDF()">
                <span class="export-icon">📄</span>
                Export as PDF
            </button>
        </div>
        
        <button class="success-modal-close" onclick="hideSuccessModal()">Got It!</button>
    `;
    
    // Show modal with animation
    setTimeout(() => {
        backdrop.classList.add('show');
        modal.classList.add('show');
    }, 100);
}

function generateBuildList() {
    const cpu = cpuDropdown.value;
    const motherboard = motherboardDropdown.value;
    const gpu = gpuDropdown.value;
    const ram = ramDropdown.value;
    const storage = storageDropdown.value;
    const psu = psuDropdown.value;
    const pcCase = caseDropdown.value;
    
    // Get price info
    const cpuData = getCPUData(cpu);
    const mbData = getMotherboardData(motherboard);
    const gpuInfo = gpuData[gpu];
    const ramInfo = ramData[ram];
    const storageInfo = storageData[storage];
    const psuInfo = psuData[psu];
    const caseInfo = caseData[pcCase];
    
    return `
        <div class="build-item"><span class="build-label">CPU:</span> <span class="build-value">${cpu}</span> <span class="build-price">${cpuData?.price || ''}</span></div>
        <div class="build-item"><span class="build-label">Motherboard:</span> <span class="build-value">${motherboard}</span> <span class="build-price">${mbData?.price || ''}</span></div>
        <div class="build-item"><span class="build-label">GPU:</span> <span class="build-value">${gpu}</span> <span class="build-price">${gpuInfo?.price || ''}</span></div>
        <div class="build-item"><span class="build-label">RAM:</span> <span class="build-value">${ram}</span> <span class="build-price">${ramInfo?.price || ''}</span></div>
        <div class="build-item"><span class="build-label">Storage:</span> <span class="build-value">${storage}</span> <span class="build-price">${storageInfo?.price || ''}</span></div>
        <div class="build-item"><span class="build-label">PSU:</span> <span class="build-value">${psu}</span> <span class="build-price">${psuInfo?.price || ''}</span></div>
        <div class="build-item"><span class="build-label">Case:</span> <span class="build-value">${pcCase}</span> <span class="build-price">${caseInfo?.price || ''}</span></div>
    `;
}

function exportAsPNG() {
    const buildListContainer = document.getElementById('build-list-container');
    
    // Create a canvas from the build list
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    
    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1a4d2e');
    gradient.addColorStop(1, '#0a0a0a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw border
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Draw title
    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('✓ Perfect Build!', canvas.width / 2, 80);
    
    // Draw subtitle
    ctx.fillStyle = '#ffffff';
    ctx.font = '18px Arial';
    ctx.fillText('JUSTinTECH PC Builder', canvas.width / 2, 115);
    
    // Draw build list
    const components = [
        { label: 'CPU', value: cpuDropdown.value },
        { label: 'Motherboard', value: motherboardDropdown.value },
        { label: 'GPU', value: gpuDropdown.value },
        { label: 'RAM', value: ramDropdown.value },
        { label: 'Storage', value: storageDropdown.value },
        { label: 'PSU', value: psuDropdown.value },
        { label: 'Case', value: caseDropdown.value }
    ];
    
    ctx.textAlign = 'left';
    let yPos = 170;
    
    components.forEach((comp, index) => {
        // Label
        ctx.fillStyle = '#00ffff';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(comp.label + ':', 60, yPos);
        
        // Value
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Arial';
        const maxWidth = 650;
        const text = comp.value.length > 60 ? comp.value.substring(0, 57) + '...' : comp.value;
        ctx.fillText(text, 180, yPos);
        
        yPos += 50;
    });
    
    // Draw footer
    ctx.fillStyle = '#888888';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Generated by JUSTinTECH PC Builder • ' + new Date().toLocaleDateString(), canvas.width / 2, canvas.height - 40);
    
    // Download the image
    const link = document.createElement('a');
    link.download = 'JUSTinTECH-PC-Build.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showToast('Build exported as PNG!', 'success');
}

function exportAsPDF() {
    // Create a printable HTML content
    const components = [
        { label: 'CPU', value: cpuDropdown.value, price: getCPUData(cpuDropdown.value)?.price || '' },
        { label: 'Motherboard', value: motherboardDropdown.value, price: getMotherboardData(motherboardDropdown.value)?.price || '' },
        { label: 'GPU', value: gpuDropdown.value, price: gpuData[gpuDropdown.value]?.price || '' },
        { label: 'RAM', value: ramDropdown.value, price: ramData[ramDropdown.value]?.price || '' },
        { label: 'Storage', value: storageDropdown.value, price: storageData[storageDropdown.value]?.price || '' },
        { label: 'PSU', value: psuDropdown.value, price: psuData[psuDropdown.value]?.price || '' },
        { label: 'Case', value: caseDropdown.value, price: caseData[caseDropdown.value]?.price || '' }
    ];
    
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>JUSTinTECH PC Build</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Segoe UI', Arial, sans-serif; 
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    color: #ffffff;
                    min-height: 100vh;
                    padding: 40px;
                }
                .container {
                    max-width: 700px;
                    margin: 0 auto;
                    background: linear-gradient(135deg, #1a4d2e 0%, #2d5a3d 100%);
                    border: 3px solid #22c55e;
                    border-radius: 16px;
                    padding: 40px;
                    box-shadow: 0 20px 60px rgba(34, 197, 94, 0.3);
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #22c55e;
                    padding-bottom: 20px;
                }
                .checkmark {
                    font-size: 60px;
                    color: #22c55e;
                }
                h1 {
                    color: #22c55e;
                    font-size: 32px;
                    margin: 10px 0;
                }
                .subtitle {
                    color: #cccccc;
                    font-size: 14px;
                }
                .build-title {
                    color: #00ffff;
                    font-size: 20px;
                    margin: 20px 0 15px;
                    text-align: center;
                }
                .component {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 15px;
                    margin: 8px 0;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    border-left: 4px solid #00ffff;
                }
                .component-label {
                    color: #00ffff;
                    font-weight: bold;
                    min-width: 100px;
                }
                .component-value {
                    color: #ffffff;
                    flex: 1;
                    margin: 0 15px;
                    font-size: 13px;
                }
                .component-price {
                    color: #22c55e;
                    font-size: 12px;
                    text-align: right;
                    min-width: 120px;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #444;
                    color: #888;
                    font-size: 12px;
                }
                @media print {
                    body { 
                        background: white !important; 
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="checkmark">✓</div>
                    <h1>Perfect Build!</h1>
                    <p class="subtitle">All components are fully compatible and optimized</p>
                </div>
                
                <h2 class="build-title">Build Summary</h2>
                
                ${components.map(comp => `
                    <div class="component">
                        <span class="component-label">${comp.label}</span>
                        <span class="component-value">${comp.value}</span>
                        <span class="component-price">${comp.price}</span>
                    </div>
                `).join('')}
                
                <div class="footer">
                    Generated by JUSTinTECH PC Builder • ${new Date().toLocaleDateString()}
                </div>
            </div>
        </body>
        </html>
    `;
    
    // Open print dialog
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Wait for content to load then print
    printWindow.onload = function() {
        printWindow.print();
    };
    
    showToast('Print dialog opened - Save as PDF!', 'success');
}

function hideSuccessModal() {
    const modal = document.getElementById('success-modal');
    const backdrop = document.getElementById('success-modal-backdrop');
    
    if (modal && backdrop) {
        modal.classList.remove('show');
        backdrop.classList.remove('show');
    }
}

// Close feedback panel when clicking outside
document.addEventListener('click', (e) => {
    if (!feedbackPanel.contains(e.target) && !e.target.closest('.component-dropdown')) {
        hideFeedbackPanel();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    init();
    setupModalHandlers();
});

// Modal functionality for Contact Me and About Me
function setupModalHandlers() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const contactLink = document.getElementById('contact-link');
    const aboutLink = document.getElementById('about-link');
    
    // Contact Me content
    const contactContent = `
        <p>Let's connect! Feel free to reach out to me through any of these platforms:</p>
        <div class="contact-links">
            <a href="https://www.linkedin.com/in/justin-ian-aldevera-736ba130a/" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn Profile
            </a>
            <a href="https://github.com/Justinnnn15" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub Profile
            </a>
        </div>
        <p style="margin-top: 1.5rem; color: #888;">I'm always open to discussing PC building, tech projects, or collaboration opportunities!</p>
    `;
    
    // About Me content
    const aboutContent = `
        <p style="line-height: 1.8;">JUSTinTECH was created by me, Justin Ian Aldevera, a 3rd Year Computer Engineering (BSCpE) student at CTU Main. In my degree, I spend my time understanding the complex interaction between hardware and software. I built this site to translate that technical knowledge into simple, reliable PC part choices and assembly guides. My goal is to empower fellow Filipinos to build their perfect setup with confidence, ensuring performance and value.</p>
        <div class="contact-links" style="margin-top: 2rem;">
            <a href="https://www.linkedin.com/in/justin-ian-aldevera-736ba130a/" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Connect on LinkedIn
            </a>
            <a href="https://github.com/Justinnnn15" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View GitHub Projects
            </a>
        </div>
    `;
    
    // Show modal function
    function showModal(title, content) {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    // Hide modal function
    function hideModal() {
        modalOverlay.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Event listeners
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('Contact Me', contactContent);
    });
    
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('About Me', aboutContent);
    });
    
    modalClose.addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
            hideModal();
        }
    });
}

// ============================================
// INTERACTIVE PARTICLE NEURAL NETWORK SYSTEM
// ============================================
(function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) {
        console.error('Canvas not found!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight * 2;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    let scrollY = 0;
    let animationId;
    
    // Set initial canvas size
    canvas.width = width;
    canvas.height = height;
    
    // Configuration
    const config = {
        particleCount: 100,
        particleMinSize: 1.5,
        particleMaxSize: 3.5,
        connectionDistance: 120,
        mouseConnectionDistance: 180,
        speed: 0.8,
        colors: {
            particle: ['#00ffff', '#00d4ff', '#00aaff', '#0088ff', '#00ff88', '#ffffff'],
            connection: 'rgba(0, 255, 255, ',
            mouseConnection: 'rgba(0, 255, 136, ',
            background: '#030508'
        }
    };
    
    // Particle class
    class Particle {
        constructor() {
            this.init();
        }
        
        init() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * (config.particleMaxSize - config.particleMinSize) + config.particleMinSize;
            this.baseSize = this.size;
            this.speedX = (Math.random() - 0.5) * config.speed * 2;
            this.speedY = (Math.random() - 0.5) * config.speed * 2;
            this.color = config.colors.particle[Math.floor(Math.random() * config.colors.particle.length)];
            this.opacity = Math.random() * 0.5 + 0.5;
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.03 + 0.02;
        }
        
        update() {
            // Move particle
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Pulse effect
            this.pulsePhase += this.pulseSpeed;
            this.size = this.baseSize + Math.sin(this.pulsePhase) * 0.8;
            
            // Wrap around screen
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
            
            // Mouse interaction - repel particles
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x += Math.cos(angle) * force * 3;
                    this.y += Math.sin(angle) * force * 3;
                }
            }
        }
        
        draw() {
            // Main particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            
            // Glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 2.5
            );
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.globalAlpha = this.opacity * 0.3;
            ctx.fillStyle = gradient;
            ctx.fill();
            
            ctx.globalAlpha = 1;
        }
    }
    
    // Initialize canvas
    function resize() {
        width = window.innerWidth;
        height = Math.max(document.body.scrollHeight, window.innerHeight * 2);
        canvas.width = width;
        canvas.height = height;
    }
    
    // Initialize particles
    function initParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Draw connections between particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < config.connectionDistance) {
                    const opacity = (1 - dist / config.connectionDistance) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = config.colors.connection + opacity + ')';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
            
            // Mouse connections
            if (mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < config.mouseConnectionDistance) {
                    const opacity = (1 - dist / config.mouseConnectionDistance) * 0.6;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = config.colors.mouseConnection + opacity + ')';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Draw floating orbs/nebula effect
    function drawAmbientOrbs() {
        const time = Date.now() * 0.0003;
        
        // Large ambient orbs - more visible
        const orbs = [
            { x: width * 0.15, y: height * 0.1, radius: 400, color: [0, 100, 255, 0.08] },
            { x: width * 0.85, y: height * 0.25, radius: 350, color: [0, 255, 200, 0.06] },
            { x: width * 0.5, y: height * 0.5, radius: 500, color: [0, 150, 255, 0.05] },
            { x: width * 0.2, y: height * 0.75, radius: 380, color: [0, 255, 255, 0.06] },
            { x: width * 0.8, y: height * 0.85, radius: 420, color: [80, 0, 255, 0.05] }
        ];
        
        orbs.forEach((orb, index) => {
            const offsetX = Math.sin(time + index * 1.5) * 80;
            const offsetY = Math.cos(time + index) * 60;
            
            const gradient = ctx.createRadialGradient(
                orb.x + offsetX, orb.y + offsetY, 0,
                orb.x + offsetX, orb.y + offsetY, orb.radius
            );
            gradient.addColorStop(0, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, ${orb.color[3]})`);
            gradient.addColorStop(0.5, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, ${orb.color[3] * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            
            ctx.beginPath();
            ctx.arc(orb.x + offsetX, orb.y + offsetY, orb.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        });
    }
    
    // Shooting stars
    let shootingStars = [];
    
    function createShootingStar() {
        if (Math.random() > 0.992 && shootingStars.length < 3) {
            shootingStars.push({
                x: Math.random() * width,
                y: Math.random() * height * 0.4,
                length: Math.random() * 100 + 50,
                speed: Math.random() * 18 + 12,
                angle: Math.PI * 0.25 + Math.random() * 0.3,
                opacity: 1
            });
        }
    }
    
    function updateShootingStars() {
        shootingStars = shootingStars.filter(star => {
            star.x += Math.cos(star.angle) * star.speed;
            star.y += Math.sin(star.angle) * star.speed;
            star.opacity -= 0.015;
            
            if (star.opacity > 0) {
                const gradient = ctx.createLinearGradient(
                    star.x, star.y,
                    star.x - Math.cos(star.angle) * star.length,
                    star.y - Math.sin(star.angle) * star.length
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
                gradient.addColorStop(0.2, `rgba(0, 255, 255, ${star.opacity * 0.7})`);
                gradient.addColorStop(1, 'transparent');
                
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(
                    star.x - Math.cos(star.angle) * star.length,
                    star.y - Math.sin(star.angle) * star.length
                );
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // Bright head
                ctx.beginPath();
                ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
                
                return true;
            }
            return false;
        });
    }
    
    // Click burst effect
    let clickBursts = [];
    
    function createClickBurst(x, y) {
        const burstParticles = [];
        for (let i = 0; i < 15; i++) {
            const angle = (Math.PI * 2 / 15) * i;
            burstParticles.push({
                x: x, y: y,
                vx: Math.cos(angle) * (4 + Math.random() * 4),
                vy: Math.sin(angle) * (4 + Math.random() * 4),
                size: 2 + Math.random() * 2,
                opacity: 1,
                color: config.colors.particle[Math.floor(Math.random() * config.colors.particle.length)]
            });
        }
        clickBursts.push({ particles: burstParticles, ring: { radius: 0, opacity: 0.8 }, x, y });
    }
    
    function updateClickBursts() {
        clickBursts = clickBursts.filter(burst => {
            let active = false;
            burst.ring.radius += 10;
            burst.ring.opacity -= 0.04;
            
            if (burst.ring.opacity > 0) {
                ctx.beginPath();
                ctx.arc(burst.x, burst.y, burst.ring.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(0, 255, 255, ${burst.ring.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
                active = true;
            }
            
            burst.particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                p.vx *= 0.95; p.vy *= 0.95;
                p.opacity -= 0.025;
                if (p.opacity > 0) {
                    active = true;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * p.opacity, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = p.opacity;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            });
            return active;
        });
    }

    // Main animation loop
    function animate() {
        // Clear canvas
        ctx.fillStyle = config.colors.background;
        ctx.fillRect(0, 0, width, height);
        
        // Draw ambient orbs (background glow)
        drawAmbientOrbs();
        
        // Update particles
        particles.forEach(p => p.update());
        
        // Draw connections
        drawConnections();
        
        // Draw particles
        particles.forEach(p => p.draw());
        
        // Click effects
        updateClickBursts();
        
        // Shooting stars
        createShootingStar();
        updateShootingStars();
        
        requestAnimationFrame(animate);
    }
    
    // Event listeners
    window.addEventListener('resize', () => {
        resize();
    });
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY + window.scrollY;
    });
    
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        const newHeight = Math.max(document.body.scrollHeight, window.innerHeight * 2);
        if (canvas.height < newHeight) {
            canvas.height = newHeight;
            height = newHeight;
        }
    });
    
    // Click burst
    canvas.style.pointerEvents = 'auto';
    canvas.addEventListener('click', (e) => {
        createClickBurst(e.clientX, e.clientY + window.scrollY);
    });
    
    // Touch support
    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY + window.scrollY;
        }
    });
    
    window.addEventListener('touchend', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Touch click burst
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            createClickBurst(e.touches[0].clientX, e.touches[0].clientY + window.scrollY);
        }
    });
    
    // Initialize everything
    initParticles();
    animate();
    
    // Recalculate after DOM loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            resize();
            // Reinit particles with correct dimensions
            particles.forEach(p => p.init());
        }, 100);
    });
    
    console.log('Particle system initialized with', particles.length, 'particles');
})();