export const locales = {
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