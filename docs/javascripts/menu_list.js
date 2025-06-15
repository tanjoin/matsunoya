const MATSUNOYA_MENU_LIST = [
  [
    "丸太ヒレかつ定食",
    950,
    {
      "カロリー": "796kcal",
      "たんぱく質": "34g",
      "脂質": "23.4g",
      "炭水化物": "117.4g",
      "食塩相当量": "2.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_hire_maruta_hp_250604.html"
  ],
  [
    "鬼おろしポン酢丸太ヒレかつ定食",
    1050,
    {
      "カロリー": "828kcal",
      "たんぱく質": "35.4g",
      "脂質": "23.5g",
      "炭水化物": "123.9g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_hire_maruta_oni_hp_250604.html"
  ],
  [
    "ダブル丸太ヒレかつ定食",
    1550,
    {
      "カロリー": "1205kcal",
      "たんぱく質": "60.2g",
      "脂質": "45.4g",
      "炭水化物": "145.3g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_mori_hire_maruta_w_hp_250604.html"
  ],
  [
    "ロースかつ＆丸太ヒレかつ定食",
    1290,
    {
      "カロリー": "1238kcal",
      "たんぱく質": "52.9g",
      "脂質": "53.8g",
      "炭水化物": "141.4g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_hire_maruta_rosu_hp_250604.html"
  ],
  [
    "国産雪国育ちロースかつ＆丸太ヒレかつ定食",
    1600,
    {
      "カロリー": "1406kcal",
      "たんぱく質": "61.2g",
      "脂質": "67g",
      "炭水化物": "145.4g",
      "食塩相当量": "5.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_hire_maruta_hp_250604.html"
  ],
  [
    "国産雪国育ちロースかつ定食",
    990,
    {
      "カロリー": "997kcal",
      "たんぱく質": "35.1g",
      "脂質": "45g",
      "炭水化物": "117.4g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_rosu_hp_250528.html"
  ],
  [
    "国産雪国育ち鬼おろしポン酢ロースかつ定食",
    1090,
    {
      "カロリー": "1028kcal",
      "たんぱく質": "36.4g",
      "脂質": "45.1g",
      "炭水化物": "124g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_rosu_oni_hp_250528.html"
  ],
  [
    "国産雪国育ち味噌ロースかつ定食",
    1090,
    {
      "カロリー": "1092kcal",
      "たんぱく質": "37.6g",
      "脂質": "47.5g",
      "炭水化物": "131.9g",
      "食塩相当量": "6.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_rosu_miso_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆いつものロースかつ食べ比べ定食",
    1350,
    {
      "カロリー": "1439kcal",
      "たんぱく質": "54g",
      "脂質": "75.4g",
      "炭水化物": "141.4g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_rosu_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆海老フライ（1尾）定食",
    1260,
    {
      "カロリー": "1278kcal",
      "たんぱく質": "52.1g",
      "脂質": "62.1g",
      "炭水化物": "133.3g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ebi1_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆海老フライ（2尾）定食",
    1530,
    {
      "カロリー": "1238kcal",
      "たんぱく質": "41g",
      "脂質": "65g",
      "炭水化物": "127.2g",
      "食塩相当量": "5.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ebi2_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆有頭大海老フライ（1尾）定食",
    1460,
    {
      "カロリー": "1414kcal",
      "たんぱく質": "46.5g",
      "脂質": "78.9g",
      "炭水化物": "134.5g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ooebi1_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆有頭大海老フライ（2尾）定食",
    1930,
    {
      "カロリー": "1316kcal",
      "たんぱく質": "45.5g",
      "脂質": "69.7g",
      "炭水化物": "131.5g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ooebi2_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆唐揚げ定食",
    1260,
    {
      "カロリー": "1569kcal",
      "たんぱく質": "55.4g",
      "脂質": "88.3g",
      "炭水化物": "143.2g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_karaage_hp_250528.html"
  ],
  [
    "丸太ヒレかつ定食",
    950,
    {
      "カロリー": "796kcal",
      "たんぱく質": "34g",
      "脂質": "23.4g",
      "炭水化物": "117.4g",
      "食塩相当量": "2.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_hire_maruta_hp_250604.html"
  ],
  [
    "鬼おろしポン酢丸太ヒレかつ定食",
    1050,
    {
      "カロリー": "828kcal",
      "たんぱく質": "35.4g",
      "脂質": "23.5g",
      "炭水化物": "123.9g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_hire_maruta_oni_hp_250604.html"
  ],
  [
    "国産雪国育ちロースかつ定食",
    990,
    {
      "カロリー": "997kcal",
      "たんぱく質": "35.1g",
      "脂質": "45g",
      "炭水化物": "117.4g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_rosu_hp_250528.html"
  ],
  [
    "国産雪国育ち鬼おろしポン酢ロースかつ定食",
    1090,
    {
      "カロリー": "1028kcal",
      "たんぱく質": "36.4g",
      "脂質": "45.1g",
      "炭水化物": "124g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_rosu_oni_hp_250528.html"
  ],
  [
    "国産雪国育ち味噌ロースかつ定食",
    1090,
    {
      "カロリー": "1092kcal",
      "たんぱく質": "37.6g",
      "脂質": "47.5g",
      "炭水化物": "131.9g",
      "食塩相当量": "6.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_rosu_miso_hp_250528.html"
  ],
  [
    "チキンかつ定食",
    770,
    {
      "カロリー": "871kcal",
      "たんぱく質": "30.4g",
      "脂質": "35.1g",
      "炭水化物": "113.3g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_hp_250221.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    870,
    {
      "カロリー": "902kcal",
      "たんぱく質": "31.8g",
      "脂質": "35.1g",
      "炭水化物": "119.9g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_oni_hp_250221.html"
  ],
  [
    "味噌チキンかつ定食",
    870,
    {
      "カロリー": "966kcal",
      "たんぱく質": "32.9g",
      "脂質": "37.6g",
      "炭水化物": "127.8g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_miso_hp_250221.html"
  ],
  [
    "タルタルチキンかつ定食",
    870,
    {
      "カロリー": "1009kcal",
      "たんぱく質": "31.9g",
      "脂質": "47.1g",
      "炭水化物": "119.4g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_hp_250221.html"
  ],
  [
    "ささみかつ定食",
    750,
    {
      "カロリー": "846kcal",
      "たんぱく質": "36.7g",
      "脂質": "25.7g",
      "炭水化物": "122.1g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_hp_250221.html"
  ],
  [
    "鬼おろしポン酢ささみかつ定食",
    850,
    {
      "カロリー": "812kcal",
      "たんぱく質": "37.5g",
      "脂質": "19.8g",
      "炭水化物": "126.3g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_oni_hp_250221.html"
  ],
  [
    "味噌ささみかつ定食",
    850,
    {
      "カロリー": "876kcal",
      "たんぱく質": "38.7g",
      "脂質": "22.2g",
      "炭水化物": "134.2g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_miso_hp_250221.html"
  ],
  [
    "たっぷりささみかつ定食",
    970,
    {
      "カロリー": "1043kcal",
      "たんぱく質": "50.8g",
      "脂質": "34.8g",
      "炭水化物": "137.2g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami3_hp_250221.html"
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
      "カロリー": "830kcal",
      "たんぱく質": "26.8g",
      "脂質": "31.8g",
      "炭水化物": "113.4g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp_250221.html"
  ],
  [
    "ダブルロースかつ定食",
    1030,
    {
      "カロリー": "1272kcal",
      "たんぱく質": "45.6g",
      "脂質": "62.2g",
      "炭水化物": "137.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_hp_250221.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食",
    770,
    {
      "カロリー": "861kcal",
      "たんぱく質": "28.1g",
      "脂質": "31.9g",
      "炭水化物": "120g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp_250221.html"
  ],
  [
    "ダブル鬼おろしポン酢ロースかつ定食",
    1130,
    {
      "カロリー": "1303kcal",
      "たんぱく質": "47g",
      "脂質": "62.2g",
      "炭水化物": "143.9g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_oroshipon_hp_250221.html"
  ],
  [
    "味噌ロースかつ定食",
    770,
    {
      "カロリー": "925kcal",
      "たんぱく質": "29.3g",
      "脂質": "34.3g",
      "炭水化物": "127.9g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp_250221.html"
  ],
  [
    "ダブル味噌ロースかつ定食",
    1130,
    {
      "カロリー": "1367kcal",
      "たんぱく質": "48.1g",
      "脂質": "64.7g",
      "炭水化物": "151.9g",
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
    "ダブル丸太ヒレかつ定食",
    1550,
    {
      "カロリー": "1205kcal",
      "たんぱく質": "60.2g",
      "脂質": "45.4g",
      "炭水化物": "145.3g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_mori_hire_maruta_w_hp_250604.html"
  ],
  [
    "ロースかつ＆丸太ヒレかつ定食",
    1290,
    {
      "カロリー": "1238kcal",
      "たんぱく質": "52.9g",
      "脂質": "53.8g",
      "炭水化物": "141.4g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_hire_maruta_rosu_hp_250604.html"
  ],
  [
    "国産雪国育ちロースかつ＆丸太ヒレかつ定食",
    1600,
    {
      "カロリー": "1406kcal",
      "たんぱく質": "61.2g",
      "脂質": "67g",
      "炭水化物": "145.4g",
      "食塩相当量": "5.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_hire_maruta_hp_250604.html"
  ],
  [
    "国産雪国育ちロースかつ＆いつものロースかつ食べ比べ定食",
    1350,
    {
      "カロリー": "1439kcal",
      "たんぱく質": "54g",
      "脂質": "75.4g",
      "炭水化物": "141.4g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_rosu_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆海老フライ（1尾）定食",
    1260,
    {
      "カロリー": "1278kcal",
      "たんぱく質": "52.1g",
      "脂質": "62.1g",
      "炭水化物": "133.3g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ebi1_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆海老フライ（2尾）定食",
    1530,
    {
      "カロリー": "1238kcal",
      "たんぱく質": "41g",
      "脂質": "65g",
      "炭水化物": "127.2g",
      "食塩相当量": "5.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ebi2_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆有頭大海老フライ（1尾）定食",
    1460,
    {
      "カロリー": "1414kcal",
      "たんぱく質": "46.5g",
      "脂質": "78.9g",
      "炭水化物": "134.5g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ooebi1_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆有頭大海老フライ（2尾）定食",
    1930,
    {
      "カロリー": "1316kcal",
      "たんぱく質": "45.5g",
      "脂質": "69.7g",
      "炭水化物": "131.5g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_ooebi2_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ＆唐揚げ定食",
    1260,
    {
      "カロリー": "1569kcal",
      "たんぱく質": "55.4g",
      "脂質": "88.3g",
      "炭水化物": "143.2g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_yuki_rosu_karaage_hp_250528.html"
  ],
  [
    "海鮮盛合せ定食（イカ・白身魚・海老）",
    1190,
    {
      "カロリー": "1010kcal",
      "たんぱく質": "34.4g",
      "脂質": "43g",
      "炭水化物": "126.4g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen3_ebi_hp_250507.html"
  ],
  [
    "海鮮盛合せ定食（イカ・白身魚・有頭大海老）",
    1390,
    {
      "カロリー": "1121kcal",
      "たんぱく質": "34.4g",
      "脂質": "55.3g",
      "炭水化物": "126.4g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen3_ooebi_hp_250507.html"
  ],
  [
    "ロースかつ＆イカフライ定食",
    950,
    {
      "カロリー": "1085kcal",
      "たんぱく質": "35g",
      "脂質": "49g",
      "炭水化物": "131g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ika_hp_250507.html"
  ],
  [
    "ロースかつ＆白身魚フライ定食",
    950,
    {
      "カロリー": "1163kcal",
      "たんぱく質": "39.5g",
      "脂質": "53.7g",
      "炭水化物": "135.3g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_shiromi_hp_250507.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    1050,
    {
      "カロリー": "1144kcal",
      "たんぱく質": "47.4g",
      "脂質": "51.3g",
      "炭水化物": "129.2g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_250221.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    1050,
    {
      "カロリー": "1112kcal",
      "たんぱく質": "36.4g",
      "脂質": "55g",
      "炭水化物": "123g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_250221.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1300,
    {
      "カロリー": "1288kcal",
      "たんぱく質": "41.8g",
      "脂質": "68.9g",
      "炭水化物": "130.4g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_250221.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（1尾）定食",
    1250,
    {
      "カロリー": "1189kcal",
      "たんぱく質": "40.8g",
      "脂質": "59.7g",
      "炭水化物": "127.4g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi1_hp_250221.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（2尾）定食",
    1700,
    {
      "カロリー": "1443kcal",
      "たんぱく質": "50.7g",
      "脂質": "78.3g",
      "炭水化物": "139.1g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi2_hp_250221.html"
  ],
  [
    "チキンかつ＆ロースかつ定食",
    1100,
    {
      "カロリー": "1313kcal",
      "たんぱく質": "49.3g",
      "脂質": "65.4g",
      "炭水化物": "137.3g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_rosu_hp_250221.html"
  ],
  [
    "ロースかつ＆ささみかつ（1本）定食",
    900,
    {
      "カロリー": "1092kcal",
      "たんぱく質": "41.4g",
      "脂質": "47g",
      "炭水化物": "130.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami1_hp_250221.html"
  ],
  [
    "ロースかつ＆ささみかつ（2本）定食",
    1130,
    {
      "カロリー": "1288kcal",
      "たんぱく質": "55.6g",
      "脂質": "56.1g",
      "炭水化物": "146.1g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami2_hp_250221.html"
  ],
  [
    "ささみかつ＆海老フライ（1尾）定食",
    1050,
    {
      "カロリー": "1022kcal",
      "たんぱく質": "42.1g",
      "脂質": "39.6g",
      "炭水化物": "129.5g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi1_hp_250221.html"
  ],
  [
    "ささみかつ＆海老フライ（2尾）定食",
    1300,
    {
      "カロリー": "1198kcal",
      "たんぱく質": "47.5g",
      "脂質": "53.5g",
      "炭水化物": "136.8g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi2_hp_250221.html"
  ],
  [
    "ささみかつ＆有頭大海老フライ（1尾）定食",
    1250,
    {
      "カロリー": "1099kcal",
      "たんぱく質": "46.6g",
      "脂質": "44.4g",
      "炭水化物": "133.8g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ooebi1_hp_250221.html"
  ],
  [
    "ささみかつ＆有頭大海老フライ（2尾）定食",
    1700,
    {
      "カロリー": "1353kcal",
      "たんぱく質": "56.5g",
      "脂質": "63g",
      "炭水化物": "145.5g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ooebi2_hp_250221.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（1尾）定食",
    1150,
    {
      "カロリー": "1149kcal",
      "たんぱく質": "37.2g",
      "脂質": "56.5g",
      "炭水化物": "127.5g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi1_hp_250221.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（2尾）定食",
    1630,
    {
      "カロリー": "1402kcal",
      "たんぱく質": "47g",
      "脂質": "75.1g",
      "炭水化物": "139.2g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi2_hp_250221.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    950,
    {
      "カロリー": "1110kcal",
      "たんぱく質": "43.8g",
      "脂質": "48.9g",
      "炭水化物": "129.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_250221.html"
  ],
  [
    "ロースかつ＆海老フライ（1尾）定食",
    950,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "32.7g",
      "脂質": "51.8g",
      "炭水化物": "123.2g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_250221.html"
  ],
  [
    "ロースかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1247kcal",
      "たんぱく質": "38.1g",
      "脂質": "65.7g",
      "炭水化物": "130.5g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_250221.html"
  ],
  [
    "丸太ヒレかつ丼 並盛",
    950,
    {
      "カロリー": "978kcal",
      "たんぱく質": "47g",
      "脂質": "33g",
      "炭水化物": "124.2g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_hire_maruta_hp_250604.html"
  ],
  [
    "丸太ヒレかつ丼 大盛",
    1030,
    {
      "カロリー": "1156kcal",
      "たんぱく質": "50.6g",
      "脂質": "33.3g",
      "炭水化物": "165.3g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_hire_maruta_hp_250604.html"
  ],
  [
    "国産雪国育ちロースかつ丼 並盛",
    990,
    {
      "カロリー": "1178kcal",
      "たんぱく質": "48.1g",
      "脂質": "54.6g",
      "炭水化物": "124.2g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_yuki_rosu_hp_250528.html"
  ],
  [
    "国産雪国育ちロースかつ丼 大盛",
    1070,
    {
      "カロリー": "1357kcal",
      "たんぱく質": "51.7g",
      "脂質": "54.9g",
      "炭水化物": "165.3g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_yuki_rosu_hp_250528.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_250221.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_250221.html"
  ],
  [
    "親子ささみかつ丼 並盛",
    750,
    {
      "カロリー": "962kcal",
      "たんぱく質": "49.2g",
      "脂質": "29.2g",
      "炭水化物": "126.5g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_250221.html"
  ],
  [
    "親子ささみかつ丼 大盛",
    830,
    {
      "カロリー": "1140kcal",
      "たんぱく質": "52.7g",
      "脂質": "29.5g",
      "炭水化物": "167.6g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_250221.html"
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
    "創業ビーフカレー",
    780,
    {
      "カロリー": "737kcal",
      "たんぱく質": "17.1g",
      "脂質": "26g",
      "炭水化物": "109.5g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sougyou_hp_250610.html"
  ],
  [
    "創業ビーフロースかつカレー",
    1000,
    {
      "カロリー": "1179kcal",
      "たんぱく質": "35.9g",
      "脂質": "56.4g",
      "炭水化物": "133.4g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_sougyou_hp_250610.html"
  ],
  [
    "創業ビーフ雪国ロースかつカレー",
    1200,
    {
      "カロリー": "1347kcal",
      "たんぱく質": "44.3g",
      "脂質": "69.6g",
      "炭水化物": "137.4g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_yukiguni_rosu_sougyo_hp_250610.html"
  ],
  [
    "創業ビーフヒレかつカレー",
    1200,
    {
      "カロリー": "1146kcal",
      "たんぱく質": "43.2g",
      "脂質": "48g",
      "炭水化物": "137.4g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_hire_sougyo_hp_250610.html"
  ],
  [
    "創業ビーフ海鮮カレー",
    1200,
    {
      "カロリー": "1435kcal",
      "たんぱく質": "44.2g",
      "脂質": "73.6g",
      "炭水化物": "150.9g",
      "食塩相当量": "7.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_seafood_sougyou_hp_250610.html"
  ],
  [
    "チーズ創業ビーフカレー",
    980,
    {
      "カロリー": "928kcal",
      "たんぱく質": "28.1g",
      "脂質": "41.8g",
      "炭水化物": "110.3g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_cheese_sougyou_hp_250610.html"
  ],
  [
    "単品創業ビーフカレーソース",
    660,
    {
      "カロリー": "360kcal",
      "たんぱく質": "10g",
      "脂質": "24.7g",
      "炭水化物": "22.6g",
      "食塩相当量": "2.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/side_sougyou_hp_250610.html"
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
    "単品丸太ヒレかつ",
    650,
    {
      "カロリー": "409kcal",
      "たんぱく質": "26.2g",
      "脂質": "22g",
      "炭水化物": "27.9g",
      "食塩相当量": "1.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_hire_maruta_hp_250604.html"
  ],
  [
    "単品国産雪国育ちロースかつ",
    750,
    {
      "カロリー": "609kcal",
      "たんぱく質": "27.2g",
      "脂質": "43.6g",
      "炭水化物": "27.9g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_yuki_rosu_hp_250528.html"
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
    "単品白身魚フライ",
    300,
    {
      "カロリー": "226kcal",
      "たんぱく質": "7.1g",
      "脂質": "17.4g",
      "炭水化物": "10.6g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_shiromi_hp_250507.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_chicken_hp_241204.html"
  ],
  [
    "単品ささみかつ（1本）",
    250,
    {
      "カロリー": "196kcal",
      "たんぱく質": "14.1g",
      "脂質": "9.1g",
      "炭水化物": "15.1g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_sasami_hp_241106.html"
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
    "単品創業ビーフカレーソース",
    660,
    {
      "カロリー": "360kcal",
      "たんぱく質": "10g",
      "脂質": "24.7g",
      "炭水化物": "22.6g",
      "食塩相当量": "2.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/side_sougyou_hp_250610.html"
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