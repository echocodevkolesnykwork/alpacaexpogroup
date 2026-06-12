// TEST DATA — TO BE REPLACED BY WP TOOLSET
// These two local draft videos stand in for real project video reels.
// In production, Toolset CPT provides per-project video URLs via ACF field.
import _tv1 from '../../../assets/videos/hero/draft.mp4?url';
import _tv2 from '../../../assets/videos/hero/draft-2.mp4?url';
const _TEST_VIDEOS = [_tv1, _tv2, _tv1];

const projectPattern = [
  {
    client: 'Spribe',
    title: 'ICE London 2024',
    details: ['LED cube · full activation'],
    imageKey: '1924fcc18f',
  },
  {
    client: 'USPEX',
    title: 'SiGMA Central Europe 2025',
    details: ['340 m²'],
    imageKey: '4718629eb6',
    revealClass: 'd1',
  },
  {
    client: 'TrueLabel',
    title: 'SBC Summit Lisbon 2025',
    details: ['Full activation'],
    imageKey: '2e68a16e46',
    revealClass: 'd2',
  },
  {
    client: 'Broadway Platform',
    title: 'ICE Barcelona 2026',
    details: ['209 m² · immersive design'],
    imageKey: '7455542337',
    revealClass: 'd1',
  },
  {
    client: 'Atlaslive',
    title: 'ICE Barcelona 2026',
    details: ['LED wall · bar · activation'],
    imageKey: 'f1b09894df',
    revealClass: 'd2',
  },
];

function createProject(project, index) {
  const displayIndex = String(index + 1).padStart(2, '0');
  // Secondary slide: offset by 5 within the 15-image pool (same pattern key, different index)
  const secondaryIndex = String(((index + 5) % 15) + 1).padStart(2, '0');

  // First 3 projects get a test video between the two images
  const testMedia =
    index < 3
      ? [{ type: 'video', src: _TEST_VIDEOS[index], alt: `${project.client} — відеоогляд` }]
      : [];

  // Project index 3 gets a test YouTube slide to validate the new renderer
  const testYoutube =
    index === 3 ? [{ type: 'youtube', youtubeId: '9NdiHe-aZUc', alt: 'YouTube Video' }] : [];

  return {
    id: `reference-project-${displayIndex}`,
    client: project.client,
    title: project.title,
    details: project.details,
    customerSlug: '',
    tags: [],
    revealClass: project.revealClass || '',
    media: [
      {
        type: 'image',
        src: `/assets/generated/ref/projects-${displayIndex}-${project.imageKey}.png`,
        alt: `${project.client} ${project.title}`,
      },
      ...testMedia,
      ...testYoutube,
      {
        type: 'image',
        src: `/assets/generated/ref/projects-${secondaryIndex}-${project.imageKey}.png`,
        alt: `${project.client} ${project.title} — деталі`,
      },
    ],
  };
}

export const homeProjects = Array.from({ length: 15 }, (_, index) =>
  createProject(projectPattern[index % projectPattern.length], index),
);
