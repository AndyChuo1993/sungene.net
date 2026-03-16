export function cnText(lang: 'zh' | 'en' | 'cn', value: string): string {
  if (lang !== 'cn') return value
  const replaced = value
    .replace(/Core terms/gi, '核心术语')
    .replace(/Milestones/gi, '里程碑')
    .replace(/Market tiers/gi, '市场分层')
    .replace(/Buyer roles/gi, '买家角色')
    .replace(/Use Case/gi, '使用场景')
    .replace(/Importer\/Distributor\/Brand/gi, '进口商／经销商／品牌方')
    .replace(/CE\/RoHS\/REACH/gi, '欧盟合规要求')
    .replace(/MSDS\/TDS/gi, '材料与技术资料文件')
    .replace(/ISO13485/gi, '医疗器械质量管理认证')
    .replace(/Excel\/Sheet/gi, '电子表格')
    .replace(/USA/gi, '美国')
    .replace(/\bGermany\b/gi, '德国')
    .replace(/\bJapan\b/gi, '日本')
    .replace(/\bEurope\b/gi, '欧洲')
    .replace(/Middle East/gi, '中东')
    .replace(/Southeast Asia/gi, '东南亚')
    .replace(/\bOEM\b/g, '原厂代工')
    .replace(/\bODM\b/g, '原厂设计代工')
    .replace(/\bMOQ\b/g, '最小订购量')
    .replace(/\bCOA\b/g, '分析证明文件')
    .replace(/Cold Email/gi, '开发邮件')
    .replace(/\bSearch\b/gi, '搜索')
    .replace(/\bLists\b/gi, '名单')
    .replace(/\bCadence\b/gi, '节奏')
    .replace(/\bSources\b/gi, '来源')
    .replace(/\bValidation\b/gi, '验证')
    .replace(/\bFields\b/gi, '字段')
    .replace(/\bDelivery\b/gi, '交付')
    .replace(/\bProof\b/gi, '证据')
    .replace(/\bEU\b/g, '欧盟')
    .replace(/Lead Magnet/gi, '免费资源')
    .replace(/Checklist/gi, '检查清单')
    .replace(/CTA/g, '行动号召')
    .replace(/\bSOP\b/g, '标准作业流程')
    .replace(/\bB2B\b/g, '企业对企业')
    .replace(/\bSEO\b/gi, '搜索优化')
    .replace(/Outbound/gi, '主动开发')
    .replace(/inbound/gi, '自然流量')
    .replace(/LinkedIn/gi, '领英')
    .replace(/\bEmail\b/gi, '邮件')
    .replace(/\bGDPR\b/g, '欧盟数据保护规范')
    .replace(/\bPCB\b/g, '印刷电路板')

  const map: Record<string, string> = {
    體: '体', 學: '学', 術: '术', 對: '对', 業: '业', 務: '务', 開: '开', 發: '发', 買: '买', 賣: '卖',
    經: '经', 銷: '销', 網: '网', 路: '路', 國: '国', 際: '际', 資: '资', 料: '料', 庫: '库', 建: '建',
    置: '置', 驗: '验', 證: '证', 無: '无', 效: '效', 名: '名', 單: '单', 與: '与', 決: '决', 策: '策',
    人: '人', 聯: '联', 絡: '络', 觸: '触', 達: '达', 節: '节', 奏: '奏', 跟: '跟', 進: '进', 會: '会',
    議: '议', 報: '报', 價: '价', 詢: '询', 問: '问', 題: '题', 應: '应', 產: '产', 場: '场', 關: '关',
    鍵: '键', 詞: '词', 規: '规', 劃: '划', 內: '内', 部: '部', 連: '连', 結: '结', 則: '则', 化: '化',
    頁: '页', 型: '型', 覆: '覆', 蓋: '盖', 長: '长', 尾: '尾', 搜: '搜', 尋: '寻', 優: '优', 勢: '势',
    條: '条', 件: '件', 試: '试', 錄: '录', 標: '标', 註: '注', 檢: '检', 查: '查', 清: '清', 錯: '错',
    誤: '误', 時: '时', 間: '间', 這: '这', 為: '为', 讓: '让', 後: '后', 輸: '输', 出: '出', 說: '说',
    點: '点', 據: '据', 專: '专', 層: '层', 總: '总', 廣: '广', 實: '实', 覽: '览', 種: '种', 麼: '么',
    個: '个', 常: '常', 見: '见', 轉: '转', 換: '换', 圖: '图', 製: '制', 導: '导', 僅: '仅',
  }
  return replaced.replace(/[\u4e00-\u9fff]/g, (char) => map[char] ?? char)
}
