const teams = [
  {
    id: 'thunder',
    name: 'ThundeRatz',
    instagram: 'https://www.instagram.com/thunderatz/',
    facebook: 'https://fb.com/thunderatz',
    github: 'https://github.com/ThundeRatz',
    site: 'https://thunderatz.org/',
    youtube: 'https://www.youtube.com/c/thunderatz',
    cover: './img/back_tr.jpg',
    logo: './img/logo_tr.png',
    desc: 'Equipe de robótica fundada em 2001. Participa de competições nacionais e internacionais com robôs de diversas categorias, como combate, sumô, hockey e projetos autônomos. Atualmente conta com, aproximadamente, 70 membros, distribuídos entre as áreas de mecânica, elétrica, computação, design e administrativo.'
  },
  {
    id: 'milhagem',
    name: 'PoliMilhagem',
    instagram: 'https://www.instagram.com/polimilhagem/',
    facebook: 'https://www.facebook.com/PoliMilhagem',
    github: '',
    site: 'https://pmilhagem.wixsite.com/polimilhagem',
    youtube: 'https://www.youtube.com/channel/UCcn3NmNhqWIoj7IB-Tb0eEQ',
    cover: './img/back_milh.jpg',
    logo: './img/logo_milh.png',
    desc: 'Equipe fundada em 2006, cujo objetivo é projetar e fabricar protótipos automotivos de alta eficiência. Todos os anos a equipe participa da competição Shell Eco-Marathon com seus protótipos elétrico e à gasolina. É composta por 30 pessoas, divididas nas áreas de estrutura e carenagem, eletrônica, manufatura, powertrain (carro elétrico e à gasolina) e administração.'
  },
  {
    id: 'baja',
    name: 'Equipe Poli de Baja',
    instagram: 'https://www.instagram.com/polibaja/',
    facebook: 'https://www.facebook.com/polibaja',
    github: '',
    site: 'https://www.equipepoli.com.br/',
    youtube: 'https://www.youtube.com/c/EquipePoli',
    cover: './img/back_baja.jpg',
    logo: './img/logo_baja.png',
    desc: 'Equipe de baja fundada em 2001. Todos os anos desenvolve um novo protótipo de carro offroad, conciliando conceitos dinâmicos e de design de veículos, com o objetivo de participar de competições nacionais e internacionais. Atualmente conta com, aproximadamente, 25 membros, distribuídos no setor de projetos – chassi, powertrain e eletrônica – e planejamento – RH, comunicação e marketing.'
  },
  {
    id: 'epr',
    name: 'Equipe Poli Racing',
    instagram: 'https://www.instagram.com/equipepoliracing/',
    facebook: 'https://www.facebook.com/poliracing',
    github: '',
    site: 'https://www.poliracing.com/',
    youtube: 'https://www.youtube.com/channel/UCcna6CUttopPv-FJjnXpz9A',
    cover: './img/back_epr.jpg',
    logo: './img/logo_epr.png',
    desc: 'Equipe de fórmula SAE fundada em 2008. A cada ano a equipe desenvolve um novo carro de corrida para a participação na Competição Fórmula SAE Brasil. Os mais de 70 membros da equipe se dividem em 7 subsistemas técnicos de aerodinâmica, chassi, elétrica, freios, motor, suspensão e direção, e transmissão. Além destes, existem também 3 subsistemas estratégicos: administração, marketing e manufatura.'
  },
  {
    id: 'gear',
    name: 'Gear Poli',
    instagram: '',
    facebook: 'https://www.facebook.com/gearpoli',
    github: '',
    site: 'https://www.gearpoli.com.br/',
    youtube: '',
    cover: './img/back_nautico.jpg',
    logo: './svg/gear_full.svg',
    desc: ''
  },
  {
    id: 'kf',
    name: 'Keep Flying',
    instagram: 'https://www.instagram.com/keepflyingpoliusp/',
    facebook: 'https://www.facebook.com/polikf',
    github: '',
    site: '',
    youtube: 'https://www.youtube.com/user/polikf',
    cover: './img/back_kf.jpg',
    logo: './img/logo_kf.png',
    desc: 'Equipe de fundada em 2003 com o objetivo de desenvolver protótipos de aerodesign estáveis e eficientes para participar de competições nacionais e internacionais. Possui mais de 30 membros, distribuídos no setor de projeto – aerodinâmica, estabilidade e controle, desempenho, estruturas e ensaios estruturais, cargas e aeroelasticidade, e elétrica – e de suporte – prototipagem digital, e administração e marketing.'
  },
  {
    id: 'jupiter',
    name: 'Projeto Jupiter',
    instagram: 'https://www.instagram.com/projetojupiter/',
    facebook: 'https://www.facebook.com/ProjetoJupiter',
    github: 'https://github.com/Projeto-Jupiter',
    site: 'https://projetojupiter.com/',
    youtube: 'https://www.youtube.com/c/ProjetoJupiter',
    cover: './img/back_jupiter.jpg',
    logo: './img/logo_jupiter.png',
    desc: 'Fundado em 2015 por 7 pessoas, hoje o Projeto Jupiter conta com mais de 60 membros da USP dedicados em pesquisar, projetar e construir foguetes para participação em competições nacionais e internacionais, além de efetuar lançamentos próprios. Se divide nas áreas técnicas de aerodinâmica, propulsão, recuperação e sistemas eletrônicos; nas áreas administrativas de financeiro e marketing; e nas comissões de segurança e RH.'
  },
  {
    id: 'nautico',
    name: 'Poli Náutico',
    instagram: 'https://www.instagram.com/polinautico/',
    facebook: 'https://www.facebook.com/polinautico',
    github: '',
    site: 'https://www.polinautico.com/',
    youtube: 'https://www.youtube.com/channel/UCd6-SdiDiMegbuz2sDGONTQ',
    cover: './img/back_nautico.jpg',
    logo: './img/logo_nautico.png',
    desc: 'Equipe fundada em 2014 voltado para a construção de embarcações de competição e para a inovação náutica. A maior competição da qual participa é o Desafio Universitário de Nautidesign (DUNA), conquistando boas colocações nos últimos anos. Conta com mais de 30 membros, divididos nas quatro áreas de casco, propulsão, elétrica e comunicação, financeiro e artes.'
  },
  {
    id: 'sky',
    name: 'Skyrats',
    instagram: 'https://www.instagram.com/skyrats_drones/',
    facebook: 'https://www.facebook.com/skyrats',
    github: 'https://github.com/SkyRats',
    site: '',
    youtube: 'https://www.youtube.com/channel/UCqfS69jrelthOP8OVZx0E7w',
    cover: './img/back_skyrats.jpg',
    logo: './img/logo_skyrats.png',
    desc: ''
  }
];

export default teams;