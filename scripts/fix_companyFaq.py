import re

filepath = r"c:\Users\User\Desktop\上瑾錸\程式製作\web_machine\lib\companyFaq.ts"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    "All machines are manufactured in Taichung": "All machines are sourced and assembled through our network in Taiwan and China",
    "所有機器於台中製造": "所有設備透過我們在台灣與中國的供應鏈網路進行整合",
    "所有机器于台中制造": "所有设备透过我们在台湾与中国的供应链网络进行整合",
    "Toutes les machines sont fabriquées à Taichung": "Toutes les machines sont sourcées et assemblées via notre réseau à Taïwan et en Chine",
    "Todas las máquinas se fabrican en Taichung": "Todas las máquinas se abastecen y ensamblan a través de nuestra red en Taiwán y China",
    "Todas as máquinas são fabricadas em Taichung": "Todas as máquinas são fornecidas e montadas através de nossa rede em Taiwan e na China",
    "모든 기계는 타이중에서 제조되어": "모든 장비는 대만과 중국의 공급망을 통해 통합되어",
    "すべての機械は台中で製造され": "すべての設備は台湾と中国のサプライチェーンネットワークを通じて統合され",
    "تُصنَّع جميع الآلات في تايتشونغ": "يتم توريد وتجميع جميع الآلات عبر شبكتنا في تايوان والصين",
    "เครื่องทั้งหมดผลิตที่ไทจง": "อุปกรณ์ทั้งหมดถูกจัดหาและประกอบผ่านเครือข่ายของเราในไต้หวันและจีน",
    "Tất cả máy được sản xuất tại Đài Trung": "Tất cả thiết bị được cung cấp và lắp ráp thông qua mạng lưới của chúng tôi tại Đài Loan và Trung Quốc",
    "Alle Maschinen werden in Taichung hergestellt": "Alle Maschinen werden über unser Netzwerk in Taiwan und China beschafft und montiert",
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated companyFaq.ts")