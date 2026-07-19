export type SourceId = 'gm' | 'player' | 'trinity' | 'talagaad-guide' | 'talagaad-adventures';

export interface Source {
  id: SourceId;
  title: string;
  icon: string;
}

export const sources: Source[] = [
  { id: 'gm', title: 'Руководство ведущего', icon: 'Crown' },
  { id: 'player', title: 'Руководство игрока', icon: 'UserRound' },
  { id: 'trinity', title: 'Жажда Троицы', icon: 'Droplets' },
  { id: 'talagaad-guide', title: 'Путеводитель по Талагааду', icon: 'MapPinned' },
  { id: 'talagaad-adventures', title: 'Приключения в Талагааде', icon: 'Compass' },
];

export interface CreatureAttack {
  name: string;
  range: string;
  formula: string;
  damage: string;
  rounds: string;
}

export interface CreatureAbility {
  name: string;
  description: string;
  linkEntryId?: string;
}

export interface CreatureStatBlock {
  characteristics: { code: string; value: number }[];
  speed: string;
  wounds: number;
  type: string;
  skills: string[];
  attacks: CreatureAttack[];
  defenses: string[];
  abilities: CreatureAbility[];
}

export interface CodexEntry {
  id: string;
  title: string;
  section: SectionId;
  source: SourceId;
  summary: string;
  tags: string[];
  meta?: string;
  category?: ItemCategoryId;
  stats?: { label: string; value: string }[];
  subgroup?: string;
  creatureStats?: CreatureStatBlock;
}

export interface Subgroup {
  id: string;
  title: string;
  sectionId: SectionId;
  sourceId: SourceId;
}

export const subgroups: Subgroup[] = [
  { id: 'talabek', title: 'Великое герцогство Талабек', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'bretonnia', title: 'Королевство Бретония', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'osterlund', title: 'Великое графство Остерлунд', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'reikland', title: 'Княжество Рейкланд', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'witches', title: 'Ведьмы и колдуны', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'beastmen', title: 'Ревучие стада зверолюдов', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'orcs-goblins', title: 'Племена орков и гоблинов', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'undead', title: 'Нежить', sectionId: 'creatures', sourceId: 'gm' },
  { id: 'great-forest', title: 'Чудовища Великого леса', sectionId: 'creatures', sourceId: 'gm' },
];

export type ItemCategoryId = 'melee' | 'throwing' | 'ranged' | 'armor';

export interface ItemCategory {
  id: ItemCategoryId;
  title: string;
  icon: string;
}

export const itemCategories: ItemCategory[] = [
  { id: 'melee', title: 'Ближний бой', icon: 'Sword' },
  { id: 'throwing', title: 'Метательное оружие', icon: 'Target' },
  { id: 'ranged', title: 'Дальний бой', icon: 'Crosshair' },
  { id: 'armor', title: 'Доспехи', icon: 'ShieldHalf' },
];

export type SectionId = 'rules' | 'creatures' | 'items' | 'magic' | 'contacts';

export interface Section {
  id: SectionId;
  title: string;
  icon: string;
  description: string;
  sourceIds?: SourceId[];
}

export const defaultSourceIds: SourceId[] = ['gm', 'player'];

export const sections: Section[] = [
  { id: 'rules', title: 'Правила', icon: 'ScrollText', description: 'Механики, характеристики, броски и боевая система' },
  {
    id: 'creatures', title: 'Персонажи ведущего', icon: 'Skull',
    description: 'Готовые NPC, чудовища и противники для сюжетных встреч: характеристики, повадки и советы по отыгрышу',
    sourceIds: ['gm', 'trinity', 'talagaad-guide', 'talagaad-adventures'],
  },
  { id: 'items', title: 'Предметы', icon: 'Sword', description: 'Оружие, доспехи, артефакты и снаряжение' },
  { id: 'magic', title: 'Магия', icon: 'Sparkles', description: 'Ветра магии, заклинания и колдовские традиции' },
  { id: 'contacts', title: 'Контакты', icon: 'Feather', description: 'Гильдия мастеров и связь с летописцами' },
];

export const entries: CodexEntry[] = [
  {
    id: 'r1', section: 'rules', source: 'player', title: 'Проверки характеристик',
    summary: 'Базовый бросок d100: если результат равен или ниже значения навыка — успех. Модификаторы применяются к целевому числу.',
    tags: ['d100', 'проверка', 'навыки', 'бросок'], meta: 'Глава I',
  },
  {
    id: 'r2', section: 'rules', source: 'player', title: 'Инициатива и порядок ходов',
    summary: 'В начале раунда участники бросают d10 + Ловкость. Действует правило от большего к меньшему; при ничьей ходит персонаж с большей Ловкостью.',
    tags: ['инициатива', 'бой', 'раунд', 'ловкость'], meta: 'Глава IV',
  },
  {
    id: 'r3', section: 'rules', source: 'gm', title: 'Критические ранения',
    summary: 'При двойном совпадении цифр (11, 22, 33…) в успешной атаке наносится критический эффект по таблице ранений соответствующей части тела.',
    tags: ['крит', 'ранение', 'урон', 'таблица'], meta: 'Глава V',
  },
  {
    id: 'r4', section: 'rules', source: 'player', title: 'Очки судьбы',
    summary: 'Позволяют перебросить неудачный бросок или избежать верной гибели. Восстанавливаются в начале сессии по решению Мастера Игры.',
    tags: ['судьба', 'переброс', 'удача'], meta: 'Глава II',
  },
  {
    id: 'r5', section: 'rules', source: 'player', title: 'Помощь',
    summary: 'Персонаж может ПОМОЧЬ союзнику совершить проверку или атаку в рукопашном бою. Помогающий не проходит собственную проверку — вместо этого цель его помощи получает +1d к своей проверке за каждого помогающего, если иное не указано особыми правилами или способностями.',
    tags: ['помощь', 'кооперация', 'проверка', 'атака'], meta: 'Глава III',
  },
  {
    id: 'c5', section: 'creatures', source: 'gm', title: 'Имперский крестьянин', subgroup: 'Великое герцогство Талабек',
    summary: 'Простой землепашец Талабека, привыкший постоять за свой дом. В одиночку слаб, но в толпе с факелами и вилами способен смять даже опытного бойца численным превосходством.',
    tags: ['крестьянин', 'талабек', 'империя', 'прислужник'], meta: 'Угроза: низкая',
    creatureStats: {
      characteristics: [
        { code: 'ББ', value: 2 },
        { code: 'ДБ', value: 3 },
        { code: 'С', value: 3 },
        { code: 'В', value: 3 },
        { code: 'И', value: 2 },
        { code: 'Пр', value: 3 },
        { code: 'Р', value: 2 },
        { code: 'Х', value: 2 },
      ],
      speed: 'Нормальная',
      wounds: 3,
      type: 'Прислужник',
      skills: ['обычные 2', 'тяжёлый труд 3'],
      attacks: [
        { name: 'Охотничий лук', range: 'Средняя-дальняя', formula: '3d/2', damage: '3', rounds: '2Р' },
        { name: 'Импровизированное оружие', range: 'Ближняя', formula: '2d/2', damage: '2', rounds: '1Р' },
      ],
      defenses: ['Атлетика 3d/2'],
      abilities: [
        {
          name: 'Факелы и вилы',
          description: 'Толпа разъярённых крестьян может подавить противника численным преимуществом. Когда крестьянин ПОМОГАЕТ союзнику совершить атаку в рукопашном бою, проверка не требуется — цель получает +1d к проверке атаки. Этот модификатор может превышать обычный максимальный лимит костей.',
          linkEntryId: 'r5',
        },
      ],
    },
  },
  {
    id: 'i1', section: 'items', source: 'player', title: 'Рунический молот гномов', category: 'melee',
    summary: 'Выкованное в кузнях Караз-а-Карака оружие с рунами Мастера. Игнорирует часть доспеха и наносит бонусный урон демонам.',
    tags: ['молот', 'руны', 'гномы', 'оружие'], meta: 'Артефакт',
  },
  {
    id: 'i2', section: 'items', source: 'player', title: 'Ithilmar-доспех', category: 'armor',
    summary: 'Лёгкий эльфийский сплав, дающий защиту тяжёлой брони при весе кожаной. Ценится дороже золота.',
    tags: ['доспех', 'итильмар', 'эльфы', 'защита'], meta: 'Редкий',
  },
  {
    id: 'i3', section: 'items', source: 'player', title: 'Хохландская длинная винтовка', category: 'ranged',
    summary: 'Дальнобойное огнестрельное оружие Империи. Требует раунд на перезарядку, но пробивает любой доспех на дистанции.',
    tags: ['винтовка', 'порох', 'империя', 'дальний бой'], meta: 'Снаряжение',
  },
  {
    id: 'i4', section: 'items', source: 'player', title: 'Метательное копьё', category: 'throwing',
    summary: 'Метательное копьё: оружие, также известное как дротик. Оно часто применяется всадниками норскийских мародёров и другими отрядами конных застрельщиков для поддержки во время стремительного сближения с противником перед переходом в ближний бой.',
    tags: ['копьё', 'дротик', 'мародёры', 'метательное'], meta: 'Снаряжение',
    stats: [
      { label: 'Название', value: 'Метательное копьё' },
      { label: 'Мин. цена', value: 'Медь' },
      { label: 'Оптимальная дистанция', value: 'Ближняя-средняя' },
      { label: 'Урон', value: 'С' },
      { label: '1Р/2Р', value: '1Р' },
      { label: 'Черты', value: '—' },
    ],
  },
  {
    id: 'i5', section: 'items', source: 'player', title: 'Камень', category: 'throwing',
    summary: 'Камень: хотя камни и подобные предметы не являются боевым оружием, при должном усилии они способны нанести серьёзные травмы или оставить тяжёлые ушибы.',
    tags: ['камень', 'подручное', 'метательное'], meta: 'Подручное',
    stats: [
      { label: 'Название', value: 'Камень' },
      { label: 'Мин. цена', value: '—' },
      { label: 'Оптимальная дистанция', value: 'Короткая-средняя' },
      { label: 'Урон', value: '—' },
      { label: '1Р/2Р', value: '—' },
      { label: 'Черты', value: 'Не может нанести РАНУ (за исключением случаев, когда противник уже находится в СОСТОЯНИИ ошеломления)' },
    ],
  },
  {
    id: 'm1', section: 'magic', source: 'player', title: 'Ветер Азир (Небеса)',
    summary: 'Голубой ветер магии предвидения и молний. Даёт заклинания призыва бури и прорицания судьбы противника.',
    tags: ['азир', 'небеса', 'ветер', 'молния'], meta: 'Ветер магии',
  },
  {
    id: 'm2', section: 'magic', source: 'player', title: 'Клятвенный огонь Аквши',
    summary: 'Заклинание Багрового ветра: столб пламени, поглощающий врагов и усиливающийся против трусливых противников.',
    tags: ['аквши', 'огонь', 'пламя', 'заклинание'], meta: 'Заклинание',
  },
  {
    id: 'm3', section: 'magic', source: 'gm', title: 'Ветер Шиш (Смерть)',
    summary: 'Фиолетовый ветер увядания. Некроманты вытягивают жизнь из живых и поднимают павших воинов.',
    tags: ['шиш', 'смерть', 'некромантия', 'нежить'], meta: 'Ветер магии',
  },
];