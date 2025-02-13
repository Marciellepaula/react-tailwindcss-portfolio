import Image1 from '../images/Calendar.png';
import Image2 from '../images/LocalAtendimento.png';
import Image3 from '../images/Screenshot_68.png';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/avaliacao.png';
import Image7 from '../images/Screenshot_69.png';
import Image8 from '../images/resumo.png';
import Image9 from '../images/mobile-project-1.jpg';
import Image10 from '../images/web-project-1.jpg';
import Image11 from '../images/Screenshot_56.png'

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectData = [
  {
    id: 1,
    ProjectHeader: {
      title: "ExameMed: Agendamento de Consultas e Exames",
      publishDate: "24 de Agosto, 2024",
      tags: "Laravel / React.JS",
    },
    ProjectImages: [
      { id: 1, title: "UI Design", img: Image1 },
      { id: 2, title: "Web Development", img: Image2 },
      { id: 3, title: "Mobile App", img: Image3 },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Cliente",
      // CompanyInfo: [
      //   { id: 1, title: "Nome", details: "Empresa Ltda" },
      //   { id: 2, title: "Serviços", details: "Desenvolvimento Frontend" },
      //   { id: 3, title: "Site", details: "https://company.com" },
      //   { id: 4, title: "Telefone", details: "55 88 992988838" },
      // ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        "Facilitar o agendamento de consultas e exames médicos de forma rápida e intuitiva.",
      Technologies: [{ title: "Ferramentas & Tecnologias", techs: ["React Native"] }],
      ProjectDetailsHeading: "Desafio",
      ProjectDetails: [
        { id: 1, details: "Desenvolvi e implementei a funcionalidade de cadastro de médicos em um aplicativo de agendamentos, permitindo que os usuários marquem consultas e escolham horários disponíveis. Além disso, integrei a gestão de locais de atendimento e agendamentos na plataforma web, garantindo uma experiência intuitiva e eficiente para pacientes e profissionais de saúde.." },
        { id: 2, details: "Integração com APIs para agendamento em tempo real." },
       
      ],
      SocialSharingHeading: "Compartilhe",
      SocialSharing: [
        { id: 1, name: "Twitter", icon: <FiTwitter />, url: "https://twitter.com/marcielle" },
        { id: 2, name: "Instagram", icon: <FiInstagram />, url: "https://instagram.com/" },
        { id: 3, name: "Facebook", icon: <FiFacebook />, url: "https://facebook.com/" },
        { id: 4, name: "LinkedIn", icon: <FiLinkedin />, url: "https://linkedin.com/" },
        { id: 5, name: "Youtube", icon: <FiYoutube />, url: "https://www.youtube.com/c/marciellepaula" },
      ],
    },
    RelatedProject: {
      title: "Projetos Relacionados",
      Projects: [
        { id: 1, title: "Interface Mobile", img: Image4 },
        { id: 2, title: "Aplicação Web", img: Image5 },
      ],
    },
  },
  {
    id: 2,
    ProjectHeader: {
      title: "Avalia Sol: Avaliador de serviços da prefeitura",
      publishDate: "10 de Julho, 2023",
      tags: "Laravel / Bootstrap/ Jquery",
    },
    ProjectImages: [
      { id: 1, title: "E-commerce UI", img: Image6 },
      { id: 2, title: "Shopping Cart", img: Image7 },
      { id: 3, title: "Shopping Cart", img: Image11 },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Cliente",
      CompanyInfo: [
        { id: 1, title: "Nome", details: "Prefeitura de Sobral." },
        { id: 2, title: "Serviços", details: "Desenvolvimento Web" },
        { id: 3, title: "Site", details: "https://avaliasol.sobral.ce.gov.br/" },
   
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        ".",
      Technologies: [{ title: "Ferramentas & Tecnologias", techs: ["Laravel", "Bootstrap, Jquery"] }],
      ProjectDetailsHeading: "Desafio",
      ProjectDetails: [
        { id: 1, details: "Fui responsável pela manutenção e Desenvolvimento de um sistema de Avaliações baseado em QR Code, desenvolvido com o framework Laravel e Bootstrap. O sistema permite a avaliação de postos de saúde, gerando relatórios detalhados com as notas atribuídas. Além da manutenção, atuei na integração de novos recursos e na utilização de pacotes especializados para a geração automatizada de relatórios, garantindo maior eficiência e precisão na análise dos dados." },
        { id: 2, details: "Garantir alta performance e escalabilidade." },
        { id: 3, details: "Criar e dar manutenção em Gráficos utilizando Graph.js sobre as avaliaçãoes das secretárias, unidades e setores." },
      ],
      SocialSharingHeading: "Compartilhe",
      SocialSharing: [
        { id: 1, name: "Twitter", icon: <FiTwitter />, url: "https://twitter.com/ecommerce" },
        { id: 2, name: "Instagram", icon: <FiInstagram />, url: "https://instagram.com/" },
        { id: 3, name: "Facebook", icon: <FiFacebook />, url: "https://facebook.com/" },
      ],
    },
    RelatedProject: {
      title: "Projetos Relacionados",
      Projects: [
        { id: 1, title: "UI para Lojas Virtuais", img: Image1 },
        { id: 2, title: "Marketplace Digital", img: Image3 },
      ],
    },
  },

  {
    id: 3,
    ProjectHeader: {
      title: "Aplicativo ExameMed: Agendamento de Consultas e Exames",
      publishDate: "24 de Agosto, 2024",
      tags: "Mobile / React Native",
    },
    ProjectImages: [
      { id: 1, title: "UI Design", img: Image1 },
      { id: 2, title: "Web Development", img: Image2 },
      { id: 3, title: "Mobile App", img: Image3 },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Cliente",
      CompanyInfo: [
        { id: 1, title: "Nome", details: "Empresa Ltda" },
        { id: 2, title: "Serviços", details: "Desenvolvimento Frontend" },
        { id: 3, title: "Site", details: "https://company.com" },
        { id: 4, title: "Telefone", details: "55 88 992988838" },
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        "Facilitar o agendamento de consultas e exames médicos de forma rápida e intuitiva.",
      Technologies: [{ title: "Ferramentas & Tecnologias", techs: ["React Native"] }],
      ProjectDetailsHeading: "Desafio",
      ProjectDetails: [
        { id: 1, details: "Desenvolvi um aplicativo completo para o agendamento de exames e consultas médicas, proporcionando uma experiência intuitiva e eficiente para os usuários. " },
        { id: 2, details: " A plataforma conta com integração com o PagSeguro para pagamentos online, garantindo segurança e praticidade nas transações." },
        { id: 3, details:  "Além disso, implementei funcionalidades avançadas, como: Cadastro de médicos e clínicas, permitindo que os usuários escolham profissionais e locais de atendimento." },
        { id: 4, details: " Gestão de horários e disponibilidade, facilitando a marcação e o gerenciamento de consultas." },
        { id: 5, details:  "Lembretes e notificações automáticas, para evitar esquecimentos e melhorar a pontualidade dos pacientes." },
        { id: 6, details:   "Histórico de agendamentos e exames, permitindo fácil acesso a registros anteriores.Suporte para QR Code, possibilitando check-ins rápidos e acesso digital aos detalhes da consulta." },
        { id: 7, details: "Integração com PagSeguro para pagamentos via Cartão de Crédito e Pix." },
      ],
      SocialSharingHeading: "Compartilhe",
      SocialSharing: [
        { id: 1, name: "Twitter", icon: <FiTwitter />, url: "https://twitter.com/marcielle" },
        { id: 2, name: "Instagram", icon: <FiInstagram />, url: "https://instagram.com/" },
        { id: 3, name: "Facebook", icon: <FiFacebook />, url: "https://facebook.com/" },
        { id: 4, name: "LinkedIn", icon: <FiLinkedin />, url: "https://linkedin.com/" },
        { id: 5, name: "Youtube", icon: <FiYoutube />, url: "https://www.youtube.com/c/marciellepaula" },
      ],
    },
    RelatedProject: {
      title: "Projetos Relacionados",
      Projects: [
        { id: 1, title: "Interface Mobile", img: Image4 },
        { id: 2, title: "Aplicação Web", img: Image5 },
      ],
    },
  },
];