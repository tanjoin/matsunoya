const MATSUNOYA_MENU_LIST = [
  [
    "鶏の竜田揚げ定食",
    850,
    {
      "カロリー": "738kcal",
      "たんぱく質": "29.4g",
      "脂質": "19.4g",
      "炭水化物": "116.4g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_tatsuta_hp_250305.html"
  ],
  [
    "鶏の竜田揚げダブル定食",
    1290,
    {
      "カロリー": "1085kcal",
      "たんぱく質": "50.7g",
      "脂質": "37.3g",
      "炭水化物": "142.6g",
      "食塩相当量": "9.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/tei_chicken_tatsuta_w_hp_250305.html"
  ],
  [
    "ロースかつ＆鶏の竜田揚げ定食",
    1230,
    {
      "カロリー": "1181kcal",
      "たんぱく質": "48.2g",
      "脂質": "49.7g",
      "炭水化物": "140.6g",
      "食塩相当量": "6.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_chicken_tatsuta_hp_250305.html"
  ],
  [
    "カニクリームコロッケ（2個）定食",
    990,
    {
      "カロリー": "834kcal",
      "たんぱく質": "19.4g",
      "脂質": "30.4g",
      "炭水化物": "122.9g",
      "食塩相当量": "3.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kanikoro_hp_250226.html"
  ],
  [
    "ロースかつ＆カニクリームコロッケ（1個）定食",
    990,
    {
      "カロリー": "1054kcal",
      "たんぱく質": "32.5g",
      "脂質": "46.2g",
      "炭水化物": "130.5g",
      "食塩相当量": "3.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kanikoro1_hp_250226.html"
  ],
  [
    "ロースかつ＆カニクリームコロッケ（2個）定食",
    1250,
    {
      "カロリー": "1277kcal",
      "たんぱく質": "38.3g",
      "脂質": "60.7g",
      "炭水化物": "147.2g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kanikoro2_hp_250226.html"
  ],
  [
    "チキンかつ＆カニクリームコロッケ（1個）定食",
    990,
    {
      "カロリー": "1095kcal",
      "たんぱく質": "36.2g",
      "脂質": "49.5g",
      "炭水化物": "130.4g",
      "食塩相当量": "3.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_kanikoro1_hp_250226.html"
  ],
  [
    "チキンかつ＆カニクリームコロッケ（2個）定食",
    1250,
    {
      "カロリー": "1318kcal",
      "たんぱく質": "41.9g",
      "脂質": "64g",
      "炭水化物": "147.1g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_kanikoro2_hp_250226.html"
  ],
  [
    "ささみかつ（2本）＆カニクリームコロッケ（1個）定食",
    990,
    {
      "カロリー": "1070kcal",
      "たんぱく質": "42.4g",
      "脂質": "40.2g",
      "炭水化物": "139.3g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami2_kanikoro1_hp_250226.html"
  ],
  [
    "ささみかつ（2本）＆カニクリームコロッケ（2個）定食",
    1250,
    {
      "カロリー": "1294kcal",
      "たんぱく質": "48.2g",
      "脂質": "54.6g",
      "炭水化物": "156g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami2_kanikoro2_hp_250226.html"
  ],
  [
    "海老フライ（1尾）＆カニクリームコロッケ（2個）定食",
    1190,
    {
      "カロリー": "1075kcal",
      "たんぱく質": "25.4g",
      "脂質": "50.4g",
      "炭水化物": "132.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ebi1_kanioro2_hp_250226.html"
  ],
  [
    "海老フライ（2尾）＆カニクリームコロッケ（2個）定食",
    1350,
    {
      "カロリー": "1251kcal",
      "たんぱく質": "30.8g",
      "脂質": "64.3g",
      "炭水化物": "140g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ebi2_kanioro2_hp_250226.html"
  ],
  [
    "有頭大海老フライ（1尾）＆カニクリームコロッケ（2個）定食",
    1390,
    {
      "カロリー": "1153kcal",
      "たんぱく質": "29.8g",
      "脂質": "55.1g",
      "炭水化物": "137g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ooebi1_kanioro2_hp_250226.html"
  ],
  [
    "有頭大海老フライ（2尾）＆カニクリームコロッケ（2個）定食",
    1750,
    {
      "カロリー": "1406kcal",
      "たんぱく質": "39.7g",
      "脂質": "73.7g",
      "炭水化物": "148.7g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ooebi2_kanioro2_hp_250226.html"
  ],
  [
    "海鮮盛合わせ定食（カニコロ1個・海老1尾・アジ1枚）",
    1190,
    {
      "カロリー": "1088kcal",
      "たんぱく質": "30.1g",
      "脂質": "51.6g",
      "炭水化物": "129.9g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_kanikoro_hp_250226.html"
  ],
  [
    "海鮮盛合わせ定食（カニコロ1個・有頭大海老1尾・アジ1枚）",
    1390,
    {
      "カロリー": "1166kcal",
      "たんぱく質": "34.6g",
      "脂質": "56.3g",
      "炭水化物": "134.3g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_kanikoro_hp_250226.html"
  ],
  [
    "豪華海鮮盛合わせ定食（カニコロ1個・海老1尾・アジ1枚・カキ2個）",
    1350,
    {
      "カロリー": "1250kcal",
      "たんぱく質": "33.5g",
      "脂質": "64.5g",
      "炭水化物": "138.7g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_kaki2_kanikoro_hp_250226.html"
  ],
  [
    "豪華海鮮盛合わせ定食（カニコロ1個・有頭大海老1尾・アジ1枚・カキ2個）",
    1550,
    {
      "カロリー": "1328kcal",
      "たんぱく質": "38g",
      "脂質": "69.2g",
      "炭水化物": "143g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_kaki2_kanikoro_hp_250226.html"
  ],
  [
    "国産黒毛和牛×国産豚メンチかつ定食",
    990,
    {
      "カロリー": "1067kcal",
      "たんぱく質": "31.9g",
      "脂質": "49.3g",
      "炭水化物": "127.7g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_menchi_katsu_hp_250221.html"
  ],
  [
    "ロースかつ＆国産黒毛和牛×国産豚メンチかつ （1個）定食",
    1090,
    {
      "カロリー": "1057kcal",
      "たんぱく質": "34.7g",
      "脂質": "47.7g",
      "炭水化物": "126.5g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_menchi1_hp_250221.html"
  ],
  [
    "ロースかつ＆国産黒毛和牛×国産豚メンチかつ （2個）定食",
    1390,
    {
      "カロリー": "1284kcal",
      "たんぱく質": "42.7g",
      "脂質": "63.6g",
      "炭水化物": "139.3g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_menchi2_hp_250221.html"
  ],
  [
    "明太チーズチキンかつ定食",
    990,
    {
      "カロリー": "1155.6kcal",
      "たんぱく質": "43.2g",
      "脂質": "56.7g",
      "炭水化物": "123g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mc_chicken_hp_250221.html"
  ],
  [
    "明太チーズささみかつ定食",
    990,
    {
      "カロリー": "1065.9kcal",
      "たんぱく質": "49g",
      "脂質": "41.3g",
      "炭水化物": "129.6g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mc_sasami_hp_250221.html"
  ],
  [
    "明太チーズたっぷりささみかつ定食",
    1210,
    {
      "カロリー": "1262.9kcal",
      "たんぱく質": "63.1g",
      "脂質": "50.4g",
      "炭水化物": "144.9g",
      "食塩相当量": "6.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mc_sasami3_hp_250221.html"
  ],
  [
    "明太チーズ海鮮盛り合わせ定食",
    1450,
    {
      "カロリー": "1245.8kcal",
      "たんぱく質": "40.1g",
      "脂質": "65.6g",
      "炭水化物": "129g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_mc_kaisen_hp_250221.html"
  ],
  [
    "アジフライ（2枚）定食",
    830,
    {
      "カロリー": "925kcal",
      "たんぱく質": "29.4g",
      "脂質": "38.9g",
      "炭水化物": "119.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_250221.html"
  ],
  [
    "カキフライ（4個）定食",
    930,
    {
      "カロリー": "777kcal",
      "たんぱく質": "15.3g",
      "脂質": "33.3g",
      "炭水化物": "109.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki4_hp_250221.html"
  ],
  [
    "カキフライ（5個）定食",
    1050,
    {
      "カロリー": "858kcal",
      "たんぱく質": "17.1g",
      "脂質": "39.8g",
      "炭水化物": "113.7g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_250221.html"
  ],
  [
    "ロースかつ＆アジフライ（１枚）定食",
    930,
    {
      "カロリー": "1132kcal",
      "たんぱく質": "37.8g",
      "脂質": "53.5g",
      "炭水化物": "130.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_250221.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1020kcal",
      "たんぱく質": "20.5g",
      "脂質": "52.7g",
      "炭水化物": "122.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_250221.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    990,
    {
      "カロリー": "1058kcal",
      "たんぱく質": "30.7g",
      "脂質": "50.7g",
      "炭水化物": "124.9g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_250221.html"
  ],
  [
    "海鮮盛合せ定食（カキフライ2個・アジフライ1枚・海老フライ1尾）",
    1090,
    {
      "カロリー": "1027kcal",
      "たんぱく質": "27.8g",
      "脂質": "50g",
      "炭水化物": "122g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_hp_250221.html"
  ],
  [
    "海鮮盛合せ定食（カキフライ2個・アジフライ1枚・有頭大海老フライ1尾）",
    1290,
    {
      "カロリー": "1104kcal",
      "たんぱく質": "32.2g",
      "脂質": "54.7g",
      "炭水化物": "126.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_hp_250221.html"
  ],
  [
    "鶏の竜田揚げ定食",
    850,
    {
      "カロリー": "738kcal",
      "たんぱく質": "29.4g",
      "脂質": "19.4g",
      "炭水化物": "116.4g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_tatsuta_hp_250305.html"
  ],
  [
    "カニクリームコロッケ（2個）定食",
    990,
    {
      "カロリー": "834kcal",
      "たんぱく質": "19.4g",
      "脂質": "30.4g",
      "炭水化物": "122.9g",
      "食塩相当量": "3.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kanikoro_hp_250226.html"
  ],
  [
    "国産黒毛和牛×国産豚メンチかつ定食",
    990,
    {
      "カロリー": "1067kcal",
      "たんぱく質": "31.9g",
      "脂質": "49.3g",
      "炭水化物": "127.7g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_menchi_katsu_hp_250221.html"
  ],
  [
    "明太チーズチキンかつ定食",
    990,
    {
      "カロリー": "1155.6kcal",
      "たんぱく質": "43.2g",
      "脂質": "56.7g",
      "炭水化物": "123g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mc_chicken_hp_250221.html"
  ],
  [
    "明太チーズささみかつ定食",
    990,
    {
      "カロリー": "1065.9kcal",
      "たんぱく質": "49g",
      "脂質": "41.3g",
      "炭水化物": "129.6g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mc_sasami_hp_250221.html"
  ],
  [
    "明太チーズたっぷりささみかつ定食",
    1210,
    {
      "カロリー": "1262.9kcal",
      "たんぱく質": "63.1g",
      "脂質": "50.4g",
      "炭水化物": "144.9g",
      "食塩相当量": "6.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mc_sasami3_hp_250221.html"
  ],
  [
    "チキンかつ定食",
    770,
    {
      "カロリー": "871kcal",
      "たんぱく質": "30.4g",
      "脂質": "35g",
      "炭水化物": "113.6g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_hp_250221.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    870,
    {
      "カロリー": "903kcal",
      "たんぱく質": "31.8g",
      "脂質": "35.1g",
      "炭水化物": "120.2g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_oni_hp_250221.html"
  ],
  [
    "味噌チキンかつ定食",
    870,
    {
      "カロリー": "967kcal",
      "たんぱく質": "32.9g",
      "脂質": "37.5g",
      "炭水化物": "128.1g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_miso_hp_250221.html"
  ],
  [
    "タルタルチキンかつ定食",
    870,
    {
      "カロリー": "1010kcal",
      "たんぱく質": "31.8g",
      "脂質": "47.1g",
      "炭水化物": "119.7g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_hp_250221.html"
  ],
  [
    "ささみかつ定食",
    750,
    {
      "カロリー": "847kcal",
      "たんぱく質": "36.7g",
      "脂質": "25.7g",
      "炭水化物": "122.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_hp_250221.html"
  ],
  [
    "鬼おろしポン酢ささみかつ定食",
    850,
    {
      "カロリー": "813kcal",
      "たんぱく質": "37.5g",
      "脂質": "19.7g",
      "炭水化物": "126.7g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_oni_hp_250221.html"
  ],
  [
    "味噌ささみかつ定食",
    850,
    {
      "カロリー": "877kcal",
      "たんぱく質": "38.6g",
      "脂質": "22.1g",
      "炭水化物": "134.7g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_miso_hp_250221.html"
  ],
  [
    "たっぷりささみかつ定食",
    970,
    {
      "カロリー": "1044kcal",
      "たんぱく質": "50.8g",
      "脂質": "34.7g",
      "炭水化物": "137.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami3_hp_250221.html"
  ],
  [
    "アジフライ（2枚）定食",
    830,
    {
      "カロリー": "925kcal",
      "たんぱく質": "29.4g",
      "脂質": "38.9g",
      "炭水化物": "119.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_250221.html"
  ],
  [
    "カキフライ（4個）定食",
    930,
    {
      "カロリー": "777kcal",
      "たんぱく質": "15.3g",
      "脂質": "33.3g",
      "炭水化物": "109.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki4_hp_250221.html"
  ],
  [
    "カキフライ（5個）定食",
    1050,
    {
      "カロリー": "858kcal",
      "たんぱく質": "17.1g",
      "脂質": "39.8g",
      "炭水化物": "113.7g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_250221.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1020kcal",
      "たんぱく質": "20.5g",
      "脂質": "52.7g",
      "炭水化物": "122.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_250221.html"
  ],
  [
    "有頭大海老フライ定食",
    1280,
    {
      "カロリー": "960kcal",
      "たんぱく質": "28.2g",
      "脂質": "44.8g",
      "炭水化物": "115.2g",
      "食塩相当量": "3.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ooebi_hp_250221.html"
  ],
  [
    "ロースかつ定食",
    670,
    {
      "カロリー": "831kcal",
      "たんぱく質": "26.7g",
      "脂質": "31.8g",
      "炭水化物": "113.8g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp_250221.html"
  ],
  [
    "ダブルロースかつ定食",
    1030,
    {
      "カロリー": "1274kcal",
      "たんぱく質": "45.6g",
      "脂質": "62.1g",
      "炭水化物": "138g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_hp_250221.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食",
    770,
    {
      "カロリー": "862kcal",
      "たんぱく質": "28.1g",
      "脂質": "31.8g",
      "炭水化物": "120.3g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp_250221.html"
  ],
  [
    "ダブル鬼おろしポン酢ロースかつ定食",
    1130,
    {
      "カロリー": "1305kcal",
      "たんぱく質": "46.9g",
      "脂質": "62.1g",
      "炭水化物": "144.6g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_oroshipon_hp_250221.html"
  ],
  [
    "味噌ロースかつ定食",
    770,
    {
      "カロリー": "926kcal",
      "たんぱく質": "29.2g",
      "脂質": "34.3g",
      "炭水化物": "128.3g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp_250221.html"
  ],
  [
    "ダブル味噌ロースかつ定食",
    1130,
    {
      "カロリー": "1369kcal",
      "たんぱく質": "48.1g",
      "脂質": "64.6g",
      "炭水化物": "152.5g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_miso_hp_250221.html"
  ],
  [
    "本格唐揚げ定食（5個）",
    830,
    {
      "カロリー": "855kcal",
      "たんぱく質": "36.3g",
      "脂質": "29.9g",
      "炭水化物": "116g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage5_hp_250221.html"
  ],
  [
    "本格唐揚げ定食（8個）",
    1100,
    {
      "カロリー": "1136kcal",
      "たんぱく質": "53.3g",
      "脂質": "46.9g",
      "炭水化物": "131.8g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage8_hp_250221.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（5個）",
    930,
    {
      "カロリー": "887kcal",
      "たんぱく質": "37.6g",
      "脂質": "30g",
      "炭水化物": "122.5g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage5_hp_250221.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（8個）",
    1200,
    {
      "カロリー": "1168kcal",
      "たんぱく質": "54.6g",
      "脂質": "47g",
      "炭水化物": "138.4g",
      "食塩相当量": "7.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage8_hp_250221.html"
  ],
  [
    "鶏の竜田揚げダブル定食",
    1290,
    {
      "カロリー": "1085kcal",
      "たんぱく質": "50.7g",
      "脂質": "37.3g",
      "炭水化物": "142.6g",
      "食塩相当量": "9.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/tei_chicken_tatsuta_w_hp_250305.html"
  ],
  [
    "ロースかつ＆鶏の竜田揚げ定食",
    1230,
    {
      "カロリー": "1181kcal",
      "たんぱく質": "48.2g",
      "脂質": "49.7g",
      "炭水化物": "140.6g",
      "食塩相当量": "6.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_chicken_tatsuta_hp_250305.html"
  ],
  [
    "ロースかつ＆カニクリームコロッケ（1個）定食",
    990,
    {
      "カロリー": "1054kcal",
      "たんぱく質": "32.5g",
      "脂質": "46.2g",
      "炭水化物": "130.5g",
      "食塩相当量": "3.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kanikoro1_hp_250226.html"
  ],
  [
    "ロースかつ＆カニクリームコロッケ（2個）定食",
    1250,
    {
      "カロリー": "1277kcal",
      "たんぱく質": "38.3g",
      "脂質": "60.7g",
      "炭水化物": "147.2g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kanikoro2_hp_250226.html"
  ],
  [
    "チキンかつ＆カニクリームコロッケ（1個）定食",
    990,
    {
      "カロリー": "1095kcal",
      "たんぱく質": "36.2g",
      "脂質": "49.5g",
      "炭水化物": "130.4g",
      "食塩相当量": "3.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_kanikoro1_hp_250226.html"
  ],
  [
    "チキンかつ＆カニクリームコロッケ（2個）定食",
    1250,
    {
      "カロリー": "1318kcal",
      "たんぱく質": "41.9g",
      "脂質": "64g",
      "炭水化物": "147.1g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_kanikoro2_hp_250226.html"
  ],
  [
    "ささみかつ（2本）＆カニクリームコロッケ（1個）定食",
    990,
    {
      "カロリー": "1070kcal",
      "たんぱく質": "42.4g",
      "脂質": "40.2g",
      "炭水化物": "139.3g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami2_kanikoro1_hp_250226.html"
  ],
  [
    "ささみかつ（2本）＆カニクリームコロッケ（2個）定食",
    1250,
    {
      "カロリー": "1294kcal",
      "たんぱく質": "48.2g",
      "脂質": "54.6g",
      "炭水化物": "156g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami2_kanikoro2_hp_250226.html"
  ],
  [
    "海老フライ（1尾）＆カニクリームコロッケ（2個）定食",
    1190,
    {
      "カロリー": "1075kcal",
      "たんぱく質": "25.4g",
      "脂質": "50.4g",
      "炭水化物": "132.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ebi1_kanioro2_hp_250226.html"
  ],
  [
    "海老フライ（2尾）＆カニクリームコロッケ（2個）定食",
    1350,
    {
      "カロリー": "1251kcal",
      "たんぱく質": "30.8g",
      "脂質": "64.3g",
      "炭水化物": "140g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ebi2_kanioro2_hp_250226.html"
  ],
  [
    "有頭大海老フライ（1尾）＆カニクリームコロッケ（2個）定食",
    1390,
    {
      "カロリー": "1153kcal",
      "たんぱく質": "29.8g",
      "脂質": "55.1g",
      "炭水化物": "137g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ooebi1_kanioro2_hp_250226.html"
  ],
  [
    "有頭大海老フライ（2尾）＆カニクリームコロッケ（2個）定食",
    1750,
    {
      "カロリー": "1406kcal",
      "たんぱく質": "39.7g",
      "脂質": "73.7g",
      "炭水化物": "148.7g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ooebi2_kanioro2_hp_250226.html"
  ],
  [
    "海鮮盛合わせ定食（カニコロ1個・海老1尾・アジ1枚）",
    1190,
    {
      "カロリー": "1088kcal",
      "たんぱく質": "30.1g",
      "脂質": "51.6g",
      "炭水化物": "129.9g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_kanikoro_hp_250226.html"
  ],
  [
    "海鮮盛合わせ定食（カニコロ1個・有頭大海老1尾・アジ1枚）",
    1390,
    {
      "カロリー": "1166kcal",
      "たんぱく質": "34.6g",
      "脂質": "56.3g",
      "炭水化物": "134.3g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_kanikoro_hp_250226.html"
  ],
  [
    "豪華海鮮盛合わせ定食（カニコロ1個・海老1尾・アジ1枚・カキ2個）",
    1350,
    {
      "カロリー": "1250kcal",
      "たんぱく質": "33.5g",
      "脂質": "64.5g",
      "炭水化物": "138.7g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_kaki2_kanikoro_hp_250226.html"
  ],
  [
    "豪華海鮮盛合わせ定食（カニコロ1個・有頭大海老1尾・アジ1枚・カキ2個）",
    1550,
    {
      "カロリー": "1328kcal",
      "たんぱく質": "38g",
      "脂質": "69.2g",
      "炭水化物": "143g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_kaki2_kanikoro_hp_250226.html"
  ],
  [
    "ロースかつ＆国産黒毛和牛×国産豚メンチかつ （1個）定食",
    1090,
    {
      "カロリー": "1057kcal",
      "たんぱく質": "34.7g",
      "脂質": "47.7g",
      "炭水化物": "126.5g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_menchi1_hp_250221.html"
  ],
  [
    "ロースかつ＆国産黒毛和牛×国産豚メンチかつ （2個）定食",
    1390,
    {
      "カロリー": "1284kcal",
      "たんぱく質": "42.7g",
      "脂質": "63.6g",
      "炭水化物": "139.3g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_menchi2_hp_250221.html"
  ],
  [
    "明太チーズ海鮮盛り合わせ定食",
    1450,
    {
      "カロリー": "1245.8kcal",
      "たんぱく質": "40.1g",
      "脂質": "65.6g",
      "炭水化物": "129g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_mc_kaisen_hp_250221.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    1050,
    {
      "カロリー": "1152kcal",
      "たんぱく質": "47.4g",
      "脂質": "52.1g",
      "炭水化物": "129.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_250221.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    1050,
    {
      "カロリー": "1113kcal",
      "たんぱく質": "36.4g",
      "脂質": "55g",
      "炭水化物": "123.4g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_250221.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1300,
    {
      "カロリー": "1289kcal",
      "たんぱく質": "41.8g",
      "脂質": "68.9g",
      "炭水化物": "130.7g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_250221.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（1尾）定食",
    1250,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "40.8g",
      "脂質": "59.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi1_hp_250221.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（2尾）定食",
    1700,
    {
      "カロリー": "1444kcal",
      "たんぱく質": "50.7g",
      "脂質": "78.3g",
      "炭水化物": "139.4g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi2_hp_250221.html"
  ],
  [
    "チキンかつ＆ロースかつ定食",
    1100,
    {
      "カロリー": "1314kcal",
      "たんぱく質": "49.2g",
      "脂質": "65.3g",
      "炭水化物": "137.9g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_rosu_hp_250221.html"
  ],
  [
    "チキンかつ＆アジフライ（１枚）定食",
    1030,
    {
      "カロリー": "1173kcal",
      "たんぱく質": "41.4g",
      "脂質": "56.7g",
      "炭水化物": "130g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_aji_hp_250221.html"
  ],
  [
    "チキンかつ＆カキフライ（2個）定食",
    1090,
    {
      "カロリー": "1099kcal",
      "たんぱく質": "34.4g",
      "脂質": "54g",
      "炭水化物": "124.8g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_kaki_hp_250221.html"
  ],
  [
    "ロースかつ＆ささみかつ（1本）定食",
    900,
    {
      "カロリー": "1093kcal",
      "たんぱく質": "41.4g",
      "脂質": "46.9g",
      "炭水化物": "131.5g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami1_hp_250221.html"
  ],
  [
    "ロースかつ＆ささみかつ（2本）定食",
    1130,
    {
      "カロリー": "1290kcal",
      "たんぱく質": "55.5g",
      "脂質": "56g",
      "炭水化物": "146.8g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami2_hp_250221.html"
  ],
  [
    "ささみかつ＆海老フライ（1尾）定食",
    1050,
    {
      "カロリー": "1023kcal",
      "たんぱく質": "42.1g",
      "脂質": "39.6g",
      "炭水化物": "129.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi1_hp_250221.html"
  ],
  [
    "ささみかつ＆海老フライ（2尾）定食",
    1300,
    {
      "カロリー": "1199kcal",
      "たんぱく質": "47.5g",
      "脂質": "53.5g",
      "炭水化物": "137.2g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi2_hp_250221.html"
  ],
  [
    "ささみかつ＆有頭大海老フライ（1尾）定食",
    1250,
    {
      "カロリー": "1101kcal",
      "たんぱく質": "46.6g",
      "脂質": "44.3g",
      "炭水化物": "134.2g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ooebi1_hp_250221.html"
  ],
  [
    "ささみかつ＆有頭大海老フライ（2尾）定食",
    1700,
    {
      "カロリー": "1354kcal",
      "たんぱく質": "56.4g",
      "脂質": "62.9g",
      "炭水化物": "145.9g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ooebi2_hp_250221.html"
  ],
  [
    "ロースかつ＆アジフライ（１枚）定食",
    930,
    {
      "カロリー": "1132kcal",
      "たんぱく質": "37.8g",
      "脂質": "53.5g",
      "炭水化物": "130.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_250221.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    990,
    {
      "カロリー": "1058kcal",
      "たんぱく質": "30.7g",
      "脂質": "50.7g",
      "炭水化物": "124.9g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_250221.html"
  ],
  [
    "海鮮盛合せ定食（カキフライ2個・アジフライ1枚・海老フライ1尾）",
    1090,
    {
      "カロリー": "1027kcal",
      "たんぱく質": "27.8g",
      "脂質": "50g",
      "炭水化物": "122g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_hp_250221.html"
  ],
  [
    "海鮮盛合せ定食（カキフライ2個・アジフライ1枚・有頭大海老フライ1尾）",
    1290,
    {
      "カロリー": "1104kcal",
      "たんぱく質": "32.2g",
      "脂質": "54.7g",
      "炭水化物": "126.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_hp_250221.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（1尾）定食",
    1150,
    {
      "カロリー": "1149kcal",
      "たんぱく質": "37.2g",
      "脂質": "56.4g",
      "炭水化物": "127.8g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi1_hp_250221.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（2尾）定食",
    1630,
    {
      "カロリー": "1403kcal",
      "たんぱく質": "47g",
      "脂質": "75g",
      "炭水化物": "139.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi2_hp_250221.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    950,
    {
      "カロリー": "1111kcal",
      "たんぱく質": "43.8g",
      "脂質": "48.8g",
      "炭水化物": "129.6g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_250221.html"
  ],
  [
    "ロースかつ＆海老フライ（1尾）定食",
    950,
    {
      "カロリー": "1072kcal",
      "たんぱく質": "32.7g",
      "脂質": "51.7g",
      "炭水化物": "123.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_250221.html"
  ],
  [
    "ロースかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1248kcal",
      "たんぱく質": "38.1g",
      "脂質": "65.6g",
      "炭水化物": "130.8g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_250221.html"
  ],
  [
    "親子チキンかつ丼 並盛",
    750,
    {
      "カロリー": "1053kcal",
      "たんぱく質": "43.4g",
      "脂質": "44.6g",
      "炭水化物": "120.4g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_250221.html"
  ],
  [
    "親子チキンかつ丼 大盛",
    830,
    {
      "カロリー": "1231kcal",
      "たんぱく質": "47g",
      "脂質": "44.9g",
      "炭水化物": "161.5g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_250221.html"
  ],
  [
    "親子ささみかつ丼 並盛",
    750,
    {
      "カロリー": "963kcal",
      "たんぱく質": "49.1g",
      "脂質": "29.2g",
      "炭水化物": "127g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_250221.html"
  ],
  [
    "親子ささみかつ丼 大盛",
    830,
    {
      "カロリー": "1142kcal",
      "たんぱく質": "52.7g",
      "脂質": "29.5g",
      "炭水化物": "168.1g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_250221.html"
  ],
  [
    "カキフライとじ丼 並盛",
    890,
    {
      "カロリー": "893kcal",
      "たんぱく質": "27.8g",
      "脂質": "36.8g",
      "炭水化物": "113.8g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_250221.html"
  ],
  [
    "カキフライとじ丼 大盛",
    970,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "31.4g",
      "脂質": "37.1g",
      "炭水化物": "154.9g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_250221.html"
  ],
  [
    "ロースかつ丼 並盛",
    690,
    {
      "カロリー": "1012kcal",
      "たんぱく質": "39.7g",
      "脂質": "41.3g",
      "炭水化物": "120.5g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_250221.html"
  ],
  [
    "ロースかつ丼 大盛",
    770,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "43.3g",
      "脂質": "41.6g",
      "炭水化物": "161.6g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_250221.html"
  ],
  [
    "味噌ロースかつ丼 並盛",
    690,
    {
      "カロリー": "913kcal",
      "たんぱく質": "28.5g",
      "脂質": "34.1g",
      "炭水化物": "125.1g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_250221.html"
  ],
  [
    "味噌ロースかつ丼 大盛",
    770,
    {
      "カロリー": "1069kcal",
      "たんぱく質": "31g",
      "脂質": "34.4g",
      "炭水化物": "162.2g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_250221.html"
  ],
  [
    "松のやのチキンかつ黒カレー 並盛",
    950,
    {
      "カロリー": "997kcal",
      "たんぱく質": "34.7g",
      "脂質": "43.7g",
      "炭水化物": "120.6g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_chicken_black_hp_250221.html"
  ],
  [
    "松のやのチキンかつ黒カレー 大盛",
    1070,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "38.7g",
      "脂質": "46.2g",
      "炭水化物": "160.6g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_chicken_black_hp_250221.html"
  ],
  [
    "ささみかつ黒カレー 並盛",
    950,
    {
      "カロリー": "973kcal",
      "たんぱく質": "41g",
      "脂質": "34.4g",
      "炭水化物": "129.5g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sasami_black_hp_250221.html"
  ],
  [
    "ささみかつ黒カレー 大盛",
    1070,
    {
      "カロリー": "1193kcal",
      "たんぱく質": "45.1g",
      "脂質": "39.7g",
      "炭水化物": "170g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sasami_black_hp_250221.html"
  ],
  [
    "松のやのカキフライ黒カレー 並盛",
    1030,
    {
      "カロリー": "822kcal",
      "たんぱく質": "18g",
      "脂質": "35.6g",
      "炭水化物": "111.9g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_kaki_black_hp_250221.html"
  ],
  [
    "松のやのカキフライ黒カレー 大盛",
    1150,
    {
      "カロリー": "1014kcal",
      "たんぱく質": "21.9g",
      "脂質": "38g",
      "炭水化物": "152g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_kaki_black_hp_250221.html"
  ],
  [
    "松のやのロースかつ黒カレー 並盛",
    850,
    {
      "カロリー": "956kcal",
      "たんぱく質": "31.1g",
      "脂質": "40.5g",
      "炭水化物": "120.7g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_black_hp_250221.html"
  ],
  [
    "松のやのロースかつ黒カレー 大盛",
    970,
    {
      "カロリー": "1149kcal",
      "たんぱく質": "35g",
      "脂質": "42.9g",
      "炭水化物": "160.8g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_black_hp_250221.html"
  ],
  [
    "松のやの本格唐揚げ黒カレー 並盛",
    800,
    {
      "カロリー": "860kcal",
      "たんぱく質": "29.8g",
      "脂質": "33.3g",
      "炭水化物": "114.7g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_karaage_black_hp_250221.html"
  ],
  [
    "松のやの本格唐揚げ黒カレー 大盛",
    920,
    {
      "カロリー": "1052kcal",
      "たんぱく質": "33.8g",
      "脂質": "35.7g",
      "炭水化物": "154.7g",
      "食塩相当量": "6.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_karaage_black_hp_250221.html"
  ],
  [
    "松のやの海老フライ黒カレー 並盛",
    1050,
    {
      "カロリー": "931kcal",
      "たんぱく質": "23.6g",
      "脂質": "44g",
      "炭水化物": "113.5g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_ebi_black_hp_250221.html"
  ],
  [
    "松のやの海老フライ黒カレー 大盛",
    1170,
    {
      "カロリー": "1123kcal",
      "たんぱく質": "27.6g",
      "脂質": "46.5g",
      "炭水化物": "153.6g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_ebi_black_hp_250221.html"
  ],
  [
    "松のやのコロッケ黒カレー 並盛",
    700,
    {
      "カロリー": "983kcal",
      "たんぱく質": "18.9g",
      "脂質": "41.2g",
      "炭水化物": "138g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_korokke_black_hp_250221.html"
  ],
  [
    "松のやのコロッケ黒カレー 大盛",
    820,
    {
      "カロリー": "1176kcal",
      "たんぱく質": "22.9g",
      "脂質": "43.6g",
      "炭水化物": "178.1g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_korokke_black_hp_250221.html"
  ],
  [
    "お子様プレート",
    500,
    {
      "カロリー": "762kcal",
      "たんぱく質": "17.5g",
      "脂質": "25.8g",
      "炭水化物": "116.8g",
      "食塩相当量": "1.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/sumikko/ageage_okosama_hp_240809_nn.html"
  ],
  [
    "マミー",
    100,
    {
      "カロリー": "91kcal",
      "たんぱく質": "0.8g",
      "脂質": "0g",
      "炭水化物": "22.1g",
      "食塩相当量": "0～0.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/okosama/okosama_mammy_hp_230222.html"
  ],
  [
    "単品鶏の竜田揚げ",
    610,
    {
      "カロリー": "350kcal",
      "たんぱく質": "21.5g",
      "脂質": "17.9g",
      "炭水化物": "26.9g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_chicken_tatsuta_hp_250305.html"
  ],
  [
    "単品カニクリームコロッケ",
    450,
    {
      "カロリー": "223kcal",
      "たんぱく質": "5.8g",
      "脂質": "14.5g",
      "炭水化物": "16.7g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kanikoro_hp_250226.html"
  ],
  [
    "単品国産黒毛和牛×国産豚メンチかつ",
    450,
    {
      "カロリー": "269kcal",
      "たんぱく質": "10g",
      "脂質": "16.8g",
      "炭水化物": "18g",
      "食塩相当量": "1.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_menchi_katsu_hp_250219.html"
  ],
  [
    "単品チキンかつ",
    490,
    {
      "カロリー": "484kcal",
      "たんぱく質": "22.5g",
      "脂質": "33.5g",
      "炭水化物": "24.2g",
      "食塩相当量": "1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_chicken_hp_241204.html"
  ],
  [
    "単品ささみかつ（1本）",
    250,
    {
      "カロリー": "197kcal",
      "たんぱく質": "14.1g",
      "脂質": "9.1g",
      "炭水化物": "15.3g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_sasami_hp_241106.html"
  ],
  [
    "単品アジフライ（1枚）",
    330,
    {
      "カロリー": "236kcal",
      "たんぱく質": "10.5g",
      "脂質": "15.7g",
      "炭水化物": "14g",
      "食塩相当量": "0.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_aji_hp_240925.html"
  ],
  [
    "単品カキフライ（2個）",
    400,
    {
      "カロリー": "162kcal",
      "たんぱく質": "3.5g",
      "脂質": "12.9g",
      "炭水化物": "8.8g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kaki_hp_240925.html"
  ],
  [
    "単品有頭大海老フライ",
    500,
    {
      "カロリー": "253kcal",
      "たんぱく質": "9.9g",
      "脂質": "18.6g",
      "炭水化物": "11.7g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ooebi1_hp_240501.html"
  ],
  [
    "単品ロースかつ（1枚）",
    390,
    {
      "カロリー": "443kcal",
      "たんぱく質": "18.8g",
      "脂質": "30.3g",
      "炭水化物": "24.3g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_rosu_nami1_hp_240809.html"
  ],
  [
    "単品海老フライ（1尾）",
    300,
    {
      "カロリー": "176kcal",
      "たんぱく質": "5.4g",
      "脂質": "13.9g",
      "炭水化物": "7.3g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ebi1_hp_220502.html"
  ],
  [
    "単品本格唐揚げ（1個）",
    120,
    {
      "カロリー": "94kcal",
      "たんぱく質": "5.7g",
      "脂質": "5.7g",
      "炭水化物": "5.3g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_honkaku_kara1_hp_230830.html"
  ],
  [
    "単品本格唐揚げ（3個）",
    350,
    {
      "カロリー": "281kcal",
      "たんぱく質": "17g",
      "脂質": "17g",
      "炭水化物": "15.9g",
      "食塩相当量": "1.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara3_hp_230913.html"
  ],
  [
    "単品本格唐揚げ（5個）",
    550,
    {
      "カロリー": "468kcal",
      "たんぱく質": "28.4g",
      "脂質": "28.4g",
      "炭水化物": "26.5g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara5_hp_230913.html"
  ],
  [
    "単品本格唐揚げ（8個）",
    810,
    {
      "カロリー": "749kcal",
      "たんぱく質": "45.4g",
      "脂質": "45.4g",
      "炭水化物": "42.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara8_hp_230913.html"
  ],
  [
    "単品コロッケ（1個）",
    90,
    {
      "カロリー": "157kcal",
      "たんぱく質": "2.2g",
      "脂質": "10.3g",
      "炭水化物": "13.9g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_korokke1_hp_240809.html"
  ],
  [
    "ポテトフライ",
    260,
    {
      "カロリー": "329kcal",
      "たんぱく質": "3.5g",
      "脂質": "15.8g",
      "炭水化物": "40.9g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/side_potatofry_hp_240809.html"
  ],
  [
    "豚汁",
    200,
    {
      "カロリー": "144kcal",
      "たんぱく質": "7.4g",
      "脂質": "7.2g",
      "炭水化物": "12.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tonjiru_hp_240809.html"
  ],
  [
    "単品デミメンチソース",
    130,
    {
      "カロリー": "80kcal",
      "たんぱく質": "0.7g",
      "脂質": "4.7g",
      "炭水化物": "8.7g",
      "食塩相当量": "1.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_demi_menchi_hp_250219.html"
  ],
  [
    "単品明太チーズソース",
    400,
    {
      "カロリー": "284.3kcal",
      "たんぱく質": "12.8g",
      "脂質": "21.7g",
      "炭水化物": "9.4g",
      "食塩相当量": "2.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_mentaio_hp_250205.html"
  ],
  [
    "タルタルソース",
    60,
    {
      "カロリー": "66kcal",
      "たんぱく質": "0.5g",
      "脂質": "6g",
      "炭水化物": "2.4g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tarutaru_hp_240809.html"
  ],
  [
    "単品ふりかけ（さけ）",
    60,
    {
      "カロリー": "11kcal",
      "たんぱく質": "0.5g",
      "脂質": "0.6g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_sake_hp_240809.html"
  ],
  [
    "単品ふりかけ（たまご）",
    60,
    {
      "カロリー": "11kcal",
      "たんぱく質": "0.4g",
      "脂質": "0.5g",
      "炭水化物": "1.2g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_tamago_hp_240809.html"
  ],
  [
    "生玉子",
    80,
    {
      "カロリー": "71kcal",
      "たんぱく質": "5.8g",
      "脂質": "4.8g",
      "炭水化物": "0.1g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_namatamago_hp_240809.html"
  ],
  [
    "トッピングポテサラ",
    90,
    {
      "カロリー": "92kcal",
      "たんぱく質": "1g",
      "脂質": "5.6g",
      "炭水化物": "9.2g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_topping_potesara_hp_240809.html"
  ],
  [
    "ミニポテキャベ",
    100,
    {
      "カロリー": "56kcal",
      "たんぱく質": "1.2g",
      "脂質": "2.9g",
      "炭水化物": "7.2g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_mini_hp_240809.html"
  ],
  [
    "千切りキャベツ",
    100,
    {
      "カロリー": "17kcal",
      "たんぱく質": "1g",
      "脂質": "0.2g",
      "炭水化物": "4.2g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_cabbage_hp_250221.html"
  ],
  [
    "ポテキャベ",
    170,
    {
      "カロリー": "109kcal",
      "たんぱく質": "2.1g",
      "脂質": "5.8g",
      "炭水化物": "13.3g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_hp_240809.html"
  ],
  [
    "トッピングソーセージ（1本）",
    90,
    {
      "カロリー": "87kcal",
      "たんぱく質": "3.5g",
      "脂質": "7.5g",
      "炭水化物": "0.8g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sausage1_hp_240809.html"
  ],
  [
    "納豆",
    100,
    {
      "カロリー": "80kcal",
      "たんぱく質": "6.4g",
      "脂質": "3.9g",
      "炭水化物": "6.4g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_nato_hp_220502.html"
  ],
  [
    "冷奴",
    100,
    {
      "カロリー": "85kcal",
      "たんぱく質": "7.1g",
      "脂質": "4.4g",
      "炭水化物": "4.4g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hiyayakko_hp_220502.html"
  ],
  [
    "鬼おろしポン酢",
    140,
    {
      "カロリー": "32kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.1g",
      "炭水化物": "6.5g",
      "食塩相当量": "1.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oroshipon_hp_240809.html"
  ],
  [
    "味噌ソース",
    140,
    {
      "カロリー": "95kcal",
      "たんぱく質": "2.5g",
      "脂質": "2.5g",
      "炭水化物": "14.5g",
      "食塩相当量": "2.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_miso_sauce_hp_240809.html"
  ],
  [
    "目玉焼き＆ソーセージ",
    210,
    {
      "カロリー": "246kcal",
      "たんぱく質": "15.1g",
      "脂質": "19g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_eggssg_hp_240809.html"
  ],
  [
    "ライス",
    220,
    {
      "カロリー": "343kcal",
      "たんぱく質": "5.5g",
      "脂質": "0.7g",
      "炭水化物": "81.6g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_rice_hp_250221.html"
  ],
  [
    "みそ汁",
    70,
    {
      "カロリー": "28kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.7g",
      "炭水化物": "3.7g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_misoshiru_hp_240809.html"
  ]
];