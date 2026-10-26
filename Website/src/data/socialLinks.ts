/**
 * ==============================================================================
 * SOCIAL & CODING PROFILES CONFIGURATION
 * ==============================================================================
 * This is the SINGLE central file where you can manage all your social and coding
 * links (LinkedIn, GitHub, Email, LeetCode, CodeChef, HackerRank, Codeforces, etc.).
 *
 * HOW IT WORKS:
 * - If a link has `enabled: false` OR `url: ""` (empty), it will NOT appear on the website.
 * - To display a link on the website:
 *     1. Paste your profile URL in the `url` field (e.g. "https://leetcode.com/u/your_username")
 *     2. Set `enabled: true`
 *     3. Optionally update `handle` (e.g. "@your_username")
 *     4. Save the file! It will immediately show up in the Hero, Contact, and Footer!
 * ==============================================================================
 */

export interface SocialLinkItem {
  id: string;
  name: string;
  url: string; // The URL to your profile. Leave empty "" or set enabled: false to hide from website
  handle?: string; // Short handle/username displayed on profile cards (e.g. "aniket-kumar-dev")
  description?: string; // Subtitle on profile cards (e.g. "Competitive Programming & Problem Solving")
  icon: 'linkedin' | 'github' | 'email' | 'leetcode' | 'codechef' | 'hackerrank' | 'codeforces' | 'twitter' | 'external';
  category: 'primary' | 'coding' | 'social';
  enabled: boolean; // Set to true to show, false to keep internal/hidden
  colorTheme: {
    text: string; // Tailwind color class e.g. "text-blue-400"
    borderHover: string; // Tailwind border hover class e.g. "hover:border-blue-500/50"
    bgHover: string; // Tailwind bg hover class
    badgeBg: string; // Badge bg e.g. "bg-blue-500/20 text-blue-400"
    accentHex: string; // Hex color for glows/accents
  };
}

export const SOCIAL_PROFILES: SocialLinkItem[] = [
  // ----------------------------------------------------------------------------
  // 1. ACTIVE WORKING PROFILES (Currently displayed on the website)
  // ----------------------------------------------------------------------------
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aniket-kumar-dev',
    handle: 'aniket-kumar-dev',
    description: 'Professional Network & Engineering Updates',
    icon: 'linkedin',
    category: 'primary',
    enabled: true, // DISPLAYED ON WEBSITE
    colorTheme: {
      text: 'text-blue-400',
      borderHover: 'hover:border-blue-500/50',
      bgHover: 'hover:bg-blue-500/10',
      badgeBg: 'bg-blue-500/20 text-blue-400',
      accentHex: '#0077b5',
    },
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Aniket-008',
    handle: 'Aniket-008',
    description: 'Repositories, Systems Code & Open Source',
    icon: 'github',
    category: 'primary',
    enabled: true, // DISPLAYED ON WEBSITE
    colorTheme: {
      text: 'text-purple-400',
      borderHover: 'hover:border-purple-500/50',
      bgHover: 'hover:bg-purple-500/10',
      badgeBg: 'bg-purple-500/20 text-purple-400',
      accentHex: '#a855f7',
    },
  },
  {
    id: 'email',
    name: 'Email',
    url: 'aniketkumar200631@gmail.com',
    handle: 'aniketkumar200631@gmail.com',
    description: 'Direct inquiries & opportunities',
    icon: 'email',
    category: 'primary',
    enabled: true, // DISPLAYED ON WEBSITE
    colorTheme: {
      text: 'text-cyan-400',
      borderHover: 'hover:border-cyan-500/50',
      bgHover: 'hover:bg-cyan-500/10',
      badgeBg: 'bg-cyan-500/20 text-cyan-400',
      accentHex: '#06b6d4',
    },
  },

  // ----------------------------------------------------------------------------
  // 2. CODING & PROBLEM-SOLVING PROFILES (INTERNAL - Currently hidden)
  // To display any of these on the website:
  // -> Add your link in `url` AND set `enabled: true`
  // ----------------------------------------------------------------------------
  {
    id: 'leetcode',
    name: 'LeetCode',
    url: '', // e.g. "https://leetcode.com/u/your_username"
    handle: 'LeetCode Profile',
    description: 'Data Structures & Algorithmic Problem Solving',
    icon: 'leetcode',
    category: 'coding',
    enabled: false, // Set to true when you add your link to display on website
    colorTheme: {
      text: 'text-amber-400',
      borderHover: 'hover:border-amber-500/50',
      bgHover: 'hover:bg-amber-500/10',
      badgeBg: 'bg-amber-500/20 text-amber-400',
      accentHex: '#ffa116',
    },
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    url: '', // e.g. "https://www.codechef.com/users/your_username"
    handle: 'CodeChef Profile',
    description: 'Competitive Programming Contests & Rating',
    icon: 'codechef',
    category: 'coding',
    enabled: false, // Set to true when you add your link to display on website
    colorTheme: {
      text: 'text-orange-400',
      borderHover: 'hover:border-orange-500/50',
      bgHover: 'hover:bg-orange-500/10',
      badgeBg: 'bg-orange-500/20 text-orange-400',
      accentHex: '#d17215',
    },
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    url: '', // e.g. "https://www.hackerrank.com/profile/your_username"
    handle: 'HackerRank Profile',
    description: 'Problem Solving Badges & Skill Certifications',
    icon: 'hackerrank',
    category: 'coding',
    enabled: false, // Set to true when you add your link to display on website
    colorTheme: {
      text: 'text-emerald-400',
      borderHover: 'hover:border-emerald-500/50',
      bgHover: 'hover:bg-emerald-500/10',
      badgeBg: 'bg-emerald-500/20 text-emerald-400',
      accentHex: '#00ea64',
    },
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    url: '', // e.g. "https://codeforces.com/profile/your_username"
    handle: 'Codeforces Profile',
    description: 'Competitive Programming Division Rounds',
    icon: 'codeforces',
    category: 'coding',
    enabled: false, // Set to true when you add your link to display on website
    colorTheme: {
      text: 'text-red-400',
      borderHover: 'hover:border-red-500/50',
      bgHover: 'hover:bg-red-500/10',
      badgeBg: 'bg-red-500/20 text-red-400',
      accentHex: '#ef4444',
    },
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    url: '', // e.g. "https://x.com/your_handle"
    handle: '@your_handle',
    description: 'Tech Thoughts & Developer Community',
    icon: 'twitter',
    category: 'social',
    enabled: false, // Set to true when you add your link to display on website
    colorTheme: {
      text: 'text-gray-300',
      borderHover: 'hover:border-white/50',
      bgHover: 'hover:bg-white/10',
      badgeBg: 'bg-white/10 text-gray-200',
      accentHex: '#ffffff',
    },
  },
];

/**
 * Normalizes any URL so it works seamlessly in browser links.
 * E.g. "www.linkedin.com/..." -> "https://www.linkedin.com/..."
 * E.g. email -> "mailto:aniketkumar200631@gmail.com"
 */
export function formatProfileHref(item: SocialLinkItem): string {
  const raw = item.url.trim();
  if (!raw) return '#';
  if (item.id === 'email' || raw.includes('@') && !raw.startsWith('http')) {
    return raw.startsWith('mailto:') ? raw : `mailto:${raw}`;
  }
  if (!/^https?:\/\//i.test(raw)) {
    return `https://${raw}`;
  }
  return raw;
}

/**
 * Returns only the profiles that are enabled AND have a non-empty URL.
 * Internal/blank links will never be returned or displayed on the site.
 */
export function getActiveSocialLinks(): SocialLinkItem[] {
  return SOCIAL_PROFILES.filter(
    (item) => item.enabled && item.url.trim().length > 0
  );
}

/**
 * Returns active coding platform profiles only (e.g. LeetCode, CodeChef, HackerRank).
 */
export function getActiveCodingLinks(): SocialLinkItem[] {
  return SOCIAL_PROFILES.filter(
    (item) => item.category === 'coding' && item.enabled && item.url.trim().length > 0
  );
}

/**
 * Lookup helper to retrieve a profile by id (e.g. 'github', 'linkedin', 'email').
 */
export function getProfileById(id: string): SocialLinkItem | undefined {
  return SOCIAL_PROFILES.find((p) => p.id === id);
}
