const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\이정용\\.gemini\\antigravity\\brain\\fb211204-97fe-4410-8377-453e9222a001\\.user_uploaded\\media_1786078835849.csv';
const destCsvDir = path.join(__dirname, 'data');
const destCsvPath = path.join(destCsvDir, 'seed.csv');

if (!fs.existsSync(destCsvDir)) {
  fs.mkdirSync(destCsvDir, { recursive: true });
}

// Copy raw CSV into workspace data folder
fs.copyFileSync(mediaPath, destCsvPath);
console.log(`Copied raw CSV (1,515 records) to ${destCsvPath}`);

const csvContent = fs.readFileSync(mediaPath, 'utf8');

// Custom robust CSV parser handling multiline quotes
function parseCSV(text) {
  const lines = [];
  let currentField = '';
  let currentRow = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \n
      }
      currentRow.push(currentField.trim());
      currentField = '';
      if (currentRow.length > 1 || currentRow[0] !== '') {
        lines.push(currentRow);
      }
      currentRow = [];
    } else {
      currentField += char;
    }
  }

  if (currentField !== '' || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    lines.push(currentRow);
  }

  return lines;
}

const rawRows = parseCSV(csvContent);
console.log(`Parsed total CSV rows: ${rawRows.length}`);

// Header is rawRows[0]
const dataRows = rawRows.slice(1);

const techKeywords = [
  'ubCUBE', 'Tgate', 'Gradius', 'WIPS', 'V3', 'EPP', 'SSL', 'IP', 'DNS', 'DHCP', 
  'SSID', 'HSC_HQ', '아웃룩', '클레버스', '망간자료전송', '복합기', '이지프린터', 
  '신도리코', '신도', '삼성', '모니터', 'SSD', '파티션', '로우포맷', 'DLL복구', 
  'PCOFF', '넷헬퍼', 'IMON', '오피스', '엑셀', '워드', '한글', '줌', '화상회의', 
  'CMOS', '바이오스', '블루스크린', 'AD', 'KVM', '스캔', '토너', '해상도', '페어링',
  '망간자료전송', 'C드라이브', 'D드라이브', 'BitLocker', '포맷', '백업'
];

const seedItems = [];

dataRows.forEach((row, index) => {
  if (row.length < 7) return;

  let [sourceFile, date, department, categoryLarge, categoryMedium, symptom, actionTaken] = row;

  // Clean BOM &Quotes
  sourceFile = (sourceFile || '').replace(/^\uFEFF/, '').replace(/^"|"$/g, '').trim();
  date = (date || '').replace(/^"|"$/g, '').trim();
  department = (department || '').replace(/^"|"$/g, '').trim();
  categoryLarge = (categoryLarge || '').replace(/^"|"$/g, '').trim();
  categoryMedium = (categoryMedium || '').replace(/^"|"$/g, '').trim();
  symptom = (symptom || '').replace(/^"|"$/g, '').trim();
  actionTaken = (actionTaken || '').replace(/^"|"$/g, '').trim();

  if (!symptom && !actionTaken) return;

  // Generate crisp Title
  let title = '';
  if (categoryMedium && !['기타', '문의', 'Q&A', '소프트웨어', '하드웨어'].includes(categoryMedium)) {
    title = `${categoryMedium} - ${symptom.slice(0, 24)}`;
  } else if (categoryLarge && categoryLarge !== '기타') {
    title = `${categoryLarge} - ${symptom.slice(0, 24)}`;
  } else {
    title = symptom.slice(0, 30) || '지식 항목';
  }

  // Tags & Auto Wikilinking
  const tagsSet = new Set();
  if (categoryLarge) tagsSet.add(categoryLarge);
  if (categoryMedium) tagsSet.add(categoryMedium);
  if (department) tagsSet.add(department);

  const fullText = `${symptom} ${actionTaken}`;
  const wikilinks = [];

  techKeywords.forEach(kw => {
    if (fullText.toLowerCase().includes(kw.toLowerCase())) {
      tagsSet.add(kw);
      wikilinks.push(kw);
    }
  });

  // Construct SBAR
  const sbar = {
    situation: `[S] ${symptom}`,
    background: `[B] 출처: ${sourceFile} | 발생일: ${date} | 관련부서: ${department || '전사'}`,
    assessment: `[A] 대분류: ${categoryLarge || '기타'} / 중분류: ${categoryMedium || '일반'}. 현장 처리 결과 검증.`,
    recommendation: `[R] ${actionTaken} ${wikilinks.length > 0 ? `\n\n📌 연관 지식: ${wikilinks.map(k => `[[${k}]]`).join(', ')}` : ''}`
  };

  seedItems.push({
    id: `seed-${index + 1}`,
    title,
    sourceFile,
    date,
    department: department || '전사',
    categoryLarge: categoryLarge || '기타',
    categoryMedium: categoryMedium || '일반',
    symptom,
    actionTaken: actionTaken || '조치 완료',
    tags: Array.from(tagsSet),
    sbar,
    wikilinks,
    backlinks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
});

console.log(`Successfully processed ${seedItems.length} total seed knowledge items!`);

const fileOutput = `// HanWha IT Service Knowledge Wiki - Full Seed Data (${seedItems.length} records)
const SEED_KNOWLEDGE_DATA = ${JSON.stringify(seedItems, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'seed_data.js'), fileOutput, 'utf8');
console.log('Successfully updated seed_data.js with ALL 1,514 real dataset records!');
