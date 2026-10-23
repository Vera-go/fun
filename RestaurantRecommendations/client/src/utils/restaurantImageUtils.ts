import { getEvent } from "@/lib/event";
import { tripTheme } from "@/components/Cover";
import { TRIP_PHOTOS } from "./tripPhotos";
import { queryClient } from "@/lib/queryClient";


// 根據餐廳類型對應的照片（確保不同類型有不同照片）
// 依類型對應的照片：每類 10 張，2026/10 從 Unsplash 免費圖庫（Unsplash License）逐張看過內容挑選。
// 同一個活動裡同類型的餐廳不會重複，超過 10 家才會開始用通用照片（default）。
export const typeBasedImages: Record<string, string[]> = {
  "吃到飽": [
    "https://images.unsplash.com/photo-1583338917496-7ea264c374ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1773409414133-9c5d141cb4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1696940823960-ee5242bddc47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1722477936580-84aa10762b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1769638913559-c8c6984428fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1786918517572-fa54893de8c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1592868859049-dfdcd6c07c29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1596252890311-caa6a004a6ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1545447859-096b1442cd4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "火鍋": [
    "https://images.unsplash.com/photo-1614104030967-5ca61a54247b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1784429611794-aecb6ebaef48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1703945530505-2f06e3e1cf97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1682496178113-6275890f1fd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1649477870301-0dac6b5500f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1777113310299-c3e41dec4e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1677030137853-03a83b0bd630?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1662655552348-4ad26f9d4e75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1584509171119-9054d2d7d9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1608229642114-0061d4e6a9ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "燒肉": [
    "https://images.unsplash.com/photo-1773903447504-7408156f5502?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1740895299299-fe11f57507dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1773903238064-b82a5bb99ac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1752555535777-0aed7bc93f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1765267387926-3c0db1cdeee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1759150595639-d128196ab6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1765295218807-2d58d3b01123?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1773903390615-06e8fb34247e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1773903369045-242a4dc87b3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1785636883701-bd4f9e3173c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "熱炒": [
    "https://images.unsplash.com/photo-1566749006386-4cfc0d44f733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1601226809816-b8c32440158a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1603246993190-638a8354b557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1603248595131-08c7d5a53a8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1464500542410-1396074bf230?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1786232455787-8adac1b1f559?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1788603913464-cc204d311c13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1775744118056-f39677289c40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1767324672655-8e0f5e814897?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "合菜": [
    "https://images.unsplash.com/photo-1755742319537-449f661a3190?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1791722697274-225c8eadbd19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1791722697326-d9baedfde3a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1791724099322-c59f7ff53cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1755742319539-f36b308b010c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1755742319437-ddb3e0c1497b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1723853310570-2be58b31dc2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1723853310545-b657f3e36396?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1704409043347-fb32f0b6bdcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1597490101653-8db754021a89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "港式": [
    "https://images.unsplash.com/photo-1604632910793-c0601f361b34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1691995989456-6a77273f9f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1779333277496-a5106680169c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1559667709-eabb5b50117a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1769773662105-bf0b664921d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1607857530521-53448b220fe8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1595424265370-3e02d3e6c10c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1678026582164-24a5460c447a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1596463302369-e74d01db0c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1559329255-2e7cb2e21ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "日式": [
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1770164520620-a5612325635b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1781478990255-f4f61976a1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1602273660127-a0000560a4c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "韓式": [
    "https://images.unsplash.com/photo-1761303506087-9788d0a98e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1771339140258-17f090ef6007?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1661366394743-fe30fe478ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1771384552858-feb0574f958d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1671522636199-3af72349c2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1718777791239-c473e9ce7376?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "泰式": [
    "https://images.unsplash.com/photo-1763647818427-326fa8e6699f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1788016487976-83c66e2d602c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1675150277436-9c7348972c11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1627308595186-e6bb36712645?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1637806930600-37fa8892069d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1679541946014-a47f1ec0dc1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1780246330541-f4e329c5b588?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "義式": [
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1777333033313-e6d72e7fadc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1776810250123-119d15036790?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1767065584295-e5879ad624c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1627042633145-b780d842ba45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "美式": [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1757834787931-ddd70f3379a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1767065703793-7012f5fced19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1713330801172-03f8d1c0dde7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "牛排": [
    "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1761138785048-9dae4abb0a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1558030089-02acba3c214e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1778855400007-37cbd89592ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "鐵板燒": [
    "https://images.unsplash.com/photo-1625300105749-77d295c0f278?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1764520406362-b1673b2213bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1591114320268-fb3aac361d8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1774946480409-645ab291d541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1731407321637-de010c69ceef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1564632302695-ae0485da8b85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1785733690836-6f4f638be83a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1564632302631-c3670e71f579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1785733690832-eabe6e6d5c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1720630253403-df9f5f89aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "海鮮": [
    "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1785304968643-e73c3ad004d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1765100479761-2359e22fbe16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1779333863055-9aaeb540cc4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1651323018466-b36b7df1d2b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1618055301293-494ab4c71f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "居酒屋": [
    "https://images.unsplash.com/photo-1608060146923-7b8ab13e22bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1767265581515-afe9ff46ad76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1617870314635-fc819547ec11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1649591840628-767380a19104?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1643717582997-45650849f0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1783447036642-90a65ff85a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1601351841251-766245326eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1758881906970-0893b7331da0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1727281970324-4bda7bab3073?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "素食": [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1767277672167-18105701959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1759922222212-3657d43bd5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "早午餐": [
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1759216279330-c5a83a0a1ebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1529940122574-0096689bc5cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1782177261793-823b94aa0555?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1670710028442-06a2df4bdf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "咖啡": [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1768405942827-4d15f4a1b32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1772119044027-04e80adeda6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1769114474398-a7aef0625ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1759269106058-a52e5ac35e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "甜點": [
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1761637604927-e3656dc81383?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1759146233677-292a2f1a2236?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1532509334149-d2130d74253c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ],
  "default": [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1778694277039-5cbf0b9a1fcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1565895405140-6b9830a88c19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1565895405127-481853366cf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1772479020020-9bd8d2f577d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1608816042754-d69cb2271bea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1765741836925-5363bbaa6507?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1755811248324-c70c1f10a7fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  ]
};

/**
 * 根據餐廳類型選擇合適的照片
 * @param type 餐廳類型
 * @returns 該類型對應的照片URL
 */
// 聚餐類型快捷鍵裡沒有自己照片的，對應到相近的照片類型
const TYPE_ALIASES: Record<string, string> = {
  "自助餐": "吃到飽", "Buffet": "吃到飽", "buffet": "吃到飽",
  "麻辣鍋": "火鍋", "涮涮鍋": "火鍋", "鍋物": "火鍋", "快炒": "熱炒",
  "台菜": "合菜", "中式": "合菜", "飲茶": "港式", "點心": "港式",
  "壽司": "日式", "拉麵": "日式", "韓國": "韓式", "漢堡": "美式",
  "義大利": "義式", "披薩": "義式", "Pizza": "義式", "pizza": "義式",
  "燒烤": "燒肉", "烤肉": "燒肉", "下午茶": "甜點", "蛋糕": "甜點",
};

/** 這個活動裡其他餐廳已經用掉的照片（從畫面已載入的資料拿） */
function usedInEvent(excludeId?: number): Set<string> {
  const list = queryClient.getQueryData<{ id: number; imageUrl: string }[]>(['/api/votes/restaurants']) || [];
  return new Set(list.filter(r => r.id !== excludeId).map(r => r.imageUrl));
}
const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * 依類型挑照片，同一個活動裡盡量不重複：
 * 先從這個類型的照片挑別家沒用過的；這類用完了，改從通用照片挑沒用過的；全部都用過才允許重複。
 * 編輯時（opts.id）如果原本的照片還適合、也沒跟別家重複，就保留不換。
 * 「換一張」（opts.avoid）：不挑目前這張。
 */
export function getImageByType(type: string, opts: { id?: number; current?: string; avoid?: string } = {}): string {
  // 旅遊地點活動用風景照（依地點類型），餐廳活動用美食照
  const trip = getEvent()?.kind === "trip";
  const library = trip ? TRIP_PHOTOS : typeBasedImages;
  let targetKey = "default";
  if (trip) targetKey = tripTheme(type);
  else {
    // 沒有自己照片的寫法，對應到相近的類型
    for (const [k, v] of Object.entries(TYPE_ALIASES)) if (type.includes(k)) { type = v; break; }
    // 找最相符的類型（關鍵字越長越精確）
    let best = 0;
    for (const key of Object.keys(typeBasedImages)) {
      if (type.includes(key) && key.length > best) { targetKey = key; best = key.length; }
    }
  }
  const images = library[targetKey] || library.default;
  const used = usedInEvent(opts.id);
  if (opts.avoid) used.add(opts.avoid);
  if (opts.current && images.includes(opts.current) && !used.has(opts.current)) return opts.current;
  const fresh = images.filter(img => !used.has(img));
  if (fresh.length) return pick(fresh);
  const freshDefault = library.default.filter(img => !used.has(img));
  return pick(freshDefault.length ? freshDefault : images);
}
