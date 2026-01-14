import { getFullUrl } from '../config/seo';

export function generateStructuredData(locale: 'zh-TW' | 'en') {
  const url = locale === 'zh-TW' ? getFullUrl() : getFullUrl('en/');
  
  if (locale === 'zh-TW') {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "繆勝翔",
      "alternateName": "Cuzo",
      "jobTitle": "資深前端工程師 / UX 支援",
      "email": "ascz123j@gmail.com",
      "url": url,
      "sameAs": [
        "https://github.com/cuzo989874"
      ],
      "description": "擁有7年前端開發經驗，專精於 ERP、POS 等 B2B 開發以及 UI/UX 協作。擅長 Vue.js、Angular2、React、TypeScript、SCSS 等技術。",
      "knowsAbout": [
        "前端開發",
        "Vue.js",
        "Angular",
        "React",
        "TypeScript",
        "SCSS",
        "UI/UX 設計",
        "ERP 系統開發",
        "POS 系統開發"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "國立高雄科技大學",
        "department": "資訊管理系"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "WITS"
      }
    };
  } else {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sheng-Hsiang Miao",
      "alternateName": "Cuzo",
      "jobTitle": "Senior Frontend Engineer / UX Support",
      "email": "ascz123j@gmail.com",
      "url": url,
      "sameAs": [
        "https://github.com/cuzo989874"
      ],
      "description": "Senior Frontend Engineer with 7 years of frontend development experience. Specialized in B2B development including ERP and POS systems, as well as UI/UX collaboration. Proficient in Vue.js, Angular2, React, TypeScript, SCSS, and more.",
      "knowsAbout": [
        "Frontend Development",
        "Vue.js",
        "Angular",
        "React",
        "TypeScript",
        "SCSS",
        "UI/UX Design",
        "ERP System Development",
        "POS System Development"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "National Kaohsiung University of Science and Technology",
        "department": "Department of Information Management"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "WITS"
      }
    };
  }
}
