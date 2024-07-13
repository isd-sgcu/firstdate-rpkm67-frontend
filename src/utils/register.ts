export const major: { id: string; name: string }[] = [
  { id: '21', name: 'วิศวกรรมศาสตร์' },
  { id: '22', name: 'อักษรศาสตร์' },
  { id: '23', name: 'วิทยาศาสตร์' },
  { id: '24', name: 'รัฐศาสตร์' },
  { id: '25', name: 'สถาปัตยกรรมศาสตร์' },
  { id: '26', name: 'พาณิชยศาสตร์และการบัญชี' },
  { id: '27', name: 'ครุศาสตร์' },
  { id: '28', name: 'นิเทศศาสตร์' },
  { id: '29', name: 'เศรษฐศาสตร์' },
  { id: '30', name: 'แพทยศาสตร์' },
  { id: '31', name: 'สัตวแพทยศาสตร์' },
  { id: '32', name: 'ทันตแพทยศาสตร์' },
  { id: '33', name: 'เภสัชศาสตร์' },
  { id: '34', name: 'นิติศาสตร์' },
  { id: '35', name: 'ศิลปกรรมศาสตร์' },
  { id: '36', name: 'พยาบาลศาสตร์' },
  { id: '37', name: 'สหเวชศาสตร์' },
  { id: '38', name: 'จิตวิทยา' },
  { id: '39', name: 'วิทยาศาสตร์การกีฬา' },
];

export const majorMap = {
  '21': 'วิศวกรรมศาสตร์',
  '22': 'อักษรศาสตร์',
  '23': 'วิทยาศาสตร์',
  '24': 'รัฐศาสตร์',
  '25': 'สถาปัตยกรรมศาสตร์',
  '26': 'พาณิชยศาสตร์และการบัญชี',
  '27': 'ครุศาสตร์',
  '28': 'นิเทศศาสตร์',
  '29': 'เศรษฐศาสตร์',
  '30': 'แพทยศาสตร์',
  '31': 'สัตวแพทยศาสตร์',
  '32': 'ทันตแพทยศาสตร์',
  '33': 'เภสัชศาสตร์',
  '34': 'นิติศาสตร์',
  '35': 'ศิลปกรรมศาสตร์',
  '36': 'พยาบาลศาสตร์',
  '37': 'สหเวชศาสตร์',
  '38': 'จิตวิทยา',
  '39': 'วิทยาศาสตร์การกีฬา',
};

export const getMajorNameById = (id: string): string => {
  return (majorMap as any)[id];
};
