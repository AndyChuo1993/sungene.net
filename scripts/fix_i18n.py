import re

filepath = r"c:\Users\User\Desktop\上瑾錸\程式製作\web_machine\lib\i18n.ts"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# FR
content = content.replace("Fabricant taïwanais", "Partenaire de Sourcing Taïwanais")
content = content.replace("fabricant machines emballage", "partenaire machines emballage")
content = content.replace("exportateur machines Taiwan", "exportateur machines Taiwan") # fine

# ES
content = content.replace("Fabricante taiwanés", "Socio de Abastecimiento Taiwanés")
content = content.replace("fabricante maquinaria empaque", "socio maquinaria empaque")

# PT
content = content.replace("Fabricante taiwanês", "Parceiro de Sourcing Taiwanês")
content = content.replace("fabricante máquinas embalagem", "parceiro máquinas embalagem")

# KO
content = content.replace("대만 제조업체", "대만 소싱 파트너")
content = content.replace("포장기계 제조업체", "포장기계 소싱 파트너")

# JA
content = content.replace("台湾メーカー", "台湾ソーシングパートナー")
content = content.replace("包装機械メーカー", "包装機械ソーシングパートナー")

# AR
content = content.replace("شركة تصنيع تايوانية", "شريك توريد تايواني")
content = content.replace("شركة تصنيع آلات التعبئة", "شريك توريد آلات التعبئة")

# TH
content = content.replace("ผู้ผลิตไต้หวัน", "พันธมิตรจัดหาไต้หวัน")
content = content.replace("ผู้ผลิตเครื่องบรรจุภัณฑ์", "พันธมิตรจัดหาเครื่องบรรจุภัณฑ์")

# VI
content = content.replace("Nhà sản xuất Đài Loan", "Đối tác nguồn cung Đài Loan")
content = content.replace("nhà sản xuất máy đóng gói", "đối tác cung cấp máy đóng gói")

# DE
content = content.replace("Hersteller aus Taiwan", "Sourcing-Partner aus Taiwan")
content = content.replace("Verpackungsmaschinen Hersteller", "Verpackungsmaschinen Sourcing-Partner")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated lib/i18n.ts")