import { Report } from "@/types/report";

export const REPORT_DEPARTMENTS = [
  "Metallurgiya bo'limi",
  "Boyitish majmuasi",
  "Konchilik bo'limi",
  "HSSE bo'limi",
];

export const RISK_CATEGORIES = ["Yong'in xavfi", "Elektr xavfi", "Ekologik xavf", "Mexanik xavf"];

export const TYPE_CONFIG = {
  nearmiss:    { label: "Near Miss",   color: "text-orange-700 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/30",   border: "border-l-orange-500" },
  observation: { label: "Observation", color: "text-sky-700 dark:text-sky-400",       bg: "bg-sky-100 dark:bg-sky-900/30",         border: "border-l-sky-500"    },
  accident:    { label: "Accident",    color: "text-red-700 dark:text-red-400",        bg: "bg-red-100 dark:bg-red-900/30",         border: "border-l-red-500"    },
  incident:    { label: "Incident",    color: "text-violet-700 dark:text-violet-400",  bg: "bg-violet-100 dark:bg-violet-900/30",   border: "border-l-violet-500" },
};

export const STATUS_CONFIG = {
  new:          { label: "Yangi",           color: "text-blue-700",   bg: "bg-blue-50 dark:bg-blue-900/20",     dot: "bg-blue-500",   colBg: "bg-blue-50/60 dark:bg-blue-900/10"    },
  accepted:     { label: "Qabul qilingan",  color: "text-violet-700", bg: "bg-violet-50 dark:bg-violet-900/20", dot: "bg-violet-500", colBg: "bg-violet-50/60 dark:bg-violet-900/10" },
  "in-progress":{ label: "Jarayonda",       color: "text-amber-700",  bg: "bg-amber-50 dark:bg-amber-900/20",   dot: "bg-amber-500",  colBg: "bg-amber-50/60 dark:bg-amber-900/10"  },
  cancelled:    { label: "Bekor qilingan",  color: "text-red-700",    bg: "bg-red-50 dark:bg-red-900/20",       dot: "bg-red-500",    colBg: "bg-red-50/60 dark:bg-red-900/10"      },
  completed:    { label: "Yakunlangan",     color: "text-green-700",  bg: "bg-green-50 dark:bg-green-900/20",   dot: "bg-green-500",  colBg: "bg-green-50/60 dark:bg-green-900/10"  },
};

export const PRIORITY_CONFIG = {
  high:   { label: "High",   bg: "bg-red-100 dark:bg-red-900/30",    color: "text-red-700 dark:text-red-400"    },
  medium: { label: "Medium", bg: "bg-amber-100 dark:bg-amber-900/30",color: "text-amber-700 dark:text-amber-400"},
  low:    { label: "Low",    bg: "bg-green-100 dark:bg-green-900/30",color: "text-green-700 dark:text-green-400"},
};

export const KANBAN_COLUMNS: { id: import("@/types/report").ReportStatus; label: string }[] = [
  { id: "new",          label: "Yangi"          },
  { id: "accepted",     label: "Qabul qilingan" },
  { id: "in-progress",  label: "Jarayonda"      },
  { id: "cancelled",    label: "Bekor qilingan" },
  { id: "completed",    label: "Yakunlangan"    },
];

const AUTHORS = [
  { id: "u1", name: "Aziza Karimova",  avatar: "https://avatar.vercel.sh/aziza"  },
  { id: "u2", name: "Jasur Toshmatov", avatar: "https://avatar.vercel.sh/jasur"  },
  { id: "u3", name: "Malika Yusupova", avatar: "https://avatar.vercel.sh/malika" },
  { id: "u4", name: "Sardor Mirzayev", avatar: "https://avatar.vercel.sh/sardor" },
  { id: "u5", name: "Kamola Ergasheva",avatar: "https://avatar.vercel.sh/kamola" },
];

export const MOCK_REPORTS: Report[] = [
  { id:"r1", reportId:"RPT-001", title:"Quvur liniyasida bosim tushishi",  description:"3-uchastka yaqinida quvur bosimi keskin tushdi, zudlik bilan texnik tekshiruv o'tkazish zarur.", type:"nearmiss",    status:"new",          priority:"high",   department:"Konchilik bo'limi",    riskCategory:"Mexanik xavf",   author:AUTHORS[0], likes:4,  comments:7,  attachments:2, createdAt:"2026-06-14", updatedAt:"2026-06-14" },
  { id:"r2", reportId:"RPT-002", title:"Elektr panelida nosozlik",          description:"B-blokdagi elektr paneli qizib ketdi, ishchilar evakuatsiya qilindi.",                             type:"incident",     status:"new",          priority:"high",   department:"HSSE bo'limi",         riskCategory:"Elektr xavfi",   author:AUTHORS[1], likes:2,  comments:3,  attachments:1, createdAt:"2026-06-15", updatedAt:"2026-06-15" },
  { id:"r3", reportId:"RPT-003", title:"Ishchi himoya vositasisiz",         description:"Metallurgiya bo'limida ishchi shlem va ko'zoynak kiymasdan ish boshlagani aniqlandi.",              type:"observation",  status:"accepted",     priority:"medium", department:"Metallurgiya bo'limi", riskCategory:"Mexanik xavf",   author:AUTHORS[2], likes:1,  comments:5,  attachments:3, createdAt:"2026-06-12", updatedAt:"2026-06-13" },
  { id:"r4", reportId:"RPT-004", title:"Yong'in o'chirish jihozi eskirgan", description:"Konchi bo'limidagi o't o'chiruvchi qurilmalar texnik holati qoniqarsiz.",                          type:"observation",  status:"accepted",     priority:"low",    department:"Konchilik bo'limi",    riskCategory:"Yong'in xavfi",  author:AUTHORS[3], likes:0,  comments:2,  attachments:0, createdAt:"2026-06-10", updatedAt:"2026-06-11" },
  { id:"r5", reportId:"RPT-005", title:"Yiqilish oqibatida jarohat",        description:"A-uchastka narvonidan ishchi yiqilib, oyog'ini jarohatlaganligi haqida xabar keldi.",               type:"accident",     status:"in-progress",  priority:"high",   department:"Boyitish majmuasi",    riskCategory:"Mexanik xavf",   author:AUTHORS[4], likes:6,  comments:12, attachments:5, createdAt:"2026-06-11", updatedAt:"2026-06-14" },
  { id:"r6", reportId:"RPT-006", title:"Gaz sizishi aniqlandi",             description:"Qozonxona yaqinida gaz hidi sezildi, darhol barcha ishchilar evakuatsiya qilindi.",                 type:"incident",     status:"in-progress",  priority:"high",   department:"HSSE bo'limi",         riskCategory:"Ekologik xavf",  author:AUTHORS[0], likes:9,  comments:15, attachments:4, createdAt:"2026-06-13", updatedAt:"2026-06-15" },
  { id:"r7", reportId:"RPT-007", title:"Yo'lda yog' oqishi",                description:"Ishlab chiqarish maydonchasidagi yo'lda sirt moyi oqib, siljish xavfi tug'dirdi.",                  type:"nearmiss",     status:"completed",    priority:"medium", department:"Metallurgiya bo'limi", riskCategory:"Ekologik xavf",  author:AUTHORS[1], likes:3,  comments:4,  attachments:2, createdAt:"2026-06-08", updatedAt:"2026-06-12" },
  { id:"r8", reportId:"RPT-008", title:"Kran trossi eskirgan",              description:"Yuklash kranining asosiy trossi kuchli eskirganligini vizual tekshiruv ko'rsatdi.",                  type:"observation",  status:"completed",    priority:"medium", department:"Konchilik bo'limi",    riskCategory:"Mexanik xavf",   author:AUTHORS[2], likes:2,  comments:6,  attachments:1, createdAt:"2026-06-07", updatedAt:"2026-06-10" },
  { id:"r9", reportId:"RPT-009", title:"Kimyoviy modda to'kilishi",         description:"Laboratoriyada kimyoviy eritma to'kilishi yuz berdi, bir ishchi qo'li yengil kuydi.",               type:"accident",     status:"cancelled",    priority:"high",   department:"Boyitish majmuasi",    riskCategory:"Ekologik xavf",  author:AUTHORS[3], likes:1,  comments:3,  attachments:2, createdAt:"2026-06-09", updatedAt:"2026-06-11" },
  { id:"r10",reportId:"RPT-010", title:"Elektr simlari himoyasiz",          description:"Tashqi saqlash maydonida himoyasiz elektr simlari aniqlandi, xavf darajasi yuqori.",                type:"nearmiss",     status:"new",          priority:"medium", department:"HSSE bo'limi",         riskCategory:"Elektr xavfi",   author:AUTHORS[4], likes:0,  comments:1,  attachments:0, createdAt:"2026-06-15", updatedAt:"2026-06-15" },
  { id:"r11",reportId:"RPT-011", title:"Shovqin darajasi normadan yuqori",  description:"Metallurgiya sexida shovqin darajasi ruxsat etilgan 85 dB dan oshib 110 dB qayd etildi.",           type:"observation",  status:"in-progress",  priority:"low",    department:"Metallurgiya bo'limi", riskCategory:"Mexanik xavf",   author:AUTHORS[0], likes:5,  comments:8,  attachments:3, createdAt:"2026-06-13", updatedAt:"2026-06-14" },
  { id:"r12",reportId:"RPT-012", title:"Yong'in chiqishi",                  description:"Elektr щit xonasida kichik yong'in chiqdi, o'z vaqtida o'chirib tashlandi.",                        type:"accident",     status:"completed",    priority:"high",   department:"HSSE bo'limi",         riskCategory:"Yong'in xavfi",  author:AUTHORS[1], likes:7,  comments:10, attachments:6, createdAt:"2026-06-05", updatedAt:"2026-06-09" },
];
