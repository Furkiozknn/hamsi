# Hamsi · Stil kılavuzu

Bu kılavuz, oyunun şarkı videosundan çıkarıldı ve depo sayfasının (README, `docs/banner.svg`) görsel dilini belirler.
Aynı tarif diğer oyunların depo sayfalarına da uygulanır (en alttaki bölüme bakın).

- **Kaynak:** [`social-videos` deposu, `2026-11/2026-11-19-sarki-hamsi.mp4`](https://github.com/Furkiozknn/social-videos/blob/master/2026-11/2026-11-19-sarki-hamsi.mp4)
  (1080x1920, 30 kare/sn, 34,5 sn).
- **Yöntem:** Videodan eşit aralıklı 16 kare çıkarıldı ve hepsine tek tek bakıldı; renk ölçümü ve kare seçimi için ek kareler alındı. Renkler tam
  çözünürlüklü karelerden piksel ölçümüyle alındı (bölge ortancası; yazılarda en parlak ya da en doygun pikseller).
  Video sıkıştırması yüzünden ölçümler birkaç birim oynayabilir.
- **Kural:** Burada yalnız karelerde görülen şeyler yazılıdır. Emin olunamayan her şey **doğrulanmadı** diye işaretlidir.
  Ses, müzik ve seslendirme incelenmedi (yalnız görüntüye bakıldı).

## 1. Videonun akışı

| Bölüm | Yaklaşık süre | Ne görülüyor |
|---|---|---|
| Açılış | 0–2,5 sn | Geniş sahne (tekne, balıkçı kız, hamsi, liman), ortada büyük başlık ve alt başlık |
| Sor-cevap | 2,5–14 sn | Yakın plan karakterler; İngilizce soru, Türkçe cevap: *Boat?* KAYIK! · *Light?* IŞIK! · *Mixed?* KARIŞIK! · *Hungry?* · *Enough?* |
| Oyun görüntüsü | 14–32 sn arası, karakter sahneleriyle dönüşümlü | Ortada oyun kaydı, üstte Türkçe şarkı sözü: "Sonara bak, sürü yakın / ağ açık!", "Daire çiz, halkayı…", "Kayık dolu, hepsi…" |
| Karakter sahneleri | aynı aralıkta | Fırtına sahnesi ("Fırtına…"), "Otuz günde borcu…", "Hamsi, hamsi,", "Fırtına var, limanda ışık!", "Türkçe kolay mı? Sorma sen" |
| Kapanış kartı | son 2–3 sn | Düz lacivert kart: rozet, oyun adı, iki görsel kartı, OYNA düğmesi, adres |

Sözlerin tamamı karelerden okunamadı; yukarıdakiler yalnız karelerde görülen parçalardır.

## 2. Renk paleti (ölçülen)

### Arayüz ve yazı renkleri

| Ad | Kod | Nerede ölçüldü |
|---|---|---|
| Gece laciverti | `#0D283A` | Kapanış kartı zemini, üst |
| Derin lacivert | `#0A2233` | Kapanış kartı zemini, alt |
| Dalga 1 | `#1A445A` | Kapanış kartı, üst dalga şeridi |
| Dalga 2 | `#123950` | Kapanış kartı, alt dalga şeridi |
| Altın sarısı | `#F5C330` | Rozet, OYNA düğmesi, kart çerçeveleri (ölçümler `#F1BF30`–`#F9C22E`) |
| Alt başlık sarısı | `#F9C11E` | Kapanış kartında "Karadeniz'de hamsi avı" |
| Sönük altın | `#9B8834` | Kapanış kartındaki nokta sırası |
| Krem | `#F8F7F1` | Kapanış kartındaki oyun adı; şarkı sözü ve şerit yazısı (`#F3F4F5`–`#F9F7F3`) |
| Kehribar | `#E59F09` | Açılıştaki alt başlık "HAMSİ · KARADENİZ TÜRKÇESİ"; şarkı sözünde vurgulu kelime (`#E0A112`) |
| Şerit zemini | `#1B1F25` | Üstteki "Turkish is easy… at sea?" şeridi |
| Şerit kırmızısı | `#E82225` | Şeridin altındaki ince çizgi |
| Çip zemini | `#181B19` | Soldaki "HAMSİ · OYUN ŞARKISI" etiketi (ölçümler `#181B19`–`#1F1F23`) |
| Çip yazısı | `#CEA318` | Aynı etiketin harfleri |
| Adres zemini | `#0D1A23` | Kapanış kartındaki adres etiketi; yazısı `#FBFCF8` |

Sarı zemin üstündeki koyu yazı (rozet, OYNA düğmesi) çok koyu, siyaha yakın bir ton; ölçüm `#10230F`–`#15200F`
çıktı ama sarı kenar bulaşması yüzünden tam ton **doğrulanmadı**. Banner'da gece laciverti `#0D283A` kullanıldı.

### Sahne renkleri (3B görüntülerden)

| Ad | Kod | Nerede ölçüldü |
|---|---|---|
| Yağmurluk sarısı | `#C69B1D` | Balıkçı kızın şapkası ve yağmurluğu (gölgeli orta ton) |
| Tekne mavisi | `#3F6C79` | Teknenin eskimiş mavi boyası |
| Akşam göğü | `#1E4266` | Açılış sahnesinde gökyüzü; koyu ucu `#142332` |
| Liman suyu | `#3B514B` | Açılış sahnesinde deniz (yeşile çalan gri) |
| Lamba ışığı | `#E39F10` | Liman lambaları ve fener |
| Hamsi gümüşü | `#687F9C` | Balığın gövdesi (gölgeli ton) |
| Fırtına | `#0B1C22`, `#3C5253`, `#48626A` | Fırtına sahnesinin baskın tonları |

Genel izlenim: soğuk, koyu mavi-yeşil bir akşam; sıcaklık sarı yağmurluktan, lambalardan ve altın sarısı yazılardan gelir.

## 3. Yazı

Yazı karakterlerinin adları videodan okunamaz; aşağıdaki aile adları **doğrulanmadı**, yalnız görünüş tarif edilir.

| Kullanım | Görünüş | Renk |
|---|---|---|
| Başlık, şarkı sözü, şerit, çip | Kalın, **serifli**, tamamı büyük harf; ilk harfler daha büyük (küçük büyük harf düzeni) | Krem; vurgulu kelime kehribar |
| İngilizce soru (*Boat?*, *Light?*) | Kalın, **italik**, serifsiz, normal büyük-küçük harf | Krem |
| Türkçe cevap (KAYIK!, IŞIK!) | Başlıkla aynı serif, sorudan belirgin biçimde büyük | Kehribar |
| Kapanış kartı: rozet, alt başlık, düğme, adres | Kalın, yuvarlak hatlı serifsiz; rozet büyük harf ve geniş harf aralıklı | Sarı üstüne koyu ya da koyu üstüne sarı/krem |

Yerleşim (1080x1920 kare üzerinden):

- Bütün yazılar yatayda **ortalı**; tek istisna soldaki çip.
- Yazıların arkasında yumuşak koyu gölge var; görüntünün üstüne doğrudan biner, kutu yok.
- Şerit: karenin üstten yaklaşık %15'inde, sahne boyunca sabit. Koyu dikdörtgen, altında kırmızı ince çizgi.
- Soru ve şarkı sözü: şeridin hemen altında, yaklaşık %21–32 arası. Soru üstte, cevap altta.
- Çip: sol kenara yakın, yaklaşık %64 yükseklikte, sahne boyunca sabit: "HAMSİ · OYUN ŞARKISI".
- Şarkı sözünde yeni kelime bulanıktan nete gelerek beliriyor (ara karelerde yarı bulanık kelimeler görüldü).
- Ayırıcı olarak orta nokta kullanılıyor: "HAMSİ · KARADENİZ TÜRKÇESİ", "OYNA · link profilde".

## 4. Karakter ve sahne stili

- **Stilize 3B, oyuncak / kil bebek görünümü:** büyük baş, küçük gövde, boncuk göz, pembe yanak, yumuşak mat yüzeyler.
- **Balıkçı kız:** sarı yağmurluk ve sarı balıkçı şapkası, yana düşen örgü saç.
- **Hamsi:** gümüş, iri gözlü, sudan başını çıkarmış; soruyu soran taraf. Yüz ifadesi kareden kareye değişiyor (şaşkın, kırgın, ağzı açık).
- **Tekne:** boyası dökülmüş mavi beyaz ahşap balıkçı teknesi, küçük kamara.
- **Çevre:** akşam vakti liman; fener, taş evler, yanan sokak lambaları, arkada çay teraslı yeşil yamaçlar, teknenin çevresinde mantarlı ağ halkası.
- **Işık:** soğuk mavi ortam ışığı ile sıcak lamba ışığı karşıtlığı; arka plan bulanık (sığ alan derinliği).
- **Fırtına sahnesi:** yağmur, şimşek, dev dalga; kız kovayla su boşaltıyor. Ton yine oyunbaz, korkutucu değil.

## 5. Kadraj

- Dikey 9:16. Karakter karenin alt yarısında, yazılar üst yarıda; ikisi üst üste binmiyor.
- Üç tür çekim: geniş sahne (açılış, final), yakın plan karakter (sor-cevap), oyun görüntüsü.
- **Oyun görüntüsü:** kayıt karenin ortasında yatay bir bant olarak duruyor (yaklaşık %33–77 yükseklik arası);
  üstü ve altı aynı görüntünün büyütülmüş, bulanık ve karartılmış kopyasıyla dolu. Şarkı sözü üstteki koyu alana yazılıyor.

## 6. Kapanış kartı

Yukarıdan aşağıya, hepsi ortalı (bkz. `docs/sarki-03-kapanis.jpg`):

1. **Rozet:** altın sarısı hap biçimli etiket, koyu büyük harf: "OYUN ŞARKISI 1/21".
2. **Oyun adı:** çok büyük krem serif: "HAMSİ", altında koyu gölge.
3. **Alt başlık:** sarı, serifsiz: "Karadeniz'de hamsi avı".
4. **İki görsel kartı yan yana:** solda karakter, sağda telefon biçiminde oyun görüntüsü. Köşeleri yuvarlak,
   altın sarısı çerçeveli, birkaç derece eğik (sol kart sola, sağ kart sağa yatık).
5. **OYNA düğmesi:** altın sarısı hap, koyu yazı, solunda oynat üçgeni: "▶ OYNA · link profilde".
6. **Adres etiketi:** koyu yuvarlak köşeli kutu, krem yazı: "furkiozknn.github.io/hamsi/".
7. **Nokta sırası:** iki sıra hâlinde, zikzak dizilmiş sönük altın noktalar.
8. **Dalgalar:** altta iki katmanlı düz renk dalga (`#1A445A`, `#123950`), en altta derin lacivert.

Zemin düz gece laciverti; ortada çok hafif sıcak bir parlama var.

## 7. Rozet ve etiket dili

| Öğe | Biçim | Örnek |
|---|---|---|
| Hap rozet | Tam yuvarlak uçlu, altın sarısı dolgu, koyu yazı | OYUN ŞARKISI 1/21 |
| Şerit | Köşeli koyu kutu + kırmızı alt çizgi | TURKISH IS EASY… AT SEA? |
| Çip | Küçük köşeli koyu kutu, altın harf | HAMSİ · OYUN ŞARKISI |
| Düğme | Büyük sarı hap, oynat üçgeni | ▶ OYNA |
| Adres | Koyu kutu, krem yazı | furkiozknn.github.io/hamsi/ |

Sayfanın üstündeki shields.io rozetleri (Play free, Three.js, licence…) videoda yoktur; mevcut hâlleriyle korundu.

## 8. Ton

- **Oyunbaz ve sıcak:** bir şaka üzerine kurulu. İngilizce tek kelimelik soru, ünlemli Türkçe cevap; cevaplar kafiyeli (kayık, ışık, karışık, açık).
- **Kısa cümle, emir kipi:** "Sonara bak", "Daire çiz", "Sorma sen".
- **İki dil yan yana:** İngilizce soru italik ve sade, Türkçe cevap büyük ve renkli. Türkçe öne çıkar.
- Oyunun gerçek hedefi sözlere girmiş: sonar, ağ halkası, fırtına, otuz günde borç.

## 9. Depo sayfasına uygulama

| Videodaki öğe | Depo sayfasındaki karşılığı |
|---|---|
| Kapanış kartı düzeni | `docs/banner.svg`: lacivert zemin, şerit, krem serif başlık, sarı alt başlık, OYNA hapı, adres etiketi, nokta sırası, dalgalar |
| Altın çerçeveli eğik kart | Banner'ın sağındaki sahne kartı |
| 3B karakterler | SVG'de 3B yapılamaz; banner'da aynı öğelerin (kız, tekne, hamsi, mantar halkası, fener) **düz vektör** çizimi var. Gerçek 3B görünüm için README'deki video kareleri kullanılır |
| Yazı karakterleri | SVG'ye dış yazı tipi gömülmedi (GitHub engeller). Serif için `Georgia`, serifsiz için sistem yazı tipi yedekleri kullanıldı; videodaki karakterle birebir aynı değildir |
| Sor-cevap dili | README'nin girişindeki "*Boat?* **KAYIK!**" satırı ve kısa Türkçe / İngilizce tanıtım |
| Video | README'de "Şarkı videosu" bölümü: bağlantı ve videodan üç küçük kare |

## 10. Diğer oyunlara uygulama tarifi

1. `social-videos` deposundan oyunun `sarki-<oyun>.mp4` dosyasını al; ffmpeg ile 12–16 kare çıkar ve tek tek bak.
2. Ortak öğeler büyük olasılıkla aynıdır (şerit, çip, kapanış kartı düzeni, altın sarısı, krem serif), ama bunu
   **her videoda yeniden doğrula**; bu kılavuz yalnız Hamsi videosuna bakılarak yazıldı.
3. Oyuna özgü olanları yeniden ölç: sahne renkleri, karakterler, başlıktaki soru ("Turkish is easy… at sea?"
   Hamsi'ye özgü görünüyor), alt başlık, rozetteki sıra numarası.
4. Bu dosyayı kopyala, 1, 2 (sahne renkleri), 4 ve 8. bölümleri o oyunun videosuna göre yeniden yaz.
5. `docs/banner.svg` dosyasını şablon al: sol sütundaki yazıları ve sağdaki sahne kartının içini değiştir;
   zemin, şerit, düğme, noktalar ve dalgalar aynı kalır.
6. Videodan üç kare seç (açılış, bir söz karesi, kapanış kartı), 540x960 JPEG olarak `docs/` altına koy.
7. README'yi aynı sırayla kur; özellikleri yalnız o oyunun kodundan ya da mevcut README'sinden al.
