const MATSUNOYA_MENU_LIST = [
  [
    "国産雪国育ち丸太ヒレかつ定食　",
    1090,
    {
      "カロリー": "796kcal",
      "たんぱく質": "34g",
      "脂質": "23.4g",
      "炭水化物": "117.4g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_marutahire_hp_251001.html"
  ],
  [
    "鬼おろしポン酢国産雪国育ち丸太ヒレかつ定食",
    1190,
    {
      "カロリー": "828kcal",
      "たんぱく質": "35.4g",
      "脂質": "23.5g",
      "炭水化物": "123.9g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_marutahire_oni_hp_251001.html"
  ],
  [
    "ダブル国産雪国育ち丸太ヒレかつ定食",
    1890,
    {
      "カロリー": "1205kcal",
      "たんぱく質": "60.2g",
      "脂質": "45.4g",
      "炭水化物": "145.3g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_marutahire_w_hp_251001.html"
  ],
  [
    "ロースかつ＆国産雪国育ち丸太ヒレかつ定食",
    1390,
    {
      "カロリー": "1238kcal",
      "たんぱく質": "52.9g",
      "脂質": "53.8g",
      "炭水化物": "141.4g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_yuki_marutahire_hp_251001.html"
  ],
  [
    "カキフライ（5個）定食",
    990,
    {
      "カロリー": "894.3kcal",
      "たんぱく質": "16.9g",
      "脂質": "39.6g",
      "炭水化物": "121.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_250924.html"
  ],
  [
    "アジフライ（2枚）定食",
    890,
    {
      "カロリー": "925.1kcal",
      "たんぱく質": "29.4g",
      "脂質": "38.9g",
      "炭水化物": "119.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_250924.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1070.8kcal",
      "たんぱく質": "20.3g",
      "脂質": "52.5g",
      "炭水化物": "133.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_250924.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    990,
    {
      "カロリー": "1071.7kcal",
      "たんぱく質": "30.7g",
      "脂質": "50.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_250924.html"
  ],
  [
    "ロースかつ＆アジフライ（1枚）定食",
    990,
    {
      "カロリー": "1131.2kcal",
      "たんぱく質": "37.8g",
      "脂質": "53.5g",
      "炭水化物": "129.8g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_250924.html"
  ],
  [
    "海鮮盛合せ定食（カキ2個・アジ１枚・海老１尾）",
    990,
    {
      "カロリー": "1041.6kcal",
      "たんぱく質": "27.7g",
      "脂質": "49.9g",
      "炭水化物": "125.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_hp_250924.html"
  ],
  [
    "海鮮盛合せ定食（カキ2個・アジ１枚・有頭大海老1尾）",
    1290,
    {
      "カロリー": "1119kcal",
      "たんぱく質": "32.2g",
      "脂質": "54.7g",
      "炭水化物": "129.4g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_hp_250924.html"
  ],
  [
    "紅生姜タルタルチキンかつ定食",
    890,
    {
      "カロリー": "1092kcal",
      "たんぱく質": "33g",
      "脂質": "55g",
      "炭水化物": "122g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_red_hp_250917.html"
  ],
  [
    "バジルタルタルチキンかつ定食",
    890,
    {
      "カロリー": "1098kcal",
      "たんぱく質": "33g",
      "脂質": "55g",
      "炭水化物": "122g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_taru_basio_hp_250917.html"
  ],
  [
    "ローストポーク丼 並盛",
    930,
    {
      "カロリー": "804kcal",
      "たんぱく質": "27.6g",
      "脂質": "38.5g",
      "炭水化物": "88.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_roast_pork_hp_250910.html"
  ],
  [
    "ローストポーク丼 大盛",
    930,
    {
      "カロリー": "991kcal",
      "たんぱく質": "30.6g",
      "脂質": "38.9g",
      "炭水化物": "133.2g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_roast_pork_hp_250910.html"
  ],
  [
    "粒マスタードマヨチキンむねかつ定食",
    890,
    {
      "カロリー": "1036kcal",
      "たんぱく質": "36.6g",
      "脂質": "45.3g",
      "炭水化物": "125.8g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu_hp_250903.html"
  ],
  [
    "鬼おろしポン酢チキンむねかつ定食",
    890,
    {
      "カロリー": "871kcal",
      "たんぱく質": "37.1g",
      "脂質": "26.5g",
      "炭水化物": "126.4g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu_oni_hp_250903.html"
  ],
  [
    "味噌チキンむねかつ定食",
    890,
    {
      "カロリー": "935kcal",
      "たんぱく質": "38.3g",
      "脂質": "28.9g",
      "炭水化物": "134.3g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu_miso_hp_250903.html"
  ],
  [
    "粒マスタードマヨたっぷりチキンむねかつ定食",
    1090,
    {
      "カロリー": "1262kcal",
      "たんぱく質": "50.6g",
      "脂質": "57.7g",
      "炭水化物": "141g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu3_hp_250903.html"
  ],
  [
    "ロースかつ＆粒マスタードマヨチキンむねかつ（1本）定食",
    1020,
    {
      "カロリー": "1252kcal",
      "たんぱく質": "41.6g",
      "脂質": "63.1g",
      "炭水化物": "134.6g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_munekatsu1_hp_250903.html"
  ],
  [
    "ロースかつ＆粒マスタードマヨチキンむねかつ（2本）定食",
    1240,
    {
      "カロリー": "1478kcal",
      "たんぱく質": "55.5g",
      "脂質": "75.6g",
      "炭水化物": "149.8g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_munekatsu2_hp_250903.html"
  ],
  [
    "粒マスタードマヨチキンむねかつ＆唐揚げ定食",
    1140,
    {
      "カロリー": "1317kcal",
      "たんぱく質": "53.6g",
      "脂質": "62.3g",
      "炭水化物": "141.7g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_munekatsu_karaage1_hp_250903.html"
  ],
  [
    "ロースかつ＆サーモンフライ定食",
    970,
    {
      "カロリー": "1141kcal",
      "たんぱく質": "35.6g",
      "脂質": "56.9g",
      "炭水化物": "126.1g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_salmon_rosu_hp_250808.html"
  ],
  [
    "国産雪国育ち丸太ヒレかつ定食　",
    1090,
    {
      "カロリー": "796kcal",
      "たんぱく質": "34g",
      "脂質": "23.4g",
      "炭水化物": "117.4g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_marutahire_hp_251001.html"
  ],
  [
    "鬼おろしポン酢国産雪国育ち丸太ヒレかつ定食",
    1190,
    {
      "カロリー": "828kcal",
      "たんぱく質": "35.4g",
      "脂質": "23.5g",
      "炭水化物": "123.9g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_marutahire_oni_hp_251001.html"
  ],
  [
    "カキフライ（5個）定食",
    990,
    {
      "カロリー": "894.3kcal",
      "たんぱく質": "16.9g",
      "脂質": "39.6g",
      "炭水化物": "121.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_250924.html"
  ],
  [
    "アジフライ（2枚）定食",
    890,
    {
      "カロリー": "925.1kcal",
      "たんぱく質": "29.4g",
      "脂質": "38.9g",
      "炭水化物": "119.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_250924.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1070.8kcal",
      "たんぱく質": "20.3g",
      "脂質": "52.5g",
      "炭水化物": "133.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_250924.html"
  ],
  [
    "紅生姜タルタルチキンかつ定食",
    890,
    {
      "カロリー": "1092kcal",
      "たんぱく質": "33g",
      "脂質": "55g",
      "炭水化物": "122g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_red_hp_250917.html"
  ],
  [
    "バジルタルタルチキンかつ定食",
    890,
    {
      "カロリー": "1098kcal",
      "たんぱく質": "33g",
      "脂質": "55g",
      "炭水化物": "122g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_taru_basio_hp_250917.html"
  ],
  [
    "粒マスタードマヨチキンむねかつ定食",
    890,
    {
      "カロリー": "1036kcal",
      "たんぱく質": "36.6g",
      "脂質": "45.3g",
      "炭水化物": "125.8g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu_hp_250903.html"
  ],
  [
    "鬼おろしポン酢チキンむねかつ定食",
    890,
    {
      "カロリー": "871kcal",
      "たんぱく質": "37.1g",
      "脂質": "26.5g",
      "炭水化物": "126.4g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu_oni_hp_250903.html"
  ],
  [
    "味噌チキンむねかつ定食",
    890,
    {
      "カロリー": "935kcal",
      "たんぱく質": "38.3g",
      "脂質": "28.9g",
      "炭水化物": "134.3g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu_miso_hp_250903.html"
  ],
  [
    "粒マスタードマヨたっぷりチキンむねかつ定食",
    1090,
    {
      "カロリー": "1262kcal",
      "たんぱく質": "50.6g",
      "脂質": "57.7g",
      "炭水化物": "141g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_munekatsu3_hp_250903.html"
  ],
  [
    "チキンかつ定食",
    790,
    {
      "カロリー": "871kcal",
      "たんぱく質": "30.4g",
      "脂質": "35.1g",
      "炭水化物": "113.3g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_hp_250813.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    890,
    {
      "カロリー": "902kcal",
      "たんぱく質": "31.8g",
      "脂質": "35.1g",
      "炭水化物": "119.9g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_oni_hp_250813.html"
  ],
  [
    "味噌チキンかつ定食",
    890,
    {
      "カロリー": "966kcal",
      "たんぱく質": "32.9g",
      "脂質": "37.6g",
      "炭水化物": "127.8g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_miso_hp_250813.html"
  ],
  [
    "タルタルチキンかつ定食",
    890,
    {
      "カロリー": "1009kcal",
      "たんぱく質": "31.9g",
      "脂質": "47.1g",
      "炭水化物": "119.4g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_hp_250813.html"
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
    690,
    {
      "カロリー": "830kcal",
      "たんぱく質": "26.8g",
      "脂質": "31.8g",
      "炭水化物": "113.4g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp_250808.html"
  ],
  [
    "ダブルロースかつ定食",
    1050,
    {
      "カロリー": "1272kcal",
      "たんぱく質": "45.6g",
      "脂質": "62.2g",
      "炭水化物": "137.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_hp_250808.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食",
    790,
    {
      "カロリー": "861kcal",
      "たんぱく質": "28.1g",
      "脂質": "31.9g",
      "炭水化物": "120g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp_250808.html"
  ],
  [
    "ダブル鬼おろしポン酢ロースかつ定食",
    1150,
    {
      "カロリー": "1303kcal",
      "たんぱく質": "47g",
      "脂質": "62.2g",
      "炭水化物": "143.9g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_oroshipon_hp_250808.html"
  ],
  [
    "味噌ロースかつ定食",
    790,
    {
      "カロリー": "925kcal",
      "たんぱく質": "29.3g",
      "脂質": "34.3g",
      "炭水化物": "127.9g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp_250808.html"
  ],
  [
    "ダブル味噌ロースかつ定食",
    1150,
    {
      "カロリー": "1367kcal",
      "たんぱく質": "48.1g",
      "脂質": "64.7g",
      "炭水化物": "151.9g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_miso_hp_250808.html"
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
    "ダブル国産雪国育ち丸太ヒレかつ定食",
    1890,
    {
      "カロリー": "1205kcal",
      "たんぱく質": "60.2g",
      "脂質": "45.4g",
      "炭水化物": "145.3g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_marutahire_w_hp_251001.html"
  ],
  [
    "ロースかつ＆国産雪国育ち丸太ヒレかつ定食",
    1390,
    {
      "カロリー": "1238kcal",
      "たんぱく質": "52.9g",
      "脂質": "53.8g",
      "炭水化物": "141.4g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_yuki_marutahire_hp_251001.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    990,
    {
      "カロリー": "1071.7kcal",
      "たんぱく質": "30.7g",
      "脂質": "50.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_250924.html"
  ],
  [
    "ロースかつ＆アジフライ（1枚）定食",
    990,
    {
      "カロリー": "1131.2kcal",
      "たんぱく質": "37.8g",
      "脂質": "53.5g",
      "炭水化物": "129.8g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_250924.html"
  ],
  [
    "海鮮盛合せ定食（カキ2個・アジ１枚・海老１尾）",
    990,
    {
      "カロリー": "1041.6kcal",
      "たんぱく質": "27.7g",
      "脂質": "49.9g",
      "炭水化物": "125.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_hp_250924.html"
  ],
  [
    "海鮮盛合せ定食（カキ2個・アジ１枚・有頭大海老1尾）",
    1290,
    {
      "カロリー": "1119kcal",
      "たんぱく質": "32.2g",
      "脂質": "54.7g",
      "炭水化物": "129.4g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ooebi1_hp_250924.html"
  ],
  [
    "ロースかつ＆粒マスタードマヨチキンむねかつ（1本）定食",
    1020,
    {
      "カロリー": "1252kcal",
      "たんぱく質": "41.6g",
      "脂質": "63.1g",
      "炭水化物": "134.6g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_munekatsu1_hp_250903.html"
  ],
  [
    "ロースかつ＆粒マスタードマヨチキンむねかつ（2本）定食",
    1240,
    {
      "カロリー": "1478kcal",
      "たんぱく質": "55.5g",
      "脂質": "75.6g",
      "炭水化物": "149.8g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_munekatsu2_hp_250903.html"
  ],
  [
    "粒マスタードマヨチキンむねかつ＆唐揚げ定食",
    1140,
    {
      "カロリー": "1317kcal",
      "たんぱく質": "53.6g",
      "脂質": "62.3g",
      "炭水化物": "141.7g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_munekatsu_karaage1_hp_250903.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    1070,
    {
      "カロリー": "1144kcal",
      "たんぱく質": "47.4g",
      "脂質": "51.3g",
      "炭水化物": "129.2g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_250813.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    1070,
    {
      "カロリー": "1112kcal",
      "たんぱく質": "36.4g",
      "脂質": "55g",
      "炭水化物": "123g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_250813.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1320,
    {
      "カロリー": "1288kcal",
      "たんぱく質": "41.8g",
      "脂質": "68.9g",
      "炭水化物": "130.4g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_250813.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（1尾）定食",
    1270,
    {
      "カロリー": "1189kcal",
      "たんぱく質": "40.8g",
      "脂質": "59.7g",
      "炭水化物": "127.4g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi1_hp_250813.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（2尾）定食",
    1720,
    {
      "カロリー": "1443kcal",
      "たんぱく質": "50.7g",
      "脂質": "78.3g",
      "炭水化物": "139.1g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi2_hp_250813.html"
  ],
  [
    "チキンかつ＆ロースかつ定食",
    1120,
    {
      "カロリー": "1313kcal",
      "たんぱく質": "49.3g",
      "脂質": "65.4g",
      "炭水化物": "137.3g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_rosu_hp_250813.html"
  ],
  [
    "ロースかつ＆サーモンフライ定食",
    970,
    {
      "カロリー": "1141kcal",
      "たんぱく質": "35.6g",
      "脂質": "56.9g",
      "炭水化物": "126.1g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_salmon_rosu_hp_250808.html"
  ],
  [
    "ロースかつ＆イカフライ定食",
    970,
    {
      "カロリー": "1085kcal",
      "たんぱく質": "35g",
      "脂質": "49g",
      "炭水化物": "131g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ika_hp_250808.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（1尾）定食",
    1170,
    {
      "カロリー": "1149kcal",
      "たんぱく質": "37.2g",
      "脂質": "56.5g",
      "炭水化物": "127.5g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi1_hp_250808.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（2尾）定食",
    1650,
    {
      "カロリー": "1402kcal",
      "たんぱく質": "47g",
      "脂質": "75.1g",
      "炭水化物": "139.2g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi2_hp_250808.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    970,
    {
      "カロリー": "1110kcal",
      "たんぱく質": "43.8g",
      "脂質": "48.9g",
      "炭水化物": "129.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_250808.html"
  ],
  [
    "ロースかつ＆海老フライ（1尾）定食",
    970,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "32.7g",
      "脂質": "51.8g",
      "炭水化物": "123.2g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_250808.html"
  ],
  [
    "ロースかつ＆海老フライ（2尾）定食",
    1250,
    {
      "カロリー": "1247kcal",
      "たんぱく質": "38.1g",
      "脂質": "65.7g",
      "炭水化物": "130.5g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_250808.html"
  ],
  [
    "国産雪国育ち丸太ヒレかつ丼 並盛",
    1090,
    {
      "カロリー": "978kcal",
      "たんぱく質": "47g",
      "脂質": "33g",
      "炭水化物": "124.2g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_yuki_marutahire_hp_251001.html"
  ],
  [
    "国産雪国育ち丸太ヒレかつ丼 大盛",
    1170,
    {
      "カロリー": "1156kcal",
      "たんぱく質": "50.6g",
      "脂質": "33.3g",
      "炭水化物": "165.3g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_yuki_marutahire_hp_251001.html"
  ],
  [
    "カキフライとじ丼 並盛",
    890,
    {
      "カロリー": "922kcal",
      "たんぱく質": "27.7g",
      "脂質": "36.7g",
      "炭水化物": "120g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_250924.html"
  ],
  [
    "カキフライとじ丼 大盛",
    970,
    {
      "カロリー": "1100.5kcal",
      "たんぱく質": "31.3g",
      "脂質": "37g",
      "炭水化物": "161.1g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_250924.html"
  ],
  [
    "ローストポーク丼 並盛",
    930,
    {
      "カロリー": "804kcal",
      "たんぱく質": "27.6g",
      "脂質": "38.5g",
      "炭水化物": "88.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_roast_pork_hp_250910.html"
  ],
  [
    "ローストポーク丼 大盛",
    930,
    {
      "カロリー": "991kcal",
      "たんぱく質": "30.6g",
      "脂質": "38.9g",
      "炭水化物": "133.2g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_roast_pork_hp_250910.html"
  ],
  [
    "チキンむねかつ丼 並盛",
    830,
    {
      "カロリー": "1020kcal",
      "たんぱく質": "48.8g",
      "脂質": "36g",
      "炭水化物": "126.6g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_munekatsu_hp_250903.html"
  ],
  [
    "チキンむねかつ丼 大盛",
    910,
    {
      "カロリー": "1199kcal",
      "たんぱく質": "52.4g",
      "脂質": "36.3g",
      "炭水化物": "167.7g",
      "食塩相当量": "7.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_munekatsu_hp_250903.html"
  ],
  [
    "親子チキンかつ丼 並盛",
    750,
    {
      "カロリー": "1052kcal",
      "たんぱく質": "43.4g",
      "脂質": "44.6g",
      "炭水化物": "120.1g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_250813.html"
  ],
  [
    "親子チキンかつ丼 大盛",
    830,
    {
      "カロリー": "1230kcal",
      "たんぱく質": "47g",
      "脂質": "44.9g",
      "炭水化物": "161.2g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_250813.html"
  ],
  [
    "ロースかつ丼 並盛",
    690,
    {
      "カロリー": "1011kcal",
      "たんぱく質": "39.8g",
      "脂質": "41.4g",
      "炭水化物": "120.2g",
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
      "脂質": "41.7g",
      "炭水化物": "161.3g",
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
      "脂質": "34.2g",
      "炭水化物": "124.8g",
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
      "脂質": "34.5g",
      "炭水化物": "161.9g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_250221.html"
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
    "単品国産雪国育ち丸太ヒレかつ",
    850,
    {
      "カロリー": "409kcal",
      "たんぱく質": "26.2g",
      "脂質": "22g",
      "炭水化物": "27.9g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_yuki_marutahire_hp_251001.html"
  ],
  [
    "単品カキフライ（2個）",
    400,
    {
      "カロリー": "242kcal",
      "たんぱく質": "3.9g",
      "脂質": "18.9g",
      "炭水化物": "14.2g",
      "食塩相当量": "1.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kaki2_hp_250924.html"
  ],
  [
    "単品アジフライ（1枚）",
    350,
    {
      "カロリー": "301.5kcal",
      "たんぱく質": "11g",
      "脂質": "21.7g",
      "炭水化物": "16.4g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_aji_hp_250924.html"
  ],
  [
    "単品チキンむねかつ",
    250,
    {
      "カロリー": "226kcal",
      "たんぱく質": "13.9g",
      "脂質": "12.5g",
      "炭水化物": "15.2g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_munekatsu_hp_250903.html"
  ],
  [
    "単品チキンかつ",
    490,
    {
      "カロリー": "483kcal",
      "たんぱく質": "22.5g",
      "脂質": "33.6g",
      "炭水化物": "23.8g",
      "食塩相当量": "1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_chicken_hp_250813.html"
  ],
  [
    "単品サーモンフライ",
    300,
    {
      "カロリー": "246kcal",
      "たんぱく質": "8.3g",
      "脂質": "19.1g",
      "炭水化物": "10.3g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_salmon_hp_250618.html"
  ],
  [
    "単品イカフライ",
    300,
    {
      "カロリー": "115kcal",
      "たんぱく質": "7.1g",
      "脂質": "5.1g",
      "炭水化物": "10.6g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ika_hp_250507.html"
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
      "カロリー": "442kcal",
      "たんぱく質": "18.9g",
      "脂質": "30.3g",
      "炭水化物": "23.9g",
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
    "単品紅生姜タルタル",
    150,
    {
      "カロリー": "203kcal",
      "たんぱく質": "1.8g",
      "脂質": "19.8g",
      "炭水化物": "4.9g",
      "食塩相当量": "1.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_taru_red_hp_250917.html"
  ],
  [
    "単品バジルタルタル",
    150,
    {
      "カロリー": "209kcal",
      "たんぱく質": "1.8g",
      "脂質": "20.3g",
      "炭水化物": "4.9g",
      "食塩相当量": "1.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_taru_basi_hp_250917.html"
  ],
  [
    "単品粒マスタードマヨソース",
    150,
    {
      "カロリー": "197kcal",
      "たんぱく質": "0.8g",
      "脂質": "18.8g",
      "炭水化物": "6g",
      "食塩相当量": "1.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_mustard_mayo_hp_250903.html"
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
    "浅漬けお新香",
    100,
    {
      "カロリー": "17kcal",
      "たんぱく質": "0.2g",
      "脂質": "0g",
      "炭水化物": "3.8g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oshinko_hp_250618.html"
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