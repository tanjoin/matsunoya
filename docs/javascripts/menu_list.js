const MATSUNOYA_MENU_LIST = [
  [
    "カキフライ（5個）定食",
    1030,
    {
      "カロリー": "894kcal",
      "たんぱく質": "16.9g",
      "脂質": "39.6g",
      "炭水化物": "121.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_260916.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "20.3g",
      "脂質": "52.5g",
      "炭水化物": "133.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_260916.html"
  ],
  [
    "アジフライ（2枚）定食",
    930,
    {
      "カロリー": "925kcal",
      "たんぱく質": "29.4g",
      "脂質": "38.9g",
      "炭水化物": "119.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_260916.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    1030,
    {
      "カロリー": "1072kcal",
      "たんぱく質": "30.7g",
      "脂質": "50.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_260916.html"
  ],
  [
    "超厚切りリブロースかつ＆カキフライ（2個）定食",
    1290,
    {
      "カロリー": "1423kcal",
      "たんぱく質": "47.9g",
      "脂質": "76.9g",
      "炭水化物": "133.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_kaki2_hp_260916.html"
  ],
  [
    "ロースかつ＆アジフライ（1枚）定食",
    1030,
    {
      "カロリー": "1131kcal",
      "たんぱく質": "37.8g",
      "脂質": "53.5g",
      "炭水化物": "129.8g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_260916.html"
  ],
  [
    "超厚切りリブロースかつ＆アジフライ（1枚）定食",
    1290,
    {
      "カロリー": "1483kcal",
      "たんぱく質": "55g",
      "脂質": "79.8g",
      "炭水化物": "136g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_aji_hp_260916.html"
  ],
  [
    "海鮮盛合せ定食（カキ2個・アジ１枚・海老１尾）",
    1030,
    {
      "カロリー": "1042kcal",
      "たんぱく質": "27.7g",
      "脂質": "49.9g",
      "炭水化物": "125.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_hp_260916.html"
  ],
  [
    "カキフライとじ丼 並盛",
    930,
    {
      "カロリー": "922kcal",
      "たんぱく質": "27.7g",
      "脂質": "36.7g",
      "炭水化物": "120g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_260916.html"
  ],
  [
    "カキフライとじ丼 大盛",
    1010,
    {
      "カロリー": "1100kcal",
      "たんぱく質": "31.3g",
      "脂質": "37g",
      "炭水化物": "161.1g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_260916.html"
  ],
  [
    "チーズトマトハヤシライス 並盛",
    780,
    {
      "カロリー": "769kcal",
      "たんぱく質": "16.2g",
      "脂質": "33.9g",
      "炭水化物": "101.5g",
      "食塩相当量": "3.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ch_tmt_hayshi_hp_260909.html"
  ],
  [
    "チーズトマトハヤシライス 大盛",
    930,
    {
      "カロリー": "994kcal",
      "たんぱく質": "19.9g",
      "脂質": "39.6g",
      "炭水化物": "142.4g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ch_tmt_hayshi_hp_260909.html"
  ],
  [
    "ロースかつチーズトマトハヤシライス 並盛",
    990,
    {
      "カロリー": "1211kcal",
      "たんぱく質": "35.1g",
      "脂質": "64.3g",
      "炭水化物": "125.4g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ch_tmt_hayshi_rosu_hp_260909.html"
  ],
  [
    "ロースかつチーズトマトハヤシライス 大盛",
    1140,
    {
      "カロリー": "1436kcal",
      "たんぱく質": "38.8g",
      "脂質": "70g",
      "炭水化物": "166.3g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ch_tmt_hayshi_rosu_hp_260909.html"
  ],
  [
    "超厚切りリブロースかつチーズトマトハヤシライス 並盛",
    1290,
    {
      "カロリー": "1562kcal",
      "たんぱく質": "52.3g",
      "脂質": "90.5g",
      "炭水化物": "131.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ch_tmt_hayshi_ribu_hp_260909.html"
  ],
  [
    "超厚切りリブロースかつチーズトマトハヤシライス 大盛",
    1440,
    {
      "カロリー": "1788kcal",
      "たんぱく質": "55.9g",
      "脂質": "96.2g",
      "炭水化物": "172.5g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ch_tmt_hayshi_ribu_hp_260909.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼 並盛",
    730,
    {
      "カロリー": "851kcal",
      "たんぱく質": "20.7g",
      "脂質": "27.7g",
      "炭水化物": "132.2g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼 大盛",
    810,
    {
      "カロリー": "1007kcal",
      "たんぱく質": "23.2g",
      "脂質": "28g",
      "炭水化物": "169.3g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング鬼おろし 並盛",
    790,
    {
      "カロリー": "861kcal",
      "たんぱく質": "21g",
      "脂質": "27.7g",
      "炭水化物": "134.5g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_oroshi_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング鬼おろし 大盛",
    870,
    {
      "カロリー": "1017kcal",
      "たんぱく質": "23.5g",
      "脂質": "28g",
      "炭水化物": "171.6g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_oroshi_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング半熟玉子 並盛",
    790,
    {
      "カロリー": "928kcal",
      "たんぱく質": "26.7g",
      "脂質": "32.6g",
      "炭水化物": "133.6g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hanjyuku_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング半熟玉子 大盛",
    870,
    {
      "カロリー": "1084kcal",
      "たんぱく質": "29.2g",
      "脂質": "32.9g",
      "炭水化物": "170.7g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hanjyuku_hp_260902.html"
  ],
  [
    "“肉厚”チキン“むね”かつ定食",
    890,
    {
      "カロリー": "1048kcal",
      "たんぱく質": "48.5g",
      "脂質": "43.6g",
      "炭水化物": "121.4g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_nikuatu_mune_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆ロースかつ定食",
    1190,
    {
      "カロリー": "1490kcal",
      "たんぱく質": "67.4g",
      "脂質": "74g",
      "炭水化物": "145.3g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_rosu_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ1尾定食",
    1190,
    {
      "カロリー": "1289kcal",
      "たんぱく質": "54.5g",
      "脂質": "63.6g",
      "炭水化物": "131.1g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi1_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ2尾定食",
    1390,
    {
      "カロリー": "1465kcal",
      "たんぱく質": "59.9g",
      "脂質": "77.5g",
      "炭水化物": "138.4g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi2_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆本格唐揚げ定食",
    1190,
    {
      "カロリー": "1329kcal",
      "たんぱく質": "65.5g",
      "脂質": "60.7g",
      "炭水化物": "137.3g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_kara_hp_260715.html"
  ],
  [
    "海鮮盛合せ定食（イカ・白身魚・海老）",
    1190,
    {
      "カロリー": "1084.3kcal",
      "たんぱく質": "32.4g",
      "脂質": "50.9g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ikashiromiebi_hp_260701.html"
  ],
  [
    "ロースかつ＆イカフライ定食",
    990,
    {
      "カロリー": "1006.7kcal",
      "たんぱく質": "33.4g",
      "脂質": "44.1g",
      "炭水化物": "124.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ika_hp_260701.html"
  ],
  [
    "ロースかつ＆白身魚フライ定食",
    990,
    {
      "カロリー": "1127.4kcal",
      "たんぱく質": "33.8g",
      "脂質": "55g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_shiromi_hp_260701.html"
  ],
  [
    "カキフライ（5個）定食",
    1030,
    {
      "カロリー": "894kcal",
      "たんぱく質": "16.9g",
      "脂質": "39.6g",
      "炭水化物": "121.5g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_260916.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "20.3g",
      "脂質": "52.5g",
      "炭水化物": "133.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_260916.html"
  ],
  [
    "アジフライ（2枚）定食",
    930,
    {
      "カロリー": "925kcal",
      "たんぱく質": "29.4g",
      "脂質": "38.9g",
      "炭水化物": "119.9g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_260916.html"
  ],
  [
    "“肉厚”チキン“むね”かつ定食",
    890,
    {
      "カロリー": "1048kcal",
      "たんぱく質": "48.5g",
      "脂質": "43.6g",
      "炭水化物": "121.4g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_nikuatu_mune_hp_260715.html"
  ],
  [
    "超厚切りリブロースかつ定食",
    1050,
    {
      "カロリー": "1181kcal",
      "たんぱく質": "43.9g",
      "脂質": "58g",
      "炭水化物": "119.7g",
      "食塩相当量": "2.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ribu_hp_260624.html"
  ],
  [
    "超厚切りリブ鬼おろしポン酢ロースかつ定食",
    1150,
    {
      "カロリー": "1213kcal",
      "たんぱく質": "45.3g",
      "脂質": "58.1g",
      "炭水化物": "126.2g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ribu_oni_hp_260624.html"
  ],
  [
    "超厚切りリブ味噌ロースかつ定食",
    1150,
    {
      "カロリー": "1277kcal",
      "たんぱく質": "46.4g",
      "脂質": "60.5g",
      "炭水化物": "134.1g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ribu_miso_hp_260624.html"
  ],
  [
    "うまトマ超厚切りリブロースかつ定食",
    1290,
    {
      "カロリー": "1387kcal",
      "たんぱく質": "52.6g",
      "脂質": "70.3g",
      "炭水化物": "132.9g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_umatoma_ribu_hp_260624.html"
  ],
  [
    "チーズうまトマ超厚切りリブロースかつ定食",
    1390,
    {
      "カロリー": "1546kcal",
      "たんぱく質": "60.7g",
      "脂質": "83.6g",
      "炭水化物": "134.4g",
      "食塩相当量": "6.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ch_umatoma_ribu_oni_hp_260624.html"
  ],
  [
    "うまトマロースかつ定食",
    990,
    {
      "カロリー": "1036kcal",
      "たんぱく質": "35.4g",
      "脂質": "44.1g",
      "炭水化物": "126.7g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_umatoma_rosu_hp_260506.html"
  ],
  [
    "チーズうまトマロースかつ定食",
    1190,
    {
      "カロリー": "1195kcal",
      "たんぱく質": "43.5g",
      "脂質": "57.4g",
      "炭水化物": "128.2g",
      "食塩相当量": "6.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ch_umatoma_rosu_oni_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_oroshipon_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_miso_hp_260506.html"
  ],
  [
    "本格唐揚げ定食（5個）",
    890,
    {
      "カロリー": "994kcal",
      "たんぱく質": "36.4g",
      "脂質": "44.7g",
      "炭水化物": "117.1g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage5_hp_260708.html"
  ],
  [
    "本格唐揚げ定食（8個）",
    1160,
    {
      "カロリー": "1275kcal",
      "たんぱく質": "53.4g",
      "脂質": "61.8g",
      "炭水化物": "133g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage8_hp_260708.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（5個）",
    930,
    {
      "カロリー": "887kcal",
      "たんぱく質": "37.6g",
      "脂質": "30g",
      "炭水化物": "122.5g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage5_hp_260708.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（8個）",
    1190,
    {
      "カロリー": "1168kcal",
      "たんぱく質": "54.6g",
      "脂質": "47g",
      "炭水化物": "138.4g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage8_hp_260708.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    1030,
    {
      "カロリー": "1072kcal",
      "たんぱく質": "30.7g",
      "脂質": "50.7g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_260916.html"
  ],
  [
    "超厚切りリブロースかつ＆カキフライ（2個）定食",
    1290,
    {
      "カロリー": "1423kcal",
      "たんぱく質": "47.9g",
      "脂質": "76.9g",
      "炭水化物": "133.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_kaki2_hp_260916.html"
  ],
  [
    "ロースかつ＆アジフライ（1枚）定食",
    1030,
    {
      "カロリー": "1131kcal",
      "たんぱく質": "37.8g",
      "脂質": "53.5g",
      "炭水化物": "129.8g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_260916.html"
  ],
  [
    "超厚切りリブロースかつ＆アジフライ（1枚）定食",
    1290,
    {
      "カロリー": "1483kcal",
      "たんぱく質": "55g",
      "脂質": "79.8g",
      "炭水化物": "136g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_aji_hp_260916.html"
  ],
  [
    "海鮮盛合せ定食（カキ2個・アジ１枚・海老１尾）",
    1030,
    {
      "カロリー": "1042kcal",
      "たんぱく質": "27.7g",
      "脂質": "49.9g",
      "炭水化物": "125.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ebi1_hp_260916.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆ロースかつ定食",
    1190,
    {
      "カロリー": "1490kcal",
      "たんぱく質": "67.4g",
      "脂質": "74g",
      "炭水化物": "145.3g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_rosu_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ1尾定食",
    1190,
    {
      "カロリー": "1289kcal",
      "たんぱく質": "54.5g",
      "脂質": "63.6g",
      "炭水化物": "131.1g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi1_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ2尾定食",
    1390,
    {
      "カロリー": "1465kcal",
      "たんぱく質": "59.9g",
      "脂質": "77.5g",
      "炭水化物": "138.4g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi2_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆本格唐揚げ定食",
    1190,
    {
      "カロリー": "1329kcal",
      "たんぱく質": "65.5g",
      "脂質": "60.7g",
      "炭水化物": "137.3g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_kara_hp_260715.html"
  ],
  [
    "海鮮盛合せ定食（イカ・白身魚・海老）",
    1190,
    {
      "カロリー": "1084.3kcal",
      "たんぱく質": "32.4g",
      "脂質": "50.9g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ikashiromiebi_hp_260701.html"
  ],
  [
    "ロースかつ＆イカフライ定食",
    990,
    {
      "カロリー": "1006.7kcal",
      "たんぱく質": "33.4g",
      "脂質": "44.1g",
      "炭水化物": "124.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ika_hp_260701.html"
  ],
  [
    "ロースかつ＆白身魚フライ定食",
    990,
    {
      "カロリー": "1127.4kcal",
      "たんぱく質": "33.8g",
      "脂質": "55g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_shiromi_hp_260701.html"
  ],
  [
    "超厚切りリブロースかつ＆海老フライ１尾定食",
    1250,
    {
      "カロリー": "1423kcal",
      "たんぱく質": "49.9g",
      "脂質": "78g",
      "炭水化物": "129.4g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_ebi1_hp_260624.html"
  ],
  [
    "超厚切りリブロースかつ＆海老フライ2尾定食",
    1530,
    {
      "カロリー": "1599kcal",
      "たんぱく質": "55.3g",
      "脂質": "91.9g",
      "炭水化物": "136.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_ebi2_hp_260624.html"
  ],
  [
    "超厚切りリブロースかつ＆本格唐揚げ定食",
    1350,
    {
      "カロリー": "1601kcal",
      "たんぱく質": "61.1g",
      "脂質": "89.9g",
      "炭水化物": "136.7g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_karaage_hp_260708.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_260506.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    990,
    {
      "カロリー": "1249kcal",
      "たんぱく質": "43.9g",
      "脂質": "63.7g",
      "炭水化物": "130.5g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_260708.html"
  ],
  [
    "カキフライとじ丼 並盛",
    930,
    {
      "カロリー": "922kcal",
      "たんぱく質": "27.7g",
      "脂質": "36.7g",
      "炭水化物": "120g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_260916.html"
  ],
  [
    "カキフライとじ丼 大盛",
    1010,
    {
      "カロリー": "1100kcal",
      "たんぱく質": "31.3g",
      "脂質": "37g",
      "炭水化物": "161.1g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_260916.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼 並盛",
    730,
    {
      "カロリー": "851kcal",
      "たんぱく質": "20.7g",
      "脂質": "27.7g",
      "炭水化物": "132.2g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼 大盛",
    810,
    {
      "カロリー": "1007kcal",
      "たんぱく質": "23.2g",
      "脂質": "28g",
      "炭水化物": "169.3g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング鬼おろし 並盛",
    790,
    {
      "カロリー": "861kcal",
      "たんぱく質": "21g",
      "脂質": "27.7g",
      "炭水化物": "134.5g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_oroshi_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング鬼おろし 大盛",
    870,
    {
      "カロリー": "1017kcal",
      "たんぱく質": "23.5g",
      "脂質": "28g",
      "炭水化物": "171.6g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_oroshi_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング半熟玉子 並盛",
    790,
    {
      "カロリー": "928kcal",
      "たんぱく質": "26.7g",
      "脂質": "32.6g",
      "炭水化物": "133.6g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hanjyuku_hp_260902.html"
  ],
  [
    "ロースと野菜の合い盛りタレかつ丼＋トッピング半熟玉子 大盛",
    870,
    {
      "カロリー": "1084kcal",
      "たんぱく質": "29.2g",
      "脂質": "32.9g",
      "炭水化物": "170.7g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_yasai_tare_hanjyuku_hp_260902.html"
  ],
  [
    "超厚切りリブロースかつ丼 並盛",
    1050,
    {
      "カロリー": "1362kcal",
      "たんぱく質": "56.9g",
      "脂質": "67.6g",
      "炭水化物": "126.4g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_hp_260624.html"
  ],
  [
    "超厚切りリブロースかつ丼 大盛",
    1130,
    {
      "カロリー": "1541kcal",
      "たんぱく質": "60.5g",
      "脂質": "67.9g",
      "炭水化物": "167.5g",
      "食塩相当量": "7.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_hp_260624.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_260506.html"
  ],
  [
    "お子様パンケーキプレート",
    500,
    {
      "カロリー": "413kcal",
      "たんぱく質": "4.2g",
      "脂質": "8.5g",
      "炭水化物": "79.5g",
      "食塩相当量": "1.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/sumikko/okosama_pan_hp_251126.html"
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
    "【惣菜セット】ロースかつ１枚＋海老フライ２尾＋ハーフポテトフライ",
    1020,
    {
      "カロリー": "949kcal",
      "たんぱく質": "31.3g",
      "脂質": "66g",
      "炭水化物": "56.8g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_rosu1_ebi2_hp_260729.html"
  ],
  [
    "【惣菜セット】本格唐揚げ３個＋海老フライ２尾＋ハーフポテトフライ",
    980,
    {
      "カロリー": "787kcal",
      "たんぱく質": "29.4g",
      "脂質": "52.7g",
      "炭水化物": "48.7g",
      "食塩相当量": "2.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_kara3_ebi2_hp_260729.html"
  ],
  [
    "【惣菜セット】海老フライ２尾＋コロッケ２個＋ハーフポテトフライ",
    810,
    {
      "カロリー": "820kcal",
      "たんぱく質": "16.8g",
      "脂質": "56.3g",
      "炭水化物": "60.6g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_ebi2_koro2_hp_260729.html"
  ],
  [
    "【惣菜セット】ロースかつ１枚＋本格唐揚げ３個＋ハーフポテトフライ",
    770,
    {
      "カロリー": "877kcal",
      "たんぱく質": "37.5g",
      "脂質": "55.3g",
      "炭水化物": "58g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_rosu1_kara3_hp_260729.html"
  ],
  [
    "【惣菜セット】ロースかつ１枚＋コロッケ２個＋ハーフポテトフライ",
    650,
    {
      "カロリー": "910kcal",
      "たんぱく質": "24.9g",
      "脂質": "58.9g",
      "炭水化物": "69.8g",
      "食塩相当量": "1.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_rosu1_koro2_hp_260729.html"
  ],
  [
    "【惣菜セット】本格唐揚げ３個＋コロッケ２個＋ハーフポテトフライ",
    610,
    {
      "カロリー": "748kcal",
      "たんぱく質": "23g",
      "脂質": "45.6g",
      "炭水化物": "61.7g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_kara3_koro2_hp_260729.html"
  ],
  [
    "単品カキフライ（2個）",
    400,
    {
      "カロリー": "177kcal",
      "たんぱく質": "3.4g",
      "脂質": "12.9g",
      "炭水化物": "11.9g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kaki2_hp_260916.html"
  ],
  [
    "単品アジフライ（1枚）",
    350,
    {
      "カロリー": "236kcal",
      "たんぱく質": "10.5g",
      "脂質": "15.7g",
      "炭水化物": "14g",
      "食塩相当量": "0.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_aji_hp_260916.html"
  ],
  [
    "単品“肉厚”チキン“むね”かつ",
    590,
    {
      "カロリー": "577kcal",
      "たんぱく質": "40.3g",
      "脂質": "33.9g",
      "炭水化物": "30g",
      "食塩相当量": "1.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_nikuatu_mune_hp_260715.html"
  ],
  [
    "単品イカフライ",
    300,
    {
      "カロリー": "111.5kcal",
      "たんぱく質": "6.1g",
      "脂質": "6.2g",
      "炭水化物": "8.3g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ika_hp_260701.html"
  ],
  [
    "単品白身魚フライ",
    300,
    {
      "カロリー": "232.2kcal",
      "たんぱく質": "6.5g",
      "脂質": "17.1g",
      "炭水化物": "12.5g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_shiromi_hp_260701.html"
  ],
  [
    "単品超厚切りリブロースかつ",
    750,
    {
      "カロリー": "793kcal",
      "たんぱく質": "36g",
      "脂質": "56.6g",
      "炭水化物": "30.2g",
      "食塩相当量": "1.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ribu_hp_260624.html"
  ],
  [
    "単品うまトマ超厚切りリブロースかつ",
    990,
    {
      "カロリー": "1000kcal",
      "たんぱく質": "44.7g",
      "脂質": "68.8g",
      "炭水化物": "43.4g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_umatoma_ribu_hp_260624.html"
  ],
  [
    "単品チーズうまトマ超厚切りリブロースかつ",
    1090,
    {
      "カロリー": "1159kcal",
      "たんぱく質": "52.8g",
      "脂質": "82.2g",
      "炭水化物": "44.9g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ch_umatoma__ribu_hp_260624.html"
  ],
  [
    "単品うまトマロースかつ",
    690,
    {
      "カロリー": "648kcal",
      "たんぱく質": "27.5g",
      "脂質": "42.6g",
      "炭水化物": "37.2g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_umatoma_rosu_hp_260506.html"
  ],
  [
    "単品チーズうまトマロースかつ",
    890,
    {
      "カロリー": "807kcal",
      "たんぱく質": "35.6g",
      "脂質": "55.9g",
      "炭水化物": "38.7g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ch_umatoma__rosu_hp_260506.html"
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
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_rosu_nami1_hp_260506.html"
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
    "ハーフポテトフライ",
    130,
    {
      "カロリー": "165kcal",
      "たんぱく質": "1.7g",
      "脂質": "7.9g",
      "炭水化物": "20.4g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/side_half_potatofry_hp_260729.html"
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
    "単品半熟玉子",
    100,
    {
      "カロリー": "71kcal",
      "たんぱく質": "5.8g",
      "脂質": "4.8g",
      "炭水化物": "0.1g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hanjyuku_egg_hp_260902.html"
  ],
  [
    "単品ガーリックバターソース",
    150,
    {
      "カロリー": "83kcal",
      "たんぱく質": "0.3g",
      "脂質": "8.2g",
      "炭水化物": "1.9g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_garibata_hp_260715.html"
  ],
  [
    "単品マヨネーズ",
    80,
    {
      "カロリー": "139kcal",
      "たんぱく質": "0.1g",
      "脂質": "14.8g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_mayo_hp_260708.html"
  ],
  [
    "単品チーズ",
    200,
    {
      "カロリー": "159kcal",
      "たんぱく質": "8.2g",
      "脂質": "13.4g",
      "炭水化物": "1.5g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_cheese_hp_260429.html"
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
    "単品生玉子",
    100,
    {
      "カロリー": "71kcal",
      "たんぱく質": "5.8g",
      "脂質": "4.8g",
      "炭水化物": "0.1g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_namatamago_hp_260902.html"
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
    90,
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