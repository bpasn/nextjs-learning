import { delay } from "@/lib/utils";

export const brands: BrandsItem[] = <BrandsItem[]>[
    {
        "name": "ABLEMEN",
        "slug": "ablemen"
    },
    {
        "name": "ACER",
        "slug": "acer"
    },
    {
        "name": "ADATA",
        "slug": "adata"
    },
    {
        "name": "AEROCOOL",
        "slug": "aerocool"
    },
    {
        "name": "AMAZINGTHING",
        "slug": "amazingthing"
    },
    {
        "name": "AMD",
        "slug": "amd"
    },
    {
        "name": "ANITECH",
        "slug": "anitech"
    },
    {
        "name": "ANTEC",
        "slug": "antec"
    },
    {
        "name": "AOC",
        "slug": "aoc"
    },
    {
        "name": "APPLE",
        "slug": "apple"
    },
    {
        "name": "ASROCK",
        "slug": "asrock"
    },
    {
        "name": "ASUS",
        "slug": "asus"
    },
    {
        "name": "AUKEY",
        "slug": "aukey"
    },
    {
        "name": "BE QUIET",
        "slug": "be-quiet"
    },
    {
        "name": "BELKIN",
        "slug": "belkin"
    },
    {
        "name": "BENQ",
        "slug": "benq"
    },
    {
        "name": "BEWELL",
        "slug": "bewell"
    },
    {
        "name": "BLUE BOX",
        "slug": "blue-box"
    },
    {
        "name": "BRIGHT",
        "slug": "bright"
    },
    {
        "name": "BROTHER",
        "slug": "brother"
    },
    {
        "name": "CASETIFY",
        "slug": "casetify"
    },
    {
        "name": "COLORFUL",
        "slug": "colorful"
    },
    {
        "name": "COOLER MASTER",
        "slug": "cooler-master"
    },
    {
        "name": "CORSAIR",
        "slug": "corsair"
    },
    {
        "name": "CRUCIAL",
        "slug": "crucial"
    },
    {
        "name": "D-LINK",
        "slug": "d-link"
    },
    {
        "name": "DAHUA",
        "slug": "dahua"
    },
    {
        "name": "DEEPCOOL",
        "slug": "deepcool"
    },
    {
        "name": "DELL",
        "slug": "dell"
    },
    {
        "name": "DJI",
        "slug": "dji"
    },
    {
        "name": "E-QUIP",
        "slug": "e-quip"
    },
    {
        "name": "ENERGEA",
        "slug": "energea"
    },
    {
        "name": "ERGONOZ",
        "slug": "ergonoz"
    },
    {
        "name": "FANTECH",
        "slug": "fantech"
    },
    {
        "name": "G.SKILL",
        "slug": "gskill"
    },
    {
        "name": "GALAX",
        "slug": "galax"
    },
    {
        "name": "GIGABYTE",
        "slug": "gigabyte"
    },
    {
        "name": "GOPRO",
        "slug": "gopro"
    },
    {
        "name": "HANABISHI",
        "slug": "hanabishi"
    },
    {
        "name": "HERO",
        "slug": "hero"
    },
    {
        "name": "HONOR",
        "slug": "honor"
    },
    {
        "name": "HP",
        "slug": "hp"
    },
    {
        "name": "HP - COMPAQ",
        "slug": "hp-compaq"
    },
    {
        "name": "HUAWEI",
        "slug": "huawei"
    },
    {
        "name": "HYPER X",
        "slug": "hyper-x"
    },
    {
        "name": "IINE",
        "slug": "iine"
    },
    {
        "name": "INTEL",
        "slug": "intel"
    },
    {
        "name": "JBL",
        "slug": "jbl"
    },
    {
        "name": "JTL",
        "slug": "jtl"
    },
    {
        "name": "KATE SPADE",
        "slug": "kate-spade"
    },
    {
        "name": "KINGSTON",
        "slug": "kingston"
    },
    {
        "name": "LAUT",
        "slug": "laut"
    },
    {
        "name": "LENOVO",
        "slug": "lenovo"
    },
    {
        "name": "LG",
        "slug": "lg"
    },
    {
        "name": "LIAN LI",
        "slug": "lian-li"
    },
    {
        "name": "LINKSYS",
        "slug": "linksys"
    },
    {
        "name": "LOGITECH",
        "slug": "logitech"
    },
    {
        "name": "MICROSOFT",
        "slug": "microsoft"
    },
    {
        "name": "MOFII",
        "slug": "mofii"
    },
    {
        "name": "MSI",
        "slug": "msi"
    },
    {
        "name": "NINTENDO SWITCH",
        "slug": "nintendo-switch"
    },
    {
        "name": "NUBWO",
        "slug": "nubwo"
    },
    {
        "name": "NZXT",
        "slug": "nzxt"
    },
    {
        "name": "ONIKUMA",
        "slug": "onikuma"
    },
    {
        "name": "OPPO",
        "slug": "oppo"
    },
    {
        "name": "PHILIPS",
        "slug": "philips"
    },
    {
        "name": "PIXEL",
        "slug": "pixel"
    },
    {
        "name": "PNY",
        "slug": "pny"
    },
    {
        "name": "QPLUS",
        "slug": "qplus"
    },
    {
        "name": "RAZER",
        "slug": "razer"
    },
    {
        "name": "REALME",
        "slug": "realme"
    },
    {
        "name": "SAMSUNG",
        "slug": "samsung"
    },
    {
        "name": "SANDISK",
        "slug": "sandisk"
    },
    {
        "name": "SEAGATE",
        "slug": "seagate"
    },
    {
        "name": "SHARP",
        "slug": "sharp"
    },
    {
        "name": "SHEEP",
        "slug": "sheep"
    },
    {
        "name": "SIGNO",
        "slug": "signo"
    },
    {
        "name": "SILVERSTONE",
        "slug": "silverstone"
    },
    {
        "name": "SKINARMA",
        "slug": "skinarma"
    },
    {
        "name": "SONY",
        "slug": "sony"
    },
    {
        "name": "STEELSERIES",
        "slug": "steelseries"
    },
    {
        "name": "TECHPRO",
        "slug": "techpro"
    },
    {
        "name": "TEFAL",
        "slug": "tefal"
    },
    {
        "name": "THERMALTAKE",
        "slug": "thermaltake"
    },
    {
        "name": "TOSHIBA",
        "slug": "toshiba"
    },
    {
        "name": "TP-LINK",
        "slug": "tp-link"
    },
    {
        "name": "UAG",
        "slug": "uag"
    },
    {
        "name": "UGREEN",
        "slug": "ugreen"
    },
    {
        "name": "UNIQ",
        "slug": "uniq"
    },
    {
        "name": "VEGER",
        "slug": "veger"
    },
    {
        "name": "VENTION",
        "slug": "vention"
    },
    {
        "name": "VIEWSONIC",
        "slug": "viewsonic"
    },
    {
        "name": "WATASHI",
        "slug": "watashi"
    },
    {
        "name": "WESTERN",
        "slug": "western"
    },
    {
        "name": "WHY",
        "slug": "why"
    },
    {
        "name": "WROOF",
        "slug": "wroof"
    },
    {
        "name": "XIAOMI",
        "slug": "xiaomi"
    },
    {
        "name": "XIGMATEK",
        "slug": "xigmatek"
    },
    {
        "name": "ZALMAN",
        "slug": "zalman"
    },
    {
        "name": "ZOTAC",
        "slug": "zotac"
    }
];
export interface BrandsItem {
    name: string;
    slug: string;
}
export const getBrands = async (): Promise<BrandsItem[]> => {
    'use server';
    await delay(1.5 * 1000);
    return brands;
}