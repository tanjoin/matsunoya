const MATSUNOYA_MENU_LIST = [
  [
    "カキフライ（4個）定食",
    930,
    {
      "カロリー": "841kcal",
      "たんぱく質": "16.7g",
      "脂質": "37.1g",
      "炭水化物": "107.8g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki4_hp_230927.html"
  ],
  [
    "カキフライ（5個）定食",
    1050,
    {
      "カロリー": "933kcal",
      "たんぱく質": "18.8g",
      "脂質": "43.7g",
      "炭水化物": "113.5g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_230927.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1116kcal",
      "たんぱく質": "23g",
      "脂質": "57.1g",
      "炭水化物": "124.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_230927.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    980,
    {
      "カロリー": "1113kcal",
      "たんぱく質": "34.8g",
      "脂質": "55.8g",
      "炭水化物": "115.5g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_230927.html"
  ],
  [
    "上ロースかつ＆カキフライ（2個）定食",
    1080,
    {
      "カロリー": "1198kcal",
      "たんぱく質": "47.3g",
      "脂質": "58.9g",
      "炭水化物": "117.2g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jourosu_kaki_hp_230927.html"
  ],
  [
    "チキンかつ＆カキフライ（2個）定食",
    990,
    {
      "カロリー": "1140kcal",
      "たんぱく質": "35.1g",
      "脂質": "57g",
      "炭水化物": "120.6g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_kaki_hp_230927.html"
  ],
  [
    "海鮮3種（カキフライ2個・アジフライ1枚・海老フライ1尾）盛合せ定食",
    1090,
    {
      "カロリー": "996kcal",
      "たんぱく質": "27.9g",
      "脂質": "44.9g",
      "炭水化物": "117.7g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen3_ebi1_hp_230927.html"
  ],
  [
    "カキフライとじ丼",
    890,
    {
      "カロリー": "979kcal",
      "たんぱく質": "29.8g",
      "脂質": "37.8g",
      "炭水化物": "123.2g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_230927.html"
  ],
  [
    "赤サルサソースチキンかつ定食",
    790,
    {
      "カロリー": "948kcal",
      "たんぱく質": "31.7g",
      "脂質": "40.2g",
      "炭水化物": "113.7g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aka_chicken_hp_230920.html"
  ],
  [
    "黒麻婆ソースチキンかつ定食",
    790,
    {
      "カロリー": "1004kcal",
      "たんぱく質": "37.8g",
      "脂質": "43.5g",
      "炭水化物": "113.6g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kuro_chicken_hp_230920.html"
  ],
  [
    "アジフライ（2枚）定食",
    790,
    {
      "カロリー": "893kcal",
      "たんぱく質": "29.6g",
      "脂質": "35.3g",
      "炭水化物": "111.9g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_230920.html"
  ],
  [
    "ロースかつ＆アジフライ定食",
    880,
    {
      "カロリー": "1139kcal",
      "たんぱく質": "41.3g",
      "脂質": "54.9g",
      "炭水化物": "117.6g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_230920.html"
  ],
  [
    "上ロースかつ＆アジフライ定食",
    980,
    {
      "カロリー": "1224kcal",
      "たんぱく質": "53.7g",
      "脂質": "58g",
      "炭水化物": "119.3g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jourosu_aji_hp_230920.html"
  ],
  [
    "チキンかつ＆アジフライ定食",
    890,
    {
      "カロリー": "1166kcal",
      "たんぱく質": "41.6g",
      "脂質": "56.1g",
      "炭水化物": "122.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_aji_hp_230920.html"
  ],
  [
    "チキンかつ定食",
    690,
    {
      "カロリー": "865kcal",
      "たんぱく質": "30.3g",
      "脂質": "34.7g",
      "炭水化物": "106.7g",
      "食塩相当量": "2.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_hp_230913.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    790,
    {
      "カロリー": "898kcal",
      "たんぱく質": "31.7g",
      "脂質": "34.8g",
      "炭水化物": "113.6g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_oni_hp_230913.html"
  ],
  [
    "味噌チキンかつ定食",
    790,
    {
      "カロリー": "960kcal",
      "たんぱく質": "32.8g",
      "脂質": "37.2g",
      "炭水化物": "121.1g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_miso_hp_230913.html"
  ],
  [
    "タルタルチキンかつ定食",
    790,
    {
      "カロリー": "1057kcal",
      "たんぱく質": "31.9g",
      "脂質": "52.5g",
      "炭水化物": "113g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_taru_hp_230913.html"
  ],
  [
    "チキンかつ＆ささみかつ（1本）定食",
    890,
    {
      "カロリー": "1226kcal",
      "たんぱく質": "45.5g",
      "脂質": "58.3g",
      "炭水化物": "127.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami1_hp_230913.html"
  ],
  [
    "チキンかつ＆ささみかつ（2本）定食",
    1090,
    {
      "カロリー": "1462kcal",
      "たんぱく質": "60.3g",
      "脂質": "73g",
      "炭水化物": "138.5g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami2_hp_230913.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    960,
    {
      "カロリー": "1118kcal",
      "たんぱく質": "35.4g",
      "脂質": "52.2g",
      "炭水化物": "124g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_230913.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1247kcal",
      "たんぱく質": "40.2g",
      "脂質": "60.9g",
      "炭水化物": "131.8g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_230913.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    960,
    {
      "カロリー": "1187kcal",
      "たんぱく質": "46.9g",
      "脂質": "54.7g",
      "炭水化物": "124.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_230913.html"
  ],
  [
    "カキフライ（4個）定食",
    930,
    {
      "カロリー": "841kcal",
      "たんぱく質": "16.7g",
      "脂質": "37.1g",
      "炭水化物": "107.8g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki4_hp_230927.html"
  ],
  [
    "カキフライ（5個）定食",
    1050,
    {
      "カロリー": "933kcal",
      "たんぱく質": "18.8g",
      "脂質": "43.7g",
      "炭水化物": "113.5g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_230927.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1116kcal",
      "たんぱく質": "23g",
      "脂質": "57.1g",
      "炭水化物": "124.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_230927.html"
  ],
  [
    "赤サルサソースチキンかつ定食",
    790,
    {
      "カロリー": "948kcal",
      "たんぱく質": "31.7g",
      "脂質": "40.2g",
      "炭水化物": "113.7g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aka_chicken_hp_230920.html"
  ],
  [
    "黒麻婆ソースチキンかつ定食",
    790,
    {
      "カロリー": "1004kcal",
      "たんぱく質": "37.8g",
      "脂質": "43.5g",
      "炭水化物": "113.6g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kuro_chicken_hp_230920.html"
  ],
  [
    "アジフライ（2枚）定食",
    790,
    {
      "カロリー": "893kcal",
      "たんぱく質": "29.6g",
      "脂質": "35.3g",
      "炭水化物": "111.9g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_230920.html"
  ],
  [
    "チキンかつ定食",
    690,
    {
      "カロリー": "865kcal",
      "たんぱく質": "30.3g",
      "脂質": "34.7g",
      "炭水化物": "106.7g",
      "食塩相当量": "2.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_hp_230913.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    790,
    {
      "カロリー": "898kcal",
      "たんぱく質": "31.7g",
      "脂質": "34.8g",
      "炭水化物": "113.6g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_oni_hp_230913.html"
  ],
  [
    "味噌チキンかつ定食",
    790,
    {
      "カロリー": "960kcal",
      "たんぱく質": "32.8g",
      "脂質": "37.2g",
      "炭水化物": "121.1g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_miso_hp_230913.html"
  ],
  [
    "タルタルチキンかつ定食",
    790,
    {
      "カロリー": "1057kcal",
      "たんぱく質": "31.9g",
      "脂質": "52.5g",
      "炭水化物": "113g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_katsu_taru_hp_230913.html"
  ],
  [
    "ささみかつ定食",
    690,
    {
      "カロリー": "948kcal",
      "たんぱく質": "37.9g",
      "脂質": "39.8g",
      "炭水化物": "107.2g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami2_hp_230621.html"
  ],
  [
    "鬼おろしポン酢ささみかつ定食",
    790,
    {
      "カロリー": "889kcal",
      "たんぱく質": "38.7g",
      "脂質": "31.1g",
      "炭水化物": "111.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_oroshi_pon_hp_230621.html"
  ],
  [
    "味噌ささみかつ定食",
    790,
    {
      "カロリー": "951kcal",
      "たんぱく質": "39.8g",
      "脂質": "33.5g",
      "炭水化物": "119.2g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_miso_hp_230621.html"
  ],
  [
    "たっぷりささみかつ定食",
    890,
    {
      "カロリー": "1185kcal",
      "たんぱく質": "52.8g",
      "脂質": "54.6g",
      "炭水化物": "118.4g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami3_hp_230621.html"
  ],
  [
    "上ロースかつ定食",
    690,
    {
      "カロリー": "922kcal",
      "たんぱく質": "42.4g",
      "脂質": "36.6g",
      "炭水化物": "103.3g",
      "食塩相当量": "3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_jourosu_hp_221221.html"
  ],
  [
    "鬼おろしポン酢上ロースかつ定食",
    790,
    {
      "カロリー": "955kcal",
      "たんぱく質": "43.8g",
      "脂質": "36.7g",
      "炭水化物": "110.2g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_jourosu_oroshipon_hp_221221.html"
  ],
  [
    "味噌上ロースかつ定食",
    790,
    {
      "カロリー": "1018kcal",
      "たんぱく質": "44.9g",
      "脂質": "39.1g",
      "炭水化物": "117.8g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_jourosu_miso_hp_221221.html"
  ],
  [
    "松ロースかつ御膳",
    890,
    {
      "カロリー": "1101kcal",
      "たんぱく質": "49g",
      "脂質": "46g",
      "炭水化物": "120.1g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_matsu_rosu_hp_221221.html"
  ],
  [
    "ロースかつ定食",
    590,
    {
      "カロリー": "838kcal",
      "たんぱく質": "30g",
      "脂質": "33.5g",
      "炭水化物": "101.6g",
      "食塩相当量": "2.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食",
    690,
    {
      "カロリー": "871kcal",
      "たんぱく質": "31.4g",
      "脂質": "33.6g",
      "炭水化物": "108.5g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp.html"
  ],
  [
    "味噌ロースかつ定食",
    690,
    {
      "カロリー": "933kcal",
      "たんぱく質": "32.5g",
      "脂質": "36g",
      "炭水化物": "116g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp.html"
  ],
  [
    "本格唐揚げ定食（5個）",
    790,
    {
      "カロリー": "866kcal",
      "たんぱく質": "35.8g",
      "脂質": "34.9g",
      "炭水化物": "99.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage5_hp_230913.html"
  ],
  [
    "本格唐揚げ定食（8個）",
    1060,
    {
      "カロリー": "1156kcal",
      "たんぱく質": "52.7g",
      "脂質": "55g",
      "炭水化物": "110.4g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage8_hp_230913.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（5個）",
    890,
    {
      "カロリー": "899kcal",
      "たんぱく質": "37.2g",
      "脂質": "35g",
      "炭水化物": "106.8g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage5_hp_230913.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（8個）",
    1160,
    {
      "カロリー": "1189kcal",
      "たんぱく質": "54.1g",
      "脂質": "55.1g",
      "炭水化物": "117.3g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage8_hp_230913.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    980,
    {
      "カロリー": "1113kcal",
      "たんぱく質": "34.8g",
      "脂質": "55.8g",
      "炭水化物": "115.5g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_230927.html"
  ],
  [
    "上ロースかつ＆カキフライ（2個）定食",
    1080,
    {
      "カロリー": "1198kcal",
      "たんぱく質": "47.3g",
      "脂質": "58.9g",
      "炭水化物": "117.2g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jourosu_kaki_hp_230927.html"
  ],
  [
    "チキンかつ＆カキフライ（2個）定食",
    990,
    {
      "カロリー": "1140kcal",
      "たんぱく質": "35.1g",
      "脂質": "57g",
      "炭水化物": "120.6g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_kaki_hp_230927.html"
  ],
  [
    "海鮮3種（カキフライ2個・アジフライ1枚・海老フライ1尾）盛合せ定食",
    1090,
    {
      "カロリー": "996kcal",
      "たんぱく質": "27.9g",
      "脂質": "44.9g",
      "炭水化物": "117.7g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen3_ebi1_hp_230927.html"
  ],
  [
    "ロースかつ＆アジフライ定食",
    880,
    {
      "カロリー": "1139kcal",
      "たんぱく質": "41.3g",
      "脂質": "54.9g",
      "炭水化物": "117.6g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_230920.html"
  ],
  [
    "上ロースかつ＆アジフライ定食",
    980,
    {
      "カロリー": "1224kcal",
      "たんぱく質": "53.7g",
      "脂質": "58g",
      "炭水化物": "119.3g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jourosu_aji_hp_230920.html"
  ],
  [
    "チキンかつ＆アジフライ定食",
    890,
    {
      "カロリー": "1166kcal",
      "たんぱく質": "41.6g",
      "脂質": "56.1g",
      "炭水化物": "122.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_aji_hp_230920.html"
  ],
  [
    "チキンかつ＆ささみかつ（1本）定食",
    890,
    {
      "カロリー": "1226kcal",
      "たんぱく質": "45.5g",
      "脂質": "58.3g",
      "炭水化物": "127.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami1_hp_230913.html"
  ],
  [
    "チキンかつ＆ささみかつ（2本）定食",
    1090,
    {
      "カロリー": "1462kcal",
      "たんぱく質": "60.3g",
      "脂質": "73g",
      "炭水化物": "138.5g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_sasami2_hp_230913.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    960,
    {
      "カロリー": "1118kcal",
      "たんぱく質": "35.4g",
      "脂質": "52.2g",
      "炭水化物": "124g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_230913.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1247kcal",
      "たんぱく質": "40.2g",
      "脂質": "60.9g",
      "炭水化物": "131.8g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_230913.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    960,
    {
      "カロリー": "1187kcal",
      "たんぱく質": "46.9g",
      "脂質": "54.7g",
      "炭水化物": "124.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_230913.html"
  ],
  [
    "ロースかつ＆ささみかつ（1本）定食",
    790,
    {
      "カロリー": "1167kcal",
      "たんぱく質": "45.4g",
      "脂質": "57.2g",
      "炭水化物": "115.2g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami1_hp_230621.html"
  ],
  [
    "ロースかつ＆ささみかつ（2本）定食",
    990,
    {
      "カロリー": "1403kcal",
      "たんぱく質": "60.3g",
      "脂質": "71.9g",
      "炭水化物": "126.4g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami2_hp_230621.html"
  ],
  [
    "ささみかつ＆海老フライ（1尾）定食",
    960,
    {
      "カロリー": "1077kcal",
      "たんぱく質": "42.7g",
      "脂質": "48.5g",
      "炭水化物": "115.1g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi1_hp_230621.html"
  ],
  [
    "ささみかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1206kcal",
      "たんぱく質": "47.5g",
      "脂質": "57.2g",
      "炭水化物": "122.9g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi2_hp_230621.html"
  ],
  [
    "上ロースかつ＆ささみかつ（1本）定食",
    890,
    {
      "カロリー": "1251kcal",
      "たんぱく質": "57.9g",
      "脂質": "60.3g",
      "炭水化物": "116.9g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jyorosu_sasami1_hp_230621.html"
  ],
  [
    "上ロースかつ＆ささみかつ（2本）定食",
    1090,
    {
      "カロリー": "1488kcal",
      "たんぱく質": "72.7g",
      "脂質": "75g",
      "炭水化物": "128.1g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jyorosu_sasami2_hp_230621.html"
  ],
  [
    "上ロースかつ＆海老フライ（1尾）定食",
    960,
    {
      "カロリー": "1143kcal",
      "たんぱく質": "47.8g",
      "脂質": "54.2g",
      "炭水化物": "113.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jourosu_ebi1_hp_221221.html"
  ],
  [
    "上ロースかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1272kcal",
      "たんぱく質": "52.6g",
      "脂質": "62.9g",
      "炭水化物": "121.5g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jourosu_ebi2_hp_221221.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    860,
    {
      "カロリー": "1127kcal",
      "たんぱく質": "46.9g",
      "脂質": "53.6g",
      "炭水化物": "112.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_230913.html"
  ],
  [
    "上ロースかつ＆本格唐揚げ定食",
    960,
    {
      "カロリー": "1212kcal",
      "たんぱく質": "59.3g",
      "脂質": "56.7g",
      "炭水化物": "113.8g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_jourosu_karaage_hp_230913.html"
  ],
  [
    "ダブルロースかつ定食",
    880,
    {
      "カロリー": "1293kcal",
      "たんぱく質": "52.3g",
      "脂質": "65.6g",
      "炭水化物": "120.7g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_hp_220502.html"
  ],
  [
    "ダブル鬼おろしポン酢ロースかつ定食",
    980,
    {
      "カロリー": "1326kcal",
      "たんぱく質": "53.7g",
      "脂質": "65.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "5.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_oroshipon_hp_220502.html"
  ],
  [
    "ダブル味噌ロースかつ定食",
    980,
    {
      "カロリー": "1388kcal",
      "たんぱく質": "54.8g",
      "脂質": "68.1g",
      "炭水化物": "135.2g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_miso_hp_220502.html"
  ],
  [
    "ロースかつ＆海老フライ（1尾）定食",
    860,
    {
      "カロリー": "1059kcal",
      "たんぱく質": "35.4g",
      "脂質": "51.1g",
      "炭水化物": "111.9g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_220502.html"
  ],
  [
    "ロースかつ＆海老フライ（2尾）定食",
    1130,
    {
      "カロリー": "1187kcal",
      "たんぱく質": "40.2g",
      "脂質": "59.8g",
      "炭水化物": "119.7g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_220502.html"
  ],
  [
    "カキフライとじ丼",
    890,
    {
      "カロリー": "979kcal",
      "たんぱく質": "29.8g",
      "脂質": "37.8g",
      "炭水化物": "123.2g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_230927.html"
  ],
  [
    "親子ささみかつ丼",
    690,
    {
      "カロリー": "1086kcal",
      "たんぱく質": "51.1g",
      "脂質": "40.6g",
      "炭水化物": "122.6g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_oyako_sasami_hp_230621.html"
  ],
  [
    "上ロースかつ丼",
    730,
    {
      "カロリー": "1153kcal",
      "たんぱく質": "56.2g",
      "脂質": "46.3g",
      "炭水化物": "121.2g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_jourosu_hp_221221.html"
  ],
  [
    "味噌上ロースかつ丼",
    730,
    {
      "カロリー": "1055kcal",
      "たんぱく質": "44.9g",
      "脂質": "39.1g",
      "炭水化物": "125.8g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_jourosu_miso_hp_230201.html"
  ],
  [
    "ロースかつ丼",
    630,
    {
      "カロリー": "1068kcal",
      "たんぱく質": "43.7g",
      "脂質": "43.2g",
      "炭水化物": "119.5g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_221228.html"
  ],
  [
    "味噌ロースかつ丼",
    630,
    {
      "カロリー": "970kcal",
      "たんぱく質": "32.5g",
      "脂質": "36g",
      "炭水化物": "124g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_221228.html"
  ],
  [
    "ささみかつカレー",
    690,
    {
      "カロリー": "1625kcal",
      "たんぱく質": "44.5g",
      "脂質": "76.6g",
      "炭水化物": "183.7g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sasami_hp_230621.html"
  ],
  [
    "\"松のや\"の上ロースかつカレー",
    770,
    {
      "カロリー": "1599kcal",
      "たんぱく質": "49g",
      "脂質": "73.4g",
      "炭水化物": "179.7g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_jourosu_hp_230201.html"
  ],
  [
    "“松のや”のコロッケカレー",
    590,
    {
      "カロリー": "1382kcal",
      "たんぱく質": "20.9g",
      "脂質": "52.8g",
      "炭水化物": "200.4g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_koroke_hp_220810.html"
  ],
  [
    "“松のや”の本格唐揚げカレー",
    670,
    {
      "カロリー": "1441kcal",
      "たんぱく質": "31.8g",
      "脂質": "67.2g",
      "炭水化物": "171.8g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_karaage_hp_230913.html"
  ],
  [
    "“松のや”のロースかつカレー",
    670,
    {
      "カロリー": "1514kcal",
      "たんぱく質": "36.6g",
      "脂質": "70.3g",
      "炭水化物": "178g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_hp_221228.html"
  ],
  [
    "“松のや”の海老フライカレー",
    900,
    {
      "カロリー": "1409kcal",
      "たんぱく質": "24.4g",
      "脂質": "64.5g",
      "炭水化物": "177g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_ebi_hp_220502.html"
  ],
  [
    "お子様プレート",
    480,
    {
      "カロリー": "651kcal",
      "たんぱく質": "15.4g",
      "脂質": "21.2g",
      "炭水化物": "97.5g",
      "食塩相当量": "1.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/sumikko/ageage_okosama_hp_220330_nn.html"
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
    "単品カキフライ（2個）",
    400,
    {
      "カロリー": "183kcal",
      "たんぱく質": "4.2g",
      "脂質": "13.4g",
      "炭水化物": "11.5g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kaki2_hp_230927.html"
  ],
  [
    "単品アジフライ",
    300,
    {
      "カロリー": "209kcal",
      "たんぱく質": "10.6g",
      "脂質": "12.5g",
      "炭水化物": "13.5g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_aji_hp_230920.html"
  ],
  [
    "単品チキンかつ",
    450,
    {
      "カロリー": "482kcal",
      "たんぱく質": "22.6g",
      "脂質": "33.2g",
      "炭水化物": "24.3g",
      "食塩相当量": "1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_chicken_katsu_hp_230913.html"
  ],
  [
    "単品ささみかつ（1本）",
    230,
    {
      "カロリー": "237kcal",
      "たんぱく質": "14.8g",
      "脂質": "14.7g",
      "炭水化物": "11.2g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_sasami_hp_230621.html"
  ],
  [
    "単品上ロースかつ（1枚）",
    450,
    {
      "カロリー": "540kcal",
      "たんぱく質": "34.8g",
      "脂質": "35.2g",
      "炭水化物": "20.9g",
      "食塩相当量": "1.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_jourosu_hp_221221.html"
  ],
  [
    "単品コロッケ（1個）",
    80,
    {
      "カロリー": "107kcal",
      "たんぱく質": "2.2g",
      "脂質": "4.9g",
      "炭水化物": "13.9g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_korokke1_hp_220502.html"
  ],
  [
    "単品海老フライ（1尾）",
    300,
    {
      "カロリー": "129kcal",
      "たんぱく質": "4.8g",
      "脂質": "8.7g",
      "炭水化物": "7.8g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ebi1_hp_220502.html"
  ],
  [
    "単品ロースかつ（1枚）",
    350,
    {
      "カロリー": "455kcal",
      "たんぱく質": "22.3g",
      "脂質": "32.1g",
      "炭水化物": "19.2g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_rosu_nami1_hp.html"
  ],
  [
    "単品本格唐揚げ（1個）",
    120,
    {
      "カロリー": "97kcal",
      "たんぱく質": "5.6g",
      "脂質": "6.7g",
      "炭水化物": "3.5g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_honkaku_kara1_hp_230830.html"
  ],
  [
    "単品本格唐揚げ（3個）",
    350,
    {
      "カロリー": "290kcal",
      "たんぱく質": "16.9g",
      "脂質": "20.1g",
      "炭水化物": "10.5g",
      "食塩相当量": "1.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara3_hp_230913.html"
  ],
  [
    "単品本格唐揚げ（5個）",
    550,
    {
      "カロリー": "483kcal",
      "たんぱく質": "28.2g",
      "脂質": "33.4g",
      "炭水化物": "17.5g",
      "食塩相当量": "2.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara5_hp_230913.html"
  ],
  [
    "単品本格唐揚げ（8個）",
    810,
    {
      "カロリー": "773kcal",
      "たんぱく質": "45.1g",
      "脂質": "53.5g",
      "炭水化物": "28g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara8_hp_230913.html"
  ],
  [
    "ポテトフライ",
    250,
    {
      "カロリー": "329kcal",
      "たんぱく質": "3.5g",
      "脂質": "15.8g",
      "炭水化物": "40.9g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/side_potatofry_hp_220502.html"
  ],
  [
    "松のや特製オードブル",
    1980,
    {
      "カロリー": "2609kcal",
      "たんぱく質": "96.6g",
      "脂質": "167.5g",
      "炭水化物": "177.3g",
      "食塩相当量": "9.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_odoburu_hp_220330.html"
  ],
  [
    "単品赤サルサソース",
    130,
    {
      "カロリー": "83kcal",
      "たんぱく質": "1.4g",
      "脂質": "5.5g",
      "炭水化物": "7g",
      "食塩相当量": "1.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_aka_hp_230920.html"
  ],
  [
    "単品黒麻婆ソース",
    130,
    {
      "カロリー": "139kcal",
      "たんぱく質": "7.5g",
      "脂質": "8.8g",
      "炭水化物": "6.9g",
      "食塩相当量": "1.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_kuro_hp_230920.html"
  ],
  [
    "タルタルソース",
    50,
    {
      "カロリー": "92kcal",
      "たんぱく質": "0.6g",
      "脂質": "8.9g",
      "炭水化物": "2.5g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tarutaru_hp_200819.html"
  ],
  [
    "単品ふりかけ（さけ）",
    50,
    {
      "カロリー": "7kcal",
      "たんぱく質": "0.2g",
      "脂質": "0.2g",
      "炭水化物": "0.9g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_sake_hp_221012.html"
  ],
  [
    "単品ふりかけ（たまご）",
    50,
    {
      "カロリー": "10kcal",
      "たんぱく質": "0.3g",
      "脂質": "0.2g",
      "炭水化物": "1.7g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_tamago_hp_221012.html"
  ],
  [
    "生玉子",
    70,
    {
      "カロリー": "71kcal",
      "たんぱく質": "5.8g",
      "脂質": "4.8g",
      "炭水化物": "0.1g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_namatamago_hp_220502.html"
  ],
  [
    "トッピングポテサラ",
    70,
    {
      "カロリー": "92kcal",
      "たんぱく質": "1g",
      "脂質": "5.6g",
      "炭水化物": "9.2g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_topping_potesara_hp_200819.html"
  ],
  [
    "ミニポテキャベ",
    80,
    {
      "カロリー": "57kcal",
      "たんぱく質": "1.2g",
      "脂質": "2.9g",
      "炭水化物": "7.2g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_mini_hp_220502.html"
  ],
  [
    "千切りキャベツ",
    80,
    {
      "カロリー": "18kcal",
      "たんぱく質": "1g",
      "脂質": "0.2g",
      "炭水化物": "4.2g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_cabbage_hp_220502.html"
  ],
  [
    "ポテキャベ",
    150,
    {
      "カロリー": "110kcal",
      "たんぱく質": "2.1g",
      "脂質": "5.8g",
      "炭水化物": "13.3g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_hp_220502.html"
  ],
  [
    "トッピングソーセージ（1本）",
    80,
    {
      "カロリー": "75kcal",
      "たんぱく質": "3.5g",
      "脂質": "6.1g",
      "炭水化物": "0.8g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sausage1_hp_220502.html"
  ],
  [
    "浅漬けお新香",
    90,
    {
      "カロリー": "17kcal",
      "たんぱく質": "0.2g",
      "脂質": "0g",
      "炭水化物": "3.8g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oshinko_hp_220502.html"
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
    130,
    {
      "カロリー": "33kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.1g",
      "炭水化物": "7g",
      "食塩相当量": "1.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oroshipon_hp_220502.html"
  ],
  [
    "味噌ソース",
    130,
    {
      "カロリー": "95kcal",
      "たんぱく質": "2.5g",
      "脂質": "2.5g",
      "炭水化物": "14.5g",
      "食塩相当量": "2.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_miso_sauce_hp_220502.html"
  ],
  [
    "豚汁",
    180,
    {
      "カロリー": "144kcal",
      "たんぱく質": "7.4g",
      "脂質": "7.2g",
      "炭水化物": "12.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tonjiru_hp_200819.html"
  ],
  [
    "目玉焼き＆ソーセージ",
    200,
    {
      "カロリー": "251kcal",
      "たんぱく質": "15.1g",
      "脂質": "19.5g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_eggssg_hp_200819.html"
  ],
  [
    "ライス",
    200,
    {
      "カロリー": "722kcal",
      "たんぱく質": "10.8g",
      "脂質": "1.3g",
      "炭水化物": "159.5g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_rice_hp.html"
  ],
  [
    "みそ汁",
    60,
    {
      "カロリー": "28kcal",
      "たんぱく質": "1.6g",
      "脂質": "0.7g",
      "炭水化物": "4g",
      "食塩相当量": "1.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_misoshiru_hp_200819.html"
  ]
];