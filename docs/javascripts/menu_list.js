const MATSUNOYA_MENU_LIST = [
  [
    "チキンかつ定食",
    730,
    {
      "カロリー": "871kcal",
      "たんぱく質": "30.4g",
      "脂質": "35g",
      "炭水化物": "113.6g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_hp_240918.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    830,
    {
      "カロリー": "904kcal",
      "たんぱく質": "31.8g",
      "脂質": "35.1g",
      "炭水化物": "120.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_oni_hp_240918.html"
  ],
  [
    "味噌チキンかつ定食",
    830,
    {
      "カロリー": "967kcal",
      "たんぱく質": "32.9g",
      "脂質": "37.5g",
      "炭水化物": "128.1g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_miso_hp_240918.html"
  ],
  [
    "タルタルチキンかつ定食",
    830,
    {
      "カロリー": "1010kcal",
      "たんぱく質": "31.8g",
      "脂質": "47.1g",
      "炭水化物": "119.7g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_hp_240918.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    1000,
    {
      "カロリー": "1152kcal",
      "たんぱく質": "47.4g",
      "脂質": "52.1g",
      "炭水化物": "129.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_240918.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    1000,
    {
      "カロリー": "1112kcal",
      "たんぱく質": "36.5g",
      "脂質": "52.8g",
      "炭水化物": "128g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_240918.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1270,
    {
      "カロリー": "1288kcal",
      "たんぱく質": "42.1g",
      "脂質": "64.6g",
      "炭水化物": "139.9g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_240918.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（1尾）定食",
    1200,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "40.8g",
      "脂質": "59.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi1_hp_240918.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（2尾）定食",
    1670,
    {
      "カロリー": "1444kcal",
      "たんぱく質": "50.7g",
      "脂質": "78.3g",
      "炭水化物": "139.4g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi2_hp_240918.html"
  ],
  [
    "チキンかつ＆ロースかつ定食",
    1070,
    {
      "カロリー": "1314kcal",
      "たんぱく質": "49.2g",
      "脂質": "65.3g",
      "炭水化物": "137.9g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_rosu_hp_240918.html"
  ],
  [
    "チキンかつ＆ささみかつ（1本）定食",
    950,
    {
      "カロリー": "1134kcal",
      "たんぱく質": "45.1g",
      "脂質": "50.1g",
      "炭水化物": "131.4g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami1_hp_240918.html"
  ],
  [
    "チキンかつ＆ささみかつ（2本）定食",
    1170,
    {
      "カロリー": "1331kcal",
      "たんぱく質": "59.2g",
      "脂質": "59.2g",
      "炭水化物": "146.7g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami2_hp_240918.html"
  ],
  [
    "チキンかつ＆牛かつ（1枚）定食",
    1090,
    {
      "カロリー": "1218kcal",
      "たんぱく質": "38.8g",
      "脂質": "63.9g",
      "炭水化物": "126.1g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_gyukatu1_hp_240918.html"
  ],
  [
    "チキンかつ＆牛かつ（2枚）定食",
    1390,
    {
      "カロリー": "1415kcal",
      "たんぱく質": "46.9g",
      "脂質": "77.9g",
      "炭水化物": "135g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_gyukatu2_hp_240918.html"
  ],
  [
    "牛かつ定食",
    1090,
    {
      "カロリー": "1128kcal",
      "たんぱく質": "32.5g",
      "脂質": "58.4g",
      "炭水化物": "119.7g",
      "食塩相当量": "3.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_gyukatu_hp_240911.html"
  ],
  [
    "ロースかつ＆牛かつ（1枚）定食",
    990,
    {
      "カロリー": "1177kcal",
      "たんぱく質": "35.1g",
      "脂質": "60.7g",
      "炭水化物": "126.2g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_gyukatu1_rosu_hp_240911.html"
  ],
  [
    "ロースかつ＆牛かつ（2枚）定食",
    1290,
    {
      "カロリー": "1374kcal",
      "たんぱく質": "43.2g",
      "脂質": "74.7g",
      "炭水化物": "135.1g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_gyukatu2_rosu_hp_240911.html"
  ],
  [
    "油淋鶏定食（5個）",
    890,
    {
      "カロリー": "1032kcal",
      "たんぱく質": "38.7 g",
      "脂質": "41.9 g",
      "炭水化物": "130.5g",
      "食塩相当量": "6.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yurinchi5_hp_240828.html"
  ],
  [
    "油淋鶏定食（8個） ",
    1160,
    {
      "カロリー": "1313kcal",
      "たんぱく質": "55.7 g",
      "脂質": "59.0 g",
      "炭水化物": "146.4g",
      "食塩相当量": "8.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yurinchi8_hp_240828.html"
  ],
  [
    "ロースかつ＆油淋鶏定食（3個） ",
    1050,
    {
      "カロリー": "1221kcal",
      "たんぱく質": "45.2 g",
      "脂質": "56.3 g",
      "炭水化物": "138.5g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_yurinchi_hp_240828.html"
  ],
  [
    "チキンかつ定食",
    730,
    {
      "カロリー": "871kcal",
      "たんぱく質": "30.4g",
      "脂質": "35g",
      "炭水化物": "113.6g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_hp_240918.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    830,
    {
      "カロリー": "904kcal",
      "たんぱく質": "31.8g",
      "脂質": "35.1g",
      "炭水化物": "120.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_oni_hp_240918.html"
  ],
  [
    "味噌チキンかつ定食",
    830,
    {
      "カロリー": "967kcal",
      "たんぱく質": "32.9g",
      "脂質": "37.5g",
      "炭水化物": "128.1g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_miso_hp_240918.html"
  ],
  [
    "タルタルチキンかつ定食",
    830,
    {
      "カロリー": "1010kcal",
      "たんぱく質": "31.8g",
      "脂質": "47.1g",
      "炭水化物": "119.7g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_hp_240918.html"
  ],
  [
    "牛かつ定食",
    1090,
    {
      "カロリー": "1128kcal",
      "たんぱく質": "32.5g",
      "脂質": "58.4g",
      "炭水化物": "119.7g",
      "食塩相当量": "3.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_gyukatu_hp_240911.html"
  ],
  [
    "油淋鶏定食（5個）",
    890,
    {
      "カロリー": "1032kcal",
      "たんぱく質": "38.7 g",
      "脂質": "41.9 g",
      "炭水化物": "130.5g",
      "食塩相当量": "6.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yurinchi5_hp_240828.html"
  ],
  [
    "油淋鶏定食（8個） ",
    1160,
    {
      "カロリー": "1313kcal",
      "たんぱく質": "55.7 g",
      "脂質": "59.0 g",
      "炭水化物": "146.4g",
      "食塩相当量": "8.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yurinchi8_hp_240828.html"
  ],
  [
    "ラムかつ定食",
    1290,
    {
      "カロリー": "1216kcal",
      "たんぱく質": "32.1 g",
      "脂質": "64.2g",
      "炭水化物": "131.3g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_lamb_katsu_hp_240821.html"
  ],
  [
    "ささみかつ定食",
    730,
    {
      "カロリー": "847kcal",
      "たんぱく質": "36.7g",
      "脂質": "25.7g",
      "炭水化物": "122.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_hp_240809.html"
  ],
  [
    "鬼おろしポン酢ささみかつ定食",
    830,
    {
      "カロリー": "815kcal",
      "たんぱく質": "37.5g",
      "脂質": "19.7g",
      "炭水化物": "127.1g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_oni_hp_240809.html"
  ],
  [
    "味噌ささみかつ定食",
    830,
    {
      "カロリー": "877kcal",
      "たんぱく質": "38.6g",
      "脂質": "22.1g",
      "炭水化物": "134.7g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_miso_hp_240809.html"
  ],
  [
    "たっぷりささみかつ定食",
    950,
    {
      "カロリー": "1044kcal",
      "たんぱく質": "50.8g",
      "脂質": "34.7g",
      "炭水化物": "137.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami3_hp_240809.html"
  ],
  [
    "有頭大海老フライ定食",
    1240,
    {
      "カロリー": "960kcal",
      "たんぱく質": "28.2g",
      "脂質": "44.8g",
      "炭水化物": "115.2g",
      "食塩相当量": "3.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ooebi_hp_240809.html"
  ],
  [
    "ロースかつ定食",
    630,
    {
      "カロリー": "831kcal",
      "たんぱく質": "26.7g",
      "脂質": "31.8g",
      "炭水化物": "113.8g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp_240809.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食",
    730,
    {
      "カロリー": "864kcal",
      "たんぱく質": "28.1g",
      "脂質": "31.9g",
      "炭水化物": "120.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp_240809.html"
  ],
  [
    "味噌ロースかつ定食",
    730,
    {
      "カロリー": "926kcal",
      "たんぱく質": "29.2g",
      "脂質": "34.3g",
      "炭水化物": "128.3g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp_240809.html"
  ],
  [
    "本格唐揚げ定食（5個）",
    790,
    {
      "カロリー": "855kcal",
      "たんぱく質": "36.3g",
      "脂質": "29.9g",
      "炭水化物": "116g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage5_hp_240809.html"
  ],
  [
    "本格唐揚げ定食（8個）",
    1060,
    {
      "カロリー": "1136kcal",
      "たんぱく質": "53.3g",
      "脂質": "46.9g",
      "炭水化物": "131.8g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage8_hp_240809.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（5個）",
    890,
    {
      "カロリー": "888kcal",
      "たんぱく質": "37.7g",
      "脂質": "30g",
      "炭水化物": "122.9g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage5_hp_240809.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（8個）",
    1160,
    {
      "カロリー": "1169kcal",
      "たんぱく質": "54.7g",
      "脂質": "47g",
      "炭水化物": "138.8g",
      "食塩相当量": "7.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage8_hp_240809.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    1000,
    {
      "カロリー": "1152kcal",
      "たんぱく質": "47.4g",
      "脂質": "52.1g",
      "炭水化物": "129.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_240918.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    1000,
    {
      "カロリー": "1112kcal",
      "たんぱく質": "36.5g",
      "脂質": "52.8g",
      "炭水化物": "128g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_240918.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1270,
    {
      "カロリー": "1288kcal",
      "たんぱく質": "42.1g",
      "脂質": "64.6g",
      "炭水化物": "139.9g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_240918.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（1尾）定食",
    1200,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "40.8g",
      "脂質": "59.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi1_hp_240918.html"
  ],
  [
    "チキンかつ＆有頭大海老フライ（2尾）定食",
    1670,
    {
      "カロリー": "1444kcal",
      "たんぱく質": "50.7g",
      "脂質": "78.3g",
      "炭水化物": "139.4g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ooebi2_hp_240918.html"
  ],
  [
    "チキンかつ＆ロースかつ定食",
    1070,
    {
      "カロリー": "1314kcal",
      "たんぱく質": "49.2g",
      "脂質": "65.3g",
      "炭水化物": "137.9g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_rosu_hp_240918.html"
  ],
  [
    "チキンかつ＆ささみかつ（1本）定食",
    950,
    {
      "カロリー": "1134kcal",
      "たんぱく質": "45.1g",
      "脂質": "50.1g",
      "炭水化物": "131.4g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami1_hp_240918.html"
  ],
  [
    "チキンかつ＆ささみかつ（2本）定食",
    1170,
    {
      "カロリー": "1331kcal",
      "たんぱく質": "59.2g",
      "脂質": "59.2g",
      "炭水化物": "146.7g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami2_hp_240918.html"
  ],
  [
    "チキンかつ＆牛かつ（1枚）定食",
    1090,
    {
      "カロリー": "1218kcal",
      "たんぱく質": "38.8g",
      "脂質": "63.9g",
      "炭水化物": "126.1g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_gyukatu1_hp_240918.html"
  ],
  [
    "チキンかつ＆牛かつ（2枚）定食",
    1390,
    {
      "カロリー": "1415kcal",
      "たんぱく質": "46.9g",
      "脂質": "77.9g",
      "炭水化物": "135g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_gyukatu2_hp_240918.html"
  ],
  [
    "ロースかつ＆牛かつ（1枚）定食",
    990,
    {
      "カロリー": "1177kcal",
      "たんぱく質": "35.1g",
      "脂質": "60.7g",
      "炭水化物": "126.2g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_gyukatu1_rosu_hp_240911.html"
  ],
  [
    "ロースかつ＆牛かつ（2枚）定食",
    1290,
    {
      "カロリー": "1374kcal",
      "たんぱく質": "43.2g",
      "脂質": "74.7g",
      "炭水化物": "135.1g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_gyukatu2_rosu_hp_240911.html"
  ],
  [
    "ロースかつ＆油淋鶏定食（3個） ",
    1050,
    {
      "カロリー": "1221kcal",
      "たんぱく質": "45.2 g",
      "脂質": "56.3 g",
      "炭水化物": "138.5g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_yurinchi_hp_240828.html"
  ],
  [
    "ロースかつ＆ラムかつ（1枚）定食",
    1030,
    {
      "カロリー": "1207kcal",
      "たんぱく質": "35.0 g",
      "脂質": "62.6g",
      "炭水化物": "130.1g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_lamb1_hp_240821.html"
  ],
  [
    "ロースかつ＆ラムかつ（2枚）定食",
    1430,
    {
      "カロリー": "1433kcal",
      "たんぱく質": "43.0 g",
      "脂質": "78.5g",
      "炭水化物": "142.9g",
      "食塩相当量": "6.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_lamb2_hp_240821.html"
  ],
  [
    "ロースかつ＆ささみかつ（1本）定食",
    850,
    {
      "カロリー": "1093kcal",
      "たんぱく質": "41.4g",
      "脂質": "46.9g",
      "炭水化物": "131.5g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami1_hp_240809.html"
  ],
  [
    "ロースかつ＆ささみかつ（2本）定食",
    1070,
    {
      "カロリー": "1290kcal",
      "たんぱく質": "55.5g",
      "脂質": "56g",
      "炭水化物": "146.8g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami2_hp_240809.html"
  ],
  [
    "ささみかつ＆海老フライ（1尾）定食",
    1000,
    {
      "カロリー": "1023kcal",
      "たんぱく質": "42.1g",
      "脂質": "39.6g",
      "炭水化物": "129.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi1_hp_240809.html"
  ],
  [
    "ささみかつ＆海老フライ（2尾）定食",
    1270,
    {
      "カロリー": "1199kcal",
      "たんぱく質": "47.5g",
      "脂質": "53.5g",
      "炭水化物": "137.2g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi2_hp_240809.html"
  ],
  [
    "ささみかつ＆有頭大海老フライ（1尾）定食",
    1200,
    {
      "カロリー": "1101kcal",
      "たんぱく質": "46.6g",
      "脂質": "44.3g",
      "炭水化物": "134.2g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ooebi1_hp_240809.html"
  ],
  [
    "ささみかつ＆有頭大海老フライ（2尾）定食",
    1670,
    {
      "カロリー": "1354kcal",
      "たんぱく質": "56.4g",
      "脂質": "62.9g",
      "炭水化物": "145.9g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ooebi2_hp_240809.html"
  ],
  [
    "ロースかつ＆イカフライ定食",
    870,
    {
      "カロリー": "1011kcal",
      "たんぱく質": "34.3g",
      "脂質": "42.9g",
      "炭水化物": "126.7g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ika_hp_240809.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（1尾）定食",
    1100,
    {
      "カロリー": "1149kcal",
      "たんぱく質": "37.2g",
      "脂質": "56.4g",
      "炭水化物": "127.8g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi1_hp_240809.html"
  ],
  [
    "ロースかつ＆有頭大海老フライ（2尾）定食",
    1570,
    {
      "カロリー": "1403kcal",
      "たんぱく質": "47g",
      "脂質": "75g",
      "炭水化物": "139.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ooebi2_hp_240809.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    900,
    {
      "カロリー": "1111kcal",
      "たんぱく質": "43.8g",
      "脂質": "48.8g",
      "炭水化物": "129.6g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_230913.html"
  ],
  [
    "ダブルロースかつ定食",
    980,
    {
      "カロリー": "1274kcal",
      "たんぱく質": "45.6g",
      "脂質": "62.1g",
      "炭水化物": "138g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_hp_220502.html"
  ],
  [
    "ダブル鬼おろしポン酢ロースかつ定食",
    1080,
    {
      "カロリー": "1307kcal",
      "たんぱく質": "47g",
      "脂質": "62.2g",
      "炭水化物": "145g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_oroshipon_hp_220502.html"
  ],
  [
    "ダブル味噌ロースかつ定食",
    1080,
    {
      "カロリー": "1369kcal",
      "たんぱく質": "48.1g",
      "脂質": "64.6g",
      "炭水化物": "152.5g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_miso_hp_220502.html"
  ],
  [
    "ロースかつ＆海老フライ（1尾）定食",
    900,
    {
      "カロリー": "1072kcal",
      "たんぱく質": "32.7g",
      "脂質": "51.7g",
      "炭水化物": "123.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_220502.html"
  ],
  [
    "ロースかつ＆海老フライ（2尾）定食",
    1170,
    {
      "カロリー": "1248kcal",
      "たんぱく質": "38.1g",
      "脂質": "65.6g",
      "炭水化物": "130.8g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_220502.html"
  ],
  [
    "親子チキンかつ丼 並盛",
    730,
    {
      "カロリー": "1053kcal",
      "たんぱく質": "43.4g",
      "脂質": "44.6g",
      "炭水化物": "120.4g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_240918.html"
  ],
  [
    "親子チキンかつ丼 大盛",
    800,
    {
      "カロリー": "1231kcal",
      "たんぱく質": "47g",
      "脂質": "44.9g",
      "炭水化物": "161.5g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_chicken_hp_240918.html"
  ],
  [
    "親子ささみかつ丼 並盛",
    730,
    {
      "カロリー": "963kcal",
      "たんぱく質": "49.1g",
      "脂質": "29.2g",
      "炭水化物": "127g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_240809.html"
  ],
  [
    "親子ささみかつ丼 大盛",
    800,
    {
      "カロリー": "1142kcal",
      "たんぱく質": "52.7g",
      "脂質": "29.5g",
      "炭水化物": "168.1g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_240809.html"
  ],
  [
    "ロースかつ丼 並盛",
    670,
    {
      "カロリー": "1012kcal",
      "たんぱく質": "39.7g",
      "脂質": "41.3g",
      "炭水化物": "120.5g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_240809.html"
  ],
  [
    "ロースかつ丼 大盛",
    740,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "43.3g",
      "脂質": "41.6g",
      "炭水化物": "161.6g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_240809.html"
  ],
  [
    "味噌ロースかつ丼 並盛",
    670,
    {
      "カロリー": "913kcal",
      "たんぱく質": "28.5g",
      "脂質": "34.1g",
      "炭水化物": "125.1g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_240809.html"
  ],
  [
    "味噌ロースかつ丼 大盛",
    740,
    {
      "カロリー": "1069kcal",
      "たんぱく質": "31g",
      "脂質": "34.4g",
      "炭水化物": "162.2g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_240809.html"
  ],
  [
    "松のやのチキンかつ黒カレー 並盛",
    930,
    {
      "カロリー": "997kcal",
      "たんぱく質": "34.7g",
      "脂質": "43.7g",
      "炭水化物": "120.6g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_chicken_black_hp_240918.html"
  ],
  [
    "松のやのチキンかつ黒カレー 大盛",
    1040,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "38.7g",
      "脂質": "46.2g",
      "炭水化物": "160.6g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_chicken_black_hp_240918.html"
  ],
  [
    "ささみかつ黒カレー 並盛",
    930,
    {
      "カロリー": "973kcal",
      "たんぱく質": "41g",
      "脂質": "34.4g",
      "炭水化物": "129.5g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sasami_black_hp_240809.html"
  ],
  [
    "ささみかつ黒カレー 大盛",
    1040,
    {
      "カロリー": "1165kcal",
      "たんぱく質": "45g",
      "脂質": "36.8g",
      "炭水化物": "169.5g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sasami_black_hp_240809.html"
  ],
  [
    "松のやのロースかつ黒カレー 並盛",
    830,
    {
      "カロリー": "956kcal",
      "たんぱく質": "31.1g",
      "脂質": "40.5g",
      "炭水化物": "120.7g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_black_hp_240809.html"
  ],
  [
    "松のやのロースかつ黒カレー 大盛",
    940,
    {
      "カロリー": "1149kcal",
      "たんぱく質": "35g",
      "脂質": "42.9g",
      "炭水化物": "160.8g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_black_hp_240809.html"
  ],
  [
    "松のやの本格唐揚げ黒カレー 並盛",
    790,
    {
      "カロリー": "860kcal",
      "たんぱく質": "29.8g",
      "脂質": "33.3g",
      "炭水化物": "114.7g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_karaage_black_hp_240809.html"
  ],
  [
    "松のやの本格唐揚げ黒カレー 大盛",
    890,
    {
      "カロリー": "1052kcal",
      "たんぱく質": "33.8g",
      "脂質": "35.7g",
      "炭水化物": "154.7g",
      "食塩相当量": "6.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_karaage_black_hp_240809.html"
  ],
  [
    "松のやの海老フライ黒カレー 並盛",
    1020,
    {
      "カロリー": "931kcal",
      "たんぱく質": "23.6g",
      "脂質": "44g",
      "炭水化物": "113.5g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_ebi_black_hp_240809.html"
  ],
  [
    "松のやの海老フライ黒カレー 大盛",
    1130,
    {
      "カロリー": "1123kcal",
      "たんぱく質": "27.6g",
      "脂質": "46.5g",
      "炭水化物": "153.6g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_ebi_black_hp_240809.html"
  ],
  [
    "松のやのコロッケ黒カレー 並盛",
    690,
    {
      "カロリー": "983kcal",
      "たんぱく質": "18.9g",
      "脂質": "41.2g",
      "炭水化物": "138g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_korokke_black_hp_240809.html"
  ],
  [
    "松のやのコロッケ黒カレー 大盛",
    800,
    {
      "カロリー": "1176kcal",
      "たんぱく質": "22.9g",
      "脂質": "43.6g",
      "炭水化物": "178.1g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_korokke_black_hp_240809.html"
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
    "単品チキンかつ",
    490,
    {
      "カロリー": "484kcal",
      "たんぱく質": "22.5g",
      "脂質": "33.5g",
      "炭水化物": "24.2g",
      "食塩相当量": "1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_chicken_hp_240918.html"
  ],
  [
    "単品牛かつ",
    450,
    {
      "カロリー": "197kcal",
      "たんぱく質": "8.1g",
      "脂質": "14g",
      "炭水化物": "8.9g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_gyukatu_hp_240911.html"
  ],
  [
    "単品ラムかつ",
    400,
    {
      "カロリー": "376kcal",
      "たんぱく質": "8.2 g",
      "脂質": "30.8g",
      "炭水化物": "16.4g",
      "食塩相当量": "2.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_lamb_katsu_hp_240821.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_sasami_hp_240710.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ika_hp_240508.html"
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
    "単品レフォールソース",
    130,
    {
      "カロリー": "150kcal",
      "たんぱく質": "0.2g",
      "脂質": "14.9g",
      "炭水化物": "3.6g",
      "食塩相当量": "0.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_raifort_hp_240911.html"
  ],
  [
    "単品油淋鶏ソース",
    150,
    {
      "カロリー": "175kcal",
      "たんぱく質": "2.4 g",
      "脂質": "12.0 g",
      "炭水化物": "14.6g",
      "食塩相当量": "2.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_yuurinchi_hp_240828.html"
  ],
  [
    "単品レモン",
    30,
    {
      "カロリー": "2kcal",
      "たんぱく質": "0.0 g",
      "脂質": "0.0 g",
      "炭水化物": "0g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_lemon_hp_240828.html"
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
    90,
    {
      "カロリー": "17kcal",
      "たんぱく質": "1g",
      "脂質": "0.2g",
      "炭水化物": "4.2g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_cabbage_hp_240809.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oshinko_hp_240809.html"
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
      "カロリー": "33kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.1g",
      "炭水化物": "7g",
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
    200,
    {
      "カロリー": "343kcal",
      "たんぱく質": "5.5g",
      "脂質": "0.7g",
      "炭水化物": "81.6g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_rice_hp.html"
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