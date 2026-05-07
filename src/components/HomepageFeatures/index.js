import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modelos de IA (IV)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Introducción al modelado y despliegue de soluciones basadas en Inteligencia Artificial.
      </>
    ),
  },
  {
    title: 'Programación (1WV)',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Fundamentos de desarrollo de software, algoritmos y lógica de programación esencial.
      </>
    ),
  },
  {
    title: 'Programación con IA (2WV)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Uso de herramientas de IA generativa para optimizar el flujo de trabajo de programación.
      </>
    ),
  },
  {
    title: 'Programación de Servicios y Procesos (2MV)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Gestión de procesos, hilos y comunicaciones en red en aplicaciones distribuidas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
