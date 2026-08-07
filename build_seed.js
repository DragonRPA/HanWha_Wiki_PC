const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\이정용\\.gemini\\antigravity\\brain\\fb211204-97fe-4410-8377-453e9222a001\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');

// Unescape json string escapes
const unescaped = fileContent.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');

// Split lines
const lines = unescaped.split('\n');

const dataRows = [];
lines.forEach(l => {
  const trimmed = l.trim();
  if (
    trimmed.startsWith('서울 유지보수 대장,') ||
    trimmed.startsWith('판교 유지보수 대장,') ||
    trimmed.startsWith('PC지원 Q&A,') ||
    trimmed.startsWith('PC지원 단톡방.txt,')
  ) {
    dataRows.push(trimmed);
  }
});

// Deduplicate rows
const uniqueRows = Array.from(new Set(dataRows));
console.log(`Extracted total unique maintenance log rows: ${uniqueRows.length}`);

// Technology keywords for auto-tagging and auto-wikilinking
const techKeywords = [
  'ubCUBE', 'Tgate', 'Gradius', 'WIPS', 'V3', 'EPP', 'SSL', 'IP', 'DNS', 'DHCP', 
  'SSID', 'HSC_HQ', '아웃룩', '클레버스', '망간자료전송', '복합기', '이지프린터', 
  '신도리코', '신도', '삼성', '모니터', 'SSD', '파티션', '로우포맷', 'DLL복구', 
  'PCOFF', '넷헬퍼', 'IMON', '오피스', '엑셀', '워드', '한글', '줌', '화상회의', 
  'CMOS', '바이오스', '블루스크린', 'AD', 'WIPS', 'KVM', '스캔'
];

const seedItems = uniqueRows.map((line, index) => {
  // Parse CSV line handling quotes
  const parts = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  parts.push(current.trim());

  if (parts.length < 7) return null;

  const [sourceFile, date, department, categoryLarge, categoryMedium, symptom, actionTaken] = parts;

  const cleanSymptom = (symptom || '').replace(/^"|"$/g, '').trim();
  const cleanAction = (actionTaken || '').replace(/^"|"$/g, '').trim();
  const cleanDept = (department || '').replace(/^"|"$/g, '').trim();
  const cleanCatLarge = (categoryLarge || '').replace(/^"|"$/g, '').trim();
  const cleanCatMedium = (categoryMedium || '').replace(/^"|"$/g, '').trim();

  // Create crisp Title
  let title = '';
  if (cleanCatMedium && !['기타', '문의', 'Q&A', '소프트웨어', '하드웨어'].includes(cleanCatMedium)) {
    title = `${cleanCatMedium} - ${cleanSymptom.slice(0, 24)}`;
  } else {
    title = `${cleanCatLarge || 'IT장애'} - ${cleanSymptom.slice(0, 24)}`;
  }

  // Tags & WikiLinks
  const tagsSet = new Set();
  if (cleanCatLarge) tagsSet.add(cleanCatLarge);
  if (cleanCatMedium) tagsSet.add(cleanCatMedium);
  if (cleanDept) tagsSet.add(cleanDept);

  const fullText = `${cleanSymptom} ${cleanAction}`;
  const wikilinks = [];

  techKeywords.forEach(kw => {
    if (fullText.toLowerCase().includes(kw.toLowerCase())) {
      tagsSet.add(kw);
      wikilinks.push(kw);
    }
  });

  // Construct SBAR
  const sbar = {
    situation: `[S] ${cleanSymptom}`,
    background: `[B] 출처: ${sourceFile} | 날짜: ${date} | 관련부서: ${cleanDept || '전사'}`,
    assessment: `[A] 대분류: ${cleanCatLarge} / 중분류: ${cleanCatMedium}. 현장 시스템 및 관련 소프트웨어 영향도 검토.`,
    recommendation: `[R] ${cleanAction} ${wikilinks.length > 0 ? `\n\n📌 연관 지식 참조: ${wikilinks.map(k => `[[${k}]]`).join(', ')}` : ''}`
  };

  return {
    id: `seed-${index + 1}`,
    title: title.trim(),
    sourceFile,
    date,
    department: cleanDept || '전사',
    categoryLarge: cleanCatLarge || '기타',
    categoryMedium: cleanCatMedium || '기타',
    symptom: cleanSymptom,
    actionTaken: cleanAction,
    tags: Array.from(tagsSet),
    sbar,
    wikilinks,
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}).filter(Boolean);

console.log(`Constructed ${seedItems.length} total seed knowledge objects!`);

const output = `// HanWha IT Service Knowledge Wiki - Full Seed Data (${seedItems.length} records)
const SEED_KNOWLEDGE_DATA = ${JSON.stringify(seedItems, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'seed_data.js'), output, 'utf8');
console.log('Successfully wrote full dataset into seed_data.js!');
