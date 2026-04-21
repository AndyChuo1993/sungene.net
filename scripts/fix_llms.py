import re
import os

filepath = r"c:\Users\User\Desktop\上瑾錸\程式製作\web_machine\app\[lang]\llms.txt\route.ts"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

oem_odm = "".join([chr(79), chr(69), chr(77), "/", chr(79), chr(68), chr(77)])

# KO
content = content.replace(
    "제조 및 수출 기업입니다.",
    "전문 소싱 파트너 및 수출 기업입니다."
)
content = content.replace(
    "{ q: 'SunGene은 어떤 제품을 제조하나요?', a:", # if it was that
    "{ q: 'SunGene은 어떤 기계를 공급하나요?', a:"
)
content = content.replace(
    "{ q: 'SunGene은 어떤 기계를 제조하나요?', a:", # if it was that
    "{ q: 'SunGene은 어떤 기계를 공급하나요?', a:"
)

# AR
content = content.replace(
    "شركة تايوانية مصنعة ومصدرة",
    "شريك توريد ومصدر تايواني"
)
content = content.replace(
    "ماذا تصنع SunGene؟",
    "ماذا توفر SunGene؟"
)
content = content.replace(
    f"هل تقبل SunGene تصنيعاً حسب الطلب {oem_odm}؟",
    "هل تقبل SunGene تخصيص المواصفات؟"
)

# TH
content = content.replace(
    "SunGene ผลิตเครื่องอะไรบ้าง?",
    "SunGene จัดหาเครื่องอะไรบ้าง?"
)
content = content.replace(
    f"รับทำ {oem_odm} ไหม?",
    "รับปรับสเปกตามต้องการไหม?"
)

# VI
content = content.replace(
    "là nhà sản xuất và xuất khẩu",
    "là đối tác tìm nguồn cung ứng và xuất khẩu"
)
content = content.replace(
    "SunGene sản xuất những loại máy nào?",
    "SunGene cung cấp những loại máy nào?"
)
content = content.replace(
    "Thời gian sản xuất bao lâu?",
    "Thời gian cung cấp và giao hàng bao lâu?"
)

# DE
content = content.replace(
    "ein taiwanesischer Hersteller und Exporteur",
    "ein taiwanesischer Sourcing-Partner und Exporteur"
)
content = content.replace(
    "Was stellt SunGene her?",
    "Welche Maschinen liefert SunGene?"
)

# EN (Just in case, let's verify any remaining)
# JA
content = content.replace(
    "台湾の包装機械、食品加工機器、充填・シールシステム、コンベア・自動化ラインの製造・輸出企業です。",
    "台湾の包装機械、食品加工機器、充填・シールシステム、コンベア・自動化ラインの専門的なソーシング・輸出パートナーです。"
)
content = content.replace(
    "SunGeneは何を製造していますか？",
    "SunGeneはどのような機械を提供していますか？"
)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
