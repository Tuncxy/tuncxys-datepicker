const M = {
  // 1. 🇹🇷 Turkish (Türkçe)
  tr: {
    months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    weekdays: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
    timeHeaders: ["Saat", "Dakika", "Saniye"],
    placeholderDate: "GG/AA/YYYY",
    warnings: {
      invalidYear: "Geçersiz yıl! <strong>{year}</strong> olarak düzeltildi.",
      invalidDate: "Geçersiz tarih! <strong>{date}</strong> olarak düzeltildi.",
      restrictedDate: "Yasaklı gün! <strong>{date}</strong> seçilemez."
    },
    console: {
      notFound: "TuncxysDatePicker Hata: '{selector}' bulunamadı.",
      limitWarning: "Güvenlik Uyarısı: Geçersiz tarih limiti. Varsayılana dönüldü."
    }
  },
  // 2. 🇺🇸 English (Global Default)
  en: {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    timeHeaders: ["Hour", "Minute", "Second"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "Invalid year! Corrected to <strong>{year}</strong>.",
      invalidDate: "Invalid date! Corrected to <strong>{date}</strong>.",
      restrictedDate: "Restricted day! <strong>{date}</strong> cannot be selected."
    },
    console: {
      notFound: "TuncxysDatePicker Error: '{selector}' not found.",
      limitWarning: "Security Warning: Invalid date limit. Reverted to default."
    }
  },
  // 3. 🇨🇳 Chinese Simplified (简体中文) - Format zorunluluğu nedeniyle DD/MM/YYYY yapısına uyarlandı
  zh: {
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    weekdays: ["一", "二", "三", "四", "五", "六", "日"],
    timeHeaders: ["时", "分", "秒"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "年份无效！已更正为 <strong>{year}</strong>。",
      invalidDate: "日期无效！已更正为 <strong>{date}</strong>。",
      restrictedDate: "限制日期！<strong>{date}</strong> 无法选择。"
    },
    console: {
      notFound: "错误: 未找到 '{selector}'。",
      limitWarning: "警告: 日期限制无效，已恢复默认。"
    }
  },
  // 4. 🇪🇸 Spanish (Español)
  es: {
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    weekdays: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    timeHeaders: ["Hora", "Minuto", "Segundo"],
    placeholderDate: "DD/MM/AAAA",
    warnings: {
      invalidYear: "¡Año no válido! Corregido a <strong>{year}</strong>.",
      invalidDate: "¡Fecha no válida! Corregida a <strong>{date}</strong>.",
      restrictedDate: "¡Día restringido! <strong>{date}</strong> no se puede seleccionar."
    },
    console: {
      notFound: "Error: '{selector}' no encontrado.",
      limitWarning: "Advertencia: Límite de fecha no válido."
    }
  },
  // 5. 🇮🇳 Hindi (हिन्दी)
  hi: {
    months: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
    weekdays: ["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि", "रवि"],
    timeHeaders: ["घंटा", "मिनट", "सेकंड"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "अमान्य वर्ष! <strong>{year}</strong> को सुधारा गया।",
      invalidDate: "अमान्य तिथि! <strong>{date}</strong> को सुधारा गया।",
      restrictedDate: "प्रतिबंधित दिन! <strong>{date}</strong> का चयन नहीं किया जा सकता।"
    },
    console: {
      notFound: "त्रुटि: '{selector}' नहीं मिला।",
      limitWarning: "चेतावनी: अमान्य तिथि सीमा।"
    }
  },
  // 6. 🇸🇦 Arabic (العربية)
  ar: {
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    weekdays: ["ن", "ث", "ر", "خ", "ج", "س", "ح"],
    timeHeaders: ["ساعة", "دقيقة", "ثانية"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "سنة غير صالحة! تم التصحيح إلى <strong>{year}</strong>.",
      invalidDate: "تاريخ غير صالح! تم التصحيح إلى <strong>{date}</strong>.",
      restrictedDate: "يوم محظور! لا يمكن تحديد <strong>{date}</strong>."
    },
    console: {
      notFound: "خطأ: '{selector}' غير موجود.",
      limitWarning: "تحذير: حد التاريخ غير صالح."
    }
  },
  // 7. 🇵🇹 Portuguese (Português)
  pt: {
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    weekdays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    timeHeaders: ["Hora", "Minuto", "Segundo"],
    placeholderDate: "DD/MM/AAAA",
    warnings: {
      invalidYear: "Ano inválido! Corrigido para <strong>{year}</strong>.",
      invalidDate: "Data inválida! Corrigida para <strong>{date}</strong>.",
      restrictedDate: "Dia restrito! <strong>{date}</strong> não pode ser selecionado."
    },
    console: {
      notFound: "Erro: '{selector}' não encontrado.",
      limitWarning: "Aviso: Limite de data inválido."
    }
  },
  // 8. 🇷🇺 Russian (Русский)
  ru: {
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    timeHeaders: ["Час", "Минута", "Секунда"],
    placeholderDate: "ДД/ММ/ГГГГ",
    warnings: {
      invalidYear: "Неверный год! Исправлено на <strong>{year}</strong>.",
      invalidDate: "Неверная дата! Исправлено на <strong>{date}</strong>.",
      restrictedDate: "Запрещенный день! <strong>{date}</strong> нельзя выбрать."
    },
    console: {
      notFound: "Ошибка: '{selector}' не найден.",
      limitWarning: "Предупреждение: Неверный лимит даты."
    }
  },
  // 9. 🇯🇵 Japanese (日本語) - Format zorunluluğu nedeniyle DD/MM/YYYY yapısına uyarlandı
  ja: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    weekdays: ["月", "火", "水", "木", "金", "土", "日"],
    timeHeaders: ["時", "分", "秒"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "年が無効です！ <strong>{year}</strong> に修正されました。",
      invalidDate: "日付が無効です！ <strong>{date}</strong> に修正されました。",
      restrictedDate: "選択できない日です！ <strong>{date}</strong>"
    },
    console: {
      notFound: "エラー: '{selector}' が見つかりません。",
      limitWarning: "警告: 日付制限が無効です。"
    }
  },
  // 10. 🇩🇪 German (Deutsch)
  de: {
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    timeHeaders: ["Stunde", "Minute", "Sekunde"],
    placeholderDate: "TT/MM/JJJJ",
    warnings: {
      invalidYear: "Ungültiges Jahr! Korrigiert auf <strong>{year}</strong>.",
      invalidDate: "Ungültiges Datum! Korrigiert auf <strong>{date}</strong>.",
      restrictedDate: "Gesperrtes Datum! <strong>{date}</strong> nicht wählbar."
    },
    console: {
      notFound: "Fehler: '{selector}' nicht gefunden.",
      limitWarning: "Sicherheitswarnung: Ungültiges Datumslimit."
    }
  },
  // 11. 🇫🇷 French (Français)
  fr: {
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    weekdays: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    timeHeaders: ["Heure", "Minute", "Seconde"],
    placeholderDate: "JJ/MM/AAAA",
    warnings: {
      invalidYear: "Année invalide! Corrigée en <strong>{year}</strong>.",
      invalidDate: "Date invalide! Corrigée en <strong>{date}</strong>.",
      restrictedDate: "Jour interdit! <strong>{date}</strong> impossible à sélectionner."
    },
    console: {
      notFound: "Erreur: '{selector}' introuvable.",
      limitWarning: "Alerte: Limite de date invalide."
    }
  },
  // 12. 🇰🇷 Korean (한국어) - Format zorunluluğu nedeniyle DD/MM/YYYY yapısına uyarlandı
  ko: {
    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    weekdays: ["월", "화", "수", "목", "금", "토", "일"],
    timeHeaders: ["시", "분", "초"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "잘못된 연도! <strong>{year}</strong>년으로 수정됨.",
      invalidDate: "잘못된 날짜! <strong>{date}</strong>로 수정됨.",
      restrictedDate: "선택할 수 없는 날짜! <strong>{date}</strong>"
    },
    console: {
      notFound: "오류: '{selector}'를 찾을 수 없습니다.",
      limitWarning: "경고: 잘못된 날짜 제한."
    }
  },
  // 13. 🇮🇹 Italian (Italiano)
  it: {
    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    weekdays: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
    timeHeaders: ["Ora", "Minuto", "Secondo"],
    placeholderDate: "GG/MM/AAAA",
    warnings: {
      invalidYear: "Anno non valido! Corretto a <strong>{year}</strong>.",
      invalidDate: "Data non valida! Corretto a <strong>{date}</strong>.",
      restrictedDate: "Giorno non disponibile! <strong>{date}</strong>."
    },
    console: {
      notFound: "Errore: '{selector}' non trovato.",
      limitWarning: "Avviso: Limite data non valido."
    }
  },
  // 14. 🇮🇩 Indonesian (Bahasa Indonesia)
  id: {
    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    weekdays: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    timeHeaders: ["Jam", "Menit", "Detik"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "Tahun tidak valid! Diperbaiki menjadi <strong>{year}</strong>.",
      invalidDate: "Tanggal tidak valid! Diperbaiki menjadi <strong>{date}</strong>.",
      restrictedDate: "Hari terlarang! <strong>{date}</strong> tidak dapat dipilih."
    },
    console: {
      notFound: "Error: '{selector}' tidak ditemukan.",
      limitWarning: "Peringatan: Batas tanggal tidak valid."
    }
  },
  // 15. 🇻🇳 Vietnamese (Tiếng Việt)
  vi: {
    months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    weekdays: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    timeHeaders: ["Giờ", "Phút", "Giây"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "Năm không hợp lệ! Đã sửa thành <strong>{year}</strong>.",
      invalidDate: "Ngày không hợp lệ! Đã sửa thành <strong>{date}</strong>.",
      restrictedDate: "Ngày bị hạn chế! Không thể chọn <strong>{date}</strong>."
    },
    console: {
      notFound: "Lỗi: Không tìm thấy '{selector}'.",
      limitWarning: "Cảnh báo: Giới hạn ngày không hợp lệ."
    }
  },
  // 16. 🇳🇱 Dutch (Nederlands)
  nl: {
    months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    weekdays: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    timeHeaders: ["Uur", "Minuut", "Seconde"],
    placeholderDate: "DD/MM/JJJJ",
    warnings: {
      invalidYear: "Ongeldig jaar! Gecorrigeerd naar <strong>{year}</strong>.",
      invalidDate: "Ongeldige datum! Gecorrigeerd naar <strong>{date}</strong>.",
      restrictedDate: "Niet beschikbare dag! <strong>{date}</strong>."
    },
    console: {
      notFound: "Fout: '{selector}' niet gevonden.",
      limitWarning: "Waarschuwing: Ongeldige datumlimiet."
    }
  },
  // 17. 🇵🇱 Polish (Polski)
  pl: {
    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    weekdays: ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"],
    timeHeaders: ["Godzina", "Minuta", "Sekunda"],
    placeholderDate: "DD/MM/RRRR",
    warnings: {
      invalidYear: "Nieprawidłowy rok! Poprawiono na <strong>{year}</strong>.",
      invalidDate: "Nieprawidłowa data! Poprawiono na <strong>{date}</strong>.",
      restrictedDate: "Data niedostępna! <strong>{date}</strong>."
    },
    console: {
      notFound: "Błąd: Nie znaleziono '{selector}'.",
      limitWarning: "Ostrzeżenie: Nieprawidłowy limit daty."
    }
  },
  // 18. 🇹🇭 Thai (ไทย)
  th: {
    months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    weekdays: ["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
    timeHeaders: ["ชั่วโมง", "นาที", "วินาที"],
    placeholderDate: "DD/MM/YYYY",
    warnings: {
      invalidYear: "ปีไม่ถูกต้อง! แก้ไขเป็น <strong>{year}</strong>",
      invalidDate: "วันที่ไม่ถูกต้อง! แก้ไขเป็น <strong>{date}</strong>",
      restrictedDate: "วันที่ถูกจำกัด! ไม่สามารถเลือก <strong>{date}</strong> ได้"
    },
    console: {
      notFound: "ข้อผิดพลาด: ไม่พบ '{selector}'",
      limitWarning: "คำเตือน: ขีดจำกัดวันที่ไม่ถูกต้อง"
    }
  },
  // 19. 🇸🇪 Swedish (Svenska)
  sv: {
    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    weekdays: ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"],
    timeHeaders: ["Timme", "Minut", "Sekund"],
    placeholderDate: "ÅÅÅÅ/MM/DD",
    placeholderDate: "DD/MM/ÅÅÅÅ",
    warnings: {
      invalidYear: "Ogiltigt år! Korrigerad till <strong>{year}</strong>.",
      invalidDate: "Ogiltigt datum! Korrigerad till <strong>{date}</strong>.",
      restrictedDate: "Otillgänglig dag! <strong>{date}</strong>."
    },
    console: {
      notFound: "Fel: '{selector}' hittades inte.",
      limitWarning: "Varning: Ogiltig datumgräns."
    }
  },
  // 20. 🇦🇿 Azerbaijani (Azərbaycan)
  az: {
    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
    weekdays: ["B.e", "Ç.a", "Çər", "C.a", "Cüm", "Şən", "Baz"],
    timeHeaders: ["Saat", "Dəqiqə", "Saniyə"],
    placeholderDate: "GG/AA/İİİİ",
    warnings: {
      invalidYear: "Yanlış il! <strong>{year}</strong> olaraq düzəldildi.",
      invalidDate: "Yanlış tarix! <strong>{date}</strong> olaraq düzəldildi.",
      restrictedDate: "Qadağan olunmuş gün! <strong>{date}</strong> seçilə bilməz."
    },
    console: {
      notFound: "Xəta: '{selector}' tapılmadı.",
      limitWarning: "Xəbərdarlıq: Yanlış tarix limiti."
    }
  }
};
class b {
  constructor(e, t = {}) {
    this.options = t, this.lastSentValue = null, this.isInteracting = !1;
    const i = t.lang || "en";
    if (this.selectedLang = M[i] ? i : "en", this.lang = M[this.selectedLang], this.container = document.querySelector(e), !this.container) {
      console.error(this.lang.console.notFound.replace("{selector}", e));
      return;
    }
    this.onDocumentClick = (n) => {
      const h = this.dom && this.dom.wrapper && this.dom.wrapper.contains(n.target), r = this.dom && this.dom.calendarPopup && this.dom.calendarPopup.contains(n.target), c = this.dom && this.dom.timePopup && this.dom.timePopup.contains(n.target);
      !h && !r && !c && this.closePickers();
    }, this.onWindowResize = () => {
      this.isInteracting || (this.resizeRequest && cancelAnimationFrame(this.resizeRequest), this.resizeRequest = requestAnimationFrame(() => {
        this.closePickers();
      }));
    }, this.submitName = t.submitName || "date_output", this.fixedWidth = t.width || "300px", this.theme = t.theme || "default", this.colors = t.colors || {}, this.enableDate = t.enableDate !== void 0 ? t.enableDate : !0, this.enableTime = t.enableTime !== void 0 ? t.enableTime : !0, !this.enableDate && !this.enableTime && (this.enableDate = !0), this.disableWeekDays = t.disableWeekDays || [], this.disableDates = t.disableDates || [], this.enableLimit = t.enableLimit || !1, this.enableDayLimit = t.enableDayLimit || !1, this.minOffset = t.minOffset !== void 0 ? t.minOffset : 100, this.maxOffset = t.maxOffset !== void 0 ? t.maxOffset : 100, this.container.style.width = this.fixedWidth, this.container.style.maxWidth = "100%", this.monthNames = this.lang.months, this.realToday = /* @__PURE__ */ new Date();
    const s = (n) => {
      if (!n) return null;
      if (n instanceof Date) return isNaN(n.getTime()) ? null : new Date(n.setHours(0, 0, 0, 0));
      if (!/^\d{4}-\d{2}-\d{2}$/.test(n)) return null;
      const r = n.split("-"), c = parseInt(r[0], 10), m = parseInt(r[1], 10), p = parseInt(r[2], 10);
      if (m < 1 || m > 12) return null;
      const g = new Date(c, m - 1, p);
      return g.getFullYear() !== c || g.getMonth() !== m - 1 || g.getDate() !== p ? null : (g.setHours(0, 0, 0, 0), g);
    }, o = (n, h) => Math.round((n - h) / (1e3 * 60 * 60 * 24));
    let a = s(t.dateUpperLimit), d = s(t.dateLowerLimit);
    (t.dateUpperLimit && !a || t.dateLowerLimit && !d) && (console.warn(this.lang.console.limitWarning), this.enableLimit = !1, this.enableDayLimit = !1, this.minOffset = 100, this.maxOffset = 100, a = null, d = null);
    const l = new Date(this.realToday.getFullYear(), this.realToday.getMonth(), this.realToday.getDate());
    if (this.enableDayLimit === !0 && (a || d))
      if (a && d && a < d && ([a, d] = [d, a]), a && !d) {
        const n = o(a, l);
        this.maxOffset = n, this.minOffset -= n;
      } else if (!a && d) {
        const n = o(l, d);
        this.minOffset = n, this.maxOffset += o(d, l);
      } else
        this.maxOffset = o(a, l), this.minOffset = o(l, d);
    this.currentDate = /* @__PURE__ */ new Date(), this.currentMonth = this.currentDate.getMonth(), this.currentYear = this.currentDate.getFullYear(), this.selectedDay = null, this.selectedMonth = null, this.selectedYear = null, this.selectedHour = "03", this.selectedMinute = "00", this.selectedSecond = "00", this.inputBuffer = "", this.activeSegmentIndex = 0, this.SEGMENTS = [];
    let u = 0;
    this.enableDate && (this.SEGMENTS.push(
      { type: "day", start: 0, end: 2, maxLen: 2, min: 1, max: 31 },
      { type: "month", start: 3, end: 5, maxLen: 2, min: 1, max: 12 },
      { type: "year", start: 6, end: 10, maxLen: 4, min: 1900, max: 2100 }
    ), u = 11), this.enableTime && this.SEGMENTS.push(
      { type: "hour", start: u, end: u + 2, maxLen: 2, min: 0, max: 23 },
      { type: "minute", start: u + 3, end: u + 5, maxLen: 2, min: 0, max: 59 },
      { type: "second", start: u + 6, end: u + 8, maxLen: 2, min: 0, max: 59 }
    ), this.calculateLimits(), (this.enableLimit || this.enableDayLimit) && (this.currentMonth = this.minDate.getMonth(), this.currentYear = this.minDate.getFullYear()), this.init();
  }
  calculateLimits() {
    this.enableLimit ? (this.minDate = new Date(this.realToday.getFullYear(), this.realToday.getMonth() - 6, 1), this.minDate.setHours(0, 0, 0, 0), this.maxDate = new Date(this.realToday.getFullYear(), this.realToday.getMonth() + 6 + 1, 0), this.maxDate.setHours(23, 59, 59, 999)) : this.enableDayLimit ? (this.minDate = new Date(this.realToday), this.minDate.setDate(this.realToday.getDate() - this.minOffset), this.minDate.setHours(0, 0, 0, 0), this.maxDate = new Date(this.realToday), this.maxDate.setDate(this.realToday.getDate() + this.maxOffset), this.maxDate.setHours(23, 59, 59, 999)) : (this.minDate = new Date(this.realToday.getFullYear() - this.minOffset, 0, 1), this.maxDate = new Date(this.realToday.getFullYear() + this.maxOffset, 11, 31));
    const e = this.SEGMENTS.find((t) => t.type === "year");
    e && (e.min = this.minDate.getFullYear(), e.max = this.maxDate.getFullYear());
  }
  init() {
    this.buildHTML(), this.cacheDOM(), this.bindEvents(), this.enableDate && this.dom.calendarPopup && document.body.appendChild(this.dom.calendarPopup), this.enableTime && this.dom.timePopup && document.body.appendChild(this.dom.timePopup), this.dom.warningMsg && document.body.appendChild(this.dom.warningMsg), this.applyTheme(), this.enableDate && this.renderCalendar(this.currentMonth, this.currentYear), this.enableTime && (this.populateTimeColumn(this.dom.hourCol, 24, "hour"), this.populateTimeColumn(this.dom.minuteCol, 60, "minute"), this.populateTimeColumn(this.dom.secondCol, 60, "second"), this.scrollToValues(this.selectedHour, this.selectedMinute, this.selectedSecond));
    let e = [];
    this.enableDate && e.push(this.lang.placeholderDate), this.enableTime && e.push("03:00:00"), this.dom.input.value = e.join(" "), this.dom.hiddenInput.value = "", this.observer = new MutationObserver((t) => {
      document.body.contains(this.container) || this.destroy();
    }), this.container.parentNode && this.observer.observe(document.body, { childList: !0, subtree: !0 });
  }
  // --- Smart Positioning Logic (Absolute) ---
  // Calculates position relative to the document body.
  setPopupPosition(e) {
    if (!e || !this.dom.inputGroup) return;
    const t = this.dom.inputGroup.getBoundingClientRect(), i = window.scrollY || document.documentElement.scrollTop, s = window.scrollX || document.documentElement.scrollLeft;
    e.style.width = `${t.width}px`;
    const o = e.offsetWidth, a = e.offsetHeight || 350;
    let d = t.bottom + i + 8;
    window.innerHeight - t.bottom < a && t.top > a && (d = t.top + i - a - 8);
    let u = t.left + s + t.width / 2 - o / 2;
    e.style.top = `${d}px`, e.style.left = `${u}px`;
  }
  applyTheme() {
    let e = "", t = "";
    if (this.theme === "custom" && this.colors) {
      const i = {
        background: "--txydp-bg",
        border: "--txydp-border",
        borderFocus: "--txydp-border-focus",
        text: "--txydp-text",
        placeholder: "--txydp-placeholder",
        icon: "--txydp-icon",
        iconHoverBg: "--txydp-icon-bg-hover",
        hoverBg: "--txydp-day-hover-bg",
        selectedBg: "--txydp-selected-bg",
        selectedText: "--txydp-selected-text",
        todayBg: "--txydp-today-bg",
        todayText: "--txydp-today-text",
        weekDayText: "--txydp-weekday-text",
        passiveText: "--txydp-day-other-month",
        restricted: "--txydp-restricted-color",
        error: "--txydp-error-color",
        toastBg: "--txydp-toast-bg",
        toastText: "--txydp-toast-text",
        timeHeader: "--txydp-time-header",
        timeNum: "--txydp-time-text",
        timeNumActive: "--txydp-time-text-active",
        timeSeparator: "--txydp-time-separator",
        timeGradStart: "--txydp-time-grad-start",
        timeGradEnd: "--txydp-time-grad-end",
        selectionBg: "--txydp-selection-bg",
        selectionText: "--txydp-selection-text"
      }, s = [];
      for (const [o, a] of Object.entries(i))
        this.colors[o] && s.push(`${a}: ${this.colors[o]}`);
      e = s.join(";");
    } else this.theme === "dark" && (t = "theme-dark");
    t && this.dom.wrapper.classList.add(t), e && (this.dom.wrapper.style.cssText = e), [this.dom.calendarPopup, this.dom.timePopup, this.dom.warningMsg].forEach((i) => {
      i && (i.classList.remove("theme-dark"), t && i.classList.add(t), e && (i.style.cssText = e));
    });
  }
  buildHTML() {
    let e = [];
    this.enableDate && e.push(this.lang.placeholderDate), this.enableTime && e.push("SS:DD:nn");
    const t = e.join(" "), i = this.lang.weekdays.map((l) => `<div>${l}</div>`).join(""), s = this.enableDate ? '<div class="txydp-btn txydp-calendar-btn"><svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg></div>' : "", o = this.enableTime ? '<div class="txydp-btn txydp-clock-btn"><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg></div>' : "", a = this.enableDate ? `
        <div class="txydp-popup txydp-calendar-popup">
            <div class="txydp-calendar-header">
                <div class="txydp-nav-btn txydp-prev-month"><svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg></div>
                <div class="txydp-month-year"></div>
                <div class="txydp-nav-btn txydp-next-month"><svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg></div>
            </div>
            <div class="txydp-calendar-grid-view"><div class="txydp-weekdays">${i}</div><div class="txydp-days"></div></div>
            <div class="txydp-year-picker"></div>
        </div>` : "", d = this.enableTime ? `
        <div class="txydp-popup txydp-time-popup">
            <div class="txydp-time-labels"><div class="txydp-time-label">${this.lang.timeHeaders[0]}</div><div class="txydp-time-label">${this.lang.timeHeaders[1]}</div><div class="txydp-time-label">${this.lang.timeHeaders[2]}</div></div>
            <div class="txydp-time-container"><div class="txydp-highlight"></div><div class="txydp-time-col txydp-hour-col"></div><div class="txydp-time-col txydp-minute-col"></div><div class="txydp-time-col txydp-second-col"></div></div>
            <div class="txydp-time-controls">
                <div class="txydp-control-group"><div class="txydp-control-btn" data-unit="hour" data-dir="down"><svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg></div><div class="txydp-control-btn" data-unit="hour" data-dir="up"><svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg></div></div>
                <div class="txydp-control-group"><div class="txydp-control-btn" data-unit="minute" data-dir="down"><svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg></div><div class="txydp-control-btn" data-unit="minute" data-dir="up"><svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg></div></div>
                <div class="txydp-control-group"><div class="txydp-control-btn" data-unit="second" data-dir="down"><svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg></div><div class="txydp-control-btn" data-unit="second" data-dir="up"><svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg></div></div>
            </div>
        </div>` : "";
    this.container.innerHTML = `
    <div class="txydp-wrapper">
        <input type="hidden" class="txydp-hidden-iso-input" name="${this.submitName}">
        <div class="txydp-warning-message"></div>
        <div class="txydp-input-group">
            <input type="text" name="${this.submitName}_display" inputmode="numeric" class="txydp-date-input" placeholder="${t}" spellcheck="false" autocomplete="off">
            <div class="txydp-icons">${s}${o}</div>
        </div>
        ${a}
        ${d}
    </div>`;
  }
  cacheDOM() {
    const e = this.container;
    this.dom = {
      wrapper: e.querySelector(".txydp-wrapper"),
      inputGroup: e.querySelector(".txydp-input-group"),
      warningMsg: e.querySelector(".txydp-warning-message"),
      input: e.querySelector(".txydp-date-input"),
      hiddenInput: e.querySelector(".txydp-hidden-iso-input"),
      calendarBtn: e.querySelector(".txydp-calendar-btn"),
      clockBtn: e.querySelector(".txydp-clock-btn"),
      // These might be moved to body later
      timePopup: e.querySelector(".txydp-time-popup"),
      calendarPopup: e.querySelector(".txydp-calendar-popup"),
      monthYearDisplay: e.querySelector(".txydp-month-year"),
      prevBtn: e.querySelector(".txydp-prev-month"),
      nextBtn: e.querySelector(".txydp-next-month"),
      calendarDays: e.querySelector(".txydp-days"),
      calendarGridView: e.querySelector(".txydp-calendar-grid-view"),
      yearPickerView: e.querySelector(".txydp-year-picker"),
      hourCol: e.querySelector(".txydp-hour-col"),
      minuteCol: e.querySelector(".txydp-minute-col"),
      secondCol: e.querySelector(".txydp-second-col"),
      controlBtns: e.querySelectorAll(".txydp-control-btn")
    };
  }
  bindEvents() {
    const { input: e, calendarBtn: t, clockBtn: i, prevBtn: s, nextBtn: o, monthYearDisplay: a, controlBtns: d } = this.dom;
    document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onWindowResize), window.addEventListener("scroll", this.onWindowResize), d && d.length > 0 && d.forEach((n) => {
      n.addEventListener("click", (h) => {
        h.preventDefault(), h.stopPropagation(), h.stopImmediatePropagation();
        const r = n.dataset.unit, c = n.dataset.dir;
        this.scrollTimeButton(r, c);
      }), n.addEventListener("mousedown", (h) => {
        h.preventDefault(), h.stopPropagation();
      });
    }), e.addEventListener("dragstart", (n) => n.preventDefault()), e.addEventListener("drop", (n) => n.preventDefault()), e.addEventListener("blur", () => {
      this.inputBuffer.length > 0 && this.finalizeInput(this.activeSegmentIndex, !0);
      let n = this.getParsedDateFromInput();
      this.enableDate && !isNaN(n.y) && (this.validateDayCountInMonth(), this.updateInputValue("year", n.y.toString().padStart(4, "0"), !0, !0)), this.inputBuffer = "";
    }), e.addEventListener("click", () => {
      const n = e.selectionStart;
      for (let h = 0; h < this.SEGMENTS.length; h++)
        if (n >= this.SEGMENTS[h].start && n <= this.SEGMENTS[h].end) {
          this.inputBuffer.length > 0 && this.activeSegmentIndex !== h && this.finalizeInput(this.activeSegmentIndex), this.activeSegmentIndex = h, this.selectSegment(h);
          break;
        }
    }), e.addEventListener("keydown", (n) => this.handleKeydown(n));
    const l = (n) => {
      n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation();
    };
    t && (t.addEventListener("click", (n) => {
      l(n), this.toggleCalendar();
    }), t.addEventListener("mousedown", l), t.addEventListener("mouseup", l)), i && (i.addEventListener("click", (n) => {
      l(n), this.toggleClock();
    }), i.addEventListener("mousedown", l), i.addEventListener("mouseup", l)), this.enableDate && (s.addEventListener("click", (n) => {
      n.stopPropagation(), !s.classList.contains("disabled") && (this.currentMonth--, this.currentMonth < 0 && (this.currentMonth = 11, this.currentYear--), this.renderCalendar(this.currentMonth, this.currentYear));
    }), o.addEventListener("click", (n) => {
      n.stopPropagation(), !o.classList.contains("disabled") && (this.currentMonth++, this.currentMonth > 11 && (this.currentMonth = 0, this.currentYear++), this.renderCalendar(this.currentMonth, this.currentYear));
    }), this.enableLimit || (a.classList.add("interactive"), a.addEventListener("click", (n) => this.toggleYearView(n))), this.dom.calendarDays.addEventListener("click", (n) => {
      const h = n.target.closest(".txydp-day");
      if (!h || h.style.visibility === "hidden" || h.style.pointerEvents === "none") return;
      n.stopPropagation();
      const r = parseInt(h.innerText);
      h.classList.contains("other-month") && (r > 15 ? (this.currentMonth--, this.currentMonth < 0 && (this.currentMonth = 11, this.currentYear--)) : (this.currentMonth++, this.currentMonth > 11 && (this.currentMonth = 0, this.currentYear++))), this.selectedDay = r, this.selectedMonth = this.currentMonth, this.selectedYear = this.currentYear, this.renderCalendar(this.currentMonth, this.currentYear), this.updateFullInputString();
    })), [this.dom.calendarPopup, this.dom.timePopup, this.dom.yearPickerView].forEach((n) => {
      if (!n) return;
      const h = (r) => r.stopPropagation();
      n.addEventListener("click", h), n.addEventListener("mousedown", h), n.addEventListener("mouseup", h), n.addEventListener("touchstart", (r) => {
        this.isInteracting = !0, r.stopPropagation();
      }, { passive: !0 }), n.addEventListener("touchmove", (r) => {
        this.isInteracting = !0, r.stopPropagation();
      }, { passive: !0 }), n.addEventListener("touchend", (r) => {
        setTimeout(() => {
          this.isInteracting = !1;
        }, 250), r.stopPropagation();
      }, { passive: !0 });
    });
  }
  destroy() {
    this.observer && (this.observer.disconnect(), this.observer = null), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onWindowResize), window.removeEventListener("scroll", this.onWindowResize), this.dom.calendarPopup && this.dom.calendarPopup.parentNode === document.body && document.body.removeChild(this.dom.calendarPopup), this.dom.timePopup && this.dom.timePopup.parentNode === document.body && document.body.removeChild(this.dom.timePopup), this.dom.warningMsg && this.dom.warningMsg.parentNode === document.body && document.body.removeChild(this.dom.warningMsg), this.container.innerHTML = "", this.dom = null;
  }
  // ... (Existing helper methods like updateHiddenInput, scrollTimeButton, etc. remain unchanged) ...
  updateHiddenInput() {
    if (this.enableDate && (this.selectedYear === null || this.selectedMonth === null || this.selectedDay === null)) return;
    if (this.enableDate) {
      let i = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
      if (this.selectedDay > i || this.isDateRestricted(new Date(this.selectedYear, this.selectedMonth, this.selectedDay))) return;
    }
    let e = [];
    if (this.enableDate) {
      let i = this.selectedYear.toString().padStart(4, "0"), s = (this.selectedMonth + 1).toString().padStart(2, "0"), o = this.selectedDay.toString().padStart(2, "0");
      e.push(`${i}-${s}-${o}`);
    }
    this.enableTime && e.push(`${this.selectedHour}:${this.selectedMinute}:${this.selectedSecond}`);
    const t = e.join(" ");
    if (this.lastSentValue !== t && (this.lastSentValue = t, this.dom.hiddenInput.value = t, this.options.onChange && typeof this.options.onChange == "function")) {
      let i = null;
      this.enableDate && (i = new Date(this.selectedYear, this.selectedMonth, this.selectedDay), this.enableTime && i.setHours(parseInt(this.selectedHour), parseInt(this.selectedMinute), parseInt(this.selectedSecond))), this.options.onChange(i, t, this);
    }
  }
  scrollTimeButton(e, t) {
    if (!this.enableTime) return;
    let i;
    e === "hour" ? i = this.dom.hourCol : e === "minute" ? i = this.dom.minuteCol : e === "second" && (i = this.dom.secondCol);
    const s = 32, o = i.scrollTop;
    t === "down" ? i.scrollTo({ top: o + s, behavior: "smooth" }) : i.scrollTo({ top: o - s, behavior: "smooth" });
  }
  getParsedDateFromInput() {
    if (!this.enableDate) return { d: this.realToday.getDate(), m: this.realToday.getMonth(), y: this.realToday.getFullYear() };
    let e = this.dom.input.value;
    const t = this.SEGMENTS.find((l) => l.type === "day"), i = this.SEGMENTS.find((l) => l.type === "month"), s = this.SEGMENTS.find((l) => l.type === "year");
    let o = parseInt(e.substring(t.start, t.end)), a = parseInt(e.substring(i.start, i.end)) - 1, d = parseInt(e.substring(s.start, s.end));
    return { d: o, m: a, y: d };
  }
  handleKeydown(e) {
    if (["ArrowRight", "Tab", "Enter"].includes(e.key)) {
      if (e.preventDefault(), this.inputBuffer.length > 0 && this.finalizeInput(this.activeSegmentIndex), e.key === "Enter") {
        this.dom.input.blur(), this.closePickers();
        return;
      }
      this.activeSegmentIndex = (this.activeSegmentIndex + 1) % this.SEGMENTS.length, this.selectSegment(this.activeSegmentIndex), this.inputBuffer = "";
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault(), this.inputBuffer.length > 0 && this.finalizeInput(this.activeSegmentIndex), this.activeSegmentIndex = (this.activeSegmentIndex - 1 + this.SEGMENTS.length) % this.SEGMENTS.length, this.selectSegment(this.activeSegmentIndex), this.inputBuffer = "";
      return;
    }
    if (e.key === "Backspace") {
      e.preventDefault(), this.inputBuffer = "";
      const t = this.SEGMENTS[this.activeSegmentIndex];
      this.updateInputValue(t.type, "0".repeat(t.maxLen), !0, !1), this.selectSegment(this.activeSegmentIndex);
      return;
    }
    /^\d$/.test(e.key) ? (e.preventDefault(), this.handleNumberInput(e.key)) : e.preventDefault();
  }
  selectSegment(e) {
    const t = this.SEGMENTS[e];
    this.dom.input.setSelectionRange(t.start, t.end);
  }
  handleNumberInput(e) {
    const t = this.SEGMENTS[this.activeSegmentIndex];
    this.inputBuffer += e;
    let i = parseInt(this.inputBuffer);
    if (t.type === "day" && i > 31 && (this.inputBuffer = "31"), t.type === "month" && i > 12 && (this.inputBuffer = "12"), ["day", "month", "year"].includes(t.type) || t.max && i > t.max && (this.inputBuffer = t.max.toString()), this.inputBuffer.length >= t.maxLen)
      this.finalizeInput(this.activeSegmentIndex), this.activeSegmentIndex < this.SEGMENTS.length - 1 && this.activeSegmentIndex++, this.selectSegment(this.activeSegmentIndex), this.inputBuffer = "";
    else {
      let s = this.inputBuffer.padStart(t.maxLen, "0");
      this.updateInputValue(t.type, s, !1, !1), this.dom.input.setSelectionRange(t.start, t.end);
    }
  }
  finalizeInput(e, t = !1) {
    const i = this.SEGMENTS[e];
    if (!this.inputBuffer && !t) return;
    let s = this.inputBuffer ? parseInt(this.inputBuffer) : parseInt(this.dom.input.value.substring(i.start, i.end));
    i.type === "year" && this.inputBuffer.length === 2 && (s = parseInt("20" + this.inputBuffer));
    let o = s;
    if (i.type === "year" && this.inputBuffer.length > 0 && this.inputBuffer.length !== 4 && this.inputBuffer.length !== 2 && (s = i.min), s < i.min && (s = i.min), i.max && s > i.max && (s = i.max), s !== o) {
      this.triggerErrorEffect();
      let d = i.type === "year" ? this.lang.warnings.invalidYear.replace("{year}", s) : this.lang.warnings.invalidDate.replace("{date}", s);
      this.showWarningMessage(d);
    }
    let a = s.toString().padStart(i.maxLen, "0");
    this.updateInputValue(i.type, a, !0, !0, t), (i.type === "year" || t) && this.validateDayCountInMonth(), this.inputBuffer = "";
  }
  validateDayCountInMonth() {
    if (!this.enableDate) return;
    let e = this.getParsedDateFromInput();
    if (isNaN(e.d) || isNaN(e.m) || isNaN(e.y)) return;
    let t = new Date(e.y, e.m + 1, 0).getDate();
    if (e.d > t) {
      this.triggerErrorEffect();
      let i = new Date(e.y, e.m, t);
      this.isDateRestricted(i) && (i = this.findNearestValidDate(i));
      let s = i.getDate().toString().padStart(2, "0"), o = (i.getMonth() + 1).toString().padStart(2, "0"), a = i.getFullYear().toString().padStart(4, "0"), d = `${s}/${o}/${a}`, l = this.lang.warnings.invalidDate.replace("{date}", `<strong>${d}</strong>`);
      this.showWarningMessage(l);
      let u = this.dom.input.value, h = `${s}/${o}/${a}`;
      this.enableTime && u.length > 10 && (h += u.substring(10)), this.dom.input.value = h, this.selectedDay = i.getDate(), this.selectedMonth = i.getMonth(), this.selectedYear = i.getFullYear(), this.renderCalendar(this.selectedMonth, this.selectedYear), this.updateHiddenInput();
    }
  }
  updateInputValue(e, t, i = !1, s = !0, o = !0) {
    let a = this.dom.input.value;
    const d = this.SEGMENTS.find((u) => u.type === e);
    if (!d) return;
    let l = a.substring(0, d.start) + t + a.substring(d.end);
    if (this.dom.input.value = l, !(!i && !s)) {
      if (this.enableTime) {
        const u = this.SEGMENTS.find((p) => p.type === "hour"), n = this.SEGMENTS.find((p) => p.type === "minute"), h = this.SEGMENTS.find((p) => p.type === "second");
        let r = l.substring(u.start, u.end), c = l.substring(n.start, n.end), m = l.substring(h.start, h.end);
        isNaN(parseInt(r)) || (this.selectedHour = r), isNaN(parseInt(c)) || (this.selectedMinute = c), isNaN(parseInt(m)) || (this.selectedSecond = m), ["hour", "minute", "second"].includes(e) && this.scrollToValues(this.selectedHour, this.selectedMinute, this.selectedSecond);
      }
      if (this.enableDate) {
        let u = parseInt(l.substring(this.SEGMENTS.find((r) => r.type === "day").start, this.SEGMENTS.find((r) => r.type === "day").end)), n = parseInt(l.substring(this.SEGMENTS.find((r) => r.type === "month").start, this.SEGMENTS.find((r) => r.type === "month").end)) - 1, h = parseInt(l.substring(this.SEGMENTS.find((r) => r.type === "year").start, this.SEGMENTS.find((r) => r.type === "year").end));
        if (!isNaN(u) && !isNaN(n) && !isNaN(h) && (this.selectedDay = u, this.selectedMonth = n, this.selectedYear = h, ["day", "month", "year"].includes(e))) {
          let r = new Date(this.selectedYear, this.selectedMonth, this.selectedDay), c = new Date(this.minDate);
          c.setHours(0, 0, 0, 0);
          let m = new Date(this.maxDate);
          m.setHours(0, 0, 0, 0);
          let p = !0;
          if (r < c && (s ? (this.selectedYear = this.minDate.getFullYear(), this.selectedMonth = this.minDate.getMonth(), this.selectedDay = this.minDate.getDate()) : p = !1), r > m && (s ? (this.selectedYear = this.maxDate.getFullYear(), this.selectedMonth = this.maxDate.getMonth(), this.selectedDay = this.maxDate.getDate()) : p = !1), s && (r < c || r > m)) {
            this.triggerErrorEffect();
            let g = r < c ? c : m, y = `${g.getDate().toString().padStart(2, "0")}/${(g.getMonth() + 1).toString().padStart(2, "0")}/${g.getFullYear()}`, S = this.lang.warnings.invalidDate.replace("{date}", y);
            this.showWarningMessage(S);
            let D = this.selectedDay.toString().padStart(2, "0"), f = (this.selectedMonth + 1).toString().padStart(2, "0"), v = this.selectedYear.toString().padStart(4, "0");
            this.dom.input.value = this.enableTime ? `${D}/${f}/${v} ${l.substring(11)}` : `${D}/${f}/${v}`;
          }
          if ((p || s) && (this.currentYear = this.selectedYear, this.currentMonth = this.selectedMonth, this.renderCalendar(this.currentMonth, this.currentYear), s && o)) {
            let g = new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
            if (this.isDateRestricted(g)) {
              this.triggerErrorEffect();
              const y = this.findNearestValidDate(g);
              let S = `${y.getDate().toString().padStart(2, "0")}/${(y.getMonth() + 1).toString().padStart(2, "0")}/${y.getFullYear()}`, D = this.lang.warnings.restrictedDate.replace("{date}", S);
              this.showWarningMessage(D), this.selectedYear = y.getFullYear(), this.selectedMonth = y.getMonth(), this.selectedDay = y.getDate(), this.currentYear = this.selectedYear, this.currentMonth = this.selectedMonth;
              let f = this.selectedDay.toString().padStart(2, "0"), v = (this.selectedMonth + 1).toString().padStart(2, "0"), x = this.selectedYear.toString().padStart(4, "0");
              this.dom.input.value = this.enableTime ? `${f}/${v}/${x} ${this.dom.input.value.substring(11)}` : `${f}/${v}/${x}`, this.renderCalendar(this.currentMonth, this.currentYear);
            }
          }
        }
      }
      this.updateHiddenInput();
    }
  }
  toggleCalendar() {
    if (this.enableDate && (this.dom.input.blur(), this.dom.timePopup && this.dom.timePopup.classList.remove("active"), this.dom.calendarPopup.classList.toggle("active"), this.dom.calendarPopup.classList.contains("active"))) {
      if (this.selectedDay === null) {
        let e;
        const t = new Date(this.realToday).setHours(0, 0, 0, 0), i = this.minDate.getTime(), s = this.maxDate.getTime();
        t >= i && t <= s ? e = this.realToday : e = this.minDate, this.currentMonth = e.getMonth(), this.currentYear = e.getFullYear(), this.renderCalendar(this.currentMonth, this.currentYear);
      }
      this.showCalendarView(), this.setPopupPosition(this.dom.calendarPopup);
    }
  }
  toggleClock() {
    this.enableTime && (this.dom.input.blur(), this.dom.calendarPopup && this.dom.calendarPopup.classList.remove("active"), this.dom.timePopup.classList.toggle("active"), this.dom.timePopup.classList.contains("active") && (this.setPopupPosition(this.dom.timePopup), setTimeout(() => {
      this.scrollToValues(this.selectedHour, this.selectedMinute, this.selectedSecond);
    }, 10)));
  }
  closePickers() {
    this.dom.calendarPopup && this.dom.calendarPopup.classList.remove("active"), this.dom.timePopup && this.dom.timePopup.classList.remove("active");
  }
  populateTimeColumn(e, t, i) {
    const s = document.createElement("div");
    s.className = "txydp-spacer", e.appendChild(s);
    for (let a = 0; a < t; a++) {
      const d = a.toString().padStart(2, "0"), l = document.createElement("div");
      l.className = "txydp-time-cell", l.innerText = d, l.dataset.val = d, e.appendChild(l);
    }
    const o = document.createElement("div");
    o.className = "txydp-spacer", e.appendChild(o), e.addEventListener("scroll", () => {
      this.handleScroll(e, i);
    }), e.addEventListener("wheel", (a) => {
      a.preventDefault();
      const d = 32, l = a.deltaY > 0 ? 1 : -1, u = e.scrollTop + l * d;
      e.scrollTo({ top: u, behavior: "smooth" });
    }, { passive: !1 });
  }
  handleScroll(e, t) {
    const s = e.scrollTop, o = Math.round(s / 32), a = e.querySelectorAll(".txydp-time-cell");
    if (a.forEach((d) => d.classList.remove("active")), a[o]) {
      a[o].classList.add("active");
      const d = a[o].dataset.val;
      t === "hour" && (this.selectedHour = d), t === "minute" && (this.selectedMinute = d), t === "second" && (this.selectedSecond = d), this.updateFullInputString();
    }
  }
  scrollToValues(e, t, i) {
    const o = (a, d) => {
      const l = parseInt(d);
      a.scrollTop = l * 32;
      const u = a.querySelectorAll(".txydp-time-cell");
      u.forEach((n) => n.classList.remove("active")), u[l] && u[l].classList.add("active");
    };
    o(this.dom.hourCol, e), o(this.dom.minuteCol, t), o(this.dom.secondCol, i);
  }
  updateFullInputString() {
    let e = [];
    this.enableDate && (this.selectedDay !== null && this.selectedMonth !== null && this.selectedYear !== null ? e.push(`${this.selectedDay.toString().padStart(2, "0")}/${(this.selectedMonth + 1).toString().padStart(2, "0")}/${this.selectedYear.toString().padStart(4, "0")}`) : e.push(this.lang.placeholderDate)), this.enableTime && e.push(`${this.selectedHour}:${this.selectedMinute}:${this.selectedSecond}`), this.dom.input.value = e.join(" "), this.updateHiddenInput();
  }
  showCalendarView() {
    this.dom.yearPickerView.classList.remove("active"), this.dom.calendarGridView.style.display = "block", this.dom.prevBtn.style.visibility = "visible", this.dom.nextBtn.style.visibility = "visible";
  }
  toggleYearView(e) {
    e.stopPropagation(), this.dom.yearPickerView.classList.contains("active") ? this.showCalendarView() : this.showYearPicker();
  }
  showYearPicker() {
    const e = this.dom.calendarGridView.offsetHeight;
    this.dom.calendarGridView.style.display = "none", this.dom.yearPickerView.classList.add("active"), this.dom.yearPickerView.style.height = e + "px", this.dom.prevBtn.style.visibility = "hidden", this.dom.nextBtn.style.visibility = "hidden", this.renderYearPicker();
  }
  renderYearPicker() {
    this.dom.yearPickerView.innerHTML = "";
    const e = this.realToday.getFullYear();
    let t = null;
    for (let i = this.minDate.getFullYear(); i <= this.maxDate.getFullYear(); i++) {
      const s = document.createElement("div");
      s.classList.add("txydp-year-item"), s.innerText = i, i === this.currentYear && (s.classList.add("selected"), t = s), i === e && s.classList.add("current-year"), s.addEventListener("click", (o) => {
        o.stopPropagation(), this.currentYear = i, this.currentYear === this.minDate.getFullYear() && this.currentMonth < this.minDate.getMonth() && (this.currentMonth = this.minDate.getMonth()), this.currentYear === this.maxDate.getFullYear() && this.currentMonth > this.maxDate.getMonth() && (this.currentMonth = this.maxDate.getMonth()), this.renderCalendar(this.currentMonth, this.currentYear), this.showCalendarView();
      }), this.dom.yearPickerView.appendChild(s);
    }
    t && setTimeout(() => t.scrollIntoView({ block: "center", behavior: "auto" }), 0);
  }
  isDateRestricted(e) {
    if (!e) return !1;
    if (this.disableWeekDays.includes(e.getDay())) return !0;
    const t = `${e.getFullYear()}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}`;
    return this.disableDates.includes(t);
  }
  findNearestValidDate(e) {
    if (!this.isDateRestricted(e)) return e;
    let t = 1;
    const i = 365, s = e.getTime();
    for (; t < i; ) {
      const o = new Date(s);
      if (o.setDate(o.getDate() + t), !this.isDateRestricted(o)) return o;
      const a = new Date(s);
      if (a.setDate(a.getDate() - t), !this.isDateRestricted(a)) return a;
      t++;
    }
    return e;
  }
  triggerErrorEffect() {
    const e = this.dom.wrapper.querySelector(".txydp-input-group");
    e.classList.remove("input-error"), e.offsetWidth, e.classList.add("input-error"), setTimeout(() => {
      e.classList.remove("input-error");
    }, 400);
  }
  showWarningMessage(e) {
    const t = this.dom.warningMsg;
    if (!t || !this.dom.inputGroup) return;
    t.innerHTML = e;
    const i = this.dom.inputGroup.getBoundingClientRect(), s = window.scrollY || document.documentElement.scrollTop, o = window.scrollX || document.documentElement.scrollLeft, a = i.left + o + i.width / 2, d = i.top + s - 10;
    t.style.left = `${a}px`, t.style.top = `${d}px`, t.classList.add("visible"), this.warningTimeout && clearTimeout(this.warningTimeout), this.warningTimeout = setTimeout(() => {
      t.classList.remove("visible");
    }, 4e3);
  }
  renderCalendar(e, t) {
    if (!this.enableDate) return;
    this.dom.calendarDays.innerHTML = "", this.dom.monthYearDisplay.innerText = `${this.monthNames[e]} ${t}`;
    let i = new Date(this.minDate);
    i.setHours(0, 0, 0, 0);
    let s = new Date(this.maxDate);
    s.setHours(0, 0, 0, 0);
    let o = new Date(t, e - 1, 1), a = new Date(t, e + 1, 1);
    o < i && o.getMonth() !== i.getMonth() ? this.dom.prevBtn.classList.add("disabled") : this.dom.prevBtn.classList.remove("disabled"), a > s && a.getMonth() !== s.getMonth() ? this.dom.nextBtn.classList.add("disabled") : this.dom.nextBtn.classList.remove("disabled");
    let d = new Date(t, e, 1).getDay(), l = d === 0 ? 6 : d - 1, u = new Date(t, e + 1, 0).getDate(), n = new Date(t, e, 0).getDate();
    for (let r = 0; r < l; r++) {
      const c = n - l + 1 + r, m = document.createElement("div");
      m.classList.add("txydp-day", "other-month"), m.innerText = c;
      let p = new Date(t, e - 1, c);
      p < i && (m.style.visibility = "hidden", m.style.pointerEvents = "none"), this.isDateRestricted(p) && (m.style.pointerEvents = "none"), this.dom.calendarDays.appendChild(m);
    }
    for (let r = 1; r <= u; r++) {
      const c = document.createElement("div");
      c.classList.add("txydp-day"), c.innerText = r;
      let m = new Date(t, e, r);
      m < i || m > s ? (c.style.visibility = "hidden", c.style.pointerEvents = "none") : this.isDateRestricted(m) && c.classList.add("restricted-day"), this.selectedDay !== null && r === this.selectedDay && e === this.selectedMonth && t === this.selectedYear && !c.classList.contains("restricted-day") && c.classList.add("selected"), r === this.realToday.getDate() && e === this.realToday.getMonth() && t === this.realToday.getFullYear() && c.classList.add("today"), this.dom.calendarDays.appendChild(c);
    }
    const h = l + u;
    for (let r = 1; r <= 42 - h; r++) {
      const c = document.createElement("div");
      c.classList.add("txydp-day", "other-month"), c.innerText = r;
      let m = new Date(t, e + 1, r);
      m > s && (c.style.visibility = "hidden", c.style.pointerEvents = "none"), this.isDateRestricted(m) && (c.style.pointerEvents = "none"), this.dom.calendarDays.appendChild(c);
    }
  }
}
window.TuncxysDatePicker = b;
export {
  b as default
};
