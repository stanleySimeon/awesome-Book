export const navigate = [
  {
    link: 'link_list',
    target_ID: 'section_list',
  },
  {
    link: 'add_link',
    target_ID: 'add_section',
  },
  {
    link: 'contact_link',
    target_ID: 'contact_section',
  },
];

export const navigations = () => {
  navigate.forEach((navigation) => {
    const link = document.getElementById(navigation.link);

    link.addEventListener('click', (e) => {
      e.preventDefault();

      const sections = document.querySelectorAll('main > section');
      sections.forEach((section) => {
        section.classList.add('display_none');
      });

      const target = document.getElementById(navigation.target_ID);
      target.classList.remove('display_none');
    });
  });
};