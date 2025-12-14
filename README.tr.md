[🇺🇸 For English Documentation Click Here](https://github.com/Tuncxy/tuncxys-datepicker/blob/main/README.md)

# ⭐ TUNCXYS DATEPICKER


- **Tuncxys DatePicker**, modern web projeleri için geliştirilmiş, hafif, bağımsız (Vanilla JS) ve tamamen özelleştirilebilir bir tarih ve saat seçici bileşenidir.

- Kullanıcı dostu arayüzü, akıllı doğrulama sistemleri ve genişletilmiş tema seçenekleri ile web sitenizdeki tarih girişlerini bir üst seviyeye taşır.

> **Neden Tuncxys DatePicker?**
Çoğu datepicker ya ağırdır, ya bağımlılıklara dayanır, ya da özelleştirmesi zahmetlidir. Tuncxys DatePicker; hafif, tahmin edilebilir ve geliştirici dostu bir deneyim sunmayı hedefler.

## 🧬 ÖZELLİKLER
* 🚫 **Bağımlılık Yok:** jQuery veya benzeri başka kütüphanelere ihtiyaç duymaz. Kendi takvim algoritması ile çalışır.

* 🌍 **Çoklu Dil Desteği:** Tuncxys Datepicker herkese hitap etmesi amacıyla 20 adet dil seçeneği ile kodlanmıştır. İsteğe göre yeni dil seçenekleri eklenebilmektedir.

* 🎨 **Gelişmiş Tema Sistemi:** Modern olmasının yanı sıra dahili `default` , `dark` ve `custom` tema seçenekleri ile tamamen özelleştirilebilir bir yapıya sahiptir.

* 🎚️ **Responsive Yapı & Akıllı Konumlandırma:**  Yeni nesil algoritmaları kullanarak içerisindeki elementleri bozmadan kendisini yeniden boyutlandırır ve popupların konumlarını ayarlar.

* 🛡️ **Akıllı Validasyon & Maskeleme:** Kullanıcıları yönlendiren sınırlandırma algoritması sayesinde mantık hatalarını ortadan kaldırarak yazılımcının ve kullanıcının işini kolaylaştırır.

## 👨‍💻KURULUM

**1. Dosyaları Projenize Ekleyin**

* **SEÇENEK A: KLASİK YÖNTEM (Tarayıcı / UMD)**
    
    *!! Standart HTML/CSS/JS ile çalışıyorsanız bu yöntemi kullanın.*

    Ana dizindeki `dist` klasöründen `tuncxys-datepicker.css` ve `tuncxys-datepicker.umd.js` dosyalarını indirerek proje dosyanıza ekleyin.

    Ardından HTML sayfanıza `tuncxys-datepicker.css` ve `tuncxys-datepicker.umd.js` dosyalarını ekleyin.

   ```html
   <link rel="stylesheet" href="path/to/tuncxys-datepicker.css">
   <script src="path/to/tuncxys-datepicker.umd.js"></script>
   ```

* **SEÇENEK B: MODERN YÖNTEM (Yeni Nesil / ES Modules)**
    
    *!! Vite, Webpack gibi araçlar veya modern modül sistemi kullanıyorsanız bu yöntemi kullanın.*

    **`YÖNTEM 1: MANUEL IMPORT`**

    Ana dizindeki `dist` klasöründen `tuncxys-datepicker.css` ve `tuncxys-datepicker.es.js` dosyalarını indirerek proje dosyanıza ekleyin.

    Ardından JavaScript kodlarınıza şu satırları ekleyin.

   ```javascript
   import 'path/to/tuncxys-datepicker.css';
   import TuncxysDatePicker from 'path/to/tuncxys-datepicker.es.js';
   ```

   **`YÖNTEM 2: NPM INSTALL`**

    Terminalinizde `npm install tuncxys-datepicker` veya `npm install github:Tuncxy/tuncxys-datepicker` komutunu çalıştırın.

    Ardından JavaScript kodlarınıza şu satırları ekleyin.

   ```javascript
   import 'tuncxys-datepicker/css';
   import TuncxysDatePicker from 'tuncxys-datepicker';
   ```
   
**2. Datepicker'ı Oluşturun**

Datepicker'ı koymak istediğiniz yere aşağıdaki gibi bir container elemanı oluşturun.

```HTML
<div id="my-datepicker"></div>
```

JavaScript'te datepicker'ı başlatın.

```javascript
new TuncxysDatePicker('#my-datepicker', {
    lang: 'en',
    theme: 'dark'
});
```

**3. Ayarları İstediğiniz Gibi Özelleştirin (Opsiyonel)**

```javascript
new TuncxysDatePicker('#my-datepicker', {
    lang: 'tr',
    theme: 'default'
});
```

veya

```javascript
new TuncxysDatePicker('#my-datepicker', myDatePickerOptions);

const myDatePickerOptions = {
    lang: 'tr',
    theme: 'default',
    enableDate: false
}
```

## ⚙️ DETAYLI KONFİGÜRASYON (AYARLAR)

> **Not:** Tüm ayarları kullanmak zorunda değilsiniz. Çoğu projede yalnızca `lang` ve `theme` ile rahatça çalışır.

### 🔨 TEMEL AYARLAR
* **`lang` >** Dil değiştirmek için kullanılır.

    **KULLANIM:** `lang: 'en'` &nbsp;&nbsp; **VARSAYILAN:** `'en'`

    **SEÇENEKLER:** `'en'` (İngilizce), `'tr'` (Türkçe), `'de'` (Almanca), `'fr'` (Fransızca), `'es'` (İspanyolca), `'az'` (Azerice), `'ru'` (Rusça), `'ja'` (Japonca), `'zh'` (Çince), `'ar'` (Arapça), `'hi'` (Hintçe), `'pt'` (Portekiz), `'ko'` (Korece), `'it'` (İtalyanca), `'id'` (Endonezce), `'vi'` (Vietnamca), `'nl'` (Hollandaca), `'pl'` (Polonyaca), `'th'` (Taylandca), `'sv'` (İsveççe)

    **NOT:** İhtiyaca göre `locales.js` dosyasındaki objeye diğer dil seçenekleri örnek alınarak yeni dil seçenekleri eklenebilir.

* **`width` >** Datepicker'ın genişliğini ayarlamak için kullanılır.

    **KULLANIM:** `width: '100%'` &nbsp;&nbsp; **VARSAYILAN:** `'300px'`

    **NOT:** Datepicker kalan boyutlandırmaları genişlik ayarına göre otomatik ayarlayacaktır.

* **`submitName` >** Verilerin gönderilirken hangi isimle gönderileceğini ayarlar. (PHP vs. için kullanılabilir.)

    **KULLANIM:** `submitName: 'myPicker'` &nbsp;&nbsp; **VARSAYILAN:** `date_output`

    **UYARI:** `submitName` değeri çoğunlukla arka plan işlemlerinde kullanılacağından dikkatli kullanılması tavsiye edilir.

### 🪛 MOD AYARLARI

* **`enableTime` >** Datepicker'ın saat kısmını aktif/deaktif eder.

    **KULLANIM:** `enableTime: false` &nbsp;&nbsp; **VARSAYILAN:** `true`

    **SEÇENEKLER:** `true`, `false`

    > **Görsel**: Sadece saat modu.

    <img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/timeOnly.png" width="300">

* **`enableDate` >** Datepicker'ın tarih kısmını aktif/deaktif eder.

    **KULLANIM:** `enableDate: false` &nbsp;&nbsp; **VARSAYILAN:** `true`

    **SEÇENEKLER:** `true`, `false`
    
    > **Görsel**: Sadece tarih modu.

    <img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/dateOnly.png" width="300">

**NOT:** `enableTime` ve `enableDate` değerleri aynı anda false olarak ayarlanırsa datepicker sadece tarih ayarında çalışır.

> **Görsel**: Tarih + Saat modu.

<img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/normal.png" width="300">

### ⛔ YASAKLAMA / LİMİT AYARLARI

* **`disableWeekDays` >** Takvimde haftanın belirli günlerini yasaklı günler olarak ayarlar ve tüm takvimde inaktif yapar.

    **KULLANIM:** `disableWeekDays: [0,2,5]`

    **SEÇENEKLER:** `0` (Pazar), `1` (Pazartesi), `2` (Salı), `3` (Çarşamba), `4` (Perşembe), `5` (Cuma), `6` (Cumartesi)

    **NOT:** `disableWeekDays` aslında bir dizidir. Yani "sadece 2 gun yasaklanabilir" gibi bir sınırlaması yoktur.

    > **Görsel**: Haftanın belirli günlerini devre dışı bırakma.

    <img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/disableWeekDays.png" width="300">

* **`disableDates` >** Takvimde istenilen tarihleri inaktif yapar.

    **KULLANIM:** `disableDates: ['2025-09-11','2026-01-01']`

    **UYARI:** Kullanılırken `YYYY-MM-DD` formatında kullanılmalıdır. Doğru şekilde kullanılmaması kendini korumaya alarak çalışmamasına neden olacaktır!

    > **Görsel**: Belirli tarihleri devre dışı bırakma.

    <img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/disableDates.png" width="300">

* **`enableLimit` >** Takvimi 1 yıl ile sınırlar.

    **KULLANIM:** `enableLimit: true` &nbsp;&nbsp; **VARSAYILAN:** `false`

    **SEÇENEKLER:** `true`, `false`

    **UYARI:** Detaylı kısıtlamaların kullanılabilmesi için `false` olarak ayarlanmalıdır!

* **`enableDayLimit` >** Detaylı "gün" bazlı Offset kısıtlamalarının kullanımını aktif eder.

    **KULLANIM:** `enableDayLimit: true` &nbsp;&nbsp; **VARSAYILAN:** `false`

    **SEÇENEKLER:** `true`, `false`

    **NOT:** `false` olarak ayarlanırsa `minOffset` ve `maxOffset` değişkenleri yıl bazlı çalışır.

* **`minOffset` >** Bugünden kaç gün geri gidileceğini ayarlar.

    **KULLANIM:** `minOffset: 125` &nbsp;&nbsp; **VARSAYILAN:** `100`

    **NOT:**  `enableDayLimit: true` ise gün bazlı, `enableDayLimit: false` ise yıl bazlı çalışır.

* **`maxOffset` >** Bugünden kaç gün ileri gidileceğini ayarlar.

    **KULLANIM:** `maxOffset: 75` &nbsp;&nbsp; **VARSAYILAN:** `100`

    **NOT:**  `enableDayLimit: true` ise gün bazlı, `enableDayLimit: false` ise yıl bazlı çalışır.


**ÖNERİ:** `minOffset` ve `maxOffset` günümüzü baz alarak çalışır ancak negatif değerler ile sınırlandırma istenilen hale getirilebilir. Örneğin; `minOffset: -1` ve `maxOffset: 3` olarak ayarlanırsa takvimde yarın ve yarından sonraki 2 gün olur.

> **Görsel**: Offset ile sınırlandırma örneği.

<img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/advice1.png" width="300">

* **`dateLowerLimit` >** Takvimin alt sınırını kesin olarak belirler.

    **KULLANIM:** `dateLowerLimit: '2023-03-21'`

    **NOT:**  `dateLowerLimit` ayarlamayı yaparken `minOffset` değişkenini kullanır bu yüzden eğer `dateLowerLimit` kullanılmışsa `minOffset` değişkeni değiştirilse bile etkisi olmaz.

    **NOT:** Kullanılabilmesi için `enableDayLimit: true` olmalıdır.

    > **Görsel**: Kesin alt limit örneği.

    <img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/dateLowerLimit.png" width="300">

* **`dateUpperLimit` >** Takvimin üst sınırını kesin olarak belirler.

    **KULLANIM:** `dateUpperLimit: '2025-03-21'`

    **NOT:**  `dateUpperLimit` ayarlamayı yaparken `maxOffset` değişkenini kullanır bu yüzden eğer `dateUpperLimit` kullanılmışsa `maxOffset` değişkeni değiştirilse bile etkisi olmaz.

    **NOT:** Kullanılabilmesi için `enableDayLimit: true` olmalıdır.

    > **Görsel**: Kesin üst limit örneği.

    <img src="https://raw.githubusercontent.com/Tuncxy/tuncxys-datepicker/main/img/dateUpperLimit.png" width="300">

**ÖNERİ:** `dateUpperLimit` değişkeni kullanıldığında eğer `dateLowerLimit` kullanılmamışsa `minOffset` değişkenine girilen değer artık günümüzü değil `dateUpperLimit` değerini baz alarak çalışır aynı durum tersi için de geçerlidir.

**NOT:** `dateLowerLimit` ve `dateUpperLimit` değişkenleri mantıksız şekilde girilirse (örneğin `dateLowerLimit` değeri, `dateUpperLimit` değerinden sonraki bir tarihse) sistem kendini korumaya alarak değerleri takaslar.

### 🔎 ONCHANGE AYARLARI

* **`onChange()` >** Backend işlemlerini kolaylaştırmak için yazılmıştır. 3 parametre ile çalışır.

    **KULLANIM:** `onChange(dateObj, dateStr, instance) => { ... }`

    > dateObj parametresi tarihi Javascript formatında tutar (Javascript işlemlerinde kullanılır).

    > dateStr parametresi tarihi string olarak tutar.

    > instance parametresi kullanılan datepicker'ın o anki örneğidir.

    **NOT:** Instance örneği ile Javascript dosyası içerisindeki methodlar çağırılarak kullanılabilir.

    **ORNEK:**
    ```javascript
    new TuncxysDatePicker('#my-datepicker', {
        onChange(dateObj, dateStr, instance) {
            console.log('Seçilen tarih:', dateStr);
        }
    });
    ```

### 🎨 TEMA AYARLARI
* **`theme` >** Datepicker'ın temasını ayarlar.

    **KULLANIM:** `theme: 'dark'` &nbsp;&nbsp; **VARSAYILAN:** `default`

    **SEÇENEKLER:** `default`, `dark` ve `custom`

    **NOT:**  `custom` seçeneği kullanıldığında `colors` objesinin kullanımı aktif hale gelir ve Datepicker tamamen özelleştirilebilir olur.

* **`colors` >** Datepicker'ın tüm renklerini değiştirebilen obje.

    **KULLANIM:** `colors: { ... }`

    **SEÇENEKLER:** 

    **Temel Yapı**
 
   `background`: Ana arka plan rengi (Popup ve Input içi).
   
   `border`: Input ve Popup çerçeve rengi.

   `borderFocus`: Inputa tıklayınca oluşan çerçeve rengi.

   `text`: Genel yazı rengi (Sayılar, ana metinler).

   `placeholder`: Input boşken görünen silik yazı rengi.

    **İkonlar ve Seçim**
    
   `icon`: Takvim ve Saat ikonlarının rengi.

   `iconHoverBg`: İkon butonuna gelince arkada çıkan yuvarlak renk.

   `selectionBg`: Input içindeki yazıyı mouse ile taradığındaki arka plan (Highlight).

   `selectionText`: Input içindeki yazıyı taradığındaki yazı rengi.

   **Takvim Izgarası**

   `weekDayText`: Hafta günü başlıkları (Pzt, Sal...).

   `passiveText`: Diğer aya ait silik günlerin rengi.

   `hoverBg`: Günlerin üzerine gelince çıkan arka plan rengi.

   `selectedBg`: Seçili günün arka plan rengi.

   `selectedText`: Seçili günün yazı rengi.

   `todayBg`: "Bugün"ü işaretleyen kutunun rengi.

   `todayText`: "Bugün"ün yazı rengi.

   **Uyarı ve Hatalar**

   `restricted`: Yasaklı günlerin yazı rengi.

   `error`: Hatalı girişteki titreme (shake) efekti rengi.

   `toastBg`: Hata balonu arka planı.

   `toastText`: Hata balonu yazısı.

   **Saat Seçici**

   `timeHeader`: SAAT, DAKİKA başlıklarının rengi.

   `timeNum`: Seçili olmayan (silik) saat rakamları.

   `timeNumActive`: Seçili olan (ortadaki) saat rakamı.

   `timeSeparator`: Saat sütunları arasındaki çizgiler.

   `timeGradStart`: Saatin üst ve altındaki gölgelendirme (Genelde background ile aynı renk ve opacity: 1).

   `timeGradEnd`: Gölgelendirmenin bitişi (Genelde background ile aynı renk ve opacity: 0).

**UYARI:** `timeGradStart` ve `timeGradEnd` ayarlarını, eğer `background` değiştirildiyse kesinlikle değiştirmeniz önerilir. Değiştirmezseniz `default` ayarındaki beyaz renk kullanılacağından efektiniz bozuk olabilir.

   **ÖRNEK KULLANIM: KRALİYET MAVİSİ VE ALTIN TEMA**

   ```javascript
   colors: {
        background: '#0f172a',
        border: '#334155',
        borderFocus: '#fbbf24',

        text: '#f1f5f9',
        placeholder: '#64748b',

        icon: '#fbbf24',
        iconHoverBg: '#1e293b',

        selectionBg: '#fbbf24',
        selectionText: '#0f172a',

        weekDayText: '#94a3b8',
        passiveText: '#475569',
        hoverBg: '#1e293b',

        selectedBg: '#fbbf24',
        selectedText: '#0f172a',

        todayBg: 'rgba(251, 191, 36, 0.15)',
        todayText: '#fbbf24',

        restricted: '#ef4444',
        error: '#ef4444',
        toastBg: '#b91c1c',
        toastText: '#fee2e2',

        timeHeader: '#94a3b8',
        timeNum: '#475569', 
        timeNumActive: '#fbbf24',
        timeSeparator: '#334155',

        //Arkaplan rengi ile aynı renge ayarlanması tavsiye edilir.
        timeGradStart: 'rgba(15, 23, 42, 1)',
        timeGradEnd: 'rgba(15, 23, 42, 0)'
    }
   ```
## 📄 LİSANS

Bu proje **MIT Lisansı** altında lisanslanmıştır. Detaylı bilgi için [LICENSE](https://github.com/Tuncxy/tuncxys-datepicker/blob/main/LICENSE) dosyasına göz atabilirsiniz.

Özetle; bu kütüphaneyi **kişisel veya ticari** projelerinizde ücretsiz olarak kullanabilir, değiştirebilir ve dağıtabilirsiniz. Tek şart, kaynak kodundaki telif hakkı ibaresinin korunmasıdır.

`Copyright (c) 2025 Tuncxy`