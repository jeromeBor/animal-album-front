interface NavLink {
  title: string;
  href: string;
  sublink?: NavLink[]; // Optionnel
  description?: string; // Optionnel
}

export const navLinks: NavLink[] = [
  {
    title: 'Animals',
    href: '/animals',
    // sublink: [
    //   { title: 'Nox', href: '/1' },
    //   { title: 'Nolga', href: '/2' },
    // ],
  },
  {
    title: 'Owners',
    href: '/owners',
    // sublink: [{ title: 'Jerome', href: '/1' }],
  },
];
